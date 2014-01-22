//JavaScript load Emscripten created dynamic library  
//Created by Joey

var keycode=0;
var mouseevent={};
function DoInitializeEnviroment(env)
{
	globalScope._dlopen=function(name,mode){
	   name=Pointer_stringify(name);
	   name=name.split("/");
	   name=name[name.length-1]+'.js';
	   if(name.indexOf("lib")!=0) {
		   name='lib'+name;
	   }
	   return RuntimeSymbol.hlibs[name].hinst;
	}
    globalScope._dlclose=function(handle){
       return 0;
    }
	globalScope._dlsym=function(handle,symbol){
	   var hlib=null;
	   name='_'+Pointer_stringify(symbol);
	   for(var i in RuntimeSymbol.hlibs){
		  if(RuntimeSymbol.hlibs[i].hinst==handle){
		 hlib=RuntimeSymbol.hlibs[i].hlib;
		 break;
	    } 
	   }
	   if(!hlib || !hlib.hasOwnProperty(name))return null;
       FUNCTION_TABLE.push(hlib[name]);
	   FUNCTION_TABLE.push(0);
	   return FUNCTION_TABLE.length-2;
	}
	globalScope.onkeydown = function(ev){
		keycode=ev.keyCode;
	}
	globalScope.onmousemove=function(e){
		mouseevent.ev=0;
		mouseevent.x=parseInt(e.clientX);
		mouseevent.y=parseInt(e.clientY);
		mouseevent.button=parseInt(e.which);
	}
	globalScope.onmousedown=function(e){
		mouseevent.ev=1;
		mouseevent.x=parseInt(e.clientX);
		mouseevent.y=parseInt(e.clientY);
		mouseevent.button=parseInt(e.which);
	}
	globalScope.onmouseup=function(e){
		mouseevent.ev=2;
		mouseevent.x=parseInt(e.clientX);
		mouseevent.y=parseInt(e.clientY);
		mouseevent.button=parseInt(e.which);
	}
	function ExportSymbol(libs,symbols,i){
	   libs.forEach(function(lib){
		 (function (lib,i){
		   if (symbols[i]==false && globalScope && lib.hasOwnProperty(i)) {
			 globalScope[i] = lib[i];
			 symbols[i]=true;
			 }
		 })(lib,i);
	  });
	}
	
	RuntimeSymbol.hlibs={};
	var libs=[];

    RuntimeSymbol.libs.forEach(function(lib,idx){
        RuntimeSymbol.hlibs[lib]={};
        RuntimeSymbol.hlibs[lib].hinst=1000+idx;
        var info=delayLoadFileStatus.jsfile[lib];
        if(!globalScope.hasOwnProperty('_'+info.name.replace(/\./g, '_'))){
                globalEval(info.js);
        }
        RuntimeSymbol.hlibs[lib].hlib=new globalScope['_'+lib.replace(/\./g, '_')](FUNCTION_TABLE.length,this.Module);
                libs.push(RuntimeSymbol.hlibs[lib].hlib);

        for (var i in RuntimeSymbol.func){
            ExportSymbol(libs,RuntimeSymbol.func,i);
        } 
        for (var i in RuntimeSymbol.variable){
            ExportSymbol(libs,RuntimeSymbol.variable,i);
        }
        if(RuntimeSymbol.hlibs[lib].hlib.hasOwnProperty('_main')) {
            RuntimeSymbol._main=RuntimeSymbol.hlibs[lib].hlib._main;

        }
    });  
}
function JSEntry(argc,argv,obj)
{
     DoInitializeEnviroment(this);
     RuntimeSymbol._main(argc, argv, 0);
}

function GetFunction(name)
{
    var func;
    switch(name){
     case 'RequestAnimation':
       func=function (s){
          var callback=s;
          webkitRequestAnimationFrame(function req(){
                callback();
                webkitRequestAnimationFrame(req);
          });

       }
       break;
	case 'keycode':
		func=function (){
			var key=keycode;
			keycode=0;
			return key;
		}
		break;
	case 'mouse':
		func=function (item){
			var val;
			switch(item) {
			case 0:
				val=mouseevent.ev;
				break;
			case 1:
				val=mouseevent.x;
				break;
			case 2:
				val=mouseevent.y;
				break;
			case 3:
				val=mouseevent.button;
				break;
			}
			mouseevent.ev=10;
			return val;
		}
		break;
    }
    return func;
}


