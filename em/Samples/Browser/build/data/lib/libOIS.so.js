// Note: Some Emscripten settings will significantly limit the speed of the generated code.
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
var _libOIS_so_js=(function(FUNCTION_TABLE_OFFSET, parentModule) {
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
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } },{ func: function() { __GLOBAL__I_a() } });
var __str9;
__str9=allocate([69,97,115,116,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str9"] = __str9;
var __str8;
__str8=allocate([78,111,114,116,104,69,97,115,116,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str8"] = __str8;
var __str739;
__str739=allocate([98,97,115,105,99,95,115,116,114,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str739"] = __str739;
var __str7;
__str7=allocate([78,111,114,116,104,0,0,0], "i8", ALLOC_NORMAL);
Module["__str7"] = __str7;
var __str638;
__str638=allocate([118,101,99,116,111,114,0,0], "i8", ALLOC_NORMAL);
Module["__str638"] = __str638;
var __str6;
__str6=allocate([78,111,114,116,104,87,101,115,116,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str6"] = __str6;
var __str537;
__str537=allocate([79,98,106,101,99,116,32,99,114,101,97,116,111,114,32,110,111,116,32,107,110,111,119,110,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str537"] = __str537;
var __str53;
__str53=allocate([109,111,117,115,101,0,0,0], "i8", ALLOC_NORMAL);
Module["__str53"] = __str53;
var __str5;
__str5=allocate([67,97,110,39,116,32,97,100,100,32,117,110,107,110,111,119,110,32,101,102,102,101,99,116,32,70,111,114,99,101,47,84,121,112,101,32,116,111,32,116,104,101,32,115,117,112,112,111,114,116,101,100,32,108,105,115,116,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str5"] = __str5;
var __str47;
__str47=allocate([107,101,121,98,111,97,114,100,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str47"] = __str47;
var __str457;
__str457=allocate([114,101,116,117,114,110,32,71,101,116,70,117,110,99,116,105,111,110,40,39,109,111,117,115,101,39,41,40,51,41,59,0], "i8", ALLOC_NORMAL);
Module["__str457"] = __str457;
var __str436;
__str436=allocate([115,114,99,47,79,73,83,73,110,112,117,116,77,97,110,97,103,101,114,46,99,112,112,0], "i8", ALLOC_NORMAL);
Module["__str436"] = __str436;
var __str41;
__str41=allocate([66,114,111,119,115,101,114,32,73,110,112,117,116,32,87,114,97,112,112,101,114,0,0,0], "i8", ALLOC_NORMAL);
Module["__str41"] = __str41;
var __str4;
__str4=allocate([115,114,99,47,79,73,83,69,102,102,101,99,116,46,99,112,112,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str4"] = __str4;
var __str356;
__str356=allocate([114,101,116,117,114,110,32,71,101,116,70,117,110,99,116,105,111,110,40,39,109,111,117,115,101,39,41,40,50,41,59,0], "i8", ALLOC_NORMAL);
Module["__str356"] = __str356;
var __str344;
__str344=allocate([115,114,99,47,98,114,111,119,115,101,114,47,66,114,111,119,115,101,114,73,110,112,117,116,77,97,110,97,103,101,114,46,99,112,112,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str344"] = __str344;
var __str335;
__str335=allocate([78,111,32,100,101,118,105,99,101,115,32,109,97,116,99,104,32,114,101,113,117,101,115,116,101,100,32,116,121,112,101,46,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str335"] = __str335;
var __str33;
__str33=allocate([49,46,51,46,48,0,0,0], "i8", ALLOC_NORMAL);
Module["__str33"] = __str33;
var __str32;
__str32=allocate([67,117,115,116,111,109,70,111,114,99,101,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str32"] = __str32;
var __str31;
__str31=allocate([67,111,110,100,105,116,105,111,110,97,108,70,111,114,99,101,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str31"] = __str31;
var __str30;
__str30=allocate([80,101,114,105,111,100,105,99,70,111,114,99,101,0,0,0], "i8", ALLOC_NORMAL);
Module["__str30"] = __str30;
var __str3;
__str3=allocate([82,101,113,117,101,115,116,101,100,32,70,111,114,99,101,69,102,102,101,99,116,32,105,115,32,110,117,108,108,33,0,0], "i8", ALLOC_NORMAL);
Module["__str3"] = __str3;
var __str29;
__str29=allocate([82,97,109,112,70,111,114,99,101,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str29"] = __str29;
var __str28;
__str28=allocate([67,111,110,115,116,97,110,116,70,111,114,99,101,0,0,0], "i8", ALLOC_NORMAL);
Module["__str28"] = __str28;
var __str27;
__str27=allocate([85,110,107,110,111,119,110,70,111,114,99,101,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str27"] = __str27;
var __str26;
__str26=allocate([67,117,115,116,111,109,0,0], "i8", ALLOC_NORMAL);
Module["__str26"] = __str26;
var __str255;
__str255=allocate([114,101,116,117,114,110,32,71,101,116,70,117,110,99,116,105,111,110,40,39,109,111,117,115,101,39,41,40,49,41,59,0], "i8", ALLOC_NORMAL);
Module["__str255"] = __str255;
var __str25;
__str25=allocate([83,112,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
Module["__str25"] = __str25;
var __str249;
__str249=allocate([85,110,107,110,111,119,110,0], "i8", ALLOC_NORMAL);
Module["__str249"] = __str249;
var __str243;
__str243=allocate([84,121,112,101,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str243"] = __str243;
var __str24;
__str24=allocate([73,110,101,114,116,105,97,0], "i8", ALLOC_NORMAL);
Module["__str24"] = __str24;
var __str23;
__str23=allocate([68,97,109,112,101,114,0,0], "i8", ALLOC_NORMAL);
Module["__str23"] = __str23;
var __str22;
__str22=allocate([70,114,105,99,116,105,111,110,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str22"] = __str22;
var __str21;
__str21=allocate([83,97,119,84,111,111,116,104,68,111,119,110,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str21"] = __str21;
var __str20;
__str20=allocate([83,97,119,84,111,111,116,104,85,112,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str20"] = __str20;
var __str2;
__str2=allocate([60,66,97,100,32,100,105,114,101,99,116,105,111,110,62,0], "i8", ALLOC_NORMAL);
Module["__str2"] = __str2;
var __str19;
__str19=allocate([83,105,110,101,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str19"] = __str19;
var __str18;
__str18=allocate([84,114,105,97,110,103,108,101,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str18"] = __str18;
var __str17;
__str17=allocate([83,113,117,97,114,101,0,0], "i8", ALLOC_NORMAL);
Module["__str17"] = __str17;
var __str16;
__str16=allocate([82,97,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str16"] = __str16;
var __str154;
__str154=allocate([114,101,116,117,114,110,32,71,101,116,70,117,110,99,116,105,111,110,40,39,109,111,117,115,101,39,41,40,48,41,59,0], "i8", ALLOC_NORMAL);
Module["__str154"] = __str154;
var __str15;
__str15=allocate([67,111,110,115,116,97,110,116,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str15"] = __str15;
var __str148;
__str148=allocate([114,101,116,117,114,110,32,71,101,116,70,117,110,99,116,105,111,110,40,39,107,101,121,99,111,100,101,39,41,40,41,59,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str148"] = __str148;
var __str142;
__str142=allocate([105,110,112,117,116,0,0,0], "i8", ALLOC_NORMAL);
Module["__str142"] = __str142;
var __str14;
__str14=allocate([85,110,107,110,111,119,110,0], "i8", ALLOC_NORMAL);
Module["__str14"] = __str14;
var __str134;
__str134=allocate([87,73,78,68,79,87,0,0], "i8", ALLOC_NORMAL);
Module["__str134"] = __str134;
var __str13;
__str13=allocate([87,101,115,116,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str13"] = __str13;
var __str12;
__str12=allocate([83,111,117,116,104,87,101,115,116,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str12"] = __str12;
var __str110;
__str110=allocate([115,114,99,47,79,73,83,70,111,114,99,101,70,101,101,100,98,97,99,107,46,99,112,112,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str110"] = __str110;
var __str11;
__str11=allocate([83,111,117,116,104,0,0,0], "i8", ALLOC_NORMAL);
Module["__str11"] = __str11;
var __str10;
__str10=allocate([83,111,117,116,104,69,97,115,116,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str10"] = __str10;
var __str1;
__str1=allocate([60,66,97,100,32,101,102,102,101,99,116,32,116,121,112,101,62,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1"] = __str1;
var __str;
__str=allocate([60,66,97,100,32,102,111,114,99,101,32,116,121,112,101,62,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str"] = __str;
var __ZZN3OIS12BrowserMouse7captureEvE4mask;
__ZZN3OIS12BrowserMouse7captureEvE4mask=allocate([0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZZN3OIS12BrowserMouse7captureEvE4mask"] = __ZZN3OIS12BrowserMouse7captureEvE4mask;
var __ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,255,255,255,200,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTVN3OIS9ExceptionE;
__ZTVN3OIS9ExceptionE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS9ExceptionE"] = __ZTVN3OIS9ExceptionE;
var __ZTVN3OIS8KeyboardE;
__ZTVN3OIS8KeyboardE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS8KeyboardE"] = __ZTVN3OIS8KeyboardE;
var __ZTVN3OIS8KeyEventE;
__ZTVN3OIS8KeyEventE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS8KeyEventE"] = __ZTVN3OIS8KeyEventE;
var __ZTVN3OIS8JoyStickE;
__ZTVN3OIS8JoyStickE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS8JoyStickE"] = __ZTVN3OIS8JoyStickE;
var __ZTVN3OIS8EnvelopeE;
__ZTVN3OIS8EnvelopeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS8EnvelopeE"] = __ZTVN3OIS8EnvelopeE;
var __ZTVN3OIS6ObjectE;
__ZTVN3OIS6ObjectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS6ObjectE"] = __ZTVN3OIS6ObjectE;
var __ZTVN3OIS6EffectE;
__ZTVN3OIS6EffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS6EffectE"] = __ZTVN3OIS6EffectE;
var __ZTVN3OIS5MouseE;
__ZTVN3OIS5MouseE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS5MouseE"] = __ZTVN3OIS5MouseE;
var __ZTVN3OIS19BrowserInputManagerE;
__ZTVN3OIS19BrowserInputManagerE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS19BrowserInputManagerE"] = __ZTVN3OIS19BrowserInputManagerE;
var __ZTVN3OIS17ConditionalEffectE;
__ZTVN3OIS17ConditionalEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS17ConditionalEffectE"] = __ZTVN3OIS17ConditionalEffectE;
var __ZTVN3OIS15BrowserKeyboardE;
__ZTVN3OIS15BrowserKeyboardE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS15BrowserKeyboardE"] = __ZTVN3OIS15BrowserKeyboardE;
var __ZTVN3OIS14PeriodicEffectE;
__ZTVN3OIS14PeriodicEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS14PeriodicEffectE"] = __ZTVN3OIS14PeriodicEffectE;
var __ZTVN3OIS14ConstantEffectE;
__ZTVN3OIS14ConstantEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS14ConstantEffectE"] = __ZTVN3OIS14ConstantEffectE;
var __ZTVN3OIS13ForceFeedbackE;
__ZTVN3OIS13ForceFeedbackE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS13ForceFeedbackE"] = __ZTVN3OIS13ForceFeedbackE;
var __ZTVN3OIS12InputManagerE;
__ZTVN3OIS12InputManagerE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS12InputManagerE"] = __ZTVN3OIS12InputManagerE;
var __ZTVN3OIS12BrowserMouseE;
__ZTVN3OIS12BrowserMouseE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS12BrowserMouseE"] = __ZTVN3OIS12BrowserMouseE;
var __ZTVN3OIS10RampEffectE;
__ZTVN3OIS10RampEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS10RampEffectE"] = __ZTVN3OIS10RampEffectE;
var __ZTVN3OIS10MouseEventE;
__ZTVN3OIS10MouseEventE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTVN3OIS10MouseEventE"] = __ZTVN3OIS10MouseEventE;
var __ZTSSt9exception;
__ZTSSt9exception=allocate([83,116,57,101,120,99,101,112,116,105,111,110,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSSt9exception"] = __ZTSSt9exception;
var __ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE;
__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,57,98,97,115,105,99,95,105,111,115,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([78,83,116,51,95,95,49,49,57,98,97,115,105,99,95,111,115,116,114,105,110,103,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,105,110,103,98,117,102,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,53,98,97,115,105,99,95,115,116,114,101,97,109,98,117,102,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE=allocate([78,83,116,51,95,95,49,49,51,98,97,115,105,99,95,111,115,116,114,101,97,109,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,69,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE"] = __ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
var __ZTSN3OIS9InterfaceE;
__ZTSN3OIS9InterfaceE=allocate([78,51,79,73,83,57,73,110,116,101,114,102,97,99,101,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS9InterfaceE"] = __ZTSN3OIS9InterfaceE;
var __ZTSN3OIS9ExceptionE;
__ZTSN3OIS9ExceptionE=allocate([78,51,79,73,83,57,69,120,99,101,112,116,105,111,110,69,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS9ExceptionE"] = __ZTSN3OIS9ExceptionE;
var __ZTSN3OIS8KeyboardE;
__ZTSN3OIS8KeyboardE=allocate([78,51,79,73,83,56,75,101,121,98,111,97,114,100,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS8KeyboardE"] = __ZTSN3OIS8KeyboardE;
var __ZTSN3OIS8KeyEventE;
__ZTSN3OIS8KeyEventE=allocate([78,51,79,73,83,56,75,101,121,69,118,101,110,116,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS8KeyEventE"] = __ZTSN3OIS8KeyEventE;
var __ZTSN3OIS8JoyStickE;
__ZTSN3OIS8JoyStickE=allocate([78,51,79,73,83,56,74,111,121,83,116,105,99,107,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS8JoyStickE"] = __ZTSN3OIS8JoyStickE;
var __ZTSN3OIS8EventArgE;
__ZTSN3OIS8EventArgE=allocate([78,51,79,73,83,56,69,118,101,110,116,65,114,103,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS8EventArgE"] = __ZTSN3OIS8EventArgE;
var __ZTSN3OIS8EnvelopeE;
__ZTSN3OIS8EnvelopeE=allocate([78,51,79,73,83,56,69,110,118,101,108,111,112,101,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS8EnvelopeE"] = __ZTSN3OIS8EnvelopeE;
var __ZTSN3OIS6ObjectE;
__ZTSN3OIS6ObjectE=allocate([78,51,79,73,83,54,79,98,106,101,99,116,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS6ObjectE"] = __ZTSN3OIS6ObjectE;
var __ZTSN3OIS6EffectE;
__ZTSN3OIS6EffectE=allocate([78,51,79,73,83,54,69,102,102,101,99,116,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS6EffectE"] = __ZTSN3OIS6EffectE;
var __ZTSN3OIS5MouseE;
__ZTSN3OIS5MouseE=allocate([78,51,79,73,83,53,77,111,117,115,101,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS5MouseE"] = __ZTSN3OIS5MouseE;
var __ZTSN3OIS19BrowserInputManagerE;
__ZTSN3OIS19BrowserInputManagerE=allocate([78,51,79,73,83,49,57,66,114,111,119,115,101,114,73,110,112,117,116,77,97,110,97,103,101,114,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS19BrowserInputManagerE"] = __ZTSN3OIS19BrowserInputManagerE;
var __ZTSN3OIS17ConditionalEffectE;
__ZTSN3OIS17ConditionalEffectE=allocate([78,51,79,73,83,49,55,67,111,110,100,105,116,105,111,110,97,108,69,102,102,101,99,116,69,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS17ConditionalEffectE"] = __ZTSN3OIS17ConditionalEffectE;
var __ZTSN3OIS15BrowserKeyboardE;
__ZTSN3OIS15BrowserKeyboardE=allocate([78,51,79,73,83,49,53,66,114,111,119,115,101,114,75,101,121,98,111,97,114,100,69,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS15BrowserKeyboardE"] = __ZTSN3OIS15BrowserKeyboardE;
var __ZTSN3OIS14PeriodicEffectE;
__ZTSN3OIS14PeriodicEffectE=allocate([78,51,79,73,83,49,52,80,101,114,105,111,100,105,99,69,102,102,101,99,116,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS14PeriodicEffectE"] = __ZTSN3OIS14PeriodicEffectE;
var __ZTSN3OIS14ConstantEffectE;
__ZTSN3OIS14ConstantEffectE=allocate([78,51,79,73,83,49,52,67,111,110,115,116,97,110,116,69,102,102,101,99,116,69,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS14ConstantEffectE"] = __ZTSN3OIS14ConstantEffectE;
var __ZTSN3OIS13ForceFeedbackE;
__ZTSN3OIS13ForceFeedbackE=allocate([78,51,79,73,83,49,51,70,111,114,99,101,70,101,101,100,98,97,99,107,69,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS13ForceFeedbackE"] = __ZTSN3OIS13ForceFeedbackE;
var __ZTSN3OIS12InputManagerE;
__ZTSN3OIS12InputManagerE=allocate([78,51,79,73,83,49,50,73,110,112,117,116,77,97,110,97,103,101,114,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS12InputManagerE"] = __ZTSN3OIS12InputManagerE;
var __ZTSN3OIS12BrowserMouseE;
__ZTSN3OIS12BrowserMouseE=allocate([78,51,79,73,83,49,50,66,114,111,119,115,101,114,77,111,117,115,101,69,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS12BrowserMouseE"] = __ZTSN3OIS12BrowserMouseE;
var __ZTSN3OIS11ForceEffectE;
__ZTSN3OIS11ForceEffectE=allocate([78,51,79,73,83,49,49,70,111,114,99,101,69,102,102,101,99,116,69,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS11ForceEffectE"] = __ZTSN3OIS11ForceEffectE;
var __ZTSN3OIS10RampEffectE;
__ZTSN3OIS10RampEffectE=allocate([78,51,79,73,83,49,48,82,97,109,112,69,102,102,101,99,116,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS10RampEffectE"] = __ZTSN3OIS10RampEffectE;
var __ZTSN3OIS10MouseEventE;
__ZTSN3OIS10MouseEventE=allocate([78,51,79,73,83,49,48,77,111,117,115,101,69,118,101,110,116,69,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTSN3OIS10MouseEventE"] = __ZTSN3OIS10MouseEventE;
var __ZTISt9exception;
__ZTISt9exception=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTISt9exception"] = __ZTISt9exception;
var __ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE"] = __ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
var __ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE"] = __ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
var __ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE"] = __ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
var __ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,244,255,255], "i8", ALLOC_NORMAL);
Module["__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE"] = __ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
var __ZTIN3OIS9InterfaceE;
__ZTIN3OIS9InterfaceE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS9InterfaceE"] = __ZTIN3OIS9InterfaceE;
var __ZTIN3OIS9ExceptionE;
__ZTIN3OIS9ExceptionE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS9ExceptionE"] = __ZTIN3OIS9ExceptionE;
var __ZTIN3OIS8KeyboardE;
__ZTIN3OIS8KeyboardE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS8KeyboardE"] = __ZTIN3OIS8KeyboardE;
var __ZTIN3OIS8KeyEventE;
__ZTIN3OIS8KeyEventE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS8KeyEventE"] = __ZTIN3OIS8KeyEventE;
var __ZTIN3OIS8JoyStickE;
__ZTIN3OIS8JoyStickE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS8JoyStickE"] = __ZTIN3OIS8JoyStickE;
var __ZTIN3OIS8EventArgE;
__ZTIN3OIS8EventArgE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS8EventArgE"] = __ZTIN3OIS8EventArgE;
var __ZTIN3OIS8EnvelopeE;
__ZTIN3OIS8EnvelopeE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS8EnvelopeE"] = __ZTIN3OIS8EnvelopeE;
var __ZTIN3OIS6ObjectE;
__ZTIN3OIS6ObjectE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS6ObjectE"] = __ZTIN3OIS6ObjectE;
var __ZTIN3OIS6EffectE;
__ZTIN3OIS6EffectE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS6EffectE"] = __ZTIN3OIS6EffectE;
var __ZTIN3OIS5MouseE;
__ZTIN3OIS5MouseE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS5MouseE"] = __ZTIN3OIS5MouseE;
var __ZTIN3OIS19BrowserInputManagerE;
__ZTIN3OIS19BrowserInputManagerE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS19BrowserInputManagerE"] = __ZTIN3OIS19BrowserInputManagerE;
var __ZTIN3OIS17ConditionalEffectE;
__ZTIN3OIS17ConditionalEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS17ConditionalEffectE"] = __ZTIN3OIS17ConditionalEffectE;
var __ZTIN3OIS15BrowserKeyboardE;
__ZTIN3OIS15BrowserKeyboardE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS15BrowserKeyboardE"] = __ZTIN3OIS15BrowserKeyboardE;
var __ZTIN3OIS14PeriodicEffectE;
__ZTIN3OIS14PeriodicEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS14PeriodicEffectE"] = __ZTIN3OIS14PeriodicEffectE;
var __ZTIN3OIS14ConstantEffectE;
__ZTIN3OIS14ConstantEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS14ConstantEffectE"] = __ZTIN3OIS14ConstantEffectE;
var __ZTIN3OIS13ForceFeedbackE;
__ZTIN3OIS13ForceFeedbackE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS13ForceFeedbackE"] = __ZTIN3OIS13ForceFeedbackE;
var __ZTIN3OIS12InputManagerE;
__ZTIN3OIS12InputManagerE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS12InputManagerE"] = __ZTIN3OIS12InputManagerE;
var __ZTIN3OIS12BrowserMouseE;
__ZTIN3OIS12BrowserMouseE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS12BrowserMouseE"] = __ZTIN3OIS12BrowserMouseE;
var __ZTIN3OIS11ForceEffectE;
__ZTIN3OIS11ForceEffectE=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS11ForceEffectE"] = __ZTIN3OIS11ForceEffectE;
var __ZTIN3OIS10RampEffectE;
__ZTIN3OIS10RampEffectE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS10RampEffectE"] = __ZTIN3OIS10RampEffectE;
var __ZTIN3OIS10MouseEventE;
__ZTIN3OIS10MouseEventE=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTIN3OIS10MouseEventE"] = __ZTIN3OIS10MouseEventE;
var __ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE;
__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE=allocate([56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,255,255,255,200,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE"] = __ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE;
var __ZL19pszEDirectionString;
__ZL19pszEDirectionString=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZL19pszEDirectionString"] = __ZL19pszEDirectionString;
var __ZL15pszEForceString;
__ZL15pszEForceString=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZL15pszEForceString"] = __ZL15pszEForceString;
var __ZL14pszETypeString;
__ZL14pszETypeString=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__ZL14pszETypeString"] = __ZL14pszETypeString;
var __ZN3OIS19BrowserInputManager5iNameE;
__ZN3OIS19BrowserInputManager5iNameE=allocate(16, "i8", ALLOC_NORMAL);
Module["__ZN3OIS19BrowserInputManager5iNameE"] = __ZN3OIS19BrowserInputManager5iNameE;
var __ZN3OIS6EffectC1Ev=__ZN3OIS6EffectC2Ev;Module["__ZN3OIS6EffectC1Ev"] =__ZN3OIS6EffectC2Ev
var __ZN3OIS6EffectC1ENS0_6EForceENS0_5ETypeE=__ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE;Module["__ZN3OIS6EffectC1ENS0_6EForceENS0_5ETypeE"] =__ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE
var __ZN3OIS6EffectD1Ev=__ZN3OIS6EffectD2Ev;Module["__ZN3OIS6EffectD1Ev"] =__ZN3OIS6EffectD2Ev
var __ZN3OIS12InputManagerD1Ev=__ZN3OIS12InputManagerD2Ev;Module["__ZN3OIS12InputManagerD1Ev"] =__ZN3OIS12InputManagerD2Ev
var __ZN3OIS19BrowserInputManagerC1Ev=__ZN3OIS19BrowserInputManagerC2Ev;Module["__ZN3OIS19BrowserInputManagerC1Ev"] =__ZN3OIS19BrowserInputManagerC2Ev
var __ZN3OIS19BrowserInputManagerD1Ev=__ZN3OIS19BrowserInputManagerD2Ev;Module["__ZN3OIS19BrowserInputManagerD1Ev"] =__ZN3OIS19BrowserInputManagerD2Ev
var __ZN3OIS15BrowserKeyboardC1Eb=__ZN3OIS15BrowserKeyboardC2Eb;Module["__ZN3OIS15BrowserKeyboardC1Eb"] =__ZN3OIS15BrowserKeyboardC2Eb
var __ZN3OIS15BrowserKeyboardD1Ev=__ZN3OIS15BrowserKeyboardD2Ev;Module["__ZN3OIS15BrowserKeyboardD1Ev"] =__ZN3OIS15BrowserKeyboardD2Ev
var __ZN3OIS12BrowserMouseC1Eb=__ZN3OIS12BrowserMouseC2Eb;Module["__ZN3OIS12BrowserMouseC1Eb"] =__ZN3OIS12BrowserMouseC2Eb
var __ZN3OIS12BrowserMouseD1Ev=__ZN3OIS12BrowserMouseD2Ev;Module["__ZN3OIS12BrowserMouseD1Ev"] =__ZN3OIS12BrowserMouseD2Ev
/* no memory initializer */
function runPostSets() {
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 88);
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(28))>>2)]=__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE;
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 108);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 118);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 176);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 80);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 126);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 192);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 170);
HEAP32[(((__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(4))>>2)]=__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 148);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 118);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 82);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 158);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 126);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 192);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 114);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 170);
HEAP32[(((__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 78);
HEAP32[(((__ZTVN3OIS9ExceptionE)+(4))>>2)]=__ZTIN3OIS9ExceptionE;
HEAP32[(((__ZTVN3OIS9ExceptionE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((__ZTVN3OIS9ExceptionE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 102);
HEAP32[(((__ZTVN3OIS9ExceptionE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 76);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(4))>>2)]=__ZTIN3OIS8KeyboardE;
HEAP32[(((__ZTVN3OIS8KeyboardE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 164);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 150);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyboardE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8KeyEventE)+(4))>>2)]=__ZTIN3OIS8KeyEventE;
HEAP32[(((__ZTVN3OIS8KeyEventE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__ZTVN3OIS8KeyEventE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(4))>>2)]=__ZTIN3OIS8JoyStickE;
HEAP32[(((__ZTVN3OIS8JoyStickE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 142);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 84);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS8JoyStickE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 184);
HEAP32[(((__ZTVN3OIS8EnvelopeE)+(4))>>2)]=__ZTIN3OIS8EnvelopeE;
HEAP32[(((__ZTVN3OIS8EnvelopeE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((__ZTVN3OIS8EnvelopeE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 154);
HEAP32[(((__ZTVN3OIS6ObjectE)+(4))>>2)]=__ZTIN3OIS6ObjectE;
HEAP32[(((__ZTVN3OIS6ObjectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((__ZTVN3OIS6ObjectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 100);
HEAP32[(((__ZTVN3OIS6ObjectE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS6ObjectE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS6ObjectE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS6ObjectE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS6ObjectE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS6ObjectE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS6EffectE)+(4))>>2)]=__ZTIN3OIS6EffectE;
HEAP32[(((__ZTVN3OIS6EffectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((__ZTVN3OIS6EffectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 182);
HEAP32[(((__ZTVN3OIS5MouseE)+(4))>>2)]=__ZTIN3OIS5MouseE;
HEAP32[(((__ZTVN3OIS5MouseE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 162);
HEAP32[(((__ZTVN3OIS5MouseE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 90);
HEAP32[(((__ZTVN3OIS5MouseE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS5MouseE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS5MouseE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS5MouseE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS5MouseE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS5MouseE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS5MouseE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 136);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(4))>>2)]=__ZTIN3OIS19BrowserInputManagerE;
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 180);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 138);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 104);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 168);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 134);
HEAP32[(((__ZTVN3OIS19BrowserInputManagerE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((__ZTVN3OIS17ConditionalEffectE)+(4))>>2)]=__ZTIN3OIS17ConditionalEffectE;
HEAP32[(((__ZTVN3OIS17ConditionalEffectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 156);
HEAP32[(((__ZTVN3OIS17ConditionalEffectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(4))>>2)]=__ZTIN3OIS15BrowserKeyboardE;
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 174);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 160);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 194);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 124);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 112);
HEAP32[(((__ZTVN3OIS15BrowserKeyboardE)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 98);
HEAP32[(((__ZTVN3OIS14PeriodicEffectE)+(4))>>2)]=__ZTIN3OIS14PeriodicEffectE;
HEAP32[(((__ZTVN3OIS14PeriodicEffectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 146);
HEAP32[(((__ZTVN3OIS14PeriodicEffectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__ZTVN3OIS14ConstantEffectE)+(4))>>2)]=__ZTIN3OIS14ConstantEffectE;
HEAP32[(((__ZTVN3OIS14ConstantEffectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 172);
HEAP32[(((__ZTVN3OIS14ConstantEffectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 110);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(4))>>2)]=__ZTIN3OIS13ForceFeedbackE;
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 120);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS13ForceFeedbackE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS12InputManagerE)+(4))>>2)]=__ZTIN3OIS12InputManagerE;
HEAP32[(((__ZTVN3OIS12InputManagerE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((__ZTVN3OIS12InputManagerE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 166);
HEAP32[(((__ZTVN3OIS12InputManagerE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(4))>>2)]=__ZTIN3OIS12BrowserMouseE;
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 96);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 178);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 140);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 188);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 106);
HEAP32[(((__ZTVN3OIS12BrowserMouseE)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 136);
HEAP32[(((__ZTVN3OIS10RampEffectE)+(4))>>2)]=__ZTIN3OIS10RampEffectE;
HEAP32[(((__ZTVN3OIS10RampEffectE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((__ZTVN3OIS10RampEffectE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((__ZTVN3OIS10MouseEventE)+(4))>>2)]=__ZTIN3OIS10MouseEventE;
HEAP32[(((__ZTVN3OIS10MouseEventE)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 86);
HEAP32[(((__ZTVN3OIS10MouseEventE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 152);
HEAP32[((__ZTISt9exception)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTISt9exception)+(4))>>2)]=((__ZTSSt9exception)|0);
HEAP32[((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__19basic_iosIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE)+(8))>>2)]=__ZTINSt3__18ios_baseE;
HEAP32[((__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=((__ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)|0);
HEAP32[(((__ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(4))>>2)]=((__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)|0);
HEAP32[(((__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE)+(8))>>2)]=__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__115basic_streambufIcNS_11char_traitsIcEEEE)|0);
HEAP32[((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)>>2)]=(((__ZTVN10__cxxabiv121__vmi_class_type_infoE+8)|0));
HEAP32[(((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)+(4))>>2)]=((__ZTSNSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)|0);
HEAP32[(((__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE)+(16))>>2)]=__ZTINSt3__19basic_iosIcNS_11char_traitsIcEEEE;
HEAP32[((__ZTIN3OIS9InterfaceE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS9InterfaceE)+(4))>>2)]=((__ZTSN3OIS9InterfaceE)|0);
HEAP32[((__ZTIN3OIS9ExceptionE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS9ExceptionE)+(4))>>2)]=((__ZTSN3OIS9ExceptionE)|0);
HEAP32[(((__ZTIN3OIS9ExceptionE)+(8))>>2)]=__ZTISt9exception;
HEAP32[((__ZTIN3OIS8KeyboardE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS8KeyboardE)+(4))>>2)]=((__ZTSN3OIS8KeyboardE)|0);
HEAP32[(((__ZTIN3OIS8KeyboardE)+(8))>>2)]=__ZTIN3OIS6ObjectE;
HEAP32[((__ZTIN3OIS8KeyEventE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS8KeyEventE)+(4))>>2)]=((__ZTSN3OIS8KeyEventE)|0);
HEAP32[(((__ZTIN3OIS8KeyEventE)+(8))>>2)]=__ZTIN3OIS8EventArgE;
HEAP32[((__ZTIN3OIS8JoyStickE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS8JoyStickE)+(4))>>2)]=((__ZTSN3OIS8JoyStickE)|0);
HEAP32[(((__ZTIN3OIS8JoyStickE)+(8))>>2)]=__ZTIN3OIS6ObjectE;
HEAP32[((__ZTIN3OIS8EventArgE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS8EventArgE)+(4))>>2)]=((__ZTSN3OIS8EventArgE)|0);
HEAP32[((__ZTIN3OIS8EnvelopeE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS8EnvelopeE)+(4))>>2)]=((__ZTSN3OIS8EnvelopeE)|0);
HEAP32[(((__ZTIN3OIS8EnvelopeE)+(8))>>2)]=__ZTIN3OIS11ForceEffectE;
HEAP32[((__ZTIN3OIS6ObjectE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS6ObjectE)+(4))>>2)]=((__ZTSN3OIS6ObjectE)|0);
HEAP32[((__ZTIN3OIS6EffectE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS6EffectE)+(4))>>2)]=((__ZTSN3OIS6EffectE)|0);
HEAP32[((__ZTIN3OIS5MouseE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS5MouseE)+(4))>>2)]=((__ZTSN3OIS5MouseE)|0);
HEAP32[(((__ZTIN3OIS5MouseE)+(8))>>2)]=__ZTIN3OIS6ObjectE;
HEAP32[((__ZTIN3OIS19BrowserInputManagerE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS19BrowserInputManagerE)+(4))>>2)]=((__ZTSN3OIS19BrowserInputManagerE)|0);
HEAP32[(((__ZTIN3OIS19BrowserInputManagerE)+(8))>>2)]=__ZTIN3OIS12InputManagerE;
HEAP32[((__ZTIN3OIS17ConditionalEffectE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS17ConditionalEffectE)+(4))>>2)]=((__ZTSN3OIS17ConditionalEffectE)|0);
HEAP32[(((__ZTIN3OIS17ConditionalEffectE)+(8))>>2)]=__ZTIN3OIS11ForceEffectE;
HEAP32[((__ZTIN3OIS15BrowserKeyboardE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS15BrowserKeyboardE)+(4))>>2)]=((__ZTSN3OIS15BrowserKeyboardE)|0);
HEAP32[(((__ZTIN3OIS15BrowserKeyboardE)+(8))>>2)]=__ZTIN3OIS8KeyboardE;
HEAP32[((__ZTIN3OIS14PeriodicEffectE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS14PeriodicEffectE)+(4))>>2)]=((__ZTSN3OIS14PeriodicEffectE)|0);
HEAP32[(((__ZTIN3OIS14PeriodicEffectE)+(8))>>2)]=__ZTIN3OIS11ForceEffectE;
HEAP32[((__ZTIN3OIS14ConstantEffectE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS14ConstantEffectE)+(4))>>2)]=((__ZTSN3OIS14ConstantEffectE)|0);
HEAP32[(((__ZTIN3OIS14ConstantEffectE)+(8))>>2)]=__ZTIN3OIS11ForceEffectE;
HEAP32[((__ZTIN3OIS13ForceFeedbackE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS13ForceFeedbackE)+(4))>>2)]=((__ZTSN3OIS13ForceFeedbackE)|0);
HEAP32[(((__ZTIN3OIS13ForceFeedbackE)+(8))>>2)]=__ZTIN3OIS9InterfaceE;
HEAP32[((__ZTIN3OIS12InputManagerE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS12InputManagerE)+(4))>>2)]=((__ZTSN3OIS12InputManagerE)|0);
HEAP32[((__ZTIN3OIS12BrowserMouseE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS12BrowserMouseE)+(4))>>2)]=((__ZTSN3OIS12BrowserMouseE)|0);
HEAP32[(((__ZTIN3OIS12BrowserMouseE)+(8))>>2)]=__ZTIN3OIS5MouseE;
HEAP32[((__ZTIN3OIS11ForceEffectE)>>2)]=(((__ZTVN10__cxxabiv117__class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS11ForceEffectE)+(4))>>2)]=((__ZTSN3OIS11ForceEffectE)|0);
HEAP32[((__ZTIN3OIS10RampEffectE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS10RampEffectE)+(4))>>2)]=((__ZTSN3OIS10RampEffectE)|0);
HEAP32[(((__ZTIN3OIS10RampEffectE)+(8))>>2)]=__ZTIN3OIS11ForceEffectE;
HEAP32[((__ZTIN3OIS10MouseEventE)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTIN3OIS10MouseEventE)+(4))>>2)]=((__ZTSN3OIS10MouseEventE)|0);
HEAP32[(((__ZTIN3OIS10MouseEventE)+(8))>>2)]=__ZTIN3OIS8EventArgE;
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(8))>>2)]=__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 116);
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(28))>>2)]=__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE;
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 122);
HEAP32[(((__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 190);
HEAP32[((__ZL19pszEDirectionString)>>2)]=((__str6)|0);
HEAP32[(((__ZL19pszEDirectionString)+(4))>>2)]=((__str7)|0);
HEAP32[(((__ZL19pszEDirectionString)+(8))>>2)]=((__str8)|0);
HEAP32[(((__ZL19pszEDirectionString)+(12))>>2)]=((__str9)|0);
HEAP32[(((__ZL19pszEDirectionString)+(16))>>2)]=((__str10)|0);
HEAP32[(((__ZL19pszEDirectionString)+(20))>>2)]=((__str11)|0);
HEAP32[(((__ZL19pszEDirectionString)+(24))>>2)]=((__str12)|0);
HEAP32[(((__ZL19pszEDirectionString)+(28))>>2)]=((__str13)|0);
HEAP32[((__ZL15pszEForceString)>>2)]=((__str27)|0);
HEAP32[(((__ZL15pszEForceString)+(4))>>2)]=((__str28)|0);
HEAP32[(((__ZL15pszEForceString)+(8))>>2)]=((__str29)|0);
HEAP32[(((__ZL15pszEForceString)+(12))>>2)]=((__str30)|0);
HEAP32[(((__ZL15pszEForceString)+(16))>>2)]=((__str31)|0);
HEAP32[(((__ZL15pszEForceString)+(20))>>2)]=((__str32)|0);
HEAP32[((__ZL14pszETypeString)>>2)]=((__str14)|0);
HEAP32[(((__ZL14pszETypeString)+(4))>>2)]=((__str15)|0);
HEAP32[(((__ZL14pszETypeString)+(8))>>2)]=((__str16)|0);
HEAP32[(((__ZL14pszETypeString)+(12))>>2)]=((__str17)|0);
HEAP32[(((__ZL14pszETypeString)+(16))>>2)]=((__str18)|0);
HEAP32[(((__ZL14pszETypeString)+(20))>>2)]=((__str19)|0);
HEAP32[(((__ZL14pszETypeString)+(24))>>2)]=((__str20)|0);
HEAP32[(((__ZL14pszETypeString)+(28))>>2)]=((__str21)|0);
HEAP32[(((__ZL14pszETypeString)+(32))>>2)]=((__str22)|0);
HEAP32[(((__ZL14pszETypeString)+(36))>>2)]=((__str23)|0);
HEAP32[(((__ZL14pszETypeString)+(40))>>2)]=((__str24)|0);
HEAP32[(((__ZL14pszETypeString)+(44))>>2)]=((__str25)|0);
HEAP32[(((__ZL14pszETypeString)+(48))>>2)]=((__str26)|0);
}
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,__ZN3OIS12BrowserMouseD2Ev,0,__ZN3OIS15BrowserKeyboard7captureEv,0,__ZN3OIS8KeyboardD0Ev,0,__ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE,0,__ZN3OIS17ConditionalEffectD0Ev,0,__ZN3OIS9ExceptionD1Ev,0,__ZN3OIS19BrowserInputManagerC2Ev,0,__ZN3OIS8KeyEventD1Ev,0,__ZN3OIS8EnvelopeD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev,0,__ZNK3OIS6Object5getIDEv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv,0,__ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi,0,__ZN3OIS15BrowserKeyboard18setTextTranslationENS_8Keyboard19TextTranslationModeE,0,__ZN3OIS12BrowserMouse11setBufferedEb,0,__ZN3OIS6ObjectD1Ev,0,__ZN3OIS8KeyEventD0Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv,0,__ZN3OIS8Keyboard16setEventCallbackEPNS_11KeyListenerE,0,__ZN3OIS19BrowserInputManagerD0Ev,0,__ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN3OIS19BrowserInputManager12numKeyboardsEv,0,__ZN3OIS10RampEffectD1Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev,0,__ZN3OIS15BrowserKeyboard14queryInterfaceENS_9Interface5ITypeE,0,__ZN3OIS13ForceFeedbackD0Ev,0,__ZNSt12length_errorD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv,0,__ZN3OIS12InputManagerD0Ev,0,__ZN3OIS6EffectD2Ev,0,__ZN3OIS15BrowserKeyboardD0Ev,0,__ZN3OIS14PeriodicEffectD0Ev,0,__ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv,0,__ZNK3OIS9Exception4whatEv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj,0,__ZN3OIS8JoyStickD0Ev,0,__ZN3OIS10MouseEventD1Ev,0,__ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev,0,__ZN3OIS5MouseD0Ev,0,__ZN3OIS15BrowserKeyboardC2Eb,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci,0,__ZN3OIS12BrowserMouseD0Ev,0,__ZNK3OIS15BrowserKeyboard13copyKeyStatesEPc,0,__ZN3OIS6ObjectD0Ev,0,__ZN3OIS9ExceptionD0Ev,0,__ZN3OIS19BrowserInputManager15inputSystemNameEv,0,__ZN3OIS12BrowserMouse11_initializeEv,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN3OIS14ConstantEffectD0Ev,0,__ZN3OIS15BrowserKeyboard11getAsStringENS_7KeyCodeE,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi,0,__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE,0,__ZN3OIS13ForceFeedbackD1Ev,0,__ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev,0,__ZNK3OIS15BrowserKeyboard9isKeyDownENS_7KeyCodeE,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv,0,__ZN3OIS10RampEffectD0Ev,0,__ZN3OIS12BrowserMouseC2Eb,0,___cxa_pure_virtual,0,__ZN3OIS19BrowserInputManager7numMiceEv,0,__ZN3OIS5Mouse16setEventCallbackEPNS_13MouseListenerE,0,__ZN3OIS19BrowserInputManagerD2Ev,0,__ZN3OIS12BrowserMouse7captureEv,0,__ZN3OIS8JoyStickD1Ev,0,__ZN3OIS6EffectC2Ev,0,__ZN3OIS14PeriodicEffectD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev,0,__ZN3OIS8Keyboard18setTextTranslationENS0_19TextTranslationModeE,0,__ZN3OIS10MouseEventD0Ev,0,__ZN3OIS8EnvelopeD0Ev,0,__ZN3OIS17ConditionalEffectD1Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj,0,__ZN3OIS15BrowserKeyboard11setBufferedEb,0,__ZN3OIS5MouseD1Ev,0,__ZN3OIS8KeyboardD1Ev,0,__ZN3OIS12InputManagerD2Ev,0,__ZN3OIS19BrowserInputManager12numJoySticksEv,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci,0,__ZN3OIS14ConstantEffectD1Ev,0,__ZN3OIS15BrowserKeyboardD2Ev,0,__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj,0,__ZNK3OIS6Object8bufferedEv,0,__ZN3OIS19BrowserInputManager11_initializeERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE,0,__ZN3OIS6EffectD0Ev,0,__ZN3OIS8JoyStick16setEventCallbackEPNS_16JoyStickListenerE,0,__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev,0,__ZN3OIS12BrowserMouse14queryInterfaceENS_9Interface5ITypeE,0,__ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev,0,__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci,0,__ZN3OIS15BrowserKeyboard11_initializeEv,0]);
// EMSCRIPTEN_START_FUNCS
function __ZN3OIS6Effect16getForceTypeNameENS0_6EForceE(r1){var r2;if(r1>>>0>=6){r2=__str|0;return r2}r2=HEAP32[__ZL15pszEForceString+(r1<<2)>>2];return r2}function __ZN3OIS6Effect17getEffectTypeNameENS0_5ETypeE(r1){var r2;if(r1>>>0>=13){r2=__str1|0;return r2}r2=HEAP32[__ZL14pszETypeString+(r1<<2)>>2];return r2}function __ZN3OIS6Effect16getDirectionNameENS0_10EDirectionE(r1){var r2;if(r1>>>0>=8){r2=__str2|0;return r2}r2=HEAP32[__ZL19pszEDirectionString+(r1<<2)>>2];return r2}function __ZN3OIS6EffectC2Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS6EffectE+8;HEAP32[r1+4>>2]=0;HEAP32[r1+8>>2]=0;HEAP32[r1+36>>2]=0;HEAP16[r1+40>>1]=1;return}function __ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE(r1,r2,r3){HEAP32[r1>>2]=__ZTVN3OIS6EffectE+8;HEAP32[r1+4>>2]=r2;HEAP32[r1+8>>2]=r3;HEAP32[r1+12>>2]=1;HEAP16[r1+16>>1]=-1;HEAP32[r1+20>>2]=0;HEAP32[r1+24>>2]=-1;HEAP32[r1+28>>2]=0;HEAP32[r1+32>>2]=-1;HEAP16[r1+40>>1]=1;r3=r1+36|0;HEAP32[r3>>2]=0;if((r2|0)==1){r1=__Znwj(28);HEAP32[r1>>2]=__ZTVN3OIS14ConstantEffectE+8;HEAP32[r1+4>>2]=__ZTVN3OIS8EnvelopeE+8;HEAP32[r1+8>>2]=0;HEAP16[r1+12>>1]=0;HEAP32[r1+16>>2]=0;HEAP16[r1+20>>1]=0;HEAP16[r1+24>>1]=5e3;HEAP32[r3>>2]=r1;return}else if((r2|0)==2){r1=__Znwj(28);HEAP32[r1>>2]=__ZTVN3OIS10RampEffectE+8;HEAP32[r1+4>>2]=__ZTVN3OIS8EnvelopeE+8;HEAP32[r1+8>>2]=0;HEAP16[r1+12>>1]=0;HEAP32[r1+16>>2]=0;HEAP16[r1+20>>1]=0;HEAP16[r1+24>>1]=0;HEAP16[r1+26>>1]=0;HEAP32[r3>>2]=r1;return}else if((r2|0)==3){r1=__Znwj(36);HEAP32[r1>>2]=__ZTVN3OIS14PeriodicEffectE+8;HEAP32[r1+4>>2]=__ZTVN3OIS8EnvelopeE+8;HEAP32[r1+8>>2]=0;HEAP16[r1+12>>1]=0;HEAP32[r1+16>>2]=0;HEAP16[r1+20>>1]=0;HEAP16[r1+24>>1]=0;HEAP16[r1+26>>1]=0;HEAP16[r1+28>>1]=0;HEAP32[r1+32>>2]=0;HEAP32[r3>>2]=r1;return}else if((r2|0)==4){r2=__Znwj(16);HEAP32[r2>>2]=__ZTVN3OIS17ConditionalEffectE+8;r1=r2+4|0;HEAP16[r1>>1]=0;HEAP16[r1+2>>1]=0;HEAP16[r1+4>>1]=0;HEAP16[r1+6>>1]=0;HEAP16[r1+8>>1]=0;HEAP16[r1+10>>1]=0;HEAP32[r3>>2]=r2;return}else{return}}function __ZN3OIS6EffectD0Ev($this){HEAP32[$this>>2]=__ZTVN3OIS6EffectE+8;var $1=HEAP32[$this+36>>2];if(($1|0)==0){var $4=$this;__ZdlPv($4);return}var $3=HEAP32[HEAP32[$1>>2]+4>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$3]($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $4=$this;__ZdlPv($4);return}else{var $5$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($5$0)}}function __ZN3OIS6EffectD2Ev(r1){var r2;HEAP32[r1>>2]=__ZTVN3OIS6EffectE+8;r2=HEAP32[r1+36>>2];if((r2|0)==0){return}FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+4>>2]](r2);return}function __ZNK3OIS6Effect14getForceEffectEv(r1){var r2;r2=HEAP32[r1+36>>2];if((r2|0)==0){r1=___cxa_allocate_exception(20);HEAP32[r1>>2]=__ZTVN3OIS9ExceptionE+8;HEAP32[r1+4>>2]=4;HEAP32[r1+8>>2]=111;HEAP32[r1+12>>2]=__str4;HEAP32[r1+16>>2]=__str3;___cxa_throw(r1,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}else{return r2}}function __ZN3OIS9ExceptionD1Ev(r1){return}function __ZN3OIS6Effect10setNumAxesEs(r1,r2){if((HEAP32[r1+32>>2]|0)==-1){return}HEAP16[r1+40>>1]=r2;return}function __ZNK3OIS6Effect10getNumAxesEv(r1){return HEAP16[r1+40>>1]}function __ZN3OIS17ConditionalEffectD1Ev(r1){return}function __ZN3OIS17ConditionalEffectD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS14PeriodicEffectD1Ev(r1){return}function __ZN3OIS14PeriodicEffectD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS8EnvelopeD1Ev(r1){return}function __ZN3OIS8EnvelopeD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS10RampEffectD1Ev(r1){return}function __ZN3OIS10RampEffectD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS14ConstantEffectD1Ev(r1){return}function __ZN3OIS14ConstantEffectD0Ev(r1){__ZdlPv(r1);return}function __ZNK3OIS9Exception4whatEv(r1){return HEAP32[r1+16>>2]}function __ZN3OIS9ExceptionD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS13ForceFeedbackC2Ev(r1){var r2;HEAP32[r1>>2]=__ZTVN3OIS13ForceFeedbackE+8;r2=r1+8|0;HEAP32[r2>>2]=0;HEAP32[r1+12>>2]=0;HEAP32[r1+4>>2]=r2;HEAP8[r1+16|0]=0;HEAP8[r1+17|0]=0;return}function __ZN3OIS13ForceFeedback15_addEffectTypesENS_6Effect6EForceENS1_5ETypeE(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21;if((r2-1|0)>>>0>4){r4=___cxa_allocate_exception(20);r5=r4;HEAP32[r5>>2]=__ZTVN3OIS9ExceptionE+8;r6=r4+4|0;r7=r6;HEAP32[r7>>2]=8;r8=r4+8|0;r9=r8;HEAP32[r9>>2]=38;r10=r4+12|0;r11=r10;HEAP32[r11>>2]=__str110;r12=r4+16|0;r13=r12;HEAP32[r13>>2]=__str5;___cxa_throw(r4,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}if((r3-1|0)>>>0>11){r4=___cxa_allocate_exception(20);r5=r4;HEAP32[r5>>2]=__ZTVN3OIS9ExceptionE+8;r6=r4+4|0;r7=r6;HEAP32[r7>>2]=8;r8=r4+8|0;r9=r8;HEAP32[r9>>2]=38;r10=r4+12|0;r11=r10;HEAP32[r11>>2]=__str110;r12=r4+16|0;r13=r12;HEAP32[r13>>2]=__str5;___cxa_throw(r4,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}r4=r1+8|0;r13=r4|0;r12=HEAP32[r13>>2];if((r12|0)==0){r14=r13;r15=r4}else{r4=r12;while(1){if((HEAP32[r4+16>>2]|0)>(r2|0)){r12=r4|0;r13=HEAP32[r12>>2];if((r13|0)==0){r14=r12;r15=r4;break}else{r4=r13;continue}}else{r13=r4+4|0;r12=HEAP32[r13>>2];if((r12|0)==0){r14=r13;r15=r4;break}else{r4=r12;continue}}}}r4=__Znwj(24);r12=r4+16|0;if((r12|0)!=0){r13=r12;HEAP32[r13>>2]=r2;HEAP32[r13+4>>2]=r3}r3=r4;HEAP32[r4>>2]=0;HEAP32[r4+4>>2]=0;HEAP32[r4+8>>2]=r15;HEAP32[r14>>2]=r3;r15=r1+4|0;r4=HEAP32[HEAP32[r15>>2]>>2];if((r4|0)==0){r16=r3;r17=r1+8|0;r18=HEAP32[r17>>2];__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(r18,r16);r19=r1+12|0;r20=HEAP32[r19>>2];r21=r20+1|0;HEAP32[r19>>2]=r21;return}HEAP32[r15>>2]=r4;r16=HEAP32[r14>>2];r17=r1+8|0;r18=HEAP32[r17>>2];__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(r18,r16);r19=r1+12|0;r20=HEAP32[r19>>2];r21=r20+1|0;HEAP32[r19>>2]=r21;return}function __ZN3OIS13ForceFeedback15_setGainSupportEb(r1,r2){HEAP8[r1+16|0]=r2&1;return}function __ZN3OIS13ForceFeedback21_setAutoCenterSupportEb(r1,r2){HEAP8[r1+17|0]=r2&1;return}function __ZNK3OIS13ForceFeedback19getSupportedEffectsEv(r1){return r1+4|0}function __ZNK3OIS13ForceFeedback14supportsEffectENS_6Effect6EForceENS1_5ETypeE(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;r4=0;r5=r1+8|0;r1=r5|0;r6=r5;L1:while(1){r5=r1;while(1){r7=HEAP32[r5>>2];r8=r7;if((r7|0)==0){r9=0;r4=28;break L1}r10=HEAP32[r7+16>>2];if((r10|0)>(r2|0)){break}r11=r7+4|0;if((r10|0)<(r2|0)){r5=r11}else{break L1}}r1=r7|0;r6=r8}if(r4==28){return r9}r1=HEAP32[r7>>2];L11:do{if((r1|0)==0){r12=r8}else{r7=r1;r5=r8;while(1){r10=r7;while(1){r13=r10;if((HEAP32[r10+16>>2]|0)>=(r2|0)){break}r14=HEAP32[r10+4>>2];if((r14|0)==0){r12=r5;break L11}else{r10=r14}}r14=HEAP32[r10>>2];if((r14|0)==0){r12=r13;break}else{r7=r14;r5=r13}}}}while(0);r13=HEAP32[r11>>2];L19:do{if((r13|0)==0){r15=r6}else{r11=r13;r8=r6;while(1){r1=r11;while(1){r16=r1;if((HEAP32[r1+16>>2]|0)>(r2|0)){break}r5=HEAP32[r1+4>>2];if((r5|0)==0){r15=r8;break L19}else{r1=r5}}r10=HEAP32[r1>>2];if((r10|0)==0){r15=r16;break}else{r11=r10;r8=r16}}}}while(0);if((r12|0)==(r15|0)){r9=0;return r9}else{r17=r12}while(1){if((HEAP32[r17+20>>2]|0)==(r3|0)){r9=1;r4=27;break}r12=HEAP32[r17+4>>2];if((r12|0)==0){r16=r17|0;while(1){r2=HEAP32[r16+8>>2];if((r16|0)==(HEAP32[r2>>2]|0)){r18=r2;break}else{r16=r2}}}else{r16=r12;while(1){r2=HEAP32[r16>>2];if((r2|0)==0){r18=r16;break}else{r16=r2}}}r16=r18;if((r16|0)==(r15|0)){r9=0;r4=25;break}else{r17=r16}}if(r4==25){return r9}else if(r4==27){return r9}}function __ZN3OIS13ForceFeedbackD1Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS13ForceFeedbackE+8;__ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE(r1+4|0,HEAP32[r1+8>>2]);return}function __ZN3OIS13ForceFeedbackD0Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS13ForceFeedbackE+8;__ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE(r1+4|0,HEAP32[r1+8>>2]);__ZdlPv(r1);return}function __ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE(r1,r2){if((r2|0)==0){return}else{__ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE(r1,HEAP32[r2>>2]);__ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE(r1,HEAP32[r2+4>>2]);__ZdlPv(r2);return}}function __ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;r3=0;r4=(r2|0)==(r1|0);HEAP8[r2+12|0]=r4&1;if(r4){return}else{r5=r2}while(1){r6=r5+8|0;r7=HEAP32[r6>>2];r2=r7+12|0;if((HEAP8[r2]&1)!=0){r3=39;break}r8=r7+8|0;r9=HEAP32[r8>>2];r4=HEAP32[r9>>2];if((r7|0)==(r4|0)){r10=HEAP32[r9+4>>2];if((r10|0)==0){r3=7;break}r11=r10+12|0;if((HEAP8[r11]&1)!=0){r3=7;break}HEAP8[r2]=1;HEAP8[r9+12|0]=(r9|0)==(r1|0)|0;HEAP8[r11]=1}else{if((r4|0)==0){r3=24;break}r11=r4+12|0;if((HEAP8[r11]&1)!=0){r3=24;break}HEAP8[r2]=1;HEAP8[r9+12|0]=(r9|0)==(r1|0)|0;HEAP8[r11]=1}if((r9|0)==(r1|0)){r3=41;break}else{r5=r9}}if(r3==24){r1=r7|0;if((r5|0)==(HEAP32[r1>>2]|0)){r11=r5+4|0;r2=HEAP32[r11>>2];HEAP32[r1>>2]=r2;if((r2|0)==0){r12=r9}else{HEAP32[r2+8>>2]=r7;r12=HEAP32[r8>>2]}HEAP32[r6>>2]=r12;r12=HEAP32[r8>>2];r2=r12|0;if((HEAP32[r2>>2]|0)==(r7|0)){HEAP32[r2>>2]=r5}else{HEAP32[r12+4>>2]=r5}HEAP32[r11>>2]=r7;HEAP32[r8>>2]=r5;r13=r5;r14=HEAP32[r6>>2]}else{r13=r7;r14=r9}HEAP8[r13+12|0]=1;HEAP8[r14+12|0]=0;r13=r14+4|0;r6=HEAP32[r13>>2];r11=r6|0;r12=HEAP32[r11>>2];HEAP32[r13>>2]=r12;if((r12|0)!=0){HEAP32[r12+8>>2]=r14}r12=r14+8|0;HEAP32[r6+8>>2]=HEAP32[r12>>2];r13=HEAP32[r12>>2];r2=r13|0;if((HEAP32[r2>>2]|0)==(r14|0)){HEAP32[r2>>2]=r6}else{HEAP32[r13+4>>2]=r6}HEAP32[r11>>2]=r14;HEAP32[r12>>2]=r6;return}else if(r3==7){if((r5|0)==(HEAP32[r7>>2]|0)){r15=r7;r16=r9}else{r5=r7+4|0;r6=HEAP32[r5>>2];r12=r6|0;r14=HEAP32[r12>>2];HEAP32[r5>>2]=r14;if((r14|0)==0){r17=r9}else{HEAP32[r14+8>>2]=r7;r17=HEAP32[r8>>2]}r14=r6+8|0;HEAP32[r14>>2]=r17;r17=HEAP32[r8>>2];r9=r17|0;if((HEAP32[r9>>2]|0)==(r7|0)){HEAP32[r9>>2]=r6}else{HEAP32[r17+4>>2]=r6}HEAP32[r12>>2]=r7;HEAP32[r8>>2]=r6;r15=r6;r16=HEAP32[r14>>2]}HEAP8[r15+12|0]=1;HEAP8[r16+12|0]=0;r15=r16|0;r14=HEAP32[r15>>2];r6=r14+4|0;r8=HEAP32[r6>>2];HEAP32[r15>>2]=r8;if((r8|0)!=0){HEAP32[r8+8>>2]=r16}r8=r16+8|0;HEAP32[r14+8>>2]=HEAP32[r8>>2];r15=HEAP32[r8>>2];r7=r15|0;if((HEAP32[r7>>2]|0)==(r16|0)){HEAP32[r7>>2]=r14}else{HEAP32[r15+4>>2]=r14}HEAP32[r6>>2]=r16;HEAP32[r8>>2]=r14;return}else if(r3==39){return}else if(r3==41){return}}function __ZN3OIS12InputManagerC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($this,$name){HEAP32[$this>>2]=__ZTVN3OIS12InputManagerE+8;var $m_VersionName=$this+4|0;var $__s2_i_i=$m_VersionName;var $__size__i50_i=$m_VersionName;HEAP8[$__size__i50_i]=10;var $arrayidx_i_i=$__s2_i_i+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str33|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str33+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str33+2|0];HEAP8[$arrayidx_i_i+3|0]=HEAP8[__str33+3|0];HEAP8[$arrayidx_i_i+4|0]=HEAP8[__str33+4|0];HEAP8[$__s2_i_i+6|0]=0;var $__begin__i_i_i=$this+16|0;HEAP32[$__begin__i_i_i>>2]=0;var $__end__i_i_i=$this+20|0;HEAP32[$__end__i_i_i>>2]=0;HEAP32[$this+24>>2]=0;var $mFactoryObjects=$this+28|0;var $__tree__i_i=$mFactoryObjects|0;var $__first__i_i_i_i_i=$this+32|0;var $__left__i_i_i_i_i_i_i=$__first__i_i_i_i_i|0;HEAP32[$__left__i_i_i_i_i_i_i>>2]=0;var $__first__i_i_i20_i_i=$this+36|0;HEAP32[$__first__i_i_i20_i_i>>2]=0;var $1=$__first__i_i_i_i_i;var $__begin_node__i_i_i=$mFactoryObjects|0;HEAP32[$__begin_node__i_i_i>>2]=$1;var $mInputSystemName=$this+40|0;var $__size__i44_i_i=$name;if((HEAP8[$__size__i44_i_i]&1)==0){var $3=$mInputSystemName;HEAP32[$3>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$3+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$3+8>>2]=HEAP32[$__size__i44_i_i+8>>2];HEAP32[$this+52>>2]=0;HEAP32[$this+56>>2]=0;var $10=HEAP32[$__left__i_i_i_i_i_i_i>>2];var $11=$10;__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE($__tree__i_i,$11);HEAP32[$__first__i_i_i20_i_i>>2]=0;HEAP32[$__begin_node__i_i_i>>2]=$1;HEAP32[$__left__i_i_i_i_i_i_i>>2]=0;return}var $4=HEAP32[$name+8>>2];var $5=HEAP32[$name+4>>2];do{if($5>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($5>>>0<11){HEAP8[$mInputSystemName]=$5<<1;var $__p_0_i_i_i=$mInputSystemName+1|0}else{var $and_i_i_i_i_i=$5+16&-16;var $call_i_i_i_i_i10=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$this+48>>2]=$call_i_i_i_i_i10;HEAP32[$mInputSystemName>>2]=$and_i_i_i_i_i|1;HEAP32[$this+44>>2]=$5;var $__p_0_i_i_i=$call_i_i_i_i_i10}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$4,$5)|0;HEAP8[$__p_0_i_i_i+$5|0]=0;var $_pre=HEAP32[$__begin__i_i_i>>2];var $_pre17=HEAP32[$__end__i_i_i>>2];HEAP32[$this+52>>2]=0;HEAP32[$this+56>>2]=0;if(($_pre|0)==($_pre17|0)){var $10=HEAP32[$__left__i_i_i_i_i_i_i>>2];var $11=$10;__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE($__tree__i_i,$11);HEAP32[$__first__i_i_i20_i_i>>2]=0;HEAP32[$__begin_node__i_i_i>>2]=$1;HEAP32[$__left__i_i_i_i_i_i_i>>2]=0;return}HEAP32[$__end__i_i_i>>2]=$_pre17+(~(($_pre17-4+ -$_pre|0)>>>2)<<2);var $10=HEAP32[$__left__i_i_i_i_i_i_i>>2];var $11=$10;__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE($__tree__i_i,$11);HEAP32[$__first__i_i_i20_i_i>>2]=0;HEAP32[$__begin_node__i_i_i>>2]=$1;HEAP32[$__left__i_i_i_i_i_i_i>>2]=0;return}}while(0);var $12$0=___cxa_find_matching_catch(-1,-1);__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE($__tree__i_i,HEAP32[$this+32>>2]);var $15=HEAP32[$__begin__i_i_i>>2];var $16=$15;if(($15|0)!=0){var $17=HEAP32[$__end__i_i_i>>2];if(($15|0)!=($17|0)){HEAP32[$__end__i_i_i>>2]=$17+(~(($17-4+ -$16|0)>>>2)<<2)}__ZdlPv($15)}if((HEAP8[$__size__i50_i]&1)==0){___resumeException($12$0)}__ZdlPv(HEAP32[$this+12>>2]);___resumeException($12$0)}function __ZN3OIS12InputManagerD0Ev($this){((function(){try{__THREW__=0;return __ZN3OIS12InputManagerD2Ev($this)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $1$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($1$0)}}function __ZN3OIS12InputManagerD2Ev(r1){var r2,r3,r4,r5;HEAP32[r1>>2]=__ZTVN3OIS12InputManagerE+8;if((HEAP8[r1+40|0]&1)!=0){__ZdlPv(HEAP32[r1+48>>2])}__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE(r1+28|0,HEAP32[r1+32>>2]);r2=HEAP32[r1+16>>2];r3=r2;if((r2|0)!=0){r4=r1+20|0;r5=HEAP32[r4>>2];if((r2|0)!=(r5|0)){HEAP32[r4>>2]=r5+(~((r5-4+ -r3|0)>>>2)<<2)}__ZdlPv(r2)}if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS12InputManager16getVersionNumberEv(){return 66304}function __ZN3OIS12InputManager14getVersionNameEv(r1){return r1+4|0}function __ZN3OIS12InputManager17createInputSystemEj($windowhandle){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+48|0;var $__parent_i=sp;var $ref_tmp_i=sp+8;var $ref_tmp_i_i_i=sp+32;var $__size__i_i_i10=$ref_tmp_i_i_i;var $pl=STACKTOP;STACKTOP=STACKTOP+12|0;STACKTOP=STACKTOP+7&-8;var $wnd=STACKTOP;STACKTOP=STACKTOP+136|0;var $ref_tmp3=STACKTOP;STACKTOP=STACKTOP+24|0;var $ref_tmp4=STACKTOP;STACKTOP=STACKTOP+24|0;var $agg_tmp=STACKTOP;STACKTOP=STACKTOP+12|0;STACKTOP=STACKTOP+7&-8;var $agg_tmp6=STACKTOP;STACKTOP=STACKTOP+12|0;STACKTOP=STACKTOP+7&-8;var $__tree__i_i=$pl|0;var $__first__i_i_i_i_i=$pl+4|0;HEAP32[$__first__i_i_i_i_i>>2]=0;var $__first__i_i_i20_i_i=$pl+8|0;HEAP32[$__first__i_i_i20_i_i>>2]=0;var $__begin_node__i_i_i=$pl|0;HEAP32[$__begin_node__i_i_i>>2]=$__first__i_i_i_i_i;var $1=$wnd+56|0;var $2=$wnd|0;var $3=$wnd;var $__sb__i=$wnd+4|0;HEAP32[$2>>2]=__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE+12;var $4=$wnd+56|0;HEAP32[$4>>2]=__ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE+32;var $5=$wnd+56|0;var $6=$__sb__i;((function(){try{__THREW__=0;return __ZNSt3__18ios_base4initEPv($5,$6)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L1:do{if(!__THREW__){HEAP32[$wnd+128>>2]=0;HEAP32[$wnd+132>>2]=-1;HEAP32[$2>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$1>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $8=$__sb__i|0;HEAP32[$8>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i=$wnd+8|0;__ZNSt3__16localeC1Ev($__loc__i);var $__binp__i=$wnd+12|0;var $9=$__binp__i;HEAP32[$9>>2]=0;HEAP32[$9+4>>2]=0;HEAP32[$9+8>>2]=0;HEAP32[$9+12>>2]=0;HEAP32[$9+16>>2]=0;HEAP32[$9+20>>2]=0;HEAP32[$8>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;var $__str__i_i_i=$wnd+36|0;var $__hm__i_i_i=$wnd+48|0;var $__mode__i_i_i=$wnd+52|0;var $10=$wnd+36|0;HEAP32[$10>>2]=0;HEAP32[$10+4>>2]=0;HEAP32[$10+8>>2]=0;HEAP32[$10+12>>2]=0;HEAP32[$__mode__i_i_i>>2]=16;HEAP32[$__size__i_i_i10>>2]=0;HEAP32[$__size__i_i_i10+4>>2]=0;HEAP32[$__size__i_i_i10+8>>2]=0;((function(){try{__THREW__=0;return __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE($__sb__i,$ref_tmp_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $13$0=___cxa_find_matching_catch(-1,-1);var $14=$13$0;var $15=tempRet0;if((HEAP8[$__size__i_i_i10]&1)!=0){__ZdlPv(HEAP32[$ref_tmp_i_i_i+8>>2])}if((HEAP8[$__str__i_i_i]&1)!=0){__ZdlPv(HEAP32[$wnd+44>>2])}HEAP32[$8>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_i_0=$14;var $ehselector_slot_i_0=$15;label=12;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}if((HEAP8[$__size__i_i_i10]&1)!=0){__ZdlPv(HEAP32[$ref_tmp_i_i_i+8>>2])}((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj($3,$windowhandle)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L16:do{if(!__THREW__){var $__s2_i_i=$agg_tmp;var $__size__i50_i=$agg_tmp;HEAP8[$__size__i50_i]=12;var $arrayidx_i_i=$__s2_i_i+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str134|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str134+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str134+2|0];HEAP8[$arrayidx_i_i+3|0]=HEAP8[__str134+3|0];HEAP8[$arrayidx_i_i+4|0]=HEAP8[__str134+4|0];HEAP8[$arrayidx_i_i+5|0]=HEAP8[__str134+5|0];HEAP8[$__s2_i_i+7|0]=0;var $agg_result4_i=$agg_tmp6;var $26=HEAP32[$__mode__i_i_i>>2];do{if(($26&16|0)==0){if(($26&8|0)==0){HEAP32[$agg_result4_i>>2]=0;HEAP32[$agg_result4_i+4>>2]=0;HEAP32[$agg_result4_i+8>>2]=0;break}var $33=HEAP32[$__binp__i>>2];var $34=HEAP32[$wnd+20>>2];var $sub_ptr_rhs_cast_i_i_i=$33;var $sub_ptr_sub_i_i_i=$34-$sub_ptr_rhs_cast_i_i_i|0;if($sub_ptr_sub_i_i_i>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=139;break}}if($sub_ptr_sub_i_i_i>>>0<11){HEAP8[$agg_result4_i]=$sub_ptr_sub_i_i_i<<1;var $__p_0_ph_i=$agg_tmp6+1|0}else{var $and_i_i_i47=$sub_ptr_sub_i_i_i+16&-16;var $call_i_i_i55=(function(){try{__THREW__=0;return __Znwj($and_i_i_i47)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=139;break}HEAP32[$agg_tmp6+8>>2]=$call_i_i_i55;HEAP32[$agg_tmp6>>2]=$and_i_i_i47|1;HEAP32[$agg_tmp6+4>>2]=$sub_ptr_sub_i_i_i;var $__p_0_ph_i=$call_i_i_i55}var $__p_0_ph_i;if(($33|0)==($34|0)){var $__p_0_lcssa_i=$__p_0_ph_i}else{var $scevgep_i=$34+ -$sub_ptr_rhs_cast_i_i_i|0;var $__p_013_i=$__p_0_ph_i;var $__first_addr_014_i=$33;while(1){var $__first_addr_014_i;var $__p_013_i;HEAP8[$__p_013_i]=HEAP8[$__first_addr_014_i];var $incdec_ptr_i=$__first_addr_014_i+1|0;if(($incdec_ptr_i|0)==($34|0)){break}else{var $__p_013_i=$__p_013_i+1|0;var $__first_addr_014_i=$incdec_ptr_i}}var $__p_0_lcssa_i=$__p_0_ph_i+$scevgep_i|0}var $__p_0_lcssa_i;HEAP8[$__p_0_lcssa_i]=0}else{var $27=HEAP32[$__hm__i_i_i>>2];var $28=HEAP32[$wnd+28>>2];if($27>>>0<$28>>>0){HEAP32[$__hm__i_i_i>>2]=$28;var $29=$28}else{var $29=$27}var $29;var $30=HEAP32[$wnd+24>>2];var $sub_ptr_rhs_cast_i_i_i282=$30;var $sub_ptr_sub_i_i_i284=$29-$sub_ptr_rhs_cast_i_i_i282|0;if($sub_ptr_sub_i_i_i284>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=139;break}}if($sub_ptr_sub_i_i_i284>>>0<11){HEAP8[$agg_result4_i]=$sub_ptr_sub_i_i_i284<<1;var $__p_0_ph_i302=$agg_tmp6+1|0}else{var $and_i_i_i296=$sub_ptr_sub_i_i_i284+16&-16;var $call_i_i_i319=(function(){try{__THREW__=0;return __Znwj($and_i_i_i296)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=139;break}HEAP32[$agg_tmp6+8>>2]=$call_i_i_i319;HEAP32[$agg_tmp6>>2]=$and_i_i_i296|1;HEAP32[$agg_tmp6+4>>2]=$sub_ptr_sub_i_i_i284;var $__p_0_ph_i302=$call_i_i_i319}var $__p_0_ph_i302;if(($30|0)==($29|0)){var $__p_0_lcssa_i316=$__p_0_ph_i302}else{var $scevgep_i305=$29+ -$sub_ptr_rhs_cast_i_i_i282|0;var $__p_013_i309=$__p_0_ph_i302;var $__first_addr_014_i308=$30;while(1){var $__first_addr_014_i308;var $__p_013_i309;HEAP8[$__p_013_i309]=HEAP8[$__first_addr_014_i308];var $incdec_ptr_i310=$__first_addr_014_i308+1|0;if(($incdec_ptr_i310|0)==($29|0)){break}else{var $__p_013_i309=$__p_013_i309+1|0;var $__first_addr_014_i308=$incdec_ptr_i310}}var $__p_0_lcssa_i316=$__p_0_ph_i302+$scevgep_i305|0}var $__p_0_lcssa_i316;HEAP8[$__p_0_lcssa_i316]=0}}while(0);if(label==139){var $118$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_3=tempRet0;var $exn_slot_3=$118$0;break}var $37=HEAP8[$__size__i50_i];var $tobool_i_i_i57=($37&1)==0;L60:do{if($tobool_i_i_i57){var $38=$ref_tmp4;HEAP32[$38>>2]=HEAP32[$__size__i50_i>>2];HEAP32[$38+4>>2]=HEAP32[$__size__i50_i+4>>2];HEAP32[$38+8>>2]=HEAP32[$__size__i50_i+8>>2];label=55}else{var $39=HEAP32[$agg_tmp+8>>2];var $40=HEAP32[$agg_tmp+4>>2];do{if($40>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($40>>>0<11){HEAP8[$ref_tmp4]=$40<<1;var $__p_0_i_i_i=$ref_tmp4+1|0}else{var $and_i_i_i_i_i=$40+16&-16;var $call_i_i_i_i_i62=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$ref_tmp4+8>>2]=$call_i_i_i_i_i62;HEAP32[$ref_tmp4>>2]=$and_i_i_i_i_i|1;HEAP32[$ref_tmp4+4>>2]=$40;var $__p_0_i_i_i=$call_i_i_i_i_i62}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$39,$40)|0;HEAP8[$__p_0_i_i_i+$40|0]=0;label=55;break L60}}while(0);var $121$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body67$1=tempRet0;var $eh_lpad_body67$0=$121$0;var $_pre=HEAP8[$agg_result4_i];label=141}}while(0);L73:do{if(label==55){var $second_i_i_i=$ref_tmp4+12|0;var $41=HEAP8[$agg_result4_i];var $tobool_i_i_i65=($41&1)==0;L75:do{if($tobool_i_i_i65){var $42=$second_i_i_i;HEAP32[$42>>2]=HEAP32[$agg_result4_i>>2];HEAP32[$42+4>>2]=HEAP32[$agg_result4_i+4>>2];HEAP32[$42+8>>2]=HEAP32[$agg_result4_i+8>>2]}else{var $43=HEAP32[$agg_tmp6+8>>2];var $44=HEAP32[$agg_tmp6+4>>2];do{if($44>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($44>>>0<11){HEAP8[$second_i_i_i]=$44<<1;var $__p_0_i_i_i87=$second_i_i_i+1|0}else{var $and_i_i_i_i_i81=$44+16&-16;var $call_i_i_i_i_i92=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i81)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$ref_tmp4+20>>2]=$call_i_i_i_i_i92;HEAP32[$second_i_i_i>>2]=$and_i_i_i_i_i81|1;HEAP32[$ref_tmp4+16>>2]=$44;var $__p_0_i_i_i87=$call_i_i_i_i_i92}var $__p_0_i_i_i87;_memcpy($__p_0_i_i_i87,$43,$44)|0;HEAP8[$__p_0_i_i_i87+$44|0]=0;break L75}}while(0);var $45$0=___cxa_find_matching_catch(-1,-1);var $45$1=tempRet0;if((HEAP8[$ref_tmp4]&1)==0){var $eh_lpad_body67$1=$45$1;var $eh_lpad_body67$0=$45$0;var $_pre=$41;label=141;break L73}__ZdlPv(HEAP32[$ref_tmp4+8>>2]);var $eh_lpad_body67$1=$45$1;var $eh_lpad_body67$0=$45$0;var $_pre=$41;label=141;break L73}}while(0);var $__size__i44_i_i100=$ref_tmp4;var $tobool_i_i_i102=(HEAP8[$__size__i44_i_i100]&1)==0;L90:do{if($tobool_i_i_i102){var $49=$ref_tmp3;HEAP32[$49>>2]=HEAP32[$__size__i44_i_i100>>2];HEAP32[$49+4>>2]=HEAP32[$__size__i44_i_i100+4>>2];HEAP32[$49+8>>2]=HEAP32[$__size__i44_i_i100+8>>2];label=77}else{var $50=HEAP32[$ref_tmp4+8>>2];var $51=HEAP32[$ref_tmp4+4>>2];do{if($51>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($51>>>0<11){HEAP8[$ref_tmp3]=$51<<1;var $__p_0_i_i_i124=$ref_tmp3+1|0}else{var $and_i_i_i_i_i118=$51+16&-16;var $call_i_i_i_i_i129=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i118)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$ref_tmp3+8>>2]=$call_i_i_i_i_i129;HEAP32[$ref_tmp3>>2]=$and_i_i_i_i_i118|1;HEAP32[$ref_tmp3+4>>2]=$51;var $__p_0_i_i_i124=$call_i_i_i_i_i129}var $__p_0_i_i_i124;_memcpy($__p_0_i_i_i124,$50,$51)|0;HEAP8[$__p_0_i_i_i124+$51|0]=0;label=77;break L90}}while(0);var $124$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body73$1=tempRet0;var $eh_lpad_body73$0=$124$0;var $__size__i_i_i_i_i256_pre_pre_phi=$second_i_i_i;label=143}}while(0);L103:do{if(label==77){var $second_i_i=$ref_tmp3+12|0;var $__size__i44_i_i131=$second_i_i_i;L105:do{if((HEAP8[$__size__i44_i_i131]&1)==0){var $53=$second_i_i;HEAP32[$53>>2]=HEAP32[$__size__i44_i_i131>>2];HEAP32[$53+4>>2]=HEAP32[$__size__i44_i_i131+4>>2];HEAP32[$53+8>>2]=HEAP32[$__size__i44_i_i131+8>>2]}else{var $54=HEAP32[$ref_tmp4+20>>2];var $55=HEAP32[$ref_tmp4+16>>2];do{if($55>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($55>>>0<11){HEAP8[$second_i_i]=$55<<1;var $__p_0_i_i_i155=$second_i_i+1|0}else{var $and_i_i_i_i_i149=$55+16&-16;var $call_i_i_i_i_i160=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i149)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$ref_tmp3+20>>2]=$call_i_i_i_i_i160;HEAP32[$second_i_i>>2]=$and_i_i_i_i_i149|1;HEAP32[$ref_tmp3+16>>2]=$55;var $__p_0_i_i_i155=$call_i_i_i_i_i160}var $__p_0_i_i_i155;_memcpy($__p_0_i_i_i155,$54,$55)|0;HEAP8[$__p_0_i_i_i155+$55|0]=0;break L105}}while(0);var $56$0=___cxa_find_matching_catch(-1,-1);var $56$1=tempRet0;if((HEAP8[$ref_tmp3]&1)==0){var $eh_lpad_body73$1=$56$1;var $eh_lpad_body73$0=$56$0;var $__size__i_i_i_i_i256_pre_pre_phi=$__size__i44_i_i131;label=143;break L103}__ZdlPv(HEAP32[$ref_tmp3+8>>2]);var $eh_lpad_body73$1=$56$1;var $eh_lpad_body73$0=$56$0;var $__size__i_i_i_i_i256_pre_pre_phi=$__size__i44_i_i131;label=143;break L103}}while(0);var $__cc_i_i_i=$ref_tmp_i|0;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_EC2ERKS8_($__cc_i_i_i,$ref_tmp3)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $call_i=__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKS8_($__tree__i_i,$__parent_i,$ref_tmp_i);var $call_i_i_i_i172=(function(){try{__THREW__=0;return __Znwj(40)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();L122:do{if(!__THREW__){var $__value__i_i=$call_i_i_i_i172+16|0;do{if(($__value__i_i|0)!=0){var $__cc_i_i_i_i=$__value__i_i;((function(){try{__THREW__=0;return __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_EC2ERKS8_($__cc_i_i_i_i,$__cc_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){break}var $60$0=___cxa_find_matching_catch(-1,-1);var $60$1=tempRet0;if(($call_i_i_i_i172|0)==0){var $eh_lpad_body173$1=$60$1;var $eh_lpad_body173$0=$60$0;break L122}__ZdlPv($call_i_i_i_i172);var $eh_lpad_body173$1=$60$1;var $eh_lpad_body173$0=$60$0;break L122}}while(0);var $61=HEAP32[$__parent_i>>2];var $62=$call_i_i_i_i172;HEAP32[$call_i_i_i_i172>>2]=0;HEAP32[$call_i_i_i_i172+4>>2]=0;HEAP32[$call_i_i_i_i172+8>>2]=$61;HEAP32[$call_i>>2]=$62;var $66=HEAP32[HEAP32[$__begin_node__i_i_i>>2]>>2];if(($66|0)==0){var $68=$62}else{HEAP32[$__begin_node__i_i_i>>2]=$66;var $68=HEAP32[$call_i>>2]}var $68;var $__left_12_i_i=$pl+4|0;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[$__left_12_i_i>>2],$68);HEAP32[$__first__i_i_i20_i_i>>2]=HEAP32[$__first__i_i_i20_i_i>>2]+1;if((HEAP8[$ref_tmp_i+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp_i+20>>2])}if((HEAP8[$ref_tmp_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp_i+8>>2])}if((HEAP8[$second_i_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp3+20>>2])}if((HEAP8[$ref_tmp3]&1)!=0){__ZdlPv(HEAP32[$ref_tmp3+8>>2])}if((HEAP8[$__size__i44_i_i131]&1)!=0){__ZdlPv(HEAP32[$ref_tmp4+20>>2])}if(!$tobool_i_i_i102){__ZdlPv(HEAP32[$ref_tmp4+8>>2])}if(!$tobool_i_i_i65){__ZdlPv(HEAP32[$agg_tmp6+8>>2])}if(!$tobool_i_i_i57){__ZdlPv(HEAP32[$agg_tmp+8>>2])}var $call_i218224=(function(){try{__THREW__=0;return __Znwj(64)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=137;break L16}var $89=$call_i218224;((function(){try{__THREW__=0;return __ZN3OIS19BrowserInputManagerC2Ev($89)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){var $90=$call_i218224;var $92=HEAP32[HEAP32[$call_i218224>>2]>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$92]($90,$pl)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $96$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($96$0);if(($call_i218224|0)==0){label=124}else{var $100=HEAP32[HEAP32[$call_i218224>>2]+8>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$100]($90)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=124}}do{if(label==124){((function(){try{__THREW__=0;return ___cxa_rethrow()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}}while(0);var $101$0=___cxa_find_matching_catch(-1,-1);var $102=$101$0;var $103=tempRet0;((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_0_i=$103;var $exn_slot_0_i=$102;break}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}HEAP32[$2>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$4>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $105=$wnd+4|0;HEAP32[$105>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$__str__i_i_i]&1)!=0){__ZdlPv(HEAP32[$wnd+44>>2])}HEAP32[$105>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $109$0=___cxa_find_matching_catch(-1,-1);var $109$1=tempRet0;var $110=$wnd+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($110)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$109$1;var $eh_lpad_body$0=$109$0;break L1}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}var $108=$wnd+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($108)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__tree__i_i,HEAP32[$__left_12_i_i>>2]);STACKTOP=sp;return $90}else{var $112$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$112$0;break L1}}else{var $93$0=___cxa_find_matching_catch(-1,-1);var $95=tempRet0;__ZdlPv($call_i218224);var $ehselector_slot_0_i=$95;var $exn_slot_0_i=$93$0}}while(0);var $exn_slot_0_i;var $ehselector_slot_0_i;var $eh_lpad_body225$1=$ehselector_slot_0_i;var $eh_lpad_body225$0=$exn_slot_0_i;label=138;break L16}else{var $75$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body173$1=tempRet0;var $eh_lpad_body173$0=$75$0}}while(0);var $eh_lpad_body173$0;var $eh_lpad_body173$1;if((HEAP8[$ref_tmp_i+12|0]&1)!=0){__ZdlPv(HEAP32[$ref_tmp_i+20>>2])}if((HEAP8[$ref_tmp_i]&1)==0){var $eh_lpad_body91$1=$eh_lpad_body173$1;var $eh_lpad_body91$0=$eh_lpad_body173$0;break}__ZdlPv(HEAP32[$ref_tmp_i+8>>2]);var $eh_lpad_body91$1=$eh_lpad_body173$1;var $eh_lpad_body91$0=$eh_lpad_body173$0}else{var $127$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body91$1=tempRet0;var $eh_lpad_body91$0=$127$0}}while(0);var $eh_lpad_body91$0;var $eh_lpad_body91$1;var $128=$eh_lpad_body91$0;var $129=$eh_lpad_body91$1;if((HEAP8[$second_i_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp3+20>>2])}if((HEAP8[$ref_tmp3]&1)==0){var $ehselector_slot_0=$129;var $exn_slot_0=$128;var $__size__i_i_i_i_i256_pre_phi=$__size__i44_i_i131;break}__ZdlPv(HEAP32[$ref_tmp3+8>>2]);var $ehselector_slot_0=$129;var $exn_slot_0=$128;var $__size__i_i_i_i_i256_pre_phi=$__size__i44_i_i131}}while(0);if(label==143){var $__size__i_i_i_i_i256_pre_pre_phi;var $eh_lpad_body73$0;var $eh_lpad_body73$1;var $ehselector_slot_0=$eh_lpad_body73$1;var $exn_slot_0=$eh_lpad_body73$0;var $__size__i_i_i_i_i256_pre_phi=$__size__i_i_i_i_i256_pre_pre_phi}var $__size__i_i_i_i_i256_pre_phi;var $exn_slot_0;var $ehselector_slot_0;if((HEAP8[$__size__i_i_i_i_i256_pre_phi]&1)!=0){__ZdlPv(HEAP32[$ref_tmp4+20>>2])}if($tobool_i_i_i102){var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0;var $137=$41;break}__ZdlPv(HEAP32[$ref_tmp4+8>>2]);var $ehselector_slot_1=$ehselector_slot_0;var $exn_slot_1=$exn_slot_0;var $137=$41}}while(0);if(label==141){var $_pre;var $eh_lpad_body67$0;var $eh_lpad_body67$1;var $ehselector_slot_1=$eh_lpad_body67$1;var $exn_slot_1=$eh_lpad_body67$0;var $137=$_pre}var $137;var $exn_slot_1;var $ehselector_slot_1;if(($137&1)!=0){__ZdlPv(HEAP32[$agg_tmp6+8>>2])}if(($37&1)==0){var $ehselector_slot_3=$ehselector_slot_1;var $exn_slot_3=$exn_slot_1;break}__ZdlPv(HEAP32[$agg_tmp+8>>2]);var $ehselector_slot_3=$ehselector_slot_1;var $exn_slot_3=$exn_slot_1}else{label=137}}while(0);if(label==137){var $115$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body225$1=tempRet0;var $eh_lpad_body225$0=$115$0;label=138}if(label==138){var $eh_lpad_body225$0;var $eh_lpad_body225$1;var $ehselector_slot_3=$eh_lpad_body225$1;var $exn_slot_3=$eh_lpad_body225$0}var $exn_slot_3;var $ehselector_slot_3;HEAP32[$2>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$4>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $142=$wnd+4|0;HEAP32[$142>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$__str__i_i_i]&1)!=0){__ZdlPv(HEAP32[$wnd+44>>2])}HEAP32[$142>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){___cxa_find_matching_catch(-1,-1,0);var $147=$wnd+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($147)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZSt9terminatev()}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $145=$wnd+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($145)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_4=$ehselector_slot_3;var $exn_slot_4=$exn_slot_3;var $exn_slot_4;var $ehselector_slot_4;var $__left__i_i_i_i_i=$pl+4|0;var $149=HEAP32[$__left__i_i_i_i_i>>2];var $150=$149;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__tree__i_i,$150);var $lpad_val$0=$exn_slot_4;var $lpad_val$1=0;var $lpad_val32$0=$lpad_val$0;var $lpad_val32$1=$ehselector_slot_4;___resumeException($lpad_val32$0)}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}else{var $21$0=___cxa_find_matching_catch(-1,-1);var $exn_slot_i_0=$21$0;var $ehselector_slot_i_0=tempRet0;label=12}}while(0);do{if(label==12){var $ehselector_slot_i_0;var $exn_slot_i_0;var $24=$1|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($24)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$ehselector_slot_i_0;var $eh_lpad_body$0=$exn_slot_i_0;break}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}}while(0);var $eh_lpad_body$0;var $eh_lpad_body$1;var $ehselector_slot_4=$eh_lpad_body$1;var $exn_slot_4=$eh_lpad_body$0;var $exn_slot_4;var $ehselector_slot_4;var $__left__i_i_i_i_i=$pl+4|0;var $149=HEAP32[$__left__i_i_i_i_i>>2];var $150=$149;__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__tree__i_i,$150);var $lpad_val$0=$exn_slot_4;var $lpad_val$1=0;var $lpad_val32$0=$lpad_val$0;var $lpad_val32$1=$ehselector_slot_4;___resumeException($lpad_val32$0)}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj($this,$__n){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+40|0;var $agg_tmp_i=sp;var $ref_tmp_i_i=sp+8;var $__s=sp+16;var $ref_tmp=sp+24;var $tmp=sp+32;var $__ok__i_i=$__s|0;HEAP8[$__ok__i_i]=0;HEAP32[$__s+4>>2]=$this;var $1=$this;var $vbase_offset_i_i6=HEAP32[HEAP32[$1>>2]-12>>2];var $3=$this;L1:do{if((HEAP32[$3+($vbase_offset_i_i6+16)>>2]|0)==0){var $7=HEAP32[$3+($vbase_offset_i_i6+72)>>2];if(($7|0)!=0){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=18;break}}HEAP8[$__ok__i_i]=1;var $9=$3+HEAP32[HEAP32[$1>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNKSt3__18ios_base6getlocEv($ref_tmp,$9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();L6:do{if(!__THREW__){var $call_i41=(function(){try{__THREW__=0;return __ZNKSt3__16locale9use_facetERNS0_2idE($ref_tmp,__ZNSt3__17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE2idE)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){var $34$0=___cxa_find_matching_catch(-1,-1,0);var $35=$34$0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_0=$35;break}var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}var $10=$call_i41;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break}var $vbase_offset_i_i=HEAP32[HEAP32[$1>>2]-12>>2];var $14=HEAP32[$3+($vbase_offset_i_i+24)>>2];var $15=$3+$vbase_offset_i_i|0;var $16=$3+($vbase_offset_i_i+76)|0;var $17=HEAP32[$16>>2];var $extract_t11=$17&255;L13:do{if(($17|0)==-1){((function(){try{__THREW__=0;return __ZNKSt3__18ios_base6getlocEv($ref_tmp_i_i,$15)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break L6}var $call_i6_i_i=(function(){try{__THREW__=0;return __ZNKSt3__16locale9use_facetERNS0_2idE($ref_tmp_i_i,__ZNSt3__15ctypeIcE2idE)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){var $18=$call_i6_i_i;var $20=HEAP32[HEAP32[$call_i6_i_i>>2]+28>>2];var $call_i7_i_i=(function(){try{__THREW__=0;return FUNCTION_TABLE[$20]($18,32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break L6}HEAP32[$16>>2]=$call_i7_i_i<<24>>24;var $_off0=$call_i7_i_i;break L13}}while(0);var $21$0=___cxa_find_matching_catch(-1,-1,0);var $21$1=tempRet0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($ref_tmp_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$21$1;var $eh_lpad_body$0=$21$0;label=20;break L6}___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}else{var $_off0=$extract_t11}}while(0);var $_off0;var $24=HEAP32[HEAP32[$call_i41>>2]+24>>2];HEAP32[$agg_tmp_i>>2]=$14;((function(){try{__THREW__=0;return FUNCTION_TABLE[$24]($tmp,$10,$agg_tmp_i,$15,$_off0,$__n)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=19;break}if((HEAP32[$tmp>>2]|0)!=0){label=22;break L1}var $vbase_offset25=HEAP32[HEAP32[$1>>2]-12>>2];var $27=$3+$vbase_offset25|0;var $or_i_i=HEAP32[$3+($vbase_offset25+16)>>2]|5;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($27,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=22;break L1}else{label=19}}else{label=19}}while(0);if(label==19){var $32$0=___cxa_find_matching_catch(-1,-1,0);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$32$0;label=20}if(label==20){var $eh_lpad_body$0;var $eh_lpad_body$1;var $exn_slot_0=$eh_lpad_body$0}var $exn_slot_0;((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_1=$exn_slot_0;break}var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}else{label=22}}while(0);do{if(label==22){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=18;break}STACKTOP=sp;return $this}}while(0);if(label==18){var $30$0=___cxa_find_matching_catch(-1,-1,0);var $exn_slot_1=$30$0}var $exn_slot_1;___cxa_begin_catch($exn_slot_1);var $38=$3+HEAP32[HEAP32[$1>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv($38)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___cxa_end_catch();STACKTOP=sp;return $this}var $39$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($39$0)}else{var $40$0=___cxa_find_matching_catch(-1,-1,0);var $40$1=tempRet0;__ZSt9terminatev()}}function __ZN3OIS12InputManager17createInputSystemERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE($paramList){var label=0;var $call=__Znwj(64);var $0=$call;((function(){try{__THREW__=0;return __ZN3OIS19BrowserInputManagerC2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $4$0=___cxa_find_matching_catch(-1,-1);var $6=tempRet0;__ZdlPv($call);var $ehselector_slot_0=$6;var $exn_slot_0=$4$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val9$0=$lpad_val$0;var $lpad_val9$1=$ehselector_slot_0;___resumeException($lpad_val9$0)}var $1=$call;var $3=HEAP32[HEAP32[$call>>2]>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$3]($1,$paramList)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return $1}var $7$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($7$0);if(($call|0)==0){label=6}else{var $11=HEAP32[HEAP32[$call>>2]+8>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$11]($1)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=6}}do{if(label==6){((function(){try{__THREW__=0;return ___cxa_rethrow()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}}while(0);var $12$0=___cxa_find_matching_catch(-1,-1);var $13=$12$0;var $14=tempRet0;((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_0=$14;var $exn_slot_0=$13;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val9$0=$lpad_val$0;var $lpad_val9$1=$ehselector_slot_0;___resumeException($lpad_val9$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev($this){HEAP32[$this>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$this+56>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $2=$this+4|0;HEAP32[$2>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+36|0]&1)!=0){__ZdlPv(HEAP32[$this+44>>2])}HEAP32[$2>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i_i=$this+8|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__18ios_baseD2Ev($this+56|0);return}var $6$0=___cxa_find_matching_catch(-1,-1);var $7=$this+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($6$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN3OIS12InputManager18destroyInputSystemEPS0_(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10;if((r1|0)==0){return}r2=r1+28|0;r3=r2|0;r4=HEAP32[r3>>2];r5=r1+32|0;r6=r5;if((r4|0)!=(r6|0)){r7=r4;while(1){r4=HEAP32[r7+20>>2];FUNCTION_TABLE[HEAP32[HEAP32[r4>>2]+28>>2]](r4,HEAP32[r7+16>>2]);r4=HEAP32[r7+4>>2];if((r4|0)==0){r8=r7|0;while(1){r9=HEAP32[r8+8>>2];if((r8|0)==(HEAP32[r9>>2]|0)){r10=r9;break}else{r8=r9}}}else{r8=r4;while(1){r9=HEAP32[r8>>2];if((r9|0)==0){r10=r8;break}else{r8=r9}}}if((r10|0)==(r5|0)){break}else{r7=r10}}}r10=r5|0;__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE(r2,HEAP32[r10>>2]);HEAP32[r1+36>>2]=0;HEAP32[r3>>2]=r6;HEAP32[r10>>2]=0;FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+8>>2]](r1);return}function __ZN3OIS12InputManager15inputSystemNameEv(r1){return r1+40|0}function __ZN3OIS12InputManager18getNumberOfDevicesENS_4TypeE(r1,r2){var r3,r4,r5,r6,r7;r3=HEAP32[r1+16>>2];r4=HEAP32[r1+20>>2];if((r3|0)==(r4|0)){r5=0;return r5}else{r6=r3;r7=0}while(1){r3=HEAP32[r6>>2];r1=FUNCTION_TABLE[HEAP32[HEAP32[r3>>2]+12>>2]](r3,r2)+r7|0;r3=r6+4|0;if((r3|0)==(r4|0)){r5=r1;break}else{r6=r3;r7=r1}}return r5}function __ZN3OIS12InputManager15listFreeDevicesEv($agg_result,$this){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+48|0;var $__parent_i=sp;var $agg_tmp_i=sp+8;var $ref_tmp_i=sp+16;var $temp=sp+32;var $__tree__i_i=$agg_result|0;var $__first__i_i_i_i_i8=$agg_result+4|0;HEAP32[$__first__i_i_i_i_i8>>2]=0;var $__first__i_i_i20_i_i=$agg_result+8|0;HEAP32[$__first__i_i_i20_i_i>>2]=0;var $0=$__first__i_i_i_i_i8;var $__begin_node__i_i_i9=$agg_result|0;HEAP32[$__begin_node__i_i_i9>>2]=$0;var $1=HEAP32[$this+16>>2];var $2=HEAP32[$this+20>>2];if(($1|0)==($2|0)){STACKTOP=sp;return}var $__begin_node__i_i_i=$temp|0;var $__first__i_i_i_i_i=$temp+4|0;var $3=$__first__i_i_i_i_i;var $__tree__i_i33=$temp|0;var $__left__i_i_i_i_i34=$temp+4|0;var $first_i_i=$ref_tmp_i|0;var $second_i_i=$ref_tmp_i+4|0;var $4=$second_i_i;var $7=$agg_tmp_i|0;var $__left_12_i_i=$agg_result+4|0;var $__data__i_i_i_i_i_i_i=$ref_tmp_i+12|0;var $__size__i_i_i_i_i_i_i_i=$ref_tmp_i+8|0;var $arrayidx_i_i_i_i_i_i=$second_i_i+1|0;var $__cap__i_i_i_i_i_i=$second_i_i|0;var $i_sroa_0_053=$1;L4:while(1){var $i_sroa_0_053;var $8=HEAP32[$i_sroa_0_053>>2];var $10=HEAP32[HEAP32[$8>>2]+8>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$10]($temp,$8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=44;break}var $11=HEAP32[$__begin_node__i_i_i>>2];if(($11|0)!=($3|0)){var $agg_tmp51_sroa_0_051=$11;while(1){var $agg_tmp51_sroa_0_051;HEAP32[$first_i_i>>2]=HEAP32[$agg_tmp51_sroa_0_051+16>>2];var $__size__i44_i_i_i_i=$agg_tmp51_sroa_0_051+20|0;if((HEAP8[$__size__i44_i_i_i_i]&1)==0){HEAP32[$4>>2]=HEAP32[$__size__i44_i_i_i_i>>2];HEAP32[$4+4>>2]=HEAP32[$__size__i44_i_i_i_i+4>>2];HEAP32[$4+8>>2]=HEAP32[$__size__i44_i_i_i_i+8>>2]}else{var $14=HEAP32[$agg_tmp51_sroa_0_051+28>>2];var $15=HEAP32[$agg_tmp51_sroa_0_051+24>>2];if($15>>>0>4294967279){label=8;break L4}if($15>>>0<11){HEAP8[$4]=$15<<1;var $__p_0_i_i_i_i_i=$arrayidx_i_i_i_i_i_i}else{var $and_i_i_i_i_i_i_i=$15+16&-16;var $call_i_i_i_i_i_i_i12=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=45;break L4}HEAP32[$__data__i_i_i_i_i_i_i>>2]=$call_i_i_i_i_i_i_i12;HEAP32[$__cap__i_i_i_i_i_i>>2]=$and_i_i_i_i_i_i_i|1;HEAP32[$__size__i_i_i_i_i_i_i_i>>2]=$15;var $__p_0_i_i_i_i_i=$call_i_i_i_i_i_i_i12}var $__p_0_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i,$14,$15)|0;HEAP8[$__p_0_i_i_i_i_i+$15|0]=0}HEAP32[$7>>2]=$0;var $call_i=__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE11__find_leafENS_21__tree_const_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERPNS_16__tree_node_baseISJ_EERKSA_($__tree__i_i,$agg_tmp_i,$__parent_i,$ref_tmp_i);var $call_i_i_i24=(function(){try{__THREW__=0;return __Znwj(32)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=40;break L4}var $__value__i=$call_i_i_i24+16|0;do{if(($__value__i|0)!=0){HEAP32[$__value__i>>2]=HEAP32[$first_i_i>>2];var $second_i_i_i_i_i=$call_i_i_i24+20|0;var $17=HEAP8[$4];if(($17&1)==0){HEAP32[$second_i_i_i_i_i>>2]=HEAP32[$4>>2];HEAP32[$second_i_i_i_i_i+4>>2]=HEAP32[$4+4>>2];HEAP32[$second_i_i_i_i_i+8>>2]=HEAP32[$4+8>>2];break}var $18=HEAP32[$__data__i_i_i_i_i_i_i>>2];var $19=HEAP32[$__size__i_i_i_i_i_i_i_i>>2];if($19>>>0>4294967279){label=20;break L4}if($19>>>0<11){HEAP8[$second_i_i_i_i_i]=$19<<1;var $__p_0_i_i_i_i_i_i_i_i=$call_i_i_i24+21|0}else{var $and_i_i_i_i_i_i_i_i_i_i=$19+16&-16;var $call_i_i_i_i_i_i_i_i_i57_i=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i_i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){label=27;break L4}HEAP32[$call_i_i_i24+28>>2]=$call_i_i_i_i_i_i_i_i_i57_i;HEAP32[$second_i_i_i_i_i>>2]=$and_i_i_i_i_i_i_i_i_i_i|1;HEAP32[$call_i_i_i24+24>>2]=$19;var $__p_0_i_i_i_i_i_i_i_i=$call_i_i_i_i_i_i_i_i_i57_i}var $__p_0_i_i_i_i_i_i_i_i;_memcpy($__p_0_i_i_i_i_i_i_i_i,$18,$19)|0;HEAP8[$__p_0_i_i_i_i_i_i_i_i+$19|0]=0}}while(0);var $23=HEAP32[$__parent_i>>2];var $24=$call_i_i_i24;HEAP32[$call_i_i_i24>>2]=0;HEAP32[$call_i_i_i24+4>>2]=0;HEAP32[$call_i_i_i24+8>>2]=$23;HEAP32[$call_i>>2]=$24;var $28=HEAP32[HEAP32[$__begin_node__i_i_i9>>2]>>2];if(($28|0)==0){var $30=$24}else{HEAP32[$__begin_node__i_i_i9>>2]=$28;var $30=HEAP32[$call_i>>2]}var $30;__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[$__left_12_i_i>>2],$30);HEAP32[$__first__i_i_i20_i_i>>2]=HEAP32[$__first__i_i_i20_i_i>>2]+1;if((HEAP8[$4]&1)!=0){__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i>>2])}var $35=HEAP32[$agg_tmp51_sroa_0_051+4>>2];if(($35|0)==0){var $__x_addr_0_i=$agg_tmp51_sroa_0_051|0;while(1){var $__x_addr_0_i;var $38=HEAP32[$__x_addr_0_i+8>>2];if(($__x_addr_0_i|0)==(HEAP32[$38>>2]|0)){var $retval_0_i=$38;break}else{var $__x_addr_0_i=$38}}}else{var $__x_addr_i9_0_i=$35;while(1){var $__x_addr_i9_0_i;var $37=HEAP32[$__x_addr_i9_0_i>>2];if(($37|0)==0){var $retval_0_i=$__x_addr_i9_0_i;break}else{var $__x_addr_i9_0_i=$37}}}var $retval_0_i;if(($retval_0_i|0)==($__first__i_i_i_i_i|0)){break}else{var $agg_tmp51_sroa_0_051=$retval_0_i}}}__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($__tree__i_i33,HEAP32[$__left__i_i_i_i_i34>>2]);var $incdec_ptr_i=$i_sroa_0_053+4|0;if(($incdec_ptr_i|0)==($2|0)){label=51;break}else{var $i_sroa_0_053=$incdec_ptr_i}}do{if(label==44){var $47$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$47$0;var $exn_slot_0;var $ehselector_slot_0;var $54=HEAP32[$__left_12_i_i>>2];var $55=$54;__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($__tree__i_i,$55);var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val11$0=$lpad_val$0;var $lpad_val11$1=$ehselector_slot_0;___resumeException($lpad_val11$0)}else if(label==8){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){}else{var $lpad_nonloopexit$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$lpad_nonloopexit$0;break}}else if(label==20){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){}else{var $lpad_nonloopexit46$0=___cxa_find_matching_catch(-1,-1);var $lpad_phi47$1=tempRet0;var $lpad_phi47$0=$lpad_nonloopexit46$0;label=29;break}}else if(label==27){var $lpad_loopexit45$0=___cxa_find_matching_catch(-1,-1);var $lpad_phi47$1=tempRet0;var $lpad_phi47$0=$lpad_loopexit45$0;label=29}else if(label==40){var $42$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body25$1=tempRet0;var $eh_lpad_body25$0=$42$0;var $43=HEAP8[$4];label=41}else if(label==45){var $lpad_loopexit$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$lpad_loopexit$0}else if(label==51){STACKTOP=sp;return}}while(0);do{if(label==29){var $lpad_phi47$0;var $lpad_phi47$1;if(($call_i_i_i24|0)==0){var $eh_lpad_body25$1=$lpad_phi47$1;var $eh_lpad_body25$0=$lpad_phi47$0;var $43=$17;label=41;break}__ZdlPv($call_i_i_i24);var $eh_lpad_body25$1=$lpad_phi47$1;var $eh_lpad_body25$0=$lpad_phi47$0;var $43=$17;label=41}}while(0);do{if(label==41){var $43;var $eh_lpad_body25$0;var $eh_lpad_body25$1;if(($43&1)==0){var $eh_lpad_body$1=$eh_lpad_body25$1;var $eh_lpad_body$0=$eh_lpad_body25$0;break}__ZdlPv(HEAP32[$__data__i_i_i_i_i_i_i>>2]);var $eh_lpad_body$1=$eh_lpad_body25$1;var $eh_lpad_body$0=$eh_lpad_body25$0}}while(0);var $eh_lpad_body$0;var $eh_lpad_body$1;__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($__tree__i_i33,HEAP32[$__left__i_i_i_i_i34>>2]);var $ehselector_slot_0=$eh_lpad_body$1;var $exn_slot_0=$eh_lpad_body$0;var $exn_slot_0;var $ehselector_slot_0;var $54=HEAP32[$__left_12_i_i>>2];var $55=$54;__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($__tree__i_i,$55);var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val11$0=$lpad_val$0;var $lpad_val11$1=$ehselector_slot_0;___resumeException($lpad_val11$0)}function __ZN3OIS12InputManager17createInputObjectENS_4TypeEbRKNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE($this,$iType,$bufferMode,$vendor){var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $obj=sp;HEAP32[$obj>>2]=0;var $0=HEAP32[$this+16>>2];var $1=HEAP32[$this+20>>2];L1:do{if(($0|0)!=($1|0)){var $__size__i_i_i_i=$vendor;var $__size__i23_i_i_i=$vendor+4|0;var $i_sroa_0_015=$0;while(1){var $i_sroa_0_015;var $2=HEAP32[$i_sroa_0_015>>2];if((FUNCTION_TABLE[HEAP32[HEAP32[$2>>2]+16>>2]]($2,$iType)|0)>0){var $conv_i_i_i_i=HEAPU8[$__size__i_i_i_i];if(($conv_i_i_i_i&1|0)==0){var $cond_i_i_i=$conv_i_i_i_i>>>1}else{var $cond_i_i_i=HEAP32[$__size__i23_i_i_i>>2]}var $cond_i_i_i;if(($cond_i_i_i|0)==0){break}var $7=HEAP32[$i_sroa_0_015>>2];if(FUNCTION_TABLE[HEAP32[HEAP32[$7>>2]+20>>2]]($7,$iType,$vendor)){break}}var $incdec_ptr_i=$i_sroa_0_015+4|0;if(($incdec_ptr_i|0)==($1|0)){break L1}else{var $i_sroa_0_015=$incdec_ptr_i}}var $10=HEAP32[$i_sroa_0_015>>2];HEAP32[$obj>>2]=FUNCTION_TABLE[HEAP32[HEAP32[$10>>2]+24>>2]]($10,$this,$iType,$bufferMode,$vendor);var $13=HEAP32[$i_sroa_0_015>>2];HEAP32[__ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_($this+28|0,$obj)>>2]=$13;var $_pre=HEAP32[$obj>>2];if(($_pre|0)==0){break}var $20=HEAP32[HEAP32[$_pre>>2]+28>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$20]($_pre)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){STACKTOP=sp;return $_pre}var $21$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($21$0);((function(){try{__THREW__=0;return __ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE($this,$_pre)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();do{if(!__THREW__){((function(){try{__THREW__=0;return ___cxa_rethrow()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}}while(0);var $24$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($24$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}}while(0);var $exception=___cxa_allocate_exception(20);HEAP32[$exception>>2]=__ZTVN3OIS9ExceptionE+8;HEAP32[$exception+4>>2]=1;HEAP32[$exception+8>>2]=208;HEAP32[$exception+12>>2]=__str436;HEAP32[$exception+16>>2]=__str335;___cxa_throw($exception,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}function __ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r3=0;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r1+4|0;r7=r6|0;r8=HEAP32[r7>>2];do{if((r8|0)==0){r9=r6;HEAP32[r5>>2]=r9;r10=r7;r11=r9}else{r9=HEAP32[r2>>2];r12=r8;while(1){r13=HEAP32[r12+16>>2];if(r9>>>0<r13>>>0){r14=r12|0;r15=HEAP32[r14>>2];if((r15|0)==0){r3=5;break}else{r12=r15;continue}}if(r13>>>0>=r9>>>0){r3=9;break}r16=r12+4|0;r13=HEAP32[r16>>2];if((r13|0)==0){r3=8;break}else{r12=r13}}if(r3==5){HEAP32[r5>>2]=r12;r10=r14;r11=r12;break}else if(r3==8){HEAP32[r5>>2]=r12;r10=r16;r11=r12;break}else if(r3==9){HEAP32[r5>>2]=r12;r10=r5;r11=r12;break}}}while(0);r5=HEAP32[r10>>2];if((r5|0)!=0){r17=r5;r18=r17+20|0;STACKTOP=r4;return r18}r5=__Znwj(24);r3=r5+16|0;if((r3|0)!=0){HEAP32[r3>>2]=HEAP32[r2>>2]}r2=r5+20|0;if((r2|0)!=0){HEAP32[r2>>2]=0}r2=r5;HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=0;HEAP32[r5+8>>2]=r11;HEAP32[r10>>2]=r2;r11=r1|0;r3=HEAP32[HEAP32[r11>>2]>>2];if((r3|0)==0){r19=r2}else{HEAP32[r11>>2]=r3;r19=HEAP32[r10>>2]}__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r1+4>>2],r19);r19=r1+8|0;HEAP32[r19>>2]=HEAP32[r19>>2]+1;r17=r5;r18=r17+20|0;STACKTOP=r4;return r18}function __ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12;if((r2|0)==0){return}r3=r1+32|0;r4=r3;r5=HEAP32[r3>>2];do{if((r5|0)!=0){r3=r5;r6=r4;L5:while(1){r7=r3;while(1){r8=r7;if(HEAP32[r7+16>>2]>>>0>=r2>>>0){break}r9=HEAP32[r7+4>>2];if((r9|0)==0){r10=r6;break L5}else{r7=r9}}r9=HEAP32[r7>>2];if((r9|0)==0){r10=r8;break}else{r3=r9;r6=r8}}if((r10|0)==(r4|0)){break}if(HEAP32[r10+16>>2]>>>0>r2>>>0){break}r6=HEAP32[r10+20>>2];FUNCTION_TABLE[HEAP32[HEAP32[r6>>2]+28>>2]](r6,r2);r6=r10|0;r3=HEAP32[r10+4>>2];if((r3|0)==0){r9=r6;while(1){r11=HEAP32[r9+8>>2];if((r9|0)==(HEAP32[r11>>2]|0)){r12=r11;break}else{r9=r11}}}else{r9=r3;while(1){r11=HEAP32[r9>>2];if((r11|0)==0){r12=r9;break}else{r9=r11}}}r9=r1+28|0;if((HEAP32[r9>>2]|0)==(r10|0)){HEAP32[r9>>2]=r12}r9=r1+36|0;HEAP32[r9>>2]=HEAP32[r9>>2]-1;__ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r1+32>>2],r6);__ZdlPv(r10);return}}while(0);r10=___cxa_allocate_exception(20);HEAP32[r10>>2]=__ZTVN3OIS9ExceptionE+8;HEAP32[r10+4>>2]=8;HEAP32[r10+8>>2]=237;HEAP32[r10+12>>2]=__str436;HEAP32[r10+16>>2]=__str537;___cxa_throw(r10,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}function __ZN3OIS12InputManager17addFactoryCreatorEPNS_14FactoryCreatorE(r1,r2){var r3,r4,r5,r6,r7;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;HEAP32[r4>>2]=r2;if((r2|0)==0){STACKTOP=r3;return}r5=r1+20|0;r6=HEAP32[r5>>2];if((r6|0)==(HEAP32[r1+24>>2]|0)){__ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_(r1+16|0,r4);STACKTOP=r3;return}if((r6|0)==0){r7=0}else{HEAP32[r6>>2]=r2;r7=HEAP32[r5>>2]}HEAP32[r5>>2]=r7+4;STACKTOP=r3;return}function __ZN3OIS12InputManager20removeFactoryCreatorEPNS_14FactoryCreatorE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;r3=0;if((r2|0)==0){return}r4=r1+28|0;r5=HEAP32[r4>>2];r6=r1+32|0;if((r5|0)!=(r6|0)){r7=r1+36|0;r8=r1+32|0;r9=r5;while(1){if((HEAP32[r9+20>>2]|0)==(r2|0)){FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+28>>2]](r2,HEAP32[r9+16>>2]);r5=r9|0;r10=HEAP32[r9+4>>2];r11=(r10|0)==0;if(r11){r12=r5;while(1){r13=HEAP32[r12+8>>2];if((r12|0)==(HEAP32[r13>>2]|0)){r14=r13;break}else{r12=r13}}}else{r12=r10;while(1){r13=HEAP32[r12>>2];if((r13|0)==0){r14=r12;break}else{r12=r13}}}r12=r14;if(r11){r13=r5;while(1){r15=HEAP32[r13+8>>2];if((r13|0)==(HEAP32[r15>>2]|0)){r16=r15;break}else{r13=r15}}}else{r13=r10;while(1){r11=HEAP32[r13>>2];if((r11|0)==0){r16=r13;break}else{r13=r11}}}if((HEAP32[r4>>2]|0)==(r9|0)){HEAP32[r4>>2]=r16}HEAP32[r7>>2]=HEAP32[r7>>2]-1;__ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r8>>2],r5);__ZdlPv(r9);r17=r12}else{r17=r9}r13=HEAP32[r17+4>>2];if((r13|0)==0){r10=r17|0;while(1){r11=HEAP32[r10+8>>2];if((r10|0)==(HEAP32[r11>>2]|0)){r18=r11;break}else{r10=r11}}}else{r10=r13;while(1){r12=HEAP32[r10>>2];if((r12|0)==0){r18=r10;break}else{r10=r12}}}if((r18|0)==(r6|0)){break}else{r9=r18}}}r18=HEAP32[r1+16>>2];r9=r1+20|0;r1=HEAP32[r9>>2];r6=r18;while(1){if((r6|0)==(r1|0)){r3=27;break}if((HEAP32[r6>>2]|0)==(r2|0)){break}else{r6=r6+4|0}}if(r3==27){return}if((r6|0)==(r1|0)){return}r3=r6-r18>>2;r6=r18+(r3+1<<2)|0;r2=r1-r6|0;_memmove(r18+(r3<<2)|0,r6,r2,4,0);r6=r18+((r2>>2)+r3<<2)|0;r3=HEAP32[r9>>2];if((r6|0)==(r3|0)){return}HEAP32[r9>>2]=r3+(~((r3-4+ -r6|0)>>>2)<<2);return}function __ZN3OIS12InputManager18enableAddOnFactoryENS0_14AddOnFactoriesE(r1,r2){return}function __ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r3=0;r4=r1+4|0;r5=r1|0;r6=HEAP32[r5>>2];r7=r6;r8=HEAP32[r4>>2]-r7|0;r9=r8>>2;r10=r9+1|0;if(r10>>>0>1073741823){__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(0)}r11=r1+8|0;r1=HEAP32[r11>>2]-r7|0;if(r1>>2>>>0>536870910){r12=1073741823;r3=5}else{r7=r1>>1;r1=r7>>>0<r10>>>0?r10:r7;if((r1|0)==0){r13=0;r14=0}else{r12=r1;r3=5}}if(r3==5){r13=__Znwj(r12<<2);r14=r12}r12=r13+(r9<<2)|0;if((r12|0)!=0){HEAP32[r12>>2]=HEAP32[r2>>2]}r2=r6;_memcpy(r13,r2,r8)|0;HEAP32[r5>>2]=r13;HEAP32[r4>>2]=r13+(r10<<2);HEAP32[r11>>2]=r13+(r14<<2);if((r6|0)==0){return}__ZdlPv(r2);return}function __ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv($this){var $exception=___cxa_allocate_exception(8);var $0=$exception;((function(){try{__THREW__=0;return __ZNSt11logic_errorC2EPKc($0,__str638|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[$exception>>2]=__ZTVSt12length_error+8;___cxa_throw($exception,__ZTISt12length_error,FUNCTION_TABLE_OFFSET+60)}else{var $2$0=___cxa_find_matching_catch(-1,-1);___cxa_free_exception($exception);___resumeException($2$0)}}function __ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34;r3=0;r4=r2|0;r5=HEAP32[r4>>2];do{if((r5|0)==0){r6=r2;r3=5}else{r7=HEAP32[r2+4>>2];if((r7|0)==0){r8=r5;r9=r2;r10=r2|0;r3=7;break}else{r11=r7;while(1){r7=HEAP32[r11>>2];if((r7|0)==0){r6=r11;r3=5;break}else{r11=r7}}}}}while(0);do{if(r3==5){r5=r6|0;r11=HEAP32[r6+4>>2];if((r11|0)!=0){r8=r11;r9=r6;r10=r5;r3=7;break}r12=0;r13=0;r14=r6+8|0;r15=r6;r16=r5}}while(0);if(r3==7){r6=r9+8|0;HEAP32[r8+8>>2]=HEAP32[r6>>2];r12=r8;r13=1;r14=r6;r15=r9;r16=r10}r10=HEAP32[r14>>2];r9=r10|0;do{if((r15|0)==(HEAP32[r9>>2]|0)){HEAP32[r9>>2]=r12;if((r15|0)==(r1|0)){r17=r12;r18=0;break}r17=r1;r18=HEAP32[HEAP32[r14>>2]+4>>2]}else{HEAP32[r10+4>>2]=r12;r17=r1;r18=HEAP32[HEAP32[r14>>2]>>2]}}while(0);r1=r15+12|0;r10=(HEAP8[r1]&1)==0;if((r15|0)==(r2|0)){r19=r17}else{r9=r2+8|0;r6=HEAP32[r9>>2];HEAP32[r14>>2]=r6;if((HEAP32[HEAP32[r9>>2]>>2]|0)==(r2|0)){HEAP32[r6>>2]=r15}else{HEAP32[r6+4>>2]=r15}r6=HEAP32[r4>>2];HEAP32[r16>>2]=r6;HEAP32[r6+8>>2]=r15;r6=HEAP32[r2+4>>2];HEAP32[r15+4>>2]=r6;if((r6|0)!=0){HEAP32[r6+8>>2]=r15}HEAP8[r1]=HEAP8[r2+12|0]&1;r19=(r17|0)==(r2|0)?r15:r17}if(r10|(r19|0)==0){return}if(r13){HEAP8[r12+12|0]=1;return}else{r20=r19;r21=r18}while(1){r18=r21+8|0;r19=HEAP32[r18>>2];r12=r21+12|0;r13=(HEAP8[r12]&1)!=0;if((r21|0)==(HEAP32[r19>>2]|0)){if(r13){r22=r20;r23=r21}else{HEAP8[r12]=1;HEAP8[r19+12|0]=0;r10=HEAP32[r18>>2];r17=r10|0;r15=HEAP32[r17>>2];r2=r15+4|0;r1=HEAP32[r2>>2];HEAP32[r17>>2]=r1;if((r1|0)!=0){HEAP32[r1+8>>2]=r10}r1=r10+8|0;HEAP32[r15+8>>2]=HEAP32[r1>>2];r17=HEAP32[r1>>2];r6=r17|0;if((HEAP32[r6>>2]|0)==(r10|0)){HEAP32[r6>>2]=r15}else{HEAP32[r17+4>>2]=r15}HEAP32[r2>>2]=r10;HEAP32[r1>>2]=r15;r15=HEAP32[r21+4>>2];r22=(r20|0)==(r15|0)?r21:r20;r23=HEAP32[r15>>2]}r24=HEAP32[r23>>2];r25=(r24|0)==0;if(!r25){if((HEAP8[r24+12|0]&1)==0){r3=69;break}}r15=HEAP32[r23+4>>2];if((r15|0)!=0){if((HEAP8[r15+12|0]&1)==0){r3=68;break}}HEAP8[r23+12|0]=0;r15=HEAP32[r23+8>>2];r26=r15+12|0;if((HEAP8[r26]&1)==0|(r15|0)==(r22|0)){r3=65;break}r1=HEAP32[r15+8>>2];r10=HEAP32[r1>>2];if((r15|0)!=(r10|0)){r20=r22;r21=r10;continue}r20=r22;r21=HEAP32[r1+4>>2];continue}if(r13){r27=r20;r28=r21}else{HEAP8[r12]=1;HEAP8[r19+12|0]=0;r19=HEAP32[r18>>2];r18=r19+4|0;r12=HEAP32[r18>>2];r13=r12|0;r1=HEAP32[r13>>2];HEAP32[r18>>2]=r1;if((r1|0)!=0){HEAP32[r1+8>>2]=r19}r1=r19+8|0;HEAP32[r12+8>>2]=HEAP32[r1>>2];r18=HEAP32[r1>>2];r10=r18|0;if((HEAP32[r10>>2]|0)==(r19|0)){HEAP32[r10>>2]=r12}else{HEAP32[r18+4>>2]=r12}HEAP32[r13>>2]=r19;HEAP32[r1>>2]=r12;r12=HEAP32[r21>>2];r27=(r20|0)==(r12|0)?r21:r20;r28=HEAP32[r12+4>>2]}r29=r28|0;r30=HEAP32[r29>>2];if((r30|0)!=0){if((HEAP8[r30+12|0]&1)==0){r3=39;break}}r12=HEAP32[r28+4>>2];if((r12|0)!=0){if((HEAP8[r12+12|0]&1)==0){r31=r12;r3=40;break}}HEAP8[r28+12|0]=0;r12=HEAP32[r28+8>>2];if((r12|0)==(r27|0)){r32=r27;r3=36;break}if((HEAP8[r12+12|0]&1)==0){r32=r12;r3=36;break}r1=HEAP32[r12+8>>2];r19=HEAP32[r1>>2];if((r12|0)!=(r19|0)){r20=r27;r21=r19;continue}r20=r27;r21=HEAP32[r1+4>>2]}if(r3==36){HEAP8[r32+12|0]=1;return}else if(r3==39){r32=HEAP32[r28+4>>2];if((r32|0)==0){r3=41}else{r31=r32;r3=40}}else if(r3==65){HEAP8[r26]=1;return}else if(r3==68){if(r25){r3=70}else{r3=69}}if(r3==40){if((HEAP8[r31+12|0]&1)==0){r33=r28;r3=47}else{r3=41}}else if(r3==69){if((HEAP8[r24+12|0]&1)==0){r34=r23;r3=76}else{r3=70}}if(r3==41){HEAP8[r30+12|0]=1;HEAP8[r28+12|0]=0;r30=HEAP32[r29>>2];r24=r30+4|0;r31=HEAP32[r24>>2];HEAP32[r29>>2]=r31;if((r31|0)!=0){HEAP32[r31+8>>2]=r28}r31=r28+8|0;HEAP32[r30+8>>2]=HEAP32[r31>>2];r29=HEAP32[r31>>2];r25=r29|0;if((HEAP32[r25>>2]|0)==(r28|0)){HEAP32[r25>>2]=r30}else{HEAP32[r29+4>>2]=r30}HEAP32[r24>>2]=r28;HEAP32[r31>>2]=r30;r33=r30;r3=47}else if(r3==70){r30=r23+4|0;HEAP8[HEAP32[r30>>2]+12|0]=1;HEAP8[r23+12|0]=0;r31=HEAP32[r30>>2];r28=r31|0;r24=HEAP32[r28>>2];HEAP32[r30>>2]=r24;if((r24|0)!=0){HEAP32[r24+8>>2]=r23}r24=r23+8|0;HEAP32[r31+8>>2]=HEAP32[r24>>2];r30=HEAP32[r24>>2];r29=r30|0;if((HEAP32[r29>>2]|0)==(r23|0)){HEAP32[r29>>2]=r31}else{HEAP32[r30+4>>2]=r31}HEAP32[r28>>2]=r23;HEAP32[r24>>2]=r31;r34=r31;r3=76}if(r3==47){r31=r33+8|0;r24=HEAP32[r31>>2]+12|0;HEAP8[r33+12|0]=HEAP8[r24]&1;HEAP8[r24]=1;HEAP8[HEAP32[r33+4>>2]+12|0]=1;r33=HEAP32[r31>>2];r31=r33+4|0;r24=HEAP32[r31>>2];r23=r24|0;r28=HEAP32[r23>>2];HEAP32[r31>>2]=r28;if((r28|0)!=0){HEAP32[r28+8>>2]=r33}r28=r33+8|0;HEAP32[r24+8>>2]=HEAP32[r28>>2];r31=HEAP32[r28>>2];r30=r31|0;if((HEAP32[r30>>2]|0)==(r33|0)){HEAP32[r30>>2]=r24}else{HEAP32[r31+4>>2]=r24}HEAP32[r23>>2]=r33;HEAP32[r28>>2]=r24;return}else if(r3==76){r3=r34+8|0;r24=HEAP32[r3>>2]+12|0;HEAP8[r34+12|0]=HEAP8[r24]&1;HEAP8[r24]=1;HEAP8[HEAP32[r34>>2]+12|0]=1;r34=HEAP32[r3>>2];r3=r34|0;r24=HEAP32[r3>>2];r28=r24+4|0;r33=HEAP32[r28>>2];HEAP32[r3>>2]=r33;if((r33|0)!=0){HEAP32[r33+8>>2]=r34}r33=r34+8|0;HEAP32[r24+8>>2]=HEAP32[r33>>2];r3=HEAP32[r33>>2];r23=r3|0;if((HEAP32[r23>>2]|0)==(r34|0)){HEAP32[r23>>2]=r24}else{HEAP32[r3+4>>2]=r24}HEAP32[r28>>2]=r34;HEAP32[r33>>2]=r24;return}}function __ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE11__find_leafENS_21__tree_const_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERPNS_16__tree_node_baseISJ_EERKSA_(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r5=0;r6=STACKTOP;r7=r2;r2=STACKTOP;STACKTOP=STACKTOP+4|0;STACKTOP=STACKTOP+7&-8;HEAP32[r2>>2]=HEAP32[r7>>2];r7=r1+4|0;r8=HEAP32[r2>>2];do{if((r8|0)!=(r7|0)){r2=HEAP32[r4>>2];if((HEAP32[r8+16>>2]|0)>=(r2|0)){break}r9=r7|0;r10=HEAP32[r9>>2];if((r10|0)==0){HEAP32[r3>>2]=r7;r11=r9;STACKTOP=r6;return r11}else{r12=r10}while(1){if((HEAP32[r12+16>>2]|0)<(r2|0)){r13=r12+4|0;r10=HEAP32[r13>>2];if((r10|0)==0){r5=22;break}else{r12=r10;continue}}else{r14=r12|0;r10=HEAP32[r14>>2];if((r10|0)==0){r5=24;break}else{r12=r10;continue}}}if(r5==24){HEAP32[r3>>2]=r12;r11=r14;STACKTOP=r6;return r11}else if(r5==22){HEAP32[r3>>2]=r12;r11=r13;STACKTOP=r6;return r11}}}while(0);r13=HEAP32[r8>>2];do{if((r8|0)==(HEAP32[r1>>2]|0)){r15=r8}else{if((r13|0)==0){r12=r8|0;while(1){r14=HEAP32[r12+8>>2];if((r12|0)==(HEAP32[r14>>2]|0)){r12=r14}else{r16=r14;break}}}else{r12=r13;while(1){r14=HEAP32[r12+4>>2];if((r14|0)==0){r16=r12;break}else{r12=r14}}}r12=HEAP32[r4>>2];if((r12|0)>=(HEAP32[r16+16>>2]|0)){r15=r16;break}r14=r7|0;r2=HEAP32[r14>>2];if((r2|0)==0){HEAP32[r3>>2]=r7;r11=r14;STACKTOP=r6;return r11}else{r17=r2}while(1){if((r12|0)<(HEAP32[r17+16>>2]|0)){r18=r17|0;r2=HEAP32[r18>>2];if((r2|0)==0){r5=15;break}else{r17=r2;continue}}else{r19=r17+4|0;r2=HEAP32[r19>>2];if((r2|0)==0){r5=17;break}else{r17=r2;continue}}}if(r5==17){HEAP32[r3>>2]=r17;r11=r19;STACKTOP=r6;return r11}else if(r5==15){HEAP32[r3>>2]=r17;r11=r18;STACKTOP=r6;return r11}}}while(0);if((r13|0)==0){HEAP32[r3>>2]=r8;r11=r8|0;STACKTOP=r6;return r11}else{HEAP32[r3>>2]=r15;r11=r15+4|0;STACKTOP=r6;return r11}}function __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_EC2ERKS8_($this,$0){var $__size__i44_i_i=$0;if((HEAP8[$__size__i44_i_i]&1)==0){var $2=$this;HEAP32[$2>>2]=HEAP32[$__size__i44_i_i>>2];HEAP32[$2+4>>2]=HEAP32[$__size__i44_i_i+4>>2];HEAP32[$2+8>>2]=HEAP32[$__size__i44_i_i+8>>2]}else{var $3=HEAP32[$0+8>>2];var $4=HEAP32[$0+4>>2];if($4>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if($4>>>0<11){HEAP8[$this]=$4<<1;var $__p_0_i_i_i=$this+1|0}else{var $and_i_i_i_i_i=$4+16&-16;var $call_i_i_i_i_i=__Znwj($and_i_i_i_i_i);HEAP32[$this+8>>2]=$call_i_i_i_i_i;HEAP32[$this>>2]=$and_i_i_i_i_i|1;HEAP32[$this+4>>2]=$4;var $__p_0_i_i_i=$call_i_i_i_i_i}var $__p_0_i_i_i;_memcpy($__p_0_i_i_i,$3,$4)|0;HEAP8[$__p_0_i_i_i+$4|0]=0}var $second=$this+12|0;var $__size__i44_i_i2=$0+12|0;if((HEAP8[$__size__i44_i_i2]&1)==0){var $6=$second;HEAP32[$6>>2]=HEAP32[$__size__i44_i_i2>>2];HEAP32[$6+4>>2]=HEAP32[$__size__i44_i_i2+4>>2];HEAP32[$6+8>>2]=HEAP32[$__size__i44_i_i2+8>>2];return}var $7=HEAP32[$0+20>>2];var $8=HEAP32[$0+16>>2];do{if($8>>>0>4294967279){((function(){try{__THREW__=0;return __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}else{if($8>>>0<11){HEAP8[$second]=$8<<1;var $__p_0_i_i_i27=$second+1|0}else{var $and_i_i_i_i_i20=$8+16&-16;var $call_i_i_i_i_i2130=(function(){try{__THREW__=0;return __Znwj($and_i_i_i_i_i20)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(__THREW__){break}HEAP32[$this+20>>2]=$call_i_i_i_i_i2130;HEAP32[$second>>2]=$and_i_i_i_i_i20|1;HEAP32[$this+16>>2]=$8;var $__p_0_i_i_i27=$call_i_i_i_i_i2130}var $__p_0_i_i_i27;_memcpy($__p_0_i_i_i27,$7,$8)|0;HEAP8[$__p_0_i_i_i27+$8|0]=0;return}}while(0);var $9$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$this]&1)==0){___resumeException($9$0)}__ZdlPv(HEAP32[$this+8>>2]);___resumeException($9$0)}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKS8_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24;r4=0;r5=r1+4|0;r1=r5|0;r6=HEAP32[r1>>2];if((r6|0)==0){HEAP32[r2>>2]=r5;r7=r1;return r7}r1=HEAP8[r3];r5=r1&255;r8=r5>>>1;r9=(r1&1)==0;r1=r3+1|0;r10=r3+8|0;r11=r3+4|0;if((r5&1|0)==0){r5=r6;while(1){r3=r5+16|0;r12=HEAP8[r3];r13=r12&255;if((r13&1|0)==0){r14=r13>>>1}else{r14=HEAP32[r5+20>>2]}if(r9){r15=r1}else{r15=HEAP32[r10>>2]}if((r12&1)==0){r16=r3+1|0}else{r16=HEAP32[r5+24>>2]}r3=_memcmp(r15,r16,r14>>>0<r8>>>0?r14:r8);if((r3|0)==0){if(r8>>>0<r14>>>0){r4=16}else{r4=15}}else{if((r3|0)<0){r4=16}else{r4=15}}if(r4==16){r4=0;r3=r5|0;r12=HEAP32[r3>>2];if((r12|0)==0){r17=r5;r18=r3;r4=38;break}else{r5=r12;continue}}else if(r4==15){r4=0;r12=r5+4|0;r3=HEAP32[r12>>2];if((r3|0)==0){r19=r5;r20=r12;r4=40;break}else{r5=r3;continue}}}}else{if(r9){r9=r6;while(1){r5=r9+16|0;r14=HEAP32[r11>>2];r8=HEAP8[r5];r16=r8&255;if((r16&1|0)==0){r21=r16>>>1}else{r21=HEAP32[r9+20>>2]}if((r8&1)==0){r22=r5+1|0}else{r22=HEAP32[r9+24>>2]}r5=_memcmp(r1,r22,r21>>>0<r14>>>0?r21:r14);if((r5|0)==0){if(r14>>>0<r21>>>0){r4=27}else{r4=26}}else{if((r5|0)<0){r4=27}else{r4=26}}if(r4==26){r4=0;r5=r9+4|0;r14=HEAP32[r5>>2];if((r14|0)==0){r19=r9;r20=r5;r4=40;break}else{r9=r14;continue}}else if(r4==27){r4=0;r14=r9|0;r5=HEAP32[r14>>2];if((r5|0)==0){r17=r9;r18=r14;r4=38;break}else{r9=r5;continue}}}}else{r9=r6;while(1){r6=r9+16|0;r21=HEAP32[r11>>2];r22=HEAP8[r6];r1=r22&255;if((r1&1|0)==0){r23=r1>>>1}else{r23=HEAP32[r9+20>>2]}if((r22&1)==0){r24=r6+1|0}else{r24=HEAP32[r9+24>>2]}r6=_memcmp(HEAP32[r10>>2],r24,r23>>>0<r21>>>0?r23:r21);if((r6|0)==0){if(r21>>>0<r23>>>0){r4=37}else{r4=39}}else{if((r6|0)<0){r4=37}else{r4=39}}if(r4==37){r4=0;r6=r9|0;r21=HEAP32[r6>>2];if((r21|0)==0){r17=r9;r18=r6;r4=38;break}else{r9=r21;continue}}else if(r4==39){r4=0;r21=r9+4|0;r6=HEAP32[r21>>2];if((r6|0)==0){r19=r9;r20=r21;r4=40;break}else{r9=r6;continue}}}}}if(r4==38){HEAP32[r2>>2]=r17;r7=r18;return r7}else if(r4==40){HEAP32[r2>>2]=r19;r7=r20;return r7}}function __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv($this){var $exception=___cxa_allocate_exception(8);var $0=$exception;((function(){try{__THREW__=0;return __ZNSt11logic_errorC2EPKc($0,__str739|0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[$exception>>2]=__ZTVSt12length_error+8;___cxa_throw($exception,__ZTISt12length_error,FUNCTION_TABLE_OFFSET+60)}else{var $2$0=___cxa_find_matching_catch(-1,-1);___cxa_free_exception($exception);___resumeException($2$0)}}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($this){var $__os_=$this+4|0;var $ref=HEAP32[$__os_>>2];var $vbase_offset=HEAP32[HEAP32[$ref>>2]-12>>2];var $2=$ref;if((HEAP32[$2+($vbase_offset+24)>>2]|0)==0){return}if((HEAP32[$2+($vbase_offset+16)>>2]|0)!=0){return}if((HEAP32[$2+($vbase_offset+4)>>2]&8192|0)==0){return}if(__ZSt18uncaught_exceptionv()){return}var $ref21=HEAP32[$__os_>>2];var $13=HEAP32[$ref21+(HEAP32[HEAP32[$ref21>>2]-12>>2]+24)>>2];var $14=$13;var $16=HEAP32[HEAP32[$13>>2]+24>>2];var $call_i49=(function(){try{__THREW__=0;return FUNCTION_TABLE[$16]($14)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();do{if(!__THREW__){if(($call_i49|0)!=-1){return}var $ref31=HEAP32[$__os_>>2];var $vbase_offset34=HEAP32[HEAP32[$ref31>>2]-12>>2];var $19=$ref31;var $20=$19+$vbase_offset34|0;var $or_i_i=HEAP32[$19+($vbase_offset34+16)>>2]|1;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($20,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}return}}while(0);var $23$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($23$0);___cxa_end_catch();return}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($this){var label=0;var sp=STACKTOP;STACKTOP=STACKTOP+8|0;var $__s=sp;var $0=$this;var $vbase_offset=HEAP32[HEAP32[$0>>2]-12>>2];var $2=$this;if((HEAP32[$2+($vbase_offset+24)>>2]|0)==0){STACKTOP=sp;return $this}var $__ok__i_i=$__s|0;HEAP8[$__ok__i_i]=0;HEAP32[$__s+4>>2]=$this;do{if((HEAP32[$2+($vbase_offset+16)>>2]|0)==0){var $9=HEAP32[$2+($vbase_offset+72)>>2];if(($9|0)!=0){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv($9)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=8;break}}HEAP8[$__ok__i_i]=1;var $12=HEAP32[$2+(HEAP32[HEAP32[$0>>2]-12>>2]+24)>>2];var $13=$12;var $15=HEAP32[HEAP32[$12>>2]+24>>2];var $call_i43=(function(){try{__THREW__=0;return FUNCTION_TABLE[$15]($13)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}})();if(!__THREW__){if(($call_i43|0)!=-1){label=10;break}var $vbase_offset18=HEAP32[HEAP32[$0>>2]-12>>2];var $17=$2+$vbase_offset18|0;var $or_i_i=HEAP32[$2+($vbase_offset18+16)>>2]|1;((function(){try{__THREW__=0;return __ZNSt3__18ios_base5clearEj($17,$or_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=10;break}}var $22$0=___cxa_find_matching_catch(-1,-1,0);var $23=$22$0;((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $exn_slot_0=$23;break}var $28$0=___cxa_find_matching_catch(-1,-1,0);var $28$1=tempRet0;__ZSt9terminatev()}else{label=10}}while(0);do{if(label==10){((function(){try{__THREW__=0;return __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev($__s)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){label=8;break}STACKTOP=sp;return $this}}while(0);if(label==8){var $20$0=___cxa_find_matching_catch(-1,-1,0);var $exn_slot_0=$20$0}var $exn_slot_0;___cxa_begin_catch($exn_slot_0);var $26=$2+HEAP32[HEAP32[$0>>2]-12>>2]|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv($26)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___cxa_end_catch();STACKTOP=sp;return $this}var $27$0=___cxa_find_matching_catch(-1,-1);((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($27$0)}else{var $28$0=___cxa_find_matching_catch(-1,-1,0);var $28$1=tempRet0;__ZSt9terminatev()}}function __ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){HEAP32[$this>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;HEAP32[$this+56>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $2=$this+4|0;HEAP32[$2>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+36|0]&1)!=0){__ZdlPv(HEAP32[$this+44>>2])}HEAP32[$2>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i_i_i=$this+8|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $6$0=___cxa_find_matching_catch(-1,-1);var $6$1=tempRet0;var $7=$this+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($7)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body$1=$6$1;var $eh_lpad_body$0=$6$0;var $eh_lpad_body$0;var $eh_lpad_body$1;var $11=$this;__ZdlPv($11);___resumeException($eh_lpad_body$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $5=$this+56|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($5)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}var $10$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body$1=tempRet0;var $eh_lpad_body$0=$10$0;var $eh_lpad_body$0;var $eh_lpad_body$1;var $11=$this;__ZdlPv($11);___resumeException($eh_lpad_body$0)}function __ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];HEAP32[$0+$5>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $8=$0+($5+56)|0;HEAP32[$8>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $11=$0+($5+4)|0;HEAP32[$11>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+($5+36)|0]&1)!=0){__ZdlPv(HEAP32[$0+($5+44)>>2])}HEAP32[$11>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $15=$0+($5+8)|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($15)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZNSt3__18ios_baseD2Ev($8);return}var $16$0=___cxa_find_matching_catch(-1,-1);var $17=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($17)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){___resumeException($16$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];var $6=$0+$5|0;HEAP32[$6>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+12;var $8=$0+($5+56)|0;HEAP32[$8>>2]=__ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE+32;var $11=$0+($5+4)|0;HEAP32[$11>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$0+($5+36)|0]&1)!=0){__ZdlPv(HEAP32[$0+($5+44)>>2])}HEAP32[$11>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $15=$0+($5+8)|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($15)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){var $17$0=___cxa_find_matching_catch(-1,-1);var $17$1=tempRet0;var $18=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($18)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $eh_lpad_body_i$1=$17$1;var $eh_lpad_body_i$0=$17$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;__ZdlPv($6);___resumeException($eh_lpad_body_i$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}var $16=$8;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($16)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($6);return}var $20$0=___cxa_find_matching_catch(-1,-1);var $eh_lpad_body_i$1=tempRet0;var $eh_lpad_body_i$0=$20$0;var $eh_lpad_body_i$0;var $eh_lpad_body_i$1;__ZdlPv($6);___resumeException($eh_lpad_body_i$0)}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev(r1){__ZNSt3__18ios_baseD2Ev(r1+4|0);return}function __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev($this){var $0=$this+4|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $2$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($2$0)}}function __ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev(r1){__ZNSt3__18ios_baseD2Ev(r1+(HEAP32[HEAP32[r1>>2]-12>>2]+4)|0);return}function __ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev($this){var $0=$this;var $5=HEAP32[HEAP32[$this>>2]-12>>2];var $6=$0+$5|0;var $8=$0+($5+4)|0;((function(){try{__THREW__=0;return __ZNSt3__18ios_baseD2Ev($8)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($6);return}else{var $9$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($6);___resumeException($9$0)}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(r1){var r2;r2=r1|0;HEAP32[r2>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[r1+32|0]&1)!=0){__ZdlPv(HEAP32[r1+40>>2])}HEAP32[r2>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;__ZNSt3__16localeD1Ev(r1+4|0);return}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev($this){var $0=$this|0;HEAP32[$0>>2]=__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE+8;if((HEAP8[$this+32|0]&1)!=0){__ZdlPv(HEAP32[$this+40>>2])}HEAP32[$0>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i_i=$this+4|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $4$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($4$0)}}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE(r1,r2){return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci(r1,r2,r3){return r1}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj(r1,r2,r3,r4,r5,r6){var r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r7=0;r8=r2+44|0;r9=HEAP32[r8>>2];r10=r2+24|0;r11=HEAP32[r10>>2];if(r9>>>0<r11>>>0){HEAP32[r8>>2]=r11;r12=r11}else{r12=r9}r9=r6&24;do{if((r9|0)==24){if((r5|0)==2){r7=11;break}else if((r5|0)==0){r13=0;r14=0;break}else if((r5|0)!=1){r7=15;break}r8=r1;HEAP32[r8>>2]=0;HEAP32[r8+4>>2]=0;r8=r1+8|0;HEAP32[r8>>2]=-1;HEAP32[r8+4>>2]=-1;return}else if((r9|0)==0){r8=r1;HEAP32[r8>>2]=0;HEAP32[r8+4>>2]=0;r8=r1+8|0;HEAP32[r8>>2]=-1;HEAP32[r8+4>>2]=-1;return}else{if((r5|0)==2){r7=11;break}else if((r5|0)==0){r13=0;r14=0;break}else if((r5|0)!=1){r7=15;break}if((r6&8|0)==0){r8=r11-HEAP32[r2+20>>2]|0;r13=(r8|0)<0|0?-1:0;r14=r8;break}else{r8=HEAP32[r2+12>>2]-HEAP32[r2+8>>2]|0;r13=(r8|0)<0|0?-1:0;r14=r8;break}}}while(0);if(r7==15){r5=r1;HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=0;r5=r1+8|0;HEAP32[r5>>2]=-1;HEAP32[r5+4>>2]=-1;return}if(r7==11){r7=r2+32|0;if((HEAP8[r7]&1)==0){r15=r7+1|0}else{r15=HEAP32[r2+40>>2]}r7=r12-r15|0;r13=(r7|0)<0|0?-1:0;r14=r7}r7=_i64Add(r14,r13,r3,r4);r4=tempRet0;r3=0;do{if(!((r4|0)<(r3|0)|(r4|0)==(r3|0)&r7>>>0<0>>>0)){r13=r2+32|0;if((HEAP8[r13]&1)==0){r16=r13+1|0}else{r16=HEAP32[r2+40>>2]}r13=r12-r16|0;r14=(r13|0)<0|0?-1:0;if((r14|0)<(r4|0)|(r14|0)==(r4|0)&r13>>>0<r7>>>0){break}r13=r6&8;do{if(!((r7|0)==0&(r4|0)==0)){do{if((r13|0)!=0){if((HEAP32[r2+12>>2]|0)!=0){break}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=-1;HEAP32[r14+4>>2]=-1;return}}while(0);if(!((r6&16|0)!=0&(r11|0)==0)){break}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=-1;HEAP32[r14+4>>2]=-1;return}}while(0);if((r13|0)!=0){HEAP32[r2+12>>2]=HEAP32[r2+8>>2]+r7;HEAP32[r2+16>>2]=r12}if((r6&16|0)!=0){HEAP32[r10>>2]=HEAP32[r2+20>>2]+r7}r14=r1;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;r14=r1+8|0;HEAP32[r14>>2]=r7;HEAP32[r14+4>>2]=r4;return}}while(0);r4=r1;HEAP32[r4>>2]=0;HEAP32[r4+4>>2]=0;r4=r1+8|0;HEAP32[r4>>2]=-1;HEAP32[r4+4>>2]=-1;return}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj(r1,r2,r3,r4){var r5,r6;r5=STACKTOP;r6=r3;r3=STACKTOP;STACKTOP=STACKTOP+16|0;HEAP32[r3>>2]=HEAP32[r6>>2];HEAP32[r3+4>>2]=HEAP32[r6+4>>2];HEAP32[r3+8>>2]=HEAP32[r6+8>>2];HEAP32[r3+12>>2]=HEAP32[r6+12>>2];r6=r3+8|0;FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+16>>2]](r1,r2,HEAP32[r6>>2],HEAP32[r6+4>>2],0,r4);STACKTOP=r5;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv(r1){return 0}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv(r1){return 0}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=0;r5=r1;if((r3|0)<=0){r6=0;return r6}r7=r1+12|0;r8=r1+16|0;r9=r2;r2=0;while(1){r10=HEAP32[r7>>2];if(r10>>>0<HEAP32[r8>>2]>>>0){HEAP32[r7>>2]=r10+1;r11=HEAP8[r10]}else{r10=FUNCTION_TABLE[HEAP32[HEAP32[r5>>2]+40>>2]](r1);if((r10|0)==-1){r6=r2;r4=9;break}r11=r10&255}HEAP8[r9]=r11;r10=r2+1|0;if((r10|0)<(r3|0)){r9=r9+1|0;r2=r10}else{r6=r10;r4=10;break}}if(r4==9){return r6}else if(r4==10){return r6}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv(r1){var r2,r3,r4,r5,r6,r7;r2=r1+44|0;r3=HEAP32[r2>>2];r4=HEAP32[r1+24>>2];if(r3>>>0<r4>>>0){HEAP32[r2>>2]=r4;r5=r4}else{r5=r3}if((HEAP32[r1+48>>2]&8|0)==0){r6=-1;return r6}r3=r1+16|0;r4=HEAP32[r3>>2];r2=HEAP32[r1+12>>2];if(r4>>>0<r5>>>0){HEAP32[r3>>2]=r5;r7=r5}else{r7=r4}if(r2>>>0>=r7>>>0){r6=-1;return r6}r6=HEAPU8[r2];return r6}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv(r1){var r2,r3;if((FUNCTION_TABLE[HEAP32[HEAP32[r1>>2]+36>>2]](r1)|0)==-1){r2=-1;return r2}r3=r1+12|0;r1=HEAP32[r3>>2];HEAP32[r3>>2]=r1+1;r2=HEAPU8[r1];return r2}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r3=r1+44|0;r4=HEAP32[r3>>2];r5=HEAP32[r1+24>>2];if(r4>>>0<r5>>>0){HEAP32[r3>>2]=r5;r6=r5}else{r6=r4}r4=r1+8|0;r5=HEAP32[r4>>2];r3=r1+12|0;r7=HEAP32[r3>>2];if(r5>>>0>=r7>>>0){r8=-1;return r8}if((r2|0)==-1){HEAP32[r4>>2]=r5;HEAP32[r3>>2]=r7-1;HEAP32[r1+16>>2]=r6;r8=0;return r8}r9=r7-1|0;do{if((HEAP32[r1+48>>2]&16|0)==0){if((r2<<24>>24|0)==(HEAP8[r9]|0)){break}else{r8=-1}return r8}}while(0);HEAP32[r4>>2]=r5;HEAP32[r3>>2]=r9;HEAP32[r1+16>>2]=r6;HEAP8[r9]=r2;r8=r2;return r8}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=0;r5=r1;if((r3|0)<=0){r6=0;return r6}r7=r1+24|0;r8=r1+28|0;r9=0;r10=r2;while(1){r2=HEAP32[r7>>2];if(r2>>>0<HEAP32[r8>>2]>>>0){r11=HEAP8[r10];HEAP32[r7>>2]=r2+1;HEAP8[r2]=r11}else{if((FUNCTION_TABLE[HEAP32[HEAP32[r5>>2]+52>>2]](r1,HEAPU8[r10])|0)==-1){r6=r9;r4=10;break}}r11=r9+1|0;if((r11|0)<(r3|0)){r9=r11;r10=r10+1|0}else{r6=r11;r4=8;break}}if(r4==10){return r6}else if(r4==8){return r6}}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi($this,$__c){var label=0;if(($__c|0)==-1){var $retval_0=0;var $retval_0;return $retval_0}var $0=$this|0;var $__ninp__i141=$this+12|0;var $__binp__i163=$this+8|0;var $sub_ptr_sub=HEAP32[$__ninp__i141>>2]-HEAP32[$__binp__i163>>2]|0;var $__nout__i178=$this+24|0;var $3=HEAP32[$__nout__i178>>2];var $__eout__i175=$this+28|0;var $4=HEAP32[$__eout__i175>>2];L4:do{if(($3|0)==($4|0)){var $__mode_=$this+48|0;if((HEAP32[$__mode_>>2]&16|0)==0){var $retval_0=-1;var $retval_0;return $retval_0}var $__bout__i169=$this+20|0;var $sub_ptr_rhs_cast14=HEAP32[$__bout__i169>>2];var $sub_ptr_sub15=$3-$sub_ptr_rhs_cast14|0;var $__hm_=$this+44|0;var $sub_ptr_sub20=HEAP32[$__hm_>>2]-$sub_ptr_rhs_cast14|0;var $__str_=$this+32|0;var $__s_i_i=$__str_;var $__size__i_i=$__str_;var $8=HEAP8[$__size__i_i];if(($8&1)==0){var $__sz_0_i=($8&255)>>>1;var $__cap_0_i=10}else{var $__sz_0_i=HEAP32[$this+36>>2];var $__cap_0_i=(HEAP32[$__str_>>2]&-2)-1|0}var $__cap_0_i;var $__sz_0_i;do{if(($__sz_0_i|0)==($__cap_0_i|0)){((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($__str_,$__cap_0_i,1,$__cap_0_i,$__cap_0_i,0,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}var $__is_short_0_off0_in_in_i=HEAP8[$__size__i_i];label=11}else{var $__is_short_0_off0_in_in_i=$8;label=11}}while(0);L16:do{if(label==11){var $__is_short_0_off0_in_in_i;if(($__is_short_0_off0_in_in_i&1)==0){HEAP8[$__size__i_i]=($__sz_0_i<<1)+2;var $arrayidx_i_pn_i=$__s_i_i+1|0;var $__p_0_sum_pre_phi_i=$__sz_0_i+1|0}else{var $12=HEAP32[$this+40>>2];var $add16_i=$__sz_0_i+1|0;HEAP32[$this+36>>2]=$add16_i;var $arrayidx_i_pn_i=$12;var $__p_0_sum_pre_phi_i=$add16_i}var $__p_0_sum_pre_phi_i;var $arrayidx_i_pn_i;HEAP8[$arrayidx_i_pn_i+$__sz_0_i|0]=0;HEAP8[$arrayidx_i_pn_i+$__p_0_sum_pre_phi_i|0]=0;var $13=HEAP8[$__size__i_i];if(($13&1)==0){var $cond_i160=10;var $16=$13}else{var $14=HEAP32[$__str_>>2];var $cond_i160=($14&-2)-1|0;var $16=$14&255}var $16;var $cond_i160;var $conv_i_i_i=$16&255;if(($conv_i_i_i&1|0)==0){var $cond_i_i25=$conv_i_i_i>>>1}else{var $cond_i_i25=HEAP32[$this+36>>2]}var $cond_i_i25;do{if($cond_i_i25>>>0<$cond_i160>>>0){var $sub_i27=$cond_i160-$cond_i_i25|0;((function(){try{__THREW__=0;return __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($__str_,$sub_i27,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break L16}}else{if(($16&1)==0){HEAP8[$cond_i160+($__s_i_i+1)|0]=0;HEAP8[$__size__i_i]=$cond_i160<<1;break}else{HEAP8[HEAP32[$this+40>>2]+$cond_i160|0]=0;HEAP32[$this+36>>2]=$cond_i160;break}}}while(0);var $19=HEAP8[$__size__i_i];if(($19&1)==0){var $cond_i_i134=$__s_i_i+1|0}else{var $cond_i_i134=HEAP32[$this+40>>2]}var $cond_i_i134;var $conv_i_i87=$19&255;if(($conv_i_i87&1|0)==0){var $cond_i90=$conv_i_i87>>>1}else{var $cond_i90=HEAP32[$this+36>>2]}var $cond_i90;var $add_ptr=$cond_i_i134+$cond_i90|0;HEAP32[$__bout__i169>>2]=$cond_i_i134;HEAP32[$__eout__i175>>2]=$add_ptr;var $add_ptr_i=$cond_i_i134+$sub_ptr_sub15|0;HEAP32[$__nout__i178>>2]=$add_ptr_i;var $add_ptr34=$cond_i_i134+$sub_ptr_sub20|0;HEAP32[$__hm_>>2]=$add_ptr34;var $27=$add_ptr_i;var $26=$add_ptr;var $25=$add_ptr34;var $__mode_43_pre_phi=$__mode_;break L4}}while(0);var $22$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($22$0);___cxa_end_catch();var $retval_0=-1;var $retval_0;return $retval_0}else{var $27=$3;var $26=$4;var $25=HEAP32[$this+44>>2];var $__mode_43_pre_phi=$this+48|0}}while(0);var $__mode_43_pre_phi;var $25;var $26;var $27;var $add_ptr39=$27+1|0;var $_sroa_speculated=$add_ptr39>>>0<$25>>>0?$25:$add_ptr39;HEAP32[$this+44>>2]=$_sroa_speculated;if((HEAP32[$__mode_43_pre_phi>>2]&8|0)!=0){var $29=$this+32|0;if((HEAP8[$29]&1)==0){var $cond_i_i=$29+1|0}else{var $cond_i_i=HEAP32[$this+40>>2]}var $cond_i_i;HEAP32[$__binp__i163>>2]=$cond_i_i;HEAP32[$__ninp__i141>>2]=$cond_i_i+$sub_ptr_sub;HEAP32[$this+16>>2]=$_sroa_speculated}if(($27|0)==($26|0)){var $retval_0=FUNCTION_TABLE[HEAP32[HEAP32[$this>>2]+52>>2]]($0,$__c&255);var $retval_0;return $retval_0}else{HEAP32[$__nout__i178>>2]=$add_ptr39;HEAP8[$27]=$__c;var $retval_0=$__c&255;var $retval_0;return $retval_0}}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10;if((r2|0)==0){return r1}r4=r1;r5=HEAP8[r4];if((r5&1)==0){r6=10;r7=r5}else{r5=HEAP32[r1>>2];r6=(r5&-2)-1|0;r7=r5&255}r5=r7&255;if((r5&1|0)==0){r8=r5>>>1}else{r8=HEAP32[r1+4>>2]}if((r6-r8|0)>>>0<r2>>>0){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(r1,r6,r2-r6+r8|0,r8,r8,0,0);r9=HEAP8[r4]}else{r9=r7}if((r9&1)==0){r10=r1+1|0}else{r10=HEAP32[r1+8>>2]}_memset(r10+r8|0,r3,r2)|0;r3=r8+r2|0;if((HEAP8[r4]&1)==0){HEAP8[r4]=r3<<1}else{HEAP32[r1+4>>2]=r3}HEAP8[r10+r3|0]=0;return r1}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj(r1,r2,r3,r4,r5,r6,r7){var r8,r9,r10,r11,r12,r13,r14,r15;if((-17-r2|0)>>>0<r3>>>0){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if((HEAP8[r1]&1)==0){r8=r1+1|0}else{r8=HEAP32[r1+8>>2]}do{if(r2>>>0<2147483623){r9=r3+r2|0;r10=r2<<1;r11=r9>>>0<r10>>>0?r10:r9;if(r11>>>0<11){r12=11;break}r12=r11+16&-16}else{r12=-17}}while(0);r3=__Znwj(r12);if((r5|0)!=0){_memcpy(r3,r8,r5)|0}r11=r4-r6|0;if((r11|0)!=(r5|0)){_memcpy(r3+(r7+r5)|0,r8+(r6+r5)|0,r11-r5|0)|0}if((r2|0)==10){r13=r1+8|0;HEAP32[r13>>2]=r3;r14=r12|1;r15=r1|0;HEAP32[r15>>2]=r14;return}__ZdlPv(r8);r13=r1+8|0;HEAP32[r13>>2]=r3;r14=r12|1;r15=r1|0;HEAP32[r15>>2]=r14;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED1Ev(r1){HEAP32[r1>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;__ZNSt3__16localeD1Ev(r1+4|0);return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED0Ev($this){HEAP32[$this>>2]=__ZTVNSt3__115basic_streambufIcNS_11char_traitsIcEEEE+8;var $__loc__i_i=$this+4|0;((function(){try{__THREW__=0;return __ZNSt3__16localeD1Ev($__loc__i_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $2$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($2$0)}}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj(r1,r2,r3,r4,r5,r6){r6=r1;HEAP32[r6>>2]=0;HEAP32[r6+4>>2]=0;r6=r1+8|0;HEAP32[r6>>2]=-1;HEAP32[r6+4>>2]=-1;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj(r1,r2,r3,r4){r4=STACKTOP;r2=r3;r3=STACKTOP;STACKTOP=STACKTOP+16|0;HEAP32[r3>>2]=HEAP32[r2>>2];HEAP32[r3+4>>2]=HEAP32[r2+4>>2];HEAP32[r3+8>>2]=HEAP32[r2+8>>2];HEAP32[r3+12>>2]=HEAP32[r2+12>>2];r2=r1;HEAP32[r2>>2]=0;HEAP32[r2+4>>2]=0;r2=r1+8|0;HEAP32[r2>>2]=-1;HEAP32[r2+4>>2]=-1;STACKTOP=r4;return}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9underflowEv(r1){return-1}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9pbackfailEi(r1,r2){return-1}function __ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE8overflowEi(r1,r2){return-1}function __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23;r3=r1+32|0;do{if((r3|0)!=(r2|0)){r4=HEAP8[r2];if((r4&1)==0){r5=r2+1|0}else{r5=HEAP32[r2+8>>2]}r6=r4&255;if((r6&1|0)==0){r7=r6>>>1}else{r7=HEAP32[r2+4>>2]}r6=r3;r4=r3;r8=HEAP8[r4];if((r8&1)==0){r9=10;r10=r8}else{r8=HEAP32[r3>>2];r9=(r8&-2)-1|0;r10=r8&255}if(r9>>>0<r7>>>0){r8=r10&255;if((r8&1|0)==0){r11=r8>>>1}else{r11=HEAP32[r1+36>>2]}__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r3,r9,r7-r9|0,r11,0,r11,r7,r5);break}if((r10&1)==0){r12=r6+1|0}else{r12=HEAP32[r1+40>>2]}_memmove(r12,r5,r7,1,0);HEAP8[r12+r7|0]=0;if((HEAP8[r4]&1)==0){HEAP8[r4]=r7<<1;break}else{HEAP32[r1+36>>2]=r7;break}}}while(0);r7=r1+44|0;HEAP32[r7>>2]=0;r12=r1+48|0;r5=HEAP32[r12>>2];if((r5&8|0)!=0){r10=r3;r11=HEAP8[r3];r9=(r11&1)==0;if(r9){r13=r10+1|0}else{r13=HEAP32[r1+40>>2]}r2=r11&255;if((r2&1|0)==0){r14=r2>>>1}else{r14=HEAP32[r1+36>>2]}r2=r13+r14|0;HEAP32[r7>>2]=r2;if(r9){r15=r10+1|0;r16=r10+1|0}else{r10=HEAP32[r1+40>>2];r15=r10;r16=r10}HEAP32[r1+8>>2]=r16;HEAP32[r1+12>>2]=r15;HEAP32[r1+16>>2]=r2}if((r5&16|0)==0){return}r5=r3;r2=r3;r15=HEAP8[r2];r16=r15&255;if((r16&1|0)==0){r17=r16>>>1}else{r17=HEAP32[r1+36>>2]}if((r15&1)==0){HEAP32[r7>>2]=r17+(r5+1);r18=10;r19=r15}else{HEAP32[r7>>2]=HEAP32[r1+40>>2]+r17;r7=HEAP32[r3>>2];r18=(r7&-2)-1|0;r19=r7&255}r7=r19&255;if((r7&1|0)==0){r20=r7>>>1}else{r20=HEAP32[r1+36>>2]}do{if(r20>>>0<r18>>>0){__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc(r3,r18-r20|0,0)}else{if((r19&1)==0){HEAP8[r18+(r5+1)|0]=0;HEAP8[r2]=r18<<1;break}else{HEAP8[HEAP32[r1+40>>2]+r18|0]=0;HEAP32[r1+36>>2]=r18;break}}}while(0);r18=HEAP8[r2];if((r18&1)==0){r21=r5+1|0;r22=r5+1|0}else{r5=HEAP32[r1+40>>2];r21=r5;r22=r5}r5=r18&255;if((r5&1|0)==0){r23=r5>>>1}else{r23=HEAP32[r1+36>>2]}r5=r1+24|0;HEAP32[r5>>2]=r22;HEAP32[r1+20>>2]=r22;HEAP32[r1+28>>2]=r21+r23;if((HEAP32[r12>>2]&3|0)==0){return}HEAP32[r5>>2]=r22+r17;return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r2,r3,r4,r5,r6,r7,r8){var r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;if((-18-r2|0)>>>0<r3>>>0){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if((HEAP8[r1]&1)==0){r9=r1+1|0}else{r9=HEAP32[r1+8>>2]}do{if(r2>>>0<2147483623){r10=r3+r2|0;r11=r2<<1;r12=r10>>>0<r11>>>0?r11:r10;if(r12>>>0<11){r13=11;break}r13=r12+16&-16}else{r13=-17}}while(0);r3=__Znwj(r13);if((r5|0)!=0){_memcpy(r3,r9,r5)|0}if((r7|0)!=0){_memcpy(r3+r5|0,r8,r7)|0}r8=r4-r6|0;if((r8|0)!=(r5|0)){_memcpy(r3+(r7+r5)|0,r9+(r6+r5)|0,r8-r5|0)|0}if((r2|0)==10){r14=r1+8|0;HEAP32[r14>>2]=r3;r15=r13|1;r16=r1|0;HEAP32[r16>>2]=r15;r17=r8+r7|0;r18=r1+4|0;HEAP32[r18>>2]=r17;r19=r3+r17|0;HEAP8[r19]=0;return}__ZdlPv(r9);r14=r1+8|0;HEAP32[r14>>2]=r3;r15=r13|1;r16=r1|0;HEAP32[r16>>2]=r15;r17=r8+r7|0;r18=r1+4|0;HEAP32[r18>>2]=r17;r19=r3+r17|0;HEAP8[r19]=0;return}function __ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE(r1,r2){if((r2|0)==0){return}else{__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE(r1,HEAP32[r2>>2]);__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE(r1,HEAP32[r2+4>>2]);__ZdlPv(r2);return}}function __ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE(r1,r2){if((r2|0)==0){return}__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE(r1,HEAP32[r2>>2]);__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE(r1,HEAP32[r2+4>>2]);if((HEAP8[r2+20|0]&1)!=0){__ZdlPv(HEAP32[r2+28>>2])}__ZdlPv(r2);return}function __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(r1,r2){if((r2|0)==0){return}__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(r1,HEAP32[r2>>2]);__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(r1,HEAP32[r2+4>>2]);if((HEAP8[r2+28|0]&1)!=0){__ZdlPv(HEAP32[r2+36>>2])}if((HEAP8[r2+16|0]&1)!=0){__ZdlPv(HEAP32[r2+24>>2])}__ZdlPv(r2);return}function __ZN3OIS8JoyStickC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11;r6=r1|0;HEAP32[r6>>2]=__ZTVN3OIS6ObjectE+8;r7=r1+4|0;r8=r2;if((HEAP8[r8]&1)==0){r9=r7;HEAP32[r9>>2]=HEAP32[r8>>2];HEAP32[r9+4>>2]=HEAP32[r8+4>>2];HEAP32[r9+8>>2]=HEAP32[r8+8>>2]}else{r8=HEAP32[r2+8>>2];r9=HEAP32[r2+4>>2];if(r9>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r9>>>0<11){HEAP8[r7]=r9<<1;r10=r7+1|0}else{r2=r9+16&-16;r11=__Znwj(r2);HEAP32[r1+12>>2]=r11;HEAP32[r7>>2]=r2|1;HEAP32[r1+8>>2]=r9;r10=r11}_memcpy(r10,r8,r9)|0;HEAP8[r10+r9|0]=0}HEAP32[r1+16>>2]=3;HEAP8[r1+20|0]=r3&1;HEAP32[r1+24>>2]=r4;HEAP32[r1+28>>2]=r5;HEAP32[r6>>2]=__ZTVN3OIS8JoyStickE+8;_memset(r1+32|0,0,32)|0;HEAP32[r1+64>>2]=4;HEAP32[r1+68>>2]=0;HEAP32[r1+72>>2]=4;HEAP32[r1+76>>2]=0;HEAP32[r1+80>>2]=4;HEAP32[r1+84>>2]=0;HEAP32[r1+88>>2]=4;HEAP32[r1+92>>2]=0;HEAP32[r1+96>>2]=3;HEAP32[r1+100>>2]=0;HEAP32[r1+104>>2]=0;HEAP32[r1+108>>2]=3;HEAP32[r1+112>>2]=0;HEAP32[r1+116>>2]=0;HEAP32[r1+120>>2]=3;HEAP32[r1+124>>2]=0;HEAP32[r1+128>>2]=0;HEAP32[r1+132>>2]=3;r6=r1+136|0;HEAP32[r6>>2]=0;HEAP32[r6+4>>2]=0;HEAP32[r6+8>>2]=0;HEAP32[r6+12>>2]=0;HEAP32[r6+16>>2]=0;__ZN3OIS13JoyStickState5clearEv(r1+40|0);HEAP32[r1+156>>2]=0;HEAPF32[r1+160>>2]=2.2799999713897705;return}function __ZNK3OIS8JoyStick21getNumberOfComponentsENS_13ComponentTypeE(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26;r3=0;switch(r2|0){case 2:{r4=r1+56|0;r5=HEAP32[r4>>2];r6=r1+52|0;r7=HEAP32[r6>>2];r8=r5;r9=r7;r10=r8-r9|0;r11=r10>>4;r12=r11;return r12;break};case 4:{r13=r1+36|0;r14=HEAP32[r13>>2];r12=r14;return r12;break};case 5:{r15=r1+148|0;r16=HEAP32[r15>>2];r17=r1+144|0;r18=HEAP32[r17>>2];r19=r16;r20=r18;r21=r19-r20|0;r22=r21>>4;r12=r22;return r12;break};case 1:{r23=r1+44|0;r24=HEAP32[r23>>2];r12=r24;return r12;break};case 3:{r25=r1+32|0;r26=HEAP32[r25>>2];r12=r26;return r12;break};default:{r12=0;return r12}}}function __ZN3OIS8JoyStick21setVector3SensitivityEf(r1,r2){HEAPF32[r1+160>>2]=r2;return}function __ZNK3OIS8JoyStick21getVector3SensitivityEv(r1){return HEAPF32[r1+160>>2]}function __ZN3OIS8JoyStick16setEventCallbackEPNS_16JoyStickListenerE(r1,r2){HEAP32[r1+156>>2]=r2;return}function __ZNK3OIS8JoyStick16getEventCallbackEv(r1){return HEAP32[r1+156>>2]}function __ZN3OIS8JoyStickD1Ev($this){var $0=$this|0;HEAP32[$0>>2]=__ZTVN3OIS8JoyStickE+8;var $mState_i=$this+40|0;((function(){try{__THREW__=0;return __ZN3OIS13JoyStickStateD1Ev($mState_i)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){HEAP32[$0>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[$this+4|0]&1)==0){return}__ZdlPv(HEAP32[$this+12>>2]);return}else{var $3$0=___cxa_find_matching_catch(-1,-1);HEAP32[$0>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[$this+4|0]&1)==0){___resumeException($3$0)}__ZdlPv(HEAP32[$this+12>>2]);___resumeException($3$0)}}function __ZN3OIS8JoyStickD0Ev(r1){var r2,r3,r4,r5,r6,r7;r2=r1|0;HEAP32[r2>>2]=__ZTVN3OIS8JoyStickE+8;r3=HEAP32[r1+144>>2];r4=r3;if((r3|0)!=0){r5=r1+148|0;r6=HEAP32[r5>>2];if((r3|0)!=(r6|0)){HEAP32[r5>>2]=r6+(~((r6-16+ -r4|0)>>>4)<<4)}__ZdlPv(r3)}r3=HEAP32[r1+52>>2];r4=r3;if((r3|0)!=0){r6=r1+56|0;r5=HEAP32[r6>>2];if((r3|0)!=(r5|0)){HEAP32[r6>>2]=r5+(~((r5-16+ -r4|0)>>>4)<<4)}__ZdlPv(r3)}r3=HEAP32[r1+40>>2];if((r3|0)!=0){__ZdlPv(r3)}HEAP32[r2>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r7=r1;__ZdlPv(r7);return}__ZdlPv(HEAP32[r1+12>>2]);r7=r1;__ZdlPv(r7);return}function __ZNK3OIS6Object8bufferedEv(r1){return(HEAP8[r1+20|0]&1)!=0}function __ZNK3OIS6Object5getIDEv(r1){return HEAP32[r1+24>>2]}function __ZN3OIS13JoyStickStateD1Ev(r1){var r2,r3,r4,r5;r2=HEAP32[r1+104>>2];r3=r2;if((r2|0)!=0){r4=r1+108|0;r5=HEAP32[r4>>2];if((r2|0)!=(r5|0)){HEAP32[r4>>2]=r5+(~((r5-16+ -r3|0)>>>4)<<4)}__ZdlPv(r2)}r2=HEAP32[r1+12>>2];r3=r2;if((r2|0)!=0){r5=r1+16|0;r4=HEAP32[r5>>2];if((r2|0)!=(r4|0)){HEAP32[r5>>2]=r4+(~((r4-16+ -r3|0)>>>4)<<4)}__ZdlPv(r2)}r2=HEAP32[r1>>2];if((r2|0)==0){return}__ZdlPv(r2);return}function __ZN3OIS6ObjectD1Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS6ObjectD0Ev(r1){var r2;HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r2=r1;__ZdlPv(r2);return}__ZdlPv(HEAP32[r1+12>>2]);r2=r1;__ZdlPv(r2);return}function __ZN3OIS13JoyStickState5clearEv(r1){var r2,r3,r4,r5;r2=HEAP32[r1>>2];r3=HEAP32[r1+4>>2];r4=r2+(r3>>>5<<2)|0;r5=r3&31;r3=r2;L1:while(1){if((r3|0)==(r4|0)){r2=0;while(1){if((r2|0)==(r5|0)){break L1}HEAP32[r4>>2]=HEAP32[r4>>2]&~(1<<r2);if((r2|0)==31){break}else{r2=r2+1|0}}}else{r2=0;while(1){HEAP32[r3>>2]=HEAP32[r3>>2]&~(1<<r2);if((r2|0)==31){break}else{r2=r2+1|0}}}r3=r3+4|0}r3=HEAP32[r1+12>>2];r4=HEAP32[r1+16>>2];if((r3|0)!=(r4|0)){r5=r3;while(1){HEAP8[r5+12|0]=1;HEAP32[r5+8>>2]=0;HEAP32[r5+4>>2]=0;r3=r5+16|0;if((r3|0)==(r4|0)){break}else{r5=r3}}}r5=HEAP32[r1+104>>2];r4=HEAP32[r1+108>>2];if((r5|0)!=(r4|0)){r3=r5;while(1){HEAPF32[r3+12>>2]=0;HEAPF32[r3+8>>2]=0;HEAPF32[r3+4>>2]=0;r5=r3+16|0;if((r5|0)==(r4|0)){break}else{r3=r5}}}HEAP32[r1+28>>2]=0;HEAP32[r1+64>>2]=0;HEAP32[r1+60>>2]=0;HEAP32[r1+36>>2]=0;HEAP32[r1+76>>2]=0;HEAP32[r1+72>>2]=0;HEAP32[r1+44>>2]=0;HEAP32[r1+88>>2]=0;HEAP32[r1+84>>2]=0;HEAP32[r1+52>>2]=0;HEAP32[r1+100>>2]=0;HEAP32[r1+96>>2]=0;return}function __ZN3OIS8Keyboard18setTextTranslationENS0_19TextTranslationModeE(r1,r2){HEAP32[r1+40>>2]=r2;return}function __ZNK3OIS8Keyboard14isModifierDownENS0_8ModifierE(r1,r2){return(HEAP32[r1+32>>2]&r2|0)!=0}function __ZN3OIS8KeyboardD1Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS8KeyboardD0Ev(r1){var r2;HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r2=r1;__ZdlPv(r2);return}__ZdlPv(HEAP32[r1+12>>2]);r2=r1;__ZdlPv(r2);return}function __ZN3OIS8Keyboard16setEventCallbackEPNS_11KeyListenerE(r1,r2){HEAP32[r1+36>>2]=r2;return}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(r1){if((HEAP8[r1]&1)==0){return}__ZdlPv(HEAP32[r1+8>>2]);return}function __ZN3OIS19BrowserInputManagerC2Ev($this){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;var $__s2_i_i=$ref_tmp;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=10;var $arrayidx_i_i=$__s2_i_i+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str142|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str142+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str142+2|0];HEAP8[$arrayidx_i_i+3|0]=HEAP8[__str142+3|0];HEAP8[$arrayidx_i_i+4|0]=HEAP8[__str142+4|0];HEAP8[$__s2_i_i+6|0]=0;((function(){try{__THREW__=0;return __ZN3OIS12InputManagerC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE($0,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){if((HEAP8[$__size__i50_i]&1)==0){var $3=$this|0;HEAP32[$3>>2]=__ZTVN3OIS19BrowserInputManagerE+8;var $mGrabbed=$this+60|0;HEAP8[$mGrabbed]=0;STACKTOP=sp;return}__ZdlPv(HEAP32[$ref_tmp+8>>2]);var $3=$this|0;HEAP32[$3>>2]=__ZTVN3OIS19BrowserInputManagerE+8;var $mGrabbed=$this+60|0;HEAP8[$mGrabbed]=0;STACKTOP=sp;return}else{var $4$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i50_i]&1)==0){___resumeException($4$0)}__ZdlPv(HEAP32[$ref_tmp+8>>2]);___resumeException($4$0)}}function __ZN3OIS19BrowserInputManagerD0Ev($this){var $0=$this|0;((function(){try{__THREW__=0;return __ZN3OIS12InputManagerD2Ev($0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){__ZdlPv($this);return}else{var $2$0=___cxa_find_matching_catch(-1,-1);__ZdlPv($this);___resumeException($2$0)}}function __ZN3OIS19BrowserInputManagerD2Ev(r1){__ZN3OIS12InputManagerD2Ev(r1|0);return}function __ZN3OIS19BrowserInputManager11_initializeERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE(r1,r2){return}function __ZN3OIS19BrowserInputManager20_parseConfigSettingsERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE(r1,r2){return}function __ZN3OIS19BrowserInputManager17_enumerateDevicesEv(r1){return}function __ZN3OIS19BrowserInputManager12numJoySticksEv(r1){return 0}function __ZN3OIS19BrowserInputManager7numMiceEv(r1){return 1}function __ZN3OIS19BrowserInputManager12numKeyboardsEv(r1){return 1}function __ZN3OIS19BrowserInputManager17createInputObjectENS_4TypeEb($this,$iType,$bufferMode){var label=0;do{if(($iType|0)==1){var $call=__Znwj(328);var $0=$call;((function(){try{__THREW__=0;return __ZN3OIS15BrowserKeyboardC2Eb($0,$bufferMode)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $obj_0_in=$call;break}var $1$0=___cxa_find_matching_catch(-1,-1);var $3=tempRet0;__ZdlPv($call);var $ehselector_slot_0=$3;var $exn_slot_0=$1$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val18$0=$lpad_val$0;var $lpad_val18$1=$ehselector_slot_0;___resumeException($lpad_val18$0)}else if(($iType|0)==2){var $call3=__Znwj(100);var $4=$call3;((function(){try{__THREW__=0;return __ZN3OIS12BrowserMouseC2Eb($4,$bufferMode)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $obj_0_in=$call3;break}var $5$0=___cxa_find_matching_catch(-1,-1);var $7=tempRet0;__ZdlPv($call3);var $ehselector_slot_0=$7;var $exn_slot_0=$5$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val18$0=$lpad_val$0;var $lpad_val18$1=$ehselector_slot_0;___resumeException($lpad_val18$0)}else{var $exception=___cxa_allocate_exception(20);HEAP32[$exception>>2]=__ZTVN3OIS9ExceptionE+8;HEAP32[$exception+4>>2]=2;HEAP32[$exception+8>>2]=90;HEAP32[$exception+12>>2]=__str344;HEAP32[$exception+16>>2]=__str243;___cxa_throw($exception,__ZTIN3OIS9ExceptionE,FUNCTION_TABLE_OFFSET+12)}}while(0);var $obj_0_in;var $obj_0=$obj_0_in;var $13=$obj_0_in;var $14=HEAP32[HEAP32[$13>>2]+28>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$14]($obj_0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){return $obj_0}var $15$0=___cxa_find_matching_catch(-1,-1,0);___cxa_begin_catch($15$0);if(($obj_0_in|0)==0){label=10}else{var $18=HEAP32[HEAP32[$13>>2]+4>>2];((function(){try{__THREW__=0;return FUNCTION_TABLE[$18]($obj_0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){label=10}}do{if(label==10){((function(){try{__THREW__=0;return ___cxa_rethrow()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(__THREW__){break}}}while(0);var $19$0=___cxa_find_matching_catch(-1,-1);var $20=$19$0;var $21=tempRet0;((function(){try{__THREW__=0;return ___cxa_end_catch()}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){var $ehselector_slot_0=$21;var $exn_slot_0=$20;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val18$0=$lpad_val$0;var $lpad_val18$1=$ehselector_slot_0;___resumeException($lpad_val18$0)}else{___cxa_find_matching_catch(-1,-1,0);__ZSt9terminatev()}}function __ZN3OIS19BrowserInputManager18destroyInputObjectEPNS_6ObjectE(r1,r2){if((r2|0)==0){return}FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+4>>2]](r2);return}function __ZN3OIS19BrowserInputManager15inputSystemNameEv(r1){return __ZN3OIS19BrowserInputManager5iNameE}function __GLOBAL__I_a(){var r1;r1=__Znwj(32);HEAP32[__ZN3OIS19BrowserInputManager5iNameE+8>>2]=r1;HEAP32[__ZN3OIS19BrowserInputManager5iNameE>>2]=33;HEAP32[__ZN3OIS19BrowserInputManager5iNameE+4>>2]=21;_memcpy(r1,__str41|0,21)|0;HEAP8[r1+21|0]=0;_atexit(FUNCTION_TABLE_OFFSET+186,__ZN3OIS19BrowserInputManager5iNameE,___dso_handle);return}function __ZN3OIS15BrowserKeyboardC2Eb(r1,r2){var r3,r4;r3=r1|0;HEAP32[r3>>2]=__ZTVN3OIS6ObjectE+8;HEAP8[r1+4|0]=16;r4=r1+5|0;HEAP8[r4]=HEAP8[__str47|0];HEAP8[r4+1|0]=HEAP8[__str47+1|0];HEAP8[r4+2|0]=HEAP8[__str47+2|0];HEAP32[r1+8>>2]=1918988130;HEAP32[r1+12>>2]=100;HEAP32[r1+24>>2]=0;HEAP32[r1+28>>2]=0;HEAP32[r1+32>>2]=0;HEAP32[r1+40>>2]=1;HEAP32[r3>>2]=__ZTVN3OIS15BrowserKeyboardE+8;r3=r1+48|0;HEAP32[r3>>2]=0;HEAP32[r1+52>>2]=0;HEAP32[r1+44>>2]=r3;r3=r1+316|0;HEAP32[r3>>2]=0;HEAP32[r3+4>>2]=0;HEAP32[r3+8>>2]=0;HEAP8[r1+20|0]=r2&1;HEAP32[r1+16>>2]=1;HEAP32[r1+36>>2]=0;_memset(r1+56|0,0,256)|0;return}function __ZN3OIS15BrowserKeyboard11_initializeEv(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72,r73,r74,r75,r76,r77,r78,r79,r80,r81,r82,r83,r84,r85,r86,r87,r88,r89,r90,r91,r92,r93,r94,r95,r96,r97,r98,r99,r100,r101,r102,r103,r104,r105;r2=STACKTOP;STACKTOP=STACKTOP+1632|0;r3=r2+8;r4=r2+24;r5=r2+40;r6=r2+56;r7=r2+72;r8=r2+88;r9=r2+104;r10=r2+120;r11=r2+136;r12=r2+152;r13=r2+168;r14=r2+184;r15=r2+200;r16=r2+216;r17=r2+232;r18=r2+248;r19=r2+264;r20=r2+280;r21=r2+296;r22=r2+312;r23=r2+328;r24=r2+344;r25=r2+360;r26=r2+376;r27=r2+392;r28=r2+408;r29=r2+424;r30=r2+440;r31=r2+456;r32=r2+472;r33=r2+488;r34=r2+504;r35=r2+520;r36=r2+536;r37=r2+552;r38=r2+568;r39=r2+584;r40=r2+600;r41=r2+616;r42=r2+632;r43=r2+648;r44=r2+664;r45=r2+680;r46=r2+696;r47=r2+712;r48=r2+728;r49=r2+744;r50=r2+760;r51=r2+776;r52=r2+792;r53=r2+808;r54=r2+824;r55=r2+840;r56=r2+856;r57=r2+872;r58=r2+888;r59=r2+904;r60=r2+920;r61=r2+936;r62=r2+952;r63=r2+968;r64=r2+984;r65=r2+1e3;r66=r2+1016;r67=r2+1032;r68=r2+1048;r69=r2+1064;r70=r2+1080;r71=r2+1096;r72=r2+1112;r73=r2+1128;r74=r2+1144;r75=r2+1160;r76=r2+1176;r77=r2+1192;r78=r2+1208;r79=r2+1224;r80=r2+1240;r81=r2+1256;r82=r2+1272;r83=r2+1288;r84=r2+1304;r85=r2+1320;r86=r2+1336;r87=r2+1352;r88=r2+1368;r89=r2+1384;r90=r2+1400;r91=r2+1416;r92=r2+1432;r93=r2+1448;r94=r2+1464;r95=r2+1480;r96=r2+1496;r97=r2+1512;r98=r2+1528;r99=r2+1544;r100=r2+1560;r101=r2+1576;r102=r2+1592;r103=r2+1608;r104=r2+1624;HEAP32[r1+32>>2]=0;HEAP32[r1+312>>2]=0;r105=r1+44|0;HEAP32[r103>>2]=27;HEAP32[r103+4>>2]=1;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1600,r105,r103);HEAP32[r101>>2]=189;HEAP32[r101+4>>2]=12;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1568,r105,r101);HEAP32[r99>>2]=187;HEAP32[r99+4>>2]=13;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1536,r105,r99);HEAP32[r97>>2]=8;HEAP32[r97+4>>2]=14;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1504,r105,r97);HEAP32[r95>>2]=9;HEAP32[r95+4>>2]=15;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1472,r105,r95);HEAP32[r93>>2]=13;HEAP32[r93+4>>2]=28;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1440,r105,r93);HEAP32[r91>>2]=17;HEAP32[r91+4>>2]=29;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1408,r105,r91);HEAP32[r89>>2]=186;HEAP32[r89+4>>2]=39;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1376,r105,r89);HEAP32[r87>>2]=186;HEAP32[r87+4>>2]=146;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1344,r105,r87);HEAP32[r85>>2]=222;HEAP32[r85+4>>2]=40;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1312,r105,r85);HEAP32[r83>>2]=222;HEAP32[r83+4>>2]=41;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1280,r105,r83);HEAP32[r81>>2]=16;HEAP32[r81+4>>2]=42;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1248,r105,r81);HEAP32[r79>>2]=220;HEAP32[r79+4>>2]=43;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1216,r105,r79);HEAP32[r77>>2]=191;HEAP32[r77+4>>2]=53;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1184,r105,r77);HEAP32[r75>>2]=188;HEAP32[r75+4>>2]=51;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1152,r105,r75);HEAP32[r73>>2]=190;HEAP32[r73+4>>2]=52;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1120,r105,r73);HEAP32[r71>>2]=16;HEAP32[r71+4>>2]=54;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1088,r105,r71);HEAP32[r69>>2]=56;HEAP32[r69+4>>2]=55;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1056,r105,r69);HEAP32[r67>>2]=18;HEAP32[r67+4>>2]=56;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1024,r105,r67);HEAP32[r65>>2]=32;HEAP32[r65+4>>2]=57;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+992,r105,r65);HEAP32[r63>>2]=20;HEAP32[r63+4>>2]=58;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+960,r105,r63);HEAP32[r61>>2]=49;HEAP32[r61+4>>2]=2;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+928,r105,r61);HEAP32[r59>>2]=50;HEAP32[r59+4>>2]=3;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+896,r105,r59);HEAP32[r57>>2]=51;HEAP32[r57+4>>2]=4;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+864,r105,r57);HEAP32[r55>>2]=52;HEAP32[r55+4>>2]=5;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+832,r105,r55);HEAP32[r53>>2]=53;HEAP32[r53+4>>2]=6;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+800,r105,r53);HEAP32[r51>>2]=54;HEAP32[r51+4>>2]=7;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+768,r105,r51);HEAP32[r49>>2]=55;HEAP32[r49+4>>2]=8;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+736,r105,r49);HEAP32[r47>>2]=56;HEAP32[r47+4>>2]=9;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+704,r105,r47);HEAP32[r45>>2]=57;HEAP32[r45+4>>2]=10;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+672,r105,r45);HEAP32[r43>>2]=48;HEAP32[r43+4>>2]=11;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+640,r105,r43);HEAP32[r41>>2]=65;HEAP32[r41+4>>2]=30;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+608,r105,r41);HEAP32[r39>>2]=66;HEAP32[r39+4>>2]=48;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+576,r105,r39);HEAP32[r37>>2]=67;HEAP32[r37+4>>2]=46;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+544,r105,r37);HEAP32[r35>>2]=68;HEAP32[r35+4>>2]=32;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+512,r105,r35);HEAP32[r33>>2]=69;HEAP32[r33+4>>2]=18;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+480,r105,r33);HEAP32[r31>>2]=70;HEAP32[r31+4>>2]=33;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+448,r105,r31);HEAP32[r29>>2]=71;HEAP32[r29+4>>2]=34;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+416,r105,r29);HEAP32[r27>>2]=72;HEAP32[r27+4>>2]=35;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+384,r105,r27);HEAP32[r25>>2]=73;HEAP32[r25+4>>2]=23;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+352,r105,r25);HEAP32[r23>>2]=74;HEAP32[r23+4>>2]=36;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+320,r105,r23);HEAP32[r21>>2]=75;HEAP32[r21+4>>2]=37;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+288,r105,r21);HEAP32[r19>>2]=76;HEAP32[r19+4>>2]=38;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+256,r105,r19);HEAP32[r17>>2]=77;HEAP32[r17+4>>2]=50;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+224,r105,r17);HEAP32[r15>>2]=78;HEAP32[r15+4>>2]=49;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+192,r105,r15);HEAP32[r13>>2]=79;HEAP32[r13+4>>2]=24;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+160,r105,r13);HEAP32[r11>>2]=80;HEAP32[r11+4>>2]=25;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+128,r105,r11);HEAP32[r9>>2]=81;HEAP32[r9+4>>2]=16;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+96,r105,r9);HEAP32[r7>>2]=82;HEAP32[r7+4>>2]=19;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+64,r105,r7);HEAP32[r5>>2]=83;HEAP32[r5+4>>2]=31;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+32,r105,r5);HEAP32[r3>>2]=84;HEAP32[r3+4>>2]=20;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2,r105,r3);HEAP32[r4>>2]=85;HEAP32[r4+4>>2]=22;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+16,r105,r4);HEAP32[r6>>2]=86;HEAP32[r6+4>>2]=47;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+48,r105,r6);HEAP32[r8>>2]=87;HEAP32[r8+4>>2]=17;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+80,r105,r8);HEAP32[r10>>2]=88;HEAP32[r10+4>>2]=45;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+112,r105,r10);HEAP32[r12>>2]=89;HEAP32[r12+4>>2]=21;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+144,r105,r12);HEAP32[r14>>2]=90;HEAP32[r14+4>>2]=44;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+176,r105,r14);HEAP32[r16>>2]=112;HEAP32[r16+4>>2]=59;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+208,r105,r16);HEAP32[r18>>2]=113;HEAP32[r18+4>>2]=60;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+240,r105,r18);HEAP32[r20>>2]=114;HEAP32[r20+4>>2]=61;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+272,r105,r20);HEAP32[r22>>2]=115;HEAP32[r22+4>>2]=62;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+304,r105,r22);HEAP32[r24>>2]=116;HEAP32[r24+4>>2]=63;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+336,r105,r24);HEAP32[r26>>2]=117;HEAP32[r26+4>>2]=64;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+368,r105,r26);HEAP32[r28>>2]=118;HEAP32[r28+4>>2]=65;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+400,r105,r28);HEAP32[r30>>2]=119;HEAP32[r30+4>>2]=66;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+432,r105,r30);HEAP32[r32>>2]=120;HEAP32[r32+4>>2]=67;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+464,r105,r32);HEAP32[r34>>2]=121;HEAP32[r34+4>>2]=68;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+496,r105,r34);HEAP32[r36>>2]=122;HEAP32[r36+4>>2]=87;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+528,r105,r36);HEAP32[r38>>2]=123;HEAP32[r38+4>>2]=88;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+560,r105,r38);HEAP32[r40>>2]=124;HEAP32[r40+4>>2]=100;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+592,r105,r40);HEAP32[r42>>2]=125;HEAP32[r42+4>>2]=101;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+624,r105,r42);HEAP32[r44>>2]=126;HEAP32[r44+4>>2]=102;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+656,r105,r44);HEAP32[r46>>2]=144;HEAP32[r46+4>>2]=69;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+688,r105,r46);HEAP32[r48>>2]=145;HEAP32[r48+4>>2]=70;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+720,r105,r48);HEAP32[r50>>2]=96;HEAP32[r50+4>>2]=82;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+752,r105,r50);HEAP32[r52>>2]=97;HEAP32[r52+4>>2]=79;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+784,r105,r52);HEAP32[r54>>2]=98;HEAP32[r54+4>>2]=80;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+816,r105,r54);HEAP32[r56>>2]=99;HEAP32[r56+4>>2]=81;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+848,r105,r56);HEAP32[r58>>2]=100;HEAP32[r58+4>>2]=75;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+880,r105,r58);HEAP32[r60>>2]=101;HEAP32[r60+4>>2]=76;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+912,r105,r60);HEAP32[r62>>2]=102;HEAP32[r62+4>>2]=77;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+944,r105,r62);HEAP32[r64>>2]=103;HEAP32[r64+4>>2]=71;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+976,r105,r64);HEAP32[r66>>2]=104;HEAP32[r66+4>>2]=72;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1008,r105,r66);HEAP32[r68>>2]=105;HEAP32[r68+4>>2]=73;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1040,r105,r68);HEAP32[r70>>2]=107;HEAP32[r70+4>>2]=78;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1072,r105,r70);HEAP32[r72>>2]=109;HEAP32[r72+4>>2]=74;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1104,r105,r72);HEAP32[r74>>2]=110;HEAP32[r74+4>>2]=83;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1136,r105,r74);HEAP32[r76>>2]=108;HEAP32[r76+4>>2]=141;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1168,r105,r76);HEAP32[r78>>2]=111;HEAP32[r78+4>>2]=181;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1200,r105,r78);HEAP32[r80>>2]=18;HEAP32[r80+4>>2]=184;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1232,r105,r80);HEAP32[r82>>2]=36;HEAP32[r82+4>>2]=199;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1264,r105,r82);HEAP32[r84>>2]=38;HEAP32[r84+4>>2]=200;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1296,r105,r84);HEAP32[r86>>2]=33;HEAP32[r86+4>>2]=201;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1328,r105,r86);HEAP32[r88>>2]=37;HEAP32[r88+4>>2]=203;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1360,r105,r88);HEAP32[r90>>2]=39;HEAP32[r90+4>>2]=205;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1392,r105,r90);HEAP32[r92>>2]=35;HEAP32[r92+4>>2]=207;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1424,r105,r92);HEAP32[r94>>2]=40;HEAP32[r94+4>>2]=208;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1456,r105,r94);HEAP32[r96>>2]=34;HEAP32[r96+4>>2]=209;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1488,r105,r96);HEAP32[r98>>2]=45;HEAP32[r98+4>>2]=210;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1520,r105,r98);HEAP32[r100>>2]=46;HEAP32[r100+4>>2]=211;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1552,r105,r100);HEAP32[r102>>2]=91;HEAP32[r102+4>>2]=219;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1584,r105,r102);HEAP32[r104>>2]=92;HEAP32[r104+4>>2]=220;__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r2+1616,r105,r104);STACKTOP=r2;return}function __ZN3OIS15BrowserKeyboardD0Ev(r1){var r2,r3;r2=r1|0;HEAP32[r2>>2]=__ZTVN3OIS15BrowserKeyboardE+8;if((HEAP8[r1+316|0]&1)!=0){__ZdlPv(HEAP32[r1+324>>2])}__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE(r1+44|0,HEAP32[r1+48>>2]);HEAP32[r2>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r3=r1;__ZdlPv(r3);return}__ZdlPv(HEAP32[r1+12>>2]);r3=r1;__ZdlPv(r3);return}function __ZN3OIS15BrowserKeyboardD2Ev(r1){var r2;r2=r1|0;HEAP32[r2>>2]=__ZTVN3OIS15BrowserKeyboardE+8;if((HEAP8[r1+316|0]&1)!=0){__ZdlPv(HEAP32[r1+324>>2])}__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE(r1+44|0,HEAP32[r1+48>>2]);HEAP32[r2>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS15BrowserKeyboard7captureEv(r1){var r2,r3,r4,r5,r6;r2=STACKTOP;STACKTOP=STACKTOP+24|0;r3=r2;r4=r2+8;HEAP32[r3>>2]=_emscripten_asm_const_int(__str148|0,0);r5=HEAP32[__ZNSt3__13mapIN3OIS10BrowserKeyENS1_7KeyCodeENS_4lessIS2_EENS_9allocatorINS_4pairIKS2_S3_EEEEEixERS8_(r1+44|0,r3)>>2];HEAP8[r5+(r1+56)|0]=0;if((HEAP8[r1+20|0]&1)==0){STACKTOP=r2;return}r3=HEAP32[r1+36>>2];if((r3|0)==0){STACKTOP=r2;return}r6=HEAP32[HEAP32[r3>>2]+8>>2];HEAP32[r4+4>>2]=r1;HEAP32[r4>>2]=__ZTVN3OIS8KeyEventE+8;HEAP32[r4+8>>2]=r5;HEAP32[r4+12>>2]=0;FUNCTION_TABLE[r6](r3,r4);STACKTOP=r2;return}function __ZNSt3__13mapIN3OIS10BrowserKeyENS1_7KeyCodeENS_4lessIS2_EENS_9allocatorINS_4pairIKS2_S3_EEEEEixERS8_(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r3=0;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r1+4|0;r7=r6|0;r8=HEAP32[r7>>2];do{if((r8|0)==0){r9=r6;HEAP32[r5>>2]=r9;r10=r7;r11=r9}else{r9=HEAP32[r2>>2];r12=r8;while(1){r13=HEAP32[r12+16>>2];if((r9|0)<(r13|0)){r14=r12|0;r15=HEAP32[r14>>2];if((r15|0)==0){r3=5;break}else{r12=r15;continue}}if((r13|0)>=(r9|0)){r3=9;break}r16=r12+4|0;r13=HEAP32[r16>>2];if((r13|0)==0){r3=8;break}else{r12=r13}}if(r3==8){HEAP32[r5>>2]=r12;r10=r16;r11=r12;break}else if(r3==9){HEAP32[r5>>2]=r12;r10=r5;r11=r12;break}else if(r3==5){HEAP32[r5>>2]=r12;r10=r14;r11=r12;break}}}while(0);r14=HEAP32[r10>>2];if((r14|0)!=0){r17=r14;r18=r17+20|0;STACKTOP=r4;return r18}r14=__Znwj(24);r5=r14+16|0;if((r5|0)!=0){HEAP32[r5>>2]=HEAP32[r2>>2]}r2=r14+20|0;if((r2|0)!=0){HEAP32[r2>>2]=0}r2=r14;HEAP32[r14>>2]=0;HEAP32[r14+4>>2]=0;HEAP32[r14+8>>2]=r11;HEAP32[r10>>2]=r2;r11=r1|0;r5=HEAP32[HEAP32[r11>>2]>>2];if((r5|0)==0){r19=r2}else{HEAP32[r11>>2]=r5;r19=HEAP32[r10>>2]}__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r1+4>>2],r19);r19=r1+8|0;HEAP32[r19>>2]=HEAP32[r19>>2]+1;r17=r14;r18=r17+20|0;STACKTOP=r4;return r18}function __ZN3OIS8KeyEventD1Ev(r1){return}function __ZNK3OIS15BrowserKeyboard9isKeyDownENS_7KeyCodeE(r1,r2){return(HEAP8[r2+(r1+56)|0]|0)==1}function __ZN3OIS15BrowserKeyboard11getAsStringENS_7KeyCodeE(r1,r2){r2=r1+316|0;__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(r2,__str249|0);return r2}function __ZNK3OIS15BrowserKeyboard13copyKeyStatesEPc(r1,r2){var r3,r4;r3=0;while(1){HEAP8[r2+r3|0]=HEAP8[r3+(r1+56)|0];r4=r3+1|0;if((r4|0)<256){r3=r4}else{break}}return}function __ZN3OIS15BrowserKeyboard11setBufferedEb(r1,r2){HEAP8[r1+20|0]=r2&1;return}function __ZN3OIS15BrowserKeyboard18setTextTranslationENS_8Keyboard19TextTranslationModeE(r1,r2){HEAP32[r1+40>>2]=r2;return}function __ZN3OIS15BrowserKeyboard14queryInterfaceENS_9Interface5ITypeE(r1,r2){return 0}function __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r3=_strlen(r2);r4=r1;r5=r1;r6=HEAP8[r5];if((r6&1)==0){r7=10;r8=r6}else{r6=HEAP32[r1>>2];r7=(r6&-2)-1|0;r8=r6&255}if(r7>>>0<r3>>>0){r6=r8&255;if((r6&1|0)==0){r9=r6>>>1}else{r9=HEAP32[r1+4>>2]}__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(r1,r7,r3-r7|0,r9,0,r9,r3,r2);return r1}if((r8&1)==0){r10=r4+1|0}else{r10=HEAP32[r1+8>>2]}_memmove(r10,r2,r3,1,0);HEAP8[r10+r3|0]=0;if((HEAP8[r5]&1)==0){HEAP8[r5]=r3<<1;return r1}else{HEAP32[r1+4>>2]=r3;return r1}}function __ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+8|0;r6=r5;r7=r2+4|0;r8=r7|0;r9=HEAP32[r8>>2];do{if((r9|0)==0){r10=r7;HEAP32[r6>>2]=r10;r11=r8;r12=r10}else{r10=HEAP32[r3>>2];r13=r9;while(1){r14=HEAP32[r13+16>>2];if((r10|0)<(r14|0)){r15=r13|0;r16=HEAP32[r15>>2];if((r16|0)==0){r4=5;break}else{r13=r16;continue}}if((r14|0)>=(r10|0)){r4=9;break}r17=r13+4|0;r14=HEAP32[r17>>2];if((r14|0)==0){r4=8;break}else{r13=r14}}if(r4==8){HEAP32[r6>>2]=r13;r11=r17;r12=r13;break}else if(r4==9){HEAP32[r6>>2]=r13;r11=r6;r12=r13;break}else if(r4==5){HEAP32[r6>>2]=r13;r11=r15;r12=r13;break}}}while(0);r15=HEAP32[r11>>2];if((r15|0)!=0){r18=r15;r19=0;r20=r1|0;HEAP32[r20>>2]=r18;r21=r1+4|0;HEAP8[r21]=r19;STACKTOP=r5;return}r15=__Znwj(24);r6=r15+16|0;if((r6|0)!=0){r4=r3;r3=r6;r6=HEAP32[r4+4>>2];HEAP32[r3>>2]=HEAP32[r4>>2];HEAP32[r3+4>>2]=r6}r6=r15;HEAP32[r15>>2]=0;HEAP32[r15+4>>2]=0;HEAP32[r15+8>>2]=r12;HEAP32[r11>>2]=r6;r12=r2|0;r3=HEAP32[HEAP32[r12>>2]>>2];if((r3|0)==0){r22=r6}else{HEAP32[r12>>2]=r3;r22=HEAP32[r11>>2]}__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[r2+4>>2],r22);r22=r2+8|0;HEAP32[r22>>2]=HEAP32[r22>>2]+1;r18=r15;r19=1;r20=r1|0;HEAP32[r20>>2]=r18;r21=r1+4|0;HEAP8[r21]=r19;STACKTOP=r5;return}function __ZN3OIS8KeyEventD0Ev(r1){__ZdlPv(r1);return}function __ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE(r1,r2){if((r2|0)==0){return}else{__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE(r1,HEAP32[r2>>2]);__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE(r1,HEAP32[r2+4>>2]);__ZdlPv(r2);return}}function __ZN3OIS12BrowserMouseC2Eb($this,$buffered){var sp=STACKTOP;STACKTOP=STACKTOP+16|0;var $ref_tmp=sp;var $0=$this|0;var $__s2_i_i=$ref_tmp;var $__size__i50_i=$ref_tmp;HEAP8[$__size__i50_i]=10;var $arrayidx_i_i=$__s2_i_i+1|0;HEAP8[$arrayidx_i_i]=HEAP8[__str53|0];HEAP8[$arrayidx_i_i+1|0]=HEAP8[__str53+1|0];HEAP8[$arrayidx_i_i+2|0]=HEAP8[__str53+2|0];HEAP8[$arrayidx_i_i+3|0]=HEAP8[__str53+3|0];HEAP8[$arrayidx_i_i+4|0]=HEAP8[__str53+4|0];HEAP8[$__s2_i_i+6|0]=0;((function(){try{__THREW__=0;return __ZN3OIS5MouseC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE($0,$ref_tmp,0,0,0)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){if((HEAP8[$__size__i50_i]&1)!=0){__ZdlPv(HEAP32[$ref_tmp+8>>2])}HEAP32[$this>>2]=__ZTVN3OIS12BrowserMouseE+8;HEAP8[$this+96|0]=0;HEAP8[$this+97|0]=0;HEAP8[$this+20|0]=$buffered&1;HEAP32[$this+16>>2]=2;HEAP32[$this+92>>2]=0;STACKTOP=sp;return}var $4$0=___cxa_find_matching_catch(-1,-1);if((HEAP8[$__size__i50_i]&1)==0){___resumeException($4$0)}__ZdlPv(HEAP32[$ref_tmp+8>>2]);___resumeException($4$0)}function __ZN3OIS5MouseC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11;r6=r1|0;HEAP32[r6>>2]=__ZTVN3OIS6ObjectE+8;r7=r1+4|0;r8=r2;if((HEAP8[r8]&1)==0){r9=r7;HEAP32[r9>>2]=HEAP32[r8>>2];HEAP32[r9+4>>2]=HEAP32[r8+4>>2];HEAP32[r9+8>>2]=HEAP32[r8+8>>2]}else{r8=HEAP32[r2+8>>2];r9=HEAP32[r2+4>>2];if(r9>>>0>4294967279){__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(0)}if(r9>>>0<11){HEAP8[r7]=r9<<1;r10=r7+1|0}else{r2=r9+16&-16;r11=__Znwj(r2);HEAP32[r1+12>>2]=r11;HEAP32[r7>>2]=r2|1;HEAP32[r1+8>>2]=r9;r10=r11}_memcpy(r10,r8,r9)|0;HEAP8[r10+r9|0]=0}HEAP32[r1+16>>2]=2;HEAP8[r1+20|0]=r3&1;HEAP32[r1+24>>2]=r4;HEAP32[r1+28>>2]=r5;HEAP32[r6>>2]=__ZTVN3OIS5MouseE+8;HEAP32[r1+32>>2]=50;HEAP32[r1+36>>2]=50;HEAP32[r1+40>>2]=2;HEAP32[r1+44>>2]=0;HEAP32[r1+48>>2]=0;HEAP8[r1+52|0]=0;HEAP32[r1+56>>2]=2;HEAP32[r1+60>>2]=0;HEAP32[r1+64>>2]=0;HEAP8[r1+68|0]=0;HEAP32[r1+72>>2]=2;HEAP32[r1+76>>2]=0;HEAP32[r1+80>>2]=0;HEAP8[r1+84|0]=0;HEAP32[r1+88>>2]=0;HEAP32[r1+92>>2]=0;return}function __ZN3OIS12BrowserMouse11_initializeEv(r1){HEAP32[r1+48>>2]=0;HEAP32[r1+44>>2]=0;HEAP32[r1+64>>2]=0;HEAP32[r1+60>>2]=0;HEAP32[r1+80>>2]=0;HEAP32[r1+76>>2]=0;HEAP32[r1+88>>2]=0;HEAP8[r1+97|0]=0;HEAP8[r1+96|0]=1;return}function __ZN3OIS12BrowserMouse8_setGrabEb(r1,r2){HEAP8[r1+96|0]=r2&1;return}function __ZN3OIS12BrowserMouse11_setVisibleEb(r1,r2){return}function __ZN3OIS12BrowserMouseD0Ev(r1){var r2;HEAP8[r1+96|0]=1;HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r2=r1;__ZdlPv(r2);return}__ZdlPv(HEAP32[r1+12>>2]);r2=r1;__ZdlPv(r2);return}function __ZN3OIS12BrowserMouseD2Ev(r1){HEAP8[r1+96|0]=1;HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS12BrowserMouse7captureEv($this){var sp=STACKTOP;STACKTOP=STACKTOP+48|0;var $ref_tmp=sp;var $ref_tmp36=sp+16;var $ref_tmp57=sp+32;var $mState=$this+32|0;var $rel=$this+48|0;HEAP32[$rel>>2]=0;var $rel3=$this+64|0;HEAP32[$rel3>>2]=0;HEAP32[$this+80>>2]=0;var $call=_emscripten_asm_const_int(__str154|0,0);var $call6=_emscripten_asm_const_int(__str255|0,0);var $call7=_emscripten_asm_const_int(__str356|0,0);var $sub=_emscripten_asm_const_int(__str457|0,0)-1|0;HEAP32[$this+44>>2]=$call6;HEAP32[$this+60>>2]=$call7;HEAP32[$rel>>2]=$call6;HEAP32[$rel3>>2]=$call7;if(($call|0)==1){var $11=HEAP32[__ZZN3OIS12BrowserMouse7captureEvE4mask+($sub<<2)>>2];var $buttons=$this+88|0;HEAP32[$buttons>>2]=HEAP32[$buttons>>2]|$11;if((HEAP8[$this+20|0]&1)==0){STACKTOP=sp;return}var $16=HEAP32[$this+92>>2];if(($16|0)==0){STACKTOP=sp;return}var $18=HEAP32[HEAP32[$16>>2]+12>>2];HEAP32[$ref_tmp36+4>>2]=$this;HEAP32[$ref_tmp36>>2]=__ZTVN3OIS10MouseEventE+8;HEAP32[$ref_tmp36+8>>2]=$mState;((function(){try{__THREW__=0;return FUNCTION_TABLE[$18]($16,$ref_tmp36,$11)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){STACKTOP=sp;return}var $21$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$21$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val65$0=$lpad_val$0;var $lpad_val65$1=$ehselector_slot_0;___resumeException($lpad_val65$0)}else if(($call|0)==2){var $24=HEAP32[__ZZN3OIS12BrowserMouse7captureEvE4mask+($sub<<2)>>2];var $buttons47=$this+88|0;HEAP32[$buttons47>>2]=HEAP32[$buttons47>>2]&~$24;if((HEAP8[$this+20|0]&1)==0){STACKTOP=sp;return}var $29=HEAP32[$this+92>>2];if(($29|0)==0){STACKTOP=sp;return}var $31=HEAP32[HEAP32[$29>>2]+16>>2];HEAP32[$ref_tmp57+4>>2]=$this;HEAP32[$ref_tmp57>>2]=__ZTVN3OIS10MouseEventE+8;HEAP32[$ref_tmp57+8>>2]=$mState;((function(){try{__THREW__=0;return FUNCTION_TABLE[$31]($29,$ref_tmp57,$24)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){STACKTOP=sp;return}var $34$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$34$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val65$0=$lpad_val$0;var $lpad_val65$1=$ehselector_slot_0;___resumeException($lpad_val65$0)}else if(($call|0)==0){if((HEAP8[$this+20|0]&1)==0){STACKTOP=sp;return}var $3=HEAP32[$this+92>>2];if(($3|0)==0){STACKTOP=sp;return}var $5=HEAP32[HEAP32[$3>>2]+8>>2];HEAP32[$ref_tmp+4>>2]=$this;HEAP32[$ref_tmp>>2]=__ZTVN3OIS10MouseEventE+8;HEAP32[$ref_tmp+8>>2]=$mState;((function(){try{__THREW__=0;return FUNCTION_TABLE[$5]($3,$ref_tmp)}catch(e){if(typeof e!="number")throw e;if(ABORT)throw e;__THREW__=1;return null}}))();if(!__THREW__){STACKTOP=sp;return}var $8$0=___cxa_find_matching_catch(-1,-1);var $ehselector_slot_0=tempRet0;var $exn_slot_0=$8$0;var $exn_slot_0;var $ehselector_slot_0;var $lpad_val$0=$exn_slot_0;var $lpad_val$1=0;var $lpad_val65$0=$lpad_val$0;var $lpad_val65$1=$ehselector_slot_0;___resumeException($lpad_val65$0)}else{STACKTOP=sp;return}}function __ZN3OIS10MouseEventD1Ev(r1){return}function __ZN3OIS12BrowserMouse11setBufferedEb(r1,r2){HEAP8[r1+20|0]=r2&1;return}function __ZN3OIS12BrowserMouse14queryInterfaceENS_9Interface5ITypeE(r1,r2){return 0}function __ZN3OIS5Mouse16setEventCallbackEPNS_13MouseListenerE(r1,r2){HEAP32[r1+92>>2]=r2;return}function __ZN3OIS10MouseEventD0Ev(r1){__ZdlPv(r1);return}function __ZN3OIS5MouseD1Ev(r1){HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){return}__ZdlPv(HEAP32[r1+12>>2]);return}function __ZN3OIS5MouseD0Ev(r1){var r2;HEAP32[r1>>2]=__ZTVN3OIS6ObjectE+8;if((HEAP8[r1+4|0]&1)==0){r2=r1;__ZdlPv(r2);return}__ZdlPv(HEAP32[r1+12>>2]);r2=r1;__ZdlPv(r2);return}function _i64Add(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1+r3>>>0;r6=r2+r4+(r5>>>0<r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _i64Subtract(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1-r3>>>0;r6=r2-r4>>>0;r6=r2-r4-(r3>>>0>r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _bitshift64Shl(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2<<r3|(r1&r4<<32-r3)>>>32-r3;return r1<<r3}tempRet0=r1<<r3-32;return 0}function _bitshift64Lshr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=0;return r2>>>r3-32|0}function _bitshift64Ashr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=(r2|0)<0?-1:0;return r2>>r3-32|0}function _llvm_ctlz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[ctlz_i8+(r1>>>24)|0];if((r2|0)<8)return r2|0;r2=HEAP8[ctlz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[ctlz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[ctlz_i8+(r1&255)|0]+24|0}var ctlz_i8=allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",ALLOC_DYNAMIC);function _llvm_cttz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[cttz_i8+(r1&255)|0];if((r2|0)<8)return r2|0;r2=HEAP8[cttz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[cttz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[cttz_i8+(r1>>>24)|0]+24|0}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_DYNAMIC);function ___muldsi3(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=0,r4=0,r5=0,r6=0,r7=0,r8=0,r9=0;r3=r1&65535;r4=r2&65535;r5=Math_imul(r4,r3)|0;r6=r1>>>16;r7=(r5>>>16)+Math_imul(r4,r6)|0;r8=r2>>>16;r9=Math_imul(r8,r3)|0;return(tempRet0=(r7>>>16)+Math_imul(r8,r6)+(((r7&65535)+r9|0)>>>16)|0,r7+r9<<16|r5&65535|0)|0}function ___divdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r5=r2>>31|((r2|0)<0?-1:0)<<1;r6=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r7=r4>>31|((r4|0)<0?-1:0)<<1;r8=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r9=_i64Subtract(r5^r1,r6^r2,r5,r6)|0;r10=tempRet0;r11=_i64Subtract(r7^r3,r8^r4,r7,r8)|0;r12=r7^r5;r13=r8^r6;r14=___udivmoddi4(r9,r10,r11,tempRet0,0)|0;r15=_i64Subtract(r14^r12,tempRet0^r13,r12,r13)|0;return(tempRet0=tempRet0,r15)|0}function ___remdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r15=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r15|0;r6=r2>>31|((r2|0)<0?-1:0)<<1;r7=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r8=r4>>31|((r4|0)<0?-1:0)<<1;r9=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r10=_i64Subtract(r6^r1,r7^r2,r6,r7)|0;r11=tempRet0;r12=_i64Subtract(r8^r3,r9^r4,r8,r9)|0;___udivmoddi4(r10,r11,r12,tempRet0,r5)|0;r13=_i64Subtract(HEAP32[r5>>2]^r6,HEAP32[r5+4>>2]^r7,r6,r7)|0;r14=tempRet0;STACKTOP=r15;return(tempRet0=r14,r13)|0}function ___muldi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0;r5=r1;r6=r3;r7=___muldsi3(r5,r6)|0;r8=tempRet0;r9=Math_imul(r2,r6)|0;return(tempRet0=Math_imul(r4,r5)+r9+r8|r8&0,r7&-1|0)|0}function ___udivdi3(r1,r2,r3,r4){var r5;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0;r5=___udivmoddi4(r1,r2,r3,r4,0)|0;return(tempRet0=tempRet0,r5)|0}function ___uremdi3(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r6=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r6|0;___udivmoddi4(r1,r2,r3,r4,r5)|0;STACKTOP=r6;return(tempRet0=HEAP32[r5+4>>2]|0,HEAP32[r5>>2]|0)|0}function ___udivmoddi4(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=r5|0;r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0,r16=0,r17=0,r18=0,r19=0,r20=0,r21=0,r22=0,r23=0,r24=0,r25=0,r26=0,r27=0,r28=0,r29=0,r30=0,r31=0,r32=0,r33=0,r34=0,r35=0,r36=0,r37=0,r38=0,r39=0,r40=0,r41=0,r42=0,r43=0,r44=0,r45=0,r46=0,r47=0,r48=0,r49=0,r50=0,r51=0,r52=0,r53=0,r54=0,r55=0,r56=0,r57=0,r58=0,r59=0,r60=0,r61=0,r62=0,r63=0,r64=0,r65=0,r66=0,r67=0,r68=0,r69=0;r6=r1;r7=r2;r8=r7;r9=r3;r10=r4;r11=r10;if((r8|0)==0){r12=(r5|0)!=0;if((r11|0)==0){if(r12){HEAP32[r5>>2]=(r6>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r6>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}else{if(!r12){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}}r13=(r11|0)==0;do{if((r9|0)==0){if(r13){if((r5|0)!=0){HEAP32[r5>>2]=(r8>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r8>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}if((r6|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=(r8>>>0)%(r11>>>0)}r69=0;r68=(r8>>>0)/(r11>>>0)>>>0;return(tempRet0=r69,r68)|0}r14=r11-1|0;if((r14&r11|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r14&r8|r2&0}r69=0;r68=r8>>>((_llvm_cttz_i32(r11|0)|0)>>>0);return(tempRet0=r69,r68)|0}r15=_llvm_ctlz_i32(r11|0)|0;r16=r15-_llvm_ctlz_i32(r8|0)|0;if(r16>>>0<=30){r17=r16+1|0;r18=31-r16|0;r37=r17;r36=r8<<r18|r6>>>(r17>>>0);r35=r8>>>(r17>>>0);r34=0;r33=r6<<r18;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}else{if(!r13){r28=_llvm_ctlz_i32(r11|0)|0;r29=r28-_llvm_ctlz_i32(r8|0)|0;if(r29>>>0<=31){r30=r29+1|0;r31=31-r29|0;r32=r29-31>>31;r37=r30;r36=r6>>>(r30>>>0)&r32|r8<<r31;r35=r8>>>(r30>>>0)&r32;r34=0;r33=r6<<r31;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}r19=r9-1|0;if((r19&r9|0)!=0){r21=_llvm_ctlz_i32(r9|0)+33|0;r22=r21-_llvm_ctlz_i32(r8|0)|0;r23=64-r22|0;r24=32-r22|0;r25=r24>>31;r26=r22-32|0;r27=r26>>31;r37=r22;r36=r24-1>>31&r8>>>(r26>>>0)|(r8<<r24|r6>>>(r22>>>0))&r27;r35=r27&r8>>>(r22>>>0);r34=r6<<r23&r25;r33=(r8<<r23|r6>>>(r26>>>0))&r25|r6<<r24&r22-33>>31;break}if((r5|0)!=0){HEAP32[r5>>2]=r19&r6;HEAP32[r5+4>>2]=0}if((r9|0)==1){r69=r7|r2&0;r68=r1&-1|0;return(tempRet0=r69,r68)|0}else{r20=_llvm_cttz_i32(r9|0)|0;r69=r8>>>(r20>>>0)|0;r68=r8<<32-r20|r6>>>(r20>>>0)|0;return(tempRet0=r69,r68)|0}}}while(0);if((r37|0)==0){r64=r33;r63=r34;r62=r35;r61=r36;r60=0;r59=0}else{r38=r3&-1|0;r39=r10|r4&0;r40=_i64Add(r38,r39,-1,-1)|0;r41=tempRet0;r47=r33;r46=r34;r45=r35;r44=r36;r43=r37;r42=0;while(1){r48=r46>>>31|r47<<1;r49=r42|r46<<1;r50=r44<<1|r47>>>31|0;r51=r44>>>31|r45<<1|0;_i64Subtract(r40,r41,r50,r51)|0;r52=tempRet0;r53=r52>>31|((r52|0)<0?-1:0)<<1;r54=r53&1;r55=_i64Subtract(r50,r51,r53&r38,(((r52|0)<0?-1:0)>>31|((r52|0)<0?-1:0)<<1)&r39)|0;r56=r55;r57=tempRet0;r58=r43-1|0;if((r58|0)==0){break}else{r47=r48;r46=r49;r45=r57;r44=r56;r43=r58;r42=r54}}r64=r48;r63=r49;r62=r57;r61=r56;r60=0;r59=r54}r65=r63;r66=0;r67=r64|r66;if((r5|0)!=0){HEAP32[r5>>2]=r61;HEAP32[r5+4>>2]=r62}r69=(r65|0)>>>31|r67<<1|(r66<<1|r65>>>31)&0|r60;r68=(r65<<1|0>>>31)&-2|r59;return(tempRet0=r69,r68)|0}
// EMSCRIPTEN_END_FUNCS
Module["__ZN3OIS6Effect16getForceTypeNameENS0_6EForceE"] = __ZN3OIS6Effect16getForceTypeNameENS0_6EForceE;
Module["__ZN3OIS6Effect17getEffectTypeNameENS0_5ETypeE"] = __ZN3OIS6Effect17getEffectTypeNameENS0_5ETypeE;
Module["__ZN3OIS6Effect16getDirectionNameENS0_10EDirectionE"] = __ZN3OIS6Effect16getDirectionNameENS0_10EDirectionE;
Module["__ZN3OIS6EffectC2Ev"] = __ZN3OIS6EffectC2Ev;
Module["__ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE"] = __ZN3OIS6EffectC2ENS0_6EForceENS0_5ETypeE;
Module["__ZN3OIS6EffectD0Ev"] = __ZN3OIS6EffectD0Ev;
Module["__ZN3OIS6EffectD2Ev"] = __ZN3OIS6EffectD2Ev;
Module["__ZNK3OIS6Effect14getForceEffectEv"] = __ZNK3OIS6Effect14getForceEffectEv;
Module["__ZN3OIS9ExceptionD1Ev"] = __ZN3OIS9ExceptionD1Ev;
Module["__ZN3OIS6Effect10setNumAxesEs"] = __ZN3OIS6Effect10setNumAxesEs;
Module["__ZNK3OIS6Effect10getNumAxesEv"] = __ZNK3OIS6Effect10getNumAxesEv;
Module["__ZN3OIS17ConditionalEffectD1Ev"] = __ZN3OIS17ConditionalEffectD1Ev;
Module["__ZN3OIS17ConditionalEffectD0Ev"] = __ZN3OIS17ConditionalEffectD0Ev;
Module["__ZN3OIS14PeriodicEffectD1Ev"] = __ZN3OIS14PeriodicEffectD1Ev;
Module["__ZN3OIS14PeriodicEffectD0Ev"] = __ZN3OIS14PeriodicEffectD0Ev;
Module["__ZN3OIS8EnvelopeD1Ev"] = __ZN3OIS8EnvelopeD1Ev;
Module["__ZN3OIS8EnvelopeD0Ev"] = __ZN3OIS8EnvelopeD0Ev;
Module["__ZN3OIS10RampEffectD1Ev"] = __ZN3OIS10RampEffectD1Ev;
Module["__ZN3OIS10RampEffectD0Ev"] = __ZN3OIS10RampEffectD0Ev;
Module["__ZN3OIS14ConstantEffectD1Ev"] = __ZN3OIS14ConstantEffectD1Ev;
Module["__ZN3OIS14ConstantEffectD0Ev"] = __ZN3OIS14ConstantEffectD0Ev;
Module["__ZNK3OIS9Exception4whatEv"] = __ZNK3OIS9Exception4whatEv;
Module["__ZN3OIS9ExceptionD0Ev"] = __ZN3OIS9ExceptionD0Ev;
Module["__ZN3OIS13ForceFeedbackC2Ev"] = __ZN3OIS13ForceFeedbackC2Ev;
Module["__ZN3OIS13ForceFeedback15_addEffectTypesENS_6Effect6EForceENS1_5ETypeE"] = __ZN3OIS13ForceFeedback15_addEffectTypesENS_6Effect6EForceENS1_5ETypeE;
Module["__ZN3OIS13ForceFeedback15_setGainSupportEb"] = __ZN3OIS13ForceFeedback15_setGainSupportEb;
Module["__ZN3OIS13ForceFeedback21_setAutoCenterSupportEb"] = __ZN3OIS13ForceFeedback21_setAutoCenterSupportEb;
Module["__ZNK3OIS13ForceFeedback19getSupportedEffectsEv"] = __ZNK3OIS13ForceFeedback19getSupportedEffectsEv;
Module["__ZNK3OIS13ForceFeedback14supportsEffectENS_6Effect6EForceENS1_5ETypeE"] = __ZNK3OIS13ForceFeedback14supportsEffectENS_6Effect6EForceENS1_5ETypeE;
Module["__ZN3OIS13ForceFeedbackD1Ev"] = __ZN3OIS13ForceFeedbackD1Ev;
Module["__ZN3OIS13ForceFeedbackD0Ev"] = __ZN3OIS13ForceFeedbackD0Ev;
Module["__ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE"] = __ZNSt3__16__treeINS_12__value_typeIN3OIS6Effect6EForceENS3_5ETypeEEENS_19__map_value_compareIS4_S6_NS_4lessIS4_EELb1EEENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE;
Module["__ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_"] = __ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_;
Module["__ZN3OIS12InputManagerC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE"] = __ZN3OIS12InputManagerC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE;
Module["__ZN3OIS12InputManagerD0Ev"] = __ZN3OIS12InputManagerD0Ev;
Module["__ZN3OIS12InputManagerD2Ev"] = __ZN3OIS12InputManagerD2Ev;
Module["__ZN3OIS12InputManager16getVersionNumberEv"] = __ZN3OIS12InputManager16getVersionNumberEv;
Module["__ZN3OIS12InputManager14getVersionNameEv"] = __ZN3OIS12InputManager14getVersionNameEv;
Module["__ZN3OIS12InputManager17createInputSystemEj"] = __ZN3OIS12InputManager17createInputSystemEj;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj;
Module["__ZN3OIS12InputManager17createInputSystemERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE"] = __ZN3OIS12InputManager17createInputSystemERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE;
Module["__ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZN3OIS12InputManager18destroyInputSystemEPS0_"] = __ZN3OIS12InputManager18destroyInputSystemEPS0_;
Module["__ZN3OIS12InputManager15inputSystemNameEv"] = __ZN3OIS12InputManager15inputSystemNameEv;
Module["__ZN3OIS12InputManager18getNumberOfDevicesENS_4TypeE"] = __ZN3OIS12InputManager18getNumberOfDevicesENS_4TypeE;
Module["__ZN3OIS12InputManager15listFreeDevicesEv"] = __ZN3OIS12InputManager15listFreeDevicesEv;
Module["__ZN3OIS12InputManager17createInputObjectENS_4TypeEbRKNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE"] = __ZN3OIS12InputManager17createInputObjectENS_4TypeEbRKNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE;
Module["__ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_"] = __ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_;
Module["__ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE"] = __ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE;
Module["__ZN3OIS12InputManager17addFactoryCreatorEPNS_14FactoryCreatorE"] = __ZN3OIS12InputManager17addFactoryCreatorEPNS_14FactoryCreatorE;
Module["__ZN3OIS12InputManager20removeFactoryCreatorEPNS_14FactoryCreatorE"] = __ZN3OIS12InputManager20removeFactoryCreatorEPNS_14FactoryCreatorE;
Module["__ZN3OIS12InputManager18enableAddOnFactoryENS0_14AddOnFactoriesE"] = __ZN3OIS12InputManager18enableAddOnFactoryENS0_14AddOnFactoriesE;
Module["__ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_"] = __ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_;
Module["__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv"] = __ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv;
Module["__ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_"] = __ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_;
Module["__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE11__find_leafENS_21__tree_const_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERPNS_16__tree_node_baseISJ_EERKSA_"] = __ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE11__find_leafENS_21__tree_const_iteratorISA_PNS_11__tree_nodeISA_PvEEiEERPNS_16__tree_node_baseISJ_EERKSA_;
Module["__ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_EC2ERKS8_"] = __ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_EC2ERKS8_;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKS8_"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKS8_;
Module["__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv"] = __ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv;
Module["__ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev"] = __ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev;
Module["__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev"] = __ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev;
Module["__ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev"] = __ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev;
Module["__ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev"] = __ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev;
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
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc;
Module["__ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE"] = __ZNSt3__16__treeINS_12__value_typeIPN3OIS6ObjectEPNS2_14FactoryCreatorEEENS_19__map_value_compareIS4_S7_NS_4lessIS4_EELb1EEENS_9allocatorIS7_EEE7destroyEPNS_11__tree_nodeIS7_PvEE;
Module["__ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE"] = __ZNSt3__16__treeINS_12__value_typeIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIS3_SA_NS_4lessIS3_EELb1EEENS7_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE;
Module["__ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE"] = __ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE;
Module["__ZN3OIS8JoyStickC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE"] = __ZN3OIS8JoyStickC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE;
Module["__ZNK3OIS8JoyStick21getNumberOfComponentsENS_13ComponentTypeE"] = __ZNK3OIS8JoyStick21getNumberOfComponentsENS_13ComponentTypeE;
Module["__ZN3OIS8JoyStick21setVector3SensitivityEf"] = __ZN3OIS8JoyStick21setVector3SensitivityEf;
Module["__ZNK3OIS8JoyStick21getVector3SensitivityEv"] = __ZNK3OIS8JoyStick21getVector3SensitivityEv;
Module["__ZN3OIS8JoyStick16setEventCallbackEPNS_16JoyStickListenerE"] = __ZN3OIS8JoyStick16setEventCallbackEPNS_16JoyStickListenerE;
Module["__ZNK3OIS8JoyStick16getEventCallbackEv"] = __ZNK3OIS8JoyStick16getEventCallbackEv;
Module["__ZN3OIS8JoyStickD1Ev"] = __ZN3OIS8JoyStickD1Ev;
Module["__ZN3OIS8JoyStickD0Ev"] = __ZN3OIS8JoyStickD0Ev;
Module["__ZNK3OIS6Object8bufferedEv"] = __ZNK3OIS6Object8bufferedEv;
Module["__ZNK3OIS6Object5getIDEv"] = __ZNK3OIS6Object5getIDEv;
Module["__ZN3OIS13JoyStickStateD1Ev"] = __ZN3OIS13JoyStickStateD1Ev;
Module["__ZN3OIS6ObjectD1Ev"] = __ZN3OIS6ObjectD1Ev;
Module["__ZN3OIS6ObjectD0Ev"] = __ZN3OIS6ObjectD0Ev;
Module["__ZN3OIS13JoyStickState5clearEv"] = __ZN3OIS13JoyStickState5clearEv;
Module["__ZN3OIS8Keyboard18setTextTranslationENS0_19TextTranslationModeE"] = __ZN3OIS8Keyboard18setTextTranslationENS0_19TextTranslationModeE;
Module["__ZNK3OIS8Keyboard14isModifierDownENS0_8ModifierE"] = __ZNK3OIS8Keyboard14isModifierDownENS0_8ModifierE;
Module["__ZN3OIS8KeyboardD1Ev"] = __ZN3OIS8KeyboardD1Ev;
Module["__ZN3OIS8KeyboardD0Ev"] = __ZN3OIS8KeyboardD0Ev;
Module["__ZN3OIS8Keyboard16setEventCallbackEPNS_11KeyListenerE"] = __ZN3OIS8Keyboard16setEventCallbackEPNS_11KeyListenerE;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev;
Module["__ZN3OIS19BrowserInputManagerC2Ev"] = __ZN3OIS19BrowserInputManagerC2Ev;
Module["__ZN3OIS19BrowserInputManagerD0Ev"] = __ZN3OIS19BrowserInputManagerD0Ev;
Module["__ZN3OIS19BrowserInputManagerD2Ev"] = __ZN3OIS19BrowserInputManagerD2Ev;
Module["__ZN3OIS19BrowserInputManager11_initializeERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE"] = __ZN3OIS19BrowserInputManager11_initializeERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE;
Module["__ZN3OIS19BrowserInputManager20_parseConfigSettingsERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE"] = __ZN3OIS19BrowserInputManager20_parseConfigSettingsERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE;
Module["__ZN3OIS19BrowserInputManager17_enumerateDevicesEv"] = __ZN3OIS19BrowserInputManager17_enumerateDevicesEv;
Module["__ZN3OIS19BrowserInputManager12numJoySticksEv"] = __ZN3OIS19BrowserInputManager12numJoySticksEv;
Module["__ZN3OIS19BrowserInputManager7numMiceEv"] = __ZN3OIS19BrowserInputManager7numMiceEv;
Module["__ZN3OIS19BrowserInputManager12numKeyboardsEv"] = __ZN3OIS19BrowserInputManager12numKeyboardsEv;
Module["__ZN3OIS19BrowserInputManager17createInputObjectENS_4TypeEb"] = __ZN3OIS19BrowserInputManager17createInputObjectENS_4TypeEb;
Module["__ZN3OIS19BrowserInputManager18destroyInputObjectEPNS_6ObjectE"] = __ZN3OIS19BrowserInputManager18destroyInputObjectEPNS_6ObjectE;
Module["__ZN3OIS19BrowserInputManager15inputSystemNameEv"] = __ZN3OIS19BrowserInputManager15inputSystemNameEv;
Module["__GLOBAL__I_a"] = __GLOBAL__I_a;
Module["__ZN3OIS15BrowserKeyboardC2Eb"] = __ZN3OIS15BrowserKeyboardC2Eb;
Module["__ZN3OIS15BrowserKeyboard11_initializeEv"] = __ZN3OIS15BrowserKeyboard11_initializeEv;
Module["__ZN3OIS15BrowserKeyboardD0Ev"] = __ZN3OIS15BrowserKeyboardD0Ev;
Module["__ZN3OIS15BrowserKeyboardD2Ev"] = __ZN3OIS15BrowserKeyboardD2Ev;
Module["__ZN3OIS15BrowserKeyboard7captureEv"] = __ZN3OIS15BrowserKeyboard7captureEv;
Module["__ZNSt3__13mapIN3OIS10BrowserKeyENS1_7KeyCodeENS_4lessIS2_EENS_9allocatorINS_4pairIKS2_S3_EEEEEixERS8_"] = __ZNSt3__13mapIN3OIS10BrowserKeyENS1_7KeyCodeENS_4lessIS2_EENS_9allocatorINS_4pairIKS2_S3_EEEEEixERS8_;
Module["__ZN3OIS8KeyEventD1Ev"] = __ZN3OIS8KeyEventD1Ev;
Module["__ZNK3OIS15BrowserKeyboard9isKeyDownENS_7KeyCodeE"] = __ZNK3OIS15BrowserKeyboard9isKeyDownENS_7KeyCodeE;
Module["__ZN3OIS15BrowserKeyboard11getAsStringENS_7KeyCodeE"] = __ZN3OIS15BrowserKeyboard11getAsStringENS_7KeyCodeE;
Module["__ZNK3OIS15BrowserKeyboard13copyKeyStatesEPc"] = __ZNK3OIS15BrowserKeyboard13copyKeyStatesEPc;
Module["__ZN3OIS15BrowserKeyboard11setBufferedEb"] = __ZN3OIS15BrowserKeyboard11setBufferedEb;
Module["__ZN3OIS15BrowserKeyboard18setTextTranslationENS_8Keyboard19TextTranslationModeE"] = __ZN3OIS15BrowserKeyboard18setTextTranslationENS_8Keyboard19TextTranslationModeE;
Module["__ZN3OIS15BrowserKeyboard14queryInterfaceENS_9Interface5ITypeE"] = __ZN3OIS15BrowserKeyboard14queryInterfaceENS_9Interface5ITypeE;
Module["__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc"] = __ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc;
Module["__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_"] = __ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE15__insert_uniqueERKS5_;
Module["__ZN3OIS8KeyEventD0Ev"] = __ZN3OIS8KeyEventD0Ev;
Module["__ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE"] = __ZNSt3__16__treeINS_12__value_typeIN3OIS10BrowserKeyENS2_7KeyCodeEEENS_19__map_value_compareIS3_S5_NS_4lessIS3_EELb1EEENS_9allocatorIS5_EEE7destroyEPNS_11__tree_nodeIS5_PvEE;
Module["__ZN3OIS12BrowserMouseC2Eb"] = __ZN3OIS12BrowserMouseC2Eb;
Module["__ZN3OIS5MouseC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE"] = __ZN3OIS5MouseC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbiPNS_12InputManagerE;
Module["__ZN3OIS12BrowserMouse11_initializeEv"] = __ZN3OIS12BrowserMouse11_initializeEv;
Module["__ZN3OIS12BrowserMouse8_setGrabEb"] = __ZN3OIS12BrowserMouse8_setGrabEb;
Module["__ZN3OIS12BrowserMouse11_setVisibleEb"] = __ZN3OIS12BrowserMouse11_setVisibleEb;
Module["__ZN3OIS12BrowserMouseD0Ev"] = __ZN3OIS12BrowserMouseD0Ev;
Module["__ZN3OIS12BrowserMouseD2Ev"] = __ZN3OIS12BrowserMouseD2Ev;
Module["__ZN3OIS12BrowserMouse7captureEv"] = __ZN3OIS12BrowserMouse7captureEv;
Module["__ZN3OIS10MouseEventD1Ev"] = __ZN3OIS10MouseEventD1Ev;
Module["__ZN3OIS12BrowserMouse11setBufferedEb"] = __ZN3OIS12BrowserMouse11setBufferedEb;
Module["__ZN3OIS12BrowserMouse14queryInterfaceENS_9Interface5ITypeE"] = __ZN3OIS12BrowserMouse14queryInterfaceENS_9Interface5ITypeE;
Module["__ZN3OIS5Mouse16setEventCallbackEPNS_13MouseListenerE"] = __ZN3OIS5Mouse16setEventCallbackEPNS_13MouseListenerE;
Module["__ZN3OIS10MouseEventD0Ev"] = __ZN3OIS10MouseEventD0Ev;
Module["__ZN3OIS5MouseD1Ev"] = __ZN3OIS5MouseD1Ev;
Module["__ZN3OIS5MouseD0Ev"] = __ZN3OIS5MouseD0Ev;
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
//LIB_DATA:{"sym_deps":{"libs":{},"variable":{"__ZTVN10__cxxabiv121__vmi_class_type_infoE":false,"__ZTVSt12length_error":false,"__ZNSt3__17num_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE2idE":false,"___dso_handle":false,"__ZTVN10__cxxabiv117__class_type_infoE":false,"__ZNSt3__15ctypeIcE2idE":false,"__ZTVN10__cxxabiv120__si_class_type_infoE":false,"__ZTINSt3__18ios_baseE":false,"__ZTISt12length_error":false},"func":{"__ZNSt11logic_errorC2EPKc":false,"_strlen":false,"_llvm_lifetime_start":false,"_llvm_memcpy_p0i8_p0i8_i32":false,"__ZNKSt3__16locale9use_facetERNS0_2idE":false,"__ZNKSt3__18ios_base6getlocEv":false,"__ZSt9terminatev":false,"___gxx_personality_v0":false,"_emscripten_asm_const_int":false,"___cxa_free_exception":false,"___cxa_allocate_exception":false,"__ZSt18uncaught_exceptionv":false,"_malloc":false,"_llvm_memset_p0i8_i64":false,"__ZNSt3__16localeD1Ev":false,"___cxa_begin_catch":false,"___cxa_end_catch":false,"_calloc":false,"_realloc":false,"__ZNSt12length_errorD1Ev":false,"__ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv":false,"__ZNSt3__18ios_baseD2Ev":false,"__ZdlPv":false,"_main":false,"_memcmp":false,"_free":false,"___cxa_atexit":false,"__Znwj":false,"___cxa_throw":false,"___cxa_rethrow":false,"__ZNSt3__18ios_base5clearEj":false,"_llvm_memmove_p0i8_p0i8_i32":false,"_llvm_lifetime_end":false,"_llvm_memset_p0i8_i32":false,"__ZNSt3__18ios_base4initEPv":false,"___cxa_pure_virtual":false,"__ZNSt3__16localeC1Ev":false}}}
//END_LIB_DATA
