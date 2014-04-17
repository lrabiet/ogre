// Note: Some Emscripten settings will significantly limit the speed of the generated code.
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
var _libPlugin_ParticleFX_so_js=(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } },{ func: function() { __GLOBAL__I_a() } },{ func: function() { __GLOBAL__I_a107() } });
var __str999;
__str999=allocate([67,111,108,111,117,114,70,97,100,101,114,50,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str999"] = __str999;
var __str974;
__str974=allocate([120,32,62,32,48,32,38,38,32,120,32,60,32,49,46,48,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str974"] = __str974;
var __str962;
__str962=allocate([68,101,116,101,114,109,105,110,101,115,32,119,104,101,116,104,101,114,32,116,104,101,32,118,101,108,111,99,105,116,121,32,111,102,32,116,104,101,32,112,97,114,116,105,99,108,101,115,32,105,115,32,99,104,97,110,103,101,100,46,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str962"] = __str962;
var __str951;
__str951=allocate([84,104,101,32,97,109,111,117,110,116,32,111,102,32,98,111,117,110,99,105,110,103,32,119,104,101,110,32,97,32,112,97,114,116,105,99,108,101,32,105,115,32,100,101,102,108,101,99,116,101,100,46,32,48,32,109,101,97,110,115,32,110,111,32,100,101,102,108,101,99,116,105,111,110,32,97,110,100,32,49,32,115,116,97,110,100,115,32,102,111,114,32,49,48,48,32,112,101,114,99,101,110,116,32,114,101,102,108,101,99,116,105,111,110,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str951"] = __str951;
var __str933;
__str933=allocate([73,110,118,97,108,105,100,80,97,114,97,109,101,116,101,114,115,69,120,99,101,112,116,105,111,110,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str933"] = __str933;
var __str915;
__str915=allocate([67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str915"] = __str915;
var __str9133;
__str9133=allocate([114,111,116,97,116,105,111,110,95,114,97,110,103,101,95,115,116,97,114,116,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str9133"] = __str9133;
var __str91;
__str91=allocate([80,97,114,116,105,99,108,101,70,88,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str91"] = __str91;
var __str9;
__str9=allocate([98,97,115,105,99,95,115,116,114,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str9"] = __str9;
var __str898;
__str898=allocate([67,111,108,111,117,114,73,109,97,103,101,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str898"] = __str898;
var __str887;
__str887=allocate([97,100,100,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str887"] = __str887;
var __str873;
__str873=allocate([46,46,47,46,46,47,46,46,47,80,108,117,103,73,110,115,47,80,97,114,116,105,99,108,101,70,88,47,115,114,99,47,79,103,114,101,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,46,99,112,112,0,0], "i8", ALLOC_NORMAL);
Module["__str873"] = __str873;
var __str87;
__str87=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,103,114,101,101,110,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str87"] = __str87;
var __str861;
__str861=allocate([107,101,101,112,95,118,101,108,111,99,105,116,121,0,0,0], "i8", ALLOC_NORMAL);
Module["__str861"] = __str861;
var __str850;
__str850=allocate([98,111,117,110,99,101,0,0], "i8", ALLOC_NORMAL);
Module["__str850"] = __str850;
var __str840;
__str840=allocate([32,116,105,109,101,46,0,0], "i8", ALLOC_NORMAL);
Module["__str840"] = __str840;
var __str8132;
__str8132=allocate([84,104,101,32,101,110,100,32,111,102,32,97,32,114,97,110,103,101,32,111,102,32,114,111,116,97,116,105,111,110,32,115,112,101,101,100,32,116,111,32,98,101,32,97,115,115,105,103,110,101,100,32,116,111,32,101,109,105,116,116,101,100,32,112,97,114,116,105,99,108,101,115,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str8132"] = __str8132;
var __str80;
__str80=allocate([76,105,110,101,97,114,70,111,114,99,101,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str80"] = __str80;
var __str8;
__str8=allocate([68,101,112,116,104,32,111,102,32,116,104,101,32,115,104,97,112,101,32,105,110,32,119,111,114,108,100,32,99,111,111,114,100,105,110,97,116,101,115,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str8"] = __str8;
var __str797;
__str797=allocate([67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str797"] = __str797;
var __str786;
__str786=allocate([97,118,101,114,97,103,101,0], "i8", ALLOC_NORMAL);
Module["__str786"] = __str786;
var __str772;
__str772=allocate([40,120,32,62,32,48,41,32,38,38,32,40,120,32,60,32,49,46,48,41,32,38,38,32,40,121,32,62,32,48,41,32,38,38,32,40,121,32,60,32,49,46,48,41,32,38,38,32,40,122,32,62,32,48,41,32,38,38,32,40,122,32,60,32,49,46,48,41,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str772"] = __str772;
var __str760;
__str760=allocate([84,104,101,32,112,101,114,99,101,110,116,97,103,101,32,111,102,32,112,97,114,116,105,99,108,101,115,32,119,104,105,99,104,32,105,115,32,97,102,102,101,99,116,101,100,46,0,0], "i8", ALLOC_NORMAL);
Module["__str760"] = __str760;
var __str76;
__str76=allocate([103,114,101,101,110,0,0,0], "i8", ALLOC_NORMAL);
Module["__str76"] = __str76;
var __str749;
__str749=allocate([84,104,101,32,110,111,114,109,97,108,32,118,101,99,116,111,114,32,111,102,32,116,104,101,32,100,101,102,108,101,99,116,111,114,32,112,108,97,110,101,46,32,84,111,103,101,116,104,101,114,32,119,105,116,104,32,116,104,101,32,112,111,105,110,116,32,105,116,32,100,101,102,105,110,101,115,32,116,104,101,32,112,108,97,110,101,46,0], "i8", ALLOC_NORMAL);
Module["__str749"] = __str749;
var __str7131;
__str7131=allocate([114,111,116,97,116,105,111,110,95,115,112,101,101,100,95,114,97,110,103,101,95,101,110,100,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str7131"] = __str7131;
var __str7121;
__str7121=allocate([121,32,62,32,48,32,38,38,32,121,32,60,32,49,46,48,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str7121"] = __str7121;
var __str7;
__str7=allocate([100,101,112,116,104,0,0,0], "i8", ALLOC_NORMAL);
Module["__str7"] = __str7;
var __str696;
__str696=allocate([83,99,97,108,101,114,0,0], "i8", ALLOC_NORMAL);
Module["__str696"] = __str696;
var __str685;
__str685=allocate([72,111,119,32,116,111,32,97,112,112,108,121,32,116,104,101,32,102,111,114,99,101,32,118,101,99,116,111,114,32,116,111,32,112,97,114,116,105,99,108,101,115,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str685"] = __str685;
var __str671;
__str671=allocate([105,110,110,101,114,95,100,101,112,116,104,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str671"] = __str671;
var __str67;
__str67=allocate([72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,0], "i8", ALLOC_NORMAL);
Module["__str67"] = __str67;
var __str66;
__str66=allocate([69,108,108,105,112,115,111,105,100,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str66"] = __str66;
var __str659;
__str659=allocate([115,99,111,112,101,0,0,0], "i8", ALLOC_NORMAL);
Module["__str659"] = __str659;
var __str65;
__str65=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,114,101,100,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str65"] = __str65;
var __str648;
__str648=allocate([112,108,97,110,101,95,110,111,114,109,97,108,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str648"] = __str648;
var __str639;
__str639=allocate([83,116,97,103,101,32,0,0], "i8", ALLOC_NORMAL);
Module["__str639"] = __str639;
var __str631;
__str631=allocate([46,46,47,46,46,47,46,46,47,80,108,117,103,73,110,115,47,80,97,114,116,105,99,108,101,70,88,47,115,114,99,47,79,103,114,101,67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,46,99,112,112,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str631"] = __str631;
var __str6130;
__str6130=allocate([84,104,101,32,115,116,97,114,116,32,111,102,32,97,32,114,97,110,103,101,32,111,102,32,114,111,116,97,116,105,111,110,32,115,112,101,101,100,32,116,111,32,98,101,32,97,115,115,105,103,110,101,100,32,116,111,32,101,109,105,116,116,101,100,32,112,97,114,116,105,99,108,101,115,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str6130"] = __str6130;
var __str6120;
__str6120=allocate([46,46,47,46,46,47,46,46,47,80,108,117,103,73,110,115,47,80,97,114,116,105,99,108,101,70,88,47,115,114,99,47,79,103,114,101,82,105,110,103,69,109,105,116,116,101,114,46,99,112,112,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str6120"] = __str6120;
var __str6;
__str6=allocate([72,101,105,103,104,116,32,111,102,32,116,104,101,32,115,104,97,112,101,32,105,110,32,119,111,114,108,100,32,99,111,111,114,100,105,110,97,116,101,115,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str6"] = __str6;
var __str595;
__str595=allocate([82,111,116,97,116,111,114,0], "i8", ALLOC_NORMAL);
Module["__str595"] = __str595;
var __str584;
__str584=allocate([102,111,114,99,101,95,97,112,112,108,105,99,97,116,105,111,110,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str584"] = __str584;
var __str570;
__str570=allocate([105,110,110,101,114,95,104,101,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str570"] = __str570;
var __str558;
__str558=allocate([84,104,101,32,97,109,111,117,110,116,32,111,102,32,114,97,110,100,111,109,110,101,115,115,32,40,99,104,97,111,115,41,32,116,111,32,97,112,112,108,121,32,116,111,32,116,104,101,32,112,97,114,116,105,99,108,101,32,109,111,118,101,109,101,110,116,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str558"] = __str558;
var __str55;
__str55=allocate([68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str55"] = __str55;
var __str547;
__str547=allocate([65,32,112,111,105,110,116,32,111,110,32,116,104,101,32,100,101,102,108,101,99,116,111,114,32,112,108,97,110,101,46,32,84,111,103,101,116,104,101,114,32,119,105,116,104,32,116,104,101,32,110,111,114,109,97,108,32,118,101,99,116,111,114,32,105,116,32,100,101,102,105,110,101,115,32,116,104,101,32,112,108,97,110,101,46,0,0,0], "i8", ALLOC_NORMAL);
Module["__str547"] = __str547;
var __str54;
__str54=allocate([114,101,100,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str54"] = __str54;
var __str530;
__str530=allocate([67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,58,58,95,108,111,97,100,73,109,97,103,101,0], "i8", ALLOC_NORMAL);
Module["__str530"] = __str530;
var __str5129;
__str5129=allocate([114,111,116,97,116,105,111,110,95,115,112,101,101,100,95,114,97,110,103,101,95,115,116,97,114,116,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str5129"] = __str5129;
var __str5119;
__str5119=allocate([120,32,62,32,48,32,38,38,32,120,32,60,32,49,46,48,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str5119"] = __str5119;
var __str5;
__str5=allocate([104,101,105,103,104,116,0,0], "i8", ALLOC_NORMAL);
Module["__str5"] = __str5;
var __str494;
__str494=allocate([68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str494"] = __str494;
var __str483;
__str483=allocate([84,104,101,32,118,101,99,116,111,114,32,114,101,112,114,101,115,101,110,116,105,110,103,32,116,104,101,32,102,111,114,99,101,32,116,111,32,97,112,112,108,121,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str483"] = __str483;
var __str469;
__str469=allocate([80,97,114,97,109,101,116,114,105,99,32,118,97,108,117,101,32,100,101,115,99,114,105,98,105,110,103,32,116,104,101,32,112,114,111,112,111,114,116,105,111,110,32,111,102,32,116,104,101,32,115,104,97,112,101,32,119,104,105,99,104,32,105,115,32,104,111,108,108,111,119,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str469"] = __str469;
var __str457;
__str457=allocate([114,97,110,100,111,109,110,101,115,115,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str457"] = __str457;
var __str446;
__str446=allocate([112,108,97,110,101,95,112,111,105,110,116,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str446"] = __str446;
var __str44;
__str44=allocate([68,101,102,108,101,99,116,111,114,80,108,97,110,101,0,0], "i8", ALLOC_NORMAL);
Module["__str44"] = __str44;
var __str438;
__str438=allocate([99,111,108,111,117,114,0,0], "i8", ALLOC_NORMAL);
Module["__str438"] = __str438;
var __str43;
__str43=allocate([67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str43"] = __str43;
var __str429;
__str429=allocate([69,114,114,111,114,58,32,73,109,97,103,101,32,105,115,32,110,111,116,32,97,99,99,101,115,115,105,98,108,101,32,40,114,103,98,97,41,32,105,109,97,103,101,46,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str429"] = __str429;
var __str4128;
__str4128=allocate([82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str4128"] = __str4128;
var __str4118;
__str4118=allocate([105,110,110,101,114,95,104,101,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str4118"] = __str4118;
var __str4;
__str4=allocate([87,105,100,116,104,32,111,102,32,116,104,101,32,115,104,97,112,101,32,105,110,32,119,111,114,108,100,32,99,111,111,114,100,105,110,97,116,101,115,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str4"] = __str4;
var __str393;
__str393=allocate([68,101,102,108,101,99,116,111,114,80,108,97,110,101,0,0], "i8", ALLOC_NORMAL);
Module["__str393"] = __str393;
var __str382;
__str382=allocate([102,111,114,99,101,95,118,101,99,116,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str382"] = __str382;
var __str368;
__str368=allocate([105,110,110,101,114,95,119,105,100,116,104,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str368"] = __str368;
var __str36;
__str36=allocate([67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str36"] = __str36;
var __str356;
__str356=allocate([68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str356"] = __str356;
var __str345;
__str345=allocate([68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,0,0], "i8", ALLOC_NORMAL);
Module["__str345"] = __str345;
var __str337;
__str337=allocate([67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,65,102,102,101,99,116,111,114,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str337"] = __str337;
var __str328;
__str328=allocate([105,109,97,103,101,32,119,104,101,114,101,32,116,104,101,32,99,111,108,111,117,114,115,32,99,111,109,101,32,102,114,111,109,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str328"] = __str328;
var __str3144;
__str3144=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,120,32,97,110,100,32,121,32,115,99,97,108,101,32,99,111,109,112,111,110,101,110,116,115,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str3144"] = __str3144;
var __str3117;
__str3117=allocate([80,97,114,97,109,101,116,114,105,99,32,118,97,108,117,101,32,100,101,115,99,114,105,98,105,110,103,32,116,104,101,32,112,114,111,112,111,114,116,105,111,110,32,111,102,32,116,104,101,32,115,104,97,112,101,32,119,104,105,99,104,32,105,115,32,104,111,108,108,111,119,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str3117"] = __str3117;
var __str3;
__str3=allocate([119,105,100,116,104,0,0,0], "i8", ALLOC_NORMAL);
Module["__str3"] = __str3;
var __str281;
__str281=allocate([76,105,110,101,97,114,70,111,114,99,101,65,102,102,101,99,116,111,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str281"] = __str281;
var __str25;
__str25=allocate([67,111,108,111,117,114,73,109,97,103,101,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str25"] = __str25;
var __str23;
__str23=allocate([87,104,101,110,32,116,104,101,32,112,97,114,116,105,99,108,101,32,104,97,115,32,116,104,105,115,32,109,117,99,104,32,116,105,109,101,32,116,111,32,108,105,118,101,32,108,101,102,116,44,32,105,116,32,119,105,108,108,32,115,119,105,116,99,104,32,116,111,32,115,116,97,116,101,32,50,46,0,0,0], "i8", ALLOC_NORMAL);
Module["__str23"] = __str23;
var __str227;
__str227=allocate([105,109,97,103,101,0,0,0], "i8", ALLOC_NORMAL);
Module["__str227"] = __str227;
var __str22;
__str22=allocate([115,116,97,116,101,95,99,104,97,110,103,101,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str22"] = __str22;
var __str2116;
__str2116=allocate([105,110,110,101,114,95,119,105,100,116,104,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str2116"] = __str2116;
var __str21;
__str21=allocate([97,108,112,104,97,50,0,0], "i8", ALLOC_NORMAL);
Module["__str21"] = __str21;
var __str20;
__str20=allocate([98,108,117,101,50,0,0,0], "i8", ALLOC_NORMAL);
Module["__str20"] = __str20;
var __str2;
__str2=allocate([67,111,108,111,117,114,70,97,100,101,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str2"] = __str2;
var __str19;
__str19=allocate([103,114,101,101,110,50,0,0], "i8", ALLOC_NORMAL);
Module["__str19"] = __str19;
var __str17105;
__str17105=allocate([80,111,105,110,116,0,0,0], "i8", ALLOC_NORMAL);
Module["__str17105"] = __str17105;
var __str17;
__str17=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,97,108,112,104,97,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str17"] = __str17;
var __str16104;
__str16104=allocate([66,111,120,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str16104"] = __str16104;
var __str16;
__str16=allocate([97,108,112,104,97,49,0,0], "i8", ALLOC_NORMAL);
Module["__str16"] = __str16;
var __str1520;
__str1520=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,98,108,117,101,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1520"] = __str1520;
var __str15103;
__str15103=allocate([69,108,108,105,112,115,111,105,100,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str15103"] = __str15103;
var __str142;
__str142=allocate([83,99,97,108,101,114,0,0], "i8", ALLOC_NORMAL);
Module["__str142"] = __str142;
var __str1419;
__str1419=allocate([98,108,117,101,49,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1419"] = __str1419;
var __str14;
__str14=allocate([67,111,108,111,117,114,70,97,100,101,114,50,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str14"] = __str14;
var __str1318;
__str1318=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,103,114,101,101,110,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1318"] = __str1318;
var __str127;
__str127=allocate([82,111,116,97,116,111,114,0], "i8", ALLOC_NORMAL);
Module["__str127"] = __str127;
var __str126;
__str126=allocate([67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str126"] = __str126;
var __str1217;
__str1217=allocate([103,114,101,101,110,49,0,0], "i8", ALLOC_NORMAL);
Module["__str1217"] = __str1217;
var __str12136;
__str12136=allocate([84,104,101,32,101,110,100,32,111,102,32,97,32,114,97,110,103,101,32,111,102,32,114,111,116,97,116,105,111,110,32,97,110,103,108,101,115,32,116,111,32,98,101,32,97,115,115,105,103,110,101,100,32,116,111,32,101,109,105,116,116,101,100,32,112,97,114,116,105,99,108,101,115,46,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str12136"] = __str12136;
var __str12102;
__str12102=allocate([72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,0], "i8", ALLOC_NORMAL);
Module["__str12102"] = __str12102;
var __str12;
__str12=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,97,108,112,104,97,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str12"] = __str12;
var __str118;
__str118=allocate([97,108,112,104,97,0,0,0], "i8", ALLOC_NORMAL);
Module["__str118"] = __str118;
var __str1176;
__str1176=allocate([122,32,62,32,48,32,38,38,32,122,32,60,32,49,46,48,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1176"] = __str1176;
var __str1143;
__str1143=allocate([83,99,97,108,101,65,102,102,101,99,116,111,114,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1143"] = __str1143;
var __str1116;
__str1116=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,114,101,100,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1116"] = __str1116;
var __str11135;
__str11135=allocate([114,111,116,97,116,105,111,110,95,114,97,110,103,101,95,101,110,100,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str11135"] = __str11135;
var __str1111;
__str1111=allocate([80,111,105,110,116,69,109,105,116,116,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1111"] = __str1111;
var __str11101;
__str11101=allocate([76,105,110,101,97,114,70,111,114,99,101,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str11101"] = __str11101;
var __str110;
__str110=allocate([80,111,105,110,116,0,0,0], "i8", ALLOC_NORMAL);
Module["__str110"] = __str110;
var __str11;
__str11=allocate([118,101,99,116,111,114,0,0], "i8", ALLOC_NORMAL);
Module["__str11"] = __str11;
var __str1075;
__str1075=allocate([121,32,62,32,48,32,38,38,32,121,32,60,32,49,46,48,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1075"] = __str1075;
var __str10134;
__str10134=allocate([84,104,101,32,115,116,97,114,116,32,111,102,32,97,32,114,97,110,103,101,32,111,102,32,114,111,116,97,116,105,111,110,32,97,110,103,108,101,115,32,116,111,32,98,101,32,97,115,115,105,103,110,101,100,32,116,111,32,101,109,105,116,116,101,100,32,112,97,114,116,105,99,108,101,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str10134"] = __str10134;
var __str10100;
__str10100=allocate([67,111,108,111,117,114,70,97,100,101,114,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str10100"] = __str10100;
var __str10;
__str10=allocate([84,104,101,32,97,109,111,117,110,116,32,98,121,32,119,104,105,99,104,32,116,111,32,97,100,106,117,115,116,32,116,104,101,32,98,108,117,101,32,99,111,109,112,111,110,101,110,116,32,111,102,32,112,97,114,116,105,99,108,101,115,32,112,101,114,32,115,101,99,111,110,100,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str10"] = __str10;
var __str1;
__str1=allocate([66,111,120,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1"] = __str1;
var __str;
__str=allocate([69,109,105,116,116,101,114,0], "i8", ALLOC_NORMAL);
Module["__str"] = __str;
var ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf;
___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf=allocate([115,101,116,73,110,110,101,114,83,105,122,101,90,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf"] = ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf;
var ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf;
___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf=allocate([115,101,116,73,110,110,101,114,83,105,122,101,89,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf"] = ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf;
var ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf;
___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf=allocate([115,101,116,73,110,110,101,114,83,105,122,101,88,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf"] = ___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf;
var ___func____ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff;
___func____ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff=allocate([115,101,116,73,110,110,101,114,83,105,122,101,0,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff"] = ___func____ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff;
var ___func____ZN4Ogre11RingEmitter13setInnerSizeYEf;
___func____ZN4Ogre11RingEmitter13setInnerSizeYEf=allocate([115,101,116,73,110,110,101,114,83,105,122,101,89,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre11RingEmitter13setInnerSizeYEf"] = ___func____ZN4Ogre11RingEmitter13setInnerSizeYEf;
var ___func____ZN4Ogre11RingEmitter13setInnerSizeXEf;
___func____ZN4Ogre11RingEmitter13setInnerSizeXEf=allocate([115,101,116,73,110,110,101,114,83,105,122,101,88,0,0,0], "i8", ALLOC_NORMAL);
Module["___func____ZN4Ogre11RingEmitter13setInnerSizeXEf"] = ___func____ZN4Ogre11RingEmitter13setInnerSizeXEf;
var __ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,192,255,255,255,192,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTVN4Ogre34DirectionRandomiserAffectorFactoryE;
__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE"] = __ZTVN4Ogre34DirectionRandomiserAffectorFactoryE;
var __ZTVN4Ogre33ColourInterpolatorAffectorFactoryE;
__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE"] = __ZTVN4Ogre33ColourInterpolatorAffectorFactoryE;
var __ZTVN4Ogre29HollowEllipsoidEmitterFactoryE;
__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE"] = __ZTVN4Ogre29HollowEllipsoidEmitterFactoryE;
var __ZTVN4Ogre29DeflectorPlaneAffectorFactoryE;
__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE"] = __ZTVN4Ogre29DeflectorPlaneAffectorFactoryE;
var __ZTVN4Ogre27DirectionRandomiserAffectorE;
__ZTVN4Ogre27DirectionRandomiserAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre27DirectionRandomiserAffectorE"] = __ZTVN4Ogre27DirectionRandomiserAffectorE;
var __ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE;
__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE"] = __ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE;
var __ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE"] = __ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
var __ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE"] = __ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
var __ZTVN4Ogre27ColourFaderAffectorFactory2E;
__ZTVN4Ogre27ColourFaderAffectorFactory2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre27ColourFaderAffectorFactory2E"] = __ZTVN4Ogre27ColourFaderAffectorFactory2E;
var __ZTVN4Ogre26LinearForceAffectorFactoryE;
__ZTVN4Ogre26LinearForceAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26LinearForceAffectorFactoryE"] = __ZTVN4Ogre26LinearForceAffectorFactoryE;
var __ZTVN4Ogre26InvalidParametersExceptionE;
__ZTVN4Ogre26InvalidParametersExceptionE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26InvalidParametersExceptionE"] = __ZTVN4Ogre26InvalidParametersExceptionE;
var __ZTVN4Ogre26ColourInterpolatorAffectorE;
__ZTVN4Ogre26ColourInterpolatorAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26ColourInterpolatorAffectorE"] = __ZTVN4Ogre26ColourInterpolatorAffectorE;
var __ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE"] = __ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
var __ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE"] = __ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
var __ZTVN4Ogre26ColourImageAffectorFactoryE;
__ZTVN4Ogre26ColourImageAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26ColourImageAffectorFactoryE"] = __ZTVN4Ogre26ColourImageAffectorFactoryE;
var __ZTVN4Ogre26ColourFaderAffectorFactoryE;
__ZTVN4Ogre26ColourFaderAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre26ColourFaderAffectorFactoryE"] = __ZTVN4Ogre26ColourFaderAffectorFactoryE;
var __ZTVN4Ogre23RotationAffectorFactoryE;
__ZTVN4Ogre23RotationAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre23RotationAffectorFactoryE"] = __ZTVN4Ogre23RotationAffectorFactoryE;
var __ZTVN4Ogre23EllipsoidEmitterFactoryE;
__ZTVN4Ogre23EllipsoidEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre23EllipsoidEmitterFactoryE"] = __ZTVN4Ogre23EllipsoidEmitterFactoryE;
var __ZTVN4Ogre22HollowEllipsoidEmitterE;
__ZTVN4Ogre22HollowEllipsoidEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22HollowEllipsoidEmitterE"] = __ZTVN4Ogre22HollowEllipsoidEmitterE;
var __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE"] = __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
var __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE"] = __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
var __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE"] = __ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
var __ZTVN4Ogre22DeflectorPlaneAffectorE;
__ZTVN4Ogre22DeflectorPlaneAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22DeflectorPlaneAffectorE"] = __ZTVN4Ogre22DeflectorPlaneAffectorE;
var __ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE;
__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE"] = __ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE;
var __ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE"] = __ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
var __ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE"] = __ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
var __ZTVN4Ogre22CylinderEmitterFactoryE;
__ZTVN4Ogre22CylinderEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre22CylinderEmitterFactoryE"] = __ZTVN4Ogre22CylinderEmitterFactoryE;
var __ZTVN4Ogre20ScaleAffectorFactoryE;
__ZTVN4Ogre20ScaleAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ScaleAffectorFactoryE"] = __ZTVN4Ogre20ScaleAffectorFactoryE;
var __ZTVN4Ogre20ColourFaderAffector2E;
__ZTVN4Ogre20ColourFaderAffector2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector2E"] = __ZTVN4Ogre20ColourFaderAffector2E;
var __ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E"] = __ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
var __ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E"] = __ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
var __ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E"] = __ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
var __ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E"] = __ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
var __ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE;
__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE"] = __ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE;
var __ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E"] = __ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
var __ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E"] = __ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
var __ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E"] = __ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
var __ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E"] = __ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
var __ZTVN4Ogre19PointEmitterFactoryE;
__ZTVN4Ogre19PointEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19PointEmitterFactoryE"] = __ZTVN4Ogre19PointEmitterFactoryE;
var __ZTVN4Ogre19LinearForceAffectorE;
__ZTVN4Ogre19LinearForceAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19LinearForceAffectorE"] = __ZTVN4Ogre19LinearForceAffectorE;
var __ZTVN4Ogre19LinearForceAffector14CmdForceVectorE;
__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE"] = __ZTVN4Ogre19LinearForceAffector14CmdForceVectorE;
var __ZTVN4Ogre19LinearForceAffector11CmdForceAppE;
__ZTVN4Ogre19LinearForceAffector11CmdForceAppE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19LinearForceAffector11CmdForceAppE"] = __ZTVN4Ogre19LinearForceAffector11CmdForceAppE;
var __ZTVN4Ogre19ColourImageAffectorE;
__ZTVN4Ogre19ColourImageAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourImageAffectorE"] = __ZTVN4Ogre19ColourImageAffectorE;
var __ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE;
__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE"] = __ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE;
var __ZTVN4Ogre19ColourFaderAffectorE;
__ZTVN4Ogre19ColourFaderAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourFaderAffectorE"] = __ZTVN4Ogre19ColourFaderAffectorE;
var __ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE"] = __ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
var __ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE"] = __ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
var __ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE"] = __ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
var __ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE;
__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE"] = __ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE;
var __ZTVN4Ogre18RingEmitterFactoryE;
__ZTVN4Ogre18RingEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre18RingEmitterFactoryE"] = __ZTVN4Ogre18RingEmitterFactoryE;
var __ZTVN4Ogre17BoxEmitterFactoryE;
__ZTVN4Ogre17BoxEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre17BoxEmitterFactoryE"] = __ZTVN4Ogre17BoxEmitterFactoryE;
var __ZTVN4Ogre16RotationAffectorE;
__ZTVN4Ogre16RotationAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16RotationAffectorE"] = __ZTVN4Ogre16RotationAffectorE;
var __ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE"] = __ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
var __ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE"] = __ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
var __ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE;
__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE"] = __ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE;
var __ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE;
__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE"] = __ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE;
var __ZTVN4Ogre16ParticleFXPluginE;
__ZTVN4Ogre16ParticleFXPluginE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16ParticleFXPluginE"] = __ZTVN4Ogre16ParticleFXPluginE;
var __ZTVN4Ogre16EllipsoidEmitterE;
__ZTVN4Ogre16EllipsoidEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre16EllipsoidEmitterE"] = __ZTVN4Ogre16EllipsoidEmitterE;
var __ZTVN4Ogre15CylinderEmitterE;
__ZTVN4Ogre15CylinderEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre15CylinderEmitterE"] = __ZTVN4Ogre15CylinderEmitterE;
var __ZTVN4Ogre13ScaleAffectorE;
__ZTVN4Ogre13ScaleAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre13ScaleAffectorE"] = __ZTVN4Ogre13ScaleAffectorE;
var __ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE;
__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE"] = __ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE;
var __ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTVN4Ogre12PointEmitterE;
__ZTVN4Ogre12PointEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre12PointEmitterE"] = __ZTVN4Ogre12PointEmitterE;
var __ZTVN4Ogre11RingEmitterE;
__ZTVN4Ogre11RingEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11RingEmitterE"] = __ZTVN4Ogre11RingEmitterE;
var __ZTVN4Ogre11RingEmitter9CmdInnerYE;
__ZTVN4Ogre11RingEmitter9CmdInnerYE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11RingEmitter9CmdInnerYE"] = __ZTVN4Ogre11RingEmitter9CmdInnerYE;
var __ZTVN4Ogre11RingEmitter9CmdInnerXE;
__ZTVN4Ogre11RingEmitter9CmdInnerXE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11RingEmitter9CmdInnerXE"] = __ZTVN4Ogre11RingEmitter9CmdInnerXE;
var __ZTVN4Ogre11AreaEmitterE;
__ZTVN4Ogre11AreaEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11AreaEmitterE"] = __ZTVN4Ogre11AreaEmitterE;
var __ZTVN4Ogre11AreaEmitter9CmdHeightE;
__ZTVN4Ogre11AreaEmitter9CmdHeightE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11AreaEmitter9CmdHeightE"] = __ZTVN4Ogre11AreaEmitter9CmdHeightE;
var __ZTVN4Ogre11AreaEmitter8CmdWidthE;
__ZTVN4Ogre11AreaEmitter8CmdWidthE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11AreaEmitter8CmdWidthE"] = __ZTVN4Ogre11AreaEmitter8CmdWidthE;
var __ZTVN4Ogre11AreaEmitter8CmdDepthE;
__ZTVN4Ogre11AreaEmitter8CmdDepthE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre11AreaEmitter8CmdDepthE"] = __ZTVN4Ogre11AreaEmitter8CmdDepthE;
var __ZTVN4Ogre10BoxEmitterE;
__ZTVN4Ogre10BoxEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN4Ogre10BoxEmitterE"] = __ZTVN4Ogre10BoxEmitterE;
var __ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE;
__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,57,98,97,115,105,99,95,105,111,115,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([78,83,116,51,95,95,49,49,56,98,97,115,105,99,95,115,116,114,105,110,103,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,105,110,103,98,117,102,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,101,97,109,98,117,102,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__114basic_iostreamIcNS_11char_traitsIcEEEE;
__ZTSNSt3__114basic_iostreamIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,52,98,97,115,105,99,95,105,111,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__114basic_iostreamIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__114basic_iostreamIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,111,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
__ZTSNSt3__113basic_istreamIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,105,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__113basic_istreamIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
var __ZTSN4Ogre6PluginE;
__ZTSN4Ogre6PluginE=allocate([78,52,79,103,114,101,54,80,108,117,103,105,110,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre6PluginE"] = __ZTSN4Ogre6PluginE;
var __ZTSN4Ogre34DirectionRandomiserAffectorFactoryE;
__ZTSN4Ogre34DirectionRandomiserAffectorFactoryE=allocate([78,52,79,103,114,101,51,52,68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre34DirectionRandomiserAffectorFactoryE"] = __ZTSN4Ogre34DirectionRandomiserAffectorFactoryE;
var __ZTSN4Ogre33ColourInterpolatorAffectorFactoryE;
__ZTSN4Ogre33ColourInterpolatorAffectorFactoryE=allocate([78,52,79,103,114,101,51,51,67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre33ColourInterpolatorAffectorFactoryE"] = __ZTSN4Ogre33ColourInterpolatorAffectorFactoryE;
var __ZTSN4Ogre29HollowEllipsoidEmitterFactoryE;
__ZTSN4Ogre29HollowEllipsoidEmitterFactoryE=allocate([78,52,79,103,114,101,50,57,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre29HollowEllipsoidEmitterFactoryE"] = __ZTSN4Ogre29HollowEllipsoidEmitterFactoryE;
var __ZTSN4Ogre29DeflectorPlaneAffectorFactoryE;
__ZTSN4Ogre29DeflectorPlaneAffectorFactoryE=allocate([78,52,79,103,114,101,50,57,68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre29DeflectorPlaneAffectorFactoryE"] = __ZTSN4Ogre29DeflectorPlaneAffectorFactoryE;
var __ZTSN4Ogre27DirectionRandomiserAffectorE;
__ZTSN4Ogre27DirectionRandomiserAffectorE=allocate([78,52,79,103,114,101,50,55,68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre27DirectionRandomiserAffectorE"] = __ZTSN4Ogre27DirectionRandomiserAffectorE;
var __ZTSN4Ogre27DirectionRandomiserAffector8CmdScopeE;
__ZTSN4Ogre27DirectionRandomiserAffector8CmdScopeE=allocate([78,52,79,103,114,101,50,55,68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,56,67,109,100,83,99,111,112,101,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre27DirectionRandomiserAffector8CmdScopeE"] = __ZTSN4Ogre27DirectionRandomiserAffector8CmdScopeE;
var __ZTSN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
__ZTSN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE=allocate([78,52,79,103,114,101,50,55,68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,49,53,67,109,100,75,101,101,112,86,101,108,111,99,105,116,121,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE"] = __ZTSN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
var __ZTSN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
__ZTSN4Ogre27DirectionRandomiserAffector13CmdRandomnessE=allocate([78,52,79,103,114,101,50,55,68,105,114,101,99,116,105,111,110,82,97,110,100,111,109,105,115,101,114,65,102,102,101,99,116,111,114,49,51,67,109,100,82,97,110,100,111,109,110,101,115,115,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre27DirectionRandomiserAffector13CmdRandomnessE"] = __ZTSN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
var __ZTSN4Ogre27ColourFaderAffectorFactory2E;
__ZTSN4Ogre27ColourFaderAffectorFactory2E=allocate([78,52,79,103,114,101,50,55,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,50,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre27ColourFaderAffectorFactory2E"] = __ZTSN4Ogre27ColourFaderAffectorFactory2E;
var __ZTSN4Ogre26LinearForceAffectorFactoryE;
__ZTSN4Ogre26LinearForceAffectorFactoryE=allocate([78,52,79,103,114,101,50,54,76,105,110,101,97,114,70,111,114,99,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26LinearForceAffectorFactoryE"] = __ZTSN4Ogre26LinearForceAffectorFactoryE;
var __ZTSN4Ogre26InvalidParametersExceptionE;
__ZTSN4Ogre26InvalidParametersExceptionE=allocate([78,52,79,103,114,101,50,54,73,110,118,97,108,105,100,80,97,114,97,109,101,116,101,114,115,69,120,99,101,112,116,105,111,110,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26InvalidParametersExceptionE"] = __ZTSN4Ogre26InvalidParametersExceptionE;
var __ZTSN4Ogre26ColourInterpolatorAffectorE;
__ZTSN4Ogre26ColourInterpolatorAffectorE=allocate([78,52,79,103,114,101,50,54,67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,65,102,102,101,99,116,111,114,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26ColourInterpolatorAffectorE"] = __ZTSN4Ogre26ColourInterpolatorAffectorE;
var __ZTSN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
__ZTSN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE=allocate([78,52,79,103,114,101,50,54,67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,65,102,102,101,99,116,111,114,49,53,67,109,100,67,111,108,111,117,114,65,100,106,117,115,116,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE"] = __ZTSN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
var __ZTSN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
__ZTSN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE=allocate([78,52,79,103,114,101,50,54,67,111,108,111,117,114,73,110,116,101,114,112,111,108,97,116,111,114,65,102,102,101,99,116,111,114,49,51,67,109,100,84,105,109,101,65,100,106,117,115,116,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE"] = __ZTSN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
var __ZTSN4Ogre26ColourImageAffectorFactoryE;
__ZTSN4Ogre26ColourImageAffectorFactoryE=allocate([78,52,79,103,114,101,50,54,67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26ColourImageAffectorFactoryE"] = __ZTSN4Ogre26ColourImageAffectorFactoryE;
var __ZTSN4Ogre26ColourFaderAffectorFactoryE;
__ZTSN4Ogre26ColourFaderAffectorFactoryE=allocate([78,52,79,103,114,101,50,54,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre26ColourFaderAffectorFactoryE"] = __ZTSN4Ogre26ColourFaderAffectorFactoryE;
var __ZTSN4Ogre23RotationAffectorFactoryE;
__ZTSN4Ogre23RotationAffectorFactoryE=allocate([78,52,79,103,114,101,50,51,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre23RotationAffectorFactoryE"] = __ZTSN4Ogre23RotationAffectorFactoryE;
var __ZTSN4Ogre23EllipsoidEmitterFactoryE;
__ZTSN4Ogre23EllipsoidEmitterFactoryE=allocate([78,52,79,103,114,101,50,51,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre23EllipsoidEmitterFactoryE"] = __ZTSN4Ogre23EllipsoidEmitterFactoryE;
var __ZTSN4Ogre22HollowEllipsoidEmitterE;
__ZTSN4Ogre22HollowEllipsoidEmitterE=allocate([78,52,79,103,114,101,50,50,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22HollowEllipsoidEmitterE"] = __ZTSN4Ogre22HollowEllipsoidEmitterE;
var __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerZE=allocate([78,52,79,103,114,101,50,50,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,57,67,109,100,73,110,110,101,114,90,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerZE"] = __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
var __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerYE=allocate([78,52,79,103,114,101,50,50,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,57,67,109,100,73,110,110,101,114,89,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerYE"] = __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
var __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerXE=allocate([78,52,79,103,114,101,50,50,72,111,108,108,111,119,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,57,67,109,100,73,110,110,101,114,88,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerXE"] = __ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
var __ZTSN4Ogre22DeflectorPlaneAffectorE;
__ZTSN4Ogre22DeflectorPlaneAffectorE=allocate([78,52,79,103,114,101,50,50,68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22DeflectorPlaneAffectorE"] = __ZTSN4Ogre22DeflectorPlaneAffectorE;
var __ZTSN4Ogre22DeflectorPlaneAffector9CmdBounceE;
__ZTSN4Ogre22DeflectorPlaneAffector9CmdBounceE=allocate([78,52,79,103,114,101,50,50,68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,57,67,109,100,66,111,117,110,99,101,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22DeflectorPlaneAffector9CmdBounceE"] = __ZTSN4Ogre22DeflectorPlaneAffector9CmdBounceE;
var __ZTSN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
__ZTSN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE=allocate([78,52,79,103,114,101,50,50,68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,49,52,67,109,100,80,108,97,110,101,78,111,114,109,97,108,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE"] = __ZTSN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
var __ZTSN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
__ZTSN4Ogre22DeflectorPlaneAffector13CmdPlanePointE=allocate([78,52,79,103,114,101,50,50,68,101,102,108,101,99,116,111,114,80,108,97,110,101,65,102,102,101,99,116,111,114,49,51,67,109,100,80,108,97,110,101,80,111,105,110,116,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22DeflectorPlaneAffector13CmdPlanePointE"] = __ZTSN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
var __ZTSN4Ogre22CylinderEmitterFactoryE;
__ZTSN4Ogre22CylinderEmitterFactoryE=allocate([78,52,79,103,114,101,50,50,67,121,108,105,110,100,101,114,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre22CylinderEmitterFactoryE"] = __ZTSN4Ogre22CylinderEmitterFactoryE;
var __ZTSN4Ogre20ScaleAffectorFactoryE;
__ZTSN4Ogre20ScaleAffectorFactoryE=allocate([78,52,79,103,114,101,50,48,83,99,97,108,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ScaleAffectorFactoryE"] = __ZTSN4Ogre20ScaleAffectorFactoryE;
var __ZTSN4Ogre20ColourFaderAffector2E;
__ZTSN4Ogre20ColourFaderAffector2E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector2E"] = __ZTSN4Ogre20ColourFaderAffector2E;
var __ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust2E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,53,67,109,100,71,114,101,101,110,65,100,106,117,115,116,50,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust2E"] = __ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
var __ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust1E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,53,67,109,100,71,114,101,101,110,65,100,106,117,115,116,49,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust1E"] = __ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
var __ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,53,67,109,100,65,108,112,104,97,65,100,106,117,115,116,50,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E"] = __ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
var __ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,53,67,109,100,65,108,112,104,97,65,100,106,117,115,116,49,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E"] = __ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
var __ZTSN4Ogre20ColourFaderAffector214CmdStateChangeE;
__ZTSN4Ogre20ColourFaderAffector214CmdStateChangeE=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,52,67,109,100,83,116,97,116,101,67,104,97,110,103,101,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector214CmdStateChangeE"] = __ZTSN4Ogre20ColourFaderAffector214CmdStateChangeE;
var __ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust2E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,52,67,109,100,66,108,117,101,65,100,106,117,115,116,50,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust2E"] = __ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
var __ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust1E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,52,67,109,100,66,108,117,101,65,100,106,117,115,116,49,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust1E"] = __ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
var __ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust2E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,51,67,109,100,82,101,100,65,100,106,117,115,116,50,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust2E"] = __ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
var __ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust1E=allocate([78,52,79,103,114,101,50,48,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,50,49,51,67,109,100,82,101,100,65,100,106,117,115,116,49,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust1E"] = __ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
var __ZTSN4Ogre19PointEmitterFactoryE;
__ZTSN4Ogre19PointEmitterFactoryE=allocate([78,52,79,103,114,101,49,57,80,111,105,110,116,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19PointEmitterFactoryE"] = __ZTSN4Ogre19PointEmitterFactoryE;
var __ZTSN4Ogre19LinearForceAffectorE;
__ZTSN4Ogre19LinearForceAffectorE=allocate([78,52,79,103,114,101,49,57,76,105,110,101,97,114,70,111,114,99,101,65,102,102,101,99,116,111,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19LinearForceAffectorE"] = __ZTSN4Ogre19LinearForceAffectorE;
var __ZTSN4Ogre19LinearForceAffector14CmdForceVectorE;
__ZTSN4Ogre19LinearForceAffector14CmdForceVectorE=allocate([78,52,79,103,114,101,49,57,76,105,110,101,97,114,70,111,114,99,101,65,102,102,101,99,116,111,114,49,52,67,109,100,70,111,114,99,101,86,101,99,116,111,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19LinearForceAffector14CmdForceVectorE"] = __ZTSN4Ogre19LinearForceAffector14CmdForceVectorE;
var __ZTSN4Ogre19LinearForceAffector11CmdForceAppE;
__ZTSN4Ogre19LinearForceAffector11CmdForceAppE=allocate([78,52,79,103,114,101,49,57,76,105,110,101,97,114,70,111,114,99,101,65,102,102,101,99,116,111,114,49,49,67,109,100,70,111,114,99,101,65,112,112,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19LinearForceAffector11CmdForceAppE"] = __ZTSN4Ogre19LinearForceAffector11CmdForceAppE;
var __ZTSN4Ogre19ColourImageAffectorE;
__ZTSN4Ogre19ColourImageAffectorE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourImageAffectorE"] = __ZTSN4Ogre19ColourImageAffectorE;
var __ZTSN4Ogre19ColourImageAffector14CmdImageAdjustE;
__ZTSN4Ogre19ColourImageAffector14CmdImageAdjustE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,73,109,97,103,101,65,102,102,101,99,116,111,114,49,52,67,109,100,73,109,97,103,101,65,100,106,117,115,116,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourImageAffector14CmdImageAdjustE"] = __ZTSN4Ogre19ColourImageAffector14CmdImageAdjustE;
var __ZTSN4Ogre19ColourFaderAffectorE;
__ZTSN4Ogre19ColourFaderAffectorE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourFaderAffectorE"] = __ZTSN4Ogre19ColourFaderAffectorE;
var __ZTSN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
__ZTSN4Ogre19ColourFaderAffector14CmdGreenAdjustE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,49,52,67,109,100,71,114,101,101,110,65,100,106,117,115,116,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourFaderAffector14CmdGreenAdjustE"] = __ZTSN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
var __ZTSN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
__ZTSN4Ogre19ColourFaderAffector14CmdAlphaAdjustE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,49,52,67,109,100,65,108,112,104,97,65,100,106,117,115,116,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourFaderAffector14CmdAlphaAdjustE"] = __ZTSN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
var __ZTSN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
__ZTSN4Ogre19ColourFaderAffector13CmdBlueAdjustE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,49,51,67,109,100,66,108,117,101,65,100,106,117,115,116,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourFaderAffector13CmdBlueAdjustE"] = __ZTSN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
var __ZTSN4Ogre19ColourFaderAffector12CmdRedAdjustE;
__ZTSN4Ogre19ColourFaderAffector12CmdRedAdjustE=allocate([78,52,79,103,114,101,49,57,67,111,108,111,117,114,70,97,100,101,114,65,102,102,101,99,116,111,114,49,50,67,109,100,82,101,100,65,100,106,117,115,116,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre19ColourFaderAffector12CmdRedAdjustE"] = __ZTSN4Ogre19ColourFaderAffector12CmdRedAdjustE;
var __ZTSN4Ogre18RingEmitterFactoryE;
__ZTSN4Ogre18RingEmitterFactoryE=allocate([78,52,79,103,114,101,49,56,82,105,110,103,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre18RingEmitterFactoryE"] = __ZTSN4Ogre18RingEmitterFactoryE;
var __ZTSN4Ogre17BoxEmitterFactoryE;
__ZTSN4Ogre17BoxEmitterFactoryE=allocate([78,52,79,103,114,101,49,55,66,111,120,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre17BoxEmitterFactoryE"] = __ZTSN4Ogre17BoxEmitterFactoryE;
var __ZTSN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE;
__ZTSN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,80,78,83,95,50,51,80,97,114,116,105,99,108,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE"] = __ZTSN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE;
var __ZTSN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE;
__ZTSN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,80,78,83,95,50,50,80,97,114,116,105,99,108,101,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,69,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE"] = __ZTSN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE;
var __ZTSN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE;
__ZTSN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,80,78,83,95,49,54,80,97,114,116,105,99,108,101,65,102,102,101,99,116,111,114,69,69,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE"] = __ZTSN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE;
var __ZTSN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE;
__ZTSN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,80,78,83,95,49,53,80,97,114,116,105,99,108,101,69,109,105,116,116,101,114,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE"] = __ZTSN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE;
var __ZTSN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE;
__ZTSN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,78,83,116,51,95,95,49,49,49,95,95,116,114,101,101,95,110,111,100,101,73,78,83,49,95,49,50,95,95,118,97,108,117,101,95,116,121,112,101,73,78,83,49,95,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,99,78,83,49,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,49,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,80,78,83,95,49,50,80,97,114,97,109,67,111,109,109,97,110,100,69,69,69,80,118,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE"] = __ZTSN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE;
var __ZTSN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE;
__ZTSN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE=allocate([78,52,79,103,114,101,49,54,83,84,76,65,108,108,111,99,97,116,111,114,66,97,115,101,73,78,83,95,49,50,80,97,114,97,109,101,116,101,114,68,101,102,69,69,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE"] = __ZTSN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE;
var __ZTSN4Ogre16RotationAffectorE;
__ZTSN4Ogre16RotationAffectorE=allocate([78,52,79,103,114,101,49,54,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16RotationAffectorE"] = __ZTSN4Ogre16RotationAffectorE;
var __ZTSN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
__ZTSN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE=allocate([78,52,79,103,114,101,49,54,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,50,54,67,109,100,82,111,116,97,116,105,111,110,83,112,101,101,100,82,97,110,103,101,83,116,97,114,116,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE"] = __ZTSN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
var __ZTSN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
__ZTSN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE=allocate([78,52,79,103,114,101,49,54,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,50,52,67,109,100,82,111,116,97,116,105,111,110,83,112,101,101,100,82,97,110,103,101,69,110,100,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE"] = __ZTSN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
var __ZTSN4Ogre16RotationAffector21CmdRotationRangeStartE;
__ZTSN4Ogre16RotationAffector21CmdRotationRangeStartE=allocate([78,52,79,103,114,101,49,54,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,50,49,67,109,100,82,111,116,97,116,105,111,110,82,97,110,103,101,83,116,97,114,116,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16RotationAffector21CmdRotationRangeStartE"] = __ZTSN4Ogre16RotationAffector21CmdRotationRangeStartE;
var __ZTSN4Ogre16RotationAffector19CmdRotationRangeEndE;
__ZTSN4Ogre16RotationAffector19CmdRotationRangeEndE=allocate([78,52,79,103,114,101,49,54,82,111,116,97,116,105,111,110,65,102,102,101,99,116,111,114,49,57,67,109,100,82,111,116,97,116,105,111,110,82,97,110,103,101,69,110,100,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16RotationAffector19CmdRotationRangeEndE"] = __ZTSN4Ogre16RotationAffector19CmdRotationRangeEndE;
var __ZTSN4Ogre16ParticleFXPluginE;
__ZTSN4Ogre16ParticleFXPluginE=allocate([78,52,79,103,114,101,49,54,80,97,114,116,105,99,108,101,70,88,80,108,117,103,105,110,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16ParticleFXPluginE"] = __ZTSN4Ogre16ParticleFXPluginE;
var __ZTSN4Ogre16EllipsoidEmitterE;
__ZTSN4Ogre16EllipsoidEmitterE=allocate([78,52,79,103,114,101,49,54,69,108,108,105,112,115,111,105,100,69,109,105,116,116,101,114,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre16EllipsoidEmitterE"] = __ZTSN4Ogre16EllipsoidEmitterE;
var __ZTSN4Ogre15CylinderEmitterE;
__ZTSN4Ogre15CylinderEmitterE=allocate([78,52,79,103,114,101,49,53,67,121,108,105,110,100,101,114,69,109,105,116,116,101,114,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre15CylinderEmitterE"] = __ZTSN4Ogre15CylinderEmitterE;
var __ZTSN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,53,65,108,108,111,99,97,116,101,100,79,98,106,101,99,116,73,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre13ScaleAffectorE;
__ZTSN4Ogre13ScaleAffectorE=allocate([78,52,79,103,114,101,49,51,83,99,97,108,101,65,102,102,101,99,116,111,114,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre13ScaleAffectorE"] = __ZTSN4Ogre13ScaleAffectorE;
var __ZTSN4Ogre13ScaleAffector14CmdScaleAdjustE;
__ZTSN4Ogre13ScaleAffector14CmdScaleAdjustE=allocate([78,52,79,103,114,101,49,51,83,99,97,108,101,65,102,102,101,99,116,111,114,49,52,67,109,100,83,99,97,108,101,65,100,106,117,115,116,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre13ScaleAffector14CmdScaleAdjustE"] = __ZTSN4Ogre13ScaleAffector14CmdScaleAdjustE;
var __ZTSN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,80,78,83,95,50,51,80,97,114,116,105,99,108,101,65,102,102,101,99,116,111,114,70,97,99,116,111,114,121,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,80,78,83,95,50,50,80,97,114,116,105,99,108,101,69,109,105,116,116,101,114,70,97,99,116,111,114,121,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,80,78,83,95,49,54,80,97,114,116,105,99,108,101,65,102,102,101,99,116,111,114,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,80,78,83,95,49,53,80,97,114,116,105,99,108,101,69,109,105,116,116,101,114,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,78,83,116,51,95,95,49,49,49,95,95,116,114,101,101,95,110,111,100,101,73,78,83,49,95,49,50,95,95,118,97,108,117,101,95,116,121,112,101,73,78,83,49,95,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,99,78,83,49,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,49,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,80,78,83,95,49,50,80,97,114,97,109,67,111,109,109,97,110,100,69,69,69,80,118,69,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTSN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([78,52,79,103,114,101,49,50,83,84,76,65,108,108,111,99,97,116,111,114,73,78,83,95,49,50,80,97,114,97,109,101,116,101,114,68,101,102,69,78,83,95,50,50,67,97,116,101,103,111,114,105,115,101,100,65,108,108,111,99,80,111,108,105,99,121,73,76,78,83,95,49,52,77,101,109,111,114,121,67,97,116,101,103,111,114,121,69,48,69,69,69,69,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTSN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTSN4Ogre12PointEmitterE;
__ZTSN4Ogre12PointEmitterE=allocate([78,52,79,103,114,101,49,50,80,111,105,110,116,69,109,105,116,116,101,114,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12PointEmitterE"] = __ZTSN4Ogre12PointEmitterE;
var __ZTSN4Ogre12ParamCommandE;
__ZTSN4Ogre12ParamCommandE=allocate([78,52,79,103,114,101,49,50,80,97,114,97,109,67,111,109,109,97,110,100,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre12ParamCommandE"] = __ZTSN4Ogre12ParamCommandE;
var __ZTSN4Ogre11RingEmitterE;
__ZTSN4Ogre11RingEmitterE=allocate([78,52,79,103,114,101,49,49,82,105,110,103,69,109,105,116,116,101,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11RingEmitterE"] = __ZTSN4Ogre11RingEmitterE;
var __ZTSN4Ogre11RingEmitter9CmdInnerYE;
__ZTSN4Ogre11RingEmitter9CmdInnerYE=allocate([78,52,79,103,114,101,49,49,82,105,110,103,69,109,105,116,116,101,114,57,67,109,100,73,110,110,101,114,89,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11RingEmitter9CmdInnerYE"] = __ZTSN4Ogre11RingEmitter9CmdInnerYE;
var __ZTSN4Ogre11RingEmitter9CmdInnerXE;
__ZTSN4Ogre11RingEmitter9CmdInnerXE=allocate([78,52,79,103,114,101,49,49,82,105,110,103,69,109,105,116,116,101,114,57,67,109,100,73,110,110,101,114,88,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11RingEmitter9CmdInnerXE"] = __ZTSN4Ogre11RingEmitter9CmdInnerXE;
var __ZTSN4Ogre11AreaEmitterE;
__ZTSN4Ogre11AreaEmitterE=allocate([78,52,79,103,114,101,49,49,65,114,101,97,69,109,105,116,116,101,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11AreaEmitterE"] = __ZTSN4Ogre11AreaEmitterE;
var __ZTSN4Ogre11AreaEmitter9CmdHeightE;
__ZTSN4Ogre11AreaEmitter9CmdHeightE=allocate([78,52,79,103,114,101,49,49,65,114,101,97,69,109,105,116,116,101,114,57,67,109,100,72,101,105,103,104,116,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11AreaEmitter9CmdHeightE"] = __ZTSN4Ogre11AreaEmitter9CmdHeightE;
var __ZTSN4Ogre11AreaEmitter8CmdWidthE;
__ZTSN4Ogre11AreaEmitter8CmdWidthE=allocate([78,52,79,103,114,101,49,49,65,114,101,97,69,109,105,116,116,101,114,56,67,109,100,87,105,100,116,104,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11AreaEmitter8CmdWidthE"] = __ZTSN4Ogre11AreaEmitter8CmdWidthE;
var __ZTSN4Ogre11AreaEmitter8CmdDepthE;
__ZTSN4Ogre11AreaEmitter8CmdDepthE=allocate([78,52,79,103,114,101,49,49,65,114,101,97,69,109,105,116,116,101,114,56,67,109,100,68,101,112,116,104,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre11AreaEmitter8CmdDepthE"] = __ZTSN4Ogre11AreaEmitter8CmdDepthE;
var __ZTSN4Ogre10BoxEmitterE;
__ZTSN4Ogre10BoxEmitterE=allocate([78,52,79,103,114,101,49,48,66,111,120,69,109,105,116,116,101,114,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN4Ogre10BoxEmitterE"] = __ZTSN4Ogre10BoxEmitterE;
var __ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE"] = __ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
var __ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE;
__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,3,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,8,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE"] = __ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE;
var __ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,244,255,255], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE"] = __ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
var __ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,244,255,255], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE"] = __ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
var __ZTIN4Ogre6PluginE;
__ZTIN4Ogre6PluginE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre6PluginE"] = __ZTIN4Ogre6PluginE;
var __ZTIN4Ogre34DirectionRandomiserAffectorFactoryE;
__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE"] = __ZTIN4Ogre34DirectionRandomiserAffectorFactoryE;
var __ZTIN4Ogre33ColourInterpolatorAffectorFactoryE;
__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE"] = __ZTIN4Ogre33ColourInterpolatorAffectorFactoryE;
var __ZTIN4Ogre29HollowEllipsoidEmitterFactoryE;
__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE"] = __ZTIN4Ogre29HollowEllipsoidEmitterFactoryE;
var __ZTIN4Ogre29DeflectorPlaneAffectorFactoryE;
__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE"] = __ZTIN4Ogre29DeflectorPlaneAffectorFactoryE;
var __ZTIN4Ogre27DirectionRandomiserAffectorE;
__ZTIN4Ogre27DirectionRandomiserAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre27DirectionRandomiserAffectorE"] = __ZTIN4Ogre27DirectionRandomiserAffectorE;
var __ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE;
__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE"] = __ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE;
var __ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE"] = __ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
var __ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE"] = __ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
var __ZTIN4Ogre27ColourFaderAffectorFactory2E;
__ZTIN4Ogre27ColourFaderAffectorFactory2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre27ColourFaderAffectorFactory2E"] = __ZTIN4Ogre27ColourFaderAffectorFactory2E;
var __ZTIN4Ogre26LinearForceAffectorFactoryE;
__ZTIN4Ogre26LinearForceAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26LinearForceAffectorFactoryE"] = __ZTIN4Ogre26LinearForceAffectorFactoryE;
var __ZTIN4Ogre26InvalidParametersExceptionE;
__ZTIN4Ogre26InvalidParametersExceptionE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26InvalidParametersExceptionE"] = __ZTIN4Ogre26InvalidParametersExceptionE;
var __ZTIN4Ogre26ColourInterpolatorAffectorE;
__ZTIN4Ogre26ColourInterpolatorAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26ColourInterpolatorAffectorE"] = __ZTIN4Ogre26ColourInterpolatorAffectorE;
var __ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE"] = __ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
var __ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE"] = __ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
var __ZTIN4Ogre26ColourImageAffectorFactoryE;
__ZTIN4Ogre26ColourImageAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26ColourImageAffectorFactoryE"] = __ZTIN4Ogre26ColourImageAffectorFactoryE;
var __ZTIN4Ogre26ColourFaderAffectorFactoryE;
__ZTIN4Ogre26ColourFaderAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre26ColourFaderAffectorFactoryE"] = __ZTIN4Ogre26ColourFaderAffectorFactoryE;
var __ZTIN4Ogre23RotationAffectorFactoryE;
__ZTIN4Ogre23RotationAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre23RotationAffectorFactoryE"] = __ZTIN4Ogre23RotationAffectorFactoryE;
var __ZTIN4Ogre23EllipsoidEmitterFactoryE;
__ZTIN4Ogre23EllipsoidEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre23EllipsoidEmitterFactoryE"] = __ZTIN4Ogre23EllipsoidEmitterFactoryE;
var __ZTIN4Ogre22HollowEllipsoidEmitterE;
__ZTIN4Ogre22HollowEllipsoidEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22HollowEllipsoidEmitterE"] = __ZTIN4Ogre22HollowEllipsoidEmitterE;
var __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE"] = __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
var __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE"] = __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
var __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE"] = __ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
var __ZTIN4Ogre22DeflectorPlaneAffectorE;
__ZTIN4Ogre22DeflectorPlaneAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22DeflectorPlaneAffectorE"] = __ZTIN4Ogre22DeflectorPlaneAffectorE;
var __ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE;
__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE"] = __ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE;
var __ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE"] = __ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
var __ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE"] = __ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
var __ZTIN4Ogre22CylinderEmitterFactoryE;
__ZTIN4Ogre22CylinderEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre22CylinderEmitterFactoryE"] = __ZTIN4Ogre22CylinderEmitterFactoryE;
var __ZTIN4Ogre20ScaleAffectorFactoryE;
__ZTIN4Ogre20ScaleAffectorFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ScaleAffectorFactoryE"] = __ZTIN4Ogre20ScaleAffectorFactoryE;
var __ZTIN4Ogre20ColourFaderAffector2E;
__ZTIN4Ogre20ColourFaderAffector2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector2E"] = __ZTIN4Ogre20ColourFaderAffector2E;
var __ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E"] = __ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
var __ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E"] = __ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
var __ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E"] = __ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
var __ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E"] = __ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
var __ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE;
__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE"] = __ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE;
var __ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E"] = __ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
var __ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E"] = __ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
var __ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E"] = __ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
var __ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E"] = __ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
var __ZTIN4Ogre19PointEmitterFactoryE;
__ZTIN4Ogre19PointEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19PointEmitterFactoryE"] = __ZTIN4Ogre19PointEmitterFactoryE;
var __ZTIN4Ogre19LinearForceAffectorE;
__ZTIN4Ogre19LinearForceAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19LinearForceAffectorE"] = __ZTIN4Ogre19LinearForceAffectorE;
var __ZTIN4Ogre19LinearForceAffector14CmdForceVectorE;
__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE"] = __ZTIN4Ogre19LinearForceAffector14CmdForceVectorE;
var __ZTIN4Ogre19LinearForceAffector11CmdForceAppE;
__ZTIN4Ogre19LinearForceAffector11CmdForceAppE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19LinearForceAffector11CmdForceAppE"] = __ZTIN4Ogre19LinearForceAffector11CmdForceAppE;
var __ZTIN4Ogre19ColourImageAffectorE;
__ZTIN4Ogre19ColourImageAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourImageAffectorE"] = __ZTIN4Ogre19ColourImageAffectorE;
var __ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE;
__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE"] = __ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE;
var __ZTIN4Ogre19ColourFaderAffectorE;
__ZTIN4Ogre19ColourFaderAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourFaderAffectorE"] = __ZTIN4Ogre19ColourFaderAffectorE;
var __ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE"] = __ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
var __ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE"] = __ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
var __ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE"] = __ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
var __ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE;
__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE"] = __ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE;
var __ZTIN4Ogre18RingEmitterFactoryE;
__ZTIN4Ogre18RingEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre18RingEmitterFactoryE"] = __ZTIN4Ogre18RingEmitterFactoryE;
var __ZTIN4Ogre17BoxEmitterFactoryE;
__ZTIN4Ogre17BoxEmitterFactoryE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre17BoxEmitterFactoryE"] = __ZTIN4Ogre17BoxEmitterFactoryE;
var __ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE;
__ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE"] = __ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE;
var __ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE;
__ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE"] = __ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE;
var __ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE;
__ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE"] = __ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE;
var __ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE;
__ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE"] = __ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE;
var __ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE;
__ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE"] = __ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE;
var __ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE;
__ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE"] = __ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE;
var __ZTIN4Ogre16RotationAffectorE;
__ZTIN4Ogre16RotationAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16RotationAffectorE"] = __ZTIN4Ogre16RotationAffectorE;
var __ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE"] = __ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
var __ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE"] = __ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
var __ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE;
__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE"] = __ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE;
var __ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE;
__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE"] = __ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE;
var __ZTIN4Ogre16ParticleFXPluginE;
__ZTIN4Ogre16ParticleFXPluginE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16ParticleFXPluginE"] = __ZTIN4Ogre16ParticleFXPluginE;
var __ZTIN4Ogre16EllipsoidEmitterE;
__ZTIN4Ogre16EllipsoidEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre16EllipsoidEmitterE"] = __ZTIN4Ogre16EllipsoidEmitterE;
var __ZTIN4Ogre15CylinderEmitterE;
__ZTIN4Ogre15CylinderEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre15CylinderEmitterE"] = __ZTIN4Ogre15CylinderEmitterE;
var __ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre13ScaleAffectorE;
__ZTIN4Ogre13ScaleAffectorE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre13ScaleAffectorE"] = __ZTIN4Ogre13ScaleAffectorE;
var __ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE;
__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE"] = __ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE;
var __ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE"] = __ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
var __ZTIN4Ogre12PointEmitterE;
__ZTIN4Ogre12PointEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12PointEmitterE"] = __ZTIN4Ogre12PointEmitterE;
var __ZTIN4Ogre12ParamCommandE;
__ZTIN4Ogre12ParamCommandE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre12ParamCommandE"] = __ZTIN4Ogre12ParamCommandE;
var __ZTIN4Ogre11RingEmitterE;
__ZTIN4Ogre11RingEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11RingEmitterE"] = __ZTIN4Ogre11RingEmitterE;
var __ZTIN4Ogre11RingEmitter9CmdInnerYE;
__ZTIN4Ogre11RingEmitter9CmdInnerYE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11RingEmitter9CmdInnerYE"] = __ZTIN4Ogre11RingEmitter9CmdInnerYE;
var __ZTIN4Ogre11RingEmitter9CmdInnerXE;
__ZTIN4Ogre11RingEmitter9CmdInnerXE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11RingEmitter9CmdInnerXE"] = __ZTIN4Ogre11RingEmitter9CmdInnerXE;
var __ZTIN4Ogre11AreaEmitterE;
__ZTIN4Ogre11AreaEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11AreaEmitterE"] = __ZTIN4Ogre11AreaEmitterE;
var __ZTIN4Ogre11AreaEmitter9CmdHeightE;
__ZTIN4Ogre11AreaEmitter9CmdHeightE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11AreaEmitter9CmdHeightE"] = __ZTIN4Ogre11AreaEmitter9CmdHeightE;
var __ZTIN4Ogre11AreaEmitter8CmdWidthE;
__ZTIN4Ogre11AreaEmitter8CmdWidthE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11AreaEmitter8CmdWidthE"] = __ZTIN4Ogre11AreaEmitter8CmdWidthE;
var __ZTIN4Ogre11AreaEmitter8CmdDepthE;
__ZTIN4Ogre11AreaEmitter8CmdDepthE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre11AreaEmitter8CmdDepthE"] = __ZTIN4Ogre11AreaEmitter8CmdDepthE;
var __ZTIN4Ogre10BoxEmitterE;
__ZTIN4Ogre10BoxEmitterE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN4Ogre10BoxEmitterE"] = __ZTIN4Ogre10BoxEmitterE;
var __ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE;
__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE=allocate([64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,255,255,255,192,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE"] = __ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE;
var __ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE;
__ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE"] = __ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE;
var __ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE;
__ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE"] = __ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE;
var __ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE;
__ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE"] = __ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE;
var __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE;
__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE"] = __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE;
var __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE;
__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE"] = __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE;
var __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE;
__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE"] = __ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE;
var __ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE;
__ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE"] = __ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE;
var __ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE;
__ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE"] = __ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE;
var __ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE;
__ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE"] = __ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE;
var __ZN4Ogre20ColourFaderAffector29msRedCmd2E;
__ZN4Ogre20ColourFaderAffector29msRedCmd2E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector29msRedCmd2E"] = __ZN4Ogre20ColourFaderAffector29msRedCmd2E;
var __ZN4Ogre20ColourFaderAffector29msRedCmd1E;
__ZN4Ogre20ColourFaderAffector29msRedCmd1E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector29msRedCmd1E"] = __ZN4Ogre20ColourFaderAffector29msRedCmd1E;
var __ZN4Ogre20ColourFaderAffector211msGreenCmd2E;
__ZN4Ogre20ColourFaderAffector211msGreenCmd2E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector211msGreenCmd2E"] = __ZN4Ogre20ColourFaderAffector211msGreenCmd2E;
var __ZN4Ogre20ColourFaderAffector211msGreenCmd1E;
__ZN4Ogre20ColourFaderAffector211msGreenCmd1E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector211msGreenCmd1E"] = __ZN4Ogre20ColourFaderAffector211msGreenCmd1E;
var __ZN4Ogre20ColourFaderAffector211msAlphaCmd2E;
__ZN4Ogre20ColourFaderAffector211msAlphaCmd2E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector211msAlphaCmd2E"] = __ZN4Ogre20ColourFaderAffector211msAlphaCmd2E;
var __ZN4Ogre20ColourFaderAffector211msAlphaCmd1E;
__ZN4Ogre20ColourFaderAffector211msAlphaCmd1E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector211msAlphaCmd1E"] = __ZN4Ogre20ColourFaderAffector211msAlphaCmd1E;
var __ZN4Ogre20ColourFaderAffector210msStateCmdE;
__ZN4Ogre20ColourFaderAffector210msStateCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector210msStateCmdE"] = __ZN4Ogre20ColourFaderAffector210msStateCmdE;
var __ZN4Ogre20ColourFaderAffector210msBlueCmd2E;
__ZN4Ogre20ColourFaderAffector210msBlueCmd2E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector210msBlueCmd2E"] = __ZN4Ogre20ColourFaderAffector210msBlueCmd2E;
var __ZN4Ogre20ColourFaderAffector210msBlueCmd1E;
__ZN4Ogre20ColourFaderAffector210msBlueCmd1E=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre20ColourFaderAffector210msBlueCmd1E"] = __ZN4Ogre20ColourFaderAffector210msBlueCmd1E;
var __ZN4Ogre19LinearForceAffector16msForceVectorCmdE;
__ZN4Ogre19LinearForceAffector16msForceVectorCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19LinearForceAffector16msForceVectorCmdE"] = __ZN4Ogre19LinearForceAffector16msForceVectorCmdE;
var __ZN4Ogre19LinearForceAffector13msForceAppCmdE;
__ZN4Ogre19LinearForceAffector13msForceAppCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19LinearForceAffector13msForceAppCmdE"] = __ZN4Ogre19LinearForceAffector13msForceAppCmdE;
var __ZN4Ogre19ColourImageAffector10msImageCmdE;
__ZN4Ogre19ColourImageAffector10msImageCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19ColourImageAffector10msImageCmdE"] = __ZN4Ogre19ColourImageAffector10msImageCmdE;
var __ZN4Ogre19ColourFaderAffector9msBlueCmdE;
__ZN4Ogre19ColourFaderAffector9msBlueCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19ColourFaderAffector9msBlueCmdE"] = __ZN4Ogre19ColourFaderAffector9msBlueCmdE;
var __ZN4Ogre19ColourFaderAffector8msRedCmdE;
__ZN4Ogre19ColourFaderAffector8msRedCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19ColourFaderAffector8msRedCmdE"] = __ZN4Ogre19ColourFaderAffector8msRedCmdE;
var __ZN4Ogre19ColourFaderAffector10msGreenCmdE;
__ZN4Ogre19ColourFaderAffector10msGreenCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19ColourFaderAffector10msGreenCmdE"] = __ZN4Ogre19ColourFaderAffector10msGreenCmdE;
var __ZN4Ogre19ColourFaderAffector10msAlphaCmdE;
__ZN4Ogre19ColourFaderAffector10msAlphaCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre19ColourFaderAffector10msAlphaCmdE"] = __ZN4Ogre19ColourFaderAffector10msAlphaCmdE;
var __ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE;
__ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE"] = __ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE;
var __ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE;
__ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE"] = __ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE;
var __ZN4Ogre16RotationAffector23msRotationRangeStartCmdE;
__ZN4Ogre16RotationAffector23msRotationRangeStartCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre16RotationAffector23msRotationRangeStartCmdE"] = __ZN4Ogre16RotationAffector23msRotationRangeStartCmdE;
var __ZN4Ogre16RotationAffector21msRotationRangeEndCmdE;
__ZN4Ogre16RotationAffector21msRotationRangeEndCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre16RotationAffector21msRotationRangeEndCmdE"] = __ZN4Ogre16RotationAffector21msRotationRangeEndCmdE;
var __ZN4Ogre13ScaleAffector10msScaleCmdE;
__ZN4Ogre13ScaleAffector10msScaleCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre13ScaleAffector10msScaleCmdE"] = __ZN4Ogre13ScaleAffector10msScaleCmdE;
var __ZN4Ogre11RingEmitter11msCmdInnerYE;
__ZN4Ogre11RingEmitter11msCmdInnerYE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre11RingEmitter11msCmdInnerYE"] = __ZN4Ogre11RingEmitter11msCmdInnerYE;
var __ZN4Ogre11RingEmitter11msCmdInnerXE;
__ZN4Ogre11RingEmitter11msCmdInnerXE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre11RingEmitter11msCmdInnerXE"] = __ZN4Ogre11RingEmitter11msCmdInnerXE;
var __ZN4Ogre11AreaEmitter11msHeightCmdE;
__ZN4Ogre11AreaEmitter11msHeightCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre11AreaEmitter11msHeightCmdE"] = __ZN4Ogre11AreaEmitter11msHeightCmdE;
var __ZN4Ogre11AreaEmitter10msWidthCmdE;
__ZN4Ogre11AreaEmitter10msWidthCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre11AreaEmitter10msWidthCmdE"] = __ZN4Ogre11AreaEmitter10msWidthCmdE;
var __ZN4Ogre11AreaEmitter10msDepthCmdE;
__ZN4Ogre11AreaEmitter10msDepthCmdE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZN4Ogre11AreaEmitter10msDepthCmdE"] = __ZN4Ogre11AreaEmitter10msDepthCmdE;
var __ZN4OgreL11sPluginNameE;
__ZN4OgreL11sPluginNameE=allocate(16, "i8", ALLOC_NORMAL);
Module["__ZN4OgreL11sPluginNameE"] = __ZN4OgreL11sPluginNameE;
var __ZN4Ogre6pluginE;
__ZN4Ogre6pluginE=allocate(8, "i8", ALLOC_NORMAL);
Module["__ZN4Ogre6pluginE"] = __ZN4Ogre6pluginE;
var __ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE;
__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE=allocate(48, "i8", ALLOC_NORMAL);
Module["__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE"] = __ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE;
var __ZN4Ogre26ColourInterpolatorAffector11msColourCmdE;
__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE=allocate(48, "i8", ALLOC_NORMAL);
Module["__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE"] = __ZN4Ogre26ColourInterpolatorAffector11msColourCmdE;
var __ZN4Ogre10BoxEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre10BoxEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre19ColourFaderAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre19ColourFaderAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre20ColourFaderAffector2C1EPNS_14ParticleSystemE=__ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE;Module["__ZN4Ogre20ColourFaderAffector2C1EPNS_14ParticleSystemE"] =__ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE
var __ZN4Ogre19ColourImageAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre19ColourImageAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre26ColourInterpolatorAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre26ColourInterpolatorAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre15CylinderEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre15CylinderEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre22DeflectorPlaneAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre22DeflectorPlaneAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre27DirectionRandomiserAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre27DirectionRandomiserAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre16EllipsoidEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre16EllipsoidEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre22HollowEllipsoidEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre22HollowEllipsoidEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre19LinearForceAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre19LinearForceAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre16ParticleFXPluginC1Ev=__ZN4Ogre16ParticleFXPluginC2Ev;Module["__ZN4Ogre16ParticleFXPluginC1Ev"] =__ZN4Ogre16ParticleFXPluginC2Ev
var __ZN4Ogre12PointEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre12PointEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre11RingEmitterC1EPNS_14ParticleSystemE=__ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE;Module["__ZN4Ogre11RingEmitterC1EPNS_14ParticleSystemE"] =__ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE
var __ZN4Ogre16RotationAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre16RotationAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE
var __ZN4Ogre13ScaleAffectorC1EPNS_14ParticleSystemE=__ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE;Module["__ZN4Ogre13ScaleAffectorC1EPNS_14ParticleSystemE"] =__ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE
/* no memory initializer */
function runPostSets() {
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 438);
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 802);
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(28))>>2)]=__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 142);
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 214);
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(48))>>2)]=__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 656);
HEAP32[(((__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 630);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 148);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 700);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 168);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 732);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 600);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 124);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 310);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 556);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 430);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 720);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 660);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 406);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 276);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(4))>>2)]=__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 382);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 168);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 732);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 726);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 588);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 310);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 556);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 430);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 436);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 406);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 724);
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 82);
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 472);
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 154);
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 694);
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 106);
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 578);
HEAP32[(((__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 202);
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 256);
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 126);
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 206);
HEAP32[(((__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 330);
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 108);
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 296);
HEAP32[(((__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(4))>>2)]=__ZTIN4Ogre27DirectionRandomiserAffectorE;
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 292);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 466);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(4))>>2)]=__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE;
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 110);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 482);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 568);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 620);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(4))>>2)]=__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE;
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 648);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 188);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 780);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 172);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(4))>>2)]=__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE;
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 166);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 328);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 344);
HEAP32[(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 184);
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(4))>>2)]=__ZTIN4Ogre27ColourFaderAffectorFactory2E;
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 794);
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 744);
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 638);
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 602);
HEAP32[(((__ZTVN4Ogre27ColourFaderAffectorFactory2E)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre26LinearForceAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 752);
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 702);
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 294);
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((__ZTVN4Ogre26LinearForceAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(4))>>2)]=__ZTIN4Ogre26InvalidParametersExceptionE;
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 236);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 746);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 658);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 102);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 240);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((__ZTVN4Ogre26InvalidParametersExceptionE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 598);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(4))>>2)]=__ZTIN4Ogre26ColourInterpolatorAffectorE;
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 216);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 764);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 464);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(4))>>2)]=__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE;
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 260);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 358);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 134);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 196);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(4))>>2)]=__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE;
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 318);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 246);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 274);
HEAP32[(((__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 488);
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre26ColourImageAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 810);
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 564);
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 156);
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 478);
HEAP32[(((__ZTVN4Ogre26ColourImageAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre26ColourFaderAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 190);
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 116);
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 500);
HEAP32[(((__ZTVN4Ogre26ColourFaderAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre23RotationAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 254);
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 576);
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 806);
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 688);
HEAP32[(((__ZTVN4Ogre23RotationAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre23EllipsoidEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 88);
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 640);
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 494);
HEAP32[(((__ZTVN4Ogre23EllipsoidEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(4))>>2)]=__ZTIN4Ogre22HollowEllipsoidEmitterE;
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 664);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 570);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 522);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(4))>>2)]=__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE;
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 562);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 530);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 728);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 384);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(4))>>2)]=__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE;
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 280);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 456);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 418);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 610);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(4))>>2)]=__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE;
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 422);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 710);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 596);
HEAP32[(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(4))>>2)]=__ZTIN4Ogre22DeflectorPlaneAffectorE;
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 194);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 642);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 80);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(4))>>2)]=__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE;
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 78);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 668);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 716);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(4))>>2)]=__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE;
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 342);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 554);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 652);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 338);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(4))>>2)]=__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE;
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 130);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 222);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 808);
HEAP32[(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 138);
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre22CylinderEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 306);
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 298);
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 410);
HEAP32[(((__ZTVN4Ogre22CylinderEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(4))>>2)]=__ZTIN4Ogre20ScaleAffectorFactoryE;
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 220);
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 460);
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 462);
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 524);
HEAP32[(((__ZTVN4Ogre20ScaleAffectorFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 322);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector2E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 582);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 646);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector2E)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 516);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 146);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 628);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 760);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 212);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 336);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 320);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 200);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 118);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 270);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 536);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 706);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 734);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 150);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 192);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 492);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 604);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 440);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 380);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 612);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 210);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 452);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 672);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 286);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 120);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 86);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 470);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 180);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 278);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(4))>>2)]=__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E;
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 504);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 364);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 474);
HEAP32[(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 518);
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre19PointEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 790);
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 144);
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 572);
HEAP32[(((__ZTVN4Ogre19PointEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(4))>>2)]=__ZTIN4Ogre19LinearForceAffectorE;
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 540);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 304);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre19LinearForceAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 428);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE)+(4))>>2)]=__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE;
HEAP32[(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 370);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 786);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 738);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 782);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE)+(4))>>2)]=__ZTIN4Ogre19LinearForceAffector11CmdForceAppE;
HEAP32[(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 508);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 750);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 288);
HEAP32[(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 538);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(4))>>2)]=__ZTIN4Ogre19ColourImageAffectorE;
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 580);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 334);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 284);
HEAP32[(((__ZTVN4Ogre19ColourImageAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 626);
HEAP32[(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE)+(4))>>2)]=__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE;
HEAP32[(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 680);
HEAP32[(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 546);
HEAP32[(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 136);
HEAP32[(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 84);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(4))>>2)]=__ZTIN4Ogre19ColourFaderAffectorE;
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 586);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 618);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 218);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(4))>>2)]=__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE;
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 542);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 398);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 90);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 152);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(4))>>2)]=__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE;
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 608);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 112);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 378);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(4))>>2)]=__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE;
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 122);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 560);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 234);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 758);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(4))>>2)]=__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE;
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 590);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 784);
HEAP32[(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 740);
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre18RingEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 224);
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 634);
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 756);
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 674);
HEAP32[(((__ZTVN4Ogre18RingEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(4))>>2)]=__ZTIN4Ogre17BoxEmitterFactoryE;
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 408);
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 552);
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 650);
HEAP32[(((__ZTVN4Ogre17BoxEmitterFactoryE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 534);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(4))>>2)]=__ZTIN4Ogre16RotationAffectorE;
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 104);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 158);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 228);
HEAP32[(((__ZTVN4Ogre16RotationAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 574);
HEAP32[(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(4))>>2)]=__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE;
HEAP32[(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 362);
HEAP32[(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 432);
HEAP32[(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(4))>>2)]=__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE;
HEAP32[(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 622);
HEAP32[(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 788);
HEAP32[(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 282);
HEAP32[(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 326);
HEAP32[(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE)+(4))>>2)]=__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE;
HEAP32[(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 366);
HEAP32[(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 698);
HEAP32[(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 374);
HEAP32[(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 372);
HEAP32[(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE)+(4))>>2)]=__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE;
HEAP32[(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 476);
HEAP32[(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 632);
HEAP32[(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 162);
HEAP32[(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 416);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(4))>>2)]=__ZTIN4Ogre16ParticleFXPluginE;
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 114);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 208);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 248);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 584);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 520);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((__ZTVN4Ogre16ParticleFXPluginE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 774);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(4))>>2)]=__ZTIN4Ogre16EllipsoidEmitterE;
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 796);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 264);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 76);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre16EllipsoidEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(4))>>2)]=__ZTIN4Ogre15CylinderEmitterE;
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 332);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 412);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 352);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre15CylinderEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(4))>>2)]=__ZTIN4Ogre13ScaleAffectorE;
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 402);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 624);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 308);
HEAP32[(((__ZTVN4Ogre13ScaleAffectorE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 324);
HEAP32[(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE)+(4))>>2)]=__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE;
HEAP32[(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 340);
HEAP32[(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 232);
HEAP32[(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 526);
HEAP32[(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 686);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 558);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 532);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 312);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 496);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 714);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 484);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 778);
HEAP32[(((__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 242);
HEAP32[(((__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 696);
HEAP32[(((__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 548);
HEAP32[(((__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[(((__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 182);
HEAP32[(((__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 446);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(4))>>2)]=__ZTIN4Ogre12PointEmitterE;
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 376);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 730);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 566);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 204);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre12PointEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(4))>>2)]=__ZTIN4Ogre11RingEmitterE;
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 606);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 670);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre11RingEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerYE)+(4))>>2)]=__ZTIN4Ogre11RingEmitter9CmdInnerYE;
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerYE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 316);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerYE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 174);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerYE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 238);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerYE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 490);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerXE)+(4))>>2)]=__ZTIN4Ogre11RingEmitter9CmdInnerXE;
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerXE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 654);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerXE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 262);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerXE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 170);
HEAP32[(((__ZTVN4Ogre11RingEmitter9CmdInnerXE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 226);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(4))>>2)]=__ZTIN4Ogre11AreaEmitterE;
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 392);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 140);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 96);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre11AreaEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[(((__ZTVN4Ogre11AreaEmitter9CmdHeightE)+(4))>>2)]=__ZTIN4Ogre11AreaEmitter9CmdHeightE;
HEAP32[(((__ZTVN4Ogre11AreaEmitter9CmdHeightE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 792);
HEAP32[(((__ZTVN4Ogre11AreaEmitter9CmdHeightE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 426);
HEAP32[(((__ZTVN4Ogre11AreaEmitter9CmdHeightE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 176);
HEAP32[(((__ZTVN4Ogre11AreaEmitter9CmdHeightE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 198);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdWidthE)+(4))>>2)]=__ZTIN4Ogre11AreaEmitter8CmdWidthE;
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdWidthE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 404);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdWidthE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 742);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdWidthE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 666);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdWidthE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 704);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdDepthE)+(4))>>2)]=__ZTIN4Ogre11AreaEmitter8CmdDepthE;
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdDepthE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 458);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdDepthE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 92);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdDepthE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 160);
HEAP32[(((__ZTVN4Ogre11AreaEmitter8CmdDepthE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 314);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(4))>>2)]=__ZTIN4Ogre10BoxEmitterE;
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 550);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 434);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 754);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 768);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 424);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 762);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 486);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 712);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 450);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 502);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 400);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 528);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 770);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 272);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 798);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 510);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 636);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 394);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 498);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 388);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 186);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 268);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 454);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(112))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 506);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 420);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 360);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 748);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 252);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(144))>>2)]=(FUNCTION_TABLE_OFFSET + 350);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 244);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 514);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 258);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 614);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 512);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 346);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(184))>>2)]=(FUNCTION_TABLE_OFFSET + 414);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 676);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 800);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 722);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 804);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 290);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 302);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(216))>>2)]=(FUNCTION_TABLE_OFFSET + 662);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(220))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 266);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 736);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 348);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 444);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 766);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 616);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(252))>>2)]=(FUNCTION_TABLE_OFFSET + 708);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(256))>>2)]=(FUNCTION_TABLE_OFFSET + 682);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 678);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(264))>>2)]=(FUNCTION_TABLE_OFFSET + 468);
HEAP32[(((__ZTVN4Ogre10BoxEmitterE)+(268))>>2)]=(FUNCTION_TABLE_OFFSET + 368);
HEAP32[((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)+(8))>>2)]=__ZTINSt3__18ios_baseE;
HEAP32[((__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=((__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)|0);
HEAP32[(((__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=((__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)|0);
HEAP32[(((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)|0);
HEAP32[((__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv121__vmi_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__114basic_iostreamIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE)+(16))>>2)]=__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE)+(24))>>2)]=__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv121__vmi_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)+(16))>>2)]=__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv121__vmi_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__113basic_istreamIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE)+(16))>>2)]=__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTIN4Ogre6PluginE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre6PluginE)+(4))>>2)]=((__ZTSN4Ogre6PluginE)|0);
HEAP32[(((__ZTIN4Ogre6PluginE)+(8))>>2)]=__ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE;
HEAP32[((__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre34DirectionRandomiserAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre34DirectionRandomiserAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre33ColourInterpolatorAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre33ColourInterpolatorAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre29HollowEllipsoidEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre29HollowEllipsoidEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre29DeflectorPlaneAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre29DeflectorPlaneAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre27DirectionRandomiserAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffectorE)+(4))>>2)]=((__ZTSN4Ogre27DirectionRandomiserAffectorE)|0);
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(4))>>2)]=((__ZTSN4Ogre27DirectionRandomiserAffector8CmdScopeE)|0);
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector8CmdScopeE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(4))>>2)]=((__ZTSN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)|0);
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(4))>>2)]=((__ZTSN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)|0);
HEAP32[(((__ZTIN4Ogre27DirectionRandomiserAffector13CmdRandomnessE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre27ColourFaderAffectorFactory2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre27ColourFaderAffectorFactory2E)+(4))>>2)]=((__ZTSN4Ogre27ColourFaderAffectorFactory2E)|0);
HEAP32[(((__ZTIN4Ogre27ColourFaderAffectorFactory2E)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre26LinearForceAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26LinearForceAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre26LinearForceAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre26LinearForceAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre26InvalidParametersExceptionE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26InvalidParametersExceptionE)+(4))>>2)]=((__ZTSN4Ogre26InvalidParametersExceptionE)|0);
HEAP32[(((__ZTIN4Ogre26InvalidParametersExceptionE)+(8))>>2)]=__ZTIN4Ogre9ExceptionE;
HEAP32[((__ZTIN4Ogre26ColourInterpolatorAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffectorE)+(4))>>2)]=((__ZTSN4Ogre26ColourInterpolatorAffectorE)|0);
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(4))>>2)]=((__ZTSN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)|0);
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(4))>>2)]=((__ZTSN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)|0);
HEAP32[(((__ZTIN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre26ColourImageAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26ColourImageAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre26ColourImageAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre26ColourImageAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre26ColourFaderAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre26ColourFaderAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre26ColourFaderAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre26ColourFaderAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre23RotationAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre23RotationAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre23RotationAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre23RotationAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre23EllipsoidEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre23EllipsoidEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre23EllipsoidEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre23EllipsoidEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre22HollowEllipsoidEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitterE)+(4))>>2)]=((__ZTSN4Ogre22HollowEllipsoidEmitterE)|0);
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitterE)+(8))>>2)]=__ZTIN4Ogre16EllipsoidEmitterE;
HEAP32[((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(4))>>2)]=((__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)|0);
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerZE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(4))>>2)]=((__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)|0);
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerYE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(4))>>2)]=((__ZTSN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)|0);
HEAP32[(((__ZTIN4Ogre22HollowEllipsoidEmitter9CmdInnerXE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22DeflectorPlaneAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffectorE)+(4))>>2)]=((__ZTSN4Ogre22DeflectorPlaneAffectorE)|0);
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(4))>>2)]=((__ZTSN4Ogre22DeflectorPlaneAffector9CmdBounceE)|0);
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector9CmdBounceE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(4))>>2)]=((__ZTSN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)|0);
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(4))>>2)]=((__ZTSN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)|0);
HEAP32[(((__ZTIN4Ogre22DeflectorPlaneAffector13CmdPlanePointE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre22CylinderEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre22CylinderEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre22CylinderEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre22CylinderEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre20ScaleAffectorFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ScaleAffectorFactoryE)+(4))>>2)]=((__ZTSN4Ogre20ScaleAffectorFactoryE)|0);
HEAP32[(((__ZTIN4Ogre20ScaleAffectorFactoryE)+(8))>>2)]=__ZTIN4Ogre23ParticleAffectorFactoryE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector2E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector2E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector2E)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust2E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdGreenAdjust1E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector214CmdStateChangeE)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdStateChangeE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust2E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector214CmdBlueAdjust1E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust2E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust2E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(4))>>2)]=((__ZTSN4Ogre20ColourFaderAffector213CmdRedAdjust1E)|0);
HEAP32[(((__ZTIN4Ogre20ColourFaderAffector213CmdRedAdjust1E)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19PointEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19PointEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre19PointEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre19PointEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre19LinearForceAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19LinearForceAffectorE)+(4))>>2)]=((__ZTSN4Ogre19LinearForceAffectorE)|0);
HEAP32[(((__ZTIN4Ogre19LinearForceAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE)+(4))>>2)]=((__ZTSN4Ogre19LinearForceAffector14CmdForceVectorE)|0);
HEAP32[(((__ZTIN4Ogre19LinearForceAffector14CmdForceVectorE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19LinearForceAffector11CmdForceAppE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19LinearForceAffector11CmdForceAppE)+(4))>>2)]=((__ZTSN4Ogre19LinearForceAffector11CmdForceAppE)|0);
HEAP32[(((__ZTIN4Ogre19LinearForceAffector11CmdForceAppE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19ColourImageAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourImageAffectorE)+(4))>>2)]=((__ZTSN4Ogre19ColourImageAffectorE)|0);
HEAP32[(((__ZTIN4Ogre19ColourImageAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE)+(4))>>2)]=((__ZTSN4Ogre19ColourImageAffector14CmdImageAdjustE)|0);
HEAP32[(((__ZTIN4Ogre19ColourImageAffector14CmdImageAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19ColourFaderAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourFaderAffectorE)+(4))>>2)]=((__ZTSN4Ogre19ColourFaderAffectorE)|0);
HEAP32[(((__ZTIN4Ogre19ColourFaderAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(4))>>2)]=((__ZTSN4Ogre19ColourFaderAffector14CmdGreenAdjustE)|0);
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector14CmdGreenAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(4))>>2)]=((__ZTSN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)|0);
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector14CmdAlphaAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(4))>>2)]=((__ZTSN4Ogre19ColourFaderAffector13CmdBlueAdjustE)|0);
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector13CmdBlueAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(4))>>2)]=((__ZTSN4Ogre19ColourFaderAffector12CmdRedAdjustE)|0);
HEAP32[(((__ZTIN4Ogre19ColourFaderAffector12CmdRedAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre18RingEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre18RingEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre18RingEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre18RingEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre17BoxEmitterFactoryE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre17BoxEmitterFactoryE)+(4))>>2)]=((__ZTSN4Ogre17BoxEmitterFactoryE)|0);
HEAP32[(((__ZTIN4Ogre17BoxEmitterFactoryE)+(8))>>2)]=__ZTIN4Ogre22ParticleEmitterFactoryE;
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE)|0);
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE)|0);
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE)|0);
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE)|0);
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE)|0);
HEAP32[((__ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE)+(4))>>2)]=((__ZTSN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE)|0);
HEAP32[((__ZTIN4Ogre16RotationAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16RotationAffectorE)+(4))>>2)]=((__ZTSN4Ogre16RotationAffectorE)|0);
HEAP32[(((__ZTIN4Ogre16RotationAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(4))>>2)]=((__ZTSN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)|0);
HEAP32[(((__ZTIN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(4))>>2)]=((__ZTSN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)|0);
HEAP32[(((__ZTIN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE)+(4))>>2)]=((__ZTSN4Ogre16RotationAffector21CmdRotationRangeStartE)|0);
HEAP32[(((__ZTIN4Ogre16RotationAffector21CmdRotationRangeStartE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE)+(4))>>2)]=((__ZTSN4Ogre16RotationAffector19CmdRotationRangeEndE)|0);
HEAP32[(((__ZTIN4Ogre16RotationAffector19CmdRotationRangeEndE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre16ParticleFXPluginE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16ParticleFXPluginE)+(4))>>2)]=((__ZTSN4Ogre16ParticleFXPluginE)|0);
HEAP32[(((__ZTIN4Ogre16ParticleFXPluginE)+(8))>>2)]=__ZTIN4Ogre6PluginE;
HEAP32[((__ZTIN4Ogre16EllipsoidEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre16EllipsoidEmitterE)+(4))>>2)]=((__ZTSN4Ogre16EllipsoidEmitterE)|0);
HEAP32[(((__ZTIN4Ogre16EllipsoidEmitterE)+(8))>>2)]=__ZTIN4Ogre11AreaEmitterE;
HEAP32[((__ZTIN4Ogre15CylinderEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre15CylinderEmitterE)+(4))>>2)]=((__ZTSN4Ogre15CylinderEmitterE)|0);
HEAP32[(((__ZTIN4Ogre15CylinderEmitterE)+(8))>>2)]=__ZTIN4Ogre11AreaEmitterE;
HEAP32[((__ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre15AllocatedObjectINS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[((__ZTIN4Ogre13ScaleAffectorE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre13ScaleAffectorE)+(4))>>2)]=((__ZTSN4Ogre13ScaleAffectorE)|0);
HEAP32[(((__ZTIN4Ogre13ScaleAffectorE)+(8))>>2)]=__ZTIN4Ogre16ParticleAffectorE;
HEAP32[((__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE)+(4))>>2)]=((__ZTSN4Ogre13ScaleAffector14CmdScaleAdjustE)|0);
HEAP32[(((__ZTIN4Ogre13ScaleAffector14CmdScaleAdjustE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseIPNS_23ParticleAffectorFactoryEEE;
HEAP32[((__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseIPNS_22ParticleEmitterFactoryEEE;
HEAP32[((__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseIPNS_16ParticleAffectorEEE;
HEAP32[((__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseIPNS_15ParticleEmitterEEE;
HEAP32[((__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEEEE;
HEAP32[((__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(4))>>2)]=((__ZTSN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)|0);
HEAP32[(((__ZTIN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE)+(8))>>2)]=__ZTIN4Ogre16STLAllocatorBaseINS_12ParameterDefEEE;
HEAP32[((__ZTIN4Ogre12PointEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12PointEmitterE)+(4))>>2)]=((__ZTSN4Ogre12PointEmitterE)|0);
HEAP32[(((__ZTIN4Ogre12PointEmitterE)+(8))>>2)]=__ZTIN4Ogre15ParticleEmitterE;
HEAP32[((__ZTIN4Ogre12ParamCommandE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre12ParamCommandE)+(4))>>2)]=((__ZTSN4Ogre12ParamCommandE)|0);
HEAP32[((__ZTIN4Ogre11RingEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11RingEmitterE)+(4))>>2)]=((__ZTSN4Ogre11RingEmitterE)|0);
HEAP32[(((__ZTIN4Ogre11RingEmitterE)+(8))>>2)]=__ZTIN4Ogre11AreaEmitterE;
HEAP32[((__ZTIN4Ogre11RingEmitter9CmdInnerYE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11RingEmitter9CmdInnerYE)+(4))>>2)]=((__ZTSN4Ogre11RingEmitter9CmdInnerYE)|0);
HEAP32[(((__ZTIN4Ogre11RingEmitter9CmdInnerYE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre11RingEmitter9CmdInnerXE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11RingEmitter9CmdInnerXE)+(4))>>2)]=((__ZTSN4Ogre11RingEmitter9CmdInnerXE)|0);
HEAP32[(((__ZTIN4Ogre11RingEmitter9CmdInnerXE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre11AreaEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11AreaEmitterE)+(4))>>2)]=((__ZTSN4Ogre11AreaEmitterE)|0);
HEAP32[(((__ZTIN4Ogre11AreaEmitterE)+(8))>>2)]=__ZTIN4Ogre15ParticleEmitterE;
HEAP32[((__ZTIN4Ogre11AreaEmitter9CmdHeightE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11AreaEmitter9CmdHeightE)+(4))>>2)]=((__ZTSN4Ogre11AreaEmitter9CmdHeightE)|0);
HEAP32[(((__ZTIN4Ogre11AreaEmitter9CmdHeightE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre11AreaEmitter8CmdWidthE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11AreaEmitter8CmdWidthE)+(4))>>2)]=((__ZTSN4Ogre11AreaEmitter8CmdWidthE)|0);
HEAP32[(((__ZTIN4Ogre11AreaEmitter8CmdWidthE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre11AreaEmitter8CmdDepthE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre11AreaEmitter8CmdDepthE)+(4))>>2)]=((__ZTSN4Ogre11AreaEmitter8CmdDepthE)|0);
HEAP32[(((__ZTIN4Ogre11AreaEmitter8CmdDepthE)+(8))>>2)]=__ZTIN4Ogre12ParamCommandE;
HEAP32[((__ZTIN4Ogre10BoxEmitterE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN4Ogre10BoxEmitterE)+(4))>>2)]=((__ZTSN4Ogre10BoxEmitterE)|0);
HEAP32[(((__ZTIN4Ogre10BoxEmitterE)+(8))>>2)]=__ZTIN4Ogre11AreaEmitterE;
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(8))>>2)]=__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 356);
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 644);
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(28))>>2)]=__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 442);
HEAP32[(((__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 164);
HEAP32[((__ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE)>>2)]=(((__ZTVN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityE+8)|0));
HEAP32[((__ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE)>>2)]=(((__ZTVN4Ogre27DirectionRandomiserAffector13CmdRandomnessE+8)|0));
HEAP32[((__ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE)>>2)]=(((__ZTVN4Ogre27DirectionRandomiserAffector8CmdScopeE+8)|0));
HEAP32[((__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE)>>2)]=(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerZE+8)|0));
HEAP32[((__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE)>>2)]=(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerYE+8)|0));
HEAP32[((__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE)>>2)]=(((__ZTVN4Ogre22HollowEllipsoidEmitter9CmdInnerXE+8)|0));
HEAP32[((__ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE)>>2)]=(((__ZTVN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalE+8)|0));
HEAP32[((__ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE)>>2)]=(((__ZTVN4Ogre22DeflectorPlaneAffector13CmdPlanePointE+8)|0));
HEAP32[((__ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE)>>2)]=(((__ZTVN4Ogre22DeflectorPlaneAffector9CmdBounceE+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector29msRedCmd2E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust2E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector29msRedCmd1E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector213CmdRedAdjust1E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector211msGreenCmd2E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust2E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector211msGreenCmd1E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector215CmdGreenAdjust1E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector211msAlphaCmd2E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust2E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector211msAlphaCmd1E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector215CmdAlphaAdjust1E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector210msStateCmdE)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector214CmdStateChangeE+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector210msBlueCmd2E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust2E+8)|0));
HEAP32[((__ZN4Ogre20ColourFaderAffector210msBlueCmd1E)>>2)]=(((__ZTVN4Ogre20ColourFaderAffector214CmdBlueAdjust1E+8)|0));
HEAP32[((__ZN4Ogre19LinearForceAffector16msForceVectorCmdE)>>2)]=(((__ZTVN4Ogre19LinearForceAffector14CmdForceVectorE+8)|0));
HEAP32[((__ZN4Ogre19LinearForceAffector13msForceAppCmdE)>>2)]=(((__ZTVN4Ogre19LinearForceAffector11CmdForceAppE+8)|0));
HEAP32[((__ZN4Ogre19ColourImageAffector10msImageCmdE)>>2)]=(((__ZTVN4Ogre19ColourImageAffector14CmdImageAdjustE+8)|0));
HEAP32[((__ZN4Ogre19ColourFaderAffector9msBlueCmdE)>>2)]=(((__ZTVN4Ogre19ColourFaderAffector13CmdBlueAdjustE+8)|0));
HEAP32[((__ZN4Ogre19ColourFaderAffector8msRedCmdE)>>2)]=(((__ZTVN4Ogre19ColourFaderAffector12CmdRedAdjustE+8)|0));
HEAP32[((__ZN4Ogre19ColourFaderAffector10msGreenCmdE)>>2)]=(((__ZTVN4Ogre19ColourFaderAffector14CmdGreenAdjustE+8)|0));
HEAP32[((__ZN4Ogre19ColourFaderAffector10msAlphaCmdE)>>2)]=(((__ZTVN4Ogre19ColourFaderAffector14CmdAlphaAdjustE+8)|0));
HEAP32[((__ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE)>>2)]=(((__ZTVN4Ogre16RotationAffector26CmdRotationSpeedRangeStartE+8)|0));
HEAP32[((__ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE)>>2)]=(((__ZTVN4Ogre16RotationAffector24CmdRotationSpeedRangeEndE+8)|0));
HEAP32[((__ZN4Ogre16RotationAffector23msRotationRangeStartCmdE)>>2)]=(((__ZTVN4Ogre16RotationAffector21CmdRotationRangeStartE+8)|0));
HEAP32[((__ZN4Ogre16RotationAffector21msRotationRangeEndCmdE)>>2)]=(((__ZTVN4Ogre16RotationAffector19CmdRotationRangeEndE+8)|0));
HEAP32[((__ZN4Ogre13ScaleAffector10msScaleCmdE)>>2)]=(((__ZTVN4Ogre13ScaleAffector14CmdScaleAdjustE+8)|0));
HEAP32[((__ZN4Ogre11RingEmitter11msCmdInnerYE)>>2)]=(((__ZTVN4Ogre11RingEmitter9CmdInnerYE+8)|0));
HEAP32[((__ZN4Ogre11RingEmitter11msCmdInnerXE)>>2)]=(((__ZTVN4Ogre11RingEmitter9CmdInnerXE+8)|0));
HEAP32[((__ZN4Ogre11AreaEmitter11msHeightCmdE)>>2)]=(((__ZTVN4Ogre11AreaEmitter9CmdHeightE+8)|0));
HEAP32[((__ZN4Ogre11AreaEmitter10msWidthCmdE)>>2)]=(((__ZTVN4Ogre11AreaEmitter8CmdWidthE+8)|0));
HEAP32[((__ZN4Ogre11AreaEmitter10msDepthCmdE)>>2)]=(((__ZTVN4Ogre11AreaEmitter8CmdDepthE+8)|0));
}
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,__ZN4Ogre15ParticleEmitter13setTimeToLiveEf,0,__ZN4Ogre15ParticleEmitter9setColourERKNS_11ColourValueES3_,0,__ZN4Ogre17BoxEmitterFactoryD0Ev,0,__ZNK4Ogre15ParticleEmitter19getColourRangeStartEv,0,__ZNK4Ogre9Exception7getLineEv,0,__ZNK4Ogre15ParticleEmitter9getColourEv,0,__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD0Ev,0,__ZN4Ogre23EllipsoidEmitterFactoryD0Ev,0,__ZN4Ogre10BoxEmitterD0Ev,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D0Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev,0,__ZNK4Ogre15ParticleEmitter14getMinDurationEv,0,__ZN4Ogre15ParticleEmitter13setTimeToLiveEff,0,__ZN4Ogre15ParticleEmitter14setRepeatDelayEf,0,__ZNK4Ogre9Exception4whatEv,0,__ZN4Ogre19PointEmitterFactoryD1Ev,0,__ZN4Ogre27DirectionRandomiserAffectorD1Ev,0,__ZN4Ogre29DeflectorPlaneAffectorFactoryD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre19ColourFaderAffector12CmdRedAdjust5doGetEPKv,0,__ZN4Ogre15ParticleEmitter15setEmissionRateEf,0,__ZNK4Ogre15ParticleEmitter19getParticleVelocityEv,0,__ZN4Ogre15ParticleEmitter22setMaxParticleVelocityEf,0,__ZN4Ogre22CylinderEmitterFactoryD0Ev,0,__ZN4Ogre26LinearForceAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZNK4Ogre9Exception7getFileEv,0,__ZN4Ogre11RingEmitterD1Ev,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD0Ev,0,__ZN4Ogre34DirectionRandomiserAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZNK4Ogre22DeflectorPlaneAffector9CmdBounce5doGetEPKv,0,__ZN4Ogre16ParticleFXPlugin8shutdownEv,0,__ZN4Ogre12PointEmitter17_getEmissionCountEf,0,__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD1Ev,0,__ZNK4Ogre26ColourFaderAffectorFactory7getNameEv,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv,0,__ZN4Ogre16EllipsoidEmitter13_initParticleEPNS_8ParticleE,0,__ZN4Ogre22DeflectorPlaneAffector9CmdBounce5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre22DeflectorPlaneAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre34DirectionRandomiserAffectorFactoryD0Ev,0,__ZN4Ogre19ColourImageAffector14CmdImageAdjustD0Ev,0,__ZNK4Ogre20ColourFaderAffector213CmdRedAdjust25doGetEPKv,0,__ZN4Ogre23EllipsoidEmitterFactoryD1Ev,0,__ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD1Ev,0,__ZN4Ogre11AreaEmitter8CmdDepth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D0Ev,0,__ZN4Ogre15ParticleEmitter13_initParticleEPNS_8ParticleE,0,__ZNSt12length_errorD1Ev,0,__ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE,0,__ZNK4Ogre9Exception9getNumberEv,0,__ZN4Ogre16RotationAffectorD1Ev,0,__ZNK4Ogre33ColourInterpolatorAffectorFactory7getNameEv,0,__ZNK4Ogre29DeflectorPlaneAffectorFactory7getNameEv,0,__ZNK4Ogre27DirectionRandomiserAffector8CmdScope5doGetEPKv,0,__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD1Ev,0,__ZN4Ogre16ParticleFXPluginD1Ev,0,__ZN4Ogre26ColourFaderAffectorFactoryD0Ev,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D0Ev,0,__ZNK4Ogre19ColourFaderAffector13CmdBlueAdjust5doGetEPKv,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj,0,__ZNK4Ogre29HollowEllipsoidEmitterFactory7getNameEv,0,__ZN4Ogre15ParticleEmitter12setStartTimeEf,0,__ZNK4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doGetEPKv,0,__ZN4Ogre34DirectionRandomiserAffectorFactoryD1Ev,0,__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD1Ev,0,__ZN4Ogre19ColourImageAffector14CmdImageAdjustD1Ev,0,__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD0Ev,0,__ZN4Ogre11AreaEmitterD0Ev,0,__ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZNK4Ogre19PointEmitterFactory7getNameEv,0,__ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust25doGetEPKv,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D1Ev,0,__ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD0Ev,0,__ZN4Ogre33ColourInterpolatorAffectorFactoryD1Ev,0,__ZNK4Ogre26ColourImageAffectorFactory7getNameEv,0,__ZN4Ogre16RotationAffectorD0Ev,0,__ZN4Ogre11AreaEmitter8CmdDepthD1Ev,0,__ZN4Ogre16RotationAffector19CmdRotationRangeEndD1Ev,0,__ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev,0,__ZNK4Ogre27DirectionRandomiserAffector13CmdRandomness5doGetEPKv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE,0,__ZN4Ogre11RingEmitter9CmdInnerXD1Ev,0,__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD0Ev,0,__ZN4Ogre11RingEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre11AreaEmitter9CmdHeightD1Ev,0,__ZNK4Ogre19ColourFaderAffector14CmdAlphaAdjust5doGetEPKv,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D1Ev,0,__ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD0Ev,0,__ZN4Ogre15ParticleEmitter22setMinParticleVelocityEf,0,__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre26ColourFaderAffectorFactoryD1Ev,0,__ZNK4Ogre20ColourFaderAffector214CmdStateChange5doGetEPKv,0,__ZN4Ogre22DeflectorPlaneAffectorD1Ev,0,__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD0Ev,0,__ZN4Ogre11AreaEmitter9CmdHeightD0Ev,0,__ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust25doGetEPKv,0,__ZN4Ogre29HollowEllipsoidEmitterFactoryD1Ev,0,__ZN4Ogre12PointEmitter13_initParticleEPNS_8ParticleE,0,__ZN4Ogre29HollowEllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZN4Ogre16ParticleFXPluginD0Ev,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D1Ev,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D0Ev,0,__ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZN4Ogre26ColourInterpolatorAffectorD1Ev,0,__ZN4Ogre19ColourFaderAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre20ScaleAffectorFactoryD1Ev,0,__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre18RingEmitterFactoryD1Ev,0,__ZN4Ogre11RingEmitter9CmdInnerXD0Ev,0,__ZN4Ogre16RotationAffector13_initParticleEPNS_8ParticleE,0,__ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE,0,__ZN4Ogre13ScaleAffector14CmdScaleAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD1Ev,0,__ZN4Ogre26InvalidParametersExceptionD1Ev,0,__ZN4Ogre11RingEmitter9CmdInnerYD1Ev,0,__ZNK4Ogre9Exception9getSourceEv,0,__ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre15ParticleEmitter9setColourERKNS_11ColourValueE,0,__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre16ParticleFXPlugin7getNameEv,0,__ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE,0,__ZNK4Ogre15ParticleEmitter16getMinTimeToLiveEv,0,__ZN4Ogre23RotationAffectorFactoryD1Ev,0,__ZN4Ogre29HollowEllipsoidEmitterFactoryD0Ev,0,__ZN4Ogre15ParticleEmitter17setColourRangeEndERKNS_11ColourValueE,0,__ZNK4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doGetEPKv,0,__ZN4Ogre11RingEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre16EllipsoidEmitterD0Ev,0,__ZNK4Ogre15ParticleEmitter14getMaxDurationEv,0,__ZNK4Ogre15ParticleEmitter22getMinParticleVelocityEv,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D1Ev,0,__ZNK4Ogre15ParticleEmitter12getDirectionEv,0,__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD1Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D0Ev,0,__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerY5doGetEPKv,0,__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD1Ev,0,__ZN4Ogre19ColourImageAffector13_initParticleEPNS_8ParticleE,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D1Ev,0,__ZN4Ogre19LinearForceAffector11CmdForceAppD1Ev,0,__ZN4Ogre15ParticleEmitter11setDurationEff,0,__ZN4Ogre27DirectionRandomiserAffectorD0Ev,0,__ZNK4Ogre26LinearForceAffectorFactory7getNameEv,0,__ZN4Ogre29DeflectorPlaneAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZNK4Ogre22CylinderEmitterFactory7getNameEv,0,__ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE,0,__ZN4Ogre15ParticleEmitter14setMinDurationEf,0,__ZN4Ogre19LinearForceAffectorD0Ev,0,__ZN4Ogre22CylinderEmitterFactoryD1Ev,0,__ZN4Ogre16ParticleAffector13_initParticleEPNS_8ParticleE,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv,0,__ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre11AreaEmitter8CmdDepthD0Ev,0,__ZNK4Ogre11RingEmitter9CmdInnerY5doGetEPKv,0,__ZNK4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doGetEPKv,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre23ParticleAffectorFactory15destroyAffectorEPNS_16ParticleAffectorE,0,__ZN4Ogre13ScaleAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD0Ev,0,__ZN4Ogre27DirectionRandomiserAffector13CmdRandomness5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre29DeflectorPlaneAffectorFactoryD0Ev,0,__ZN4Ogre15CylinderEmitterD1Ev,0,__ZN4Ogre19ColourImageAffectorD0Ev,0,__ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust15doGetEPKv,0,__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD0Ev,0,__ZNK4Ogre13ScaleAffector14CmdScaleAdjust5doGetEPKv,0,__ZNK4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doGetEPKv,0,__ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD1Ev,0,__ZN4Ogre10BoxEmitter13_initParticleEPNS_8ParticleE,0,__ZN4Ogre15ParticleEmitter14setRepeatDelayEff,0,__ZNK4Ogre15ParticleEmitter16getMaxTimeToLiveEv,0,__ZN4Ogre15CylinderEmitter13_initParticleEPNS_8ParticleE,0,__ZN4Ogre16ParticleFXPluginC2Ev,0,__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev,0,__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre15ParticleEmitter16setMaxTimeToLiveEf,0,__ZNK4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doGetEPKv,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre16RotationAffector21CmdRotationRangeStart5doGetEPKv,0,__ZN4Ogre15ParticleEmitter10setEmittedEb,0,__ZNK4Ogre19LinearForceAffector14CmdForceVector5doGetEPKv,0,__ZN4Ogre16RotationAffector21CmdRotationRangeStartD0Ev,0,__ZN4Ogre16RotationAffector21CmdRotationRangeStartD1Ev,0,__ZN4Ogre12PointEmitterD1Ev,0,__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD0Ev,0,__ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust25doGetEPKv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD0Ev,0,__ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE,0,__ZN4Ogre15ParticleEmitter19setParticleVelocityEff,0,__ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE,0,__ZN4Ogre11AreaEmitterD1Ev,0,__ZNK4Ogre15ParticleEmitter8getAngleEv,0,__ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE,0,__ZN4Ogre19ColourFaderAffector14CmdGreenAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre15ParticleEmitter11setPositionERKNS_7Vector3E,0,__ZN4Ogre13ScaleAffectorD1Ev,0,__ZNK4Ogre11AreaEmitter8CmdWidth5doGetEPKv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci,0,__ZN4Ogre17BoxEmitterFactoryD1Ev,0,__ZN4Ogre22CylinderEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZN4Ogre15CylinderEmitterD0Ev,0,__ZN4Ogre15ParticleEmitter10setEnabledEb,0,__ZN4Ogre16RotationAffector19CmdRotationRangeEndD0Ev,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD1Ev,0,__ZN4Ogre15ParticleEmitter16setMinTimeToLiveEf,0,__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerX5doGetEPKv,0,__ZNK4Ogre15StringInterface16copyParametersToEPS0_,0,__ZN4Ogre11AreaEmitter9CmdHeight5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre19LinearForceAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci,0,__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre15StringInterface12setParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi,0,__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN4Ogre20ColourFaderAffector214CmdStateChangeD0Ev,0,__ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev,0,__ZN4Ogre15ParticleEmitter17setMinRepeatDelayEf,0,__ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE,0,__ZN4Ogre15ParticleEmitter17genEmissionColourERNS_11ColourValueE,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D0Ev,0,__ZNK4Ogre15ParticleEmitter22getMaxParticleVelocityEv,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre11AreaEmitter8CmdDepth5doGetEPKv,0,__ZN4Ogre20ScaleAffectorFactoryD0Ev,0,__ZNK4Ogre20ScaleAffectorFactory7getNameEv,0,__ZN4Ogre26ColourInterpolatorAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre27DirectionRandomiserAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZNK4Ogre15ParticleEmitter9isEmittedEv,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre34DirectionRandomiserAffectorFactory7getNameEv,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D1Ev,0,__ZNK4Ogre16RotationAffector19CmdRotationRangeEnd5doGetEPKv,0,__ZN4Ogre26ColourImageAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE,0,__ZN4Ogre27DirectionRandomiserAffector8CmdScope5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre15ParticleEmitter19genEmissionVelocityERNS_7Vector3E,0,__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD0Ev,0,__ZN4Ogre11RingEmitter9CmdInnerYD0Ev,0,__ZN4Ogre20ColourFaderAffector214CmdStateChange5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre23EllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre15ParticleEmitter19setParticleVelocityEf,0,__ZN4Ogre26ColourFaderAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre15ParticleEmitter24genConstantEmissionCountEf,0,__ZNK4Ogre20ColourFaderAffector213CmdRedAdjust15doGetEPKv,0,__ZNK4Ogre15ParticleEmitter15getEmissionRateEv,0,__ZNK4Ogre19LinearForceAffector11CmdForceApp5doGetEPKv,0,__ZNK4Ogre15ParticleEmitter5getUpEv,0,__ZN4Ogre11AreaEmitter17_getEmissionCountEf,0,__ZN4Ogre15ParticleEmitter19setColourRangeStartERKNS_11ColourValueE,0,__ZN4Ogre20ColourFaderAffector216_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D0Ev,0,__ZN4Ogre16ParticleFXPlugin10initialiseEv,0,__ZN4Ogre22HollowEllipsoidEmitter13_initParticleEPNS_8ParticleE,0,__ZN4Ogre20ScaleAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre13ScaleAffector14CmdScaleAdjustD1Ev,0,__ZNK4Ogre15ParticleEmitter11getPositionEv,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre22ParticleEmitterFactory14destroyEmitterEPNS_15ParticleEmitterE,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D0Ev,0,__ZN4Ogre19LinearForceAffector11CmdForceAppD0Ev,0,__ZN4Ogre19LinearForceAffectorD1Ev,0,__ZNK4Ogre19ColourFaderAffector14CmdGreenAdjust5doGetEPKv,0,__ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE,0,__ZN4Ogre19ColourImageAffector14CmdImageAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev,0,__ZN4Ogre10BoxEmitterD1Ev,0,__ZNK4Ogre17BoxEmitterFactory7getNameEv,0,__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv,0,__ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre19ColourFaderAffector13CmdBlueAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doGetEPKv,0,__ZN4Ogre26ColourImageAffectorFactoryD0Ev,0,__ZN4Ogre15ParticleEmitter12setDirectionERKNS_7Vector3E,0,__ZN4Ogre27DirectionRandomiserAffector8CmdScopeD1Ev,0,__ZN4Ogre22HollowEllipsoidEmitterD0Ev,0,__ZN4Ogre19PointEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZN4Ogre16RotationAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre23RotationAffectorFactoryD0Ev,0,__ZN4Ogre33ColourInterpolatorAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre19ColourImageAffectorD1Ev,0,__ZN4Ogre20ColourFaderAffector2D1Ev,0,__ZN4Ogre16ParticleFXPlugin7installEv,0,__ZN4Ogre19ColourFaderAffectorD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj,0,__ZN4Ogre19ColourFaderAffector12CmdRedAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE,0,___cxx_global_array_dtor2,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD1Ev,0,__ZNK4Ogre9Exception14getDescriptionEv,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj,0,__ZN4Ogre27ColourFaderAffectorFactory214createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre20ColourFaderAffector214CmdStateChangeD1Ev,0,__ZN4Ogre11RingEmitterD0Ev,0,__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD0Ev,0,__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre15ParticleEmitter17getColourRangeEndEv,0,__ZNK4Ogre15ParticleEmitter17getMinRepeatDelayEv,0,__ZN4Ogre19ColourFaderAffectorD0Ev,0,__ZN4Ogre27DirectionRandomiserAffector8CmdScopeD0Ev,0,__ZNK4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doGetEPKv,0,__ZN4Ogre13ScaleAffectorD0Ev,0,__ZN4Ogre19ColourImageAffector16_affectParticlesEPNS_14ParticleSystemEf,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZN4Ogre16RotationAffector19CmdRotationRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre18RingEmitterFactoryD0Ev,0,__ZN4Ogre15ParticleEmitter8setAngleERKNS_6RadianE,0,__ZNK4Ogre27ColourFaderAffectorFactory27getNameEv,0,__ZNK4Ogre23EllipsoidEmitterFactory7getNameEv,0,__ZN4Ogre22DeflectorPlaneAffectorD0Ev,0,__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev,0,__ZN4Ogre20ColourFaderAffector2D0Ev,0,__ZNK4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doGetEPKv,0,__ZN4Ogre17BoxEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD1Ev,0,__ZNK4Ogre11RingEmitter9CmdInnerX5doGetEPKv,0,__ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZNK4Ogre9Exception18getFullDescriptionEv,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi,0,__ZN4Ogre15ParticleEmitter14setMaxDurationEf,0,__ZN4Ogre22HollowEllipsoidEmitterD1Ev,0,__ZN4Ogre11AreaEmitter8CmdWidthD1Ev,0,__ZN4Ogre22DeflectorPlaneAffector9CmdBounceD1Ev,0,__ZN4Ogre11RingEmitter13_initParticleEPNS_8ParticleE,0,__ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust15doGetEPKv,0,__ZN4Ogre18RingEmitterFactory13createEmitterEPNS_14ParticleSystemE,0,__ZNK4Ogre15ParticleEmitter10getEnabledEv,0,__ZN4Ogre15ParticleEmitter17setEmittedEmitterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE,0,__ZNK4Ogre19ColourImageAffector14CmdImageAdjust5doGetEPKv,0,__ZN4Ogre15ParticleEmitter7setNameERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE,0,__ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE,0,__ZN4Ogre13ScaleAffector14CmdScaleAdjustD0Ev,0,__ZN4Ogre23RotationAffectorFactory14createAffectorEPNS_14ParticleSystemE,0,__ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE,0,__ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE,0,__ZN4Ogre33ColourInterpolatorAffectorFactoryD0Ev,0,__ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre16RotationAffector21CmdRotationRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZN4Ogre26LinearForceAffectorFactoryD0Ev,0,__ZN4Ogre11AreaEmitter8CmdWidthD0Ev,0,__ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust15doGetEPKv,0,__ZNK4Ogre15ParticleEmitter17getMaxRepeatDelayEv,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre15ParticleEmitter14genEmissionTTLEv,0,__ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre22DeflectorPlaneAffector9CmdBounceD0Ev,0,__ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv,0,__ZN4Ogre15ParticleEmitter11setDurationEf,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj,0,__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD1Ev,0,__ZN4Ogre12PointEmitterD0Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci,0,__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZNK4Ogre15ParticleEmitter14getRepeatDelayEv,0,__ZN4Ogre19LinearForceAffector14CmdForceVectorD1Ev,0,__ZN4Ogre19ColourFaderAffector12CmdRedAdjustD0Ev,0,__ZN4Ogre11AreaEmitter8CmdWidth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre27ColourFaderAffectorFactory2D0Ev,0,__ZN4Ogre26InvalidParametersExceptionD0Ev,0,__ZNK4Ogre15ParticleEmitter13getTimeToLiveEv,0,__ZN4Ogre19LinearForceAffector11CmdForceApp5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre26LinearForceAffectorFactoryD1Ev,0,__ZN4Ogre15StringInterface16setParameterListERKNSt3__13mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS_12STLAllocatorINS1_4pairIKS8_S8_EENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEEEE,0,__ZNK4Ogre18RingEmitterFactory7getNameEv,0,__ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD0Ev,0,__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D1Ev,0,__ZN4Ogre15ParticleEmitter20genEmissionDirectionERNS_7Vector3E,0,__ZN4Ogre26ColourInterpolatorAffectorD0Ev,0,__ZN4Ogre15ParticleEmitter17setMaxRepeatDelayEf,0,__ZNK4Ogre15StringInterface12getParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE,0,__ZN4Ogre11AreaEmitter12setDirectionERKNS_7Vector3E,0,___cxx_global_array_dtor,0,__ZN4Ogre16ParticleFXPlugin9uninstallEv,0,__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev,0,__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD1Ev,0,__ZN4Ogre19LinearForceAffector14CmdForceVectorD0Ev,0,__ZN4Ogre19ColourFaderAffector12CmdRedAdjustD1Ev,0,__ZN4Ogre19LinearForceAffector14CmdForceVector5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE,0,__ZN4Ogre19PointEmitterFactoryD0Ev,0,__ZNK4Ogre11AreaEmitter9CmdHeight5doGetEPKv,0,__ZN4Ogre27ColourFaderAffectorFactory2D1Ev,0,__ZN4Ogre16EllipsoidEmitterD1Ev,0,__ZN4Ogre15ParticleEmitter5setUpERKNS_7Vector3E,0,__ZNK4Ogre15ParticleEmitter12getStartTimeEv,0,__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZNK4Ogre15ParticleEmitter11getDurationEv,0,__ZNK4Ogre23RotationAffectorFactory7getNameEv,0,__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD1Ev,0,__ZN4Ogre26ColourImageAffectorFactoryD1Ev,0]);
// EMSCRIPTEN_START_FUNCS
function __ZN4Ogre11AreaEmitter8CmdWidthD1Ev(r1){return}function __ZN4Ogre11AreaEmitter9CmdHeightD1Ev(r1){return}function __ZN4Ogre11AreaEmitter8CmdDepthD1Ev(r1){return}function __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($this,$t){var sp=STACKTOP;STACKTOP=STACKTOP+208|0;var $ref_tmp=sp;var $ref_tmp8=sp+16;var $ref_tmp9=sp+48;var $ref_tmp10=sp+64;var $ref_tmp23=sp+80;var $ref_tmp24=sp+112;var $ref_tmp25=sp+128;var $ref_tmp40=sp+144;var $ref_tmp41=sp+176;var $ref_tmp42=sp+192;var $0=$this|0;var $1=HEAPF32[__ZN4Ogre7Vector36UNIT_ZE>>2];HEAPF32[$this+132>>2]=$1;var $2=HEAPF32[__ZN4Ogre7Vector36UNIT_ZE+4>>2];HEAPF32[$this+136>>2]=$2;var $3=HEAPF32[__ZN4Ogre7Vector36UNIT_ZE+8>>2];HEAPF32[$this+140>>2]=$3;var $4=HEAPF32[__ZN4Ogre7Vector36UNIT_YE>>2];HEAPF32[$this+144>>2]=$4;var $5=HEAPF32[__ZN4Ogre7Vector36UNIT_YE+4>>2];HEAPF32[$this+148>>2]=$5;var $6=HEAPF32[__ZN4Ogre7Vector36UNIT_YE+8>>2];HEAPF32[$this+152>>2]=$6;HEAPF32[$this+272>>2]=100;HEAPF32[$this+276>>2]=100;HEAPF32[$this+280>>2]=100;HEAPF32[$this+284>>2]=($5*$3-$6*$2)*50;HEAPF32[$this+288>>2]=($6*$1-$3*$4)*50;HEAPF32[$this+292>>2]=($2*$4-$5*$1)*50;HEAPF32[$this+296>>2]=$4*50;HEAPF32[$this+300>>2]=$5*50;HEAPF32[$this+304>>2]=$6*50;HEAPF32[$this+308>>2]=$1*50;HEAPF32[$this+312>>2]=$2*50;HEAPF32[$this+316>>2]=$3*50;var $mType=$this+120|0;__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($mType,$t);var $7=$this|0;__ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6_($ref_tmp,$mType,__str|0);var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($7,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $35$0=___cxa_find_matching_catch(-1,-1);var $36=$35$0;var $37=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $ehselector_slot_6=$37;var $exn_slot_6=$36;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}__ZdlPv(HEAP32[$ref_tmp+8>>2]);var $ehselector_slot_6=$37;var $exn_slot_6=$36;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}if(!$call5){var $retval_0=0;var $retval_0;STACKTOP=sp;return $retval_0}__ZN4Ogre15ParticleEmitter17addBaseParametersEv($0);var $10=HEAP32[$this+16>>2];var $__s2_i_i=$ref_tmp9;var $__size__i50_i=$ref_tmp9;HEAP8[$__size__i50_i]=10;var $arrayidx_i_i=$__s2_i_i+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str3|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str3+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str3+2|0];HEAP8[$arrayidx_i_i+3|0]=HEAP8[__str3+3|0];HEAP8[$arrayidx_i_i+4|0]=HEAP8[__str3+4|0];HEAP8[$__s2_i_i+6|0]=0;var $call_i_i_i36=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i=$ref_tmp10+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i36;HEAP32[$ref_tmp10>>2]=49;HEAP32[$ref_tmp10+4>>2]=40;_memcpy($call_i_i_i36,__str4|0,40)|0;HEAP8[$call_i_i_i36+40|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp8,$ref_tmp9,$ref_tmp10,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($10,$ref_tmp8,__ZN4Ogre11AreaEmitter10msWidthCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $46$0=___cxa_find_matching_catch(-1,-1);var $47=$46$0;var $48=tempRet0;if((HEAP8[$ref_tmp8+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+20>>2])}if((HEAP8[$ref_tmp8]&1)==0){var $ehselector_slot_0=$48;var $exn_slot_0=$47;break}__ZdlPv(HEAP32[$ref_tmp8+8>>2]);var $ehselector_slot_0=$48;var $exn_slot_0=$47;break}if((HEAP8[$ref_tmp8+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+20>>2])}if((HEAP8[$ref_tmp8]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+8>>2])}if((HEAP8[$ref_tmp10]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp9+8>>2])}var $__s2_i_i64=$ref_tmp24;var $__size__i50_i65=$ref_tmp24;HEAP8[$__size__i50_i65]=12;var $arrayidx_i_i66=$__s2_i_i64+1|0;HEAP8[$arrayidx_i_i66]=HEAP8[__str5|0];HEAP8[$arrayidx_i_i66+1|0]=HEAP8[__str5+1|0];HEAP8[$arrayidx_i_i66+2|0]=HEAP8[__str5+2|0];HEAP8[$arrayidx_i_i66+3|0]=HEAP8[__str5+3|0];HEAP8[$arrayidx_i_i66+4|0]=HEAP8[__str5+4|0];HEAP8[$arrayidx_i_i66+5|0]=HEAP8[__str5+5|0];HEAP8[$__s2_i_i64+7|0]=0;var $call_i_i_i91=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i82=$ref_tmp25+8|0;HEAP32[$__data__i_i82>>2]=$call_i_i_i91;HEAP32[$ref_tmp25>>2]=49;HEAP32[$ref_tmp25+4>>2]=41;_memcpy($call_i_i_i91,__str6|0,41)|0;HEAP8[$call_i_i_i91+41|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp23,$ref_tmp24,$ref_tmp25,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($10,$ref_tmp23,__ZN4Ogre11AreaEmitter11msHeightCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $63$0=___cxa_find_matching_catch(-1,-1);var $64=$63$0;var $65=tempRet0;if((HEAP8[$ref_tmp23+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp23+20>>2])}if((HEAP8[$ref_tmp23]&1)==0){var $ehselector_slot_2=$65;var $exn_slot_2=$64;break}__ZdlPv(HEAP32[$ref_tmp23+8>>2]);var $ehselector_slot_2=$65;var $exn_slot_2=$64;break}if((HEAP8[$ref_tmp23+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp23+20>>2])}if((HEAP8[$ref_tmp23]&1)!=0){__ZdlPv(HEAP32[$ref_tmp23+8>>2])}if((HEAP8[$ref_tmp25]&1)!=0){__ZdlPv(HEAP32[$__data__i_i82>>2])}if((HEAP8[$__size__i50_i65]&1)!=0){__ZdlPv(HEAP32[$ref_tmp24+8>>2])}var $__s2_i_i121=$ref_tmp41;var $__size__i50_i122=$ref_tmp41;HEAP8[$__size__i50_i122]=10;var $arrayidx_i_i123=$__s2_i_i121+1|0;HEAP8[$arrayidx_i_i123]=HEAP8[__str7|0];HEAP8[$arrayidx_i_i123+1|0]=HEAP8[__str7+1|0];HEAP8[$arrayidx_i_i123+2|0]=HEAP8[__str7+2|0];HEAP8[$arrayidx_i_i123+3|0]=HEAP8[__str7+3|0];HEAP8[$arrayidx_i_i123+4|0]=HEAP8[__str7+4|0];HEAP8[$__s2_i_i121+6|0]=0;var $call_i_i_i148=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i139=$ref_tmp42+8|0;HEAP32[$__data__i_i139>>2]=$call_i_i_i148;HEAP32[$ref_tmp42>>2]=49;HEAP32[$ref_tmp42+4>>2]=40;_memcpy($call_i_i_i148,__str8|0,40)|0;HEAP8[$call_i_i_i148+40|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp40,$ref_tmp41,$ref_tmp42,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($10,$ref_tmp40,__ZN4Ogre11AreaEmitter10msDepthCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $80$0=___cxa_find_matching_catch(-1,-1);var $81=$80$0;var $82=tempRet0;if((HEAP8[$ref_tmp40+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp40+20>>2])}if((HEAP8[$ref_tmp40]&1)==0){var $ehselector_slot_4=$82;var $exn_slot_4=$81;break}__ZdlPv(HEAP32[$ref_tmp40+8>>2]);var $ehselector_slot_4=$82;var $exn_slot_4=$81;break}if((HEAP8[$ref_tmp40+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp40+20>>2])}if((HEAP8[$ref_tmp40]&1)!=0){__ZdlPv(HEAP32[$ref_tmp40+8>>2])}if((HEAP8[$ref_tmp42]&1)!=0){__ZdlPv(HEAP32[$__data__i_i139>>2])}if((HEAP8[$__size__i50_i122]&1)==0){var $retval_0=1;var $retval_0;STACKTOP=sp;return $retval_0}__ZdlPv(HEAP32[$ref_tmp41+8>>2]);var $retval_0=1;var $retval_0;STACKTOP=sp;return $retval_0}else{var $77$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_4=tempRet0;var $exn_slot_4=$77$0}}while(0);var $exn_slot_4;var $ehselector_slot_4;if((HEAP8[$ref_tmp42]&1)==0){var $ehselector_slot_5=$ehselector_slot_4;var $exn_slot_5=$exn_slot_4;break}__ZdlPv(HEAP32[$__data__i_i139>>2]);var $ehselector_slot_5=$ehselector_slot_4;var $exn_slot_5=$exn_slot_4}else{var $74$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_5=tempRet0;var $exn_slot_5=$74$0}}while(0);var $exn_slot_5;var $ehselector_slot_5;if((HEAP8[$__size__i50_i122]&1)==0){var $ehselector_slot_6=$ehselector_slot_5;var $exn_slot_6=$exn_slot_5;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}__ZdlPv(HEAP32[$ref_tmp41+8>>2]);var $ehselector_slot_6=$ehselector_slot_5;var $exn_slot_6=$exn_slot_5;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}else{var $60$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_2=tempRet0;var $exn_slot_2=$60$0}}while(0);var $exn_slot_2;var $ehselector_slot_2;if((HEAP8[$ref_tmp25]&1)==0){var $ehselector_slot_3=$ehselector_slot_2;var $exn_slot_3=$exn_slot_2;break}__ZdlPv(HEAP32[$__data__i_i82>>2]);var $ehselector_slot_3=$ehselector_slot_2;var $exn_slot_3=$exn_slot_2}else{var $57$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_3=tempRet0;var $exn_slot_3=$57$0}}while(0);var $exn_slot_3;var $ehselector_slot_3;if((HEAP8[$__size__i50_i65]&1)==0){var $ehselector_slot_6=$ehselector_slot_3;var $exn_slot_6=$exn_slot_3;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}__ZdlPv(HEAP32[$ref_tmp24+8>>2]);var $ehselector_slot_6=$ehselector_slot_3;var $exn_slot_6=$exn_slot_3;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}else{var $43$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$43$0}}while(0);var $exn_slot_0;var $ehselector_slot_0;if((HEAP8[$ref_tmp10]&1)==0){var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0}else{var $40$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_1=tempRet0;var $exn_slot_1=$40$0}}while(0);var $exn_slot_1;var $ehselector_slot_1;if((HEAP8[$__size__i50_i]&1)==0){var $ehselector_slot_6=$ehselector_slot_1;var $exn_slot_6=$exn_slot_1;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}__ZdlPv(HEAP32[$ref_tmp9+8>>2]);var $ehselector_slot_6=$ehselector_slot_1;var $exn_slot_6=$exn_slot_1;var $exn_slot_6;var $ehselector_slot_6;var $lpad_val$0=$exn_slot_6;var $lpad_val$1=0;var $lpad_val57$0=$lpad_val$0;var $lpad_val57$1=$ehselector_slot_6;___resumeException($lpad_val57$0)}function __ZN4Ogre11AreaEmitter7setSizeEfff(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11;HEAPF32[r1+272>>2]=r2;HEAPF32[r1+276>>2]=r3;HEAPF32[r1+280>>2]=r4;r5=HEAPF32[r1+148>>2];r6=HEAPF32[r1+140>>2];r7=HEAPF32[r1+152>>2];r8=HEAPF32[r1+136>>2];r9=HEAPF32[r1+132>>2];r10=HEAPF32[r1+144>>2];r11=r2*.5;HEAPF32[r1+284>>2]=(r5*r6-r7*r8)*r11;HEAPF32[r1+288>>2]=(r7*r9-r6*r10)*r11;HEAPF32[r1+292>>2]=(r8*r10-r5*r9)*r11;r11=r3*.5;HEAPF32[r1+296>>2]=r10*r11;HEAPF32[r1+300>>2]=r5*r11;HEAPF32[r1+304>>2]=r7*r11;r11=r4*.5;HEAPF32[r1+308>>2]=r9*r11;HEAPF32[r1+312>>2]=r8*r11;HEAPF32[r1+316>>2]=r6*r11;return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;if((r1|0)==(r2|0)){return r1}r3=HEAP8[r2];if((r3&1)==0){r4=r2+1|0}else{r4=HEAP32[r2+8>>2]}r5=r3&255;if((r5&1|0)==0){r6=r5>>>1}else{r6=HEAP32[r2+4>>2]}r2=r1;r5=r1;r3=HEAP8[r5];if((r3&1)==0){r7=10;r8=r3}else{r3=HEAP32[r1>>2];r7=(r3&-2)-1|0;r8=r3&255}if(r7>>>0<r6>>>0){r3=r8&255;if((r3&1|0)==0){r9=r3>>>1}else{r9=HEAP32[r1+4>>2]}__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r7,r6-r7|0,r9,0,r9,r6,r4);return r1}if((r8&1)==0){r10=r2+1|0}else{r10=HEAP32[r1+8>>2]}_memmove(r10,r4,r6,1,0);HEAP8[r10+r6|0]=0;if((HEAP8[r5]&1)==0){HEAP8[r5]=r6<<1;return r1}else{HEAP32[r1+4>>2]=r6;return r1}}function __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($this,$className){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+224|0;var $__parent_i=sp;var $temp_lvalue_i=sp+8;var $ref_tmp2_i=sp+24;var $agg_tmp_i=sp+72;var $ref_tmp2=sp+80;var $ref_tmp3=sp+128;var $agg_tmp=sp+176;var $agg_tmp4=sp+192;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_($agg_tmp_i,__ZN4Ogre15StringInterface12msDictionaryE|0,$className);var $agg_tmp2_i_sroa_0_0_copyload4=HEAP32[$agg_tmp_i>>2];if(($agg_tmp2_i_sroa_0_0_copyload4|0)!=(__ZN4Ogre15StringInterface12msDictionaryE+4|0)){HEAP32[$this+16>>2]=$agg_tmp2_i_sroa_0_0_copyload4+28;__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($this+4|0,$className);var $retval_0=0;var $retval_0;STACKTOP=sp;return $retval_0}var $__size__i44_i_i=$className;if((HEAP8[$__size__i44_i_i]&1)==0){var $1=$agg_tmp;HEAP32[$1>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$1+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$1+8>>2]=HEAP32[$__size__i44_i_i+8>>2];var $6=HEAP8[$1];var $__size__i44_i_i10_pre_phi=$1}else{var $2=HEAP32[$className+8>>2];var $3=HEAP32[$className+4>>2];if($3>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if($3>>>0<11){var $conv_i_i_i_i=$3<<1&255;var $__size__i50_i_i_i=$agg_tmp;HEAP8[$__size__i50_i_i_i]=$conv_i_i_i_i;var $__p_0_i_i_i=$agg_tmp+1|0;var $5=$conv_i_i_i_i;var $__size__i44_i_i10_pre_pre_phi=$__size__i50_i_i_i}else{var $and_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i=__Znwj($and_i_i_i_i_i);HEAP32[$agg_tmp+8>>2]=$call_i_i_i_i_i;var $or_i_i_i_i=$and_i_i_i_i_i|1;HEAP32[$agg_tmp>>2]=$or_i_i_i_i;HEAP32[$agg_tmp+4>>2]=$3;var $__p_0_i_i_i=$call_i_i_i_i_i;var $5=$or_i_i_i_i&255;var $__size__i44_i_i10_pre_pre_phi=$agg_tmp}var $__size__i44_i_i10_pre_pre_phi;var $5;var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i+$3|0]=0;var $6=$5;var $__size__i44_i_i10_pre_phi=$__size__i44_i_i10_pre_pre_phi}var $__size__i44_i_i10_pre_phi;var $6;var $__begin__i_i_i_i_i=$agg_tmp4|0;HEAP32[$__begin__i_i_i_i_i>>2]=0;var $__end__i_i_i_i_i=$agg_tmp4+4|0;HEAP32[$__end__i_i_i_i_i>>2]=0;HEAP32[$agg_tmp4+8>>2]=0;HEAP32[$agg_tmp4+12>>2]=__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;var $8=$agg_tmp4+20|0;HEAP32[$8>>2]=0;HEAP32[$agg_tmp4+24>>2]=__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[$agg_tmp4+28>>2]=0;HEAP32[$agg_tmp4+16>>2]=$8;L16:do{if(($6&1)==0){var $11=$ref_tmp3;HEAP32[$11>>2]=HEAP32[$__size__i44_i_i10_pre_phi>>2];HEAP32[$11+4>>2]=HEAP32[$__size__i44_i_i10_pre_phi+4>>2];HEAP32[$11+8>>2]=HEAP32[$__size__i44_i_i10_pre_phi+8>>2];label=20}else{var $12=HEAP32[$agg_tmp+8>>2];var $13=HEAP32[$agg_tmp+4>>2];do{if($13>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($13>>>0<11){HEAP8[$ref_tmp3]=$13<<1;var $__p_0_i_i_i35=$ref_tmp3+1|0}else{var $and_i_i_i_i_i28=$13+16&-16;var $call_i_i_i_i_i2939=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i28)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$ref_tmp3+8>>2]=$call_i_i_i_i_i2939;HEAP32[$ref_tmp3>>2]=$and_i_i_i_i_i28|1;HEAP32[$ref_tmp3+4>>2]=$13;var $__p_0_i_i_i35=$call_i_i_i_i_i2939}var $__p_0_i_i_i35;_memcpy($__p_0_i_i_i35,$12,$13)|0;HEAP8[$__p_0_i_i_i35+$13|0]=0;label=20;break L16}}while(0);var $78$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$78$0;label=84}}while(0);do{if(label==20){var $second_i_i_i=$ref_tmp3+12|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionaryC2ERKS0_($second_i_i_i,$agg_tmp4)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $14$0=___cxa_find_matching_catch(-1,-1);var $14$1=tempRet0;if((HEAP8[$ref_tmp3]&1)==0){var $eh_lpad_body$1=$14$1;var $eh_lpad_body$0=$14$0;label=84;break}__ZdlPv(HEAP32[$ref_tmp3+8>>2]);var $eh_lpad_body$1=$14$1;var $eh_lpad_body$0=$14$0;label=84;break}var $__size__i44_i_i47=$ref_tmp3;do{if((HEAP8[$__size__i44_i_i47]&1)==0){var $18=$ref_tmp2;HEAP32[$18>>2]=HEAP32[$__size__i44_i_i47>>2];HEAP32[$18+4>>2]=HEAP32[$__size__i44_i_i47+4>>2];HEAP32[$18+8>>2]=HEAP32[$__size__i44_i_i47+8>>2];label=33}else{var $19=HEAP32[$ref_tmp3+8>>2];var $20=HEAP32[$ref_tmp3+4>>2];if($20>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=85;break}}if($20>>>0<11){HEAP8[$ref_tmp2]=$20<<1;var $__p_0_i_i_i72=$ref_tmp2+1|0}else{var $and_i_i_i_i_i65=$20+16&-16;var $call_i_i_i_i_i6676=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i65)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=85;break}HEAP32[$ref_tmp2+8>>2]=$call_i_i_i_i_i6676;HEAP32[$ref_tmp2>>2]=$and_i_i_i_i_i65|1;HEAP32[$ref_tmp2+4>>2]=$20;var $__p_0_i_i_i72=$call_i_i_i_i_i6676}var $__p_0_i_i_i72;_memcpy($__p_0_i_i_i72,$19,$20)|0;HEAP8[$__p_0_i_i_i72+$20|0]=0;label=33}}while(0);L47:do{if(label==33){var $second_i_i=$ref_tmp2+12|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionaryC2ERKS0_($second_i_i,$second_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $21$0=___cxa_find_matching_catch(-1,-1);var $21$1=tempRet0;if((HEAP8[$ref_tmp2]&1)==0){var $eh_lpad_body62$1=$21$1;var $eh_lpad_body62$0=$21$0;label=86;break}__ZdlPv(HEAP32[$ref_tmp2+8>>2]);var $eh_lpad_body62$1=$21$1;var $eh_lpad_body62$0=$21$0;label=86;break}var $__cc_i_i_i=$ref_tmp2_i|0;var $__size__i44_i_i_i_i=$ref_tmp2;do{if((HEAP8[$__size__i44_i_i_i_i]&1)==0){var $25=$ref_tmp2_i;HEAP32[$25>>2]=HEAP32[$__size__i44_i_i_i_i>>2];HEAP32[$25+4>>2]=HEAP32[$__size__i44_i_i_i_i+4>>2];HEAP32[$25+8>>2]=HEAP32[$__size__i44_i_i_i_i+8>>2];label=46}else{var $26=HEAP32[$ref_tmp2+8>>2];var $27=HEAP32[$ref_tmp2+4>>2];if($27>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=87;break}}if($27>>>0<11){HEAP8[$ref_tmp2_i]=$27<<1;var $__p_0_i_i_i_i_i=$ref_tmp2_i+1|0}else{var $and_i_i_i_i_i_i_i=$27+16&-16;var $call_i_i_i_i_i_i_i91=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=87;break}HEAP32[$ref_tmp2_i+8>>2]=$call_i_i_i_i_i_i_i91;HEAP32[$ref_tmp2_i>>2]=$and_i_i_i_i_i_i_i|1;HEAP32[$ref_tmp2_i+4>>2]=$27;var $__p_0_i_i_i_i_i=$call_i_i_i_i_i_i_i91}var $__p_0_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i,$26,$27)|0;HEAP8[$__p_0_i_i_i_i_i+$27|0]=0;label=46}}while(0);do{if(label==46){var $second_i_i88=$ref_tmp2_i+12|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionaryC2ERKS0_($second_i_i88,$second_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $28$0=___cxa_find_matching_catch(-1,-1);var $28$1=tempRet0;if((HEAP8[$ref_tmp2_i]&1)==0){var $eh_lpad_body80$1=$28$1;var $eh_lpad_body80$0=$28$0;break}__ZdlPv(HEAP32[$ref_tmp2_i+8>>2]);var $eh_lpad_body80$1=$28$1;var $eh_lpad_body80$0=$28$0;break}var $call_i=__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISA_EERPNS_16__tree_node_baseIPvEESQ_RKT_(__ZN4Ogre15StringInterface12msDictionaryE|0,$__parent_i,$ref_tmp2_i);var $33=HEAP32[$call_i>>2];var $34=$33;if(($33|0)==0){((function(){try{__THREW__=0;return __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSA_($temp_lvalue_i,__ZN4Ogre15StringInterface12msDictionaryE|0,$ref_tmp2_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $44$0=___cxa_find_matching_catch(-1,-1);var $44$1=tempRet0;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev($__cc_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body80$1=$44$1;var $eh_lpad_body80$0=$44$0;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}var $__first__i_i_i28_i_i_i=$temp_lvalue_i|0;var $35=HEAP32[$__first__i_i_i28_i_i_i>>2];HEAP32[$__first__i_i_i28_i_i_i>>2]=0;var $36=HEAP32[$__parent_i>>2];var $37=$35|0;HEAP32[$35>>2]=0;HEAP32[$35+4>>2]=0;HEAP32[$35+8>>2]=$36;HEAP32[$call_i>>2]=$37;var $39=HEAP32[HEAP32[__ZN4Ogre15StringInterface12msDictionaryE>>2]>>2];if(($39|0)==0){var $41=$37}else{HEAP32[__ZN4Ogre15StringInterface12msDictionaryE>>2]=$39;var $41=HEAP32[$call_i>>2]}var $41;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[__ZN4Ogre15StringInterface12msDictionaryE+4>>2],$41);HEAP32[__ZN4Ogre15StringInterface12msDictionaryE+12>>2]=HEAP32[__ZN4Ogre15StringInterface12msDictionaryE+12>>2]+1;var $__r_0_i=$35}else{var $__r_0_i=$34}var $__r_0_i;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev($__cc_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=87;break}HEAP32[$this+16>>2]=$__r_0_i+28;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev($ref_tmp2)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=85;break L47}__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($ref_tmp3+28|0,HEAP32[$ref_tmp3+32>>2]);var $__begin__i_i_i_i_i172=$second_i_i_i|0;var $48=HEAP32[$__begin__i_i_i_i_i172>>2];do{if(($48|0)!=0){var $__end__i_i_i_i_i_i_i174=$ref_tmp3+16|0;var $49=HEAP32[$__end__i_i_i_i_i_i_i174>>2];if(($48|0)==($49|0)){var $56=$48}else{var $50=$49;while(1){var $50;var $incdec_ptr_i_i_i_i_i_i_i177=$50-28|0;HEAP32[$__end__i_i_i_i_i_i_i174>>2]=$incdec_ptr_i_i_i_i_i_i_i177;if((HEAP8[$50-28+12|0]&1)!=0){__ZdlPv(HEAP32[$50-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i_i_i177]&1)!=0){__ZdlPv(HEAP32[$50-28+8>>2])}var $54=HEAP32[$__end__i_i_i_i_i_i_i174>>2];if(($48|0)==($54|0)){break}else{var $50=$54}}var $56=HEAP32[$__begin__i_i_i_i_i172>>2]}var $56;var $57=$56;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($57)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $58$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($58$0)}}while(0);if((HEAP8[$__size__i44_i_i47]&1)!=0){__ZdlPv(HEAP32[$ref_tmp3+8>>2])}__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($agg_tmp4+16|0,HEAP32[$agg_tmp4+20>>2]);var $64=HEAP32[$__begin__i_i_i_i_i>>2];do{if(($64|0)!=0){var $65=HEAP32[$__end__i_i_i_i_i>>2];if(($64|0)==($65|0)){var $72=$64}else{var $66=$65;while(1){var $66;var $incdec_ptr_i_i_i_i_i_i_i=$66-28|0;HEAP32[$__end__i_i_i_i_i>>2]=$incdec_ptr_i_i_i_i_i_i_i;if((HEAP8[$66-28+12|0]&1)!=0){__ZdlPv(HEAP32[$66-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$66-28+8>>2])}var $70=HEAP32[$__end__i_i_i_i_i>>2];if(($64|0)==($70|0)){break}else{var $66=$70}}var $72=HEAP32[$__begin__i_i_i_i_i>>2]}var $72;var $73=$72;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($73)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $74$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($74$0)}}while(0);if((HEAP8[$__size__i44_i_i10_pre_phi]&1)!=0){__ZdlPv(HEAP32[$agg_tmp+8>>2])}__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($this+4|0,$className);var $retval_0=1;var $retval_0;STACKTOP=sp;return $retval_0}}while(0);if(label==87){var $84$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body80$1=tempRet0;var $eh_lpad_body80$0=$84$0}var $eh_lpad_body80$0;var $eh_lpad_body80$1;var $85=$eh_lpad_body80$0;var $86=$eh_lpad_body80$1;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev($ref_tmp2)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_0=$86;var $exn_slot_0=$85;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}while(0);if(label==85){var $81$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body62$1=tempRet0;var $eh_lpad_body62$0=$81$0;label=86}if(label==86){var $eh_lpad_body62$0;var $eh_lpad_body62$1;var $ehselector_slot_0=$eh_lpad_body62$1;var $exn_slot_0=$eh_lpad_body62$0}var $exn_slot_0;var $ehselector_slot_0;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($ref_tmp3+28|0,HEAP32[$ref_tmp3+32>>2]);var $__begin__i_i_i_i_i200=$second_i_i_i|0;var $89=HEAP32[$__begin__i_i_i_i_i200>>2];do{if(($89|0)!=0){var $__end__i_i_i_i_i_i_i202=$ref_tmp3+16|0;var $90=HEAP32[$__end__i_i_i_i_i_i_i202>>2];if(($89|0)==($90|0)){var $97=$89}else{var $91=$90;while(1){var $91;var $incdec_ptr_i_i_i_i_i_i_i205=$91-28|0;HEAP32[$__end__i_i_i_i_i_i_i202>>2]=$incdec_ptr_i_i_i_i_i_i_i205;if((HEAP8[$91-28+12|0]&1)!=0){__ZdlPv(HEAP32[$91-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i_i_i205]&1)!=0){__ZdlPv(HEAP32[$91-28+8>>2])}var $95=HEAP32[$__end__i_i_i_i_i_i_i202>>2];if(($89|0)==($95|0)){break}else{var $91=$95}}var $97=HEAP32[$__begin__i_i_i_i_i200>>2]}var $97;var $98=$97;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($98)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $99$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($99$0)}}while(0);if((HEAP8[$__size__i44_i_i47]&1)==0){var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0;break}__ZdlPv(HEAP32[$ref_tmp3+8>>2]);var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0}}while(0);if(label==84){var $eh_lpad_body$0;var $eh_lpad_body$1;var $ehselector_slot_1=$eh_lpad_body$1;var $exn_slot_1=$eh_lpad_body$0}var $exn_slot_1;var $ehselector_slot_1;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($agg_tmp4+16|0,HEAP32[$agg_tmp4+20>>2]);var $105=HEAP32[$__begin__i_i_i_i_i>>2];do{if(($105|0)!=0){var $106=HEAP32[$__end__i_i_i_i_i>>2];if(($105|0)==($106|0)){var $113=$105}else{var $107=$106;while(1){var $107;var $incdec_ptr_i_i_i_i_i_i_i143=$107-28|0;HEAP32[$__end__i_i_i_i_i>>2]=$incdec_ptr_i_i_i_i_i_i_i143;if((HEAP8[$107-28+12|0]&1)!=0){__ZdlPv(HEAP32[$107-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i_i_i143]&1)!=0){__ZdlPv(HEAP32[$107-28+8>>2])}var $111=HEAP32[$__end__i_i_i_i_i>>2];if(($105|0)==($111|0)){break}else{var $107=$111}}var $113=HEAP32[$__begin__i_i_i_i_i>>2]}var $113;var $114=$113;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($114)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $115$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($115$0)}}while(0);if((HEAP8[$__size__i44_i_i10_pre_phi]&1)==0){var $lpad_val$0=$exn_slot_1;var $lpad_val$1=0;var $lpad_val28$0=$lpad_val$0;var $lpad_val28$1=$ehselector_slot_1;___resumeException($lpad_val28$0)}__ZdlPv(HEAP32[$agg_tmp+8>>2]);var $lpad_val$0=$exn_slot_1;var $lpad_val$1=0;var $lpad_val28$0=$lpad_val$0;var $lpad_val28$1=$ehselector_slot_1;___resumeException($lpad_val28$0)}function __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6_($agg_result,$__lhs,$__rhs){var $__size__i_i_i=$agg_result;HEAP32[$__size__i_i_i>>2]=0;HEAP32[$__size__i_i_i+4>>2]=0;HEAP32[$__size__i_i_i+8>>2]=0;var $0=HEAP8[$__lhs];var $conv_i_i=$0&255;if(($conv_i_i&1|0)==0){var $cond_i=$conv_i_i>>>1}else{var $cond_i=HEAP32[$__lhs+4>>2]}var $cond_i;var $call_i26=_strlen($__rhs);if(($0&1)==0){var $cond_i_i=$__lhs+1|0}else{var $cond_i_i=HEAP32[$__lhs+8>>2]}var $cond_i_i;var $add=$call_i26+$cond_i|0;do{if($add>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($add>>>0<11){HEAP8[$__size__i_i_i]=$cond_i<<1;var $__p_0_i=$agg_result+1|0}else{var $and_i_i_i10=$add+16&-16;var $call_i_i_i13=(function(){try{__THREW__=0;return __Znwj($and_i_i_i10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$agg_result+8>>2]=$call_i_i_i13;HEAP32[$agg_result>>2]=$and_i_i_i10|1;HEAP32[$agg_result+4>>2]=$cond_i;var $__p_0_i=$call_i_i_i13}var $__p_0_i;_memcpy($__p_0_i,$cond_i_i,$cond_i)|0;HEAP8[$__p_0_i+$cond_i|0]=0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($agg_result,$__rhs,$call_i26)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}return}}while(0);var $3$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i_i_i]&1)==0){___resumeException($3$0)}__ZdlPv(HEAP32[$agg_result+8>>2]);___resumeException($3$0)}function __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12;r4=STACKTOP;STACKTOP=STACKTOP+24|0;r5=r4;r6=r4+8;r7=r1+4|0;r8=HEAP32[r7>>2];if((r8|0)==(HEAP32[r1+8>>2]|0)){__ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_(r1|0,r2)}else{if((r8|0)==0){r9=0}else{__ZN4Ogre12ParameterDefC2ERKS0_(r8,r2);r9=HEAP32[r7>>2]}HEAP32[r7>>2]=r9+28}r9=r1+16|0;r7=r2|0;r2=__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_(r9,r5,r7);r8=HEAP32[r2>>2];if((r8|0)!=0){r10=r8;r11=r10+28|0;HEAP32[r11>>2]=r3;STACKTOP=r4;return}__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_(r6,r9,r7);r7=r6|0;r6=HEAP32[r7>>2];HEAP32[r7>>2]=0;r7=HEAP32[r5>>2];r5=r6|0;HEAP32[r6>>2]=0;HEAP32[r6+4>>2]=0;HEAP32[r6+8>>2]=r7;HEAP32[r2>>2]=r5;r7=r9|0;r9=HEAP32[HEAP32[r7>>2]>>2];if((r9|0)==0){r12=r5}else{HEAP32[r7>>2]=r9;r12=HEAP32[r2>>2]}__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r1+20>>2],r12);r12=r1+28|0;HEAP32[r12>>2]=HEAP32[r12>>2]+1;r10=r6;r11=r10+28|0;HEAP32[r11>>2]=r3;STACKTOP=r4;return}function __ZN4Ogre11AreaEmitter17_getEmissionCountEf(r1,r2){return FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+40>>2]](r1|0,r2)}function __ZN4Ogre11AreaEmitter12setDirectionERKNS_7Vector3E(r1,r2){var r3,r4,r5,r6,r7,r8;__ZN4Ogre15ParticleEmitter12setDirectionERKNS_7Vector3E(r1|0,r2);r2=HEAPF32[r1+148>>2];r3=HEAPF32[r1+140>>2];r4=HEAPF32[r1+152>>2];r5=HEAPF32[r1+136>>2];r6=HEAPF32[r1+132>>2];r7=HEAPF32[r1+144>>2];r8=HEAPF32[r1+272>>2]*.5;HEAPF32[r1+284>>2]=(r2*r3-r4*r5)*r8;HEAPF32[r1+288>>2]=(r4*r6-r3*r7)*r8;HEAPF32[r1+292>>2]=(r5*r7-r2*r6)*r8;r8=HEAPF32[r1+276>>2]*.5;HEAPF32[r1+296>>2]=r7*r8;HEAPF32[r1+300>>2]=r2*r8;HEAPF32[r1+304>>2]=r4*r8;r8=HEAPF32[r1+280>>2]*.5;HEAPF32[r1+308>>2]=r6*r8;HEAPF32[r1+312>>2]=r5*r8;HEAPF32[r1+316>>2]=r3*r8;return}function __ZN4Ogre11AreaEmitter11genAreaAxesEv(r1){var r2,r3,r4,r5,r6,r7,r8;r2=HEAPF32[r1+148>>2];r3=HEAPF32[r1+140>>2];r4=HEAPF32[r1+152>>2];r5=HEAPF32[r1+136>>2];r6=HEAPF32[r1+132>>2];r7=HEAPF32[r1+144>>2];r8=HEAPF32[r1+272>>2]*.5;HEAPF32[r1+284>>2]=(r2*r3-r4*r5)*r8;HEAPF32[r1+288>>2]=(r4*r6-r3*r7)*r8;HEAPF32[r1+292>>2]=(r5*r7-r2*r6)*r8;r8=HEAPF32[r1+276>>2]*.5;HEAPF32[r1+296>>2]=r7*r8;HEAPF32[r1+300>>2]=r8*r2;HEAPF32[r1+304>>2]=r8*r4;r4=HEAPF32[r1+280>>2]*.5;HEAPF32[r1+308>>2]=r6*r4;HEAPF32[r1+312>>2]=r4*r5;HEAPF32[r1+316>>2]=r4*r3;return}function __ZN4Ogre11AreaEmitter7setSizeERKNS_7Vector3E(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=HEAPF32[r2>>2];HEAPF32[r1+272>>2]=r3;r4=HEAPF32[r2+4>>2];HEAPF32[r1+276>>2]=r4;r5=HEAPF32[r2+8>>2];HEAPF32[r1+280>>2]=r5;r2=HEAPF32[r1+148>>2];r6=HEAPF32[r1+140>>2];r7=HEAPF32[r1+152>>2];r8=HEAPF32[r1+136>>2];r9=HEAPF32[r1+132>>2];r10=HEAPF32[r1+144>>2];r11=r3*.5;HEAPF32[r1+284>>2]=(r2*r6-r7*r8)*r11;HEAPF32[r1+288>>2]=(r7*r9-r6*r10)*r11;HEAPF32[r1+292>>2]=(r8*r10-r2*r9)*r11;r11=r4*.5;HEAPF32[r1+296>>2]=r10*r11;HEAPF32[r1+300>>2]=r2*r11;HEAPF32[r1+304>>2]=r7*r11;r11=r5*.5;HEAPF32[r1+308>>2]=r9*r11;HEAPF32[r1+312>>2]=r8*r11;HEAPF32[r1+316>>2]=r6*r11;return}function __ZN4Ogre11AreaEmitter8setWidthEf(r1,r2){var r3,r4,r5,r6,r7,r8,r9;HEAPF32[r1+272>>2]=r2;r3=HEAPF32[r1+148>>2];r4=HEAPF32[r1+140>>2];r5=HEAPF32[r1+152>>2];r6=HEAPF32[r1+136>>2];r7=HEAPF32[r1+132>>2];r8=HEAPF32[r1+144>>2];r9=r2*.5;HEAPF32[r1+284>>2]=r9*(r3*r4-r5*r6);HEAPF32[r1+288>>2]=r9*(r5*r7-r4*r8);HEAPF32[r1+292>>2]=r9*(r6*r8-r3*r7);r9=HEAPF32[r1+276>>2]*.5;HEAPF32[r1+296>>2]=r8*r9;HEAPF32[r1+300>>2]=r3*r9;HEAPF32[r1+304>>2]=r5*r9;r9=HEAPF32[r1+280>>2]*.5;HEAPF32[r1+308>>2]=r7*r9;HEAPF32[r1+312>>2]=r6*r9;HEAPF32[r1+316>>2]=r4*r9;return}function __ZNK4Ogre11AreaEmitter8getWidthEv(r1){return HEAPF32[r1+272>>2]}function __ZN4Ogre11AreaEmitter9setHeightEf(r1,r2){var r3,r4,r5,r6,r7,r8,r9;HEAPF32[r1+276>>2]=r2;r3=HEAPF32[r1+148>>2];r4=HEAPF32[r1+140>>2];r5=HEAPF32[r1+152>>2];r6=HEAPF32[r1+136>>2];r7=HEAPF32[r1+132>>2];r8=HEAPF32[r1+144>>2];r9=HEAPF32[r1+272>>2]*.5;HEAPF32[r1+284>>2]=(r3*r4-r5*r6)*r9;HEAPF32[r1+288>>2]=(r5*r7-r4*r8)*r9;HEAPF32[r1+292>>2]=(r6*r8-r3*r7)*r9;r9=r2*.5;HEAPF32[r1+296>>2]=r8*r9;HEAPF32[r1+300>>2]=r3*r9;HEAPF32[r1+304>>2]=r5*r9;r9=HEAPF32[r1+280>>2]*.5;HEAPF32[r1+308>>2]=r7*r9;HEAPF32[r1+312>>2]=r6*r9;HEAPF32[r1+316>>2]=r4*r9;return}function __ZNK4Ogre11AreaEmitter9getHeightEv(r1){return HEAPF32[r1+276>>2]}function __ZN4Ogre11AreaEmitter8setDepthEf(r1,r2){var r3,r4,r5,r6,r7,r8,r9;HEAPF32[r1+280>>2]=r2;r3=HEAPF32[r1+148>>2];r4=HEAPF32[r1+140>>2];r5=HEAPF32[r1+152>>2];r6=HEAPF32[r1+136>>2];r7=HEAPF32[r1+132>>2];r8=HEAPF32[r1+144>>2];r9=HEAPF32[r1+272>>2]*.5;HEAPF32[r1+284>>2]=(r3*r4-r5*r6)*r9;HEAPF32[r1+288>>2]=(r5*r7-r4*r8)*r9;HEAPF32[r1+292>>2]=(r6*r8-r3*r7)*r9;r9=HEAPF32[r1+276>>2]*.5;HEAPF32[r1+296>>2]=r8*r9;HEAPF32[r1+300>>2]=r3*r9;HEAPF32[r1+304>>2]=r5*r9;r9=r2*.5;HEAPF32[r1+308>>2]=r7*r9;HEAPF32[r1+312>>2]=r6*r9;HEAPF32[r1+316>>2]=r4*r9;return}function __ZNK4Ogre11AreaEmitter8getDepthEv(r1){return HEAPF32[r1+280>>2]}function __ZNK4Ogre11AreaEmitter8CmdWidth5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+272>>2],6,0,32,0);return}function __ZN4Ogre11AreaEmitter8CmdWidth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);HEAPF32[r2+272>>2]=r1;r3=HEAPF32[r2+148>>2];r4=HEAPF32[r2+140>>2];r5=HEAPF32[r2+152>>2];r6=HEAPF32[r2+136>>2];r7=HEAPF32[r2+132>>2];r8=HEAPF32[r2+144>>2];r9=r1*.5;HEAPF32[r2+284>>2]=r9*(r3*r4-r5*r6);HEAPF32[r2+288>>2]=r9*(r5*r7-r4*r8);HEAPF32[r2+292>>2]=r9*(r6*r8-r3*r7);r9=HEAPF32[r2+276>>2]*.5;HEAPF32[r2+296>>2]=r8*r9;HEAPF32[r2+300>>2]=r3*r9;HEAPF32[r2+304>>2]=r5*r9;r9=HEAPF32[r2+280>>2]*.5;HEAPF32[r2+308>>2]=r7*r9;HEAPF32[r2+312>>2]=r6*r9;HEAPF32[r2+316>>2]=r4*r9;return}function __ZNK4Ogre11AreaEmitter9CmdHeight5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+276>>2],6,0,32,0);return}function __ZN4Ogre11AreaEmitter9CmdHeight5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);HEAPF32[r2+276>>2]=r1;r3=HEAPF32[r2+148>>2];r4=HEAPF32[r2+140>>2];r5=HEAPF32[r2+152>>2];r6=HEAPF32[r2+136>>2];r7=HEAPF32[r2+132>>2];r8=HEAPF32[r2+144>>2];r9=HEAPF32[r2+272>>2]*.5;HEAPF32[r2+284>>2]=(r3*r4-r5*r6)*r9;HEAPF32[r2+288>>2]=(r5*r7-r4*r8)*r9;HEAPF32[r2+292>>2]=(r6*r8-r3*r7)*r9;r9=r1*.5;HEAPF32[r2+296>>2]=r9*r8;HEAPF32[r2+300>>2]=r3*r9;HEAPF32[r2+304>>2]=r9*r5;r5=HEAPF32[r2+280>>2]*.5;HEAPF32[r2+308>>2]=r7*r5;HEAPF32[r2+312>>2]=r6*r5;HEAPF32[r2+316>>2]=r4*r5;return}function __ZNK4Ogre11AreaEmitter8CmdDepth5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+280>>2],6,0,32,0);return}function __ZN4Ogre11AreaEmitter8CmdDepth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);HEAPF32[r2+280>>2]=r1;r3=HEAPF32[r2+148>>2];r4=HEAPF32[r2+140>>2];r5=HEAPF32[r2+152>>2];r6=HEAPF32[r2+136>>2];r7=HEAPF32[r2+132>>2];r8=HEAPF32[r2+144>>2];r9=HEAPF32[r2+272>>2]*.5;HEAPF32[r2+284>>2]=(r3*r4-r5*r6)*r9;HEAPF32[r2+288>>2]=(r5*r7-r4*r8)*r9;HEAPF32[r2+292>>2]=(r6*r8-r3*r7)*r9;r9=HEAPF32[r2+276>>2]*.5;HEAPF32[r2+296>>2]=r8*r9;HEAPF32[r2+300>>2]=r3*r9;HEAPF32[r2+304>>2]=r5*r9;r9=r1*.5;HEAPF32[r2+308>>2]=r9*r7;HEAPF32[r2+312>>2]=r9*r6;HEAPF32[r2+316>>2]=r9*r4;return}function __ZN4Ogre11AreaEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre11AreaEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre15StringInterface12getParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6,r7,r8;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=HEAP32[r2+16>>2];do{if((r6|0)!=0){__ZNKSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_PvEEiEERKT_(r5,r6+16|0,r3);r7=HEAP32[r5>>2];if((r7|0)==(r6+20|0)){break}r8=HEAP32[r7+28>>2];if((r8|0)==0){break}FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]>>2]](r1,r8,r2);STACKTOP=r4;return}}while(0);HEAP8[r1]=0;HEAP8[r1+1|0]=0;STACKTOP=r4;return}function __ZNK4Ogre15StringInterface16copyParametersToEPS0_($this,$dest){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp6=sp;var $0=HEAP32[$this+16>>2];if(($0|0)==0){STACKTOP=sp;return}var $1=HEAP32[$0>>2];var $__end__i=$0+4|0;if(($1|0)==(HEAP32[$__end__i>>2]|0)){STACKTOP=sp;return}var $3=$dest;var $4=$this;var $__size__i_i_i6=$ref_tmp6;var $__data__i_i_i9=$ref_tmp6+8|0;var $i_sroa_0_013=$1;while(1){var $i_sroa_0_013;var $5=HEAP32[HEAP32[$3>>2]+8>>2];var $name=$i_sroa_0_013|0;FUNCTION_TABLE[HEAP32[HEAP32[$4>>2]+16>>2]]($ref_tmp6,$this,$name);((function(){try{__THREW__=0;return FUNCTION_TABLE[$5]($dest,$name,$ref_tmp6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}if((HEAP8[$__size__i_i_i6]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i9>>2])}var $incdec_ptr_i=$i_sroa_0_013+28|0;if(($incdec_ptr_i|0)==(HEAP32[$__end__i>>2]|0)){label=14;break}else{var $i_sroa_0_013=$incdec_ptr_i}}if(label==14){STACKTOP=sp;return}var $10$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i_i_i6]&1)==0){___resumeException($10$0)}__ZdlPv(HEAP32[$__data__i_i_i9>>2]);___resumeException($10$0)}function __ZN4Ogre15ParticleEmitter13_initParticleEPNS_8ParticleE(r1,r2){__ZN4Ogre8Particle15resetDimensionsEv(r2);return}function __ZN4Ogre11AreaEmitter8CmdWidthD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre11AreaEmitter9CmdHeightD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre11AreaEmitter8CmdDepthD0Ev(r1){__ZdlPv(r1);return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r4=r1;r5=HEAP8[r4];if((r5&1)==0){r6=10;r7=r5}else{r5=HEAP32[r1>>2];r6=(r5&-2)-1|0;r7=r5&255}r5=r7&255;if((r5&1|0)==0){r8=r5>>>1}else{r8=HEAP32[r1+4>>2]}if((r6-r8|0)>>>0<r3>>>0){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r6,r3-r6+r8|0,r8,r8,0,r3,r2);return r1}if((r3|0)==0){return r1}if((r7&1)==0){r9=r1+1|0}else{r9=HEAP32[r1+8>>2]}_memcpy(r9+r8|0,r2,r3)|0;r2=r8+r3|0;if((HEAP8[r4]&1)==0){HEAP8[r4]=r2<<1}else{HEAP32[r1+4>>2]=r2}HEAP8[r9+r2|0]=0;return r1}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r2,r3,r4,r5,r6,r7,r8){var r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;if((-18-r2|0)>>>0<r3>>>0){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if((HEAP8[r1]&1)==0){r9=r1+1|0}else{r9=HEAP32[r1+8>>2]}do{if(r2>>>0<2147483623){r10=r3+r2|0;r11=r2<<1;r12=r10>>>0<r11>>>0?r11:r10;if(r12>>>0<11){r13=11;break}r13=r12+16&-16}else{r13=-17}}while(0);r3=__Znwj(r13);if((r5|0)!=0){_memcpy(r3,r9,r5)|0}if((r7|0)!=0){_memcpy(r3+r5|0,r8,r7)|0}r8=r4-r6|0;if((r8|0)!=(r5|0)){_memcpy(r3+(r7+r5)|0,r9+(r6+r5)|0,r8-r5|0)|0}if((r2|0)==10){r14=r1+8|0;HEAP32[r14>>2]=r3;r15=r13|1;r16=r1|0;HEAP32[r16>>2]=r15;r17=r8+r7|0;r18=r1+4|0;HEAP32[r18>>2]=r17;r19=r3+r17|0;HEAP8[r19]=0;return}__ZdlPv(r9);r14=r1+8|0;HEAP32[r14>>2]=r3;r15=r13|1;r16=r1|0;HEAP32[r16>>2]=r15;r17=r8+r7|0;r18=r1+4|0;HEAP32[r18>>2]=r17;r19=r3+r17|0;HEAP8[r19]=0;return}function __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv($this){var $exception=___cxa_allocate_exception(8);var $0=$exception;((function(){try{__THREW__=0;return __ZNSt11logic_errorC2EPKc($0,__str9|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[$exception>>2]=__ZTVSt12length_error+8;___cxa_throw($exception,__ZTISt12length_error,FUNCTION_TABLE_OFFSET+98)}else{var $2$0=___cxa_find_matching_catch(-1,-1);___cxa_free_exception($exception);___resumeException($2$0)}}function __ZNKSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_PvEEiEERKT_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26;r4=r2+4|0;r2=r4;r5=HEAP32[r4>>2];do{if((r5|0)!=0){r4=HEAP8[r3];r6=r4&255;r7=(r6&1|0)==0;r8=r6>>>1;r6=(r4&1)==0;r4=r3+1|0;r9=r3+8|0;r10=r3+4|0;r11=r5;r12=r2;L3:while(1){r13=r11;while(1){r14=r13;r15=r13+16|0;r16=HEAP8[r15];r17=r16&255;if((r17&1|0)==0){r18=r17>>>1}else{r18=HEAP32[r13+20>>2]}if(r7){r19=r8}else{r19=HEAP32[r10>>2]}if((r16&1)==0){r20=r15+1|0}else{r20=HEAP32[r13+24>>2]}if(r6){r21=r4}else{r21=HEAP32[r9>>2]}r15=_memcmp(r20,r21,r19>>>0<r18>>>0?r19:r18);if((r15|0)==0){if(r18>>>0>=r19>>>0){break}}else{if((r15|0)>=0){break}}r15=HEAP32[r13+4>>2];if((r15|0)==0){r22=r12;break L3}else{r13=r15}}r15=HEAP32[r13>>2];if((r15|0)==0){r22=r14;break}else{r11=r15;r12=r14}}if((r22|0)==(r2|0)){break}if(r7){r23=r8}else{r23=HEAP32[r10>>2]}r12=r22+16|0;r11=HEAP8[r12];r15=r11&255;if((r15&1|0)==0){r24=r15>>>1}else{r24=HEAP32[r22+20>>2]}if(r6){r25=r4}else{r25=HEAP32[r9>>2]}if((r11&1)==0){r26=r12+1|0}else{r26=HEAP32[r22+24>>2]}r12=_memcmp(r25,r26,r24>>>0<r23>>>0?r24:r23);if((r12|0)==0){if(r23>>>0<r24>>>0){break}}else{if((r12|0)<0){break}}HEAP32[r1>>2]=r22;return}}while(0);HEAP32[r1>>2]=r2;return}function __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($this,$newName,$newDescription,$newType){var $__size__i44_i_i=$newName;if((HEAP8[$__size__i44_i_i]&1)==0){var $1=$this;HEAP32[$1>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$1+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$1+8>>2]=HEAP32[$__size__i44_i_i+8>>2]}else{var $2=HEAP32[$newName+8>>2];var $3=HEAP32[$newName+4>>2];if($3>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if($3>>>0<11){HEAP8[$this]=$3<<1;var $__p_0_i_i_i=$this+1|0}else{var $and_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i=__Znwj($and_i_i_i_i_i);HEAP32[$this+8>>2]=$call_i_i_i_i_i;HEAP32[$this>>2]=$and_i_i_i_i_i|1;HEAP32[$this+4>>2]=$3;var $__p_0_i_i_i=$call_i_i_i_i_i}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i+$3|0]=0}var $description=$this+12|0;var $__size__i44_i_i1=$newDescription;if((HEAP8[$__size__i44_i_i1]&1)==0){var $5=$description;HEAP32[$5>>2]=HEAP32[$__size__i44_i_i1>>2];HEAP32[$5+4>>2]=HEAP32[$__size__i44_i_i1+4>>2];HEAP32[$5+8>>2]=HEAP32[$__size__i44_i_i1+8>>2];var $paramType=$this+24|0;HEAP32[$paramType>>2]=$newType;return}var $6=HEAP32[$newDescription+8>>2];var $7=HEAP32[$newDescription+4>>2];do{if($7>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($7>>>0<11){HEAP8[$description]=$7<<1;var $__p_0_i_i_i26=$description+1|0}else{var $and_i_i_i_i_i19=$7+16&-16;var $call_i_i_i_i_i2029=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i19)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$this+20>>2]=$call_i_i_i_i_i2029;HEAP32[$description>>2]=$and_i_i_i_i_i19|1;HEAP32[$this+16>>2]=$7;var $__p_0_i_i_i26=$call_i_i_i_i_i2029}var $__p_0_i_i_i26;_memcpy($__p_0_i_i_i26,$6,$7)|0;HEAP8[$__p_0_i_i_i26+$7|0]=0;var $paramType=$this+24|0;HEAP32[$paramType>>2]=$newType;return}}while(0);var $8$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$this]&1)==0){___resumeException($8$0)}__ZdlPv(HEAP32[$this+8>>2]);___resumeException($8$0)}function __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25;r4=0;r5=r1+4|0;r1=r5|0;r6=HEAP32[r1>>2];if((r6|0)==0){HEAP32[r2>>2]=r5;r7=r1;return r7}r1=HEAP8[r3];r5=r1&255;r8=(r5&1|0)==0;r9=r5>>>1;r5=(r1&1)==0;r1=r3+1|0;r10=r3+8|0;r11=r3+4|0;r3=r6;while(1){r6=r3+16|0;if(r8){r12=r9}else{r12=HEAP32[r11>>2]}r13=r6;r14=HEAP8[r6];r6=r14&255;r15=(r6&1|0)==0;if(r15){r16=r6>>>1}else{r16=HEAP32[r3+20>>2]}if(r5){r17=r1}else{r17=HEAP32[r10>>2]}r18=(r14&1)==0;if(r18){r19=r13+1|0}else{r19=HEAP32[r3+24>>2]}r14=_memcmp(r17,r19,r16>>>0<r12>>>0?r16:r12);if((r14|0)==0){if(r12>>>0<r16>>>0){r4=16}}else{if((r14|0)<0){r4=16}}if(r4==16){r4=0;r20=r3|0;r14=HEAP32[r20>>2];if((r14|0)==0){r4=17;break}else{r3=r14;continue}}if(r15){r21=r6>>>1}else{r21=HEAP32[r3+20>>2]}if(r8){r22=r9}else{r22=HEAP32[r11>>2]}if(r18){r23=r13+1|0}else{r23=HEAP32[r3+24>>2]}if(r5){r24=r1}else{r24=HEAP32[r10>>2]}r13=_memcmp(r23,r24,r22>>>0<r21>>>0?r22:r21);if((r13|0)==0){if(r21>>>0>=r22>>>0){r4=33;break}}else{if((r13|0)>=0){r4=33;break}}r25=r3+4|0;r13=HEAP32[r25>>2];if((r13|0)==0){r4=32;break}else{r3=r13}}if(r4==17){HEAP32[r2>>2]=r3;r7=r20;return r7}else if(r4==32){HEAP32[r2>>2]=r3;r7=r25;return r7}else if(r4==33){HEAP32[r2>>2]=r3;r7=r2;return r7}}function __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_($agg_result,$this,$__k){var $__second__i_i_i=$this+8|0;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(32,0,0,0);var $0=$call_i_i;var $__cc=$call_i_i+16|0;L1:do{if(($__cc|0)!=0){var $__size__i44_i_i=$__k;if((HEAP8[$__size__i44_i_i]&1)==0){HEAP32[$__cc>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$__cc+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$__cc+8>>2]=HEAP32[$__size__i44_i_i+8>>2];break}var $2=HEAP32[$__k+8>>2];var $3=HEAP32[$__k+4>>2];do{if($3>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($3>>>0<11){HEAP8[$__cc]=$3<<1;var $__p_0_i_i_i=$call_i_i+17|0}else{var $and_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i69=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$call_i_i+24>>2]=$call_i_i_i_i_i69;HEAP32[$__cc>>2]=$and_i_i_i_i_i|1;HEAP32[$call_i_i+20>>2]=$3;var $__p_0_i_i_i=$call_i_i_i_i_i69}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i+$3|0]=0;break L1}}while(0);var $8$0=___cxa_find_matching_catch(-1,-1);if(($call_i_i|0)==0){___resumeException($8$0)}((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($8$0)}else{var $9$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($9$0)}}}while(0);var $second=$call_i_i+28|0;if(($second|0)==0){var $__first__i_i_i_i_i324=$agg_result|0;HEAP32[$__first__i_i_i_i_i324>>2]=$0;var $agg_tmp3_i_i_i_i298_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i298_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i298_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i298_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i298_sroa_2_5__idx=$agg_result+9|0;HEAP8[$agg_tmp3_i_i_i_i298_sroa_2_5__idx]=1;return}HEAP32[$second>>2]=0;var $__first__i_i_i_i_i324=$agg_result|0;HEAP32[$__first__i_i_i_i_i324>>2]=$0;var $agg_tmp3_i_i_i_i298_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i298_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i298_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i298_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i298_sroa_2_5__idx=$agg_result+9|0;HEAP8[$agg_tmp3_i_i_i_i298_sroa_2_5__idx]=1;return}function __ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;r3=0;r4=(r2|0)==(r1|0);HEAP8[r2+12|0]=r4&1;if(r4){return}else{r5=r2}while(1){r6=r5+8|0;r7=HEAP32[r6>>2];r2=r7+12|0;if((HEAP8[r2]&1)!=0){r3=38;break}r8=r7+8|0;r9=HEAP32[r8>>2];r4=HEAP32[r9>>2];if((r7|0)==(r4|0)){r10=HEAP32[r9+4>>2];if((r10|0)==0){r3=7;break}r11=r10+12|0;if((HEAP8[r11]&1)!=0){r3=7;break}HEAP8[r2]=1;HEAP8[r9+12|0]=(r9|0)==(r1|0)|0;HEAP8[r11]=1}else{if((r4|0)==0){r3=24;break}r11=r4+12|0;if((HEAP8[r11]&1)!=0){r3=24;break}HEAP8[r2]=1;HEAP8[r9+12|0]=(r9|0)==(r1|0)|0;HEAP8[r11]=1}if((r9|0)==(r1|0)){r3=40;break}else{r5=r9}}if(r3==38){return}else if(r3==7){if((r5|0)==(HEAP32[r7>>2]|0)){r12=r7;r13=r9}else{r1=r7+4|0;r11=HEAP32[r1>>2];r2=r11|0;r4=HEAP32[r2>>2];HEAP32[r1>>2]=r4;if((r4|0)==0){r14=r9}else{HEAP32[r4+8>>2]=r7;r14=HEAP32[r8>>2]}r4=r11+8|0;HEAP32[r4>>2]=r14;r14=HEAP32[r8>>2];r1=r14|0;if((HEAP32[r1>>2]|0)==(r7|0)){HEAP32[r1>>2]=r11}else{HEAP32[r14+4>>2]=r11}HEAP32[r2>>2]=r7;HEAP32[r8>>2]=r11;r12=r11;r13=HEAP32[r4>>2]}HEAP8[r12+12|0]=1;HEAP8[r13+12|0]=0;r12=r13|0;r4=HEAP32[r12>>2];r11=r4+4|0;r2=HEAP32[r11>>2];HEAP32[r12>>2]=r2;if((r2|0)!=0){HEAP32[r2+8>>2]=r13}r2=r13+8|0;HEAP32[r4+8>>2]=HEAP32[r2>>2];r12=HEAP32[r2>>2];r14=r12|0;if((HEAP32[r14>>2]|0)==(r13|0)){HEAP32[r14>>2]=r4}else{HEAP32[r12+4>>2]=r4}HEAP32[r11>>2]=r13;HEAP32[r2>>2]=r4;return}else if(r3==24){r4=r7|0;if((r5|0)==(HEAP32[r4>>2]|0)){r2=r5+4|0;r13=HEAP32[r2>>2];HEAP32[r4>>2]=r13;if((r13|0)==0){r15=r9}else{HEAP32[r13+8>>2]=r7;r15=HEAP32[r8>>2]}HEAP32[r6>>2]=r15;r15=HEAP32[r8>>2];r13=r15|0;if((HEAP32[r13>>2]|0)==(r7|0)){HEAP32[r13>>2]=r5}else{HEAP32[r15+4>>2]=r5}HEAP32[r2>>2]=r7;HEAP32[r8>>2]=r5;r16=r5;r17=HEAP32[r6>>2]}else{r16=r7;r17=r9}HEAP8[r16+12|0]=1;HEAP8[r17+12|0]=0;r16=r17+4|0;r9=HEAP32[r16>>2];r7=r9|0;r6=HEAP32[r7>>2];HEAP32[r16>>2]=r6;if((r6|0)!=0){HEAP32[r6+8>>2]=r17}r6=r17+8|0;HEAP32[r9+8>>2]=HEAP32[r6>>2];r16=HEAP32[r6>>2];r5=r16|0;if((HEAP32[r5>>2]|0)==(r17|0)){HEAP32[r5>>2]=r9}else{HEAP32[r16+4>>2]=r9}HEAP32[r7>>2]=r17;HEAP32[r6>>2]=r9;return}else if(r3==40){return}}function __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_($this,$__x){var label=0;var $__end__i=$this+4|0;var $__begin__i=$this|0;var $sub_ptr_rhs_cast_i=HEAP32[$__begin__i>>2];var $sub_ptr_div_i=(HEAP32[$__end__i>>2]-$sub_ptr_rhs_cast_i|0)/28&-1;var $add=$sub_ptr_div_i+1|0;if(($add|0)<0){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}var $__first__i_i_i_i_i_i=$this+8|0;var $sub_ptr_div_i_i_i=(HEAP32[$__first__i_i_i_i_i_i>>2]-$sub_ptr_rhs_cast_i|0)/28&-1;if($sub_ptr_div_i_i_i>>>0>1073741822){var $retval_i_058=2147483647;label=5}else{var $mul_i=$sub_ptr_div_i_i_i<<1;var $_sroa_speculated=$mul_i>>>0<$add>>>0?$add:$mul_i;if(($_sroa_speculated|0)==0){var $cond_i_i=0;var $retval_i_059=0}else{var $retval_i_058=$_sroa_speculated;label=5}}if(label==5){var $retval_i_058;var $cond_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($retval_i_058*28&-1,0,0,0);var $retval_i_059=$retval_i_058}var $retval_i_059;var $cond_i_i;var $add_ptr_i_i=$cond_i_i+($sub_ptr_div_i*28&-1)|0;var $add_ptr8_i_i=$cond_i_i+($retval_i_059*28&-1)|0;do{if(($add_ptr_i_i|0)==0){label=9}else{((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKS0_($add_ptr_i_i,$__x)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=9;break}var $4$0=___cxa_find_matching_catch(-1,-1);var $22$1=tempRet0;var $22$0=$4$0}}while(0);L12:do{if(label==9){var $incdec_ptr=$cond_i_i+($add*28&-1)|0;var $5=HEAP32[$__begin__i>>2];var $6=HEAP32[$__end__i>>2];do{if(($6|0)==($5|0)){HEAP32[$__begin__i>>2]=$add_ptr_i_i;HEAP32[$__end__i>>2]=$incdec_ptr;HEAP32[$__first__i_i_i_i_i_i>>2]=$add_ptr8_i_i;var $12=$5}else{var $__end1_addr_i_015_i=$6;var $__v_sroa_1_4_load4452=$add_ptr_i_i;while(1){var $__v_sroa_1_4_load4452;var $__end1_addr_i_015_i;var $add_ptr_i_i13=$__v_sroa_1_4_load4452-28|0;var $incdec_ptr_i_i=$__end1_addr_i_015_i-28|0;if(($add_ptr_i_i13|0)!=0){((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKS0_($add_ptr_i_i13,$incdec_ptr_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=24;break}}if(($incdec_ptr_i_i|0)==($5|0)){label=14;break}else{var $__end1_addr_i_015_i=$incdec_ptr_i_i;var $__v_sroa_1_4_load4452=$add_ptr_i_i13}}if(label==24){var $16$0=___cxa_find_matching_catch(-1,-1);var $16$1=tempRet0;if(($__v_sroa_1_4_load4452|0)==($incdec_ptr|0)){var $22$1=$16$1;var $22$0=$16$0;break L12}else{var $17=$incdec_ptr}while(1){var $17;var $incdec_ptr_i_i_i_i_i=$17-28|0;if((HEAP8[$17-28+12|0]&1)!=0){__ZdlPv(HEAP32[$17-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$17-28+8>>2])}if(($__v_sroa_1_4_load4452|0)==($incdec_ptr_i_i_i_i_i|0)){var $22$1=$16$1;var $22$0=$16$0;break L12}else{var $17=$incdec_ptr_i_i_i_i_i}}}else if(label==14){var $_pre_i=HEAP32[$__begin__i>>2];var $_pre=HEAP32[$__end__i>>2];HEAP32[$__begin__i>>2]=$add_ptr_i_i13;HEAP32[$__end__i>>2]=$incdec_ptr;HEAP32[$__first__i_i_i_i_i_i>>2]=$add_ptr8_i_i;if(($_pre_i|0)==($_pre|0)){var $12=$_pre_i;break}else{var $7=$_pre}while(1){var $7;var $incdec_ptr_i_i_i_i_i18=$7-28|0;if((HEAP8[$7-28+12|0]&1)!=0){__ZdlPv(HEAP32[$7-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i18]&1)!=0){__ZdlPv(HEAP32[$7-28+8>>2])}if(($_pre_i|0)==($incdec_ptr_i_i_i_i_i18|0)){var $12=$_pre_i;break}else{var $7=$incdec_ptr_i_i_i_i_i18}}}}}while(0);var $12;if(($12|0)==0){return}var $13=$12;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($13)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $14$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($14$0)}}}while(0);var $22$0;var $22$1;if(($cond_i_i|0)==0){___resumeException($22$0)}var $23=$cond_i_i;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($23)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($22$0)}else{var $24$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($24$0)}}function __ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv($this){var $exception=___cxa_allocate_exception(8);var $0=$exception;((function(){try{__THREW__=0;return __ZNSt11logic_errorC2EPKc($0,__str11|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[$exception>>2]=__ZTVSt12length_error+8;___cxa_throw($exception,__ZTISt12length_error,FUNCTION_TABLE_OFFSET+98)}else{var $2$0=___cxa_find_matching_catch(-1,-1);___cxa_free_exception($exception);___resumeException($2$0)}}function __ZN4Ogre12ParameterDefC2ERKS0_($this,$0){var $__size__i44_i_i=$0;if((HEAP8[$__size__i44_i_i]&1)==0){var $2=$this;HEAP32[$2>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$2+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$2+8>>2]=HEAP32[$__size__i44_i_i+8>>2]}else{var $3=HEAP32[$0+8>>2];var $4=HEAP32[$0+4>>2];if($4>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if($4>>>0<11){HEAP8[$this]=$4<<1;var $__p_0_i_i_i=$this+1|0}else{var $and_i_i_i_i_i=$4+16&-16;var $call_i_i_i_i_i=__Znwj($and_i_i_i_i_i);HEAP32[$this+8>>2]=$call_i_i_i_i_i;HEAP32[$this>>2]=$and_i_i_i_i_i|1;HEAP32[$this+4>>2]=$4;var $__p_0_i_i_i=$call_i_i_i_i_i}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$3,$4)|0;HEAP8[$__p_0_i_i_i+$4|0]=0}var $description=$this+12|0;var $__size__i44_i_i3=$0+12|0;if((HEAP8[$__size__i44_i_i3]&1)==0){var $6=$description;HEAP32[$6>>2]=HEAP32[$__size__i44_i_i3>>2];HEAP32[$6+4>>2]=HEAP32[$__size__i44_i_i3+4>>2];HEAP32[$6+8>>2]=HEAP32[$__size__i44_i_i3+8>>2];var $paramType=$this+24|0;var $paramType4=$0+24|0;var $9=HEAP32[$paramType4>>2];HEAP32[$paramType>>2]=$9;return}var $7=HEAP32[$0+20>>2];var $8=HEAP32[$0+16>>2];do{if($8>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($8>>>0<11){HEAP8[$description]=$8<<1;var $__p_0_i_i_i28=$description+1|0}else{var $and_i_i_i_i_i21=$8+16&-16;var $call_i_i_i_i_i2231=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i21)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$this+20>>2]=$call_i_i_i_i_i2231;HEAP32[$description>>2]=$and_i_i_i_i_i21|1;HEAP32[$this+16>>2]=$8;var $__p_0_i_i_i28=$call_i_i_i_i_i2231}var $__p_0_i_i_i28;_memcpy($__p_0_i_i_i28,$7,$8)|0;HEAP8[$__p_0_i_i_i28+$8|0]=0;var $paramType=$this+24|0;var $paramType4=$0+24|0;var $9=HEAP32[$paramType4>>2];HEAP32[$paramType>>2]=$9;return}}while(0);var $10$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$this]&1)==0){___resumeException($10$0)}__ZdlPv(HEAP32[$this+8>>2]);___resumeException($10$0)}function __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev($this){__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($this+28|0,HEAP32[$this+32>>2]);var $__begin__i_i_i_i_i=$this+12|0;var $2=HEAP32[$__begin__i_i_i_i_i>>2];do{if(($2|0)!=0){var $__end__i_i_i_i_i_i_i=$this+16|0;var $3=HEAP32[$__end__i_i_i_i_i_i_i>>2];if(($2|0)==($3|0)){var $10=$2}else{var $4=$3;while(1){var $4;var $incdec_ptr_i_i_i_i_i_i_i=$4-28|0;HEAP32[$__end__i_i_i_i_i_i_i>>2]=$incdec_ptr_i_i_i_i_i_i_i;if((HEAP8[$4-28+12|0]&1)!=0){__ZdlPv(HEAP32[$4-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$4-28+8>>2])}var $8=HEAP32[$__end__i_i_i_i_i_i_i>>2];if(($2|0)==($8|0)){break}else{var $4=$8}}var $10=HEAP32[$__begin__i_i_i_i_i>>2]}var $10;var $11=$10;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($11)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $12$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($12$0)}}while(0);if((HEAP8[$this]&1)==0){return}__ZdlPv(HEAP32[$this+8>>2]);return}function __ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($this,$__nd){if(($__nd|0)==0){return}__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($this,HEAP32[$__nd>>2]);__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($this,HEAP32[$__nd+4>>2]);if((HEAP8[$__nd+16|0]&1)!=0){__ZdlPv(HEAP32[$__nd+24>>2])}var $6=$__nd;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $7$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($7$0)}}function __ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre15ParamDictionaryC2ERKS0_($this,$0){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+48|0;var $__parent_i=sp;var $agg_tmp_i=sp+8;var $temp_lvalue_i=sp+16;var $ref_tmp_i_i_i_i=sp+32;__ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEEC2ERKS8_($this|0,$0|0);var $__tree__i_i=$this+16|0;var $__begin_node__i_i=$__tree__i_i|0;var $1=$this+20|0;HEAP32[$1>>2]=0;HEAP32[$this+24>>2]=__ZTVN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;var $__first__i_i_i37_i_i=$this+28|0;HEAP32[$__first__i_i_i37_i_i>>2]=0;HEAP32[$__begin_node__i_i>>2]=$1;var $4=HEAP32[$0+16>>2];var $__first__i_i_i_i_i_i_i=$0+20|0;var $6=$this+20|0;if(($4|0)==($__first__i_i_i_i_i_i_i|0)){STACKTOP=sp;return}var $7=$ref_tmp_i_i_i_i;var $second_i_i=$ref_tmp_i_i_i_i+12|0;var $11=$agg_tmp_i|0;var $__first__i_i_i28_i_i_i=$temp_lvalue_i|0;var $__left_12_i_i=$this+20|0;var $__data__i_i_i_i_i_i_i23=$ref_tmp_i_i_i_i+8|0;var $arrayidx_i_i_i_i_i_i=$ref_tmp_i_i_i_i+1|0;var $__cap__i_i_i_i_i_i=$ref_tmp_i_i_i_i|0;var $__size__i_i_i_i_i_i=$ref_tmp_i_i_i_i+4|0;var $agg_tmp30_i_i_sroa_0_031=$4;while(1){var $agg_tmp30_i_i_sroa_0_031;var $__size__i44_i_i_i_i=$agg_tmp30_i_i_sroa_0_031+16|0;if((HEAP8[$__size__i44_i_i_i_i]&1)==0){HEAP32[$7>>2]=HEAP32[$__size__i44_i_i_i_i>>2];HEAP32[$7+4>>2]=HEAP32[$__size__i44_i_i_i_i+4>>2];HEAP32[$7+8>>2]=HEAP32[$__size__i44_i_i_i_i+8>>2]}else{var $13=HEAP32[$agg_tmp30_i_i_sroa_0_031+24>>2];var $14=HEAP32[$agg_tmp30_i_i_sroa_0_031+20>>2];if($14>>>0>4294967279){label=6;break}if($14>>>0<11){HEAP8[$7]=$14<<1;var $__p_0_i_i_i_i_i=$arrayidx_i_i_i_i_i_i}else{var $and_i_i_i_i_i_i_i=$14+16&-16;var $call_i_i_i_i_i_i_i15=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=27;break}HEAP32[$__data__i_i_i_i_i_i_i23>>2]=$call_i_i_i_i_i_i_i15;HEAP32[$__cap__i_i_i_i_i_i>>2]=$and_i_i_i_i_i_i_i|1;HEAP32[$__size__i_i_i_i_i_i>>2]=$14;var $__p_0_i_i_i_i_i=$call_i_i_i_i_i_i_i15}var $__p_0_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i,$13,$14)|0;HEAP8[$__p_0_i_i_i_i_i+$14|0]=0}HEAP32[$second_i_i>>2]=HEAP32[$agg_tmp30_i_i_sroa_0_031+28>>2];HEAP32[$11>>2]=$6;var $call_i=__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_SO_EEiEESR_RKT_($__tree__i_i,$agg_tmp_i,$__parent_i,$ref_tmp_i_i_i_i);if((HEAP32[$call_i>>2]|0)==0){((function(){try{__THREW__=0;return __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSB_($temp_lvalue_i,$__tree__i_i,$ref_tmp_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=18;break}var $17=HEAP32[$__first__i_i_i28_i_i_i>>2];HEAP32[$__first__i_i_i28_i_i_i>>2]=0;var $18=HEAP32[$__parent_i>>2];var $19=$17|0;HEAP32[$17>>2]=0;HEAP32[$17+4>>2]=0;HEAP32[$17+8>>2]=$18;HEAP32[$call_i>>2]=$19;var $21=HEAP32[HEAP32[$__begin_node__i_i>>2]>>2];if(($21|0)==0){var $23=$19}else{HEAP32[$__begin_node__i_i>>2]=$21;var $23=HEAP32[$call_i>>2]}var $23;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[$__left_12_i_i>>2],$23);HEAP32[$__first__i_i_i37_i_i>>2]=HEAP32[$__first__i_i_i37_i_i>>2]+1}if((HEAP8[$7]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i23>>2])}var $31=HEAP32[$agg_tmp30_i_i_sroa_0_031+4>>2];if(($31|0)==0){var $__x_addr_0_i=$agg_tmp30_i_i_sroa_0_031|0;while(1){var $__x_addr_0_i;var $34=HEAP32[$__x_addr_0_i+8>>2];if(($__x_addr_0_i|0)==(HEAP32[$34>>2]|0)){var $retval_0_i=$34;break}else{var $__x_addr_0_i=$34}}}else{var $__x_addr_i9_0_i=$31;while(1){var $__x_addr_i9_0_i;var $33=HEAP32[$__x_addr_i9_0_i>>2];if(($33|0)==0){var $retval_0_i=$__x_addr_i9_0_i;break}else{var $__x_addr_i9_0_i=$33}}}var $retval_0_i;if(($retval_0_i|0)==($__first__i_i_i_i_i_i_i|0)){label=43;break}else{var $agg_tmp30_i_i_sroa_0_031=$retval_0_i}}do{if(label==6){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){}else{var $lpad_nonloopexit$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body_i_i$1=tempRet0;var $eh_lpad_body_i_i$0=$lpad_nonloopexit$0;break}}else if(label==43){STACKTOP=sp;return}else if(label==27){var $lpad_loopexit$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body_i_i$1=tempRet0;var $eh_lpad_body_i_i$0=$lpad_loopexit$0}else if(label==18){var $26$0=___cxa_find_matching_catch(-1,-1);var $26$1=tempRet0;if((HEAP8[$7]&1)==0){var $eh_lpad_body_i_i$1=$26$1;var $eh_lpad_body_i_i$0=$26$0;break}__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i23>>2]);var $eh_lpad_body_i_i$1=$26$1;var $eh_lpad_body_i_i$0=$26$0}}while(0);var $eh_lpad_body_i_i$0;var $eh_lpad_body_i_i$1;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE($__tree__i_i,HEAP32[$__left_12_i_i>>2]);var $__begin__i_i_i=$this|0;var $40=HEAP32[$__begin__i_i_i>>2];if(($40|0)==0){___resumeException($eh_lpad_body_i_i$0)}var $__end__i_i_i_i_i=$this+4|0;var $41=HEAP32[$__end__i_i_i_i_i>>2];if(($40|0)==($41|0)){var $48=$40}else{var $42=$41;while(1){var $42;var $incdec_ptr_i_i_i_i_i=$42-28|0;HEAP32[$__end__i_i_i_i_i>>2]=$incdec_ptr_i_i_i_i_i;if((HEAP8[$42-28+12|0]&1)!=0){__ZdlPv(HEAP32[$42-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$42-28+8>>2])}var $46=HEAP32[$__end__i_i_i_i_i>>2];if(($40|0)==($46|0)){break}else{var $42=$46}}var $48=HEAP32[$__begin__i_i_i>>2]}var $48;var $49=$48;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($49)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($eh_lpad_body_i_i$0)}else{var $50$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($50$0)}}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_SO_EEiEESR_RKT_(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36;r5=0;r6=STACKTOP;r7=r2;r2=STACKTOP;STACKTOP=STACKTOP+4|0;STACKTOP=STACKTOP+7&-8;HEAP32[r2>>2]=HEAP32[r7>>2];r7=r1+4|0;r8=HEAP32[r2>>2];do{if((r8|0)!=(r7|0)){r2=r4;r9=HEAP8[r4];r10=r9&255;r11=(r10&1|0)==0;if(r11){r12=r10>>>1}else{r12=HEAP32[r4+4>>2]}r13=r8+16|0;r14=r13;r15=HEAP8[r13];r13=r15&255;r16=(r13&1|0)==0;if(r16){r17=r13>>>1}else{r17=HEAP32[r8+20>>2]}r18=(r9&1)==0;if(r18){r19=r2+1|0}else{r19=HEAP32[r4+8>>2]}r9=(r15&1)==0;if(r9){r20=r14+1|0}else{r20=HEAP32[r8+24>>2]}r15=_memcmp(r19,r20,r17>>>0<r12>>>0?r17:r12);if((r15|0)==0){if(r12>>>0<r17>>>0){break}}else{if((r15|0)<0){break}}if(r16){r21=r13>>>1}else{r21=HEAP32[r8+20>>2]}if(r11){r22=r10>>>1}else{r22=HEAP32[r4+4>>2]}if(r9){r23=r14+1|0}else{r23=HEAP32[r8+24>>2]}if(r18){r24=r2+1|0}else{r24=HEAP32[r4+8>>2]}r14=_memcmp(r23,r24,r22>>>0<r21>>>0?r22:r21);if((r14|0)==0){if(r21>>>0>=r22>>>0){r5=80}}else{if((r14|0)>=0){r5=80}}if(r5==80){HEAP32[r3>>2]=r8;r25=r3;STACKTOP=r6;return r25}r14=r8+4|0;r9=HEAP32[r14>>2];r13=(r9|0)==0;if(r13){r16=r8|0;while(1){r15=HEAP32[r16+8>>2];if((r16|0)==(HEAP32[r15>>2]|0)){r26=r15;break}else{r16=r15}}}else{r16=r9;while(1){r15=HEAP32[r16>>2];if((r15|0)==0){r26=r16;break}else{r16=r15}}}do{if((r26|0)!=(r7|0)){if(r11){r27=r10>>>1}else{r27=HEAP32[r4+4>>2]}r16=r26+16|0;r9=HEAP8[r16];r15=r9&255;if((r15&1|0)==0){r28=r15>>>1}else{r28=HEAP32[r26+20>>2]}if(r18){r29=r2+1|0}else{r29=HEAP32[r4+8>>2]}if((r9&1)==0){r30=r16+1|0}else{r30=HEAP32[r26+24>>2]}r16=_memcmp(r29,r30,r28>>>0<r27>>>0?r28:r27);if((r16|0)==0){if(r27>>>0<r28>>>0){break}}else{if((r16|0)<0){break}}r25=__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEESR_RKT_(r1,r3,r4);STACKTOP=r6;return r25}}while(0);if(r13){HEAP32[r3>>2]=r8;r25=r14;STACKTOP=r6;return r25}else{HEAP32[r3>>2]=r26;r25=r26|0;STACKTOP=r6;return r25}}}while(0);r26=HEAP32[r8>>2];do{if((r8|0)==(HEAP32[r1>>2]|0)){r31=r8}else{if((r26|0)==0){r28=r8|0;while(1){r27=HEAP32[r28+8>>2];if((r28|0)==(HEAP32[r27>>2]|0)){r28=r27}else{r32=r27;break}}}else{r28=r26;while(1){r14=HEAP32[r28+4>>2];if((r14|0)==0){r32=r28;break}else{r28=r14}}}r28=r32;r14=r32+16|0;r13=HEAP8[r14];r27=r13&255;if((r27&1|0)==0){r33=r27>>>1}else{r33=HEAP32[r32+20>>2]}r27=HEAP8[r4];r30=r27&255;if((r30&1|0)==0){r34=r30>>>1}else{r34=HEAP32[r4+4>>2]}if((r13&1)==0){r35=r14+1|0}else{r35=HEAP32[r32+24>>2]}if((r27&1)==0){r36=r4+1|0}else{r36=HEAP32[r4+8>>2]}r27=_memcmp(r35,r36,r34>>>0<r33>>>0?r34:r33);if((r27|0)==0){if(r33>>>0<r34>>>0){r31=r28;break}}else{if((r27|0)<0){r31=r28;break}}r25=__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEESR_RKT_(r1,r3,r4);STACKTOP=r6;return r25}}while(0);if((r26|0)==0){HEAP32[r3>>2]=r8;r25=r8|0;STACKTOP=r6;return r25}else{HEAP32[r3>>2]=r31;r25=r31+4|0;STACKTOP=r6;return r25}}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSB_($agg_result,$this,$__v){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $__h_sroa_3=sp;var $__second__i_i_i=$this+8|0;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(32,0,0,0);var $0=$call_i_i;var $agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx=sp+8|0;var $__h_sroa_365=$__h_sroa_3|0;HEAP8[$__h_sroa_365]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx];HEAP8[$__h_sroa_365+1|0]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx+1|0];HEAP8[$__h_sroa_365+2|0]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx+2|0];var $__h_sroa_3_9_idx=$__h_sroa_3|0;var $__value_=$call_i_i+16|0;if(($__value_|0)==0){var $__first__i_i_i_i_i188=$agg_result|0;HEAP32[$__first__i_i_i_i_i188>>2]=$0;var $agg_tmp3_i_i_i_i162_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i162_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i162_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast=$agg_result;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx=$agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast+9|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx]=HEAP8[$__h_sroa_3_9_idx];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+1|0]=HEAP8[$__h_sroa_3_9_idx+1|0];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+2|0]=HEAP8[$__h_sroa_3_9_idx+2|0];STACKTOP=sp;return}var $__size__i44_i_i_i_i_i_i=$__v;L4:do{if((HEAP8[$__size__i44_i_i_i_i_i_i]&1)==0){HEAP32[$__value_>>2]=HEAP32[$__size__i44_i_i_i_i_i_i>>2];HEAP32[$__value_+4>>2]=HEAP32[$__size__i44_i_i_i_i_i_i+4>>2];HEAP32[$__value_+8>>2]=HEAP32[$__size__i44_i_i_i_i_i_i+8>>2]}else{var $2=HEAP32[$__v+8>>2];var $3=HEAP32[$__v+4>>2];do{if($3>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($3>>>0<11){HEAP8[$__value_]=$3<<1;var $__p_0_i_i_i_i_i_i_i=$call_i_i+17|0}else{var $and_i_i_i_i_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i_i_i_i_i57=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$call_i_i+24>>2]=$call_i_i_i_i_i_i_i_i_i57;HEAP32[$__value_>>2]=$and_i_i_i_i_i_i_i_i_i|1;HEAP32[$call_i_i+20>>2]=$3;var $__p_0_i_i_i_i_i_i_i=$call_i_i_i_i_i_i_i_i_i57}var $__p_0_i_i_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i_i_i_i_i+$3|0]=0;break L4}}while(0);var $9$0=___cxa_find_matching_catch(-1,-1);if(($call_i_i|0)==0){___resumeException($9$0)}((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($9$0)}else{var $10$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($10$0)}}}while(0);HEAP32[$call_i_i+28>>2]=HEAP32[$__v+12>>2];var $__first__i_i_i_i_i188=$agg_result|0;HEAP32[$__first__i_i_i_i_i188>>2]=$0;var $agg_tmp3_i_i_i_i162_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i162_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i162_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast=$agg_result;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx=$agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast+9|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx]=HEAP8[$__h_sroa_3_9_idx];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+1|0]=HEAP8[$__h_sroa_3_9_idx+1|0];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+2|0]=HEAP8[$__h_sroa_3_9_idx+2|0];STACKTOP=sp;return}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEESR_RKT_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25;r4=0;r5=r1+4|0;r1=r5|0;r6=HEAP32[r1>>2];if((r6|0)==0){HEAP32[r2>>2]=r5;r7=r1;return r7}r1=HEAP8[r3];r5=r1&255;r8=(r5&1|0)==0;r9=r5>>>1;r5=(r1&1)==0;r1=r3+1|0;r10=r3+8|0;r11=r3+4|0;r3=r6;while(1){r6=r3+16|0;if(r8){r12=r9}else{r12=HEAP32[r11>>2]}r13=r6;r14=HEAP8[r6];r6=r14&255;r15=(r6&1|0)==0;if(r15){r16=r6>>>1}else{r16=HEAP32[r3+20>>2]}if(r5){r17=r1}else{r17=HEAP32[r10>>2]}r18=(r14&1)==0;if(r18){r19=r13+1|0}else{r19=HEAP32[r3+24>>2]}r14=_memcmp(r17,r19,r16>>>0<r12>>>0?r16:r12);if((r14|0)==0){if(r12>>>0<r16>>>0){r4=16}}else{if((r14|0)<0){r4=16}}if(r4==16){r4=0;r20=r3|0;r14=HEAP32[r20>>2];if((r14|0)==0){r4=17;break}else{r3=r14;continue}}if(r15){r21=r6>>>1}else{r21=HEAP32[r3+20>>2]}if(r8){r22=r9}else{r22=HEAP32[r11>>2]}if(r18){r23=r13+1|0}else{r23=HEAP32[r3+24>>2]}if(r5){r24=r1}else{r24=HEAP32[r10>>2]}r13=_memcmp(r23,r24,r22>>>0<r21>>>0?r22:r21);if((r13|0)==0){if(r21>>>0>=r22>>>0){r4=33;break}}else{if((r13|0)>=0){r4=33;break}}r25=r3+4|0;r13=HEAP32[r25>>2];if((r13|0)==0){r4=32;break}else{r3=r13}}if(r4==17){HEAP32[r2>>2]=r3;r7=r20;return r7}else if(r4==33){HEAP32[r2>>2]=r3;r7=r2;return r7}else if(r4==32){HEAP32[r2>>2]=r3;r7=r25;return r7}}function __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEEC2ERKS8_($this,$__x){var label=0;var $__begin__i=$this|0;HEAP32[$__begin__i>>2]=0;var $__end__i=$this+4|0;HEAP32[$__end__i>>2]=0;var $__first__i_i_i_i=$this+8|0;HEAP32[$__first__i_i_i_i>>2]=0;HEAP32[$this+12>>2]=__ZTVN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;var $__end__i23=$__x+4|0;var $1=HEAP32[$__end__i23>>2];var $__begin__i24=$__x|0;var $2=HEAP32[$__begin__i24>>2];if(($1|0)==($2|0)){return}var $sub_ptr_sub_i=$1-$2|0;var $sub_ptr_div_i=($sub_ptr_sub_i|0)/28&-1;do{if(($sub_ptr_sub_i|0)<0){((function(){try{__THREW__=0;return __ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=12;break}}else{var $call_i_i_i15=(function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($sub_ptr_sub_i,0,0,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=12;break}var $4=$call_i_i_i15;HEAP32[$__end__i>>2]=$4;HEAP32[$__begin__i>>2]=$4;HEAP32[$__first__i_i_i_i>>2]=$4+($sub_ptr_div_i*28&-1);var $5=HEAP32[$__begin__i24>>2];var $6=HEAP32[$__end__i23>>2];if(($5|0)==($6|0)){return}else{var $__first_addr_04_i=$5;var $7=$4}while(1){var $7;var $__first_addr_04_i;if(($7|0)==0){var $8=0}else{((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKS0_($7,$__first_addr_04_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=11;break}var $8=HEAP32[$__end__i>>2]}var $8;var $incdec_ptr_i=$8+28|0;HEAP32[$__end__i>>2]=$incdec_ptr_i;var $incdec_ptr4_i=$__first_addr_04_i+28|0;if(($incdec_ptr4_i|0)==($6|0)){label=25;break}else{var $__first_addr_04_i=$incdec_ptr4_i;var $7=$incdec_ptr_i}}if(label==25){return}else if(label==11){var $lpad_loopexit$0=___cxa_find_matching_catch(-1,-1);var $lpad_phi$1=tempRet0;var $lpad_phi$0=$lpad_loopexit$0;break}}}while(0);if(label==12){var $lpad_nonloopexit$0=___cxa_find_matching_catch(-1,-1);var $lpad_phi$1=tempRet0;var $lpad_phi$0=$lpad_nonloopexit$0}var $lpad_phi$0;var $lpad_phi$1;var $9=HEAP32[$__begin__i>>2];if(($9|0)==0){___resumeException($lpad_phi$0)}var $10=HEAP32[$__end__i>>2];if(($9|0)==($10|0)){var $17=$9}else{var $11=$10;while(1){var $11;var $incdec_ptr_i_i_i=$11-28|0;HEAP32[$__end__i>>2]=$incdec_ptr_i_i_i;if((HEAP8[$11-28+12|0]&1)!=0){__ZdlPv(HEAP32[$11-28+20>>2])}if((HEAP8[$incdec_ptr_i_i_i]&1)!=0){__ZdlPv(HEAP32[$11-28+8>>2])}var $15=HEAP32[$__end__i>>2];if(($9|0)==($15|0)){break}else{var $11=$15}}var $17=HEAP32[$__begin__i>>2]}var $17;var $18=$17;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($18)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($lpad_phi$0)}else{var $19$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($19$0)}}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISA_EERPNS_16__tree_node_baseIPvEESQ_RKT_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25;r4=0;r5=r1+4|0;r1=r5|0;r6=HEAP32[r1>>2];if((r6|0)==0){HEAP32[r2>>2]=r5;r7=r1;return r7}r1=HEAP8[r3];r5=r1&255;r8=(r5&1|0)==0;r9=r5>>>1;r5=(r1&1)==0;r1=r3+1|0;r10=r3+8|0;r11=r3+4|0;r3=r6;while(1){r6=r3+16|0;if(r8){r12=r9}else{r12=HEAP32[r11>>2]}r13=r6;r14=HEAP8[r6];r6=r14&255;r15=(r6&1|0)==0;if(r15){r16=r6>>>1}else{r16=HEAP32[r3+20>>2]}if(r5){r17=r1}else{r17=HEAP32[r10>>2]}r18=(r14&1)==0;if(r18){r19=r13+1|0}else{r19=HEAP32[r3+24>>2]}r14=_memcmp(r17,r19,r16>>>0<r12>>>0?r16:r12);if((r14|0)==0){if(r12>>>0<r16>>>0){r4=16}}else{if((r14|0)<0){r4=16}}if(r4==16){r4=0;r20=r3|0;r14=HEAP32[r20>>2];if((r14|0)==0){r4=17;break}else{r3=r14;continue}}if(r15){r21=r6>>>1}else{r21=HEAP32[r3+20>>2]}if(r8){r22=r9}else{r22=HEAP32[r11>>2]}if(r18){r23=r13+1|0}else{r23=HEAP32[r3+24>>2]}if(r5){r24=r1}else{r24=HEAP32[r10>>2]}r13=_memcmp(r23,r24,r22>>>0<r21>>>0?r22:r21);if((r13|0)==0){if(r21>>>0>=r22>>>0){r4=33;break}}else{if((r13|0)>=0){r4=33;break}}r25=r3+4|0;r13=HEAP32[r25>>2];if((r13|0)==0){r4=32;break}else{r3=r13}}if(r4==17){HEAP32[r2>>2]=r3;r7=r20;return r7}else if(r4==32){HEAP32[r2>>2]=r3;r7=r25;return r7}else if(r4==33){HEAP32[r2>>2]=r3;r7=r2;return r7}}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSA_($agg_result,$this,$__v){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $__h_sroa_3=sp;var $__second__i_i_i=$this+8|0;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(60,0,0,0);var $0=$call_i_i;var $agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx=sp+8|0;var $__h_sroa_368=$__h_sroa_3|0;HEAP8[$__h_sroa_368]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx];HEAP8[$__h_sroa_368+1|0]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx+1|0];HEAP8[$__h_sroa_368+2|0]=HEAP8[$agg_tmp25_sroa_2_5_agg_tmp_sroa_2_5_idx_idx+2|0];var $__h_sroa_3_9_idx=$__h_sroa_3|0;var $__value_=$call_i_i+16|0;if(($__value_|0)==0){var $__first__i_i_i_i_i188=$agg_result|0;HEAP32[$__first__i_i_i_i_i188>>2]=$0;var $agg_tmp3_i_i_i_i162_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i162_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i162_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast=$agg_result;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx=$agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast+9|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx]=HEAP8[$__h_sroa_3_9_idx];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+1|0]=HEAP8[$__h_sroa_3_9_idx+1|0];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+2|0]=HEAP8[$__h_sroa_3_9_idx+2|0];STACKTOP=sp;return}var $__size__i44_i_i_i_i_i_i=$__v;L4:do{if((HEAP8[$__size__i44_i_i_i_i_i_i]&1)==0){HEAP32[$__value_>>2]=HEAP32[$__size__i44_i_i_i_i_i_i>>2];HEAP32[$__value_+4>>2]=HEAP32[$__size__i44_i_i_i_i_i_i+4>>2];HEAP32[$__value_+8>>2]=HEAP32[$__size__i44_i_i_i_i_i_i+8>>2];label=12}else{var $2=HEAP32[$__v+8>>2];var $3=HEAP32[$__v+4>>2];do{if($3>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($3>>>0<11){HEAP8[$__value_]=$3<<1;var $__p_0_i_i_i_i_i_i_i=$call_i_i+17|0}else{var $and_i_i_i_i_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i_i_i_i_i57=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$call_i_i+24>>2]=$call_i_i_i_i_i_i_i_i_i57;HEAP32[$__value_>>2]=$and_i_i_i_i_i_i_i_i_i|1;HEAP32[$call_i_i+20>>2]=$3;var $__p_0_i_i_i_i_i_i_i=$call_i_i_i_i_i_i_i_i_i57}var $__p_0_i_i_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i_i_i_i_i+$3|0]=0;label=12;break L4}}while(0);var $12$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$12$0;label=17}}while(0);do{if(label==12){var $7=$call_i_i+28|0;var $second3_i_i_i_i=$__v+12|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionaryC2ERKS0_($7,$second3_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $__first__i_i_i_i_i188=$agg_result|0;HEAP32[$__first__i_i_i_i_i188>>2]=$0;var $agg_tmp3_i_i_i_i162_sroa_0_0__idx=$agg_result+4|0;HEAP32[$agg_tmp3_i_i_i_i162_sroa_0_0__idx>>2]=$__second__i_i_i;var $agg_tmp3_i_i_i_i162_sroa_1_4__idx=$agg_result+8|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_1_4__idx]=1;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast=$agg_result;var $agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx=$agg_tmp3_i_i_i_i162_sroa_2_5__raw_cast+9|0;HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx]=HEAP8[$__h_sroa_3_9_idx];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+1|0]=HEAP8[$__h_sroa_3_9_idx+1|0];HEAP8[$agg_tmp3_i_i_i_i162_sroa_2_5__raw_idx+2|0]=HEAP8[$__h_sroa_3_9_idx+2|0];STACKTOP=sp;return}var $8$0=___cxa_find_matching_catch(-1,-1);var $8$1=tempRet0;if((HEAP8[$__value_]&1)==0){var $eh_lpad_body$1=$8$1;var $eh_lpad_body$0=$8$0;label=17;break}__ZdlPv(HEAP32[$call_i_i+24>>2]);var $eh_lpad_body61$1=$8$1;var $eh_lpad_body61$0=$8$0}}while(0);do{if(label==17){var $eh_lpad_body$0;var $eh_lpad_body$1;if(($call_i_i|0)==0){var $eh_lpad_body60$1=$eh_lpad_body$1;var $eh_lpad_body60$0=$eh_lpad_body$0}else{var $eh_lpad_body61$1=$eh_lpad_body$1;var $eh_lpad_body61$0=$eh_lpad_body$0;break}var $eh_lpad_body60$0;var $eh_lpad_body60$1;___resumeException($eh_lpad_body60$0)}}while(0);var $eh_lpad_body61$0;var $eh_lpad_body61$1;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body60$1=$eh_lpad_body61$1;var $eh_lpad_body60$0=$eh_lpad_body61$0;var $eh_lpad_body60$0;var $eh_lpad_body60$1;___resumeException($eh_lpad_body60$0)}else{var $13$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($13$0)}}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r2+4|0;r7=r6;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE13__lower_boundIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_SQ_SQ_(r5,r2,r3,HEAP32[r6>>2],r7);r6=HEAP32[r5>>2];do{if((r6|0)!=(r7|0)){r5=HEAP8[r3];r2=r5&255;if((r2&1|0)==0){r8=r2>>>1}else{r8=HEAP32[r3+4>>2]}r2=r6+16|0;r9=HEAP8[r2];r10=r9&255;if((r10&1|0)==0){r11=r10>>>1}else{r11=HEAP32[r6+20>>2]}if((r5&1)==0){r12=r3+1|0}else{r12=HEAP32[r3+8>>2]}if((r9&1)==0){r13=r2+1|0}else{r13=HEAP32[r6+24>>2]}r2=_memcmp(r12,r13,r11>>>0<r8>>>0?r11:r8);if((r2|0)==0){if(r8>>>0<r11>>>0){break}}else{if((r2|0)<0){break}}HEAP32[r1>>2]=r6;STACKTOP=r4;return}}while(0);HEAP32[r1>>2]=r7;STACKTOP=r4;return}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE13__lower_boundIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_SQ_SQ_(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24;r2=0;if((r4|0)==0){r6=r5;r7=r1|0;HEAP32[r7>>2]=r6;return}r8=HEAP8[r3];r9=r8&255;r10=(r9&1|0)==0;r11=r9>>>1;r9=(r8&1)==0;r8=r3+1|0;r12=r3+8|0;r13=r3+4|0;r3=r4;r4=r5;L4:while(1){L6:do{if(r10){r5=r3;while(1){r14=r5+16|0;r15=HEAP8[r14];r16=r15&255;if((r16&1|0)==0){r17=r16>>>1}else{r17=HEAP32[r5+20>>2]}if((r15&1)==0){r18=r14+1|0}else{r18=HEAP32[r5+24>>2]}if(r9){r19=r8}else{r19=HEAP32[r12>>2]}r14=_memcmp(r18,r19,r11>>>0<r17>>>0?r11:r17);if((r14|0)==0){if(r17>>>0>=r11>>>0){r20=r5;break L6}}else{if((r14|0)>=0){r20=r5;break L6}}r14=HEAP32[r5+4>>2];if((r14|0)==0){r6=r4;r2=39;break L4}else{r5=r14}}}else{if(r9){r5=r3;while(1){r14=r5+16|0;r15=HEAP8[r14];r16=r15&255;if((r16&1|0)==0){r21=r16>>>1}else{r21=HEAP32[r5+20>>2]}r16=HEAP32[r13>>2];if((r15&1)==0){r22=r14+1|0}else{r22=HEAP32[r5+24>>2]}r14=_memcmp(r22,r8,r16>>>0<r21>>>0?r16:r21);if((r14|0)==0){if(r21>>>0>=r16>>>0){r20=r5;break L6}}else{if((r14|0)>=0){r20=r5;break L6}}r14=HEAP32[r5+4>>2];if((r14|0)==0){r6=r4;r2=43;break L4}else{r5=r14}}}else{r5=r3;while(1){r14=r5+16|0;r16=HEAP8[r14];r15=r16&255;if((r15&1|0)==0){r23=r15>>>1}else{r23=HEAP32[r5+20>>2]}r15=HEAP32[r13>>2];if((r16&1)==0){r24=r14+1|0}else{r24=HEAP32[r5+24>>2]}r14=_memcmp(r24,HEAP32[r12>>2],r15>>>0<r23>>>0?r15:r23);if((r14|0)==0){if(r23>>>0>=r15>>>0){r20=r5;break L6}}else{if((r14|0)>=0){r20=r5;break L6}}r14=HEAP32[r5+4>>2];if((r14|0)==0){r6=r4;r2=41;break L4}else{r5=r14}}}}}while(0);r5=HEAP32[r20>>2];if((r5|0)==0){r6=r20;r2=40;break}else{r3=r5;r4=r20}}if(r2==43){r7=r1|0;HEAP32[r7>>2]=r6;return}else if(r2==39){r7=r1|0;HEAP32[r7>>2]=r6;return}else if(r2==40){r7=r1|0;HEAP32[r7>>2]=r6;return}else if(r2==41){r7=r1|0;HEAP32[r7>>2]=r6;return}}function __ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;var $1=$this|0;__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE($1,$psys);HEAP32[$this>>2]=__ZTVN4Ogre10BoxEmitterE+8;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=6;var $arrayidx_i_i=$ref_tmp+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str1|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str1+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str1+2|0];HEAP8[$ref_tmp+4|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($0,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){if((HEAP8[$__size__i50_i]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp+8>>2]);STACKTOP=sp;return}var $6$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre10BoxEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=r1|0;__ZN4Ogre8Particle15resetDimensionsEv(r2);r4=__ZN4Ogre4Math15SymmetricRandomEv();r5=r4*HEAPF32[r1+284>>2];r6=r4*HEAPF32[r1+288>>2];r7=r4*HEAPF32[r1+292>>2];r4=__ZN4Ogre4Math15SymmetricRandomEv();r8=r4*HEAPF32[r1+296>>2];r9=r4*HEAPF32[r1+300>>2];r10=r4*HEAPF32[r1+304>>2];r4=__ZN4Ogre4Math15SymmetricRandomEv();r11=r4*HEAPF32[r1+312>>2]+(r9+(r6+HEAPF32[r1+108>>2]));r6=r4*HEAPF32[r1+316>>2]+(r10+(r7+HEAPF32[r1+112>>2]));HEAPF32[r2+24>>2]=r4*HEAPF32[r1+308>>2]+(r8+(r5+HEAPF32[r1+104>>2]));HEAPF32[r2+28>>2]=r11;HEAPF32[r2+32>>2]=r6;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r3,r2+48|0);r6=r1;r11=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r6>>2]+24>>2]](r3,r11);FUNCTION_TABLE[HEAP32[HEAP32[r6>>2]+28>>2]](r3,r11);r11=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r3);HEAPF32[r2+68>>2]=r11;HEAPF32[r2+64>>2]=r11;return}function __ZN4Ogre10BoxEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre10BoxEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19ColourFaderAffector12CmdRedAdjustD1Ev(r1){return}function __ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD1Ev(r1){return}function __ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD1Ev(r1){return}function __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD1Ev(r1){return}function __ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+272|0;var $ref_tmp=sp;var $ref_tmp10=sp+16;var $ref_tmp11=sp+48;var $ref_tmp13=sp+64;var $ref_tmp27=sp+80;var $ref_tmp28=sp+112;var $ref_tmp30=sp+128;var $ref_tmp46=sp+144;var $ref_tmp47=sp+176;var $ref_tmp49=sp+192;var $ref_tmp65=sp+208;var $ref_tmp66=sp+240;var $ref_tmp68=sp+256;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre19ColourFaderAffectorE+8;var $mType=$this+20|0;var $3=$this+36|0;HEAP32[$3>>2]=0;HEAP32[$3+4>>2]=0;HEAP32[$3+8>>2]=0;HEAP32[$3+12>>2]=0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str2|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){var $call_i_i_i15=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=51;break}var $4=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i15;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=19;_memcpy($call_i_i_i15,__str43|0,19)|0;HEAP8[$call_i_i_i15+19|0]=0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($4,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $45$0=___cxa_find_matching_catch(-1,-1);var $46=$45$0;var $47=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_8=$46;var $ehselector_slot_8=$47;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_8=$46;var $ehselector_slot_8=$47;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call5){STACKTOP=sp;return}var $7=HEAP32[$this+16>>2];var $__size__i50_i29=$ref_tmp11;HEAP8[$__size__i50_i29]=6;var $arrayidx_i_i30=$ref_tmp11+1|0;HEAP8[$arrayidx_i_i30]=HEAP8[__str54|0];HEAP8[$arrayidx_i_i30+1|0]=HEAP8[__str54+1|0];HEAP8[$arrayidx_i_i30+2|0]=HEAP8[__str54+2|0];HEAP8[$ref_tmp11+4|0]=0;var $call_i_i_i66=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i57=$ref_tmp13+8|0;HEAP32[$__data__i_i57>>2]=$call_i_i_i66;HEAP32[$ref_tmp13>>2]=81;HEAP32[$ref_tmp13+4>>2]=72;_memcpy($call_i_i_i66,__str65|0,72)|0;HEAP8[$call_i_i_i66+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp10,$ref_tmp11,$ref_tmp13,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp10,__ZN4Ogre19ColourFaderAffector8msRedCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $56$0=___cxa_find_matching_catch(-1,-1);var $57=$56$0;var $58=tempRet0;if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)==0){var $exn_slot_0=$57;var $ehselector_slot_0=$58;break}__ZdlPv(HEAP32[$ref_tmp10+8>>2]);var $exn_slot_0=$57;var $ehselector_slot_0=$58;break}if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+8>>2])}if((HEAP8[$ref_tmp13]&1)!=0){__ZdlPv(HEAP32[$__data__i_i57>>2])}if((HEAP8[$__size__i50_i29]&1)!=0){__ZdlPv(HEAP32[$ref_tmp11+8>>2])}var $__s2_i_i87=$ref_tmp28;var $__size__i50_i88=$ref_tmp28;HEAP8[$__size__i50_i88]=10;var $arrayidx_i_i89=$__s2_i_i87+1|0;HEAP8[$arrayidx_i_i89]=HEAP8[__str76|0];HEAP8[$arrayidx_i_i89+1|0]=HEAP8[__str76+1|0];HEAP8[$arrayidx_i_i89+2|0]=HEAP8[__str76+2|0];HEAP8[$arrayidx_i_i89+3|0]=HEAP8[__str76+3|0];HEAP8[$arrayidx_i_i89+4|0]=HEAP8[__str76+4|0];HEAP8[$__s2_i_i87+6|0]=0;var $call_i_i_i125=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i116=$ref_tmp30+8|0;HEAP32[$__data__i_i116>>2]=$call_i_i_i125;HEAP32[$ref_tmp30>>2]=81;HEAP32[$ref_tmp30+4>>2]=74;_memcpy($call_i_i_i125,__str87|0,74)|0;HEAP8[$call_i_i_i125+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp27,$ref_tmp28,$ref_tmp30,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp27,__ZN4Ogre19ColourFaderAffector10msGreenCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $73$0=___cxa_find_matching_catch(-1,-1);var $74=$73$0;var $75=tempRet0;if((HEAP8[$ref_tmp27+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+20>>2])}if((HEAP8[$ref_tmp27]&1)==0){var $exn_slot_2=$74;var $ehselector_slot_2=$75;break}__ZdlPv(HEAP32[$ref_tmp27+8>>2]);var $exn_slot_2=$74;var $ehselector_slot_2=$75;break}if((HEAP8[$ref_tmp27+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+20>>2])}if((HEAP8[$ref_tmp27]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+8>>2])}if((HEAP8[$ref_tmp30]&1)!=0){__ZdlPv(HEAP32[$__data__i_i116>>2])}if((HEAP8[$__size__i50_i88]&1)!=0){__ZdlPv(HEAP32[$ref_tmp28+8>>2])}var $__s2_i_i160=$ref_tmp47;var $__size__i50_i161=$ref_tmp47;HEAP8[$__size__i50_i161]=8;var $25=$__s2_i_i160+1|0;tempBigInt=1702194274;HEAP8[$25]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$25+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$25+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$25+3|0]=tempBigInt;HEAP8[$__s2_i_i160+5|0]=0;var $call_i_i_i198=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i189=$ref_tmp49+8|0;HEAP32[$__data__i_i189>>2]=$call_i_i_i198;HEAP32[$ref_tmp49>>2]=81;HEAP32[$ref_tmp49+4>>2]=73;_memcpy($call_i_i_i198,__str10|0,73)|0;HEAP8[$call_i_i_i198+73|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp46,$ref_tmp47,$ref_tmp49,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp46,__ZN4Ogre19ColourFaderAffector9msBlueCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $90$0=___cxa_find_matching_catch(-1,-1);var $91=$90$0;var $92=tempRet0;if((HEAP8[$ref_tmp46+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+20>>2])}if((HEAP8[$ref_tmp46]&1)==0){var $exn_slot_4=$91;var $ehselector_slot_4=$92;break}__ZdlPv(HEAP32[$ref_tmp46+8>>2]);var $exn_slot_4=$91;var $ehselector_slot_4=$92;break}if((HEAP8[$ref_tmp46+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+20>>2])}if((HEAP8[$ref_tmp46]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+8>>2])}if((HEAP8[$ref_tmp49]&1)!=0){__ZdlPv(HEAP32[$__data__i_i189>>2])}if((HEAP8[$__size__i50_i161]&1)!=0){__ZdlPv(HEAP32[$ref_tmp47+8>>2])}var $__s2_i_i233=$ref_tmp66;var $__size__i50_i234=$ref_tmp66;HEAP8[$__size__i50_i234]=10;var $arrayidx_i_i235=$__s2_i_i233+1|0;HEAP8[$arrayidx_i_i235]=HEAP8[__str118|0];HEAP8[$arrayidx_i_i235+1|0]=HEAP8[__str118+1|0];HEAP8[$arrayidx_i_i235+2|0]=HEAP8[__str118+2|0];HEAP8[$arrayidx_i_i235+3|0]=HEAP8[__str118+3|0];HEAP8[$arrayidx_i_i235+4|0]=HEAP8[__str118+4|0];HEAP8[$__s2_i_i233+6|0]=0;var $call_i_i_i271=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i262=$ref_tmp68+8|0;HEAP32[$__data__i_i262>>2]=$call_i_i_i271;HEAP32[$ref_tmp68>>2]=81;HEAP32[$ref_tmp68+4>>2]=74;_memcpy($call_i_i_i271,__str12|0,74)|0;HEAP8[$call_i_i_i271+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp65,$ref_tmp66,$ref_tmp68,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp65,__ZN4Ogre19ColourFaderAffector10msAlphaCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $107$0=___cxa_find_matching_catch(-1,-1);var $108=$107$0;var $109=tempRet0;if((HEAP8[$ref_tmp65+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+20>>2])}if((HEAP8[$ref_tmp65]&1)==0){var $exn_slot_6=$108;var $ehselector_slot_6=$109;break}__ZdlPv(HEAP32[$ref_tmp65+8>>2]);var $exn_slot_6=$108;var $ehselector_slot_6=$109;break}if((HEAP8[$ref_tmp65+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+20>>2])}if((HEAP8[$ref_tmp65]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+8>>2])}if((HEAP8[$ref_tmp68]&1)!=0){__ZdlPv(HEAP32[$__data__i_i262>>2])}if((HEAP8[$__size__i50_i234]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp66+8>>2]);STACKTOP=sp;return}else{var $104$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$104$0;var $ehselector_slot_6=tempRet0}}while(0);var $ehselector_slot_6;var $exn_slot_6;if((HEAP8[$ref_tmp68]&1)==0){var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6;break}__ZdlPv(HEAP32[$__data__i_i262>>2]);var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6}else{var $101$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_7=$101$0;var $ehselector_slot_7=tempRet0}}while(0);var $ehselector_slot_7;var $exn_slot_7;if((HEAP8[$__size__i50_i234]&1)==0){var $exn_slot_8=$exn_slot_7;var $ehselector_slot_8=$ehselector_slot_7;break L1}__ZdlPv(HEAP32[$ref_tmp66+8>>2]);var $exn_slot_8=$exn_slot_7;var $ehselector_slot_8=$ehselector_slot_7;break L1}else{var $87$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$87$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp49]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i189>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $84$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$84$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$__size__i50_i161]&1)==0){var $exn_slot_8=$exn_slot_5;var $ehselector_slot_8=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$ref_tmp47+8>>2]);var $exn_slot_8=$exn_slot_5;var $ehselector_slot_8=$ehselector_slot_5;break L1}else{var $70$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$70$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp30]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i116>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $67$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$67$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$__size__i50_i88]&1)==0){var $exn_slot_8=$exn_slot_3;var $ehselector_slot_8=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$ref_tmp28+8>>2]);var $exn_slot_8=$exn_slot_3;var $ehselector_slot_8=$ehselector_slot_3;break L1}else{var $53$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$53$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp13]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i57>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $50$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$50$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$__size__i50_i29]&1)==0){var $exn_slot_8=$exn_slot_1;var $ehselector_slot_8=$ehselector_slot_1;break}__ZdlPv(HEAP32[$ref_tmp11+8>>2]);var $exn_slot_8=$exn_slot_1;var $ehselector_slot_8=$ehselector_slot_1}else{label=51}}while(0);if(label==51){var $42$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_8=$42$0;var $ehselector_slot_8=tempRet0}var $ehselector_slot_8;var $exn_slot_8;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_8)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19ColourFaderAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;__ZN4Ogre14ParticleSystem12_getIteratorEv(r5,r2);r2=HEAPF32[r1+36>>2]*r3;r6=HEAPF32[r1+40>>2]*r3;r7=HEAPF32[r1+44>>2]*r3;r8=HEAPF32[r1+48>>2]*r3;if(__ZN4Ogre16ParticleIterator3endEv(r5)){STACKTOP=r4;return}while(1){r3=__ZN4Ogre16ParticleIterator7getNextEv(r5);r1=r3+48|0;r9=r2+HEAPF32[r1>>2];HEAPF32[r1>>2]=r9;do{if(r9<0){HEAPF32[r1>>2]=0}else{if(r9<=1){break}HEAPF32[r1>>2]=1}}while(0);r1=r3+52|0;r9=r6+HEAPF32[r1>>2];HEAPF32[r1>>2]=r9;do{if(r9<0){HEAPF32[r1>>2]=0}else{if(r9<=1){break}HEAPF32[r1>>2]=1}}while(0);r1=r3+56|0;r9=r7+HEAPF32[r1>>2];HEAPF32[r1>>2]=r9;do{if(r9<0){HEAPF32[r1>>2]=0}else{if(r9<=1){break}HEAPF32[r1>>2]=1}}while(0);r1=r3+60|0;r9=r8+HEAPF32[r1>>2];HEAPF32[r1>>2]=r9;do{if(r9<0){HEAPF32[r1>>2]=0}else{if(r9<=1){break}HEAPF32[r1>>2]=1}}while(0);if(__ZN4Ogre16ParticleIterator3endEv(r5)){break}}STACKTOP=r4;return}function __ZN4Ogre19ColourFaderAffector9setAdjustEffff(r1,r2,r3,r4,r5){HEAPF32[r1+36>>2]=r2;HEAPF32[r1+40>>2]=r3;HEAPF32[r1+44>>2]=r4;HEAPF32[r1+48>>2]=r5;return}function __ZN4Ogre19ColourFaderAffector12setRedAdjustEf(r1,r2){HEAPF32[r1+36>>2]=r2;return}function __ZNK4Ogre19ColourFaderAffector12getRedAdjustEv(r1){return HEAPF32[r1+36>>2]}function __ZN4Ogre19ColourFaderAffector14setGreenAdjustEf(r1,r2){HEAPF32[r1+40>>2]=r2;return}function __ZNK4Ogre19ColourFaderAffector14getGreenAdjustEv(r1){return HEAPF32[r1+40>>2]}function __ZN4Ogre19ColourFaderAffector13setBlueAdjustEf(r1,r2){HEAPF32[r1+44>>2]=r2;return}function __ZNK4Ogre19ColourFaderAffector13getBlueAdjustEv(r1){return HEAPF32[r1+44>>2]}function __ZN4Ogre19ColourFaderAffector14setAlphaAdjustEf(r1,r2){HEAPF32[r1+48>>2]=r2;return}function __ZNK4Ogre19ColourFaderAffector14getAlphaAdjustEv(r1){return HEAPF32[r1+48>>2]}function __ZNK4Ogre19ColourFaderAffector12CmdRedAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+36>>2],6,0,32,0);return}function __ZN4Ogre19ColourFaderAffector12CmdRedAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+36>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre19ColourFaderAffector14CmdGreenAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+40>>2],6,0,32,0);return}function __ZN4Ogre19ColourFaderAffector14CmdGreenAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+40>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre19ColourFaderAffector13CmdBlueAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+44>>2],6,0,32,0);return}function __ZN4Ogre19ColourFaderAffector13CmdBlueAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+44>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre19ColourFaderAffector14CmdAlphaAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+48>>2],6,0,32,0);return}function __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+48>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZN4Ogre19ColourFaderAffector12CmdRedAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19ColourFaderAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre19ColourFaderAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre16ParticleAffector13_initParticleEPNS_8ParticleE(r1,r2){return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r3=_strlen(r2);r4=r1;r5=r1;r6=HEAP8[r5];if((r6&1)==0){r7=10;r8=r6}else{r6=HEAP32[r1>>2];r7=(r6&-2)-1|0;r8=r6&255}if(r7>>>0<r3>>>0){r6=r8&255;if((r6&1|0)==0){r9=r6>>>1}else{r9=HEAP32[r1+4>>2]}__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r7,r3-r7|0,r9,0,r9,r3,r2);return r1}if((r8&1)==0){r10=r4+1|0}else{r10=HEAP32[r1+8>>2]}_memmove(r10,r2,r3,1,0);HEAP8[r10+r3|0]=0;if((HEAP8[r5]&1)==0){HEAP8[r5]=r3<<1;return r1}else{HEAP32[r1+4>>2]=r3;return r1}}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector214CmdStateChangeD1Ev(r1){return}function __ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+592|0;var $ref_tmp=sp;var $ref_tmp10=sp+16;var $ref_tmp11=sp+48;var $ref_tmp13=sp+64;var $ref_tmp27=sp+80;var $ref_tmp28=sp+112;var $ref_tmp30=sp+128;var $ref_tmp46=sp+144;var $ref_tmp47=sp+176;var $ref_tmp49=sp+192;var $ref_tmp65=sp+208;var $ref_tmp66=sp+240;var $ref_tmp68=sp+256;var $ref_tmp84=sp+272;var $ref_tmp85=sp+304;var $ref_tmp87=sp+320;var $ref_tmp103=sp+336;var $ref_tmp104=sp+368;var $ref_tmp106=sp+384;var $ref_tmp122=sp+400;var $ref_tmp123=sp+432;var $ref_tmp125=sp+448;var $ref_tmp141=sp+464;var $ref_tmp142=sp+496;var $ref_tmp144=sp+512;var $ref_tmp160=sp+528;var $ref_tmp161=sp+560;var $ref_tmp163=sp+576;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre20ColourFaderAffector2E+8;var $mType=$this+20|0;_memset($this+36|0,0,32)|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str14|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){HEAPF32[$this+68>>2]=1;var $call_i_i_i30=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=107;break}var $4=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i30;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=20;_memcpy($call_i_i_i30,__str915|0,20)|0;HEAP8[$call_i_i_i30+20|0]=0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($4,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $85$0=___cxa_find_matching_catch(-1,-1);var $86=$85$0;var $87=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_18=$86;var $ehselector_slot_18=$87;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_18=$86;var $ehselector_slot_18=$87;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call5){STACKTOP=sp;return}var $7=HEAP32[$this+16>>2];var $__s2_i_i43=$ref_tmp11;var $__size__i50_i44=$ref_tmp11;HEAP8[$__size__i50_i44]=8;var $8=$__s2_i_i43+1|0;tempBigInt=828663154;HEAP8[$8]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$8+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$8+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$8+3|0]=tempBigInt;HEAP8[$__s2_i_i43+5|0]=0;var $call_i_i_i81=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i72=$ref_tmp13+8|0;HEAP32[$__data__i_i72>>2]=$call_i_i_i81;HEAP32[$ref_tmp13>>2]=81;HEAP32[$ref_tmp13+4>>2]=72;_memcpy($call_i_i_i81,__str1116|0,72)|0;HEAP8[$call_i_i_i81+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp10,$ref_tmp11,$ref_tmp13,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp10,__ZN4Ogre20ColourFaderAffector29msRedCmd1E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $96$0=___cxa_find_matching_catch(-1,-1);var $97=$96$0;var $98=tempRet0;if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)==0){var $exn_slot_0=$97;var $ehselector_slot_0=$98;break}__ZdlPv(HEAP32[$ref_tmp10+8>>2]);var $exn_slot_0=$97;var $ehselector_slot_0=$98;break}if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+8>>2])}if((HEAP8[$ref_tmp13]&1)!=0){__ZdlPv(HEAP32[$__data__i_i72>>2])}if((HEAP8[$__size__i50_i44]&1)!=0){__ZdlPv(HEAP32[$ref_tmp11+8>>2])}var $__s2_i_i102=$ref_tmp28;var $__size__i50_i103=$ref_tmp28;HEAP8[$__size__i50_i103]=12;var $arrayidx_i_i104=$__s2_i_i102+1|0;HEAP8[$arrayidx_i_i104]=HEAP8[__str1217|0];HEAP8[$arrayidx_i_i104+1|0]=HEAP8[__str1217+1|0];HEAP8[$arrayidx_i_i104+2|0]=HEAP8[__str1217+2|0];HEAP8[$arrayidx_i_i104+3|0]=HEAP8[__str1217+3|0];HEAP8[$arrayidx_i_i104+4|0]=HEAP8[__str1217+4|0];HEAP8[$arrayidx_i_i104+5|0]=HEAP8[__str1217+5|0];HEAP8[$__s2_i_i102+7|0]=0;var $call_i_i_i140=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i131=$ref_tmp30+8|0;HEAP32[$__data__i_i131>>2]=$call_i_i_i140;HEAP32[$ref_tmp30>>2]=81;HEAP32[$ref_tmp30+4>>2]=74;_memcpy($call_i_i_i140,__str1318|0,74)|0;HEAP8[$call_i_i_i140+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp27,$ref_tmp28,$ref_tmp30,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp27,__ZN4Ogre20ColourFaderAffector211msGreenCmd1E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $113$0=___cxa_find_matching_catch(-1,-1);var $114=$113$0;var $115=tempRet0;if((HEAP8[$ref_tmp27+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+20>>2])}if((HEAP8[$ref_tmp27]&1)==0){var $exn_slot_2=$114;var $ehselector_slot_2=$115;break}__ZdlPv(HEAP32[$ref_tmp27+8>>2]);var $exn_slot_2=$114;var $ehselector_slot_2=$115;break}if((HEAP8[$ref_tmp27+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+20>>2])}if((HEAP8[$ref_tmp27]&1)!=0){__ZdlPv(HEAP32[$ref_tmp27+8>>2])}if((HEAP8[$ref_tmp30]&1)!=0){__ZdlPv(HEAP32[$__data__i_i131>>2])}if((HEAP8[$__size__i50_i103]&1)!=0){__ZdlPv(HEAP32[$ref_tmp28+8>>2])}var $__s2_i_i175=$ref_tmp47;var $__size__i50_i176=$ref_tmp47;HEAP8[$__size__i50_i176]=10;var $arrayidx_i_i177=$__s2_i_i175+1|0;HEAP8[$arrayidx_i_i177]=HEAP8[__str1419|0];HEAP8[$arrayidx_i_i177+1|0]=HEAP8[__str1419+1|0];HEAP8[$arrayidx_i_i177+2|0]=HEAP8[__str1419+2|0];HEAP8[$arrayidx_i_i177+3|0]=HEAP8[__str1419+3|0];HEAP8[$arrayidx_i_i177+4|0]=HEAP8[__str1419+4|0];HEAP8[$__s2_i_i175+6|0]=0;var $call_i_i_i213=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i204=$ref_tmp49+8|0;HEAP32[$__data__i_i204>>2]=$call_i_i_i213;HEAP32[$ref_tmp49>>2]=81;HEAP32[$ref_tmp49+4>>2]=73;_memcpy($call_i_i_i213,__str1520|0,73)|0;HEAP8[$call_i_i_i213+73|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp46,$ref_tmp47,$ref_tmp49,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp46,__ZN4Ogre20ColourFaderAffector210msBlueCmd1E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $130$0=___cxa_find_matching_catch(-1,-1);var $131=$130$0;var $132=tempRet0;if((HEAP8[$ref_tmp46+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+20>>2])}if((HEAP8[$ref_tmp46]&1)==0){var $exn_slot_4=$131;var $ehselector_slot_4=$132;break}__ZdlPv(HEAP32[$ref_tmp46+8>>2]);var $exn_slot_4=$131;var $ehselector_slot_4=$132;break}if((HEAP8[$ref_tmp46+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+20>>2])}if((HEAP8[$ref_tmp46]&1)!=0){__ZdlPv(HEAP32[$ref_tmp46+8>>2])}if((HEAP8[$ref_tmp49]&1)!=0){__ZdlPv(HEAP32[$__data__i_i204>>2])}if((HEAP8[$__size__i50_i176]&1)!=0){__ZdlPv(HEAP32[$ref_tmp47+8>>2])}var $__s2_i_i248=$ref_tmp66;var $__size__i50_i249=$ref_tmp66;HEAP8[$__size__i50_i249]=12;var $arrayidx_i_i250=$__s2_i_i248+1|0;HEAP8[$arrayidx_i_i250]=HEAP8[__str16|0];HEAP8[$arrayidx_i_i250+1|0]=HEAP8[__str16+1|0];HEAP8[$arrayidx_i_i250+2|0]=HEAP8[__str16+2|0];HEAP8[$arrayidx_i_i250+3|0]=HEAP8[__str16+3|0];HEAP8[$arrayidx_i_i250+4|0]=HEAP8[__str16+4|0];HEAP8[$arrayidx_i_i250+5|0]=HEAP8[__str16+5|0];HEAP8[$__s2_i_i248+7|0]=0;var $call_i_i_i286=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i277=$ref_tmp68+8|0;HEAP32[$__data__i_i277>>2]=$call_i_i_i286;HEAP32[$ref_tmp68>>2]=81;HEAP32[$ref_tmp68+4>>2]=74;_memcpy($call_i_i_i286,__str17|0,74)|0;HEAP8[$call_i_i_i286+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp65,$ref_tmp66,$ref_tmp68,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp65,__ZN4Ogre20ColourFaderAffector211msAlphaCmd1E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $147$0=___cxa_find_matching_catch(-1,-1);var $148=$147$0;var $149=tempRet0;if((HEAP8[$ref_tmp65+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+20>>2])}if((HEAP8[$ref_tmp65]&1)==0){var $exn_slot_6=$148;var $ehselector_slot_6=$149;break}__ZdlPv(HEAP32[$ref_tmp65+8>>2]);var $exn_slot_6=$148;var $ehselector_slot_6=$149;break}if((HEAP8[$ref_tmp65+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+20>>2])}if((HEAP8[$ref_tmp65]&1)!=0){__ZdlPv(HEAP32[$ref_tmp65+8>>2])}if((HEAP8[$ref_tmp68]&1)!=0){__ZdlPv(HEAP32[$__data__i_i277>>2])}if((HEAP8[$__size__i50_i249]&1)!=0){__ZdlPv(HEAP32[$ref_tmp66+8>>2])}var $__s2_i_i321=$ref_tmp85;var $__size__i50_i322=$ref_tmp85;HEAP8[$__size__i50_i322]=8;var $41=$__s2_i_i321+1|0;tempBigInt=845440370;HEAP8[$41]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$41+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$41+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$41+3|0]=tempBigInt;HEAP8[$__s2_i_i321+5|0]=0;var $call_i_i_i359=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i350=$ref_tmp87+8|0;HEAP32[$__data__i_i350>>2]=$call_i_i_i359;HEAP32[$ref_tmp87>>2]=81;HEAP32[$ref_tmp87+4>>2]=72;_memcpy($call_i_i_i359,__str1116|0,72)|0;HEAP8[$call_i_i_i359+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp84,$ref_tmp85,$ref_tmp87,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp84,__ZN4Ogre20ColourFaderAffector29msRedCmd2E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $164$0=___cxa_find_matching_catch(-1,-1);var $165=$164$0;var $166=tempRet0;if((HEAP8[$ref_tmp84+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp84+20>>2])}if((HEAP8[$ref_tmp84]&1)==0){var $exn_slot_8=$165;var $ehselector_slot_8=$166;break}__ZdlPv(HEAP32[$ref_tmp84+8>>2]);var $exn_slot_8=$165;var $ehselector_slot_8=$166;break}if((HEAP8[$ref_tmp84+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp84+20>>2])}if((HEAP8[$ref_tmp84]&1)!=0){__ZdlPv(HEAP32[$ref_tmp84+8>>2])}if((HEAP8[$ref_tmp87]&1)!=0){__ZdlPv(HEAP32[$__data__i_i350>>2])}if((HEAP8[$__size__i50_i322]&1)!=0){__ZdlPv(HEAP32[$ref_tmp85+8>>2])}var $__s2_i_i394=$ref_tmp104;var $__size__i50_i395=$ref_tmp104;HEAP8[$__size__i50_i395]=12;var $arrayidx_i_i396=$__s2_i_i394+1|0;HEAP8[$arrayidx_i_i396]=HEAP8[__str19|0];HEAP8[$arrayidx_i_i396+1|0]=HEAP8[__str19+1|0];HEAP8[$arrayidx_i_i396+2|0]=HEAP8[__str19+2|0];HEAP8[$arrayidx_i_i396+3|0]=HEAP8[__str19+3|0];HEAP8[$arrayidx_i_i396+4|0]=HEAP8[__str19+4|0];HEAP8[$arrayidx_i_i396+5|0]=HEAP8[__str19+5|0];HEAP8[$__s2_i_i394+7|0]=0;var $call_i_i_i432=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i423=$ref_tmp106+8|0;HEAP32[$__data__i_i423>>2]=$call_i_i_i432;HEAP32[$ref_tmp106>>2]=81;HEAP32[$ref_tmp106+4>>2]=74;_memcpy($call_i_i_i432,__str1318|0,74)|0;HEAP8[$call_i_i_i432+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp103,$ref_tmp104,$ref_tmp106,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp103,__ZN4Ogre20ColourFaderAffector211msGreenCmd2E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $181$0=___cxa_find_matching_catch(-1,-1);var $182=$181$0;var $183=tempRet0;if((HEAP8[$ref_tmp103+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp103+20>>2])}if((HEAP8[$ref_tmp103]&1)==0){var $exn_slot_10=$182;var $ehselector_slot_10=$183;break}__ZdlPv(HEAP32[$ref_tmp103+8>>2]);var $exn_slot_10=$182;var $ehselector_slot_10=$183;break}if((HEAP8[$ref_tmp103+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp103+20>>2])}if((HEAP8[$ref_tmp103]&1)!=0){__ZdlPv(HEAP32[$ref_tmp103+8>>2])}if((HEAP8[$ref_tmp106]&1)!=0){__ZdlPv(HEAP32[$__data__i_i423>>2])}if((HEAP8[$__size__i50_i395]&1)!=0){__ZdlPv(HEAP32[$ref_tmp104+8>>2])}var $__s2_i_i467=$ref_tmp123;var $__size__i50_i468=$ref_tmp123;HEAP8[$__size__i50_i468]=10;var $arrayidx_i_i469=$__s2_i_i467+1|0;HEAP8[$arrayidx_i_i469]=HEAP8[__str20|0];HEAP8[$arrayidx_i_i469+1|0]=HEAP8[__str20+1|0];HEAP8[$arrayidx_i_i469+2|0]=HEAP8[__str20+2|0];HEAP8[$arrayidx_i_i469+3|0]=HEAP8[__str20+3|0];HEAP8[$arrayidx_i_i469+4|0]=HEAP8[__str20+4|0];HEAP8[$__s2_i_i467+6|0]=0;var $call_i_i_i506=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i496=$ref_tmp125+8|0;HEAP32[$__data__i_i496>>2]=$call_i_i_i506;HEAP32[$ref_tmp125>>2]=81;HEAP32[$ref_tmp125+4>>2]=73;_memcpy($call_i_i_i506,__str1520|0,73)|0;HEAP8[$call_i_i_i506+73|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp122,$ref_tmp123,$ref_tmp125,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp122,__ZN4Ogre20ColourFaderAffector210msBlueCmd2E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $198$0=___cxa_find_matching_catch(-1,-1);var $199=$198$0;var $200=tempRet0;if((HEAP8[$ref_tmp122+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp122+20>>2])}if((HEAP8[$ref_tmp122]&1)==0){var $exn_slot_12=$199;var $ehselector_slot_12=$200;break}__ZdlPv(HEAP32[$ref_tmp122+8>>2]);var $exn_slot_12=$199;var $ehselector_slot_12=$200;break}if((HEAP8[$ref_tmp122+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp122+20>>2])}if((HEAP8[$ref_tmp122]&1)!=0){__ZdlPv(HEAP32[$ref_tmp122+8>>2])}if((HEAP8[$ref_tmp125]&1)!=0){__ZdlPv(HEAP32[$__data__i_i496>>2])}if((HEAP8[$__size__i50_i468]&1)!=0){__ZdlPv(HEAP32[$ref_tmp123+8>>2])}var $__s2_i_i541=$ref_tmp142;var $__size__i50_i542=$ref_tmp142;HEAP8[$__size__i50_i542]=12;var $arrayidx_i_i543=$__s2_i_i541+1|0;HEAP8[$arrayidx_i_i543]=HEAP8[__str21|0];HEAP8[$arrayidx_i_i543+1|0]=HEAP8[__str21+1|0];HEAP8[$arrayidx_i_i543+2|0]=HEAP8[__str21+2|0];HEAP8[$arrayidx_i_i543+3|0]=HEAP8[__str21+3|0];HEAP8[$arrayidx_i_i543+4|0]=HEAP8[__str21+4|0];HEAP8[$arrayidx_i_i543+5|0]=HEAP8[__str21+5|0];HEAP8[$__s2_i_i541+7|0]=0;var $call_i_i_i579=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i570=$ref_tmp144+8|0;HEAP32[$__data__i_i570>>2]=$call_i_i_i579;HEAP32[$ref_tmp144>>2]=81;HEAP32[$ref_tmp144+4>>2]=74;_memcpy($call_i_i_i579,__str17|0,74)|0;HEAP8[$call_i_i_i579+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp141,$ref_tmp142,$ref_tmp144,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp141,__ZN4Ogre20ColourFaderAffector211msAlphaCmd2E|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $215$0=___cxa_find_matching_catch(-1,-1);var $216=$215$0;var $217=tempRet0;if((HEAP8[$ref_tmp141+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp141+20>>2])}if((HEAP8[$ref_tmp141]&1)==0){var $exn_slot_14=$216;var $ehselector_slot_14=$217;break}__ZdlPv(HEAP32[$ref_tmp141+8>>2]);var $exn_slot_14=$216;var $ehselector_slot_14=$217;break}if((HEAP8[$ref_tmp141+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp141+20>>2])}if((HEAP8[$ref_tmp141]&1)!=0){__ZdlPv(HEAP32[$ref_tmp141+8>>2])}if((HEAP8[$ref_tmp144]&1)!=0){__ZdlPv(HEAP32[$__data__i_i570>>2])}if((HEAP8[$__size__i50_i542]&1)!=0){__ZdlPv(HEAP32[$ref_tmp142+8>>2])}var $call_i_i_i629=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=107;break L1}var $__data__i_i620=$ref_tmp161+8|0;HEAP32[$__data__i_i620>>2]=$call_i_i_i629;HEAP32[$ref_tmp161>>2]=17;HEAP32[$ref_tmp161+4>>2]=12;_memcpy($call_i_i_i629,__str22|0,12)|0;HEAP8[$call_i_i_i629+12|0]=0;var $call_i_i_i652=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i643=$ref_tmp163+8|0;HEAP32[$__data__i_i643>>2]=$call_i_i_i652;HEAP32[$ref_tmp163>>2]=81;HEAP32[$ref_tmp163+4>>2]=77;_memcpy($call_i_i_i652,__str23|0,77)|0;HEAP8[$call_i_i_i652+77|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp160,$ref_tmp161,$ref_tmp163,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp160,__ZN4Ogre20ColourFaderAffector210msStateCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $232$0=___cxa_find_matching_catch(-1,-1);var $233=$232$0;var $234=tempRet0;if((HEAP8[$ref_tmp160+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp160+20>>2])}if((HEAP8[$ref_tmp160]&1)==0){var $exn_slot_16=$233;var $ehselector_slot_16=$234;break}__ZdlPv(HEAP32[$ref_tmp160+8>>2]);var $exn_slot_16=$233;var $ehselector_slot_16=$234;break}if((HEAP8[$ref_tmp160+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp160+20>>2])}if((HEAP8[$ref_tmp160]&1)!=0){__ZdlPv(HEAP32[$ref_tmp160+8>>2])}if((HEAP8[$ref_tmp163]&1)!=0){__ZdlPv(HEAP32[$__data__i_i643>>2])}if((HEAP8[$ref_tmp161]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i620>>2]);STACKTOP=sp;return}else{var $229$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_16=$229$0;var $ehselector_slot_16=tempRet0}}while(0);var $ehselector_slot_16;var $exn_slot_16;if((HEAP8[$ref_tmp163]&1)==0){var $exn_slot_17=$exn_slot_16;var $ehselector_slot_17=$ehselector_slot_16;break}__ZdlPv(HEAP32[$__data__i_i643>>2]);var $exn_slot_17=$exn_slot_16;var $ehselector_slot_17=$ehselector_slot_16}else{var $226$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_17=$226$0;var $ehselector_slot_17=tempRet0}}while(0);var $ehselector_slot_17;var $exn_slot_17;if((HEAP8[$ref_tmp161]&1)==0){var $exn_slot_18=$exn_slot_17;var $ehselector_slot_18=$ehselector_slot_17;break L1}__ZdlPv(HEAP32[$__data__i_i620>>2]);var $exn_slot_18=$exn_slot_17;var $ehselector_slot_18=$ehselector_slot_17;break L1}else{var $212$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_14=$212$0;var $ehselector_slot_14=tempRet0}}while(0);var $ehselector_slot_14;var $exn_slot_14;if((HEAP8[$ref_tmp144]&1)==0){var $exn_slot_15=$exn_slot_14;var $ehselector_slot_15=$ehselector_slot_14;break}__ZdlPv(HEAP32[$__data__i_i570>>2]);var $exn_slot_15=$exn_slot_14;var $ehselector_slot_15=$ehselector_slot_14}else{var $209$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_15=$209$0;var $ehselector_slot_15=tempRet0}}while(0);var $ehselector_slot_15;var $exn_slot_15;if((HEAP8[$__size__i50_i542]&1)==0){var $exn_slot_18=$exn_slot_15;var $ehselector_slot_18=$ehselector_slot_15;break L1}__ZdlPv(HEAP32[$ref_tmp142+8>>2]);var $exn_slot_18=$exn_slot_15;var $ehselector_slot_18=$ehselector_slot_15;break L1}else{var $195$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_12=$195$0;var $ehselector_slot_12=tempRet0}}while(0);var $ehselector_slot_12;var $exn_slot_12;if((HEAP8[$ref_tmp125]&1)==0){var $exn_slot_13=$exn_slot_12;var $ehselector_slot_13=$ehselector_slot_12;break}__ZdlPv(HEAP32[$__data__i_i496>>2]);var $exn_slot_13=$exn_slot_12;var $ehselector_slot_13=$ehselector_slot_12}else{var $192$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_13=$192$0;var $ehselector_slot_13=tempRet0}}while(0);var $ehselector_slot_13;var $exn_slot_13;if((HEAP8[$__size__i50_i468]&1)==0){var $exn_slot_18=$exn_slot_13;var $ehselector_slot_18=$ehselector_slot_13;break L1}__ZdlPv(HEAP32[$ref_tmp123+8>>2]);var $exn_slot_18=$exn_slot_13;var $ehselector_slot_18=$ehselector_slot_13;break L1}else{var $178$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_10=$178$0;var $ehselector_slot_10=tempRet0}}while(0);var $ehselector_slot_10;var $exn_slot_10;if((HEAP8[$ref_tmp106]&1)==0){var $exn_slot_11=$exn_slot_10;var $ehselector_slot_11=$ehselector_slot_10;break}__ZdlPv(HEAP32[$__data__i_i423>>2]);var $exn_slot_11=$exn_slot_10;var $ehselector_slot_11=$ehselector_slot_10}else{var $175$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_11=$175$0;var $ehselector_slot_11=tempRet0}}while(0);var $ehselector_slot_11;var $exn_slot_11;if((HEAP8[$__size__i50_i395]&1)==0){var $exn_slot_18=$exn_slot_11;var $ehselector_slot_18=$ehselector_slot_11;break L1}__ZdlPv(HEAP32[$ref_tmp104+8>>2]);var $exn_slot_18=$exn_slot_11;var $ehselector_slot_18=$ehselector_slot_11;break L1}else{var $161$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_8=$161$0;var $ehselector_slot_8=tempRet0}}while(0);var $ehselector_slot_8;var $exn_slot_8;if((HEAP8[$ref_tmp87]&1)==0){var $exn_slot_9=$exn_slot_8;var $ehselector_slot_9=$ehselector_slot_8;break}__ZdlPv(HEAP32[$__data__i_i350>>2]);var $exn_slot_9=$exn_slot_8;var $ehselector_slot_9=$ehselector_slot_8}else{var $158$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_9=$158$0;var $ehselector_slot_9=tempRet0}}while(0);var $ehselector_slot_9;var $exn_slot_9;if((HEAP8[$__size__i50_i322]&1)==0){var $exn_slot_18=$exn_slot_9;var $ehselector_slot_18=$ehselector_slot_9;break L1}__ZdlPv(HEAP32[$ref_tmp85+8>>2]);var $exn_slot_18=$exn_slot_9;var $ehselector_slot_18=$ehselector_slot_9;break L1}else{var $144$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$144$0;var $ehselector_slot_6=tempRet0}}while(0);var $ehselector_slot_6;var $exn_slot_6;if((HEAP8[$ref_tmp68]&1)==0){var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6;break}__ZdlPv(HEAP32[$__data__i_i277>>2]);var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6}else{var $141$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_7=$141$0;var $ehselector_slot_7=tempRet0}}while(0);var $ehselector_slot_7;var $exn_slot_7;if((HEAP8[$__size__i50_i249]&1)==0){var $exn_slot_18=$exn_slot_7;var $ehselector_slot_18=$ehselector_slot_7;break L1}__ZdlPv(HEAP32[$ref_tmp66+8>>2]);var $exn_slot_18=$exn_slot_7;var $ehselector_slot_18=$ehselector_slot_7;break L1}else{var $127$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$127$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp49]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i204>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $124$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$124$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$__size__i50_i176]&1)==0){var $exn_slot_18=$exn_slot_5;var $ehselector_slot_18=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$ref_tmp47+8>>2]);var $exn_slot_18=$exn_slot_5;var $ehselector_slot_18=$ehselector_slot_5;break L1}else{var $110$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$110$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp30]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i131>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $107$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$107$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$__size__i50_i103]&1)==0){var $exn_slot_18=$exn_slot_3;var $ehselector_slot_18=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$ref_tmp28+8>>2]);var $exn_slot_18=$exn_slot_3;var $ehselector_slot_18=$ehselector_slot_3;break L1}else{var $93$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$93$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp13]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i72>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $90$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$90$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$__size__i50_i44]&1)==0){var $exn_slot_18=$exn_slot_1;var $ehselector_slot_18=$ehselector_slot_1;break}__ZdlPv(HEAP32[$ref_tmp11+8>>2]);var $exn_slot_18=$exn_slot_1;var $ehselector_slot_18=$ehselector_slot_1}else{label=107}}while(0);if(label==107){var $82$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_18=$82$0;var $ehselector_slot_18=tempRet0}var $ehselector_slot_18;var $exn_slot_18;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_18)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre20ColourFaderAffector216_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;__ZN4Ogre14ParticleSystem12_getIteratorEv(r5,r2);r2=HEAPF32[r1+36>>2]*r3;r6=HEAPF32[r1+44>>2]*r3;r7=HEAPF32[r1+52>>2]*r3;r8=HEAPF32[r1+60>>2]*r3;r9=HEAPF32[r1+40>>2]*r3;r10=HEAPF32[r1+48>>2]*r3;r11=HEAPF32[r1+56>>2]*r3;r12=HEAPF32[r1+64>>2]*r3;if(__ZN4Ogre16ParticleIterator3endEv(r5)){STACKTOP=r4;return}r3=r1+68|0;while(1){r1=__ZN4Ogre16ParticleIterator7getNextEv(r5);r13=r1+48|0;r14=HEAPF32[r13>>2];do{if(HEAPF32[r1+64>>2]>HEAPF32[r3>>2]){r15=r2+r14;HEAPF32[r13>>2]=r15;do{if(r15<0){HEAPF32[r13>>2]=0}else{if(r15<=1){break}HEAPF32[r13>>2]=1}}while(0);r15=r1+52|0;r16=r6+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;do{if(r16<0){HEAPF32[r15>>2]=0}else{if(r16<=1){break}HEAPF32[r15>>2]=1}}while(0);r15=r1+56|0;r16=r7+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;do{if(r16<0){HEAPF32[r15>>2]=0}else{if(r16<=1){break}HEAPF32[r15>>2]=1}}while(0);r15=r1+60|0;r16=r8+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;if(r16<0){HEAPF32[r15>>2]=0;break}if(r16<=1){break}HEAPF32[r15>>2]=1}else{r15=r9+r14;HEAPF32[r13>>2]=r15;do{if(r15<0){HEAPF32[r13>>2]=0}else{if(r15<=1){break}HEAPF32[r13>>2]=1}}while(0);r15=r1+52|0;r16=r10+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;do{if(r16<0){HEAPF32[r15>>2]=0}else{if(r16<=1){break}HEAPF32[r15>>2]=1}}while(0);r15=r1+56|0;r16=r11+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;do{if(r16<0){HEAPF32[r15>>2]=0}else{if(r16<=1){break}HEAPF32[r15>>2]=1}}while(0);r15=r1+60|0;r16=r12+HEAPF32[r15>>2];HEAPF32[r15>>2]=r16;if(r16<0){HEAPF32[r15>>2]=0;break}if(r16<=1){break}HEAPF32[r15>>2]=1}}while(0);if(__ZN4Ogre16ParticleIterator3endEv(r5)){break}}STACKTOP=r4;return}function __ZN4Ogre20ColourFaderAffector210setAdjust1Effff(r1,r2,r3,r4,r5){HEAPF32[r1+36>>2]=r2;HEAPF32[r1+44>>2]=r3;HEAPF32[r1+52>>2]=r4;HEAPF32[r1+60>>2]=r5;return}function __ZN4Ogre20ColourFaderAffector210setAdjust2Effff(r1,r2,r3,r4,r5){HEAPF32[r1+40>>2]=r2;HEAPF32[r1+48>>2]=r3;HEAPF32[r1+56>>2]=r4;HEAPF32[r1+64>>2]=r5;return}function __ZN4Ogre20ColourFaderAffector213setRedAdjust1Ef(r1,r2){HEAPF32[r1+36>>2]=r2;return}function __ZN4Ogre20ColourFaderAffector213setRedAdjust2Ef(r1,r2){HEAPF32[r1+40>>2]=r2;return}function __ZNK4Ogre20ColourFaderAffector213getRedAdjust1Ev(r1){return HEAPF32[r1+36>>2]}function __ZNK4Ogre20ColourFaderAffector213getRedAdjust2Ev(r1){return HEAPF32[r1+40>>2]}function __ZN4Ogre20ColourFaderAffector215setGreenAdjust1Ef(r1,r2){HEAPF32[r1+44>>2]=r2;return}function __ZN4Ogre20ColourFaderAffector215setGreenAdjust2Ef(r1,r2){HEAPF32[r1+48>>2]=r2;return}function __ZNK4Ogre20ColourFaderAffector215getGreenAdjust1Ev(r1){return HEAPF32[r1+44>>2]}function __ZNK4Ogre20ColourFaderAffector215getGreenAdjust2Ev(r1){return HEAPF32[r1+48>>2]}function __ZN4Ogre20ColourFaderAffector214setBlueAdjust1Ef(r1,r2){HEAPF32[r1+52>>2]=r2;return}function __ZN4Ogre20ColourFaderAffector214setBlueAdjust2Ef(r1,r2){HEAPF32[r1+56>>2]=r2;return}function __ZNK4Ogre20ColourFaderAffector214getBlueAdjust1Ev(r1){return HEAPF32[r1+52>>2]}function __ZNK4Ogre20ColourFaderAffector214getBlueAdjust2Ev(r1){return HEAPF32[r1+56>>2]}function __ZN4Ogre20ColourFaderAffector215setAlphaAdjust1Ef(r1,r2){HEAPF32[r1+60>>2]=r2;return}function __ZN4Ogre20ColourFaderAffector215setAlphaAdjust2Ef(r1,r2){HEAPF32[r1+64>>2]=r2;return}function __ZNK4Ogre20ColourFaderAffector215getAlphaAdjust1Ev(r1){return HEAPF32[r1+60>>2]}function __ZNK4Ogre20ColourFaderAffector215getAlphaAdjust2Ev(r1){return HEAPF32[r1+64>>2]}function __ZN4Ogre20ColourFaderAffector214setStateChangeEf(r1,r2){HEAPF32[r1+68>>2]=r2;return}function __ZNK4Ogre20ColourFaderAffector214getStateChangeEv(r1){return HEAPF32[r1+68>>2]}function __ZNK4Ogre20ColourFaderAffector213CmdRedAdjust15doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+36>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+36>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector213CmdRedAdjust25doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+40>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+40>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust15doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+44>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+44>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust25doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+48>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+48>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust15doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+52>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+52>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust25doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+56>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+56>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust15doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+60>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+60>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust25doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+64>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+64>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre20ColourFaderAffector214CmdStateChange5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+68>>2],6,0,32,0);return}function __ZN4Ogre20ColourFaderAffector214CmdStateChange5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+68>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector214CmdStateChangeD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre20ColourFaderAffector2D1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre20ColourFaderAffector2D0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19ColourImageAffector14CmdImageAdjustD1Ev(r1){return}function __ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+104|0;var $__parent_i=sp;var $temp_lvalue_i=sp+8;var $ref_tmp=sp+24;var $ref_tmp14=sp+40;var $ref_tmp15=sp+72;var $ref_tmp17=sp+88;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre19ColourImageAffectorE+8;var $mColourImage=$this+36|0;((function(){try{__THREW__=0;return __ZN4Ogre5ImageC1Ev($mColourImage)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){HEAP8[$this+80|0]=0;var $mColourImageName=$this+84|0;var $scevgep117=$this+84|0;HEAP32[$scevgep117>>2]=0;HEAP32[$scevgep117+4>>2]=0;HEAP32[$scevgep117+8>>2]=0;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str25|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $call_i_i_i8=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=30;break}var $3=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i8;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=19;_memcpy($call_i_i_i8,__str126|0,19)|0;HEAP8[$call_i_i_i8+19|0]=0;var $call9=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($3,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $37$0=___cxa_find_matching_catch(-1,-1);var $38=$37$0;var $39=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $ehselector_slot_2=$39;var $exn_slot_2=$38;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $ehselector_slot_2=$39;var $exn_slot_2=$38;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call9){STACKTOP=sp;return}var $6=HEAP32[$this+16>>2];var $__s2_i_i21=$ref_tmp15;var $__size__i50_i22=$ref_tmp15;HEAP8[$__size__i50_i22]=10;var $arrayidx_i_i23=$__s2_i_i21+1|0;HEAP8[$arrayidx_i_i23]=HEAP8[__str227|0];HEAP8[$arrayidx_i_i23+1|0]=HEAP8[__str227+1|0];HEAP8[$arrayidx_i_i23+2|0]=HEAP8[__str227+2|0];HEAP8[$arrayidx_i_i23+3|0]=HEAP8[__str227+3|0];HEAP8[$arrayidx_i_i23+4|0]=HEAP8[__str227+4|0];HEAP8[$__s2_i_i21+6|0]=0;var $call_i_i_i59=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i50=$ref_tmp17+8|0;HEAP32[$__data__i_i50>>2]=$call_i_i_i59;HEAP32[$ref_tmp17>>2]=49;HEAP32[$ref_tmp17+4>>2]=33;_memcpy($call_i_i_i59,__str328|0,33)|0;HEAP8[$call_i_i_i59+33|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp14,$ref_tmp15,$ref_tmp17,8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $__end__i_i=$6+4|0;var $7=HEAP32[$__end__i_i>>2];do{if(($7|0)==(HEAP32[$6+8>>2]|0)){var $mParamDefs_i=$6|0;((function(){try{__THREW__=0;return __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_($mParamDefs_i,$ref_tmp14)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=16}}else{if(($7|0)==0){var $9=0}else{((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKS0_($7,$ref_tmp14)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $9=HEAP32[$__end__i_i>>2]}var $9;HEAP32[$__end__i_i>>2]=$9+28;label=16}}while(0);do{if(label==16){var $mParamCommands_i=$6+16|0;var $name_i=$ref_tmp14|0;var $call_i=__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_($mParamCommands_i,$__parent_i,$name_i);var $12=HEAP32[$call_i>>2];var $13=$12;if(($12|0)==0){((function(){try{__THREW__=0;return __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_($temp_lvalue_i,$mParamCommands_i,$name_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $__first__i_i_i28_i_i_i=$temp_lvalue_i|0;var $14=HEAP32[$__first__i_i_i28_i_i_i>>2];HEAP32[$__first__i_i_i28_i_i_i>>2]=0;var $15=HEAP32[$__parent_i>>2];var $16=$14|0;HEAP32[$14>>2]=0;HEAP32[$14+4>>2]=0;HEAP32[$14+8>>2]=$15;HEAP32[$call_i>>2]=$16;var $__begin_node__i43_i_i=$mParamCommands_i|0;var $18=HEAP32[HEAP32[$__begin_node__i43_i_i>>2]>>2];if(($18|0)==0){var $20=$16}else{HEAP32[$__begin_node__i43_i_i>>2]=$18;var $20=HEAP32[$call_i>>2]}var $20;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[$6+20>>2],$20);var $__first__i_i_i_i_i70=$6+28|0;HEAP32[$__first__i_i_i_i_i70>>2]=HEAP32[$__first__i_i_i_i_i70>>2]+1;var $__r_0_i=$14}else{var $__r_0_i=$13}var $__r_0_i;HEAP32[$__r_0_i+28>>2]=__ZN4Ogre19ColourImageAffector10msImageCmdE;if((HEAP8[$ref_tmp14+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+20>>2])}if((HEAP8[$ref_tmp14]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+8>>2])}if((HEAP8[$ref_tmp17]&1)!=0){__ZdlPv(HEAP32[$__data__i_i50>>2])}if((HEAP8[$__size__i50_i22]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp15+8>>2]);STACKTOP=sp;return}}while(0);var $48$0=___cxa_find_matching_catch(-1,-1);var $49=$48$0;var $50=tempRet0;if((HEAP8[$ref_tmp14+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+20>>2])}if((HEAP8[$ref_tmp14]&1)==0){var $ehselector_slot_0=$50;var $exn_slot_0=$49;break}__ZdlPv(HEAP32[$ref_tmp14+8>>2]);var $ehselector_slot_0=$50;var $exn_slot_0=$49}else{var $45$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$45$0}}while(0);var $exn_slot_0;var $ehselector_slot_0;if((HEAP8[$ref_tmp17]&1)==0){var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0;break}__ZdlPv(HEAP32[$__data__i_i50>>2]);var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0}else{var $42$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_1=tempRet0;var $exn_slot_1=$42$0}}while(0);var $exn_slot_1;var $ehselector_slot_1;if((HEAP8[$__size__i50_i22]&1)==0){var $ehselector_slot_2=$ehselector_slot_1;var $exn_slot_2=$exn_slot_1;break}__ZdlPv(HEAP32[$ref_tmp15+8>>2]);var $ehselector_slot_2=$ehselector_slot_1;var $exn_slot_2=$exn_slot_1}else{label=30}}while(0);if(label==30){var $34$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_2=tempRet0;var $exn_slot_2=$34$0}var $exn_slot_2;var $ehselector_slot_2;if((HEAP8[$mColourImageName]&1)!=0){__ZdlPv(HEAP32[$this+92>>2])}((function(){try{__THREW__=0;return __ZN4Ogre5ImageD1Ev($mColourImage)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_3=$ehselector_slot_2;var $exn_slot_3=$exn_slot_2;break}var $61$0=___cxa_find_matching_catch(-1,-1,0);var $61$1=tempRet0;__ZSt9terminatev()}else{var $31$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_3=tempRet0;var $exn_slot_3=$31$0}}while(0);var $exn_slot_3;var $ehselector_slot_3;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_3)}else{var $61$0=___cxa_find_matching_catch(-1,-1,0);var $61$1=tempRet0;__ZSt9terminatev()}}function __ZN4Ogre19ColourImageAffector13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4;r3=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r3;if((HEAP8[r1+80|0]&1)==0){__ZN4Ogre19ColourImageAffector10_loadImageEv(r1)}__ZNK4Ogre5Image11getColourAtEjjj(r4,r1+36|0,0,0,0);r1=r2+48|0;r2=r4;HEAP32[r1>>2]=HEAP32[r2>>2];HEAP32[r1+4>>2]=HEAP32[r2+4>>2];HEAP32[r1+8>>2]=HEAP32[r2+8>>2];HEAP32[r1+12>>2]=HEAP32[r2+12>>2];STACKTOP=r3;return}function __ZN4Ogre19ColourImageAffector10_loadImageEv($this){var sp=STACKTOP;STACKTOP=STACKTOP+32|0;var $ref_tmp=sp;var $ref_tmp6=sp+16;var $mColourImage=$this+36|0;var $0=HEAP32[$this+32>>2];__ZN4Ogre5Image4loadERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_($mColourImage,$this+84|0,FUNCTION_TABLE[HEAP32[HEAP32[$0>>2]+96>>2]]($0));if(__ZN4Ogre9PixelUtil12isAccessibleENS_11PixelFormatE(__ZNK4Ogre5Image9getFormatEv($mColourImage))){HEAP8[$this+80|0]=1;STACKTOP=sp;return}var $exception=___cxa_allocate_exception(72);var $call_i_i_i4=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i4;HEAP32[$ref_tmp>>2]=49;HEAP32[$ref_tmp+4>>2]=44;_memcpy($call_i_i_i4,__str429|0,44)|0;HEAP8[$call_i_i_i4+44|0]=0;var $call_i_i_i26=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i17=$ref_tmp6+8|0;HEAP32[$__data__i_i17>>2]=$call_i_i_i26;HEAP32[$ref_tmp6>>2]=33;HEAP32[$ref_tmp6+4>>2]=31;_memcpy($call_i_i_i26,__str530|0,31)|0;HEAP8[$call_i_i_i26+31|0]=0;var $3=$exception;((function(){try{__THREW__=0;return __ZN4Ogre9ExceptionC2EiRKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_PKcSB_l($3,2,$ref_tmp,$ref_tmp6,__str933|0,__str631|0,134)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){HEAP32[$exception>>2]=__ZTVN4Ogre26InvalidParametersExceptionE+8;((function(){try{__THREW__=0;return ___cxa_throw($exception,__ZTIN4Ogre26InvalidParametersExceptionE,FUNCTION_TABLE_OFFSET+236)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $cleanup_isactive_0=0;break}}else{var $cleanup_isactive_0=1}}while(0);var $cleanup_isactive_0;var $11$0=___cxa_find_matching_catch(-1,-1);var $12=$11$0;var $13=tempRet0;if((HEAP8[$ref_tmp6]&1)==0){var $cleanup_isactive_1=$cleanup_isactive_0;var $ehselector_slot_0=$13;var $exn_slot_0=$12;break}__ZdlPv(HEAP32[$__data__i_i17>>2]);var $cleanup_isactive_1=$cleanup_isactive_0;var $ehselector_slot_0=$13;var $exn_slot_0=$12}else{var $8$0=___cxa_find_matching_catch(-1,-1);var $cleanup_isactive_1=1;var $ehselector_slot_0=tempRet0;var $exn_slot_0=$8$0}}while(0);var $exn_slot_0;var $ehselector_slot_0;var $cleanup_isactive_1;if((HEAP8[$ref_tmp]&1)==0){if($cleanup_isactive_1){var $exn_slot_139=$exn_slot_0;var $ehselector_slot_141=$ehselector_slot_0;break}else{var $exn_slot_138=$exn_slot_0;var $ehselector_slot_140=$ehselector_slot_0}var $ehselector_slot_140;var $exn_slot_138;var $lpad_val$0=$exn_slot_138;var $lpad_val$1=0;var $lpad_val16$0=$lpad_val$0;var $lpad_val16$1=$ehselector_slot_140;___resumeException($lpad_val16$0)}else{__ZdlPv(HEAP32[$__data__i_i>>2]);if($cleanup_isactive_1){var $exn_slot_139=$exn_slot_0;var $ehselector_slot_141=$ehselector_slot_0;break}else{var $exn_slot_138=$exn_slot_0;var $ehselector_slot_140=$ehselector_slot_0}var $ehselector_slot_140;var $exn_slot_138;var $lpad_val$0=$exn_slot_138;var $lpad_val$1=0;var $lpad_val16$0=$lpad_val$0;var $lpad_val16$1=$ehselector_slot_140;___resumeException($lpad_val16$0)}}else{var $5$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_139=$5$0;var $ehselector_slot_141=tempRet0}}while(0);var $ehselector_slot_141;var $exn_slot_139;___cxa_free_exception($exception);var $exn_slot_138=$exn_slot_139;var $ehselector_slot_140=$ehselector_slot_141;var $ehselector_slot_140;var $exn_slot_138;var $lpad_val$0=$exn_slot_138;var $lpad_val$1=0;var $lpad_val16$0=$lpad_val$0;var $lpad_val16$1=$ehselector_slot_140;___resumeException($lpad_val16$0)}function __ZN4Ogre19ColourImageAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24;r3=STACKTOP;STACKTOP=STACKTOP+80|0;r4=r3;r5=r3+16;r6=r3+32;r7=r3+48;r8=r3+64;__ZN4Ogre14ParticleSystem12_getIteratorEv(r4,r2);if((HEAP8[r1+80|0]&1)==0){__ZN4Ogre19ColourImageAffector10_loadImageEv(r1)}r2=r1+36|0;r1=__ZNK4Ogre5Image8getWidthEv(r2)-1|0;if(__ZN4Ogre16ParticleIterator3endEv(r4)){STACKTOP=r3;return}r9=r1|0;r10=r5;r11=r7|0;r12=r8|0;r13=r7+4|0;r14=r8+4|0;r15=r7+8|0;r16=r8+8|0;r17=r7+12|0;r18=r8+12|0;r19=r6;while(1){r20=__ZN4Ogre16ParticleIterator7getNextEv(r4);r21=1-HEAPF32[r20+64>>2]/HEAPF32[r20+68>>2];r22=r21>1?1:r21;r21=r9*(r22<0?0:r22);r22=r21&-1;do{if((r22|0)<0){__ZNK4Ogre5Image11getColourAtEjjj(r5,r2,0,0,0);r23=r20+48|0;HEAP32[r23>>2]=HEAP32[r10>>2];HEAP32[r23+4>>2]=HEAP32[r10+4>>2];HEAP32[r23+8>>2]=HEAP32[r10+8>>2];HEAP32[r23+12>>2]=HEAP32[r10+12>>2]}else{if((r22|0)<(r1|0)){r23=r21-(r22|0);r24=1-r23;__ZNK4Ogre5Image11getColourAtEjjj(r7,r2,r22,0,0);__ZNK4Ogre5Image11getColourAtEjjj(r8,r2,r22+1|0,0,0);HEAPF32[r20+48>>2]=r24*HEAPF32[r11>>2]+r23*HEAPF32[r12>>2];HEAPF32[r20+52>>2]=r24*HEAPF32[r13>>2]+r23*HEAPF32[r14>>2];HEAPF32[r20+56>>2]=r24*HEAPF32[r15>>2]+r23*HEAPF32[r16>>2];HEAPF32[r20+60>>2]=r24*HEAPF32[r17>>2]+r23*HEAPF32[r18>>2];break}else{__ZNK4Ogre5Image11getColourAtEjjj(r6,r2,r1,0,0);r23=r20+48|0;HEAP32[r23>>2]=HEAP32[r19>>2];HEAP32[r23+4>>2]=HEAP32[r19+4>>2];HEAP32[r23+8>>2]=HEAP32[r19+8>>2];HEAP32[r23+12>>2]=HEAP32[r19+12>>2];break}}}while(0);if(__ZN4Ogre16ParticleIterator3endEv(r4)){break}}STACKTOP=r3;return}function __ZN4Ogre19ColourImageAffector14setImageAdjustENSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(r1,r2){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(r1+84|0,r2);HEAP8[r1+80|0]=0;return}function __ZN4Ogre26InvalidParametersExceptionD1Ev(r1){__ZN4Ogre9ExceptionD2Ev(r1|0);return}function __ZNK4Ogre19ColourImageAffector14getImageAdjustEv(r1,r2){var r3,r4,r5,r6;r3=r2+84|0;if((HEAP8[r3]&1)==0){r4=r1;HEAP32[r4>>2]=HEAP32[r3>>2];HEAP32[r4+4>>2]=HEAP32[r3+4>>2];HEAP32[r4+8>>2]=HEAP32[r3+8>>2];return}r3=HEAP32[r2+92>>2];r4=HEAP32[r2+88>>2];if(r4>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r4>>>0<11){HEAP8[r1]=r4<<1;r5=r1+1|0}else{r2=r4+16&-16;r6=__Znwj(r2);HEAP32[r1+8>>2]=r6;HEAP32[r1>>2]=r2|1;HEAP32[r1+4>>2]=r4;r5=r6}_memcpy(r5,r3,r4)|0;HEAP8[r5+r4|0]=0;return}function __ZNK4Ogre19ColourImageAffector14CmdImageAdjust5doGetEPKv(r1,r2,r3){var r4,r5,r6;r2=r3+84|0;if((HEAP8[r2]&1)==0){r4=r1;HEAP32[r4>>2]=HEAP32[r2>>2];HEAP32[r4+4>>2]=HEAP32[r2+4>>2];HEAP32[r4+8>>2]=HEAP32[r2+8>>2];return}r2=HEAP32[r3+92>>2];r4=HEAP32[r3+88>>2];if(r4>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r4>>>0<11){HEAP8[r1]=r4<<1;r5=r1+1|0}else{r3=r4+16&-16;r6=__Znwj(r3);HEAP32[r1+8>>2]=r6;HEAP32[r1>>2]=r3|1;HEAP32[r1+4>>2]=r4;r5=r6}_memcpy(r5,r2,r4)|0;HEAP8[r5+r4|0]=0;return}function __ZN4Ogre19ColourImageAffector14CmdImageAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE($this,$target,$val){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $agg_tmp=sp;var $__size__i44_i_i=$val;if((HEAP8[$__size__i44_i_i]&1)==0){var $1=$agg_tmp;HEAP32[$1>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$1+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$1+8>>2]=HEAP32[$__size__i44_i_i+8>>2]}else{var $2=HEAP32[$val+8>>2];var $3=HEAP32[$val+4>>2];if($3>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if($3>>>0<11){HEAP8[$agg_tmp]=$3<<1;var $__p_0_i_i_i=$agg_tmp+1|0}else{var $and_i_i_i_i_i=$3+16&-16;var $call_i_i_i_i_i=__Znwj($and_i_i_i_i_i);HEAP32[$agg_tmp+8>>2]=$call_i_i_i_i_i;HEAP32[$agg_tmp>>2]=$and_i_i_i_i_i|1;HEAP32[$agg_tmp+4>>2]=$3;var $__p_0_i_i_i=$call_i_i_i_i_i}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$2,$3)|0;HEAP8[$__p_0_i_i_i+$3|0]=0}var $4=$target+84|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($4,$agg_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP8[$target+80|0]=0;if((HEAP8[$agg_tmp]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$agg_tmp+8>>2]);STACKTOP=sp;return}else{var $8$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$agg_tmp]&1)==0){___resumeException($8$0)}__ZdlPv(HEAP32[$agg_tmp+8>>2]);___resumeException($8$0)}}function __ZN4Ogre19ColourImageAffector14CmdImageAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19ColourImageAffectorD1Ev($this){HEAP32[$this>>2]=__ZTVN4Ogre19ColourImageAffectorE+8;if((HEAP8[$this+84|0]&1)!=0){__ZdlPv(HEAP32[$this+92>>2])}var $mColourImage_i=$this+36|0;((function(){try{__THREW__=0;return __ZN4Ogre5ImageD1Ev($mColourImage_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre16ParticleAffectorD2Ev($this|0);return}var $3$0=___cxa_find_matching_catch(-1,-1);var $4=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($4)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($3$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19ColourImageAffectorD0Ev($this){HEAP32[$this>>2]=__ZTVN4Ogre19ColourImageAffectorE+8;if((HEAP8[$this+84|0]&1)!=0){__ZdlPv(HEAP32[$this+92>>2])}var $mColourImage_i_i=$this+36|0;((function(){try{__THREW__=0;return __ZN4Ogre5ImageD1Ev($mColourImage_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $6=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}else{var $8$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$8$0;break}}else{var $3$0=___cxa_find_matching_catch(-1,-1);var $3$1=tempRet0;var $4=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($4)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$3$1;var $eh_lpad_body$0=$3$0;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}while(0);var $eh_lpad_body$0;var $eh_lpad_body$1;var $9=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($eh_lpad_body$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre9ExceptionD2Ev(r1){HEAP32[r1>>2]=__ZTVN4Ogre9ExceptionE+8;if((HEAP8[r1+60|0]&1)!=0){__ZdlPv(HEAP32[r1+68>>2])}if((HEAP8[r1+48|0]&1)!=0){__ZdlPv(HEAP32[r1+56>>2])}if((HEAP8[r1+36|0]&1)!=0){__ZdlPv(HEAP32[r1+44>>2])}if((HEAP8[r1+24|0]&1)!=0){__ZdlPv(HEAP32[r1+32>>2])}if((HEAP8[r1+12|0]&1)==0){return}__ZdlPv(HEAP32[r1+20>>2]);return}function __ZN4Ogre26InvalidParametersExceptionD0Ev(r1){__ZN4Ogre9ExceptionD2Ev(r1|0);__ZdlPv(r1);return}function __ZNK4Ogre9Exception4whatEv($this){var $1=HEAP32[HEAP32[$this>>2]+12>>2];var $call=(function(){try{__THREW__=0;return FUNCTION_TABLE[$1]($this)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $4$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($4$0)}if((HEAP8[$call]&1)==0){var $cond_i_i_i=$call+1|0;var $cond_i_i_i;return $cond_i_i_i}else{var $cond_i_i_i=HEAP32[$call+8>>2];var $cond_i_i_i;return $cond_i_i_i}}function __ZNK4Ogre9Exception9getSourceEv(r1){return r1+36|0}function __ZNK4Ogre9Exception7getFileEv(r1){return r1+48|0}function __ZNK4Ogre9Exception7getLineEv(r1){return HEAP32[r1+4>>2]}function __ZNK4Ogre9Exception14getDescriptionEv(r1){return r1+24|0}function ___cxx_global_array_dtor(r1){return}function __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD1Ev(r1){return}function ___cxx_global_array_dtor2(r1){return}function __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD1Ev(r1){return}function __ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+496|0;var $ref_tmp_i_i_i=sp;var $ref_tmp6=sp+16;var $stage=sp+32;var $colour_title=sp+176;var $ref_tmp26=sp+192;var $ref_tmp28=sp+208;var $time_title=sp+224;var $ref_tmp37=sp+240;var $ref_tmp40=sp+256;var $colour_descr=sp+272;var $ref_tmp51=sp+288;var $ref_tmp52=sp+304;var $ref_tmp55=sp+320;var $ref_tmp60=sp+336;var $time_descr=sp+352;var $ref_tmp77=sp+368;var $ref_tmp78=sp+384;var $ref_tmp81=sp+400;var $ref_tmp86=sp+416;var $ref_tmp103=sp+432;var $ref_tmp112=sp+464;var $1=$this+4|0;HEAP32[$1>>2]=0;HEAP32[$1+4>>2]=0;HEAP32[$1+8>>2]=0;HEAP32[$1+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre26ColourInterpolatorAffectorE+8;var $__size__i_i_i42=$ref_tmp_i_i_i;var $2=$this|0;HEAPF32[$this+36>>2]=.5;HEAPF32[$this+40>>2]=.5;HEAPF32[$this+44>>2]=.5;HEAPF32[$this+48>>2]=0;HEAPF32[$this+132>>2]=1;HEAPF32[$this+52>>2]=.5;HEAPF32[$this+56>>2]=.5;HEAPF32[$this+60>>2]=.5;HEAPF32[$this+64>>2]=0;HEAPF32[$this+136>>2]=1;HEAPF32[$this+68>>2]=.5;HEAPF32[$this+72>>2]=.5;HEAPF32[$this+76>>2]=.5;HEAPF32[$this+80>>2]=0;HEAPF32[$this+140>>2]=1;HEAPF32[$this+84>>2]=.5;HEAPF32[$this+88>>2]=.5;HEAPF32[$this+92>>2]=.5;HEAPF32[$this+96>>2]=0;HEAPF32[$this+144>>2]=1;HEAPF32[$this+100>>2]=.5;HEAPF32[$this+104>>2]=.5;HEAPF32[$this+108>>2]=.5;HEAPF32[$this+112>>2]=0;HEAPF32[$this+148>>2]=1;HEAPF32[$this+116>>2]=.5;HEAPF32[$this+120>>2]=.5;HEAPF32[$this+124>>2]=.5;HEAPF32[$this+128>>2]=0;HEAPF32[$this+152>>2]=1;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str36|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){var $call_i_i_i34=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=3;break}var $5=$this|0;var $__data__i_i=$ref_tmp6+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i34;HEAP32[$ref_tmp6>>2]=33;HEAP32[$ref_tmp6+4>>2]=26;_memcpy($call_i_i_i34,__str337|0,26)|0;HEAP8[$call_i_i_i34+26|0]=0;var $call10=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($5,$ref_tmp6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $87$0=___cxa_find_matching_catch(-1,-1);var $88=$87$0;var $89=tempRet0;if((HEAP8[$ref_tmp6]&1)==0){var $ehselector_slot_13=$89;var $exn_slot_13=$88;label=144;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $ehselector_slot_13=$89;var $exn_slot_13=$88;label=144;break}if((HEAP8[$ref_tmp6]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call10){STACKTOP=sp;return}var $8=HEAP32[$this+16>>2];var $9=$stage+64|0;var $10=$9|0;var $11=$stage|0;var $add_ptr2_i=$stage+8|0;var $12=$add_ptr2_i|0;var $__sb__i=$stage+12|0;var $13=$stage+64|0;var $14=$stage+4|0;var $15=$__sb__i;var $16=$stage+8|0;var $17=$__sb__i|0;var $__loc__i=$stage+16|0;var $18=$stage+20|0;var $__mode__i_i_i=$stage+60|0;var $19=$add_ptr2_i;var $__s2_i_i63=$ref_tmp26;var $__size__i50_i64=$ref_tmp26;var $arrayidx_i_i65=$__s2_i_i63+1|0;var $arrayidx_i75=$__s2_i_i63+7|0;var $__size__i_i_i80=$ref_tmp28;var $__s2_i_i98=$ref_tmp37;var $__size__i50_i99=$ref_tmp37;var $20=$__s2_i_i98+1|0;var $arrayidx_i110=$__s2_i_i98+5|0;var $__size__i_i_i115=$ref_tmp40;var $__s2_i_i133=$ref_tmp52;var $__size__i50_i134=$ref_tmp52;var $arrayidx_i_i135=$__s2_i_i133+1|0;var $arrayidx_i145=$__s2_i_i133+7|0;var $__s2_i_i156=$ref_tmp60;var $__size__i50_i157=$ref_tmp60;var $21=$__s2_i_i156+1|0;var $arrayidx_i168=$__s2_i_i156+9|0;var $__size__i_i_i179=$ref_tmp51;var $__size__i_i_i185=$ref_tmp55;var $__s2_i_i203=$ref_tmp78;var $__size__i50_i204=$ref_tmp78;var $arrayidx_i_i205=$__s2_i_i203+1|0;var $arrayidx_i215=$__s2_i_i203+7|0;var $__s2_i_i226=$ref_tmp86;var $__size__i50_i227=$ref_tmp86;var $arrayidx_i_i228=$__s2_i_i226+1|0;var $arrayidx_i238=$__s2_i_i226+7|0;var $__size__i_i_i249=$ref_tmp77;var $__size__i_i_i255=$ref_tmp81;var $__size__i_i_i_i_i=$ref_tmp103+12|0;var $__size__i_i_i1_i_i=$ref_tmp103;var $__size__i_i_i_i_i271=$ref_tmp112+12|0;var $__size__i_i_i1_i_i276=$ref_tmp112;var $__size__i_i_i283=$time_descr;var $__size__i_i_i289=$colour_descr;var $__size__i_i_i295=$time_title;var $__size__i_i_i301=$colour_title;var $22=$stage+12|0;var $__size__i_i_i_i_i_i_i308=$stage+44|0;var $23=$stage+64|0;var $__data__i_i_i_i_i_i_i311=$stage+52|0;var $__data__i_i_i304=$colour_title+8|0;var $__data__i_i_i298=$time_title+8|0;var $__data__i_i_i292=$colour_descr+8|0;var $__data__i_i_i286=$time_descr+8|0;var $__data__i_i_i4_i_i280=$ref_tmp112+8|0;var $__data__i_i_i_i_i274=$ref_tmp112+20|0;var $__data__i_i_i4_i_i=$ref_tmp103+8|0;var $__data__i_i_i_i_i=$ref_tmp103+20|0;var $__data__i_i_i264=$ref_tmp78+8|0;var $__data__i_i_i258=$ref_tmp81+8|0;var $__data__i_i_i252=$ref_tmp77+8|0;var $__data__i_i_i246=$ref_tmp86+8|0;var $__data__i_i_i194=$ref_tmp52+8|0;var $__data__i_i_i188=$ref_tmp55+8|0;var $__data__i_i_i182=$ref_tmp51+8|0;var $__data__i_i_i176=$ref_tmp60+8|0;var $__data__i_i_i124=$ref_tmp37+8|0;var $__data__i_i_i118=$ref_tmp40+8|0;var $__data__i_i_i89=$ref_tmp26+8|0;var $__data__i_i_i83=$ref_tmp28+8|0;var $__data__i_i_i39=$ref_tmp_i_i_i+8|0;var $scevgep=$stage+44|0;var $i15_0588=0;while(1){var $i15_0588;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+($i15_0588<<3)+4>>2]=$i15_0588;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+($i15_0588<<3)+4>>2]=$i15_0588;HEAP32[$12>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;HEAP32[$11>>2]=__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE+12;HEAP32[$13>>2]=__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE+32;HEAP32[$14>>2]=0;var $24=$stage+64|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_base4initEPv($24,$15)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=21;break}HEAP32[$stage+136>>2]=0;HEAP32[$stage+140>>2]=-1;HEAP32[$11>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$10>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$12>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;HEAP32[$17>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;__ZNSt3__16localeC1Ev($__loc__i);HEAP32[$18>>2]=0;HEAP32[$18+4>>2]=0;HEAP32[$18+8>>2]=0;HEAP32[$18+12>>2]=0;HEAP32[$18+16>>2]=0;HEAP32[$18+20>>2]=0;HEAP32[$17>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;var $25=$scevgep;HEAP32[$25>>2]=0;HEAP32[$25+4>>2]=0;HEAP32[$25+8>>2]=0;HEAP32[$25+12>>2]=0;HEAP32[$__mode__i_i_i>>2]=24;HEAP32[$__size__i_i_i42>>2]=0;HEAP32[$__size__i_i_i42+4>>2]=0;HEAP32[$__size__i_i_i42+8>>2]=0;((function(){try{__THREW__=0;return __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE($__sb__i,$ref_tmp_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=15;break}if((HEAP8[$__size__i_i_i42]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i39>>2])}((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEi($19,$i15_0588)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=89;break}HEAP8[$__size__i50_i64]=12;HEAP8[$arrayidx_i_i65]=HEAP8[__str438|0];HEAP8[$arrayidx_i_i65+1|0]=HEAP8[__str438+1|0];HEAP8[$arrayidx_i_i65+2|0]=HEAP8[__str438+2|0];HEAP8[$arrayidx_i_i65+3|0]=HEAP8[__str438+3|0];HEAP8[$arrayidx_i_i65+4|0]=HEAP8[__str438+4|0];HEAP8[$arrayidx_i_i65+5|0]=HEAP8[__str438+5|0];HEAP8[$arrayidx_i75]=0;((function(){try{__THREW__=0;return __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv($ref_tmp28,$__sb__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=90;break}((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($colour_title,$ref_tmp26,$ref_tmp28)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=91;break}if((HEAP8[$__size__i_i_i80]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i83>>2])}if((HEAP8[$__size__i50_i64]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i89>>2])}HEAP8[$__size__i50_i99]=8;tempBigInt=1701669236;HEAP8[$20]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$20+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$20+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$20+3|0]=tempBigInt;HEAP8[$arrayidx_i110]=0;((function(){try{__THREW__=0;return __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv($ref_tmp40,$__sb__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=95;break}((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($time_title,$ref_tmp37,$ref_tmp40)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=96;break}if((HEAP8[$__size__i_i_i115]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i118>>2])}if((HEAP8[$__size__i50_i99]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i124>>2])}HEAP8[$__size__i50_i134]=12;HEAP8[$arrayidx_i_i135]=HEAP8[__str639|0];HEAP8[$arrayidx_i_i135+1|0]=HEAP8[__str639+1|0];HEAP8[$arrayidx_i_i135+2|0]=HEAP8[__str639+2|0];HEAP8[$arrayidx_i_i135+3|0]=HEAP8[__str639+3|0];HEAP8[$arrayidx_i_i135+4|0]=HEAP8[__str639+4|0];HEAP8[$arrayidx_i_i135+5|0]=HEAP8[__str639+5|0];HEAP8[$arrayidx_i145]=0;((function(){try{__THREW__=0;return __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv($ref_tmp55,$__sb__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=100;break}((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($ref_tmp51,$ref_tmp52,$ref_tmp55)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=101;break}HEAP8[$__size__i50_i157]=16;var $st$1$0=$21|0;tempBigInt=1819239200;HEAP8[$st$1$0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+3|0]=tempBigInt;var $st$2$1=$21+4|0;tempBigInt=779253103;HEAP8[$st$2$1]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+3|0]=tempBigInt;HEAP8[$arrayidx_i168]=0;((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($colour_descr,$ref_tmp51,$ref_tmp60)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=102;break}if((HEAP8[$__size__i50_i157]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i176>>2])}if((HEAP8[$__size__i_i_i179]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i182>>2])}if((HEAP8[$__size__i_i_i185]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i188>>2])}if((HEAP8[$__size__i50_i134]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i194>>2])}HEAP8[$__size__i50_i204]=12;HEAP8[$arrayidx_i_i205]=HEAP8[__str639|0];HEAP8[$arrayidx_i_i205+1|0]=HEAP8[__str639+1|0];HEAP8[$arrayidx_i_i205+2|0]=HEAP8[__str639+2|0];HEAP8[$arrayidx_i_i205+3|0]=HEAP8[__str639+3|0];HEAP8[$arrayidx_i_i205+4|0]=HEAP8[__str639+4|0];HEAP8[$arrayidx_i_i205+5|0]=HEAP8[__str639+5|0];HEAP8[$arrayidx_i215]=0;((function(){try{__THREW__=0;return __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv($ref_tmp81,$__sb__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=110;break}((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($ref_tmp77,$ref_tmp78,$ref_tmp81)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=111;break}HEAP8[$__size__i50_i227]=12;HEAP8[$arrayidx_i_i228]=HEAP8[__str840|0];HEAP8[$arrayidx_i_i228+1|0]=HEAP8[__str840+1|0];HEAP8[$arrayidx_i_i228+2|0]=HEAP8[__str840+2|0];HEAP8[$arrayidx_i_i228+3|0]=HEAP8[__str840+3|0];HEAP8[$arrayidx_i_i228+4|0]=HEAP8[__str840+4|0];HEAP8[$arrayidx_i_i228+5|0]=HEAP8[__str840+5|0];HEAP8[$arrayidx_i238]=0;((function(){try{__THREW__=0;return __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($time_descr,$ref_tmp77,$ref_tmp86)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=112;break}if((HEAP8[$__size__i50_i227]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i246>>2])}if((HEAP8[$__size__i_i_i249]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i252>>2])}if((HEAP8[$__size__i_i_i255]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i258>>2])}if((HEAP8[$__size__i50_i204]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i264>>2])}((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp103,$colour_title,$colour_descr,13)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=120;break}var $65=__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+($i15_0588<<3)|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($8,$ref_tmp103,$65)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=121;break}if((HEAP8[$__size__i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i>>2])}if((HEAP8[$__size__i_i_i1_i_i]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i4_i_i>>2])}((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp112,$time_title,$time_descr,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=120;break}var $70=__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+($i15_0588<<3)|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($8,$ref_tmp112,$70)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=125;break}if((HEAP8[$__size__i_i_i_i_i271]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i274>>2])}if((HEAP8[$__size__i_i_i1_i_i276]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i4_i_i280>>2])}if((HEAP8[$__size__i_i_i283]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i286>>2])}if((HEAP8[$__size__i_i_i289]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i292>>2])}if((HEAP8[$__size__i_i_i295]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i298>>2])}if((HEAP8[$__size__i_i_i301]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i304>>2])}HEAP32[$11>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$13>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$16>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;HEAP32[$22>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$__size__i_i_i_i_i_i_i308]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i311>>2])}HEAP32[$22>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=84;break}((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($23)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=2;break}var $inc136=$i15_0588+1|0;if(($inc136|0)<6){var $i15_0588=$inc136}else{label=148;break}}do{if(label==2){var $lpad_loopexit456$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$lpad_loopexit456$0;label=4;break L1}else if(label==84){var $85$0=___cxa_find_matching_catch(-1,-1);var $85$1=tempRet0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($23)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$85$1;var $eh_lpad_body$0=$85$0;label=4;break L1}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}else if(label==89){var $92$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_12=tempRet0;var $exn_slot_12=$92$0}else if(label==90){var $95$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$95$0;label=93}else if(label==91){var $98$0=___cxa_find_matching_catch(-1,-1);var $99=$98$0;var $100=tempRet0;if((HEAP8[$__size__i_i_i80]&1)==0){var $ehselector_slot_0=$100;var $exn_slot_0=$99;label=93;break}__ZdlPv(HEAP32[$__data__i_i_i83>>2]);var $ehselector_slot_0=$100;var $exn_slot_0=$99;label=93}else if(label==95){var $105$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_1=tempRet0;var $exn_slot_1=$105$0;label=98}else if(label==96){var $108$0=___cxa_find_matching_catch(-1,-1);var $109=$108$0;var $110=tempRet0;if((HEAP8[$__size__i_i_i115]&1)==0){var $ehselector_slot_1=$110;var $exn_slot_1=$109;label=98;break}__ZdlPv(HEAP32[$__data__i_i_i118>>2]);var $ehselector_slot_1=$110;var $exn_slot_1=$109;label=98}else if(label==100){var $115$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_4=tempRet0;var $exn_slot_4=$115$0;label=108}else if(label==101){var $118$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_3=tempRet0;var $exn_slot_3=$118$0;label=106}else if(label==102){var $121$0=___cxa_find_matching_catch(-1,-1);var $122=$121$0;var $123=tempRet0;if((HEAP8[$__size__i50_i157]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i176>>2])}if((HEAP8[$__size__i_i_i179]&1)==0){var $ehselector_slot_3=$123;var $exn_slot_3=$122;label=106;break}__ZdlPv(HEAP32[$__data__i_i_i182>>2]);var $ehselector_slot_3=$123;var $exn_slot_3=$122;label=106}else if(label==21){var $36$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_i_0=$36$0;var $ehselector_slot_i_0=tempRet0;label=22}else if(label==110){var $132$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_7=tempRet0;var $exn_slot_7=$132$0;label=118}else if(label==111){var $135$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_6=tempRet0;var $exn_slot_6=$135$0;label=116}else if(label==112){var $138$0=___cxa_find_matching_catch(-1,-1);var $139=$138$0;var $140=tempRet0;if((HEAP8[$__size__i50_i227]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i246>>2])}if((HEAP8[$__size__i_i_i249]&1)==0){var $ehselector_slot_6=$140;var $exn_slot_6=$139;label=116;break}__ZdlPv(HEAP32[$__data__i_i_i252>>2]);var $ehselector_slot_6=$140;var $exn_slot_6=$139;label=116}else if(label==120){var $149$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_8=tempRet0;var $exn_slot_8=$149$0;label=129}else if(label==121){var $152$0=___cxa_find_matching_catch(-1,-1);var $153=$152$0;var $154=tempRet0;if((HEAP8[$__size__i_i_i_i_i]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i>>2])}if((HEAP8[$__size__i_i_i1_i_i]&1)==0){var $ehselector_slot_8=$154;var $exn_slot_8=$153;label=129;break}__ZdlPv(HEAP32[$__data__i_i_i4_i_i>>2]);var $ehselector_slot_8=$154;var $exn_slot_8=$153;label=129}else if(label==125){var $159$0=___cxa_find_matching_catch(-1,-1);var $160=$159$0;var $161=tempRet0;if((HEAP8[$__size__i_i_i_i_i271]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i274>>2])}if((HEAP8[$__size__i_i_i1_i_i276]&1)==0){var $ehselector_slot_8=$161;var $exn_slot_8=$160;label=129;break}__ZdlPv(HEAP32[$__data__i_i_i4_i_i280>>2]);var $ehselector_slot_8=$161;var $exn_slot_8=$160;label=129}else if(label==15){var $28$0=___cxa_find_matching_catch(-1,-1);var $29=$28$0;var $30=tempRet0;if((HEAP8[$__size__i_i_i42]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i39>>2])}if((HEAP8[$__size__i_i_i_i_i_i_i308]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i311>>2])}HEAP32[$17>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_i_0=$29;var $ehselector_slot_i_0=$30;label=22;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}else if(label==148){STACKTOP=sp;return}}while(0);do{if(label==93){var $exn_slot_0;var $ehselector_slot_0;if((HEAP8[$__size__i50_i64]&1)==0){var $ehselector_slot_12=$ehselector_slot_0;var $exn_slot_12=$exn_slot_0;break}__ZdlPv(HEAP32[$__data__i_i_i89>>2]);var $ehselector_slot_12=$ehselector_slot_0;var $exn_slot_12=$exn_slot_0}else if(label==98){var $exn_slot_1;var $ehselector_slot_1;if((HEAP8[$__size__i50_i99]&1)==0){var $ehselector_slot_11=$ehselector_slot_1;var $exn_slot_11=$exn_slot_1;label=135;break}__ZdlPv(HEAP32[$__data__i_i_i124>>2]);var $ehselector_slot_11=$ehselector_slot_1;var $exn_slot_11=$exn_slot_1;label=135}else if(label==106){var $exn_slot_3;var $ehselector_slot_3;if((HEAP8[$__size__i_i_i185]&1)==0){var $ehselector_slot_4=$ehselector_slot_3;var $exn_slot_4=$exn_slot_3;label=108;break}__ZdlPv(HEAP32[$__data__i_i_i188>>2]);var $ehselector_slot_4=$ehselector_slot_3;var $exn_slot_4=$exn_slot_3;label=108}else if(label==22){var $ehselector_slot_i_0;var $exn_slot_i_0;var $39=$9|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($39)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$ehselector_slot_i_0;var $eh_lpad_body$0=$exn_slot_i_0;label=4;break L1}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}else if(label==116){var $exn_slot_6;var $ehselector_slot_6;if((HEAP8[$__size__i_i_i255]&1)==0){var $ehselector_slot_7=$ehselector_slot_6;var $exn_slot_7=$exn_slot_6;label=118;break}__ZdlPv(HEAP32[$__data__i_i_i258>>2]);var $ehselector_slot_7=$ehselector_slot_6;var $exn_slot_7=$exn_slot_6;label=118}else if(label==129){var $exn_slot_8;var $ehselector_slot_8;if((HEAP8[$__size__i_i_i283]&1)==0){var $ehselector_slot_9=$ehselector_slot_8;var $exn_slot_9=$exn_slot_8;label=131;break}__ZdlPv(HEAP32[$__data__i_i_i286>>2]);var $ehselector_slot_9=$ehselector_slot_8;var $exn_slot_9=$exn_slot_8;label=131}}while(0);do{if(label==108){var $exn_slot_4;var $ehselector_slot_4;if((HEAP8[$__size__i50_i134]&1)==0){var $ehselector_slot_10=$ehselector_slot_4;var $exn_slot_10=$exn_slot_4;label=133;break}__ZdlPv(HEAP32[$__data__i_i_i194>>2]);var $ehselector_slot_10=$ehselector_slot_4;var $exn_slot_10=$exn_slot_4;label=133}else if(label==118){var $exn_slot_7;var $ehselector_slot_7;if((HEAP8[$__size__i50_i204]&1)==0){var $ehselector_slot_9=$ehselector_slot_7;var $exn_slot_9=$exn_slot_7;label=131;break}__ZdlPv(HEAP32[$__data__i_i_i264>>2]);var $ehselector_slot_9=$ehselector_slot_7;var $exn_slot_9=$exn_slot_7;label=131}}while(0);do{if(label==131){var $exn_slot_9;var $ehselector_slot_9;if((HEAP8[$__size__i_i_i289]&1)==0){var $ehselector_slot_10=$ehselector_slot_9;var $exn_slot_10=$exn_slot_9;label=133;break}__ZdlPv(HEAP32[$__data__i_i_i292>>2]);var $ehselector_slot_10=$ehselector_slot_9;var $exn_slot_10=$exn_slot_9;label=133}}while(0);do{if(label==133){var $exn_slot_10;var $ehselector_slot_10;if((HEAP8[$__size__i_i_i295]&1)==0){var $ehselector_slot_11=$ehselector_slot_10;var $exn_slot_11=$exn_slot_10;label=135;break}__ZdlPv(HEAP32[$__data__i_i_i298>>2]);var $ehselector_slot_11=$ehselector_slot_10;var $exn_slot_11=$exn_slot_10;label=135}}while(0);do{if(label==135){var $exn_slot_11;var $ehselector_slot_11;if((HEAP8[$__size__i_i_i301]&1)==0){var $ehselector_slot_12=$ehselector_slot_11;var $exn_slot_12=$exn_slot_11;break}__ZdlPv(HEAP32[$__data__i_i_i304>>2]);var $ehselector_slot_12=$ehselector_slot_11;var $exn_slot_12=$exn_slot_11}}while(0);var $exn_slot_12;var $ehselector_slot_12;HEAP32[$11>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$13>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$16>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;HEAP32[$22>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$__size__i_i_i_i_i_i_i308]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i311>>2])}HEAP32[$22>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($23)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_13=$ehselector_slot_12;var $exn_slot_13=$exn_slot_12;label=144;break}else{break}}___cxa_find_matching_catch(-1,-1,0);((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($23)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZSt9terminatev()}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}else{label=3}}while(0);if(label==3){var $lpad_nonloopexit457$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$lpad_nonloopexit457$0;label=4}if(label==4){var $eh_lpad_body$0;var $eh_lpad_body$1;var $ehselector_slot_13=$eh_lpad_body$1;var $exn_slot_13=$eh_lpad_body$0;label=144}do{if(label==144){var $exn_slot_13;var $ehselector_slot_13;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($2)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}___resumeException($exn_slot_13)}}while(0);___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEi($this,$__n){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+40|0;var $agg_tmp_i=sp;var $ref_tmp_i_i=sp+8;var $__s=sp+16;var $ref_tmp=sp+24;var $tmp=sp+32;var $__ok__i_i=$__s|0;HEAP8[$__ok__i_i]=0;HEAP32[$__s+4>>2]=$this;var $1=$this;var $vbase_offset_i_i8=HEAP32[HEAP32[$1>>2]-12>>2];var $3=$this;L1:do{if((HEAP32[$3+($vbase_offset_i_i8+16)>>2]|0)==0){var $7=HEAP32[$3+($vbase_offset_i_i8+72)>>2];if(($7|0)!=0){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=18;break}}HEAP8[$__ok__i_i]=1;var $9=$3+HEAP32[HEAP32[$1>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNKSt3__18ios_base6getlocEv($ref_tmp,$9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L6:do{if(!__THREW__){var $call_i50=(function(){try{__THREW__=0;return __ZNKSt3__16locale9use_facetERNS0_2idE($ref_tmp,__ZNSt3__17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE2idE)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $34$0=___cxa_find_matching_catch(-1,-1,0);var $35=$34$0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_0=$35;break}var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}var $10=$call_i50;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break}var $vbase_offset_i_i=HEAP32[HEAP32[$1>>2]-12>>2];var $14=HEAP32[$3+($vbase_offset_i_i+24)>>2];var $15=$3+$vbase_offset_i_i|0;var $16=$3+($vbase_offset_i_i+76)|0;var $17=HEAP32[$16>>2];var $extract_t13=$17&255;L13:do{if(($17|0)==-1){((function(){try{__THREW__=0;return __ZNKSt3__18ios_base6getlocEv($ref_tmp_i_i,$15)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break L6}var $call_i6_i_i=(function(){try{__THREW__=0;return __ZNKSt3__16locale9use_facetERNS0_2idE($ref_tmp_i_i,__ZNSt3__15ctypeIcE2idE)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $18=$call_i6_i_i;var $20=HEAP32[HEAP32[$call_i6_i_i>>2]+28>>2];var $call_i7_i_i=(function(){try{__THREW__=0;return FUNCTION_TABLE[$20]($18,32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break L6}HEAP32[$16>>2]=$call_i7_i_i<<24>>24;var $_off0=$call_i7_i_i;break L13}}while(0);var $21$0=___cxa_find_matching_catch(-1,-1,0);var $21$1=tempRet0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$21$1;var $eh_lpad_body$0=$21$0;label=20;break L6}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}else{var $_off0=$extract_t13}}while(0);var $_off0;var $24=HEAP32[HEAP32[$call_i50>>2]+16>>2];HEAP32[$agg_tmp_i>>2]=$14;((function(){try{__THREW__=0;return FUNCTION_TABLE[$24]($tmp,$10,$agg_tmp_i,$15,$_off0,$__n)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break}if((HEAP32[$tmp>>2]|0)!=0){label=22;break L1}var $vbase_offset32=HEAP32[HEAP32[$1>>2]-12>>2];var $27=$3+$vbase_offset32|0;var $or_i_i=HEAP32[$3+($vbase_offset32+16)>>2]|5;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($27,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=22;break L1}else{label=19}}else{label=19}}while(0);if(label==19){var $32$0=___cxa_find_matching_catch(-1,-1,0);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$32$0;label=20}if(label==20){var $eh_lpad_body$0;var $eh_lpad_body$1;var $exn_slot_0=$eh_lpad_body$0}var $exn_slot_0;((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_1=$exn_slot_0;break}var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}else{label=22}}while(0);do{if(label==22){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=18;break}STACKTOP=sp;return $this}}while(0);if(label==18){var $30$0=___cxa_find_matching_catch(-1,-1,0);var $exn_slot_1=$30$0}var $exn_slot_1;___cxa_begin_catch($exn_slot_1);var $38=$3+HEAP32[HEAP32[$1>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv($38)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___cxa_end_catch();STACKTOP=sp;return $this}var $39$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($39$0)}else{var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}}function __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_($agg_result,$__lhs,$__rhs){var $__size__i_i_i=$agg_result;HEAP32[$__size__i_i_i>>2]=0;HEAP32[$__size__i_i_i+4>>2]=0;HEAP32[$__size__i_i_i+8>>2]=0;var $0=HEAP8[$__lhs];var $conv_i_i=$0&255;if(($conv_i_i&1|0)==0){var $cond_i=$conv_i_i>>>1}else{var $cond_i=HEAP32[$__lhs+4>>2]}var $cond_i;var $__s_i_i42=$__rhs;var $__size__i_i43=$__rhs;var $conv_i_i44=HEAPU8[$__size__i_i43];if(($conv_i_i44&1|0)==0){var $cond_i65=$conv_i_i44>>>1}else{var $cond_i65=HEAP32[$__rhs+4>>2]}var $cond_i65;if(($0&1)==0){var $cond_i_i127=$__lhs+1|0}else{var $cond_i_i127=HEAP32[$__lhs+8>>2]}var $cond_i_i127;var $add=$cond_i65+$cond_i|0;do{if($add>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($add>>>0<11){HEAP8[$__size__i_i_i]=$cond_i<<1;var $__p_0_i=$agg_result+1|0}else{var $and_i_i_i11=$add+16&-16;var $call_i_i_i14=(function(){try{__THREW__=0;return __Znwj($and_i_i_i11)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$agg_result+8>>2]=$call_i_i_i14;HEAP32[$agg_result>>2]=$and_i_i_i11|1;HEAP32[$agg_result+4>>2]=$cond_i;var $__p_0_i=$call_i_i_i14}var $__p_0_i;_memcpy($__p_0_i,$cond_i_i127,$cond_i)|0;HEAP8[$__p_0_i+$cond_i|0]=0;if((HEAP8[$__size__i_i43]&1)==0){var $cond_i_i=$__s_i_i42+1|0}else{var $cond_i_i=HEAP32[$__rhs+8>>2]}var $cond_i_i;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($agg_result,$cond_i_i,$cond_i65)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}return}}while(0);var $7$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i_i_i]&1)==0){___resumeException($7$0)}__ZdlPv(HEAP32[$agg_result+8>>2]);___resumeException($7$0)}function __ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev($this){HEAP32[$this>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$this+64>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$this+8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $3=$this+12|0;HEAP32[$3>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+44|0]&1)!=0){__ZdlPv(HEAP32[$this+52>>2])}HEAP32[$3>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i_i=$this+16|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__18ios_baseD2Ev($this+64|0);return}var $7$0=___cxa_find_matching_catch(-1,-1);var $8=$this+64|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($7$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre26ColourInterpolatorAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;r3=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r3;__ZN4Ogre14ParticleSystem12_getIteratorEv(r4,r2);if(__ZN4Ogre16ParticleIterator3endEv(r4)){STACKTOP=r3;return}r2=r1+132|0;r5=r1+152|0;r6=r1+116|0;r7=r1+36|0;while(1){r8=__ZN4Ogre16ParticleIterator7getNextEv(r4);r9=1-HEAPF32[r8+64>>2]/HEAPF32[r8+68>>2];r10=HEAPF32[r2>>2];L6:do{if(r9>r10){r11=HEAPF32[r5>>2];if(r9>=r11){r12=r8+48|0;HEAP32[r12>>2]=HEAP32[r6>>2];HEAP32[r12+4>>2]=HEAP32[r6+4>>2];HEAP32[r12+8>>2]=HEAP32[r6+8>>2];HEAP32[r12+12>>2]=HEAP32[r6+12>>2];break}r12=HEAPF32[r1+136>>2];do{if(r9>=r10&r9<r12){r13=0;r14=r10;r15=1;r16=r12}else{r17=HEAPF32[r1+140>>2];if(r9>=r12&r9<r17){r13=1;r14=r12;r15=2;r16=r17;break}r18=HEAPF32[r1+144>>2];if(r9>=r17&r9<r18){r13=2;r14=r17;r15=3;r16=r18;break}r17=HEAPF32[r1+148>>2];if(r9>=r18&r9<r17){r13=3;r14=r18;r15=4;r16=r17;break}if(r9>=r17&r9<r11){r13=4;r14=r17;r15=5;r16=r11}else{break L6}}}while(0);r11=(r9-r14)/(r16-r14);r12=1-r11;HEAPF32[r8+48>>2]=r11*HEAPF32[r1+36+(r15<<4)>>2]+r12*HEAPF32[r1+36+(r13<<4)>>2];HEAPF32[r8+52>>2]=r11*HEAPF32[r1+36+(r15<<4)+4>>2]+r12*HEAPF32[r1+36+(r13<<4)+4>>2];HEAPF32[r8+56>>2]=r11*HEAPF32[r1+36+(r15<<4)+8>>2]+r12*HEAPF32[r1+36+(r13<<4)+8>>2];HEAPF32[r8+60>>2]=r11*HEAPF32[r1+36+(r15<<4)+12>>2]+r12*HEAPF32[r1+36+(r13<<4)+12>>2]}else{r12=r8+48|0;HEAP32[r12>>2]=HEAP32[r7>>2];HEAP32[r12+4>>2]=HEAP32[r7+4>>2];HEAP32[r12+8>>2]=HEAP32[r7+8>>2];HEAP32[r12+12>>2]=HEAP32[r7+12>>2]}}while(0);if(__ZN4Ogre16ParticleIterator3endEv(r4)){break}}STACKTOP=r3;return}function __ZN4Ogre26ColourInterpolatorAffector15setColourAdjustEjNS_11ColourValueE(r1,r2,r3){var r4,r5;r4=STACKTOP;r5=r3;r3=STACKTOP;STACKTOP=STACKTOP+16|0;HEAP32[r3>>2]=HEAP32[r5>>2];HEAP32[r3+4>>2]=HEAP32[r5+4>>2];HEAP32[r3+8>>2]=HEAP32[r5+8>>2];HEAP32[r3+12>>2]=HEAP32[r5+12>>2];r5=r1+36+(r2<<4)|0;r2=r3;HEAP32[r5>>2]=HEAP32[r2>>2];HEAP32[r5+4>>2]=HEAP32[r2+4>>2];HEAP32[r5+8>>2]=HEAP32[r2+8>>2];HEAP32[r5+12>>2]=HEAP32[r2+12>>2];STACKTOP=r4;return}function __ZNK4Ogre26ColourInterpolatorAffector15getColourAdjustEj(r1,r2,r3){var r4;r4=r1;r1=r2+36+(r3<<4)|0;HEAP32[r4>>2]=HEAP32[r1>>2];HEAP32[r4+4>>2]=HEAP32[r1+4>>2];HEAP32[r4+8>>2]=HEAP32[r1+8>>2];HEAP32[r4+12>>2]=HEAP32[r1+12>>2];return}function __ZN4Ogre26ColourInterpolatorAffector13setTimeAdjustEjf(r1,r2,r3){HEAPF32[r1+132+(r2<<2)>>2]=r3;return}function __ZNK4Ogre26ColourInterpolatorAffector13getTimeAdjustEj(r1,r2){return HEAPF32[r1+132+(r2<<2)>>2]}function __ZNK4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doGetEPKv(r1,r2,r3){var r4,r5,r6,r7;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;r6=r5;r7=r3+36+(HEAP32[r2+4>>2]<<4)|0;HEAP32[r6>>2]=HEAP32[r7>>2];HEAP32[r6+4>>2]=HEAP32[r7+4>>2];HEAP32[r6+8>>2]=HEAP32[r7+8>>2];HEAP32[r6+12>>2]=HEAP32[r7+12>>2];__ZN4Ogre15StringConverter8toStringERKNS_11ColourValueE(r1,r5);STACKTOP=r4;return}function __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;r6=HEAP32[r1+4>>2];__ZN4Ogre15StringConverter16parseColourValueERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_11ColourValueE(r5,r3,__ZN4Ogre11ColourValue5BlackE);r3=r5;r5=r2+36+(r6<<4)|0;HEAP32[r5>>2]=HEAP32[r3>>2];HEAP32[r5+4>>2]=HEAP32[r3+4>>2];HEAP32[r5+8>>2]=HEAP32[r3+8>>2];HEAP32[r5+12>>2]=HEAP32[r3+12>>2];STACKTOP=r4;return}function __ZNK4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+132+(HEAP32[r2+4>>2]<<2)>>2],6,0,32,0);return}function __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4;r4=HEAP32[r1+4>>2];HEAPF32[r2+132+(r4<<2)>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre26ColourInterpolatorAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre26ColourInterpolatorAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r3=r1;r4=HEAP32[r2+48>>2];if((r4&16|0)!=0){r5=r2+44|0;r6=HEAP32[r5>>2];r7=HEAP32[r2+24>>2];if(r6>>>0<r7>>>0){HEAP32[r5>>2]=r7;r8=r7}else{r8=r6}r6=HEAP32[r2+20>>2];r7=r6;r5=r8-r7|0;if(r5>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r5>>>0<11){HEAP8[r3]=r5<<1;r9=r1+1|0}else{r10=r5+16&-16;r11=__Znwj(r10);HEAP32[r1+8>>2]=r11;HEAP32[r1>>2]=r10|1;HEAP32[r1+4>>2]=r5;r9=r11}if((r6|0)==(r8|0)){r12=r9}else{r11=r8+ -r7|0;r7=r9;r5=r6;while(1){HEAP8[r7]=HEAP8[r5];r6=r5+1|0;if((r6|0)==(r8|0)){break}else{r7=r7+1|0;r5=r6}}r12=r9+r11|0}HEAP8[r12]=0;return}if((r4&8|0)==0){HEAP32[r3>>2]=0;HEAP32[r3+4>>2]=0;HEAP32[r3+8>>2]=0;return}r4=HEAP32[r2+8>>2];r12=HEAP32[r2+16>>2];r2=r4;r11=r12-r2|0;if(r11>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r11>>>0<11){HEAP8[r3]=r11<<1;r13=r1+1|0}else{r3=r11+16&-16;r9=__Znwj(r3);HEAP32[r1+8>>2]=r9;HEAP32[r1>>2]=r3|1;HEAP32[r1+4>>2]=r11;r13=r9}if((r4|0)==(r12|0)){r14=r13}else{r9=r12+ -r2|0;r2=r13;r11=r4;while(1){HEAP8[r2]=HEAP8[r11];r4=r11+1|0;if((r4|0)==(r12|0)){break}else{r2=r2+1|0;r11=r4}}r14=r13+r9|0}HEAP8[r14]=0;return}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($this){var $__os_=$this+4|0;var $ref=HEAP32[$__os_>>2];var $vbase_offset=HEAP32[HEAP32[$ref>>2]-12>>2];var $2=$ref;if((HEAP32[$2+($vbase_offset+24)>>2]|0)==0){return}if((HEAP32[$2+($vbase_offset+16)>>2]|0)!=0){return}if((HEAP32[$2+($vbase_offset+4)>>2]&8192|0)==0){return}if(__ZSt18uncaught_exceptionv()){return}var $ref21=HEAP32[$__os_>>2];var $13=HEAP32[$ref21+(HEAP32[HEAP32[$ref21>>2]-12>>2]+24)>>2];var $14=$13;var $16=HEAP32[HEAP32[$13>>2]+24>>2];var $call_i49=(function(){try{__THREW__=0;return FUNCTION_TABLE[$16]($14)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){if(($call_i49|0)!=-1){return}var $ref31=HEAP32[$__os_>>2];var $vbase_offset34=HEAP32[HEAP32[$ref31>>2]-12>>2];var $19=$ref31;var $20=$19+$vbase_offset34|0;var $or_i_i=HEAP32[$19+($vbase_offset34+16)>>2]|1;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($20,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}return}}while(0);var $23$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($23$0);___cxa_end_catch();return}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($this){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $__s=sp;var $0=$this;var $vbase_offset=HEAP32[HEAP32[$0>>2]-12>>2];var $2=$this;if((HEAP32[$2+($vbase_offset+24)>>2]|0)==0){STACKTOP=sp;return $this}var $__ok__i_i=$__s|0;HEAP8[$__ok__i_i]=0;HEAP32[$__s+4>>2]=$this;do{if((HEAP32[$2+($vbase_offset+16)>>2]|0)==0){var $9=HEAP32[$2+($vbase_offset+72)>>2];if(($9|0)!=0){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=8;break}}HEAP8[$__ok__i_i]=1;var $12=HEAP32[$2+(HEAP32[HEAP32[$0>>2]-12>>2]+24)>>2];var $13=$12;var $15=HEAP32[HEAP32[$12>>2]+24>>2];var $call_i43=(function(){try{__THREW__=0;return FUNCTION_TABLE[$15]($13)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(!__THREW__){if(($call_i43|0)!=-1){label=10;break}var $vbase_offset18=HEAP32[HEAP32[$0>>2]-12>>2];var $17=$2+$vbase_offset18|0;var $or_i_i=HEAP32[$2+($vbase_offset18+16)>>2]|1;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($17,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=10;break}}var $22$0=___cxa_find_matching_catch(-1,-1,0);var $23=$22$0;((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_0=$23;break}var $28$0=___cxa_find_matching_catch(-1,-1,0);var $28$1=tempRet0;__ZSt9terminatev()}else{label=10}}while(0);do{if(label==10){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=8;break}STACKTOP=sp;return $this}}while(0);if(label==8){var $20$0=___cxa_find_matching_catch(-1,-1,0);var $exn_slot_0=$20$0}var $exn_slot_0;___cxa_begin_catch($exn_slot_0);var $26=$2+HEAP32[HEAP32[$0>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv($26)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___cxa_end_catch();STACKTOP=sp;return $this}var $27$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($27$0)}else{var $28$0=___cxa_find_matching_catch(-1,-1,0);var $28$1=tempRet0;__ZSt9terminatev()}}function __ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){HEAP32[$this>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$this+64>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$this+8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $3=$this+12|0;HEAP32[$3>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+44|0]&1)!=0){__ZdlPv(HEAP32[$this+52>>2])}HEAP32[$3>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i_i_i=$this+16|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $7$0=___cxa_find_matching_catch(-1,-1);var $7$1=tempRet0;var $8=$this+64|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$7$1;var $eh_lpad_body$0=$7$0;var $eh_lpad_body$0;var $eh_lpad_body$1;var $12=$this;__ZdlPv($12);___resumeException($eh_lpad_body$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $6=$this+64|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}var $11$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$11$0;var $eh_lpad_body$0;var $eh_lpad_body$1;var $12=$this;__ZdlPv($12);___resumeException($eh_lpad_body$0)}function __ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev($this){var $0=$this-144+136|0;HEAP32[$0>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $1=$0+64|0;HEAP32[$1>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$0+8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $3=$0+12|0;HEAP32[$3>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+44|0]&1)!=0){__ZdlPv(HEAP32[$0+52>>2])}HEAP32[$3>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $7=$0+16|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__18ios_baseD2Ev($1);return}var $8$0=___cxa_find_matching_catch(-1,-1);var $9=$1;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($8$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){var $0=$this-144+136|0;HEAP32[$0>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $1=$0+64|0;HEAP32[$1>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$0+8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $3=$0+12|0;HEAP32[$3>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+44|0]&1)!=0){__ZdlPv(HEAP32[$0+52>>2])}HEAP32[$3>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $7=$0+16|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $9$0=___cxa_find_matching_catch(-1,-1);var $9$1=tempRet0;var $10=$1;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body_i$1=$9$1;var $eh_lpad_body_i$0=$9$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;var $13=$0;__ZdlPv($13);___resumeException($eh_lpad_body_i$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $8=$1;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($0);return}var $12$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body_i$1=tempRet0;var $eh_lpad_body_i$0=$12$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;var $13=$0;__ZdlPv($13);___resumeException($eh_lpad_body_i$0)}function __ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];HEAP32[$0+$5>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $8=$0+($5+64)|0;HEAP32[$8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$0+($5+8)>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $13=$0+($5+12)|0;HEAP32[$13>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+($5+44)|0]&1)!=0){__ZdlPv(HEAP32[$0+($5+52)>>2])}HEAP32[$13>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $17=$0+($5+16)|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($17)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__18ios_baseD2Ev($8);return}var $18$0=___cxa_find_matching_catch(-1,-1);var $19=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($19)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($18$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];var $6=$0+$5|0;HEAP32[$6>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $8=$0+($5+64)|0;HEAP32[$8>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+52;HEAP32[$0+($5+8)>>2]=__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $13=$0+($5+12)|0;HEAP32[$13>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+($5+44)|0]&1)!=0){__ZdlPv(HEAP32[$0+($5+52)>>2])}HEAP32[$13>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $17=$0+($5+16)|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($17)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $19$0=___cxa_find_matching_catch(-1,-1);var $19$1=tempRet0;var $20=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($20)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body_i$1=$19$1;var $eh_lpad_body_i$0=$19$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;__ZdlPv($6);___resumeException($eh_lpad_body_i$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $18=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($18)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($6);return}var $22$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body_i$1=tempRet0;var $eh_lpad_body_i$0=$22$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;__ZdlPv($6);___resumeException($eh_lpad_body_i$0)}function __ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev(r1){__ZNSt3__18ios_baseD2Ev(r1+8|0);return}function __ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev($this){var $0=$this+8|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $2$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($2$0)}}function __ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev(r1){__ZNSt3__18ios_baseD2Ev(r1+(HEAP32[HEAP32[r1>>2]-12>>2]+8)|0);return}function __ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];var $6=$0+$5|0;var $8=$0+($5+8)|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($6);return}else{var $9$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($6);___resumeException($9$0)}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(r1){var r2;r2=r1|0;HEAP32[r2>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[r1+32|0]&1)!=0){__ZdlPv(HEAP32[r1+40>>2])}HEAP32[r2>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;__ZNSt3__16localeD1Ev(r1+4|0);return}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){var $0=$this|0;HEAP32[$0>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+32|0]&1)!=0){__ZdlPv(HEAP32[$this+40>>2])}HEAP32[$0>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i=$this+4|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $4$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($4$0)}}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE(r1,r2){return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci(r1,r2,r3){return r1}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj(r1,r2,r3,r4,r5,r6){var r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r7=0;r8=r2+44|0;r9=HEAP32[r8>>2];r10=r2+24|0;r11=HEAP32[r10>>2];if(r9>>>0<r11>>>0){HEAP32[r8>>2]=r11;r12=r11}else{r12=r9}r9=r6&24;do{if((r9|0)==24){if((r5|0)==2){r7=11;break}else if((r5|0)==0){r13=0;r14=0;break}else if((r5|0)!=1){r7=15;break}r8=r1;HEAP32[r8>>2]=0;HEAP32[r8+4>>2]=0;r8=r1+8|0;HEAP32[r8>>2]=-1;HEAP32[r8+4>>2]=-1;return}else if((r9|0)==0){r8=r1;HEAP32[r8>>2]=0;HEAP32[r8+4>>2]=0;r8=r1+8|0;HEAP32[r8>>2]=-1;HEAP32[r8+4>>2]=-1;return}else{if((r5|0)==2){r7=11;break}else if((r5|0)==0){r13=0;r14=0;break}else if((r5|0)!=1){r7=15;break}if((r6&8|0)==0){r8=r11-HEAP32[r2+20>>2]|0;r13=(r8|0)<0|0?-1:0;r14=r8;break}else{r8=HEAP32[r2+12>>2]-HEAP32[r2+8>>2]|0;r13=(r8|0)<0|0?-1:0;r14=r8;break}}}while(0);if(r7==15){r5=r1;HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=0;r5=r1+8|0;HEAP32[r5>>2]=-1;HEAP32[r5+4>>2]=-1;return}if(r7==11){r7=r2+32|0;if((HEAP8[r7]&1)==0){r15=r7+1|0}else{r15=HEAP32[r2+40>>2]}r7=r12-r15|0;r13=(r7|0)<0|0?-1:0;r14=r7}r7=_i64Add(r14,r13,r3,r4);r4=tempRet0;r3=0;do{if(!((r4|0)<(r3|0)|(r4|0)==(r3|0)&r7>>>0<0>>>0)){r13=r2+32|0;if((HEAP8[r13]&1)==0){r16=r13+1|0}else{r16=HEAP32[r2+40>>2]}r13=r12-r16|0;r14=(r13|0)<0|0?-1:0;if((r14|0)<(r4|0)|(r14|0)==(r4|0)&r13>>>0<r7>>>0){break}r13=r6&8;do{if(!((r7|0)==0&(r4|0)==0)){do{if((r13|0)!=0){if((HEAP32[r2+12>>2]|0)!=0){break}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=-1;HEAP32[r14+4>>2]=-1;return}}while(0);if(!((r6&16|0)!=0&(r11|0)==0)){break}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=-1;HEAP32[r14+4>>2]=-1;return}}while(0);if((r13|0)!=0){HEAP32[r2+12>>2]=HEAP32[r2+8>>2]+r7;HEAP32[r2+16>>2]=r12}if((r6&16|0)!=0){HEAP32[r10>>2]=HEAP32[r2+20>>2]+r7}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=r7;HEAP32[r14+4>>2]=r4;return}}while(0);r4=r1;HEAP32[r4>>2]=0;HEAP32[r4+4>>2]=0;r4=r1+8|0;HEAP32[r4>>2]=-1;HEAP32[r4+4>>2]=-1;return}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj(r1,r2,r3,r4){var r5,r6;r5=STACKTOP;r6=r3;r3=STACKTOP;STACKTOP=STACKTOP+16|0;HEAP32[r3>>2]=HEAP32[r6>>2];HEAP32[r3+4>>2]=HEAP32[r6+4>>2];HEAP32[r3+8>>2]=HEAP32[r6+8>>2];HEAP32[r3+12>>2]=HEAP32[r6+12>>2];r6=r3+8|0;FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+16>>2]](r1,r2,HEAP32[r6>>2],HEAP32[r6+4>>2],0,r4);STACKTOP=r5;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv(r1){return 0}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv(r1){return 0}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=0;r5=r1;if((r3|0)<=0){r6=0;return r6}r7=r1+12|0;r8=r1+16|0;r9=r2;r2=0;while(1){r10=HEAP32[r7>>2];if(r10>>>0<HEAP32[r8>>2]>>>0){HEAP32[r7>>2]=r10+1;r11=HEAP8[r10]}else{r10=FUNCTION_TABLE[HEAP32[HEAP32[r5>>2]+40>>2]](r1);if((r10|0)==-1){r6=r2;r4=10;break}r11=r10&255}HEAP8[r9]=r11;r10=r2+1|0;if((r10|0)<(r3|0)){r9=r9+1|0;r2=r10}else{r6=r10;r4=9;break}}if(r4==10){return r6}else if(r4==9){return r6}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv(r1){var r2,r3,r4,r5,r6,r7;r2=r1+44|0;r3=HEAP32[r2>>2];r4=HEAP32[r1+24>>2];if(r3>>>0<r4>>>0){HEAP32[r2>>2]=r4;r5=r4}else{r5=r3}if((HEAP32[r1+48>>2]&8|0)==0){r6=-1;return r6}r3=r1+16|0;r4=HEAP32[r3>>2];r2=HEAP32[r1+12>>2];if(r4>>>0<r5>>>0){HEAP32[r3>>2]=r5;r7=r5}else{r7=r4}if(r2>>>0>=r7>>>0){r6=-1;return r6}r6=HEAPU8[r2];return r6}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv(r1){var r2,r3;if((FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r1)|0)==-1){r2=-1;return r2}r3=r1+12|0;r1=HEAP32[r3>>2];HEAP32[r3>>2]=r1+1;r2=HEAPU8[r1];return r2}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r3=r1+44|0;r4=HEAP32[r3>>2];r5=HEAP32[r1+24>>2];if(r4>>>0<r5>>>0){HEAP32[r3>>2]=r5;r6=r5}else{r6=r4}r4=r1+8|0;r5=HEAP32[r4>>2];r3=r1+12|0;r7=HEAP32[r3>>2];if(r5>>>0>=r7>>>0){r8=-1;return r8}if((r2|0)==-1){HEAP32[r4>>2]=r5;HEAP32[r3>>2]=r7-1;HEAP32[r1+16>>2]=r6;r8=0;return r8}r9=r7-1|0;do{if((HEAP32[r1+48>>2]&16|0)==0){if((r2<<24>>24|0)==(HEAP8[r9]|0)){break}else{r8=-1}return r8}}while(0);HEAP32[r4>>2]=r5;HEAP32[r3>>2]=r9;HEAP32[r1+16>>2]=r6;HEAP8[r9]=r2;r8=r2;return r8}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=0;r5=r1;if((r3|0)<=0){r6=0;return r6}r7=r1+24|0;r8=r1+28|0;r9=0;r10=r2;while(1){r2=HEAP32[r7>>2];if(r2>>>0<HEAP32[r8>>2]>>>0){r11=HEAP8[r10];HEAP32[r7>>2]=r2+1;HEAP8[r2]=r11}else{if((FUNCTION_TABLE[HEAP32[HEAP32[r5>>2]+52>>2]](r1,HEAPU8[r10])|0)==-1){r6=r9;r4=8;break}}r11=r9+1|0;if((r11|0)<(r3|0)){r9=r11;r10=r10+1|0}else{r6=r11;r4=9;break}}if(r4==9){return r6}else if(r4==8){return r6}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi($this,$__c){var label=0;if(($__c|0)==-1){var $retval_0=0;var $retval_0;return $retval_0}var $0=$this|0;var $__ninp__i141=$this+12|0;var $__binp__i163=$this+8|0;var $sub_ptr_sub=HEAP32[$__ninp__i141>>2]-HEAP32[$__binp__i163>>2]|0;var $__nout__i178=$this+24|0;var $3=HEAP32[$__nout__i178>>2];var $__eout__i175=$this+28|0;var $4=HEAP32[$__eout__i175>>2];L4:do{if(($3|0)==($4|0)){var $__mode_=$this+48|0;if((HEAP32[$__mode_>>2]&16|0)==0){var $retval_0=-1;var $retval_0;return $retval_0}var $__bout__i169=$this+20|0;var $sub_ptr_rhs_cast14=HEAP32[$__bout__i169>>2];var $sub_ptr_sub15=$3-$sub_ptr_rhs_cast14|0;var $__hm_=$this+44|0;var $sub_ptr_sub20=HEAP32[$__hm_>>2]-$sub_ptr_rhs_cast14|0;var $__str_=$this+32|0;var $__s_i_i=$__str_;var $__size__i_i=$__str_;var $8=HEAP8[$__size__i_i];if(($8&1)==0){var $__sz_0_i=($8&255)>>>1;var $__cap_0_i=10}else{var $__sz_0_i=HEAP32[$this+36>>2];var $__cap_0_i=(HEAP32[$__str_>>2]&-2)-1|0}var $__cap_0_i;var $__sz_0_i;do{if(($__sz_0_i|0)==($__cap_0_i|0)){((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($__str_,$__cap_0_i,1,$__cap_0_i,$__cap_0_i,0,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $__is_short_0_off0_in_in_i=HEAP8[$__size__i_i];label=11}else{var $__is_short_0_off0_in_in_i=$8;label=11}}while(0);L16:do{if(label==11){var $__is_short_0_off0_in_in_i;if(($__is_short_0_off0_in_in_i&1)==0){HEAP8[$__size__i_i]=($__sz_0_i<<1)+2;var $arrayidx_i_pn_i=$__s_i_i+1|0;var $__p_0_sum_pre_phi_i=$__sz_0_i+1|0}else{var $12=HEAP32[$this+40>>2];var $add16_i=$__sz_0_i+1|0;HEAP32[$this+36>>2]=$add16_i;var $arrayidx_i_pn_i=$12;var $__p_0_sum_pre_phi_i=$add16_i}var $__p_0_sum_pre_phi_i;var $arrayidx_i_pn_i;HEAP8[$arrayidx_i_pn_i+$__sz_0_i|0]=0;HEAP8[$arrayidx_i_pn_i+$__p_0_sum_pre_phi_i|0]=0;var $13=HEAP8[$__size__i_i];if(($13&1)==0){var $cond_i160=10;var $16=$13}else{var $14=HEAP32[$__str_>>2];var $cond_i160=($14&-2)-1|0;var $16=$14&255}var $16;var $cond_i160;var $conv_i_i_i=$16&255;if(($conv_i_i_i&1|0)==0){var $cond_i_i25=$conv_i_i_i>>>1}else{var $cond_i_i25=HEAP32[$this+36>>2]}var $cond_i_i25;do{if($cond_i_i25>>>0<$cond_i160>>>0){var $sub_i27=$cond_i160-$cond_i_i25|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($__str_,$sub_i27,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break L16}}else{if(($16&1)==0){HEAP8[$cond_i160+($__s_i_i+1)|0]=0;HEAP8[$__size__i_i]=$cond_i160<<1;break}else{HEAP8[HEAP32[$this+40>>2]+$cond_i160|0]=0;HEAP32[$this+36>>2]=$cond_i160;break}}}while(0);var $19=HEAP8[$__size__i_i];if(($19&1)==0){var $cond_i_i134=$__s_i_i+1|0}else{var $cond_i_i134=HEAP32[$this+40>>2]}var $cond_i_i134;var $conv_i_i87=$19&255;if(($conv_i_i87&1|0)==0){var $cond_i90=$conv_i_i87>>>1}else{var $cond_i90=HEAP32[$this+36>>2]}var $cond_i90;var $add_ptr=$cond_i_i134+$cond_i90|0;HEAP32[$__bout__i169>>2]=$cond_i_i134;HEAP32[$__eout__i175>>2]=$add_ptr;var $add_ptr_i=$cond_i_i134+$sub_ptr_sub15|0;HEAP32[$__nout__i178>>2]=$add_ptr_i;var $add_ptr34=$cond_i_i134+$sub_ptr_sub20|0;HEAP32[$__hm_>>2]=$add_ptr34;var $27=$add_ptr_i;var $26=$add_ptr;var $25=$add_ptr34;var $__mode_43_pre_phi=$__mode_;break L4}}while(0);var $22$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($22$0);___cxa_end_catch();var $retval_0=-1;var $retval_0;return $retval_0}else{var $27=$3;var $26=$4;var $25=HEAP32[$this+44>>2];var $__mode_43_pre_phi=$this+48|0}}while(0);var $__mode_43_pre_phi;var $25;var $26;var $27;var $add_ptr39=$27+1|0;var $_sroa_speculated=$add_ptr39>>>0<$25>>>0?$25:$add_ptr39;HEAP32[$this+44>>2]=$_sroa_speculated;if((HEAP32[$__mode_43_pre_phi>>2]&8|0)!=0){var $29=$this+32|0;if((HEAP8[$29]&1)==0){var $cond_i_i=$29+1|0}else{var $cond_i_i=HEAP32[$this+40>>2]}var $cond_i_i;HEAP32[$__binp__i163>>2]=$cond_i_i;HEAP32[$__ninp__i141>>2]=$cond_i_i+$sub_ptr_sub;HEAP32[$this+16>>2]=$_sroa_speculated}if(($27|0)==($26|0)){var $retval_0=FUNCTION_TABLE[HEAP32[HEAP32[$this>>2]+52>>2]]($0,$__c&255);var $retval_0;return $retval_0}else{HEAP32[$__nout__i178>>2]=$add_ptr39;HEAP8[$27]=$__c;var $retval_0=$__c&255;var $retval_0;return $retval_0}}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10;if((r2|0)==0){return r1}r4=r1;r5=HEAP8[r4];if((r5&1)==0){r6=10;r7=r5}else{r5=HEAP32[r1>>2];r6=(r5&-2)-1|0;r7=r5&255}r5=r7&255;if((r5&1|0)==0){r8=r5>>>1}else{r8=HEAP32[r1+4>>2]}if((r6-r8|0)>>>0<r2>>>0){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(r1,r6,r2-r6+r8|0,r8,r8,0,0);r9=HEAP8[r4]}else{r9=r7}if((r9&1)==0){r10=r1+1|0}else{r10=HEAP32[r1+8>>2]}_memset(r10+r8|0,r3,r2)|0;r3=r8+r2|0;if((HEAP8[r4]&1)==0){HEAP8[r4]=r3<<1}else{HEAP32[r1+4>>2]=r3}HEAP8[r10+r3|0]=0;return r1}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(r1,r2,r3,r4,r5,r6,r7){var r8,r9,r10,r11,r12,r13,r14,r15;if((-17-r2|0)>>>0<r3>>>0){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if((HEAP8[r1]&1)==0){r8=r1+1|0}else{r8=HEAP32[r1+8>>2]}do{if(r2>>>0<2147483623){r9=r3+r2|0;r10=r2<<1;r11=r9>>>0<r10>>>0?r10:r9;if(r11>>>0<11){r12=11;break}r12=r11+16&-16}else{r12=-17}}while(0);r3=__Znwj(r12);if((r5|0)!=0){_memcpy(r3,r8,r5)|0}r11=r4-r6|0;if((r11|0)!=(r5|0)){_memcpy(r3+(r7+r5)|0,r8+(r6+r5)|0,r11-r5|0)|0}if((r2|0)==10){r13=r1+8|0;HEAP32[r13>>2]=r3;r14=r12|1;r15=r1|0;HEAP32[r15>>2]=r14;return}__ZdlPv(r8);r13=r1+8|0;HEAP32[r13>>2]=r3;r14=r12|1;r15=r1|0;HEAP32[r15>>2]=r14;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev(r1){HEAP32[r1>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;__ZNSt3__16localeD1Ev(r1+4|0);return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev($this){HEAP32[$this>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i=$this+4|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $2$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($2$0)}}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj(r1,r2,r3,r4,r5,r6){r6=r1;HEAP32[r6>>2]=0;HEAP32[r6+4>>2]=0;r6=r1+8|0;HEAP32[r6>>2]=-1;HEAP32[r6+4>>2]=-1;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj(r1,r2,r3,r4){r4=STACKTOP;r2=r3;r3=STACKTOP;STACKTOP=STACKTOP+16|0;HEAP32[r3>>2]=HEAP32[r2>>2];HEAP32[r3+4>>2]=HEAP32[r2+4>>2];HEAP32[r3+8>>2]=HEAP32[r2+8>>2];HEAP32[r3+12>>2]=HEAP32[r2+12>>2];r2=r1;HEAP32[r2>>2]=0;HEAP32[r2+4>>2]=0;r2=r1+8|0;HEAP32[r2>>2]=-1;HEAP32[r2+4>>2]=-1;STACKTOP=r4;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv(r1){return-1}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi(r1,r2){return-1}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi(r1,r2){return-1}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;r3=r1+32|0;__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(r3,r2);r2=r1+44|0;HEAP32[r2>>2]=0;r4=r1+48|0;r5=HEAP32[r4>>2];if((r5&8|0)!=0){r6=r3;r7=HEAP8[r3];r8=(r7&1)==0;if(r8){r9=r6+1|0}else{r9=HEAP32[r1+40>>2]}r10=r7&255;if((r10&1|0)==0){r11=r10>>>1}else{r11=HEAP32[r1+36>>2]}r10=r9+r11|0;HEAP32[r2>>2]=r10;if(r8){r12=r6+1|0;r13=r6+1|0}else{r6=HEAP32[r1+40>>2];r12=r6;r13=r6}HEAP32[r1+8>>2]=r13;HEAP32[r1+12>>2]=r12;HEAP32[r1+16>>2]=r10}if((r5&16|0)==0){return}r5=r3;r10=r3;r12=HEAP8[r10];r13=r12&255;if((r13&1|0)==0){r14=r13>>>1}else{r14=HEAP32[r1+36>>2]}if((r12&1)==0){HEAP32[r2>>2]=r14+(r5+1);r15=10;r16=r12}else{HEAP32[r2>>2]=HEAP32[r1+40>>2]+r14;r2=HEAP32[r3>>2];r15=(r2&-2)-1|0;r16=r2&255}r2=r16&255;if((r2&1|0)==0){r17=r2>>>1}else{r17=HEAP32[r1+36>>2]}do{if(r17>>>0<r15>>>0){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(r3,r15-r17|0,0)}else{if((r16&1)==0){HEAP8[r15+(r5+1)|0]=0;HEAP8[r10]=r15<<1;break}else{HEAP8[HEAP32[r1+40>>2]+r15|0]=0;HEAP32[r1+36>>2]=r15;break}}}while(0);r15=HEAP8[r10];if((r15&1)==0){r18=r5+1|0;r19=r5+1|0}else{r5=HEAP32[r1+40>>2];r18=r5;r19=r5}r5=r15&255;if((r5&1|0)==0){r20=r5>>>1}else{r20=HEAP32[r1+36>>2]}r5=r1+24|0;HEAP32[r5>>2]=r19;HEAP32[r1+20>>2]=r19;HEAP32[r1+28>>2]=r18+r20;if((HEAP32[r4>>2]&3|0)==0){return}HEAP32[r5>>2]=r19+r14;return}function __GLOBAL__I_a(){HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+8>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+16>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+24>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+32>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector11msColourCmdE+40>>2]=__ZTVN4Ogre26ColourInterpolatorAffector15CmdColourAdjustE+8;_atexit(FUNCTION_TABLE_OFFSET+772,0,___dso_handle);HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+8>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+16>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+24>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+32>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;HEAP32[__ZN4Ogre26ColourInterpolatorAffector9msTimeCmdE+40>>2]=__ZTVN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustE+8;_atexit(FUNCTION_TABLE_OFFSET+594,0,___dso_handle);return}function __ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;var $1=$this|0;__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE($1,$psys);HEAP32[$this>>2]=__ZTVN4Ogre15CylinderEmitterE+8;var $__s2_i_i=$ref_tmp;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=16;var $3=$__s2_i_i+1|0;var $st$1$0=$3|0;tempBigInt=1768716611;HEAP8[$st$1$0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$1$0+3|0]=tempBigInt;var $st$2$1=$3+4|0;tempBigInt=1919247470;HEAP8[$st$2$1]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$st$2$1+3|0]=tempBigInt;HEAP8[$__s2_i_i+9|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($0,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){if((HEAP8[$__size__i50_i]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp+8>>2]);STACKTOP=sp;return}var $6$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre15CylinderEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6,r7,r8;__ZN4Ogre8Particle15resetDimensionsEv(r2);while(1){r3=__ZN4Ogre4Math15SymmetricRandomEv();r4=__ZN4Ogre4Math15SymmetricRandomEv();r5=__ZN4Ogre4Math15SymmetricRandomEv();if(r3*r3+r4*r4<=1){break}}r6=r1|0;r7=r3*HEAPF32[r1+288>>2]+HEAPF32[r1+108>>2]+r4*HEAPF32[r1+300>>2]+r5*HEAPF32[r1+312>>2];r8=r3*HEAPF32[r1+292>>2]+HEAPF32[r1+112>>2]+r4*HEAPF32[r1+304>>2]+r5*HEAPF32[r1+316>>2];HEAPF32[r2+24>>2]=r3*HEAPF32[r1+284>>2]+HEAPF32[r1+104>>2]+r4*HEAPF32[r1+296>>2]+r5*HEAPF32[r1+308>>2];HEAPF32[r2+28>>2]=r7;HEAPF32[r2+32>>2]=r8;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r6,r2+48|0);r8=r1;r7=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+24>>2]](r6,r7);FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+28>>2]](r6,r7);r7=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r6);HEAPF32[r2+68>>2]=r7;HEAPF32[r2+64>>2]=r7;return}function __ZN4Ogre15CylinderEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre15CylinderEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD1Ev(r1){return}function __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD1Ev(r1){return}function __ZN4Ogre22DeflectorPlaneAffector9CmdBounceD1Ev(r1){return}function __ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+208|0;var $ref_tmp=sp;var $ref_tmp19=sp+16;var $ref_tmp20=sp+48;var $ref_tmp22=sp+64;var $ref_tmp36=sp+80;var $ref_tmp37=sp+112;var $ref_tmp39=sp+128;var $ref_tmp55=sp+144;var $ref_tmp56=sp+176;var $ref_tmp58=sp+192;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre22DeflectorPlaneAffectorE+8;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str44|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){HEAPF32[$this+36>>2]=HEAPF32[__ZN4Ogre7Vector34ZEROE>>2];HEAPF32[$this+40>>2]=HEAPF32[__ZN4Ogre7Vector34ZEROE+4>>2];HEAPF32[$this+44>>2]=HEAPF32[__ZN4Ogre7Vector34ZEROE+8>>2];HEAPF32[$this+48>>2]=HEAPF32[__ZN4Ogre7Vector36UNIT_YE>>2];HEAPF32[$this+52>>2]=HEAPF32[__ZN4Ogre7Vector36UNIT_YE+4>>2];HEAPF32[$this+56>>2]=HEAPF32[__ZN4Ogre7Vector36UNIT_YE+8>>2];HEAPF32[$this+60>>2]=1;var $call_i_i_i27=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break}var $9=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i27;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=22;_memcpy($call_i_i_i27,__str345|0,22)|0;HEAP8[$call_i_i_i27+22|0]=0;var $call13=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($9,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $40$0=___cxa_find_matching_catch(-1,-1);var $41=$40$0;var $42=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_6=$41;var $ehselector_slot_6=$42;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_6=$41;var $ehselector_slot_6=$42;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call13){STACKTOP=sp;return}var $12=HEAP32[$this+16>>2];var $call_i_i_i61=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break}var $__data__i_i52=$ref_tmp20+8|0;HEAP32[$__data__i_i52>>2]=$call_i_i_i61;HEAP32[$ref_tmp20>>2]=17;HEAP32[$ref_tmp20+4>>2]=11;_memcpy($call_i_i_i61,__str446|0,11)|0;HEAP8[$call_i_i_i61+11|0]=0;var $call_i_i_i84=(function(){try{__THREW__=0;return __Znwj(96)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i75=$ref_tmp22+8|0;HEAP32[$__data__i_i75>>2]=$call_i_i_i84;HEAP32[$ref_tmp22>>2]=97;HEAP32[$ref_tmp22+4>>2]=85;_memcpy($call_i_i_i84,__str547|0,85)|0;HEAP8[$call_i_i_i84+85|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp19,$ref_tmp20,$ref_tmp22,9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($12,$ref_tmp19,__ZN4Ogre22DeflectorPlaneAffector15msPlanePointCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $51$0=___cxa_find_matching_catch(-1,-1);var $52=$51$0;var $53=tempRet0;if((HEAP8[$ref_tmp19+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp19+20>>2])}if((HEAP8[$ref_tmp19]&1)==0){var $exn_slot_0=$52;var $ehselector_slot_0=$53;break}__ZdlPv(HEAP32[$ref_tmp19+8>>2]);var $exn_slot_0=$52;var $ehselector_slot_0=$53;break}if((HEAP8[$ref_tmp19+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp19+20>>2])}if((HEAP8[$ref_tmp19]&1)!=0){__ZdlPv(HEAP32[$ref_tmp19+8>>2])}if((HEAP8[$ref_tmp22]&1)!=0){__ZdlPv(HEAP32[$__data__i_i75>>2])}if((HEAP8[$ref_tmp20]&1)!=0){__ZdlPv(HEAP32[$__data__i_i52>>2])}var $call_i_i_i133=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break L1}var $__data__i_i124=$ref_tmp37+8|0;HEAP32[$__data__i_i124>>2]=$call_i_i_i133;HEAP32[$ref_tmp37>>2]=17;HEAP32[$ref_tmp37+4>>2]=12;_memcpy($call_i_i_i133,__str648|0,12)|0;HEAP8[$call_i_i_i133+12|0]=0;var $call_i_i_i156=(function(){try{__THREW__=0;return __Znwj(96)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i147=$ref_tmp39+8|0;HEAP32[$__data__i_i147>>2]=$call_i_i_i156;HEAP32[$ref_tmp39>>2]=97;HEAP32[$ref_tmp39+4>>2]=87;_memcpy($call_i_i_i156,__str749|0,87)|0;HEAP8[$call_i_i_i156+87|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp36,$ref_tmp37,$ref_tmp39,9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($12,$ref_tmp36,__ZN4Ogre22DeflectorPlaneAffector16msPlaneNormalCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $68$0=___cxa_find_matching_catch(-1,-1);var $69=$68$0;var $70=tempRet0;if((HEAP8[$ref_tmp36+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp36+20>>2])}if((HEAP8[$ref_tmp36]&1)==0){var $exn_slot_2=$69;var $ehselector_slot_2=$70;break}__ZdlPv(HEAP32[$ref_tmp36+8>>2]);var $exn_slot_2=$69;var $ehselector_slot_2=$70;break}if((HEAP8[$ref_tmp36+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp36+20>>2])}if((HEAP8[$ref_tmp36]&1)!=0){__ZdlPv(HEAP32[$ref_tmp36+8>>2])}if((HEAP8[$ref_tmp39]&1)!=0){__ZdlPv(HEAP32[$__data__i_i147>>2])}if((HEAP8[$ref_tmp37]&1)!=0){__ZdlPv(HEAP32[$__data__i_i124>>2])}var $__s2_i_i191=$ref_tmp56;var $__size__i50_i192=$ref_tmp56;HEAP8[$__size__i50_i192]=12;var $arrayidx_i_i193=$__s2_i_i191+1|0;HEAP8[$arrayidx_i_i193]=HEAP8[__str850|0];HEAP8[$arrayidx_i_i193+1|0]=HEAP8[__str850+1|0];HEAP8[$arrayidx_i_i193+2|0]=HEAP8[__str850+2|0];HEAP8[$arrayidx_i_i193+3|0]=HEAP8[__str850+3|0];HEAP8[$arrayidx_i_i193+4|0]=HEAP8[__str850+4|0];HEAP8[$arrayidx_i_i193+5|0]=HEAP8[__str850+5|0];HEAP8[$__s2_i_i191+7|0]=0;var $call_i_i_i229=(function(){try{__THREW__=0;return __Znwj(128)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i220=$ref_tmp58+8|0;HEAP32[$__data__i_i220>>2]=$call_i_i_i229;HEAP32[$ref_tmp58>>2]=129;HEAP32[$ref_tmp58+4>>2]=115;_memcpy($call_i_i_i229,__str951|0,115)|0;HEAP8[$call_i_i_i229+115|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp55,$ref_tmp56,$ref_tmp58,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($12,$ref_tmp55,__ZN4Ogre22DeflectorPlaneAffector11msBounceCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $85$0=___cxa_find_matching_catch(-1,-1);var $86=$85$0;var $87=tempRet0;if((HEAP8[$ref_tmp55+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp55+20>>2])}if((HEAP8[$ref_tmp55]&1)==0){var $exn_slot_4=$86;var $ehselector_slot_4=$87;break}__ZdlPv(HEAP32[$ref_tmp55+8>>2]);var $exn_slot_4=$86;var $ehselector_slot_4=$87;break}if((HEAP8[$ref_tmp55+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp55+20>>2])}if((HEAP8[$ref_tmp55]&1)!=0){__ZdlPv(HEAP32[$ref_tmp55+8>>2])}if((HEAP8[$ref_tmp58]&1)!=0){__ZdlPv(HEAP32[$__data__i_i220>>2])}if((HEAP8[$__size__i50_i192]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp56+8>>2]);STACKTOP=sp;return}else{var $82$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$82$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp58]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i220>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $79$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$79$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$__size__i50_i192]&1)==0){var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$ref_tmp56+8>>2]);var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}else{var $65$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$65$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp39]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i147>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $62$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$62$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$ref_tmp37]&1)==0){var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$__data__i_i124>>2]);var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}else{var $48$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$48$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp22]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i75>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $45$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$45$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$ref_tmp20]&1)==0){var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1;break}__ZdlPv(HEAP32[$__data__i_i52>>2]);var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1}else{label=42}}while(0);if(label==42){var $37$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$37$0;var $ehselector_slot_6=tempRet0}var $ehselector_slot_6;var $exn_slot_6;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_6)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre22DeflectorPlaneAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;r6=r1+48|0;r7=HEAPF32[r6>>2];r8=r1+52|0;r9=HEAPF32[r8>>2];r10=r1+56|0;r11=HEAPF32[r10>>2];r12=(-0-(r7*HEAPF32[r1+36>>2]+r9*HEAPF32[r1+40>>2]+r11*HEAPF32[r1+44>>2]))/Math_sqrt(r7*r7+r9*r9+r11*r11);__ZN4Ogre14ParticleSystem12_getIteratorEv(r5,r2);if(__ZN4Ogre16ParticleIterator3endEv(r5)){STACKTOP=r4;return}r2=r1+60|0;while(1){r1=__ZN4Ogre16ParticleIterator7getNextEv(r5);r11=r1+36|0;r9=HEAPF32[r11>>2];r7=r9*r3;r13=r1+40|0;r14=HEAPF32[r13>>2];r15=r14*r3;r16=r1+44|0;r17=HEAPF32[r16>>2];r18=r17*r3;r19=r1+24|0;r20=HEAPF32[r19>>2];r21=r1+28|0;r22=HEAPF32[r21>>2];r23=r1+32|0;r1=HEAPF32[r23>>2];r24=HEAPF32[r6>>2];r25=HEAPF32[r8>>2];r26=HEAPF32[r10>>2];do{if(r12+((r7+r20)*r24+(r15+r22)*r25+(r18+r1)*r26)<=0){r27=r12+(r20*r24+r22*r25+r1*r26);if(r27<=0){break}r28=(-0-r27)/(r7*r24+r15*r25+r18*r26);r27=r7*r28;r29=r15*r28;r30=r18*r28;r28=HEAPF32[r2>>2];HEAPF32[r19>>2]=r20+r27+r28*(r27-r7);HEAPF32[r21>>2]=r22+r29+r28*(r29-r15);HEAPF32[r23>>2]=r1+r30+r28*(r30-r18);r30=HEAPF32[r6>>2];r28=HEAPF32[r8>>2];r29=HEAPF32[r10>>2];r27=(r9*r30+r14*r28+r17*r29)*2;r31=HEAPF32[r2>>2];HEAPF32[r11>>2]=r31*(r9-r30*r27);HEAPF32[r13>>2]=r31*(r14-r28*r27);HEAPF32[r16>>2]=r31*(r17-r29*r27)}}while(0);if(__ZN4Ogre16ParticleIterator3endEv(r5)){break}}STACKTOP=r4;return}function __ZN4Ogre22DeflectorPlaneAffector13setPlanePointERKNS_7Vector3E(r1,r2){HEAPF32[r1+36>>2]=HEAPF32[r2>>2];HEAPF32[r1+40>>2]=HEAPF32[r2+4>>2];HEAPF32[r1+44>>2]=HEAPF32[r2+8>>2];return}function __ZN4Ogre22DeflectorPlaneAffector14setPlaneNormalERKNS_7Vector3E(r1,r2){HEAPF32[r1+48>>2]=HEAPF32[r2>>2];HEAPF32[r1+52>>2]=HEAPF32[r2+4>>2];HEAPF32[r1+56>>2]=HEAPF32[r2+8>>2];return}function __ZN4Ogre22DeflectorPlaneAffector9setBounceEf(r1,r2){HEAPF32[r1+60>>2]=r2;return}function __ZNK4Ogre22DeflectorPlaneAffector13getPlanePointEv(r1,r2){var r3;r3=r1;r1=r2+36|0;HEAP32[r3>>2]=HEAP32[r1>>2];HEAP32[r3+4>>2]=HEAP32[r1+4>>2];HEAP32[r3+8>>2]=HEAP32[r1+8>>2];return}function __ZNK4Ogre22DeflectorPlaneAffector14getPlaneNormalEv(r1,r2){var r3;r3=r1;r1=r2+48|0;HEAP32[r3>>2]=HEAP32[r1>>2];HEAP32[r3+4>>2]=HEAP32[r1+4>>2];HEAP32[r3+8>>2]=HEAP32[r1+8>>2];return}function __ZNK4Ogre22DeflectorPlaneAffector9getBounceEv(r1){return HEAPF32[r1+60>>2]}function __ZNK4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doGetEPKv(r1,r2,r3){var r4,r5;r2=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r2;r5=r3+36|0;r3=r4;HEAP32[r3>>2]=HEAP32[r5>>2];HEAP32[r3+4>>2]=HEAP32[r5+4>>2];HEAP32[r3+8>>2]=HEAP32[r5+8>>2];__ZN4Ogre15StringConverter8toStringERKNS_7Vector3E(r1,r4);STACKTOP=r2;return}function __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;__ZN4Ogre15StringConverter12parseVector3ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_7Vector3E(r4,r3,__ZN4Ogre7Vector34ZEROE);HEAPF32[r2+36>>2]=HEAPF32[r4>>2];HEAPF32[r2+40>>2]=HEAPF32[r4+4>>2];HEAPF32[r2+44>>2]=HEAPF32[r4+8>>2];STACKTOP=r1;return}function __ZNK4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doGetEPKv(r1,r2,r3){var r4,r5;r2=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r2;r5=r3+48|0;r3=r4;HEAP32[r3>>2]=HEAP32[r5>>2];HEAP32[r3+4>>2]=HEAP32[r5+4>>2];HEAP32[r3+8>>2]=HEAP32[r5+8>>2];__ZN4Ogre15StringConverter8toStringERKNS_7Vector3E(r1,r4);STACKTOP=r2;return}function __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;__ZN4Ogre15StringConverter12parseVector3ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_7Vector3E(r4,r3,__ZN4Ogre7Vector34ZEROE);HEAPF32[r2+48>>2]=HEAPF32[r4>>2];HEAPF32[r2+52>>2]=HEAPF32[r4+4>>2];HEAPF32[r2+56>>2]=HEAPF32[r4+8>>2];STACKTOP=r1;return}function __ZNK4Ogre22DeflectorPlaneAffector9CmdBounce5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+60>>2],6,0,32,0);return}function __ZN4Ogre22DeflectorPlaneAffector9CmdBounce5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+60>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22DeflectorPlaneAffector9CmdBounceD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22DeflectorPlaneAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre22DeflectorPlaneAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD1Ev(r1){return}function __ZN4Ogre27DirectionRandomiserAffector8CmdScopeD1Ev(r1){return}function __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD1Ev(r1){return}function __ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+208|0;var $ref_tmp=sp;var $ref_tmp11=sp+16;var $ref_tmp12=sp+48;var $ref_tmp14=sp+64;var $ref_tmp28=sp+80;var $ref_tmp29=sp+112;var $ref_tmp31=sp+128;var $ref_tmp47=sp+144;var $ref_tmp48=sp+176;var $ref_tmp50=sp+192;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre27DirectionRandomiserAffectorE+8;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str55|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){HEAPF32[$this+36>>2]=1;HEAPF32[$this+40>>2]=1;HEAP8[$this+44|0]=0;var $call_i_i_i12=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=41;break}var $3=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i12;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=27;_memcpy($call_i_i_i12,__str356|0,27)|0;HEAP8[$call_i_i_i12+27|0]=0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($3,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $34$0=___cxa_find_matching_catch(-1,-1);var $35=$34$0;var $36=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_6=$35;var $ehselector_slot_6=$36;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_6=$35;var $ehselector_slot_6=$36;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call5){STACKTOP=sp;return}var $6=HEAP32[$this+16>>2];var $__s2_i_i31=$ref_tmp12;var $__size__i50_i32=$ref_tmp12;HEAP8[$__size__i50_i32]=20;_memcpy($__s2_i_i31+1|0,__str457|0,10)|0;HEAP8[$__s2_i_i31+11|0]=0;var $call_i_i_i69=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i60=$ref_tmp14+8|0;HEAP32[$__data__i_i60>>2]=$call_i_i_i69;HEAP32[$ref_tmp14>>2]=81;HEAP32[$ref_tmp14+4>>2]=67;_memcpy($call_i_i_i69,__str558|0,67)|0;HEAP8[$call_i_i_i69+67|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp11,$ref_tmp12,$ref_tmp14,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp11,__ZN4Ogre27DirectionRandomiserAffector15msRandomnessCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $45$0=___cxa_find_matching_catch(-1,-1);var $46=$45$0;var $47=tempRet0;if((HEAP8[$ref_tmp11+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp11+20>>2])}if((HEAP8[$ref_tmp11]&1)==0){var $exn_slot_0=$46;var $ehselector_slot_0=$47;break}__ZdlPv(HEAP32[$ref_tmp11+8>>2]);var $exn_slot_0=$46;var $ehselector_slot_0=$47;break}if((HEAP8[$ref_tmp11+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp11+20>>2])}if((HEAP8[$ref_tmp11]&1)!=0){__ZdlPv(HEAP32[$ref_tmp11+8>>2])}if((HEAP8[$ref_tmp14]&1)!=0){__ZdlPv(HEAP32[$__data__i_i60>>2])}if((HEAP8[$__size__i50_i32]&1)!=0){__ZdlPv(HEAP32[$ref_tmp12+8>>2])}var $__s2_i_i90=$ref_tmp29;var $__size__i50_i91=$ref_tmp29;HEAP8[$__size__i50_i91]=10;var $arrayidx_i_i92=$__s2_i_i90+1|0;HEAP8[$arrayidx_i_i92]=HEAP8[__str659|0];HEAP8[$arrayidx_i_i92+1|0]=HEAP8[__str659+1|0];HEAP8[$arrayidx_i_i92+2|0]=HEAP8[__str659+2|0];HEAP8[$arrayidx_i_i92+3|0]=HEAP8[__str659+3|0];HEAP8[$arrayidx_i_i92+4|0]=HEAP8[__str659+4|0];HEAP8[$__s2_i_i90+6|0]=0;var $call_i_i_i128=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i119=$ref_tmp31+8|0;HEAP32[$__data__i_i119>>2]=$call_i_i_i128;HEAP32[$ref_tmp31>>2]=49;HEAP32[$ref_tmp31+4>>2]=46;_memcpy($call_i_i_i128,__str760|0,46)|0;HEAP8[$call_i_i_i128+46|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp28,$ref_tmp29,$ref_tmp31,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp28,__ZN4Ogre27DirectionRandomiserAffector10msScopeCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $62$0=___cxa_find_matching_catch(-1,-1);var $63=$62$0;var $64=tempRet0;if((HEAP8[$ref_tmp28+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp28+20>>2])}if((HEAP8[$ref_tmp28]&1)==0){var $exn_slot_2=$63;var $ehselector_slot_2=$64;break}__ZdlPv(HEAP32[$ref_tmp28+8>>2]);var $exn_slot_2=$63;var $ehselector_slot_2=$64;break}if((HEAP8[$ref_tmp28+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp28+20>>2])}if((HEAP8[$ref_tmp28]&1)!=0){__ZdlPv(HEAP32[$ref_tmp28+8>>2])}if((HEAP8[$ref_tmp31]&1)!=0){__ZdlPv(HEAP32[$__data__i_i119>>2])}if((HEAP8[$__size__i50_i91]&1)!=0){__ZdlPv(HEAP32[$ref_tmp29+8>>2])}var $call_i_i_i178=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=41;break L1}var $__data__i_i169=$ref_tmp48+8|0;HEAP32[$__data__i_i169>>2]=$call_i_i_i178;HEAP32[$ref_tmp48>>2]=17;HEAP32[$ref_tmp48+4>>2]=13;_memcpy($call_i_i_i178,__str861|0,13)|0;HEAP8[$call_i_i_i178+13|0]=0;var $call_i_i_i201=(function(){try{__THREW__=0;return __Znwj(64)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i192=$ref_tmp50+8|0;HEAP32[$__data__i_i192>>2]=$call_i_i_i201;HEAP32[$ref_tmp50>>2]=65;HEAP32[$ref_tmp50+4>>2]=60;_memcpy($call_i_i_i201,__str962|0,60)|0;HEAP8[$call_i_i_i201+60|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp47,$ref_tmp48,$ref_tmp50,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp47,__ZN4Ogre27DirectionRandomiserAffector17msKeepVelocityCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $79$0=___cxa_find_matching_catch(-1,-1);var $80=$79$0;var $81=tempRet0;if((HEAP8[$ref_tmp47+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp47+20>>2])}if((HEAP8[$ref_tmp47]&1)==0){var $exn_slot_4=$80;var $ehselector_slot_4=$81;break}__ZdlPv(HEAP32[$ref_tmp47+8>>2]);var $exn_slot_4=$80;var $ehselector_slot_4=$81;break}if((HEAP8[$ref_tmp47+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp47+20>>2])}if((HEAP8[$ref_tmp47]&1)!=0){__ZdlPv(HEAP32[$ref_tmp47+8>>2])}if((HEAP8[$ref_tmp50]&1)!=0){__ZdlPv(HEAP32[$__data__i_i192>>2])}if((HEAP8[$ref_tmp48]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i169>>2]);STACKTOP=sp;return}else{var $76$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$76$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp50]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i192>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $73$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$73$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$ref_tmp48]&1)==0){var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$__data__i_i169>>2]);var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}else{var $59$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$59$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp31]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i119>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $56$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$56$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$__size__i50_i91]&1)==0){var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$ref_tmp29+8>>2]);var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}else{var $42$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$42$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp14]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i60>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $39$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$39$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$__size__i50_i32]&1)==0){var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1;break}__ZdlPv(HEAP32[$ref_tmp12+8>>2]);var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1}else{label=41}}while(0);if(label==41){var $31$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$31$0;var $ehselector_slot_6=tempRet0}var $ehselector_slot_6;var $exn_slot_6;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_6)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre27DirectionRandomiserAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+16|0;r6=r5;__ZN4Ogre14ParticleSystem12_getIteratorEv(r6,r2);if(__ZN4Ogre16ParticleIterator3endEv(r6)){STACKTOP=r5;return}r2=r1+40|0;r7=r1+44|0;r8=r1+36|0;r1=0;L4:while(1){while(1){r9=__ZN4Ogre16ParticleIterator7getNextEv(r6);r10=HEAPF32[r2>>2];if(r10>__ZN4Ogre4Math10UnitRandomEv()){r11=r9+36|0;r10=HEAPF32[r11>>2];r12=r9+40|0;r13=HEAPF32[r12>>2];r14=r9+44|0;r9=HEAPF32[r14>>2];r15=r10*r10+r13*r13+r9*r9;if(r15>=1e-12){break}}if(__ZN4Ogre16ParticleIterator3endEv(r6)){r4=14;break L4}}if((HEAP8[r7]&1)==0){r16=r1}else{r16=Math_sqrt(r15)}r9=HEAPF32[r8>>2];r13=__ZN4Ogre4Math11RangeRandomEff(-0-r9,r9)*r3;r9=HEAPF32[r8>>2];r10=__ZN4Ogre4Math11RangeRandomEff(-0-r9,r9)*r3;r9=HEAPF32[r8>>2];r17=__ZN4Ogre4Math11RangeRandomEff(-0-r9,r9)*r3;r9=r13+HEAPF32[r11>>2];HEAPF32[r11>>2]=r9;r13=r10+HEAPF32[r12>>2];HEAPF32[r12>>2]=r13;r10=r17+HEAPF32[r14>>2];HEAPF32[r14>>2]=r10;if((HEAP8[r7]&1)!=0){r17=r16/Math_sqrt(r10*r10+(r9*r9+r13*r13));HEAPF32[r11>>2]=r9*r17;HEAPF32[r12>>2]=r17*r13;HEAPF32[r14>>2]=r17*r10}if(__ZN4Ogre16ParticleIterator3endEv(r6)){r4=15;break}else{r1=r16}}if(r4==14){STACKTOP=r5;return}else if(r4==15){STACKTOP=r5;return}}function __ZN4Ogre27DirectionRandomiserAffector13setRandomnessEf(r1,r2){HEAPF32[r1+36>>2]=r2;return}function __ZN4Ogre27DirectionRandomiserAffector8setScopeEf(r1,r2){HEAPF32[r1+40>>2]=r2;return}function __ZN4Ogre27DirectionRandomiserAffector15setKeepVelocityEb(r1,r2){HEAP8[r1+44|0]=r2&1;return}function __ZNK4Ogre27DirectionRandomiserAffector13getRandomnessEv(r1){return HEAPF32[r1+36>>2]}function __ZNK4Ogre27DirectionRandomiserAffector8getScopeEv(r1){return HEAPF32[r1+40>>2]}function __ZNK4Ogre27DirectionRandomiserAffector15getKeepVelocityEv(r1){return(HEAP8[r1+44|0]&1)!=0}function __ZNK4Ogre27DirectionRandomiserAffector13CmdRandomness5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+36>>2],6,0,32,0);return}function __ZN4Ogre27DirectionRandomiserAffector13CmdRandomness5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+36>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre27DirectionRandomiserAffector8CmdScope5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+40>>2],6,0,32,0);return}function __ZN4Ogre27DirectionRandomiserAffector8CmdScope5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+40>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZNK4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEbb(r1,(HEAP8[r3+44|0]&1)!=0,0);return}function __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAP8[r2+44|0]=__ZN4Ogre15StringConverter9parseBoolERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEb(r3,0)&1;return}function __ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre27DirectionRandomiserAffector8CmdScopeD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre27DirectionRandomiserAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre27DirectionRandomiserAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;var $1=$this|0;__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE($1,$psys);HEAP32[$this>>2]=__ZTVN4Ogre16EllipsoidEmitterE+8;var $__s2_i_i=$ref_tmp;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=18;_memcpy($__s2_i_i+1|0,__str66|0,9)|0;HEAP8[$__s2_i_i+10|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($0,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){if((HEAP8[$__size__i50_i]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp+8>>2]);STACKTOP=sp;return}var $5$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($5$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre16EllipsoidEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6,r7,r8;__ZN4Ogre8Particle15resetDimensionsEv(r2);while(1){r3=__ZN4Ogre4Math15SymmetricRandomEv();r4=__ZN4Ogre4Math15SymmetricRandomEv();r5=__ZN4Ogre4Math15SymmetricRandomEv();if(r3*r3+r4*r4+r5*r5<=1){break}}r6=r1|0;r7=r3*HEAPF32[r1+288>>2]+HEAPF32[r1+108>>2]+r4*HEAPF32[r1+300>>2]+r5*HEAPF32[r1+312>>2];r8=r3*HEAPF32[r1+292>>2]+HEAPF32[r1+112>>2]+r4*HEAPF32[r1+304>>2]+r5*HEAPF32[r1+316>>2];HEAPF32[r2+24>>2]=r3*HEAPF32[r1+284>>2]+HEAPF32[r1+104>>2]+r4*HEAPF32[r1+296>>2]+r5*HEAPF32[r1+308>>2];HEAPF32[r2+28>>2]=r7;HEAPF32[r2+32>>2]=r8;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r6,r2+48|0);r8=r1;r7=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+24>>2]](r6,r7);FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+28>>2]](r6,r7);r7=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r6);HEAPF32[r2+68>>2]=r7;HEAPF32[r2+64>>2]=r7;return}function __ZN4Ogre16EllipsoidEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre16EllipsoidEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD1Ev(r1){return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD1Ev(r1){return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD1Ev(r1){return}function __ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+208|0;var $ref_tmp=sp;var $ref_tmp9=sp+16;var $ref_tmp10=sp+48;var $ref_tmp12=sp+64;var $ref_tmp26=sp+80;var $ref_tmp27=sp+112;var $ref_tmp29=sp+128;var $ref_tmp45=sp+144;var $ref_tmp46=sp+176;var $ref_tmp48=sp+192;__ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE($this|0,$psys);HEAP32[$this>>2]=__ZTVN4Ogre22HollowEllipsoidEmitterE+8;var $call_i_i_i11=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();L1:do{if(!__THREW__){var $2=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i11;HEAP32[$ref_tmp>>2]=17;HEAP32[$ref_tmp+4>>2]=15;_memcpy($call_i_i_i11,__str67|0,15)|0;HEAP8[$call_i_i_i11+15|0]=0;var $call=(function(){try{__THREW__=0;return __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($2,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $33$0=___cxa_find_matching_catch(-1,-1);var $34=$33$0;var $35=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_6=$34;var $ehselector_slot_6=$35;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_6=$34;var $ehselector_slot_6=$35;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call){var $x13_i=$this+320|0;HEAPF32[$x13_i>>2]=.5;var $y15_i=$this+324|0;HEAPF32[$y15_i>>2]=.5;var $z17_i=$this+328|0;HEAPF32[$z17_i>>2]=.5;STACKTOP=sp;return}var $5=HEAP32[$this+16>>2];var $call_i_i_i34=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break}var $__data__i_i25=$ref_tmp10+8|0;HEAP32[$__data__i_i25>>2]=$call_i_i_i34;HEAP32[$ref_tmp10>>2]=17;HEAP32[$ref_tmp10+4>>2]=11;_memcpy($call_i_i_i34,__str368|0,11)|0;HEAP8[$call_i_i_i34+11|0]=0;var $call_i_i_i57=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i48=$ref_tmp12+8|0;HEAP32[$__data__i_i48>>2]=$call_i_i_i57;HEAP32[$ref_tmp12>>2]=81;HEAP32[$ref_tmp12+4>>2]=72;_memcpy($call_i_i_i57,__str469|0,72)|0;HEAP8[$call_i_i_i57+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp9,$ref_tmp10,$ref_tmp12,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($5,$ref_tmp9,__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerXE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $44$0=___cxa_find_matching_catch(-1,-1);var $45=$44$0;var $46=tempRet0;if((HEAP8[$ref_tmp9+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp9+20>>2])}if((HEAP8[$ref_tmp9]&1)==0){var $exn_slot_0=$45;var $ehselector_slot_0=$46;break}__ZdlPv(HEAP32[$ref_tmp9+8>>2]);var $exn_slot_0=$45;var $ehselector_slot_0=$46;break}if((HEAP8[$ref_tmp9+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp9+20>>2])}if((HEAP8[$ref_tmp9]&1)!=0){__ZdlPv(HEAP32[$ref_tmp9+8>>2])}if((HEAP8[$ref_tmp12]&1)!=0){__ZdlPv(HEAP32[$__data__i_i48>>2])}if((HEAP8[$ref_tmp10]&1)!=0){__ZdlPv(HEAP32[$__data__i_i25>>2])}var $call_i_i_i93=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break L1}var $__data__i_i84=$ref_tmp27+8|0;HEAP32[$__data__i_i84>>2]=$call_i_i_i93;HEAP32[$ref_tmp27>>2]=17;HEAP32[$ref_tmp27+4>>2]=12;_memcpy($call_i_i_i93,__str570|0,12)|0;HEAP8[$call_i_i_i93+12|0]=0;var $call_i_i_i116=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i107=$ref_tmp29+8|0;HEAP32[$__data__i_i107>>2]=$call_i_i_i116;HEAP32[$ref_tmp29>>2]=81;HEAP32[$ref_tmp29+4>>2]=72;_memcpy($call_i_i_i116,__str469|0,72)|0;HEAP8[$call_i_i_i116+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp26,$ref_tmp27,$ref_tmp29,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($5,$ref_tmp26,__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerYE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $61$0=___cxa_find_matching_catch(-1,-1);var $62=$61$0;var $63=tempRet0;if((HEAP8[$ref_tmp26+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp26+20>>2])}if((HEAP8[$ref_tmp26]&1)==0){var $exn_slot_2=$62;var $ehselector_slot_2=$63;break}__ZdlPv(HEAP32[$ref_tmp26+8>>2]);var $exn_slot_2=$62;var $ehselector_slot_2=$63;break}if((HEAP8[$ref_tmp26+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp26+20>>2])}if((HEAP8[$ref_tmp26]&1)!=0){__ZdlPv(HEAP32[$ref_tmp26+8>>2])}if((HEAP8[$ref_tmp29]&1)!=0){__ZdlPv(HEAP32[$__data__i_i107>>2])}if((HEAP8[$ref_tmp27]&1)!=0){__ZdlPv(HEAP32[$__data__i_i84>>2])}var $call_i_i_i166=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=42;break L1}var $__data__i_i157=$ref_tmp46+8|0;HEAP32[$__data__i_i157>>2]=$call_i_i_i166;HEAP32[$ref_tmp46>>2]=17;HEAP32[$ref_tmp46+4>>2]=11;_memcpy($call_i_i_i166,__str671|0,11)|0;HEAP8[$call_i_i_i166+11|0]=0;var $call_i_i_i189=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i180=$ref_tmp48+8|0;HEAP32[$__data__i_i180>>2]=$call_i_i_i189;HEAP32[$ref_tmp48>>2]=81;HEAP32[$ref_tmp48+4>>2]=72;_memcpy($call_i_i_i189,__str469|0,72)|0;HEAP8[$call_i_i_i189+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp45,$ref_tmp46,$ref_tmp48,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($5,$ref_tmp45,__ZN4Ogre22HollowEllipsoidEmitter11msCmdInnerZE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $78$0=___cxa_find_matching_catch(-1,-1);var $79=$78$0;var $80=tempRet0;if((HEAP8[$ref_tmp45+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp45+20>>2])}if((HEAP8[$ref_tmp45]&1)==0){var $exn_slot_4=$79;var $ehselector_slot_4=$80;break}__ZdlPv(HEAP32[$ref_tmp45+8>>2]);var $exn_slot_4=$79;var $ehselector_slot_4=$80;break}if((HEAP8[$ref_tmp45+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp45+20>>2])}if((HEAP8[$ref_tmp45]&1)!=0){__ZdlPv(HEAP32[$ref_tmp45+8>>2])}if((HEAP8[$ref_tmp48]&1)!=0){__ZdlPv(HEAP32[$__data__i_i180>>2])}if((HEAP8[$ref_tmp46]&1)==0){var $x13_i=$this+320|0;HEAPF32[$x13_i>>2]=.5;var $y15_i=$this+324|0;HEAPF32[$y15_i>>2]=.5;var $z17_i=$this+328|0;HEAPF32[$z17_i>>2]=.5;STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i157>>2]);var $x13_i=$this+320|0;HEAPF32[$x13_i>>2]=.5;var $y15_i=$this+324|0;HEAPF32[$y15_i>>2]=.5;var $z17_i=$this+328|0;HEAPF32[$z17_i>>2]=.5;STACKTOP=sp;return}else{var $75$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$75$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp48]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i180>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $72$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$72$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$ref_tmp46]&1)==0){var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$__data__i_i157>>2]);var $exn_slot_6=$exn_slot_5;var $ehselector_slot_6=$ehselector_slot_5;break L1}else{var $58$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$58$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp29]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i107>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $55$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$55$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$ref_tmp27]&1)==0){var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$__data__i_i84>>2]);var $exn_slot_6=$exn_slot_3;var $ehselector_slot_6=$ehselector_slot_3;break L1}else{var $41$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$41$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp12]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i48>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $38$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$38$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$ref_tmp10]&1)==0){var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1;break}__ZdlPv(HEAP32[$__data__i_i25>>2]);var $exn_slot_6=$exn_slot_1;var $ehselector_slot_6=$ehselector_slot_1}else{label=42}}while(0);if(label==42){var $30$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$30$0;var $ehselector_slot_6=tempRet0}var $ehselector_slot_6;var $exn_slot_6;var $89=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($89)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_6)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff(r1,r2,r3,r4){if(r2>0&r2<1&r3>0&r3<1&r4>0&r4<1){HEAPF32[r1+320>>2]=r2;HEAPF32[r1+324>>2]=r3;HEAPF32[r1+328>>2]=r4;return}else{___assert_fail(__str772|0,__str873|0,120,___func____ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff|0)}}function __ZN4Ogre22HollowEllipsoidEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6,r7,r8;__ZN4Ogre8Particle15resetDimensionsEv(r2);r3=__ZN4Ogre4Math11RangeRandomEff(0,HEAPF32[__ZN4Ogre4Math6TWO_PIE>>2]);r4=__ZN4Ogre4Math11RangeRandomEff(0,HEAPF32[__ZN4Ogre4Math2PIE>>2]);r5=__ZN4Ogre4Math11RangeRandomEff(HEAPF32[r1+320>>2],1);r6=__ZN4Ogre4Math11RangeRandomEff(HEAPF32[r1+324>>2],1);r7=r4;r4=Math_sin(r7);r8=r3;r3=r4*r5*Math_cos(r8);r5=r4*r6*Math_sin(r8);r8=__ZN4Ogre4Math11RangeRandomEff(HEAPF32[r1+328>>2],1)*Math_cos(r7);r7=r1|0;r6=r3*HEAPF32[r1+288>>2]+HEAPF32[r1+108>>2]+r5*HEAPF32[r1+300>>2]+r8*HEAPF32[r1+312>>2];r4=r3*HEAPF32[r1+292>>2]+HEAPF32[r1+112>>2]+r5*HEAPF32[r1+304>>2]+r8*HEAPF32[r1+316>>2];HEAPF32[r2+24>>2]=HEAPF32[r1+284>>2]*r3+HEAPF32[r1+104>>2]+r5*HEAPF32[r1+296>>2]+r8*HEAPF32[r1+308>>2];HEAPF32[r2+28>>2]=r6;HEAPF32[r2+32>>2]=r4;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r7,r2+48|0);r4=r1;r6=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+24>>2]](r7,r6);FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+28>>2]](r7,r6);r6=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r7);HEAPF32[r2+68>>2]=r6;HEAPF32[r2+64>>2]=r6;return}function __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf(r1,r2){if(r2>0&r2<1){HEAPF32[r1+320>>2]=r2;return}else{___assert_fail(__str974|0,__str873|0,129,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf|0)}}function __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf(r1,r2){if(r2>0&r2<1){HEAPF32[r1+324>>2]=r2;return}else{___assert_fail(__str1075|0,__str873|0,136,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf|0)}}function __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf(r1,r2){if(r2>0&r2<1){HEAPF32[r1+328>>2]=r2;return}else{___assert_fail(__str1176|0,__str873|0,143,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf|0)}}function __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeXEv(r1){return HEAPF32[r1+320>>2]}function __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeYEv(r1){return HEAPF32[r1+324>>2]}function __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeZEv(r1){return HEAPF32[r1+328>>2]}function __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerX5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+320>>2],6,0,32,0);return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);if(r1>0&r1<1){HEAPF32[r2+320>>2]=r1;return}else{___assert_fail(__str974|0,__str873|0,129,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf|0)}}function __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerY5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+324>>2],6,0,32,0);return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);if(r1>0&r1<1){HEAPF32[r2+324>>2]=r1;return}else{___assert_fail(__str1075|0,__str873|0,136,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf|0)}}function __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+328>>2],6,0,32,0);return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);if(r1>0&r1<1){HEAPF32[r2+328>>2]=r1;return}else{___assert_fail(__str1176|0,__str873|0,143,___func____ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf|0)}}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre22HollowEllipsoidEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre22HollowEllipsoidEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19LinearForceAffector14CmdForceVectorD1Ev(r1){return}function __ZN4Ogre19LinearForceAffector11CmdForceAppD1Ev(r1){return}function __ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+144|0;var $ref_tmp=sp;var $ref_tmp15=sp+16;var $ref_tmp16=sp+48;var $ref_tmp18=sp+64;var $ref_tmp32=sp+80;var $ref_tmp33=sp+112;var $ref_tmp35=sp+128;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre19LinearForceAffectorE+8;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str80|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){HEAP32[$this+48>>2]=1;HEAPF32[$this+44>>2]=0;HEAPF32[$this+36>>2]=0;HEAPF32[$this+40>>2]=-100;var $call_i_i_i15=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=31;break}var $3=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i15;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=19;_memcpy($call_i_i_i15,__str281|0,19)|0;HEAP8[$call_i_i_i15+19|0]=0;var $call9=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($3,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $26$0=___cxa_find_matching_catch(-1,-1);var $27=$26$0;var $28=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_4=$27;var $ehselector_slot_4=$28;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_4=$27;var $ehselector_slot_4=$28;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call9){STACKTOP=sp;return}var $6=HEAP32[$this+16>>2];var $call_i_i_i43=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=31;break}var $__data__i_i34=$ref_tmp16+8|0;HEAP32[$__data__i_i34>>2]=$call_i_i_i43;HEAP32[$ref_tmp16>>2]=17;HEAP32[$ref_tmp16+4>>2]=12;_memcpy($call_i_i_i43,__str382|0,12)|0;HEAP8[$call_i_i_i43+12|0]=0;var $call_i_i_i66=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i57=$ref_tmp18+8|0;HEAP32[$__data__i_i57>>2]=$call_i_i_i66;HEAP32[$ref_tmp18>>2]=49;HEAP32[$ref_tmp18+4>>2]=43;_memcpy($call_i_i_i66,__str483|0,43)|0;HEAP8[$call_i_i_i66+43|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp15,$ref_tmp16,$ref_tmp18,9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp15,__ZN4Ogre19LinearForceAffector16msForceVectorCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $37$0=___cxa_find_matching_catch(-1,-1);var $38=$37$0;var $39=tempRet0;if((HEAP8[$ref_tmp15+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp15+20>>2])}if((HEAP8[$ref_tmp15]&1)==0){var $exn_slot_0=$38;var $ehselector_slot_0=$39;break}__ZdlPv(HEAP32[$ref_tmp15+8>>2]);var $exn_slot_0=$38;var $ehselector_slot_0=$39;break}if((HEAP8[$ref_tmp15+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp15+20>>2])}if((HEAP8[$ref_tmp15]&1)!=0){__ZdlPv(HEAP32[$ref_tmp15+8>>2])}if((HEAP8[$ref_tmp18]&1)!=0){__ZdlPv(HEAP32[$__data__i_i57>>2])}if((HEAP8[$ref_tmp16]&1)!=0){__ZdlPv(HEAP32[$__data__i_i34>>2])}var $call_i_i_i115=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=31;break L1}var $__data__i_i106=$ref_tmp33+8|0;HEAP32[$__data__i_i106>>2]=$call_i_i_i115;HEAP32[$ref_tmp33>>2]=33;HEAP32[$ref_tmp33+4>>2]=17;_memcpy($call_i_i_i115,__str584|0,17)|0;HEAP8[$call_i_i_i115+17|0]=0;var $call_i_i_i138=(function(){try{__THREW__=0;return __Znwj(48)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i129=$ref_tmp35+8|0;HEAP32[$__data__i_i129>>2]=$call_i_i_i138;HEAP32[$ref_tmp35>>2]=49;HEAP32[$ref_tmp35+4>>2]=43;_memcpy($call_i_i_i138,__str685|0,43)|0;HEAP8[$call_i_i_i138+43|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp32,$ref_tmp33,$ref_tmp35,8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp32,__ZN4Ogre19LinearForceAffector13msForceAppCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $54$0=___cxa_find_matching_catch(-1,-1);var $55=$54$0;var $56=tempRet0;if((HEAP8[$ref_tmp32+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp32+20>>2])}if((HEAP8[$ref_tmp32]&1)==0){var $exn_slot_2=$55;var $ehselector_slot_2=$56;break}__ZdlPv(HEAP32[$ref_tmp32+8>>2]);var $exn_slot_2=$55;var $ehselector_slot_2=$56;break}if((HEAP8[$ref_tmp32+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp32+20>>2])}if((HEAP8[$ref_tmp32]&1)!=0){__ZdlPv(HEAP32[$ref_tmp32+8>>2])}if((HEAP8[$ref_tmp35]&1)!=0){__ZdlPv(HEAP32[$__data__i_i129>>2])}if((HEAP8[$ref_tmp33]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i106>>2]);STACKTOP=sp;return}else{var $51$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$51$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp35]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i129>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $48$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$48$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$ref_tmp33]&1)==0){var $exn_slot_4=$exn_slot_3;var $ehselector_slot_4=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$__data__i_i106>>2]);var $exn_slot_4=$exn_slot_3;var $ehselector_slot_4=$ehselector_slot_3;break L1}else{var $34$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$34$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp18]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i57>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $31$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$31$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$ref_tmp16]&1)==0){var $exn_slot_4=$exn_slot_1;var $ehselector_slot_4=$ehselector_slot_1;break}__ZdlPv(HEAP32[$__data__i_i34>>2]);var $exn_slot_4=$exn_slot_1;var $ehselector_slot_4=$ehselector_slot_1}else{label=31}}while(0);if(label==31){var $23$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$23$0;var $ehselector_slot_4=tempRet0}var $ehselector_slot_4;var $exn_slot_4;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_4)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre19LinearForceAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;__ZN4Ogre14ParticleSystem12_getIteratorEv(r5,r2);r2=r1+48|0;if((HEAP32[r2>>2]|0)==1){r6=HEAPF32[r1+36>>2]*r3;r7=HEAPF32[r1+40>>2]*r3;r8=HEAPF32[r1+44>>2]*r3}else{r6=HEAPF32[__ZN4Ogre7Vector34ZEROE>>2];r7=HEAPF32[__ZN4Ogre7Vector34ZEROE+4>>2];r8=HEAPF32[__ZN4Ogre7Vector34ZEROE+8>>2]}if(__ZN4Ogre16ParticleIterator3endEv(r5)){STACKTOP=r4;return}r3=r1+36|0;r9=r1+40|0;r10=r1+44|0;while(1){r1=__ZN4Ogre16ParticleIterator7getNextEv(r5);r11=r1+36|0;r12=HEAPF32[r11>>2];if((HEAP32[r2>>2]|0)==1){HEAPF32[r11>>2]=r6+r12;r13=r1+40|0;HEAPF32[r13>>2]=r7+HEAPF32[r13>>2];r13=r1+44|0;HEAPF32[r13>>2]=r8+HEAPF32[r13>>2]}else{r13=r1+40|0;r14=r1+44|0;r1=(HEAPF32[r13>>2]+HEAPF32[r9>>2])*.5;r15=(HEAPF32[r14>>2]+HEAPF32[r10>>2])*.5;HEAPF32[r11>>2]=(r12+HEAPF32[r3>>2])*.5;HEAPF32[r13>>2]=r1;HEAPF32[r14>>2]=r15}if(__ZN4Ogre16ParticleIterator3endEv(r5)){break}}STACKTOP=r4;return}function __ZN4Ogre19LinearForceAffector14setForceVectorERKNS_7Vector3E(r1,r2){HEAPF32[r1+36>>2]=HEAPF32[r2>>2];HEAPF32[r1+40>>2]=HEAPF32[r2+4>>2];HEAPF32[r1+44>>2]=HEAPF32[r2+8>>2];return}function __ZN4Ogre19LinearForceAffector19setForceApplicationENS0_16ForceApplicationE(r1,r2){HEAP32[r1+48>>2]=r2;return}function __ZNK4Ogre19LinearForceAffector14getForceVectorEv(r1,r2){var r3;r3=r1;r1=r2+36|0;HEAP32[r3>>2]=HEAP32[r1>>2];HEAP32[r3+4>>2]=HEAP32[r1+4>>2];HEAP32[r3+8>>2]=HEAP32[r1+8>>2];return}function __ZNK4Ogre19LinearForceAffector19getForceApplicationEv(r1){return HEAP32[r1+48>>2]}function __ZNK4Ogre19LinearForceAffector14CmdForceVector5doGetEPKv(r1,r2,r3){var r4,r5;r2=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r2;r5=r3+36|0;r3=r4;HEAP32[r3>>2]=HEAP32[r5>>2];HEAP32[r3+4>>2]=HEAP32[r5+4>>2];HEAP32[r3+8>>2]=HEAP32[r5+8>>2];__ZN4Ogre15StringConverter8toStringERKNS_7Vector3E(r1,r4);STACKTOP=r2;return}function __ZN4Ogre19LinearForceAffector14CmdForceVector5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;__ZN4Ogre15StringConverter12parseVector3ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_7Vector3E(r4,r3,__ZN4Ogre7Vector34ZEROE);HEAPF32[r2+36>>2]=HEAPF32[r4>>2];HEAPF32[r2+40>>2]=HEAPF32[r4+4>>2];HEAPF32[r2+44>>2]=HEAPF32[r4+8>>2];STACKTOP=r1;return}function __ZNK4Ogre19LinearForceAffector11CmdForceApp5doGetEPKv(r1,r2,r3){r2=HEAP32[r3+48>>2];if((r2|0)==0){HEAP8[r1]=14;r3=r1+1|0;HEAP8[r3]=HEAP8[__str786|0];HEAP8[r3+1|0]=HEAP8[__str786+1|0];HEAP8[r3+2|0]=HEAP8[__str786+2|0];HEAP8[r3+3|0]=HEAP8[__str786+3|0];HEAP8[r3+4|0]=HEAP8[__str786+4|0];HEAP8[r3+5|0]=HEAP8[__str786+5|0];HEAP8[r3+6|0]=HEAP8[__str786+6|0];HEAP8[r1+8|0]=0;return}else if((r2|0)==1){HEAP8[r1]=6;r2=r1+1|0;HEAP8[r2]=HEAP8[__str887|0];HEAP8[r2+1|0]=HEAP8[__str887+1|0];HEAP8[r2+2|0]=HEAP8[__str887+2|0];HEAP8[r1+4|0]=0;return}else{HEAP8[r1]=0;HEAP8[r1+1|0]=0;return}}function __ZN4Ogre19LinearForceAffector11CmdForceApp5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r1=r3;r4=HEAP8[r3];r5=r4&255;r6=(r5&1|0)==0;if(r6){r7=r5>>>1}else{r7=HEAP32[r3+4>>2]}r8=(r4&1)==0;if(r8){r9=r1+1|0}else{r9=HEAP32[r3+8>>2]}r4=r7>>>0>7;do{if((_memcmp(r9,__str786|0,r4?7:r7)|0)==0){if(!(r7>>>0>6&(r4^1))){break}HEAP32[r2+48>>2]=0;return}}while(0);if(r6){r10=r5>>>1}else{r10=HEAP32[r3+4>>2]}if(r8){r11=r1+1|0}else{r11=HEAP32[r3+8>>2]}r3=r10>>>0>3;if((_memcmp(r11,__str887|0,r3?3:r10)|0)!=0){return}if(!(r10>>>0>2&(r3^1))){return}HEAP32[r2+48>>2]=1;return}function __ZN4Ogre19LinearForceAffector14CmdForceVectorD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19LinearForceAffector11CmdForceAppD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre19LinearForceAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre19LinearForceAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function _dllStartPlugin(){var $call_i_i1=(function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(36,0,0,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $0=$call_i_i1;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleFXPluginC2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[__ZN4Ogre6pluginE>>2]=$0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre4Root12getSingletonEv()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}var $2=HEAP32[__ZN4Ogre6pluginE>>2]|0;((function(){try{__THREW__=0;return __ZN4Ogre4Root13installPluginEPNS_6PluginE($call5,$2)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}return}else{var $5$0=___cxa_find_matching_catch(-1,-1);var $6=$5$0;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_0=$6;var $exn_slot_0;___cxa_call_unexpected($exn_slot_0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}}}while(0);var $3$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$3$0;var $exn_slot_0;___cxa_call_unexpected($exn_slot_0)}function _dllStopPlugin(){var r1;r1=__ZN4Ogre4Root12getSingletonEv();__ZN4Ogre4Root15uninstallPluginEPNS_6PluginE(r1,HEAP32[__ZN4Ogre6pluginE>>2]|0);r1=HEAP32[__ZN4Ogre6pluginE>>2];if((r1|0)==0){return}FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+4>>2]](r1);return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(r1){if((HEAP8[r1]&1)==0){return}__ZdlPv(HEAP32[r1+8>>2]);return}function __ZN4Ogre16ParticleFXPluginC2Ev(r1){HEAP32[r1>>2]=__ZTVN4Ogre16ParticleFXPluginE+8;HEAP32[r1+4>>2]=0;HEAP32[r1+8>>2]=0;HEAP32[r1+12>>2]=0;HEAP32[r1+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r1+20>>2]=0;HEAP32[r1+24>>2]=0;HEAP32[r1+28>>2]=0;HEAP32[r1+32>>2]=__ZTVN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;return}function __ZNK4Ogre16ParticleFXPlugin7getNameEv(r1){return __ZN4OgreL11sPluginNameE}function __ZN4Ogre16ParticleFXPlugin7installEv(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23;r2=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r2;r4=r2+8;r5=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=0;HEAP32[r5+8>>2]=0;HEAP32[r5+12>>2]=0;HEAP32[r5+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r5>>2]=__ZTVN4Ogre19PointEmitterFactoryE+8;HEAP32[r3>>2]=r5;r5=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r5,HEAP32[r3>>2]);r5=r1+4|0;r6=r1+8|0;r7=HEAP32[r6>>2];r8=r1+12|0;if((r7|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r7|0)==0){r9=0}else{HEAP32[r7>>2]=HEAP32[r3>>2];r9=HEAP32[r6>>2]}HEAP32[r6>>2]=r9+4}r9=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r9>>2]=0;HEAP32[r9+4>>2]=0;HEAP32[r9+8>>2]=0;HEAP32[r9+12>>2]=0;HEAP32[r9+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r9>>2]=__ZTVN4Ogre17BoxEmitterFactoryE+8;HEAP32[r3>>2]=r9;r9=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r9,HEAP32[r3>>2]);r9=HEAP32[r6>>2];if((r9|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r9|0)==0){r10=0}else{HEAP32[r9>>2]=HEAP32[r3>>2];r10=HEAP32[r6>>2]}HEAP32[r6>>2]=r10+4}r10=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r10>>2]=0;HEAP32[r10+4>>2]=0;HEAP32[r10+8>>2]=0;HEAP32[r10+12>>2]=0;HEAP32[r10+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r10>>2]=__ZTVN4Ogre23EllipsoidEmitterFactoryE+8;HEAP32[r3>>2]=r10;r10=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r10,HEAP32[r3>>2]);r10=HEAP32[r6>>2];if((r10|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r10|0)==0){r11=0}else{HEAP32[r10>>2]=HEAP32[r3>>2];r11=HEAP32[r6>>2]}HEAP32[r6>>2]=r11+4}r11=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r11>>2]=0;HEAP32[r11+4>>2]=0;HEAP32[r11+8>>2]=0;HEAP32[r11+12>>2]=0;HEAP32[r11+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r11>>2]=__ZTVN4Ogre22CylinderEmitterFactoryE+8;HEAP32[r3>>2]=r11;r11=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r11,HEAP32[r3>>2]);r11=HEAP32[r6>>2];if((r11|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r11|0)==0){r12=0}else{HEAP32[r11>>2]=HEAP32[r3>>2];r12=HEAP32[r6>>2]}HEAP32[r6>>2]=r12+4}r12=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r12>>2]=0;HEAP32[r12+4>>2]=0;HEAP32[r12+8>>2]=0;HEAP32[r12+12>>2]=0;HEAP32[r12+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r12>>2]=__ZTVN4Ogre18RingEmitterFactoryE+8;HEAP32[r3>>2]=r12;r12=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r12,HEAP32[r3>>2]);r12=HEAP32[r6>>2];if((r12|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r12|0)==0){r13=0}else{HEAP32[r12>>2]=HEAP32[r3>>2];r13=HEAP32[r6>>2]}HEAP32[r6>>2]=r13+4}r13=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r13>>2]=0;HEAP32[r13+4>>2]=0;HEAP32[r13+8>>2]=0;HEAP32[r13+12>>2]=0;HEAP32[r13+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r13>>2]=__ZTVN4Ogre29HollowEllipsoidEmitterFactoryE+8;HEAP32[r3>>2]=r13;r13=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE(r13,HEAP32[r3>>2]);r13=HEAP32[r6>>2];if((r13|0)==(HEAP32[r8>>2]|0)){__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r5,r3)}else{if((r13|0)==0){r14=0}else{HEAP32[r13>>2]=HEAP32[r3>>2];r14=HEAP32[r6>>2]}HEAP32[r6>>2]=r14+4}r14=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;HEAP32[r14+8>>2]=0;HEAP32[r14+12>>2]=0;HEAP32[r14+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r14>>2]=__ZTVN4Ogre26LinearForceAffectorFactoryE+8;HEAP32[r4>>2]=r14;r14=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r14,HEAP32[r4>>2]);r14=r1+20|0;r6=r1+24|0;r3=HEAP32[r6>>2];r13=r1+28|0;if((r3|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r3|0)==0){r15=0}else{HEAP32[r3>>2]=HEAP32[r4>>2];r15=HEAP32[r6>>2]}HEAP32[r6>>2]=r15+4}r15=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r15>>2]=0;HEAP32[r15+4>>2]=0;HEAP32[r15+8>>2]=0;HEAP32[r15+12>>2]=0;HEAP32[r15+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r15>>2]=__ZTVN4Ogre26ColourFaderAffectorFactoryE+8;HEAP32[r4>>2]=r15;r15=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r15,HEAP32[r4>>2]);r15=HEAP32[r6>>2];if((r15|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r15|0)==0){r16=0}else{HEAP32[r15>>2]=HEAP32[r4>>2];r16=HEAP32[r6>>2]}HEAP32[r6>>2]=r16+4}r16=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r16>>2]=0;HEAP32[r16+4>>2]=0;HEAP32[r16+8>>2]=0;HEAP32[r16+12>>2]=0;HEAP32[r16+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r16>>2]=__ZTVN4Ogre27ColourFaderAffectorFactory2E+8;HEAP32[r4>>2]=r16;r16=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r16,HEAP32[r4>>2]);r16=HEAP32[r6>>2];if((r16|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r16|0)==0){r17=0}else{HEAP32[r16>>2]=HEAP32[r4>>2];r17=HEAP32[r6>>2]}HEAP32[r6>>2]=r17+4}r17=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r17>>2]=0;HEAP32[r17+4>>2]=0;HEAP32[r17+8>>2]=0;HEAP32[r17+12>>2]=0;HEAP32[r17+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r17>>2]=__ZTVN4Ogre26ColourImageAffectorFactoryE+8;HEAP32[r4>>2]=r17;r17=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r17,HEAP32[r4>>2]);r17=HEAP32[r6>>2];if((r17|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r17|0)==0){r18=0}else{HEAP32[r17>>2]=HEAP32[r4>>2];r18=HEAP32[r6>>2]}HEAP32[r6>>2]=r18+4}r18=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r18>>2]=0;HEAP32[r18+4>>2]=0;HEAP32[r18+8>>2]=0;HEAP32[r18+12>>2]=0;HEAP32[r18+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r18>>2]=__ZTVN4Ogre33ColourInterpolatorAffectorFactoryE+8;HEAP32[r4>>2]=r18;r18=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r18,HEAP32[r4>>2]);r18=HEAP32[r6>>2];if((r18|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r18|0)==0){r19=0}else{HEAP32[r18>>2]=HEAP32[r4>>2];r19=HEAP32[r6>>2]}HEAP32[r6>>2]=r19+4}r19=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r19>>2]=0;HEAP32[r19+4>>2]=0;HEAP32[r19+8>>2]=0;HEAP32[r19+12>>2]=0;HEAP32[r19+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r19>>2]=__ZTVN4Ogre20ScaleAffectorFactoryE+8;HEAP32[r4>>2]=r19;r19=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r19,HEAP32[r4>>2]);r19=HEAP32[r6>>2];if((r19|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r19|0)==0){r20=0}else{HEAP32[r19>>2]=HEAP32[r4>>2];r20=HEAP32[r6>>2]}HEAP32[r6>>2]=r20+4}r20=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r20>>2]=0;HEAP32[r20+4>>2]=0;HEAP32[r20+8>>2]=0;HEAP32[r20+12>>2]=0;HEAP32[r20+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r20>>2]=__ZTVN4Ogre23RotationAffectorFactoryE+8;HEAP32[r4>>2]=r20;r20=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r20,HEAP32[r4>>2]);r20=HEAP32[r6>>2];if((r20|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r20|0)==0){r21=0}else{HEAP32[r20>>2]=HEAP32[r4>>2];r21=HEAP32[r6>>2]}HEAP32[r6>>2]=r21+4}r21=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r21>>2]=0;HEAP32[r21+4>>2]=0;HEAP32[r21+8>>2]=0;HEAP32[r21+12>>2]=0;HEAP32[r21+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r21>>2]=__ZTVN4Ogre34DirectionRandomiserAffectorFactoryE+8;HEAP32[r4>>2]=r21;r21=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r21,HEAP32[r4>>2]);r21=HEAP32[r6>>2];if((r21|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4)}else{if((r21|0)==0){r22=0}else{HEAP32[r21>>2]=HEAP32[r4>>2];r22=HEAP32[r6>>2]}HEAP32[r6>>2]=r22+4}r22=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(20,0,0,0);HEAP32[r22>>2]=0;HEAP32[r22+4>>2]=0;HEAP32[r22+8>>2]=0;HEAP32[r22+12>>2]=0;HEAP32[r22+16>>2]=__ZTVN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEE+8;HEAP32[r22>>2]=__ZTVN4Ogre29DeflectorPlaneAffectorFactoryE+8;HEAP32[r4>>2]=r22;r22=__ZN4Ogre21ParticleSystemManager12getSingletonEv();__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE(r22,HEAP32[r4>>2]);r22=HEAP32[r6>>2];if((r22|0)==(HEAP32[r13>>2]|0)){__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_(r14,r4);STACKTOP=r2;return}if((r22|0)==0){r23=0}else{HEAP32[r22>>2]=HEAP32[r4>>2];r23=HEAP32[r6>>2]}HEAP32[r6>>2]=r23+4;STACKTOP=r2;return}function __ZN4Ogre16ParticleFXPlugin10initialiseEv(r1){return}function __ZN4Ogre16ParticleFXPlugin8shutdownEv(r1){return}function __ZN4Ogre16ParticleFXPlugin9uninstallEv(r1){var r2,r3,r4,r5,r6,r7,r8,r9;r2=HEAP32[r1+4>>2];r3=r1+8|0;r4=HEAP32[r3>>2];if((r2|0)!=(r4|0)){r5=r2;r2=r4;while(1){r4=HEAP32[r5>>2];if((r4|0)==0){r6=r2}else{FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+4>>2]](r4);r6=HEAP32[r3>>2]}r4=r5+4|0;if((r4|0)==(r6|0)){break}else{r5=r4;r2=r6}}}r6=HEAP32[r1+20>>2];r2=r1+24|0;r1=HEAP32[r2>>2];if((r6|0)==(r1|0)){return}else{r7=r6;r8=r1}while(1){r1=HEAP32[r7>>2];if((r1|0)==0){r9=r8}else{FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+4>>2]](r1);r9=HEAP32[r2>>2]}r1=r7+4|0;if((r1|0)==(r9|0)){break}else{r7=r1;r8=r9}}return}function __ZN4Ogre16ParticleFXPluginD1Ev($this){HEAP32[$this>>2]=__ZTVN4Ogre16ParticleFXPluginE+8;var $1=HEAP32[$this+20>>2];var $2=$1;do{if(($1|0)!=0){var $__end__i_i_i_i_i_i=$this+24|0;var $3=HEAP32[$__end__i_i_i_i_i_i>>2];if(($1|0)!=($3|0)){HEAP32[$__end__i_i_i_i_i_i>>2]=$3+(~(($3-4+ -$2|0)>>>2)<<2)}var $7=$1;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $8$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($8$0)}}while(0);var $10=HEAP32[$this+4>>2];if(($10|0)==0){return}var $__end__i_i_i_i_i3_i=$this+8|0;var $12=HEAP32[$__end__i_i_i_i_i3_i>>2];if(($10|0)!=($12|0)){HEAP32[$__end__i_i_i_i_i3_i>>2]=$12+(~(($12-4+ -$10|0)>>>2)<<2)}var $16=$10;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $17$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($17$0)}}function __ZN4Ogre16ParticleFXPluginD0Ev($this){HEAP32[$this>>2]=__ZTVN4Ogre16ParticleFXPluginE+8;var $1=HEAP32[$this+20>>2];var $2=$1;do{if(($1|0)!=0){var $__end__i_i_i_i_i_i_i=$this+24|0;var $3=HEAP32[$__end__i_i_i_i_i_i_i>>2];if(($1|0)!=($3|0)){HEAP32[$__end__i_i_i_i_i_i_i>>2]=$3+(~(($3-4+ -$2|0)>>>2)<<2)}var $7=$1;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $8$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($8$0)}}while(0);var $10=HEAP32[$this+4>>2];if(($10|0)==0){var $19=$this;__ZN4Ogre12NedAllocImpl12deallocBytesEPv($19);return}var $__end__i_i_i_i_i3_i_i=$this+8|0;var $12=HEAP32[$__end__i_i_i_i_i3_i_i>>2];if(($10|0)!=($12|0)){HEAP32[$__end__i_i_i_i_i3_i_i>>2]=$12+(~(($12-4+ -$10|0)>>>2)<<2)}var $16=$10;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $19=$this;__ZN4Ogre12NedAllocImpl12deallocBytesEPv($19);return}else{var $17$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($17$0)}}function __ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this,$__x){var label=0;var $__end__i=$this+4|0;var $__begin__i=$this|0;var $sub_ptr_rhs_cast_i=HEAP32[$__begin__i>>2];var $sub_ptr_div_i=HEAP32[$__end__i>>2]-$sub_ptr_rhs_cast_i>>2;var $add=$sub_ptr_div_i+1|0;if(($add|0)<0){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}var $__first__i_i_i_i_i_i=$this+8|0;var $sub_ptr_sub_i_i_i=HEAP32[$__first__i_i_i_i_i_i>>2]-$sub_ptr_rhs_cast_i|0;if($sub_ptr_sub_i_i_i>>2>>>0>1073741822){var $retval_i_022=2147483647;label=5}else{var $mul_i=$sub_ptr_sub_i_i_i>>1;var $_sroa_speculated=$mul_i>>>0<$add>>>0?$add:$mul_i;if(($_sroa_speculated|0)==0){var $cond_i_i=0;var $retval_i_023=0}else{var $retval_i_022=$_sroa_speculated;label=5}}if(label==5){var $retval_i_022;var $cond_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($retval_i_022<<2,0,0,0);var $retval_i_023=$retval_i_022}var $retval_i_023;var $cond_i_i;var $add_ptr_i_i=$cond_i_i+($sub_ptr_div_i<<2)|0;if(($add_ptr_i_i|0)!=0){HEAP32[$add_ptr_i_i>>2]=HEAP32[$__x>>2]}var $5=HEAP32[$__begin__i>>2];var $sub_ptr_sub_i_i=HEAP32[$__end__i>>2]-$5|0;var $add_ptr_i_i13=$cond_i_i+($sub_ptr_div_i-($sub_ptr_sub_i_i>>2)<<2)|0;_memcpy($add_ptr_i_i13,$5,$sub_ptr_sub_i_i)|0;var $9=HEAP32[$__begin__i>>2];HEAP32[$__begin__i>>2]=$add_ptr_i_i13;HEAP32[$__end__i>>2]=$cond_i_i+($add<<2);HEAP32[$__first__i_i_i_i_i_i>>2]=$cond_i_i+($retval_i_023<<2);if(($9|0)==0){return}var $10=$9;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $11$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($11$0)}}function __ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this,$__x){var label=0;var $__end__i=$this+4|0;var $__begin__i=$this|0;var $sub_ptr_rhs_cast_i=HEAP32[$__begin__i>>2];var $sub_ptr_div_i=HEAP32[$__end__i>>2]-$sub_ptr_rhs_cast_i>>2;var $add=$sub_ptr_div_i+1|0;if(($add|0)<0){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}var $__first__i_i_i_i_i_i=$this+8|0;var $sub_ptr_sub_i_i_i=HEAP32[$__first__i_i_i_i_i_i>>2]-$sub_ptr_rhs_cast_i|0;if($sub_ptr_sub_i_i_i>>2>>>0>1073741822){var $retval_i_022=2147483647;label=5}else{var $mul_i=$sub_ptr_sub_i_i_i>>1;var $_sroa_speculated=$mul_i>>>0<$add>>>0?$add:$mul_i;if(($_sroa_speculated|0)==0){var $cond_i_i=0;var $retval_i_023=0}else{var $retval_i_022=$_sroa_speculated;label=5}}if(label==5){var $retval_i_022;var $cond_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($retval_i_022<<2,0,0,0);var $retval_i_023=$retval_i_022}var $retval_i_023;var $cond_i_i;var $add_ptr_i_i=$cond_i_i+($sub_ptr_div_i<<2)|0;if(($add_ptr_i_i|0)!=0){HEAP32[$add_ptr_i_i>>2]=HEAP32[$__x>>2]}var $5=HEAP32[$__begin__i>>2];var $sub_ptr_sub_i_i=HEAP32[$__end__i>>2]-$5|0;var $add_ptr_i_i13=$cond_i_i+($sub_ptr_div_i-($sub_ptr_sub_i_i>>2)<<2)|0;_memcpy($add_ptr_i_i13,$5,$sub_ptr_sub_i_i)|0;var $9=HEAP32[$__begin__i>>2];HEAP32[$__begin__i>>2]=$add_ptr_i_i13;HEAP32[$__end__i>>2]=$cond_i_i+($add<<2);HEAP32[$__first__i_i_i_i_i_i>>2]=$cond_i_i+($retval_i_023<<2);if(($9|0)==0){return}var $10=$9;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $11$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($11$0)}}function __ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre29DeflectorPlaneAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre29DeflectorPlaneAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre29DeflectorPlaneAffectorFactory7getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=14;_memcpy(r2,__str393|0,14)|0;HEAP8[r2+14|0]=0;return}function __ZN4Ogre29DeflectorPlaneAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(64,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this,$__x){var label=0;var $__end__i=$this+4|0;var $__begin__i=$this|0;var $sub_ptr_rhs_cast_i=HEAP32[$__begin__i>>2];var $sub_ptr_div_i=HEAP32[$__end__i>>2]-$sub_ptr_rhs_cast_i>>2;var $add=$sub_ptr_div_i+1|0;if(($add|0)<0){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}var $__first__i_i_i_i_i_i=$this+8|0;var $sub_ptr_sub_i_i_i=HEAP32[$__first__i_i_i_i_i_i>>2]-$sub_ptr_rhs_cast_i|0;if($sub_ptr_sub_i_i_i>>2>>>0>1073741822){var $retval_i_022=2147483647;label=5}else{var $mul_i=$sub_ptr_sub_i_i_i>>1;var $_sroa_speculated=$mul_i>>>0<$add>>>0?$add:$mul_i;if(($_sroa_speculated|0)==0){var $cond_i_i=0;var $retval_i_023=0}else{var $retval_i_022=$_sroa_speculated;label=5}}if(label==5){var $retval_i_022;var $cond_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($retval_i_022<<2,0,0,0);var $retval_i_023=$retval_i_022}var $retval_i_023;var $cond_i_i;var $add_ptr_i_i=$cond_i_i+($sub_ptr_div_i<<2)|0;if(($add_ptr_i_i|0)!=0){HEAP32[$add_ptr_i_i>>2]=HEAP32[$__x>>2]}var $5=HEAP32[$__begin__i>>2];var $sub_ptr_sub_i_i=HEAP32[$__end__i>>2]-$5|0;var $add_ptr_i_i13=$cond_i_i+($sub_ptr_div_i-($sub_ptr_sub_i_i>>2)<<2)|0;_memcpy($add_ptr_i_i13,$5,$sub_ptr_sub_i_i)|0;var $9=HEAP32[$__begin__i>>2];HEAP32[$__begin__i>>2]=$add_ptr_i_i13;HEAP32[$__end__i>>2]=$cond_i_i+($add<<2);HEAP32[$__first__i_i_i_i_i_i>>2]=$cond_i_i+($retval_i_023<<2);if(($9|0)==0){return}var $10=$9;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $11$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($11$0)}}function __ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre34DirectionRandomiserAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre34DirectionRandomiserAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre34DirectionRandomiserAffectorFactory7getNameEv(r1,r2){r2=__Znwj(32);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=33;HEAP32[r1+4>>2]=19;_memcpy(r2,__str494|0,19)|0;HEAP8[r2+19|0]=0;return}function __ZN4Ogre34DirectionRandomiserAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(48,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre23RotationAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre23RotationAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre23RotationAffectorFactory7getNameEv(r1,r2){HEAP8[r1]=14;r2=r1+1|0;HEAP8[r2]=HEAP8[__str595|0];HEAP8[r2+1|0]=HEAP8[__str595+1|0];HEAP8[r2+2|0]=HEAP8[__str595+2|0];HEAP8[r2+3|0]=HEAP8[__str595+3|0];HEAP8[r2+4|0]=HEAP8[__str595+4|0];HEAP8[r2+5|0]=HEAP8[__str595+5|0];HEAP8[r2+6|0]=HEAP8[__str595+6|0];HEAP8[r1+8|0]=0;return}function __ZN4Ogre23RotationAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(52,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre20ScaleAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre20ScaleAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre20ScaleAffectorFactory7getNameEv(r1,r2){r2=r1;HEAP8[r1]=12;r1=r2+1|0;HEAP8[r1]=HEAP8[__str696|0];HEAP8[r1+1|0]=HEAP8[__str696+1|0];HEAP8[r1+2|0]=HEAP8[__str696+2|0];HEAP8[r1+3|0]=HEAP8[__str696+3|0];HEAP8[r1+4|0]=HEAP8[__str696+4|0];HEAP8[r1+5|0]=HEAP8[__str696+5|0];HEAP8[r2+7|0]=0;return}function __ZN4Ogre20ScaleAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(40,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre33ColourInterpolatorAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre33ColourInterpolatorAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre33ColourInterpolatorAffectorFactory7getNameEv(r1,r2){r2=__Znwj(32);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=33;HEAP32[r1+4>>2]=18;_memcpy(r2,__str797|0,18)|0;HEAP8[r2+18|0]=0;return}function __ZN4Ogre33ColourInterpolatorAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(156,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre26ColourImageAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre26ColourImageAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre26ColourImageAffectorFactory7getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=11;_memcpy(r2,__str898|0,11)|0;HEAP8[r2+11|0]=0;return}function __ZN4Ogre26ColourImageAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(96,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre27ColourFaderAffectorFactory2D1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre27ColourFaderAffectorFactory2D0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre27ColourFaderAffectorFactory27getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=12;_memcpy(r2,__str999|0,12)|0;HEAP8[r2+12|0]=0;return}function __ZN4Ogre27ColourFaderAffectorFactory214createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(72,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre26ColourFaderAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre26ColourFaderAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre26ColourFaderAffectorFactory7getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=11;_memcpy(r2,__str10100|0,11)|0;HEAP8[r2+11|0]=0;return}function __ZN4Ogre26ColourFaderAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(52,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre26LinearForceAffectorFactoryD1Ev(r1){__ZN4Ogre23ParticleAffectorFactoryD2Ev(r1|0);return}function __ZN4Ogre26LinearForceAffectorFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre23ParticleAffectorFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre26LinearForceAffectorFactory7getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=11;_memcpy(r2,__str11101|0,11)|0;HEAP8[r2+11|0]=0;return}function __ZN4Ogre26LinearForceAffectorFactory14createAffectorEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $p=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(52,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$p>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$p);var $5=HEAP32[$p>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre29HollowEllipsoidEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre29HollowEllipsoidEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre29HollowEllipsoidEmitterFactory7getNameEv(r1,r2){r2=__Znwj(16);HEAP32[r1+8>>2]=r2;HEAP32[r1>>2]=17;HEAP32[r1+4>>2]=15;_memcpy(r2,__str12102|0,15)|0;HEAP8[r2+15|0]=0;return}function __ZN4Ogre29HollowEllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(332,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this,$__x){var label=0;var $__end__i=$this+4|0;var $__begin__i=$this|0;var $sub_ptr_rhs_cast_i=HEAP32[$__begin__i>>2];var $sub_ptr_div_i=HEAP32[$__end__i>>2]-$sub_ptr_rhs_cast_i>>2;var $add=$sub_ptr_div_i+1|0;if(($add|0)<0){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}var $__first__i_i_i_i_i_i=$this+8|0;var $sub_ptr_sub_i_i_i=HEAP32[$__first__i_i_i_i_i_i>>2]-$sub_ptr_rhs_cast_i|0;if($sub_ptr_sub_i_i_i>>2>>>0>1073741822){var $retval_i_022=2147483647;label=5}else{var $mul_i=$sub_ptr_sub_i_i_i>>1;var $_sroa_speculated=$mul_i>>>0<$add>>>0?$add:$mul_i;if(($_sroa_speculated|0)==0){var $cond_i_i=0;var $retval_i_023=0}else{var $retval_i_022=$_sroa_speculated;label=5}}if(label==5){var $retval_i_022;var $cond_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_($retval_i_022<<2,0,0,0);var $retval_i_023=$retval_i_022}var $retval_i_023;var $cond_i_i;var $add_ptr_i_i=$cond_i_i+($sub_ptr_div_i<<2)|0;if(($add_ptr_i_i|0)!=0){HEAP32[$add_ptr_i_i>>2]=HEAP32[$__x>>2]}var $5=HEAP32[$__begin__i>>2];var $sub_ptr_sub_i_i=HEAP32[$__end__i>>2]-$5|0;var $add_ptr_i_i13=$cond_i_i+($sub_ptr_div_i-($sub_ptr_sub_i_i>>2)<<2)|0;_memcpy($add_ptr_i_i13,$5,$sub_ptr_sub_i_i)|0;var $9=HEAP32[$__begin__i>>2];HEAP32[$__begin__i>>2]=$add_ptr_i_i13;HEAP32[$__end__i>>2]=$cond_i_i+($add<<2);HEAP32[$__first__i_i_i_i_i_i>>2]=$cond_i_i+($retval_i_023<<2);if(($9|0)==0){return}var $10=$9;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return}else{var $11$0=___cxa_find_matching_catch(-1,-1);___cxa_call_unexpected($11$0)}}function __ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev(r1){return}function __ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre18RingEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre18RingEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre18RingEmitterFactory7getNameEv(r1,r2){r2=r1;HEAP8[r1]=8;r1=r2+1|0;tempBigInt=1735289170;HEAP8[r1]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r1+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r1+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r1+3|0]=tempBigInt;HEAP8[r2+5|0]=0;return}function __ZN4Ogre18RingEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(328,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre22CylinderEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre22CylinderEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre22CylinderEmitterFactory7getNameEv(r1,r2){var r3;r2=r1;HEAP8[r1]=16;r1=r2+1|0;r3=r1|0;tempBigInt=1768716611;HEAP8[r3]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+3|0]=tempBigInt;r3=r1+4|0;tempBigInt=1919247470;HEAP8[r3]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r3+3|0]=tempBigInt;HEAP8[r2+9|0]=0;return}function __ZN4Ogre22CylinderEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(320,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre23EllipsoidEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre23EllipsoidEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre23EllipsoidEmitterFactory7getNameEv(r1,r2){r2=r1;HEAP8[r1]=18;_memcpy(r2+1|0,__str15103|0,9)|0;HEAP8[r2+10|0]=0;return}function __ZN4Ogre23EllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(320,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre17BoxEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre17BoxEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre17BoxEmitterFactory7getNameEv(r1,r2){HEAP8[r1]=6;r2=r1+1|0;HEAP8[r2]=HEAP8[__str16104|0];HEAP8[r2+1|0]=HEAP8[__str16104+1|0];HEAP8[r2+2|0]=HEAP8[__str16104+2|0];HEAP8[r1+4|0]=0;return}function __ZN4Ogre17BoxEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(320,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __ZN4Ogre19PointEmitterFactoryD1Ev(r1){__ZN4Ogre22ParticleEmitterFactoryD2Ev(r1|0);return}function __ZN4Ogre19PointEmitterFactoryD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre22ParticleEmitterFactoryD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNK4Ogre19PointEmitterFactory7getNameEv(r1,r2){r2=r1;HEAP8[r1]=10;r1=r2+1|0;HEAP8[r1]=HEAP8[__str17105|0];HEAP8[r1+1|0]=HEAP8[__str17105+1|0];HEAP8[r1+2|0]=HEAP8[__str17105+2|0];HEAP8[r1+3|0]=HEAP8[__str17105+3|0];HEAP8[r1+4|0]=HEAP8[__str17105+4|0];HEAP8[r2+6|0]=0;return}function __ZN4Ogre19PointEmitterFactory13createEmitterEPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $emit=sp;var $call_i_i=__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_(272,0,0,0);var $0=$call_i_i;((function(){try{__THREW__=0;return __ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE($0,$psys)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($call_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $1=$call_i_i;HEAP32[$emit>>2]=$1;var $__end__i=$this+8|0;var $2=HEAP32[$__end__i>>2];if(($2|0)==(HEAP32[$this+12>>2]|0)){__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_($this+4|0,$emit);var $5=HEAP32[$emit>>2];var $5;STACKTOP=sp;return $5}if(($2|0)==0){var $4=0}else{HEAP32[$2>>2]=$1;var $4=HEAP32[$__end__i>>2]}var $4;HEAP32[$__end__i>>2]=$4+4;var $5=$1;var $5;STACKTOP=sp;return $5}function __GLOBAL__I_a107(){HEAP8[__ZN4OgreL11sPluginNameE]=20;_memcpy(__ZN4OgreL11sPluginNameE+1|0,__str91|0,10)|0;HEAP8[__ZN4OgreL11sPluginNameE+11|0]=0;_atexit(FUNCTION_TABLE_OFFSET+776,__ZN4OgreL11sPluginNameE,___dso_handle);return}function __ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE($0,$psys);HEAP32[$this>>2]=__ZTVN4Ogre12PointEmitterE+8;var $mType=$this+120|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str110|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $call_i_i_i3=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=8;break}var $2=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i3;HEAP32[$ref_tmp>>2]=17;HEAP32[$ref_tmp+4>>2]=12;_memcpy($call_i_i_i3,__str1111|0,12)|0;HEAP8[$call_i_i_i3+12|0]=0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($2,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $8$0=___cxa_find_matching_catch(-1,-1);var $9=$8$0;var $10=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $ehselector_slot_0=$10;var $exn_slot_0=$9;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $ehselector_slot_0=$10;var $exn_slot_0=$9;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call5){STACKTOP=sp;return}((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitter17addBaseParametersEv($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=8;break}STACKTOP=sp;return}else{label=8}}while(0);if(label==8){var $5$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$5$0}var $exn_slot_0;var $ehselector_slot_0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre12PointEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5;r3=r1|0;__ZN4Ogre8Particle15resetDimensionsEv(r2);HEAPF32[r2+24>>2]=HEAPF32[r1+104>>2];HEAPF32[r2+28>>2]=HEAPF32[r1+108>>2];HEAPF32[r2+32>>2]=HEAPF32[r1+112>>2];FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r3,r2+48|0);r4=r1;r5=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+24>>2]](r3,r5);FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+28>>2]](r3,r5);r5=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r3);HEAPF32[r2+68>>2]=r5;HEAPF32[r2+64>>2]=r5;return}function __ZN4Ogre12PointEmitter17_getEmissionCountEf(r1,r2){return FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+40>>2]](r1|0,r2)}function __ZN4Ogre12PointEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre12PointEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre11RingEmitter9CmdInnerXD1Ev(r1){return}function __ZN4Ogre11RingEmitter9CmdInnerYD1Ev(r1){return}function __ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE($this,$psys){var sp=STACKTOP;STACKTOP=STACKTOP+144|0;var $ref_tmp=sp;var $ref_tmp8=sp+16;var $ref_tmp9=sp+48;var $ref_tmp11=sp+64;var $ref_tmp25=sp+80;var $ref_tmp26=sp+112;var $ref_tmp28=sp+128;var $0=$this|0;var $1=$this|0;__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE($1,$psys);HEAP32[$this>>2]=__ZTVN4Ogre11RingEmitterE+8;var $__s2_i_i=$ref_tmp;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=8;var $3=$__s2_i_i+1|0;tempBigInt=1735289170;HEAP8[$3]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$3+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$3+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$3+3|0]=tempBigInt;HEAP8[$__s2_i_i+5|0]=0;var $call=(function(){try{__THREW__=0;return __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($0,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();L1:do{if(!__THREW__){if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}if(!$call){var $mInnerSizex_i=$this+320|0;HEAPF32[$mInnerSizex_i>>2]=.5;var $mInnerSizey_i=$this+324|0;HEAPF32[$mInnerSizey_i>>2]=.5;STACKTOP=sp;return}var $6=HEAP32[$this+16>>2];var $call_i_i_i31=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();L11:do{if(!__THREW__){var $__data__i_i22=$ref_tmp9+8|0;HEAP32[$__data__i_i22>>2]=$call_i_i_i31;HEAP32[$ref_tmp9>>2]=17;HEAP32[$ref_tmp9+4>>2]=11;_memcpy($call_i_i_i31,__str2116|0,11)|0;HEAP8[$call_i_i_i31+11|0]=0;var $call_i_i_i54=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i45=$ref_tmp11+8|0;HEAP32[$__data__i_i45>>2]=$call_i_i_i54;HEAP32[$ref_tmp11>>2]=81;HEAP32[$ref_tmp11+4>>2]=72;_memcpy($call_i_i_i54,__str3117|0,72)|0;HEAP8[$call_i_i_i54+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp8,$ref_tmp9,$ref_tmp11,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp8,__ZN4Ogre11RingEmitter11msCmdInnerXE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $37$0=___cxa_find_matching_catch(-1,-1);var $38=$37$0;var $39=tempRet0;if((HEAP8[$ref_tmp8+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+20>>2])}if((HEAP8[$ref_tmp8]&1)==0){var $exn_slot_0=$38;var $ehselector_slot_0=$39;break}__ZdlPv(HEAP32[$ref_tmp8+8>>2]);var $exn_slot_0=$38;var $ehselector_slot_0=$39;break}if((HEAP8[$ref_tmp8+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+20>>2])}if((HEAP8[$ref_tmp8]&1)!=0){__ZdlPv(HEAP32[$ref_tmp8+8>>2])}if((HEAP8[$ref_tmp11]&1)!=0){__ZdlPv(HEAP32[$__data__i_i45>>2])}if((HEAP8[$ref_tmp9]&1)!=0){__ZdlPv(HEAP32[$__data__i_i22>>2])}var $call_i_i_i90=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break L11}var $__data__i_i81=$ref_tmp26+8|0;HEAP32[$__data__i_i81>>2]=$call_i_i_i90;HEAP32[$ref_tmp26>>2]=17;HEAP32[$ref_tmp26+4>>2]=12;_memcpy($call_i_i_i90,__str4118|0,12)|0;HEAP8[$call_i_i_i90+12|0]=0;var $call_i_i_i113=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i104=$ref_tmp28+8|0;HEAP32[$__data__i_i104>>2]=$call_i_i_i113;HEAP32[$ref_tmp28>>2]=81;HEAP32[$ref_tmp28+4>>2]=72;_memcpy($call_i_i_i113,__str3117|0,72)|0;HEAP8[$call_i_i_i113+72|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp25,$ref_tmp26,$ref_tmp28,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($6,$ref_tmp25,__ZN4Ogre11RingEmitter11msCmdInnerYE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $54$0=___cxa_find_matching_catch(-1,-1);var $55=$54$0;var $56=tempRet0;if((HEAP8[$ref_tmp25+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp25+20>>2])}if((HEAP8[$ref_tmp25]&1)==0){var $exn_slot_2=$55;var $ehselector_slot_2=$56;break}__ZdlPv(HEAP32[$ref_tmp25+8>>2]);var $exn_slot_2=$55;var $ehselector_slot_2=$56;break}if((HEAP8[$ref_tmp25+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp25+20>>2])}if((HEAP8[$ref_tmp25]&1)!=0){__ZdlPv(HEAP32[$ref_tmp25+8>>2])}if((HEAP8[$ref_tmp28]&1)!=0){__ZdlPv(HEAP32[$__data__i_i104>>2])}if((HEAP8[$ref_tmp26]&1)==0){var $mInnerSizex_i=$this+320|0;HEAPF32[$mInnerSizex_i>>2]=.5;var $mInnerSizey_i=$this+324|0;HEAPF32[$mInnerSizey_i>>2]=.5;STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i81>>2]);var $mInnerSizex_i=$this+320|0;HEAPF32[$mInnerSizex_i>>2]=.5;var $mInnerSizey_i=$this+324|0;HEAPF32[$mInnerSizey_i>>2]=.5;STACKTOP=sp;return}else{var $51$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$51$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp28]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i104>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $48$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$48$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$ref_tmp26]&1)==0){var $exn_slot_4=$exn_slot_3;var $ehselector_slot_4=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$__data__i_i81>>2]);var $exn_slot_4=$exn_slot_3;var $ehselector_slot_4=$ehselector_slot_3;break L1}else{var $34$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$34$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp11]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i45>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $31$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$31$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$ref_tmp9]&1)==0){var $exn_slot_4=$exn_slot_1;var $ehselector_slot_4=$ehselector_slot_1;break L1}__ZdlPv(HEAP32[$__data__i_i22>>2]);var $exn_slot_4=$exn_slot_1;var $ehselector_slot_4=$ehselector_slot_1;break L1}}while(0);var $23$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$23$0;var $ehselector_slot_4=tempRet0}else{var $26$0=___cxa_find_matching_catch(-1,-1);var $27=$26$0;var $28=tempRet0;if((HEAP8[$__size__i50_i]&1)==0){var $exn_slot_4=$27;var $ehselector_slot_4=$28;break}__ZdlPv(HEAP32[$ref_tmp+8>>2]);var $exn_slot_4=$27;var $ehselector_slot_4=$28}}while(0);var $ehselector_slot_4;var $exn_slot_4;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_4)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre11RingEmitter12setInnerSizeEff(r1,r2,r3){if(!(r2>0&r2<1&r3>0&r3<1)){return}HEAPF32[r1+320>>2]=r2;HEAPF32[r1+324>>2]=r3;return}function __ZN4Ogre11RingEmitter13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6,r7,r8;__ZN4Ogre8Particle15resetDimensionsEv(r2);r3=__ZN4Ogre4Math11RangeRandomEff(0,HEAPF32[__ZN4Ogre4Math6TWO_PIE>>2]);r4=__ZN4Ogre4Math11RangeRandomEff(HEAPF32[r1+320>>2],1);r5=r3;r3=r4*Math_sin(r5);r4=__ZN4Ogre4Math11RangeRandomEff(HEAPF32[r1+324>>2],1)*Math_cos(r5);r5=__ZN4Ogre4Math15SymmetricRandomEv();r6=r1|0;r7=r3*HEAPF32[r1+288>>2]+HEAPF32[r1+108>>2]+r4*HEAPF32[r1+300>>2]+r5*HEAPF32[r1+312>>2];r8=r3*HEAPF32[r1+292>>2]+HEAPF32[r1+112>>2]+r4*HEAPF32[r1+304>>2]+r5*HEAPF32[r1+316>>2];HEAPF32[r2+24>>2]=r3*HEAPF32[r1+284>>2]+HEAPF32[r1+104>>2]+r4*HEAPF32[r1+296>>2]+r5*HEAPF32[r1+308>>2];HEAPF32[r2+28>>2]=r7;HEAPF32[r2+32>>2]=r8;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r6,r2+48|0);r8=r1;r7=r2+36|0;FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+24>>2]](r6,r7);FUNCTION_TABLE[HEAP32[HEAP32[r8>>2]+28>>2]](r6,r7);r7=FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+32>>2]](r6);HEAPF32[r2+68>>2]=r7;HEAPF32[r2+64>>2]=r7;return}function __ZN4Ogre11RingEmitter13setInnerSizeXEf(r1,r2){if(r2>0&r2<1){HEAPF32[r1+320>>2]=r2;return}else{___assert_fail(__str5119|0,__str6120|0,112,___func____ZN4Ogre11RingEmitter13setInnerSizeXEf|0)}}function __ZN4Ogre11RingEmitter13setInnerSizeYEf(r1,r2){if(r2>0&r2<1){HEAPF32[r1+324>>2]=r2;return}else{___assert_fail(__str7121|0,__str6120|0,119,___func____ZN4Ogre11RingEmitter13setInnerSizeYEf|0)}}function __ZNK4Ogre11RingEmitter13getInnerSizeXEv(r1){return HEAPF32[r1+320>>2]}function __ZNK4Ogre11RingEmitter13getInnerSizeYEv(r1){return HEAPF32[r1+324>>2]}function __ZNK4Ogre11RingEmitter9CmdInnerX5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+320>>2],6,0,32,0);return}function __ZN4Ogre11RingEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);if(r1>0&r1<1){HEAPF32[r2+320>>2]=r1;return}else{___assert_fail(__str5119|0,__str6120|0,112,___func____ZN4Ogre11RingEmitter13setInnerSizeXEf|0)}}function __ZNK4Ogre11RingEmitter9CmdInnerY5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+324>>2],6,0,32,0);return}function __ZN4Ogre11RingEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){r1=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);if(r1>0&r1<1){HEAPF32[r2+324>>2]=r1;return}else{___assert_fail(__str7121|0,__str6120|0,119,___func____ZN4Ogre11RingEmitter13setInnerSizeYEf|0)}}function __ZN4Ogre11RingEmitter9CmdInnerXD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre11RingEmitter9CmdInnerYD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre11RingEmitterD1Ev(r1){__ZN4Ogre15ParticleEmitterD2Ev(r1|0);return}function __ZN4Ogre11RingEmitterD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre15ParticleEmitterD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD1Ev(r1){return}function __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD1Ev(r1){return}function __ZN4Ogre16RotationAffector21CmdRotationRangeStartD1Ev(r1){return}function __ZN4Ogre16RotationAffector19CmdRotationRangeEndD1Ev(r1){return}function __ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+272|0;var $ref_tmp=sp;var $ref_tmp14=sp+16;var $ref_tmp15=sp+48;var $ref_tmp17=sp+64;var $ref_tmp31=sp+80;var $ref_tmp32=sp+112;var $ref_tmp34=sp+128;var $ref_tmp50=sp+144;var $ref_tmp51=sp+176;var $ref_tmp53=sp+192;var $ref_tmp69=sp+208;var $ref_tmp70=sp+240;var $ref_tmp72=sp+256;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre16RotationAffectorE+8;var $mType=$this+20|0;var $3=$this+36|0;HEAP32[$3>>2]=0;HEAP32[$3+4>>2]=0;HEAP32[$3+8>>2]=0;HEAP32[$3+12>>2]=0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str127|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){var $call_i_i_i30=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=55;break}var $4=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i30;HEAP32[$ref_tmp>>2]=33;HEAP32[$ref_tmp+4>>2]=16;_memcpy($call_i_i_i30,__str4128|0,16)|0;HEAP8[$call_i_i_i30+16|0]=0;var $call9=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($4,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $43$0=___cxa_find_matching_catch(-1,-1);var $44=$43$0;var $45=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_8=$44;var $ehselector_slot_8=$45;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_8=$44;var $ehselector_slot_8=$45;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call9){STACKTOP=sp;return}var $7=HEAP32[$this+16>>2];var $call_i_i_i58=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=55;break}var $__data__i_i49=$ref_tmp15+8|0;HEAP32[$__data__i_i49>>2]=$call_i_i_i58;HEAP32[$ref_tmp15>>2]=33;HEAP32[$ref_tmp15+4>>2]=26;_memcpy($call_i_i_i58,__str5129|0,26)|0;HEAP8[$call_i_i_i58+26|0]=0;var $call_i_i_i81=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i72=$ref_tmp17+8|0;HEAP32[$__data__i_i72>>2]=$call_i_i_i81;HEAP32[$ref_tmp17>>2]=81;HEAP32[$ref_tmp17+4>>2]=75;_memcpy($call_i_i_i81,__str6130|0,75)|0;HEAP8[$call_i_i_i81+75|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp14,$ref_tmp15,$ref_tmp17,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp14,__ZN4Ogre16RotationAffector28msRotationSpeedRangeStartCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $54$0=___cxa_find_matching_catch(-1,-1);var $55=$54$0;var $56=tempRet0;if((HEAP8[$ref_tmp14+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+20>>2])}if((HEAP8[$ref_tmp14]&1)==0){var $exn_slot_0=$55;var $ehselector_slot_0=$56;break}__ZdlPv(HEAP32[$ref_tmp14+8>>2]);var $exn_slot_0=$55;var $ehselector_slot_0=$56;break}if((HEAP8[$ref_tmp14+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+20>>2])}if((HEAP8[$ref_tmp14]&1)!=0){__ZdlPv(HEAP32[$ref_tmp14+8>>2])}if((HEAP8[$ref_tmp17]&1)!=0){__ZdlPv(HEAP32[$__data__i_i72>>2])}if((HEAP8[$ref_tmp15]&1)!=0){__ZdlPv(HEAP32[$__data__i_i49>>2])}var $call_i_i_i130=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=55;break L1}var $__data__i_i121=$ref_tmp32+8|0;HEAP32[$__data__i_i121>>2]=$call_i_i_i130;HEAP32[$ref_tmp32>>2]=33;HEAP32[$ref_tmp32+4>>2]=24;_memcpy($call_i_i_i130,__str7131|0,24)|0;HEAP8[$call_i_i_i130+24|0]=0;var $call_i_i_i153=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i144=$ref_tmp34+8|0;HEAP32[$__data__i_i144>>2]=$call_i_i_i153;HEAP32[$ref_tmp34>>2]=81;HEAP32[$ref_tmp34+4>>2]=73;_memcpy($call_i_i_i153,__str8132|0,73)|0;HEAP8[$call_i_i_i153+73|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp31,$ref_tmp32,$ref_tmp34,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp31,__ZN4Ogre16RotationAffector26msRotationSpeedRangeEndCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $71$0=___cxa_find_matching_catch(-1,-1);var $72=$71$0;var $73=tempRet0;if((HEAP8[$ref_tmp31+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp31+20>>2])}if((HEAP8[$ref_tmp31]&1)==0){var $exn_slot_2=$72;var $ehselector_slot_2=$73;break}__ZdlPv(HEAP32[$ref_tmp31+8>>2]);var $exn_slot_2=$72;var $ehselector_slot_2=$73;break}if((HEAP8[$ref_tmp31+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp31+20>>2])}if((HEAP8[$ref_tmp31]&1)!=0){__ZdlPv(HEAP32[$ref_tmp31+8>>2])}if((HEAP8[$ref_tmp34]&1)!=0){__ZdlPv(HEAP32[$__data__i_i144>>2])}if((HEAP8[$ref_tmp32]&1)!=0){__ZdlPv(HEAP32[$__data__i_i121>>2])}var $call_i_i_i203=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=55;break L1}var $__data__i_i194=$ref_tmp51+8|0;HEAP32[$__data__i_i194>>2]=$call_i_i_i203;HEAP32[$ref_tmp51>>2]=33;HEAP32[$ref_tmp51+4>>2]=20;_memcpy($call_i_i_i203,__str9133|0,20)|0;HEAP8[$call_i_i_i203+20|0]=0;var $call_i_i_i226=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i217=$ref_tmp53+8|0;HEAP32[$__data__i_i217>>2]=$call_i_i_i226;HEAP32[$ref_tmp53>>2]=81;HEAP32[$ref_tmp53+4>>2]=76;_memcpy($call_i_i_i226,__str10134|0,76)|0;HEAP8[$call_i_i_i226+76|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp50,$ref_tmp51,$ref_tmp53,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp50,__ZN4Ogre16RotationAffector23msRotationRangeStartCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $88$0=___cxa_find_matching_catch(-1,-1);var $89=$88$0;var $90=tempRet0;if((HEAP8[$ref_tmp50+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp50+20>>2])}if((HEAP8[$ref_tmp50]&1)==0){var $exn_slot_4=$89;var $ehselector_slot_4=$90;break}__ZdlPv(HEAP32[$ref_tmp50+8>>2]);var $exn_slot_4=$89;var $ehselector_slot_4=$90;break}if((HEAP8[$ref_tmp50+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp50+20>>2])}if((HEAP8[$ref_tmp50]&1)!=0){__ZdlPv(HEAP32[$ref_tmp50+8>>2])}if((HEAP8[$ref_tmp53]&1)!=0){__ZdlPv(HEAP32[$__data__i_i217>>2])}if((HEAP8[$ref_tmp51]&1)!=0){__ZdlPv(HEAP32[$__data__i_i194>>2])}var $call_i_i_i276=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=55;break L1}var $__data__i_i267=$ref_tmp70+8|0;HEAP32[$__data__i_i267>>2]=$call_i_i_i276;HEAP32[$ref_tmp70>>2]=33;HEAP32[$ref_tmp70+4>>2]=18;_memcpy($call_i_i_i276,__str11135|0,18)|0;HEAP8[$call_i_i_i276+18|0]=0;var $call_i_i_i299=(function(){try{__THREW__=0;return __Znwj(80)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i290=$ref_tmp72+8|0;HEAP32[$__data__i_i290>>2]=$call_i_i_i299;HEAP32[$ref_tmp72>>2]=81;HEAP32[$ref_tmp72+4>>2]=74;_memcpy($call_i_i_i299,__str12136|0,74)|0;HEAP8[$call_i_i_i299+74|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp69,$ref_tmp70,$ref_tmp72,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE($7,$ref_tmp69,__ZN4Ogre16RotationAffector21msRotationRangeEndCmdE|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $105$0=___cxa_find_matching_catch(-1,-1);var $106=$105$0;var $107=tempRet0;if((HEAP8[$ref_tmp69+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp69+20>>2])}if((HEAP8[$ref_tmp69]&1)==0){var $exn_slot_6=$106;var $ehselector_slot_6=$107;break}__ZdlPv(HEAP32[$ref_tmp69+8>>2]);var $exn_slot_6=$106;var $ehselector_slot_6=$107;break}if((HEAP8[$ref_tmp69+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp69+20>>2])}if((HEAP8[$ref_tmp69]&1)!=0){__ZdlPv(HEAP32[$ref_tmp69+8>>2])}if((HEAP8[$ref_tmp72]&1)!=0){__ZdlPv(HEAP32[$__data__i_i290>>2])}if((HEAP8[$ref_tmp70]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$__data__i_i267>>2]);STACKTOP=sp;return}else{var $102$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_6=$102$0;var $ehselector_slot_6=tempRet0}}while(0);var $ehselector_slot_6;var $exn_slot_6;if((HEAP8[$ref_tmp72]&1)==0){var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6;break}__ZdlPv(HEAP32[$__data__i_i290>>2]);var $exn_slot_7=$exn_slot_6;var $ehselector_slot_7=$ehselector_slot_6}else{var $99$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_7=$99$0;var $ehselector_slot_7=tempRet0}}while(0);var $ehselector_slot_7;var $exn_slot_7;if((HEAP8[$ref_tmp70]&1)==0){var $exn_slot_8=$exn_slot_7;var $ehselector_slot_8=$ehselector_slot_7;break L1}__ZdlPv(HEAP32[$__data__i_i267>>2]);var $exn_slot_8=$exn_slot_7;var $ehselector_slot_8=$ehselector_slot_7;break L1}else{var $85$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_4=$85$0;var $ehselector_slot_4=tempRet0}}while(0);var $ehselector_slot_4;var $exn_slot_4;if((HEAP8[$ref_tmp53]&1)==0){var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4;break}__ZdlPv(HEAP32[$__data__i_i217>>2]);var $exn_slot_5=$exn_slot_4;var $ehselector_slot_5=$ehselector_slot_4}else{var $82$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_5=$82$0;var $ehselector_slot_5=tempRet0}}while(0);var $ehselector_slot_5;var $exn_slot_5;if((HEAP8[$ref_tmp51]&1)==0){var $exn_slot_8=$exn_slot_5;var $ehselector_slot_8=$ehselector_slot_5;break L1}__ZdlPv(HEAP32[$__data__i_i194>>2]);var $exn_slot_8=$exn_slot_5;var $ehselector_slot_8=$ehselector_slot_5;break L1}else{var $68$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$68$0;var $ehselector_slot_2=tempRet0}}while(0);var $ehselector_slot_2;var $exn_slot_2;if((HEAP8[$ref_tmp34]&1)==0){var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2;break}__ZdlPv(HEAP32[$__data__i_i144>>2]);var $exn_slot_3=$exn_slot_2;var $ehselector_slot_3=$ehselector_slot_2}else{var $65$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_3=$65$0;var $ehselector_slot_3=tempRet0}}while(0);var $ehselector_slot_3;var $exn_slot_3;if((HEAP8[$ref_tmp32]&1)==0){var $exn_slot_8=$exn_slot_3;var $ehselector_slot_8=$ehselector_slot_3;break L1}__ZdlPv(HEAP32[$__data__i_i121>>2]);var $exn_slot_8=$exn_slot_3;var $ehselector_slot_8=$ehselector_slot_3;break L1}else{var $51$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$51$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp17]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i72>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $48$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$48$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$ref_tmp15]&1)==0){var $exn_slot_8=$exn_slot_1;var $ehselector_slot_8=$ehselector_slot_1;break}__ZdlPv(HEAP32[$__data__i_i49>>2]);var $exn_slot_8=$exn_slot_1;var $ehselector_slot_8=$ehselector_slot_1}else{label=55}}while(0);if(label==55){var $40$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_8=$40$0;var $ehselector_slot_8=tempRet0}var $ehselector_slot_8;var $exn_slot_8;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_8)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre16RotationAffector13_initParticleEPNS_8ParticleE(r1,r2){var r3,r4,r5,r6;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;r5=__ZN4Ogre4Math10UnitRandomEv();r6=HEAPF32[r1+44>>2];HEAPF32[r4>>2]=r6+r5*(HEAPF32[r1+48>>2]-r6);__ZN4Ogre8Particle11setRotationERKNS_6RadianE(r2,r4);r4=__ZN4Ogre4Math10UnitRandomEv();r6=HEAPF32[r1+36>>2];HEAPF32[r2+72>>2]=r6+r4*(HEAPF32[r1+40>>2]-r6);STACKTOP=r3;return}function __ZN4Ogre16RotationAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6;r1=STACKTOP;STACKTOP=STACKTOP+24|0;r4=r1;r5=r1+16;__ZN4Ogre14ParticleSystem12_getIteratorEv(r4,r2);r2=r5|0;HEAPF32[r2>>2]=0;if(__ZN4Ogre16ParticleIterator3endEv(r4)){STACKTOP=r1;return}while(1){r6=__ZN4Ogre16ParticleIterator7getNextEv(r4);HEAPF32[r2>>2]=HEAPF32[r6+20>>2]+HEAPF32[r6+72>>2]*r3;__ZN4Ogre8Particle11setRotationERKNS_6RadianE(r6,r5);if(__ZN4Ogre16ParticleIterator3endEv(r4)){break}}STACKTOP=r1;return}function __ZNK4Ogre16RotationAffector26getRotationSpeedRangeStartEv(r1){return r1+36|0}function __ZNK4Ogre16RotationAffector24getRotationSpeedRangeEndEv(r1){return r1+40|0}function __ZN4Ogre16RotationAffector26setRotationSpeedRangeStartERKNS_6RadianE(r1,r2){HEAPF32[r1+36>>2]=HEAPF32[r2>>2];return}function __ZN4Ogre16RotationAffector24setRotationSpeedRangeEndERKNS_6RadianE(r1,r2){HEAPF32[r1+40>>2]=HEAPF32[r2>>2];return}function __ZNK4Ogre16RotationAffector21getRotationRangeStartEv(r1){return r1+44|0}function __ZNK4Ogre16RotationAffector19getRotationRangeEndEv(r1){return r1+48|0}function __ZN4Ogre16RotationAffector21setRotationRangeStartERKNS_6RadianE(r1,r2){HEAPF32[r1+44>>2]=HEAPF32[r2>>2];return}function __ZN4Ogre16RotationAffector19setRotationRangeEndERKNS_6RadianE(r1,r2){HEAPF32[r1+48>>2]=HEAPF32[r2>>2];return}function __ZNK4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,__ZN4Ogre4Math19RadiansToAngleUnitsEf(HEAPF32[r3+40>>2]),6,0,32,0);return}function __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+40>>2]=__ZN4Ogre4Math19AngleUnitsToRadiansEf(__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0));return}function __ZNK4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,__ZN4Ogre4Math19RadiansToAngleUnitsEf(HEAPF32[r3+36>>2]),6,0,32,0);return}function __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+36>>2]=__ZN4Ogre4Math19AngleUnitsToRadiansEf(__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0));return}function __ZNK4Ogre16RotationAffector19CmdRotationRangeEnd5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,__ZN4Ogre4Math19RadiansToAngleUnitsEf(HEAPF32[r3+48>>2]),6,0,32,0);return}function __ZN4Ogre16RotationAffector19CmdRotationRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+48>>2]=__ZN4Ogre4Math19AngleUnitsToRadiansEf(__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0));return}function __ZNK4Ogre16RotationAffector21CmdRotationRangeStart5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,__ZN4Ogre4Math19RadiansToAngleUnitsEf(HEAPF32[r3+44>>2]),6,0,32,0);return}function __ZN4Ogre16RotationAffector21CmdRotationRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+44>>2]=__ZN4Ogre4Math19AngleUnitsToRadiansEf(__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0));return}function __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre16RotationAffector21CmdRotationRangeStartD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre16RotationAffector19CmdRotationRangeEndD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre16RotationAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre16RotationAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre13ScaleAffector14CmdScaleAdjustD1Ev(r1){return}function __ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE($this,$psys){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+104|0;var $__parent_i=sp;var $temp_lvalue_i=sp+8;var $ref_tmp=sp+24;var $ref_tmp10=sp+40;var $ref_tmp11=sp+72;var $ref_tmp13=sp+88;var $0=$this|0;var $2=$this+4|0;HEAP32[$2>>2]=0;HEAP32[$2+4>>2]=0;HEAP32[$2+8>>2]=0;HEAP32[$2+12>>2]=0;var $scevgep4_i=$this+20|0;HEAP32[$scevgep4_i>>2]=0;HEAP32[$scevgep4_i+4>>2]=0;HEAP32[$scevgep4_i+8>>2]=0;HEAP32[$this+32>>2]=$psys;HEAP32[$this>>2]=__ZTVN4Ogre13ScaleAffectorE+8;HEAPF32[$this+36>>2]=0;var $mType=$this+20|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($mType,__str142|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $call_i_i_i6=(function(){try{__THREW__=0;return __Znwj(16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=28;break}var $3=$this|0;var $__data__i_i=$ref_tmp+8|0;HEAP32[$__data__i_i>>2]=$call_i_i_i6;HEAP32[$ref_tmp>>2]=17;HEAP32[$ref_tmp+4>>2]=13;_memcpy($call_i_i_i6,__str1143|0,13)|0;HEAP8[$call_i_i_i6+13|0]=0;var $call5=(function(){try{__THREW__=0;return __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($3,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $35$0=___cxa_find_matching_catch(-1,-1);var $36=$35$0;var $37=tempRet0;if((HEAP8[$ref_tmp]&1)==0){var $exn_slot_2=$36;var $ehselector_slot_2=$37;break}__ZdlPv(HEAP32[$__data__i_i>>2]);var $exn_slot_2=$36;var $ehselector_slot_2=$37;break}if((HEAP8[$ref_tmp]&1)!=0){__ZdlPv(HEAP32[$__data__i_i>>2])}if(!$call5){STACKTOP=sp;return}var $6=HEAP32[$this+16>>2];var $__s2_i_i19=$ref_tmp11;var $__size__i50_i20=$ref_tmp11;HEAP8[$__size__i50_i20]=8;var $7=$__s2_i_i19+1|0;tempBigInt=1702125938;HEAP8[$7]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$7+1|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$7+2|0]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[$7+3|0]=tempBigInt;HEAP8[$__s2_i_i19+5|0]=0;var $call_i_i_i58=(function(){try{__THREW__=0;return __Znwj(96)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $__data__i_i49=$ref_tmp13+8|0;HEAP32[$__data__i_i49>>2]=$call_i_i_i58;HEAP32[$ref_tmp13>>2]=97;HEAP32[$ref_tmp13+4>>2]=83;_memcpy($call_i_i_i58,__str3144|0,83)|0;HEAP8[$call_i_i_i58+83|0]=0;((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE($ref_tmp10,$ref_tmp11,$ref_tmp13,1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $__end__i_i=$6+4|0;var $8=HEAP32[$__end__i_i>>2];do{if(($8|0)==(HEAP32[$6+8>>2]|0)){var $mParamDefs_i=$6|0;((function(){try{__THREW__=0;return __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_($mParamDefs_i,$ref_tmp10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=15}}else{if(($8|0)==0){var $10=0}else{((function(){try{__THREW__=0;return __ZN4Ogre12ParameterDefC2ERKS0_($8,$ref_tmp10)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $10=HEAP32[$__end__i_i>>2]}var $10;HEAP32[$__end__i_i>>2]=$10+28;label=15}}while(0);do{if(label==15){var $mParamCommands_i=$6+16|0;var $name_i=$ref_tmp10|0;var $call_i=__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_($mParamCommands_i,$__parent_i,$name_i);var $13=HEAP32[$call_i>>2];var $14=$13;if(($13|0)==0){((function(){try{__THREW__=0;return __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_($temp_lvalue_i,$mParamCommands_i,$name_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $__first__i_i_i28_i_i_i=$temp_lvalue_i|0;var $15=HEAP32[$__first__i_i_i28_i_i_i>>2];HEAP32[$__first__i_i_i28_i_i_i>>2]=0;var $16=HEAP32[$__parent_i>>2];var $17=$15|0;HEAP32[$15>>2]=0;HEAP32[$15+4>>2]=0;HEAP32[$15+8>>2]=$16;HEAP32[$call_i>>2]=$17;var $__begin_node__i43_i_i=$mParamCommands_i|0;var $19=HEAP32[HEAP32[$__begin_node__i43_i_i>>2]>>2];if(($19|0)==0){var $21=$17}else{HEAP32[$__begin_node__i43_i_i>>2]=$19;var $21=HEAP32[$call_i>>2]}var $21;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[$6+20>>2],$21);var $__first__i_i_i_i_i69=$6+28|0;HEAP32[$__first__i_i_i_i_i69>>2]=HEAP32[$__first__i_i_i_i_i69>>2]+1;var $__r_0_i=$15}else{var $__r_0_i=$14}var $__r_0_i;HEAP32[$__r_0_i+28>>2]=__ZN4Ogre13ScaleAffector10msScaleCmdE;if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+8>>2])}if((HEAP8[$ref_tmp13]&1)!=0){__ZdlPv(HEAP32[$__data__i_i49>>2])}if((HEAP8[$__size__i50_i20]&1)==0){STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp11+8>>2]);STACKTOP=sp;return}}while(0);var $46$0=___cxa_find_matching_catch(-1,-1);var $47=$46$0;var $48=tempRet0;if((HEAP8[$ref_tmp10+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp10+20>>2])}if((HEAP8[$ref_tmp10]&1)==0){var $exn_slot_0=$47;var $ehselector_slot_0=$48;break}__ZdlPv(HEAP32[$ref_tmp10+8>>2]);var $exn_slot_0=$47;var $ehselector_slot_0=$48}else{var $43$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_0=$43$0;var $ehselector_slot_0=tempRet0}}while(0);var $ehselector_slot_0;var $exn_slot_0;if((HEAP8[$ref_tmp13]&1)==0){var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0;break}__ZdlPv(HEAP32[$__data__i_i49>>2]);var $exn_slot_1=$exn_slot_0;var $ehselector_slot_1=$ehselector_slot_0}else{var $40$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_1=$40$0;var $ehselector_slot_1=tempRet0}}while(0);var $ehselector_slot_1;var $exn_slot_1;if((HEAP8[$__size__i50_i20]&1)==0){var $exn_slot_2=$exn_slot_1;var $ehselector_slot_2=$ehselector_slot_1;break}__ZdlPv(HEAP32[$ref_tmp11+8>>2]);var $exn_slot_2=$exn_slot_1;var $ehselector_slot_2=$ehselector_slot_1}else{label=28}}while(0);if(label==28){var $32$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_2=$32$0;var $ehselector_slot_2=tempRet0}var $ehselector_slot_2;var $exn_slot_2;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($exn_slot_2)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN4Ogre13ScaleAffector16_affectParticlesEPNS_14ParticleSystemEf(r1,r2,r3){var r4,r5,r6,r7,r8,r9;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;__ZN4Ogre14ParticleSystem12_getIteratorEv(r5,r2);r6=HEAPF32[r1+36>>2]*r3;if(__ZN4Ogre16ParticleIterator3endEv(r5)){STACKTOP=r4;return}r3=r2;while(1){r1=__ZN4Ogre16ParticleIterator7getNextEv(r5);if((HEAP8[r1+8|0]&1)==0){r7=FUNCTION_TABLE[HEAP32[HEAP32[r3>>2]+76>>2]](r2);r8=FUNCTION_TABLE[HEAP32[HEAP32[r3>>2]+84>>2]](r2);r9=r7}else{r8=HEAPF32[r1+16>>2];r9=HEAPF32[r1+12>>2]}__ZN4Ogre8Particle13setDimensionsEff(r1,r6+r9,r6+r8);if(__ZN4Ogre16ParticleIterator3endEv(r5)){break}}STACKTOP=r4;return}function __ZN4Ogre13ScaleAffector9setAdjustEf(r1,r2){HEAPF32[r1+36>>2]=r2;return}function __ZNK4Ogre13ScaleAffector9getAdjustEv(r1){return HEAPF32[r1+36>>2]}function __ZNK4Ogre13ScaleAffector14CmdScaleAdjust5doGetEPKv(r1,r2,r3){__ZN4Ogre15StringConverter8toStringEfttcj(r1,HEAPF32[r3+36>>2],6,0,32,0);return}function __ZN4Ogre13ScaleAffector14CmdScaleAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE(r1,r2,r3){HEAPF32[r2+36>>2]=__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf(r3,0);return}function __ZN4Ogre13ScaleAffector14CmdScaleAdjustD0Ev(r1){__ZdlPv(r1);return}function __ZN4Ogre13ScaleAffectorD1Ev(r1){__ZN4Ogre16ParticleAffectorD2Ev(r1|0);return}function __ZN4Ogre13ScaleAffectorD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN4Ogre16ParticleAffectorD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZN4Ogre12NedAllocImpl12deallocBytesEPv($this);return}var $2$0=___cxa_find_matching_catch(-1,-1);var $3=$this;((function(){try{__THREW__=0;return __ZN4Ogre12NedAllocImpl12deallocBytesEPv($3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($2$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function _i64Add(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1+r3>>>0;r6=r2+r4+(r5>>>0<r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _i64Subtract(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1-r3>>>0;r6=r2-r4>>>0;r6=r2-r4-(r3>>>0>r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _bitshift64Shl(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2<<r3|(r1&r4<<32-r3)>>>32-r3;return r1<<r3}tempRet0=r1<<r3-32;return 0}function _bitshift64Lshr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=0;return r2>>>r3-32|0}function _bitshift64Ashr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=(r2|0)<0?-1:0;return r2>>r3-32|0}function _llvm_ctlz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[ctlz_i8+(r1>>>24)|0];if((r2|0)<8)return r2|0;r2=HEAP8[ctlz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[ctlz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[ctlz_i8+(r1&255)|0]+24|0}var ctlz_i8=allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",ALLOC_DYNAMIC);function _llvm_cttz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[cttz_i8+(r1&255)|0];if((r2|0)<8)return r2|0;r2=HEAP8[cttz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[cttz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[cttz_i8+(r1>>>24)|0]+24|0}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_DYNAMIC);function ___muldsi3(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=0,r4=0,r5=0,r6=0,r7=0,r8=0,r9=0;r3=r1&65535;r4=r2&65535;r5=Math_imul(r4,r3)|0;r6=r1>>>16;r7=(r5>>>16)+Math_imul(r4,r6)|0;r8=r2>>>16;r9=Math_imul(r8,r3)|0;return(tempRet0=(r7>>>16)+Math_imul(r8,r6)+(((r7&65535)+r9|0)>>>16)|0,r7+r9<<16|r5&65535|0)|0}function ___divdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r5=r2>>31|((r2|0)<0?-1:0)<<1;r6=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r7=r4>>31|((r4|0)<0?-1:0)<<1;r8=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r9=_i64Subtract(r5^r1,r6^r2,r5,r6)|0;r10=tempRet0;r11=_i64Subtract(r7^r3,r8^r4,r7,r8)|0;r12=r7^r5;r13=r8^r6;r14=___udivmoddi4(r9,r10,r11,tempRet0,0)|0;r15=_i64Subtract(r14^r12,tempRet0^r13,r12,r13)|0;return(tempRet0=tempRet0,r15)|0}function ___remdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r15=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r15|0;r6=r2>>31|((r2|0)<0?-1:0)<<1;r7=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r8=r4>>31|((r4|0)<0?-1:0)<<1;r9=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r10=_i64Subtract(r6^r1,r7^r2,r6,r7)|0;r11=tempRet0;r12=_i64Subtract(r8^r3,r9^r4,r8,r9)|0;___udivmoddi4(r10,r11,r12,tempRet0,r5)|0;r13=_i64Subtract(HEAP32[r5>>2]^r6,HEAP32[r5+4>>2]^r7,r6,r7)|0;r14=tempRet0;STACKTOP=r15;return(tempRet0=r14,r13)|0}function ___muldi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0;r5=r1;r6=r3;r7=___muldsi3(r5,r6)|0;r8=tempRet0;r9=Math_imul(r2,r6)|0;return(tempRet0=Math_imul(r4,r5)+r9+r8|r8&0,r7&-1|0)|0}function ___udivdi3(r1,r2,r3,r4){var r5;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0;r5=___udivmoddi4(r1,r2,r3,r4,0)|0;return(tempRet0=tempRet0,r5)|0}function ___uremdi3(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r6=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r6|0;___udivmoddi4(r1,r2,r3,r4,r5)|0;STACKTOP=r6;return(tempRet0=HEAP32[r5+4>>2]|0,HEAP32[r5>>2]|0)|0}function ___udivmoddi4(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=r5|0;r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0,r16=0,r17=0,r18=0,r19=0,r20=0,r21=0,r22=0,r23=0,r24=0,r25=0,r26=0,r27=0,r28=0,r29=0,r30=0,r31=0,r32=0,r33=0,r34=0,r35=0,r36=0,r37=0,r38=0,r39=0,r40=0,r41=0,r42=0,r43=0,r44=0,r45=0,r46=0,r47=0,r48=0,r49=0,r50=0,r51=0,r52=0,r53=0,r54=0,r55=0,r56=0,r57=0,r58=0,r59=0,r60=0,r61=0,r62=0,r63=0,r64=0,r65=0,r66=0,r67=0,r68=0,r69=0;r6=r1;r7=r2;r8=r7;r9=r3;r10=r4;r11=r10;if((r8|0)==0){r12=(r5|0)!=0;if((r11|0)==0){if(r12){HEAP32[r5>>2]=(r6>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r6>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}else{if(!r12){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}}r13=(r11|0)==0;do{if((r9|0)==0){if(r13){if((r5|0)!=0){HEAP32[r5>>2]=(r8>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r8>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}if((r6|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=(r8>>>0)%(r11>>>0)}r69=0;r68=(r8>>>0)/(r11>>>0)>>>0;return(tempRet0=r69,r68)|0}r14=r11-1|0;if((r14&r11|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r14&r8|r2&0}r69=0;r68=r8>>>((_llvm_cttz_i32(r11|0)|0)>>>0);return(tempRet0=r69,r68)|0}r15=_llvm_ctlz_i32(r11|0)|0;r16=r15-_llvm_ctlz_i32(r8|0)|0;if(r16>>>0<=30){r17=r16+1|0;r18=31-r16|0;r37=r17;r36=r8<<r18|r6>>>(r17>>>0);r35=r8>>>(r17>>>0);r34=0;r33=r6<<r18;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}else{if(!r13){r28=_llvm_ctlz_i32(r11|0)|0;r29=r28-_llvm_ctlz_i32(r8|0)|0;if(r29>>>0<=31){r30=r29+1|0;r31=31-r29|0;r32=r29-31>>31;r37=r30;r36=r6>>>(r30>>>0)&r32|r8<<r31;r35=r8>>>(r30>>>0)&r32;r34=0;r33=r6<<r31;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}r19=r9-1|0;if((r19&r9|0)!=0){r21=_llvm_ctlz_i32(r9|0)+33|0;r22=r21-_llvm_ctlz_i32(r8|0)|0;r23=64-r22|0;r24=32-r22|0;r25=r24>>31;r26=r22-32|0;r27=r26>>31;r37=r22;r36=r24-1>>31&r8>>>(r26>>>0)|(r8<<r24|r6>>>(r22>>>0))&r27;r35=r27&r8>>>(r22>>>0);r34=r6<<r23&r25;r33=(r8<<r23|r6>>>(r26>>>0))&r25|r6<<r24&r22-33>>31;break}if((r5|0)!=0){HEAP32[r5>>2]=r19&r6;HEAP32[r5+4>>2]=0}if((r9|0)==1){r69=r7|r2&0;r68=r1&-1|0;return(tempRet0=r69,r68)|0}else{r20=_llvm_cttz_i32(r9|0)|0;r69=r8>>>(r20>>>0)|0;r68=r8<<32-r20|r6>>>(r20>>>0)|0;return(tempRet0=r69,r68)|0}}}while(0);if((r37|0)==0){r64=r33;r63=r34;r62=r35;r61=r36;r60=0;r59=0}else{r38=r3&-1|0;r39=r10|r4&0;r40=_i64Add(r38,r39,-1,-1)|0;r41=tempRet0;r47=r33;r46=r34;r45=r35;r44=r36;r43=r37;r42=0;while(1){r48=r46>>>31|r47<<1;r49=r42|r46<<1;r50=r44<<1|r47>>>31|0;r51=r44>>>31|r45<<1|0;_i64Subtract(r40,r41,r50,r51)|0;r52=tempRet0;r53=r52>>31|((r52|0)<0?-1:0)<<1;r54=r53&1;r55=_i64Subtract(r50,r51,r53&r38,(((r52|0)<0?-1:0)>>31|((r52|0)<0?-1:0)<<1)&r39)|0;r56=r55;r57=tempRet0;r58=r43-1|0;if((r58|0)==0){break}else{r47=r48;r46=r49;r45=r57;r44=r56;r43=r58;r42=r54}}r64=r48;r63=r49;r62=r57;r61=r56;r60=0;r59=r54}r65=r63;r66=0;r67=r64|r66;if((r5|0)!=0){HEAP32[r5>>2]=r61;HEAP32[r5+4>>2]=r62}r69=(r65|0)>>>31|r67<<1|(r66<<1|r65>>>31)&0|r60;r68=(r65<<1|0>>>31)&-2|r59;return(tempRet0=r69,r68)|0}
// EMSCRIPTEN_END_FUNCS
Module["__ZN4Ogre11AreaEmitter8CmdWidthD1Ev"] = __ZN4Ogre11AreaEmitter8CmdWidthD1Ev;
Module["__ZN4Ogre11AreaEmitter9CmdHeightD1Ev"] = __ZN4Ogre11AreaEmitter9CmdHeightD1Ev;
Module["__ZN4Ogre11AreaEmitter8CmdDepthD1Ev"] = __ZN4Ogre11AreaEmitter8CmdDepthD1Ev;
Module["__ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE"] = __ZN4Ogre11AreaEmitter12initDefaultsERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE;
Module["__ZN4Ogre11AreaEmitter7setSizeEfff"] = __ZN4Ogre11AreaEmitter7setSizeEfff;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_;
Module["__ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE"] = __ZN4Ogre15StringInterface21createParamDictionaryERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE;
Module["__ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6_"] = __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6_;
Module["__ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE"] = __ZN4Ogre15ParamDictionary12addParameterERKNS_12ParameterDefEPNS_12ParamCommandE;
Module["__ZN4Ogre11AreaEmitter17_getEmissionCountEf"] = __ZN4Ogre11AreaEmitter17_getEmissionCountEf;
Module["__ZN4Ogre11AreaEmitter12setDirectionERKNS_7Vector3E"] = __ZN4Ogre11AreaEmitter12setDirectionERKNS_7Vector3E;
Module["__ZN4Ogre11AreaEmitter11genAreaAxesEv"] = __ZN4Ogre11AreaEmitter11genAreaAxesEv;
Module["__ZN4Ogre11AreaEmitter7setSizeERKNS_7Vector3E"] = __ZN4Ogre11AreaEmitter7setSizeERKNS_7Vector3E;
Module["__ZN4Ogre11AreaEmitter8setWidthEf"] = __ZN4Ogre11AreaEmitter8setWidthEf;
Module["__ZNK4Ogre11AreaEmitter8getWidthEv"] = __ZNK4Ogre11AreaEmitter8getWidthEv;
Module["__ZN4Ogre11AreaEmitter9setHeightEf"] = __ZN4Ogre11AreaEmitter9setHeightEf;
Module["__ZNK4Ogre11AreaEmitter9getHeightEv"] = __ZNK4Ogre11AreaEmitter9getHeightEv;
Module["__ZN4Ogre11AreaEmitter8setDepthEf"] = __ZN4Ogre11AreaEmitter8setDepthEf;
Module["__ZNK4Ogre11AreaEmitter8getDepthEv"] = __ZNK4Ogre11AreaEmitter8getDepthEv;
Module["__ZNK4Ogre11AreaEmitter8CmdWidth5doGetEPKv"] = __ZNK4Ogre11AreaEmitter8CmdWidth5doGetEPKv;
Module["__ZN4Ogre11AreaEmitter8CmdWidth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre11AreaEmitter8CmdWidth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre11AreaEmitter9CmdHeight5doGetEPKv"] = __ZNK4Ogre11AreaEmitter9CmdHeight5doGetEPKv;
Module["__ZN4Ogre11AreaEmitter9CmdHeight5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre11AreaEmitter9CmdHeight5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre11AreaEmitter8CmdDepth5doGetEPKv"] = __ZNK4Ogre11AreaEmitter8CmdDepth5doGetEPKv;
Module["__ZN4Ogre11AreaEmitter8CmdDepth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre11AreaEmitter8CmdDepth5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre11AreaEmitterD1Ev"] = __ZN4Ogre11AreaEmitterD1Ev;
Module["__ZN4Ogre11AreaEmitterD0Ev"] = __ZN4Ogre11AreaEmitterD0Ev;
Module["__ZNK4Ogre15StringInterface12getParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE"] = __ZNK4Ogre15StringInterface12getParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE;
Module["__ZNK4Ogre15StringInterface16copyParametersToEPS0_"] = __ZNK4Ogre15StringInterface16copyParametersToEPS0_;
Module["__ZN4Ogre15ParticleEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre15ParticleEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre11AreaEmitter8CmdWidthD0Ev"] = __ZN4Ogre11AreaEmitter8CmdWidthD0Ev;
Module["__ZN4Ogre11AreaEmitter9CmdHeightD0Ev"] = __ZN4Ogre11AreaEmitter9CmdHeightD0Ev;
Module["__ZN4Ogre11AreaEmitter8CmdDepthD0Ev"] = __ZN4Ogre11AreaEmitter8CmdDepthD0Ev;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc;
Module["__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv"] = __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv;
Module["__ZNKSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_PvEEiEERKT_"] = __ZNKSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_PvEEiEERKT_;
Module["__ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE"] = __ZN4Ogre12ParameterDefC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_NS_13ParameterTypeE;
Module["__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_"] = __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSE_;
Module["__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_"] = __ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandENS_4lessIS6_EENS7_12STLAllocatorINS_4pairIKS6_S9_EENS7_22CategorisedAllocPolicyILNS7_14MemoryCategoryE0EEEEEE25__construct_node_with_keyERSE_;
Module["__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_"] = __ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_;
Module["__ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_"] = __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS2_EEvRT_;
Module["__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv"] = __ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv;
Module["__ZN4Ogre12ParameterDefC2ERKS0_"] = __ZN4Ogre12ParameterDefC2ERKS0_;
Module["__ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev"] = __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEED1Ev;
Module["__ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE7destroyEPNS_11__tree_nodeISB_PvEE;
Module["__ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorINSt3__111__tree_nodeINS1_12__value_typeINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_12ParamCommandEEEPvEENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorINS_12ParameterDefENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre15ParamDictionaryC2ERKS0_"] = __ZN4Ogre15ParamDictionaryC2ERKS0_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_SO_EEiEESR_RKT_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorISB_PNS_11__tree_nodeISB_SO_EEiEESR_RKT_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSB_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSB_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEESR_RKT_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN4Ogre12ParamCommandEEENS_19__map_value_compareIS7_SB_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISB_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISB_EERPNS_16__tree_node_baseIPvEESR_RKT_;
Module["__ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEEC2ERKS8_"] = __ZNSt3__16vectorIN4Ogre12ParameterDefENS1_12STLAllocatorIS2_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEEC2ERKS8_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISA_EERPNS_16__tree_node_baseIPvEESQ_RKT_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE12__find_equalISA_EERPNS_16__tree_node_baseIPvEESQ_RKT_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSA_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE16__construct_nodeERKSA_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE4findIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE13__lower_boundIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_SQ_SQ_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN4Ogre15ParamDictionaryEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS8_12STLAllocatorISA_NS8_22CategorisedAllocPolicyILNS8_14MemoryCategoryE0EEEEEE13__lower_boundIS7_EENS_15__tree_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERKT_SQ_SQ_;
Module["__ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre10BoxEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre10BoxEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre10BoxEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre10BoxEmitterD1Ev"] = __ZN4Ogre10BoxEmitterD1Ev;
Module["__ZN4Ogre10BoxEmitterD0Ev"] = __ZN4Ogre10BoxEmitterD0Ev;
Module["__ZN4Ogre19ColourFaderAffector12CmdRedAdjustD1Ev"] = __ZN4Ogre19ColourFaderAffector12CmdRedAdjustD1Ev;
Module["__ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD1Ev"] = __ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD1Ev;
Module["__ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD1Ev"] = __ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD1Ev;
Module["__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD1Ev"] = __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD1Ev;
Module["__ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre19ColourFaderAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre19ColourFaderAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre19ColourFaderAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre19ColourFaderAffector9setAdjustEffff"] = __ZN4Ogre19ColourFaderAffector9setAdjustEffff;
Module["__ZN4Ogre19ColourFaderAffector12setRedAdjustEf"] = __ZN4Ogre19ColourFaderAffector12setRedAdjustEf;
Module["__ZNK4Ogre19ColourFaderAffector12getRedAdjustEv"] = __ZNK4Ogre19ColourFaderAffector12getRedAdjustEv;
Module["__ZN4Ogre19ColourFaderAffector14setGreenAdjustEf"] = __ZN4Ogre19ColourFaderAffector14setGreenAdjustEf;
Module["__ZNK4Ogre19ColourFaderAffector14getGreenAdjustEv"] = __ZNK4Ogre19ColourFaderAffector14getGreenAdjustEv;
Module["__ZN4Ogre19ColourFaderAffector13setBlueAdjustEf"] = __ZN4Ogre19ColourFaderAffector13setBlueAdjustEf;
Module["__ZNK4Ogre19ColourFaderAffector13getBlueAdjustEv"] = __ZNK4Ogre19ColourFaderAffector13getBlueAdjustEv;
Module["__ZN4Ogre19ColourFaderAffector14setAlphaAdjustEf"] = __ZN4Ogre19ColourFaderAffector14setAlphaAdjustEf;
Module["__ZNK4Ogre19ColourFaderAffector14getAlphaAdjustEv"] = __ZNK4Ogre19ColourFaderAffector14getAlphaAdjustEv;
Module["__ZNK4Ogre19ColourFaderAffector12CmdRedAdjust5doGetEPKv"] = __ZNK4Ogre19ColourFaderAffector12CmdRedAdjust5doGetEPKv;
Module["__ZN4Ogre19ColourFaderAffector12CmdRedAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19ColourFaderAffector12CmdRedAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre19ColourFaderAffector14CmdGreenAdjust5doGetEPKv"] = __ZNK4Ogre19ColourFaderAffector14CmdGreenAdjust5doGetEPKv;
Module["__ZN4Ogre19ColourFaderAffector14CmdGreenAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19ColourFaderAffector14CmdGreenAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre19ColourFaderAffector13CmdBlueAdjust5doGetEPKv"] = __ZNK4Ogre19ColourFaderAffector13CmdBlueAdjust5doGetEPKv;
Module["__ZN4Ogre19ColourFaderAffector13CmdBlueAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19ColourFaderAffector13CmdBlueAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre19ColourFaderAffector14CmdAlphaAdjust5doGetEPKv"] = __ZNK4Ogre19ColourFaderAffector14CmdAlphaAdjust5doGetEPKv;
Module["__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre19ColourFaderAffector12CmdRedAdjustD0Ev"] = __ZN4Ogre19ColourFaderAffector12CmdRedAdjustD0Ev;
Module["__ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD0Ev"] = __ZN4Ogre19ColourFaderAffector14CmdGreenAdjustD0Ev;
Module["__ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD0Ev"] = __ZN4Ogre19ColourFaderAffector13CmdBlueAdjustD0Ev;
Module["__ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD0Ev"] = __ZN4Ogre19ColourFaderAffector14CmdAlphaAdjustD0Ev;
Module["__ZN4Ogre19ColourFaderAffectorD1Ev"] = __ZN4Ogre19ColourFaderAffectorD1Ev;
Module["__ZN4Ogre19ColourFaderAffectorD0Ev"] = __ZN4Ogre19ColourFaderAffectorD0Ev;
Module["__ZN4Ogre16ParticleAffector13_initParticleEPNS_8ParticleE"] = __ZN4Ogre16ParticleAffector13_initParticleEPNS_8ParticleE;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D1Ev"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D1Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D1Ev"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D1Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D1Ev"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D1Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D1Ev"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D1Ev;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D1Ev"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D1Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D1Ev"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D1Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D1Ev"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D1Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D1Ev"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D1Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdStateChangeD1Ev"] = __ZN4Ogre20ColourFaderAffector214CmdStateChangeD1Ev;
Module["__ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE"] = __ZN4Ogre20ColourFaderAffector2C2EPNS_14ParticleSystemE;
Module["__ZN4Ogre20ColourFaderAffector216_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre20ColourFaderAffector216_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre20ColourFaderAffector210setAdjust1Effff"] = __ZN4Ogre20ColourFaderAffector210setAdjust1Effff;
Module["__ZN4Ogre20ColourFaderAffector210setAdjust2Effff"] = __ZN4Ogre20ColourFaderAffector210setAdjust2Effff;
Module["__ZN4Ogre20ColourFaderAffector213setRedAdjust1Ef"] = __ZN4Ogre20ColourFaderAffector213setRedAdjust1Ef;
Module["__ZN4Ogre20ColourFaderAffector213setRedAdjust2Ef"] = __ZN4Ogre20ColourFaderAffector213setRedAdjust2Ef;
Module["__ZNK4Ogre20ColourFaderAffector213getRedAdjust1Ev"] = __ZNK4Ogre20ColourFaderAffector213getRedAdjust1Ev;
Module["__ZNK4Ogre20ColourFaderAffector213getRedAdjust2Ev"] = __ZNK4Ogre20ColourFaderAffector213getRedAdjust2Ev;
Module["__ZN4Ogre20ColourFaderAffector215setGreenAdjust1Ef"] = __ZN4Ogre20ColourFaderAffector215setGreenAdjust1Ef;
Module["__ZN4Ogre20ColourFaderAffector215setGreenAdjust2Ef"] = __ZN4Ogre20ColourFaderAffector215setGreenAdjust2Ef;
Module["__ZNK4Ogre20ColourFaderAffector215getGreenAdjust1Ev"] = __ZNK4Ogre20ColourFaderAffector215getGreenAdjust1Ev;
Module["__ZNK4Ogre20ColourFaderAffector215getGreenAdjust2Ev"] = __ZNK4Ogre20ColourFaderAffector215getGreenAdjust2Ev;
Module["__ZN4Ogre20ColourFaderAffector214setBlueAdjust1Ef"] = __ZN4Ogre20ColourFaderAffector214setBlueAdjust1Ef;
Module["__ZN4Ogre20ColourFaderAffector214setBlueAdjust2Ef"] = __ZN4Ogre20ColourFaderAffector214setBlueAdjust2Ef;
Module["__ZNK4Ogre20ColourFaderAffector214getBlueAdjust1Ev"] = __ZNK4Ogre20ColourFaderAffector214getBlueAdjust1Ev;
Module["__ZNK4Ogre20ColourFaderAffector214getBlueAdjust2Ev"] = __ZNK4Ogre20ColourFaderAffector214getBlueAdjust2Ev;
Module["__ZN4Ogre20ColourFaderAffector215setAlphaAdjust1Ef"] = __ZN4Ogre20ColourFaderAffector215setAlphaAdjust1Ef;
Module["__ZN4Ogre20ColourFaderAffector215setAlphaAdjust2Ef"] = __ZN4Ogre20ColourFaderAffector215setAlphaAdjust2Ef;
Module["__ZNK4Ogre20ColourFaderAffector215getAlphaAdjust1Ev"] = __ZNK4Ogre20ColourFaderAffector215getAlphaAdjust1Ev;
Module["__ZNK4Ogre20ColourFaderAffector215getAlphaAdjust2Ev"] = __ZNK4Ogre20ColourFaderAffector215getAlphaAdjust2Ev;
Module["__ZN4Ogre20ColourFaderAffector214setStateChangeEf"] = __ZN4Ogre20ColourFaderAffector214setStateChangeEf;
Module["__ZNK4Ogre20ColourFaderAffector214getStateChangeEv"] = __ZNK4Ogre20ColourFaderAffector214getStateChangeEv;
Module["__ZNK4Ogre20ColourFaderAffector213CmdRedAdjust15doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector213CmdRedAdjust15doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector213CmdRedAdjust25doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector213CmdRedAdjust25doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust15doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust15doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust25doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector215CmdGreenAdjust25doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust15doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust15doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust25doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector214CmdBlueAdjust25doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust15doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust15doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust15doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust25doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector215CmdAlphaAdjust25doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust25doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre20ColourFaderAffector214CmdStateChange5doGetEPKv"] = __ZNK4Ogre20ColourFaderAffector214CmdStateChange5doGetEPKv;
Module["__ZN4Ogre20ColourFaderAffector214CmdStateChange5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre20ColourFaderAffector214CmdStateChange5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D0Ev"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust1D0Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D0Ev"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust1D0Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D0Ev"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust1D0Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D0Ev"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust1D0Ev;
Module["__ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D0Ev"] = __ZN4Ogre20ColourFaderAffector213CmdRedAdjust2D0Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D0Ev"] = __ZN4Ogre20ColourFaderAffector215CmdGreenAdjust2D0Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D0Ev"] = __ZN4Ogre20ColourFaderAffector214CmdBlueAdjust2D0Ev;
Module["__ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D0Ev"] = __ZN4Ogre20ColourFaderAffector215CmdAlphaAdjust2D0Ev;
Module["__ZN4Ogre20ColourFaderAffector214CmdStateChangeD0Ev"] = __ZN4Ogre20ColourFaderAffector214CmdStateChangeD0Ev;
Module["__ZN4Ogre20ColourFaderAffector2D1Ev"] = __ZN4Ogre20ColourFaderAffector2D1Ev;
Module["__ZN4Ogre20ColourFaderAffector2D0Ev"] = __ZN4Ogre20ColourFaderAffector2D0Ev;
Module["__ZN4Ogre19ColourImageAffector14CmdImageAdjustD1Ev"] = __ZN4Ogre19ColourImageAffector14CmdImageAdjustD1Ev;
Module["__ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre19ColourImageAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre19ColourImageAffector13_initParticleEPNS_8ParticleE"] = __ZN4Ogre19ColourImageAffector13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre19ColourImageAffector10_loadImageEv"] = __ZN4Ogre19ColourImageAffector10_loadImageEv;
Module["__ZN4Ogre19ColourImageAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre19ColourImageAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre19ColourImageAffector14setImageAdjustENSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE"] = __ZN4Ogre19ColourImageAffector14setImageAdjustENSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE;
Module["__ZN4Ogre26InvalidParametersExceptionD1Ev"] = __ZN4Ogre26InvalidParametersExceptionD1Ev;
Module["__ZNK4Ogre19ColourImageAffector14getImageAdjustEv"] = __ZNK4Ogre19ColourImageAffector14getImageAdjustEv;
Module["__ZNK4Ogre19ColourImageAffector14CmdImageAdjust5doGetEPKv"] = __ZNK4Ogre19ColourImageAffector14CmdImageAdjust5doGetEPKv;
Module["__ZN4Ogre19ColourImageAffector14CmdImageAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19ColourImageAffector14CmdImageAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre19ColourImageAffector14CmdImageAdjustD0Ev"] = __ZN4Ogre19ColourImageAffector14CmdImageAdjustD0Ev;
Module["__ZN4Ogre19ColourImageAffectorD1Ev"] = __ZN4Ogre19ColourImageAffectorD1Ev;
Module["__ZN4Ogre19ColourImageAffectorD0Ev"] = __ZN4Ogre19ColourImageAffectorD0Ev;
Module["__ZN4Ogre9ExceptionD2Ev"] = __ZN4Ogre9ExceptionD2Ev;
Module["__ZN4Ogre26InvalidParametersExceptionD0Ev"] = __ZN4Ogre26InvalidParametersExceptionD0Ev;
Module["__ZNK4Ogre9Exception4whatEv"] = __ZNK4Ogre9Exception4whatEv;
Module["__ZNK4Ogre9Exception9getSourceEv"] = __ZNK4Ogre9Exception9getSourceEv;
Module["__ZNK4Ogre9Exception7getFileEv"] = __ZNK4Ogre9Exception7getFileEv;
Module["__ZNK4Ogre9Exception7getLineEv"] = __ZNK4Ogre9Exception7getLineEv;
Module["__ZNK4Ogre9Exception14getDescriptionEv"] = __ZNK4Ogre9Exception14getDescriptionEv;
Module["___cxx_global_array_dtor"] = ___cxx_global_array_dtor;
Module["__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD1Ev"] = __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD1Ev;
Module["___cxx_global_array_dtor2"] = ___cxx_global_array_dtor2;
Module["__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD1Ev"] = __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD1Ev;
Module["__ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre26ColourInterpolatorAffectorC2EPNS_14ParticleSystemE;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEi"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEi;
Module["__ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_"] = __ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_SB_;
Module["__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZN4Ogre26ColourInterpolatorAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre26ColourInterpolatorAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre26ColourInterpolatorAffector15setColourAdjustEjNS_11ColourValueE"] = __ZN4Ogre26ColourInterpolatorAffector15setColourAdjustEjNS_11ColourValueE;
Module["__ZNK4Ogre26ColourInterpolatorAffector15getColourAdjustEj"] = __ZNK4Ogre26ColourInterpolatorAffector15getColourAdjustEj;
Module["__ZN4Ogre26ColourInterpolatorAffector13setTimeAdjustEjf"] = __ZN4Ogre26ColourInterpolatorAffector13setTimeAdjustEjf;
Module["__ZNK4Ogre26ColourInterpolatorAffector13getTimeAdjustEj"] = __ZNK4Ogre26ColourInterpolatorAffector13getTimeAdjustEj;
Module["__ZNK4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doGetEPKv"] = __ZNK4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doGetEPKv;
Module["__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doGetEPKv"] = __ZNK4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doGetEPKv;
Module["__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD0Ev"] = __ZN4Ogre26ColourInterpolatorAffector15CmdColourAdjustD0Ev;
Module["__ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD0Ev"] = __ZN4Ogre26ColourInterpolatorAffector13CmdTimeAdjustD0Ev;
Module["__ZN4Ogre26ColourInterpolatorAffectorD1Ev"] = __ZN4Ogre26ColourInterpolatorAffectorD1Ev;
Module["__ZN4Ogre26ColourInterpolatorAffectorD0Ev"] = __ZN4Ogre26ColourInterpolatorAffectorD0Ev;
Module["__ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv"] = __ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv;
Module["__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZThn8_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZTv0_n12_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev"] = __ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev;
Module["__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev"] = __ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev;
Module["__ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev"] = __ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev;
Module["__ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev"] = __ZTv0_n12_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi;
Module["__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi"] = __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi;
Module["__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE"] = __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE;
Module["__GLOBAL__I_a"] = __GLOBAL__I_a;
Module["__ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre15CylinderEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre15CylinderEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre15CylinderEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre15CylinderEmitterD1Ev"] = __ZN4Ogre15CylinderEmitterD1Ev;
Module["__ZN4Ogre15CylinderEmitterD0Ev"] = __ZN4Ogre15CylinderEmitterD0Ev;
Module["__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD1Ev"] = __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD1Ev;
Module["__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD1Ev"] = __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD1Ev;
Module["__ZN4Ogre22DeflectorPlaneAffector9CmdBounceD1Ev"] = __ZN4Ogre22DeflectorPlaneAffector9CmdBounceD1Ev;
Module["__ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre22DeflectorPlaneAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre22DeflectorPlaneAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre22DeflectorPlaneAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre22DeflectorPlaneAffector13setPlanePointERKNS_7Vector3E"] = __ZN4Ogre22DeflectorPlaneAffector13setPlanePointERKNS_7Vector3E;
Module["__ZN4Ogre22DeflectorPlaneAffector14setPlaneNormalERKNS_7Vector3E"] = __ZN4Ogre22DeflectorPlaneAffector14setPlaneNormalERKNS_7Vector3E;
Module["__ZN4Ogre22DeflectorPlaneAffector9setBounceEf"] = __ZN4Ogre22DeflectorPlaneAffector9setBounceEf;
Module["__ZNK4Ogre22DeflectorPlaneAffector13getPlanePointEv"] = __ZNK4Ogre22DeflectorPlaneAffector13getPlanePointEv;
Module["__ZNK4Ogre22DeflectorPlaneAffector14getPlaneNormalEv"] = __ZNK4Ogre22DeflectorPlaneAffector14getPlaneNormalEv;
Module["__ZNK4Ogre22DeflectorPlaneAffector9getBounceEv"] = __ZNK4Ogre22DeflectorPlaneAffector9getBounceEv;
Module["__ZNK4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doGetEPKv"] = __ZNK4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doGetEPKv;
Module["__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePoint5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doGetEPKv"] = __ZNK4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doGetEPKv;
Module["__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormal5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre22DeflectorPlaneAffector9CmdBounce5doGetEPKv"] = __ZNK4Ogre22DeflectorPlaneAffector9CmdBounce5doGetEPKv;
Module["__ZN4Ogre22DeflectorPlaneAffector9CmdBounce5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22DeflectorPlaneAffector9CmdBounce5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD0Ev"] = __ZN4Ogre22DeflectorPlaneAffector13CmdPlanePointD0Ev;
Module["__ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD0Ev"] = __ZN4Ogre22DeflectorPlaneAffector14CmdPlaneNormalD0Ev;
Module["__ZN4Ogre22DeflectorPlaneAffector9CmdBounceD0Ev"] = __ZN4Ogre22DeflectorPlaneAffector9CmdBounceD0Ev;
Module["__ZN4Ogre22DeflectorPlaneAffectorD1Ev"] = __ZN4Ogre22DeflectorPlaneAffectorD1Ev;
Module["__ZN4Ogre22DeflectorPlaneAffectorD0Ev"] = __ZN4Ogre22DeflectorPlaneAffectorD0Ev;
Module["__ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD1Ev"] = __ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD1Ev;
Module["__ZN4Ogre27DirectionRandomiserAffector8CmdScopeD1Ev"] = __ZN4Ogre27DirectionRandomiserAffector8CmdScopeD1Ev;
Module["__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD1Ev"] = __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD1Ev;
Module["__ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre27DirectionRandomiserAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre27DirectionRandomiserAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre27DirectionRandomiserAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre27DirectionRandomiserAffector13setRandomnessEf"] = __ZN4Ogre27DirectionRandomiserAffector13setRandomnessEf;
Module["__ZN4Ogre27DirectionRandomiserAffector8setScopeEf"] = __ZN4Ogre27DirectionRandomiserAffector8setScopeEf;
Module["__ZN4Ogre27DirectionRandomiserAffector15setKeepVelocityEb"] = __ZN4Ogre27DirectionRandomiserAffector15setKeepVelocityEb;
Module["__ZNK4Ogre27DirectionRandomiserAffector13getRandomnessEv"] = __ZNK4Ogre27DirectionRandomiserAffector13getRandomnessEv;
Module["__ZNK4Ogre27DirectionRandomiserAffector8getScopeEv"] = __ZNK4Ogre27DirectionRandomiserAffector8getScopeEv;
Module["__ZNK4Ogre27DirectionRandomiserAffector15getKeepVelocityEv"] = __ZNK4Ogre27DirectionRandomiserAffector15getKeepVelocityEv;
Module["__ZNK4Ogre27DirectionRandomiserAffector13CmdRandomness5doGetEPKv"] = __ZNK4Ogre27DirectionRandomiserAffector13CmdRandomness5doGetEPKv;
Module["__ZN4Ogre27DirectionRandomiserAffector13CmdRandomness5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre27DirectionRandomiserAffector13CmdRandomness5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre27DirectionRandomiserAffector8CmdScope5doGetEPKv"] = __ZNK4Ogre27DirectionRandomiserAffector8CmdScope5doGetEPKv;
Module["__ZN4Ogre27DirectionRandomiserAffector8CmdScope5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre27DirectionRandomiserAffector8CmdScope5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doGetEPKv"] = __ZNK4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doGetEPKv;
Module["__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocity5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD0Ev"] = __ZN4Ogre27DirectionRandomiserAffector13CmdRandomnessD0Ev;
Module["__ZN4Ogre27DirectionRandomiserAffector8CmdScopeD0Ev"] = __ZN4Ogre27DirectionRandomiserAffector8CmdScopeD0Ev;
Module["__ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD0Ev"] = __ZN4Ogre27DirectionRandomiserAffector15CmdKeepVelocityD0Ev;
Module["__ZN4Ogre27DirectionRandomiserAffectorD1Ev"] = __ZN4Ogre27DirectionRandomiserAffectorD1Ev;
Module["__ZN4Ogre27DirectionRandomiserAffectorD0Ev"] = __ZN4Ogre27DirectionRandomiserAffectorD0Ev;
Module["__ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre16EllipsoidEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre16EllipsoidEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre16EllipsoidEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre16EllipsoidEmitterD1Ev"] = __ZN4Ogre16EllipsoidEmitterD1Ev;
Module["__ZN4Ogre16EllipsoidEmitterD0Ev"] = __ZN4Ogre16EllipsoidEmitterD0Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD1Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD1Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD1Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD1Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD1Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD1Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre22HollowEllipsoidEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff"] = __ZN4Ogre22HollowEllipsoidEmitter12setInnerSizeEfff;
Module["__ZN4Ogre22HollowEllipsoidEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre22HollowEllipsoidEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf"] = __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeXEf;
Module["__ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf"] = __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeYEf;
Module["__ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf"] = __ZN4Ogre22HollowEllipsoidEmitter13setInnerSizeZEf;
Module["__ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeXEv"] = __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeXEv;
Module["__ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeYEv"] = __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeYEv;
Module["__ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeZEv"] = __ZNK4Ogre22HollowEllipsoidEmitter13getInnerSizeZEv;
Module["__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerX5doGetEPKv"] = __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerX5doGetEPKv;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerY5doGetEPKv"] = __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerY5doGetEPKv;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doGetEPKv"] = __ZNK4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doGetEPKv;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZ5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD0Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerXD0Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD0Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerYD0Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD0Ev"] = __ZN4Ogre22HollowEllipsoidEmitter9CmdInnerZD0Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitterD1Ev"] = __ZN4Ogre22HollowEllipsoidEmitterD1Ev;
Module["__ZN4Ogre22HollowEllipsoidEmitterD0Ev"] = __ZN4Ogre22HollowEllipsoidEmitterD0Ev;
Module["__ZN4Ogre19LinearForceAffector14CmdForceVectorD1Ev"] = __ZN4Ogre19LinearForceAffector14CmdForceVectorD1Ev;
Module["__ZN4Ogre19LinearForceAffector11CmdForceAppD1Ev"] = __ZN4Ogre19LinearForceAffector11CmdForceAppD1Ev;
Module["__ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre19LinearForceAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre19LinearForceAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre19LinearForceAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre19LinearForceAffector14setForceVectorERKNS_7Vector3E"] = __ZN4Ogre19LinearForceAffector14setForceVectorERKNS_7Vector3E;
Module["__ZN4Ogre19LinearForceAffector19setForceApplicationENS0_16ForceApplicationE"] = __ZN4Ogre19LinearForceAffector19setForceApplicationENS0_16ForceApplicationE;
Module["__ZNK4Ogre19LinearForceAffector14getForceVectorEv"] = __ZNK4Ogre19LinearForceAffector14getForceVectorEv;
Module["__ZNK4Ogre19LinearForceAffector19getForceApplicationEv"] = __ZNK4Ogre19LinearForceAffector19getForceApplicationEv;
Module["__ZNK4Ogre19LinearForceAffector14CmdForceVector5doGetEPKv"] = __ZNK4Ogre19LinearForceAffector14CmdForceVector5doGetEPKv;
Module["__ZN4Ogre19LinearForceAffector14CmdForceVector5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19LinearForceAffector14CmdForceVector5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre19LinearForceAffector11CmdForceApp5doGetEPKv"] = __ZNK4Ogre19LinearForceAffector11CmdForceApp5doGetEPKv;
Module["__ZN4Ogre19LinearForceAffector11CmdForceApp5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre19LinearForceAffector11CmdForceApp5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre19LinearForceAffector14CmdForceVectorD0Ev"] = __ZN4Ogre19LinearForceAffector14CmdForceVectorD0Ev;
Module["__ZN4Ogre19LinearForceAffector11CmdForceAppD0Ev"] = __ZN4Ogre19LinearForceAffector11CmdForceAppD0Ev;
Module["__ZN4Ogre19LinearForceAffectorD1Ev"] = __ZN4Ogre19LinearForceAffectorD1Ev;
Module["__ZN4Ogre19LinearForceAffectorD0Ev"] = __ZN4Ogre19LinearForceAffectorD0Ev;
Module["_dllStartPlugin"] = _dllStartPlugin;
Module["_dllStopPlugin"] = _dllStopPlugin;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZN4Ogre16ParticleFXPluginC2Ev"] = __ZN4Ogre16ParticleFXPluginC2Ev;
Module["__ZNK4Ogre16ParticleFXPlugin7getNameEv"] = __ZNK4Ogre16ParticleFXPlugin7getNameEv;
Module["__ZN4Ogre16ParticleFXPlugin7installEv"] = __ZN4Ogre16ParticleFXPlugin7installEv;
Module["__ZN4Ogre16ParticleFXPlugin10initialiseEv"] = __ZN4Ogre16ParticleFXPlugin10initialiseEv;
Module["__ZN4Ogre16ParticleFXPlugin8shutdownEv"] = __ZN4Ogre16ParticleFXPlugin8shutdownEv;
Module["__ZN4Ogre16ParticleFXPlugin9uninstallEv"] = __ZN4Ogre16ParticleFXPlugin9uninstallEv;
Module["__ZN4Ogre16ParticleFXPluginD1Ev"] = __ZN4Ogre16ParticleFXPluginD1Ev;
Module["__ZN4Ogre16ParticleFXPluginD0Ev"] = __ZN4Ogre16ParticleFXPluginD0Ev;
Module["__ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_"] = __ZNSt3__16vectorIPN4Ogre23ParticleAffectorFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_;
Module["__ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_"] = __ZNSt3__16vectorIPN4Ogre22ParticleEmitterFactoryENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_;
Module["__ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorIPNS_23ParticleAffectorFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorIPNS_22ParticleEmitterFactoryENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre29DeflectorPlaneAffectorFactoryD1Ev"] = __ZN4Ogre29DeflectorPlaneAffectorFactoryD1Ev;
Module["__ZN4Ogre29DeflectorPlaneAffectorFactoryD0Ev"] = __ZN4Ogre29DeflectorPlaneAffectorFactoryD0Ev;
Module["__ZNK4Ogre29DeflectorPlaneAffectorFactory7getNameEv"] = __ZNK4Ogre29DeflectorPlaneAffectorFactory7getNameEv;
Module["__ZN4Ogre29DeflectorPlaneAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre29DeflectorPlaneAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_"] = __ZNSt3__16vectorIPN4Ogre16ParticleAffectorENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_;
Module["__ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorIPNS_16ParticleAffectorENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre34DirectionRandomiserAffectorFactoryD1Ev"] = __ZN4Ogre34DirectionRandomiserAffectorFactoryD1Ev;
Module["__ZN4Ogre34DirectionRandomiserAffectorFactoryD0Ev"] = __ZN4Ogre34DirectionRandomiserAffectorFactoryD0Ev;
Module["__ZNK4Ogre34DirectionRandomiserAffectorFactory7getNameEv"] = __ZNK4Ogre34DirectionRandomiserAffectorFactory7getNameEv;
Module["__ZN4Ogre34DirectionRandomiserAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre34DirectionRandomiserAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre23RotationAffectorFactoryD1Ev"] = __ZN4Ogre23RotationAffectorFactoryD1Ev;
Module["__ZN4Ogre23RotationAffectorFactoryD0Ev"] = __ZN4Ogre23RotationAffectorFactoryD0Ev;
Module["__ZNK4Ogre23RotationAffectorFactory7getNameEv"] = __ZNK4Ogre23RotationAffectorFactory7getNameEv;
Module["__ZN4Ogre23RotationAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre23RotationAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre20ScaleAffectorFactoryD1Ev"] = __ZN4Ogre20ScaleAffectorFactoryD1Ev;
Module["__ZN4Ogre20ScaleAffectorFactoryD0Ev"] = __ZN4Ogre20ScaleAffectorFactoryD0Ev;
Module["__ZNK4Ogre20ScaleAffectorFactory7getNameEv"] = __ZNK4Ogre20ScaleAffectorFactory7getNameEv;
Module["__ZN4Ogre20ScaleAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre20ScaleAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre33ColourInterpolatorAffectorFactoryD1Ev"] = __ZN4Ogre33ColourInterpolatorAffectorFactoryD1Ev;
Module["__ZN4Ogre33ColourInterpolatorAffectorFactoryD0Ev"] = __ZN4Ogre33ColourInterpolatorAffectorFactoryD0Ev;
Module["__ZNK4Ogre33ColourInterpolatorAffectorFactory7getNameEv"] = __ZNK4Ogre33ColourInterpolatorAffectorFactory7getNameEv;
Module["__ZN4Ogre33ColourInterpolatorAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre33ColourInterpolatorAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre26ColourImageAffectorFactoryD1Ev"] = __ZN4Ogre26ColourImageAffectorFactoryD1Ev;
Module["__ZN4Ogre26ColourImageAffectorFactoryD0Ev"] = __ZN4Ogre26ColourImageAffectorFactoryD0Ev;
Module["__ZNK4Ogre26ColourImageAffectorFactory7getNameEv"] = __ZNK4Ogre26ColourImageAffectorFactory7getNameEv;
Module["__ZN4Ogre26ColourImageAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre26ColourImageAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre27ColourFaderAffectorFactory2D1Ev"] = __ZN4Ogre27ColourFaderAffectorFactory2D1Ev;
Module["__ZN4Ogre27ColourFaderAffectorFactory2D0Ev"] = __ZN4Ogre27ColourFaderAffectorFactory2D0Ev;
Module["__ZNK4Ogre27ColourFaderAffectorFactory27getNameEv"] = __ZNK4Ogre27ColourFaderAffectorFactory27getNameEv;
Module["__ZN4Ogre27ColourFaderAffectorFactory214createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre27ColourFaderAffectorFactory214createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre26ColourFaderAffectorFactoryD1Ev"] = __ZN4Ogre26ColourFaderAffectorFactoryD1Ev;
Module["__ZN4Ogre26ColourFaderAffectorFactoryD0Ev"] = __ZN4Ogre26ColourFaderAffectorFactoryD0Ev;
Module["__ZNK4Ogre26ColourFaderAffectorFactory7getNameEv"] = __ZNK4Ogre26ColourFaderAffectorFactory7getNameEv;
Module["__ZN4Ogre26ColourFaderAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre26ColourFaderAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre26LinearForceAffectorFactoryD1Ev"] = __ZN4Ogre26LinearForceAffectorFactoryD1Ev;
Module["__ZN4Ogre26LinearForceAffectorFactoryD0Ev"] = __ZN4Ogre26LinearForceAffectorFactoryD0Ev;
Module["__ZNK4Ogre26LinearForceAffectorFactory7getNameEv"] = __ZNK4Ogre26LinearForceAffectorFactory7getNameEv;
Module["__ZN4Ogre26LinearForceAffectorFactory14createAffectorEPNS_14ParticleSystemE"] = __ZN4Ogre26LinearForceAffectorFactory14createAffectorEPNS_14ParticleSystemE;
Module["__ZN4Ogre29HollowEllipsoidEmitterFactoryD1Ev"] = __ZN4Ogre29HollowEllipsoidEmitterFactoryD1Ev;
Module["__ZN4Ogre29HollowEllipsoidEmitterFactoryD0Ev"] = __ZN4Ogre29HollowEllipsoidEmitterFactoryD0Ev;
Module["__ZNK4Ogre29HollowEllipsoidEmitterFactory7getNameEv"] = __ZNK4Ogre29HollowEllipsoidEmitterFactory7getNameEv;
Module["__ZN4Ogre29HollowEllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre29HollowEllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_"] = __ZNSt3__16vectorIPN4Ogre15ParticleEmitterENS1_12STLAllocatorIS3_NS1_22CategorisedAllocPolicyILNS1_14MemoryCategoryE0EEEEEE21__push_back_slow_pathIKS3_EEvRT_;
Module["__ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev"] = __ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED1Ev;
Module["__ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev"] = __ZN4Ogre12STLAllocatorIPNS_15ParticleEmitterENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEED0Ev;
Module["__ZN4Ogre18RingEmitterFactoryD1Ev"] = __ZN4Ogre18RingEmitterFactoryD1Ev;
Module["__ZN4Ogre18RingEmitterFactoryD0Ev"] = __ZN4Ogre18RingEmitterFactoryD0Ev;
Module["__ZNK4Ogre18RingEmitterFactory7getNameEv"] = __ZNK4Ogre18RingEmitterFactory7getNameEv;
Module["__ZN4Ogre18RingEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre18RingEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__ZN4Ogre22CylinderEmitterFactoryD1Ev"] = __ZN4Ogre22CylinderEmitterFactoryD1Ev;
Module["__ZN4Ogre22CylinderEmitterFactoryD0Ev"] = __ZN4Ogre22CylinderEmitterFactoryD0Ev;
Module["__ZNK4Ogre22CylinderEmitterFactory7getNameEv"] = __ZNK4Ogre22CylinderEmitterFactory7getNameEv;
Module["__ZN4Ogre22CylinderEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre22CylinderEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__ZN4Ogre23EllipsoidEmitterFactoryD1Ev"] = __ZN4Ogre23EllipsoidEmitterFactoryD1Ev;
Module["__ZN4Ogre23EllipsoidEmitterFactoryD0Ev"] = __ZN4Ogre23EllipsoidEmitterFactoryD0Ev;
Module["__ZNK4Ogre23EllipsoidEmitterFactory7getNameEv"] = __ZNK4Ogre23EllipsoidEmitterFactory7getNameEv;
Module["__ZN4Ogre23EllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre23EllipsoidEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__ZN4Ogre17BoxEmitterFactoryD1Ev"] = __ZN4Ogre17BoxEmitterFactoryD1Ev;
Module["__ZN4Ogre17BoxEmitterFactoryD0Ev"] = __ZN4Ogre17BoxEmitterFactoryD0Ev;
Module["__ZNK4Ogre17BoxEmitterFactory7getNameEv"] = __ZNK4Ogre17BoxEmitterFactory7getNameEv;
Module["__ZN4Ogre17BoxEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre17BoxEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__ZN4Ogre19PointEmitterFactoryD1Ev"] = __ZN4Ogre19PointEmitterFactoryD1Ev;
Module["__ZN4Ogre19PointEmitterFactoryD0Ev"] = __ZN4Ogre19PointEmitterFactoryD0Ev;
Module["__ZNK4Ogre19PointEmitterFactory7getNameEv"] = __ZNK4Ogre19PointEmitterFactory7getNameEv;
Module["__ZN4Ogre19PointEmitterFactory13createEmitterEPNS_14ParticleSystemE"] = __ZN4Ogre19PointEmitterFactory13createEmitterEPNS_14ParticleSystemE;
Module["__GLOBAL__I_a107"] = __GLOBAL__I_a107;
Module["__ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre12PointEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre12PointEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre12PointEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre12PointEmitter17_getEmissionCountEf"] = __ZN4Ogre12PointEmitter17_getEmissionCountEf;
Module["__ZN4Ogre12PointEmitterD1Ev"] = __ZN4Ogre12PointEmitterD1Ev;
Module["__ZN4Ogre12PointEmitterD0Ev"] = __ZN4Ogre12PointEmitterD0Ev;
Module["__ZN4Ogre11RingEmitter9CmdInnerXD1Ev"] = __ZN4Ogre11RingEmitter9CmdInnerXD1Ev;
Module["__ZN4Ogre11RingEmitter9CmdInnerYD1Ev"] = __ZN4Ogre11RingEmitter9CmdInnerYD1Ev;
Module["__ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE"] = __ZN4Ogre11RingEmitterC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre11RingEmitter12setInnerSizeEff"] = __ZN4Ogre11RingEmitter12setInnerSizeEff;
Module["__ZN4Ogre11RingEmitter13_initParticleEPNS_8ParticleE"] = __ZN4Ogre11RingEmitter13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre11RingEmitter13setInnerSizeXEf"] = __ZN4Ogre11RingEmitter13setInnerSizeXEf;
Module["__ZN4Ogre11RingEmitter13setInnerSizeYEf"] = __ZN4Ogre11RingEmitter13setInnerSizeYEf;
Module["__ZNK4Ogre11RingEmitter13getInnerSizeXEv"] = __ZNK4Ogre11RingEmitter13getInnerSizeXEv;
Module["__ZNK4Ogre11RingEmitter13getInnerSizeYEv"] = __ZNK4Ogre11RingEmitter13getInnerSizeYEv;
Module["__ZNK4Ogre11RingEmitter9CmdInnerX5doGetEPKv"] = __ZNK4Ogre11RingEmitter9CmdInnerX5doGetEPKv;
Module["__ZN4Ogre11RingEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre11RingEmitter9CmdInnerX5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre11RingEmitter9CmdInnerY5doGetEPKv"] = __ZNK4Ogre11RingEmitter9CmdInnerY5doGetEPKv;
Module["__ZN4Ogre11RingEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre11RingEmitter9CmdInnerY5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre11RingEmitter9CmdInnerXD0Ev"] = __ZN4Ogre11RingEmitter9CmdInnerXD0Ev;
Module["__ZN4Ogre11RingEmitter9CmdInnerYD0Ev"] = __ZN4Ogre11RingEmitter9CmdInnerYD0Ev;
Module["__ZN4Ogre11RingEmitterD1Ev"] = __ZN4Ogre11RingEmitterD1Ev;
Module["__ZN4Ogre11RingEmitterD0Ev"] = __ZN4Ogre11RingEmitterD0Ev;
Module["__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD1Ev"] = __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD1Ev;
Module["__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD1Ev"] = __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD1Ev;
Module["__ZN4Ogre16RotationAffector21CmdRotationRangeStartD1Ev"] = __ZN4Ogre16RotationAffector21CmdRotationRangeStartD1Ev;
Module["__ZN4Ogre16RotationAffector19CmdRotationRangeEndD1Ev"] = __ZN4Ogre16RotationAffector19CmdRotationRangeEndD1Ev;
Module["__ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre16RotationAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre16RotationAffector13_initParticleEPNS_8ParticleE"] = __ZN4Ogre16RotationAffector13_initParticleEPNS_8ParticleE;
Module["__ZN4Ogre16RotationAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre16RotationAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZNK4Ogre16RotationAffector26getRotationSpeedRangeStartEv"] = __ZNK4Ogre16RotationAffector26getRotationSpeedRangeStartEv;
Module["__ZNK4Ogre16RotationAffector24getRotationSpeedRangeEndEv"] = __ZNK4Ogre16RotationAffector24getRotationSpeedRangeEndEv;
Module["__ZN4Ogre16RotationAffector26setRotationSpeedRangeStartERKNS_6RadianE"] = __ZN4Ogre16RotationAffector26setRotationSpeedRangeStartERKNS_6RadianE;
Module["__ZN4Ogre16RotationAffector24setRotationSpeedRangeEndERKNS_6RadianE"] = __ZN4Ogre16RotationAffector24setRotationSpeedRangeEndERKNS_6RadianE;
Module["__ZNK4Ogre16RotationAffector21getRotationRangeStartEv"] = __ZNK4Ogre16RotationAffector21getRotationRangeStartEv;
Module["__ZNK4Ogre16RotationAffector19getRotationRangeEndEv"] = __ZNK4Ogre16RotationAffector19getRotationRangeEndEv;
Module["__ZN4Ogre16RotationAffector21setRotationRangeStartERKNS_6RadianE"] = __ZN4Ogre16RotationAffector21setRotationRangeStartERKNS_6RadianE;
Module["__ZN4Ogre16RotationAffector19setRotationRangeEndERKNS_6RadianE"] = __ZN4Ogre16RotationAffector19setRotationRangeEndERKNS_6RadianE;
Module["__ZNK4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doGetEPKv"] = __ZNK4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doGetEPKv;
Module["__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doGetEPKv"] = __ZNK4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doGetEPKv;
Module["__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre16RotationAffector19CmdRotationRangeEnd5doGetEPKv"] = __ZNK4Ogre16RotationAffector19CmdRotationRangeEnd5doGetEPKv;
Module["__ZN4Ogre16RotationAffector19CmdRotationRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre16RotationAffector19CmdRotationRangeEnd5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZNK4Ogre16RotationAffector21CmdRotationRangeStart5doGetEPKv"] = __ZNK4Ogre16RotationAffector21CmdRotationRangeStart5doGetEPKv;
Module["__ZN4Ogre16RotationAffector21CmdRotationRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre16RotationAffector21CmdRotationRangeStart5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD0Ev"] = __ZN4Ogre16RotationAffector26CmdRotationSpeedRangeStartD0Ev;
Module["__ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD0Ev"] = __ZN4Ogre16RotationAffector24CmdRotationSpeedRangeEndD0Ev;
Module["__ZN4Ogre16RotationAffector21CmdRotationRangeStartD0Ev"] = __ZN4Ogre16RotationAffector21CmdRotationRangeStartD0Ev;
Module["__ZN4Ogre16RotationAffector19CmdRotationRangeEndD0Ev"] = __ZN4Ogre16RotationAffector19CmdRotationRangeEndD0Ev;
Module["__ZN4Ogre16RotationAffectorD1Ev"] = __ZN4Ogre16RotationAffectorD1Ev;
Module["__ZN4Ogre16RotationAffectorD0Ev"] = __ZN4Ogre16RotationAffectorD0Ev;
Module["__ZN4Ogre13ScaleAffector14CmdScaleAdjustD1Ev"] = __ZN4Ogre13ScaleAffector14CmdScaleAdjustD1Ev;
Module["__ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE"] = __ZN4Ogre13ScaleAffectorC2EPNS_14ParticleSystemE;
Module["__ZN4Ogre13ScaleAffector16_affectParticlesEPNS_14ParticleSystemEf"] = __ZN4Ogre13ScaleAffector16_affectParticlesEPNS_14ParticleSystemEf;
Module["__ZN4Ogre13ScaleAffector9setAdjustEf"] = __ZN4Ogre13ScaleAffector9setAdjustEf;
Module["__ZNK4Ogre13ScaleAffector9getAdjustEv"] = __ZNK4Ogre13ScaleAffector9getAdjustEv;
Module["__ZNK4Ogre13ScaleAffector14CmdScaleAdjust5doGetEPKv"] = __ZNK4Ogre13ScaleAffector14CmdScaleAdjust5doGetEPKv;
Module["__ZN4Ogre13ScaleAffector14CmdScaleAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE"] = __ZN4Ogre13ScaleAffector14CmdScaleAdjust5doSetEPvRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE;
Module["__ZN4Ogre13ScaleAffector14CmdScaleAdjustD0Ev"] = __ZN4Ogre13ScaleAffector14CmdScaleAdjustD0Ev;
Module["__ZN4Ogre13ScaleAffectorD1Ev"] = __ZN4Ogre13ScaleAffectorD1Ev;
Module["__ZN4Ogre13ScaleAffectorD0Ev"] = __ZN4Ogre13ScaleAffectorD0Ev;
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
//LIB_DATA:{"sym_deps":{"libs":{"libOgreMain.so.js":0},"variable":{"__ZN4Ogre7Vector34ZEROE":false,"__ZN4Ogre4Math6TWO_PIE":false,"__ZTVN10__cxxabiv120__si_class_type_infoE":false,"__ZN4Ogre7Vector36UNIT_ZE":false,"__ZNSt3__15ctypeIcE2idE":false,"__ZTVN10__cxxabiv121__vmi_class_type_infoE":false,"___dso_handle":false,"__ZN4Ogre11ColourValue5BlackE":false,"__ZTIN4Ogre16ParticleAffectorE":false,"__ZTVN10__cxxabiv117__class_type_infoE":false,"__ZTISt12length_error":false,"__ZTINSt3__18ios_baseE":false,"__ZN4Ogre15StringInterface12msDictionaryE":false,"__ZTIN4Ogre15ParticleEmitterE":false,"__ZTVSt12length_error":false,"__ZNSt3__17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE2idE":false,"__ZN4Ogre4Math2PIE":false,"__ZN4Ogre7Vector36UNIT_YE":false,"__ZTIN4Ogre23ParticleAffectorFactoryE":false,"__ZTIN4Ogre9ExceptionE":false,"__ZTVN4Ogre9ExceptionE":false,"__ZTIN4Ogre22ParticleEmitterFactoryE":false},"func":{"_strlen":false,"__ZN4Ogre14ParticleSystem12_getIteratorEv":false,"__ZN4Ogre15ParticleEmitter13setTimeToLiveEf":false,"__ZN4Ogre15StringInterface12setParameterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_":false,"__ZN4Ogre15ParticleEmitter9setColourERKNS_11ColourValueES3_":false,"__ZSt9terminatev":false,"__ZNK4Ogre15ParticleEmitter19getColourRangeStartEv":false,"__ZN4Ogre8Particle11setRotationERKNS_6RadianE":false,"__ZN4Ogre15ParticleEmitter9setColourERKNS_11ColourValueE":false,"__ZNK4Ogre15ParticleEmitter9getColourEv":false,"___assert_fail":false,"_llvm_memcpy_p0i8_p0i8_i32":false,"__ZN4Ogre15StringConverter9parseRealERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEf":false,"__ZN4Ogre5ImageC1Ev":false,"_cos":false,"__ZNK4Ogre15ParticleEmitter16getMinTimeToLiveEv":false,"__ZN4Ogre4Root15uninstallPluginEPNS_6PluginE":false,"___cxa_begin_catch":false,"__ZN4Ogre15ParticleEmitter8setAngleERKNS_6RadianE":false,"__ZNSt3__16localeD1Ev":false,"__ZN4Ogre15ParticleEmitter17setMinRepeatDelayEf":false,"__ZNK4Ogre15ParticleEmitter14getMinDurationEv":false,"__ZN4Ogre15ParticleEmitter17genEmissionColourERNS_11ColourValueE":false,"__ZN4Ogre15ParticleEmitter13setTimeToLiveEff":false,"__ZN4Ogre15ParticleEmitter14setRepeatDelayEf":false,"__ZNK4Ogre5Image8getWidthEv":false,"__ZNK4Ogre15ParticleEmitter22getMaxParticleVelocityEv":false,"__ZN4Ogre15ParticleEmitter17setColourRangeEndERKNS_11ColourValueE":false,"__ZN4Ogre22ParticleEmitterFactoryD2Ev":false,"__ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv":false,"__ZN4Ogre21ParticleSystemManager12getSingletonEv":false,"__ZNK4Ogre9Exception9getNumberEv":false,"__ZNK4Ogre9Exception18getFullDescriptionEv":false,"__ZdlPv":false,"__ZN4Ogre15ParticleEmitterC2EPNS_14ParticleSystemE":false,"__ZNK4Ogre15ParticleEmitter14getMaxDurationEv":false,"__ZNK4Ogre15ParticleEmitter22getMinParticleVelocityEv":false,"__ZN4Ogre15ParticleEmitter15setEmissionRateEf":false,"__ZNK4Ogre15ParticleEmitter9isEmittedEv":false,"___cxa_atexit":false,"__ZN4Ogre15ParticleEmitter14setMaxDurationEf":false,"__ZNK4Ogre15ParticleEmitter19getParticleVelocityEv":false,"__ZNK4Ogre15ParticleEmitter5getUpEv":false,"_llvm_lifetime_end":false,"__ZNK4Ogre15ParticleEmitter12getDirectionEv":false,"__ZN4Ogre15ParticleEmitter19genEmissionVelocityERNS_7Vector3E":false,"__ZN4Ogre16ParticleIterator7getNextEv":false,"_main":false,"__ZNKSt3__16locale9use_facetERNS0_2idE":false,"__ZN4Ogre15ParticleEmitterD2Ev":false,"__ZNK4Ogre15ParticleEmitter10getEnabledEv":false,"___cxa_free_exception":false,"__ZN4Ogre15ParticleEmitter19setParticleVelocityEf":false,"__ZN4Ogre15ParticleEmitter24genConstantEmissionCountEf":false,"__ZN4Ogre4Math15SymmetricRandomEv":false,"__ZNK4Ogre15ParticleEmitter15getEmissionRateEv":false,"__ZN4Ogre15StringConverter16parseColourValueERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_11ColourValueE":false,"___cxa_allocate_exception":false,"__ZN4Ogre15StringConverter8toStringEbb":false,"__ZSt18uncaught_exceptionv":false,"__ZN4Ogre15ParticleEmitter11setDurationEff":false,"__ZN4Ogre15StringConverter8toStringEfttcj":false,"___cxa_call_unexpected":false,"__ZN4Ogre15ParticleEmitter19setColourRangeStartERKNS_11ColourValueE":false,"__ZN4Ogre15StringConverter8toStringERKNS_11ColourValueE":false,"__ZNSt12length_errorD1Ev":false,"__ZNSt3__18ios_baseD2Ev":false,"__Znwj":false,"__ZNK4Ogre5Image11getColourAtEjjj":false,"__ZNK4Ogre15ParticleEmitter17getMaxRepeatDelayEv":false,"__ZN4Ogre4Math19AngleUnitsToRadiansEf":false,"__ZNK4Ogre15ParticleEmitter11getPositionEv":false,"_llvm_memset_p0i8_i32":false,"__ZN4Ogre9ExceptionC2EiRKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_PKcSB_l":false,"__ZN4Ogre4Math10UnitRandomEv":false,"__ZN4Ogre23ParticleAffectorFactoryD2Ev":false,"__ZN4Ogre15ParticleEmitter17addBaseParametersEv":false,"__ZN4Ogre23ParticleAffectorFactory15destroyAffectorEPNS_16ParticleAffectorE":false,"__ZN4Ogre9PixelUtil12isAccessibleENS_11PixelFormatE":false,"__ZN4Ogre15StringConverter9parseBoolERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEb":false,"__ZN4Ogre15ParticleEmitter11setDurationEf":false,"_sin":false,"__ZN4Ogre22ParticleEmitterFactory14destroyEmitterEPNS_15ParticleEmitterE":false,"__ZN4Ogre15ParticleEmitter7setNameERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE":false,"__ZN4Ogre15ParticleEmitter12setStartTimeEf":false,"__ZNKSt3__18ios_base6getlocEv":false,"__ZN4Ogre8Particle15resetDimensionsEv":false,"__ZN4Ogre4Math19RadiansToAngleUnitsEf":false,"__ZN4Ogre4Math11RangeRandomEff":false,"__ZNK4Ogre15ParticleEmitter14getRepeatDelayEv":false,"__ZN4Ogre15StringConverter12parseVector3ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERKNS_7Vector3E":false,"___cxa_end_catch":false,"__ZN4Ogre4Root12getSingletonEv":false,"__ZN4Ogre15ParticleEmitter17setMaxRepeatDelayEf":false,"__ZN4Ogre15ParticleEmitter14setRepeatDelayEff":false,"__ZNK4Ogre15ParticleEmitter16getMaxTimeToLiveEv":false,"__ZN4Ogre8Particle13setDimensionsEff":false,"__ZNK4Ogre15ParticleEmitter13getTimeToLiveEv":false,"_sqrtf":false,"__ZN4Ogre15StringInterface16setParameterListERKNSt3__13mapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS_12STLAllocatorINS1_4pairIKS8_S8_EENS_22CategorisedAllocPolicyILNS_14MemoryCategoryE0EEEEEEE":false,"__ZN4Ogre15ParticleEmitter16setMaxTimeToLiveEf":false,"_memcmp":false,"__ZN4Ogre15ParticleEmitter22setMaxParticleVelocityEf":false,"__ZN4Ogre5ImageD1Ev":false,"__ZN4Ogre15ParticleEmitter10setEmittedEb":false,"_malloc":false,"_llvm_memmove_p0i8_p0i8_i32":false,"__ZN4Ogre15ParticleEmitter20genEmissionDirectionERNS_7Vector3E":false,"__ZNSt3__18ios_base4initEPv":false,"__ZNSt3__16localeC1Ev":false,"__ZNSt11logic_errorC2EPKc":false,"_llvm_lifetime_start":false,"__ZN4Ogre15ParticleEmitter22setMinParticleVelocityEf":false,"__ZN4Ogre15ParticleEmitter12setDirectionERKNS_7Vector3E":false,"__ZN4Ogre12NedAllocImpl10allocBytesEjPKciS2_":false,"_free":false,"___gxx_personality_v0":false,"__ZN4Ogre15ParticleEmitter14setMinDurationEf":false,"__ZNK4Ogre5Image9getFormatEv":false,"_calloc":false,"__ZNSt3__18ios_base5clearEj":false,"__ZN4Ogre5Image4loadERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES9_":false,"__ZN4Ogre15ParticleEmitter19setParticleVelocityEff":false,"__ZNK4Ogre15ParticleEmitter17getMinRepeatDelayEv":false,"__ZNK4Ogre15ParticleEmitter8getAngleEv":false,"__ZN4Ogre15ParticleEmitter17setEmittedEmitterERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE":false,"_llvm_memset_p0i8_i64":false,"__ZN4Ogre21ParticleSystemManager18addAffectorFactoryEPNS_23ParticleAffectorFactoryE":false,"__ZN4Ogre16ParticleIterator3endEv":false,"__ZN4Ogre15ParticleEmitter14genEmissionTTLEv":false,"__ZN4Ogre15ParticleEmitter11setPositionERKNS_7Vector3E":false,"__ZN4Ogre12NedAllocImpl12deallocBytesEPv":false,"_realloc":false,"__ZN4Ogre15ParticleEmitter10setEnabledEb":false,"__ZN4Ogre15ParticleEmitter5setUpERKNS_7Vector3E":false,"__ZN4Ogre16ParticleAffectorD2Ev":false,"__ZN4Ogre21ParticleSystemManager17addEmitterFactoryEPNS_22ParticleEmitterFactoryE":false,"__ZN4Ogre15ParticleEmitter16setMinTimeToLiveEf":false,"__ZNK4Ogre15ParticleEmitter12getStartTimeEv":false,"___cxa_throw":false,"__ZNK4Ogre15ParticleEmitter11getDurationEv":false,"__ZN4Ogre4Root13installPluginEPNS_6PluginE":false,"_llvm_memcpy_p0i8_p0i8_i64":false,"__ZN4Ogre15StringConverter8toStringERKNS_7Vector3E":false,"__ZNK4Ogre15ParticleEmitter17getColourRangeEndEv":false}}}
//END_LIB_DATA
