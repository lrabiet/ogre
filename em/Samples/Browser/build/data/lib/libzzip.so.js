// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
var _libzzip_so_js=(function(FUNCTION_TABLE_OFFSET, parentModule) {
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
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var _zzip_get_default_ext_ext;
_zzip_get_default_ext_ext=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["_zzip_get_default_ext_ext"] = _zzip_get_default_ext_ext;
var _errnolist;
_errnolist=allocate([254,255,255,255,32,0,0,0,253,255,255,255,29,0,0,0,252,255,255,255,12,0,0,0,251,255,255,255,24,0,0,0,250,255,255,255,8,0,0,0,235,239,255,255,20,0,0,0,234,239,255,255,66,0,0,0,233,239,255,255,29,0,0,0,232,239,255,255,86,0,0,0,231,239,255,255,8,0,0,0,230,239,255,255,123,0,0,0,229,239,255,255,27,0,0,0,236,239,255,255,12,0,0,0,228,239,255,255,2,0,0,0,227,239,255,255,96,0,0,0,225,239,255,255,84,0,0,0,224,239,255,255,22,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["_errnolist"] = _errnolist;
var _errlist;
_errlist=allocate([0,0,0,0,0,0,0,0,236,239,255,255,0,0,0,0,235,239,255,255,0,0,0,0,234,239,255,255,0,0,0,0,233,239,255,255,0,0,0,0,232,239,255,255,0,0,0,0,231,239,255,255,0,0,0,0,230,239,255,255,0,0,0,0,229,239,255,255,0,0,0,0,228,239,255,255,0,0,0,0,227,239,255,255,0,0,0,0,225,239,255,255,0,0,0,0,224,239,255,255,0,0,0,0,223,239,255,255,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["_errlist"] = _errlist;
var _dirsep_strcasecmp_mapping;
_dirsep_strcasecmp_mapping=allocate([64,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,91,47,93,94,95,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["_dirsep_strcasecmp_mapping"] = _dirsep_strcasecmp_mapping;
var _default_io;
_default_io=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["_default_io"] = _default_io;
var __str925;
__str925=allocate([78,111,32,115,117,99,104,32,102,105,108,101,32,102,111,117,110,100,32,105,110,32,122,105,112,45,102,105,108,101,32,37,115,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str925"] = __str925;
var __str9;
__str9=allocate([100,105,114,101,99,116,111,114,121,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str9"] = __str9;
var __str824;
__str824=allocate([68,105,114,101,99,116,111,114,121,32,115,105,122,101,32,116,111,111,32,98,105,103,46,46,46,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str824"] = __str824;
var __str8;
__str8=allocate([122,105,112,112,101,100,0,0], "i8", ALLOC_NORMAL);
Module["__str8"] = __str8;
var __str723;
__str723=allocate([122,105,112,45,102,105,108,101,32,99,101,110,116,114,97,108,32,100,105,114,101,99,116,111,114,121,32,110,111,116,32,102,111,117,110,100,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str723"] = __str723;
var __str7;
__str7=allocate([105,109,112,108,111,100,101,100,88,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str7"] = __str7;
var __str622;
__str622=allocate([122,105,112,45,102,105,108,101,32,37,115,32,116,111,111,32,115,104,111,114,116,0,0,0], "i8", ALLOC_NORMAL);
Module["__str622"] = __str622;
var __str6;
__str6=allocate([100,101,102,108,97,116,101,100,88,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str6"] = __str6;
var __str521;
__str521=allocate([70,97,105,108,101,100,32,116,111,32,114,101,97,100,32,122,105,112,45,102,105,108,101,32,37,115,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str521"] = __str521;
var __str5;
__str5=allocate([100,101,102,108,97,116,101,100,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str5"] = __str5;
var __str47;
__str47=allocate([116,111,107,101,110,105,122,101,100,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str47"] = __str47;
var __str420;
__str420=allocate([70,97,105,108,101,100,32,116,111,32,108,115,101,101,107,32,122,105,112,45,102,105,108,101,32,37,115,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str420"] = __str420;
var __str4;
__str4=allocate([115,116,111,114,101,100,0,0], "i8", ALLOC_NORMAL);
Module["__str4"] = __str4;
var __str319;
__str319=allocate([70,97,105,108,101,100,32,116,111,32,102,115,116,97,116,32,122,105,112,45,102,105,108,101,32,37,115,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str319"] = __str319;
var __str3;
__str3=allocate([105,109,112,108,111,100,101,100,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str3"] = __str3;
var __str26;
__str26=allocate([114,101,100,117,99,101,100,0], "i8", ALLOC_NORMAL);
Module["__str26"] = __str26;
var __str218;
__str218=allocate([70,97,105,108,101,100,32,116,111,32,111,112,101,110,32,122,105,112,45,102,105,108,101,32,37,115,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str218"] = __str218;
var __str2;
__str2=allocate([114,98,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str2"] = __str2;
var __str16;
__str16=allocate([78,111,32,101,114,114,111,114,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str16"] = __str16;
var __str159;
__str159=allocate([115,112,101,99,105,97,108,0], "i8", ALLOC_NORMAL);
Module["__str159"] = __str159;
var __str15;
__str15=allocate([115,104,114,117,110,107,0,0], "i8", ALLOC_NORMAL);
Module["__str15"] = __str15;
var __str14;
__str14=allocate([105,115,47,108,110,107,0,0], "i8", ALLOC_NORMAL);
Module["__str14"] = __str14;
var __str138;
__str138=allocate([105,115,47,115,111,99,107,0], "i8", ALLOC_NORMAL);
Module["__str138"] = __str138;
var __str1329;
__str1329=allocate([68,105,114,101,99,116,111,114,121,32,105,115,32,108,97,114,103,101,102,105,108,101,32,118,97,114,105,97,110,116,0,0], "i8", ALLOC_NORMAL);
Module["__str1329"] = __str1329;
var __str13;
__str13=allocate([49,46,50,46,53,0,0,0], "i8", ALLOC_NORMAL);
Module["__str13"] = __str13;
var __str1228;
__str1228=allocate([83,111,109,101,32,117,110,100,101,102,105,110,101,100,32,101,114,114,111,114,32,111,99,99,117,114,114,101,100,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1228"] = __str1228;
var __str12;
__str12=allocate([105,115,47,102,105,102,111,0], "i8", ALLOC_NORMAL);
Module["__str12"] = __str12;
var __str117;
__str117=allocate([99,111,117,108,100,32,110,111,116,32,103,101,116,32,116,101,109,112,111,114,97,114,121,32,109,101,109,111,114,121,32,102,111,114,32,105,110,116,101,114,110,97,108,32,115,116,114,117,99,116,117,114,101,115,0,0], "i8", ALLOC_NORMAL);
Module["__str117"] = __str117;
var __str1127;
__str1127=allocate([90,105,112,102,105,108,101,32,99,111,114,114,117,112,116,101,100,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1127"] = __str1127;
var __str11;
__str11=allocate([105,115,47,98,108,107,0,0], "i8", ALLOC_NORMAL);
Module["__str11"] = __str11;
var __str1026;
__str1026=allocate([85,110,115,117,112,112,111,114,116,101,100,32,99,111,109,112,114,101,115,115,105,111,110,32,102,111,114,109,97,116,0,0], "i8", ALLOC_NORMAL);
Module["__str1026"] = __str1026;
var __str10;
__str10=allocate([105,115,47,99,104,114,0,0], "i8", ALLOC_NORMAL);
Module["__str10"] = __str10;
var __str1;
__str1=allocate([46,90,73,80,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str1"] = __str1;
var __str;
__str=allocate([46,122,105,112,0,0,0,0], "i8", ALLOC_NORMAL);
Module["__str"] = __str;
/* no memory initializer */
function runPostSets() {
HEAP32[((_zzip_get_default_ext_ext)>>2)]=((__str)|0);
HEAP32[(((_zzip_get_default_ext_ext)+(4))>>2)]=((__str1)|0);
HEAP32[(((_errlist)+(4))>>2)]=((__str16)|0);
HEAP32[(((_errlist)+(12))>>2)]=((__str117)|0);
HEAP32[(((_errlist)+(20))>>2)]=((__str218)|0);
HEAP32[(((_errlist)+(28))>>2)]=((__str319)|0);
HEAP32[(((_errlist)+(36))>>2)]=((__str420)|0);
HEAP32[(((_errlist)+(44))>>2)]=((__str521)|0);
HEAP32[(((_errlist)+(52))>>2)]=((__str622)|0);
HEAP32[(((_errlist)+(60))>>2)]=((__str723)|0);
HEAP32[(((_errlist)+(68))>>2)]=((__str824)|0);
HEAP32[(((_errlist)+(76))>>2)]=((__str925)|0);
HEAP32[(((_errlist)+(84))>>2)]=((__str1026)|0);
HEAP32[(((_errlist)+(92))>>2)]=((__str1127)|0);
HEAP32[(((_errlist)+(100))>>2)]=((__str1228)|0);
HEAP32[(((_errlist)+(108))>>2)]=((__str1329)|0);
HEAP32[((_default_io)>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_default_io)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_default_io)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_default_io)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_default_io)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_default_io)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
}
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_dirsep_strcasecmp,0,_strcmp,0,_zzip_filesize,0,_dirsep_basename,0,_read,0,_open,0,_strrchr_basename,0,_lseek,0,_strcasecmp,0,_write,0,_close,0]);
// EMSCRIPTEN_START_FUNCS
function ___zzip_fetch_disk_trailer(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23;r5=0;r6=STACKTOP;STACKTOP=STACKTOP+1024|0;r7=r6;r8=r7|0;if((r3|0)==0){r9=22;STACKTOP=r6;return r9}if((r2|0)<22){r9=-4121;STACKTOP=r6;return r9}r10=r4+12|0;r11=r4+8|0;L7:do{if((r2|0)>512){r4=r2;while(1){r12=(r4|0)==(r2|0)?r4-512|0:r4;do{if((r12|0)<512){r13=0;r14=r12+512|0}else{r15=r12-512|0;r16=r15&511;if((r16|0)==0){r13=r15;r14=1024;break}r17=512-r16|0;r13=r17+r15|0;r14=1024-r17|0}}while(0);r12=r2-r13|0;r17=(r13+r14|0)>(r2|0)?r12:r14;if((FUNCTION_TABLE[HEAP32[r10>>2]](r1,r13,0)|0)<0){r9=-4119;r5=47;break}if((FUNCTION_TABLE[HEAP32[r11>>2]](r1,r8,r17)|0)<(r17|0)){r9=-4120;r5=48;break}r15=r17-1|0;if((r15|0)>=0){r16=r7+r17|0;r17=r7+r15|0;while(1){do{if((HEAP8[r17]|0)==80){r15=r16-r17|0;if((r15|0)<20){break}do{if((HEAP8[r17+1|0]|0)==75){if((HEAP8[r17+2|0]|0)!=5){break}if((HEAP8[r17+3|0]|0)==6){r18=r17;r19=r13;r5=37;break L7}}}while(0);if((r15|0)<54){break}if((HEAP8[r17+1|0]|0)!=75){break}if((HEAP8[r17+2|0]|0)!=6){break}if((HEAP8[r17+3|0]|0)==6){r20=r17;r5=42;break L7}}}while(0);r21=r17-1|0;if(r21>>>0<r8>>>0){break}else{r17=r21}}}if((r13|0)<1|(r12|0)>65536){r9=-4122;r5=49;break}else{r4=r13}}if(r5==47){STACKTOP=r6;return r9}else if(r5==48){STACKTOP=r6;return r9}else if(r5==49){STACKTOP=r6;return r9}}else{r4=r2;while(1){do{if((r4|0)<512){r22=0;r23=r4+512|0}else{r17=r4-512|0;r16=r17&511;if((r16|0)==0){r22=r17;r23=1024;break}r21=512-r16|0;r22=r21+r17|0;r23=1024-r21|0}}while(0);r12=r2-r22|0;r21=(r22+r23|0)>(r2|0)?r12:r23;if((FUNCTION_TABLE[HEAP32[r10>>2]](r1,r22,0)|0)<0){r9=-4119;r5=51;break}if((FUNCTION_TABLE[HEAP32[r11>>2]](r1,r8,r21)|0)<(r21|0)){r9=-4120;r5=52;break}r17=r21-1|0;if((r17|0)>=0){r16=r7+r21|0;r21=r7+r17|0;while(1){do{if((HEAP8[r21]|0)==80){r17=r16-r21|0;if((r17|0)<20){break}do{if((HEAP8[r21+1|0]|0)==75){if((HEAP8[r21+2|0]|0)!=5){break}if((HEAP8[r21+3|0]|0)==6){r18=r21;r19=r22;r5=37;break L7}}}while(0);if((r17|0)<54){break}if((HEAP8[r21+1|0]|0)!=75){break}if((HEAP8[r21+2|0]|0)!=6){break}if((HEAP8[r21+3|0]|0)==6){r20=r21;r5=42;break L7}}}while(0);r15=r21-1|0;if(r15>>>0<r8>>>0){break}else{r21=r15}}}if((r22|0)<1|(r12|0)>65536){r9=-4122;r5=50;break}else{r4=r22}}if(r5==50){STACKTOP=r6;return r9}else if(r5==51){STACKTOP=r6;return r9}else if(r5==52){STACKTOP=r6;return r9}}}while(0);if(r5==37){HEAP32[r3+8>>2]=___zzip_get16(r18+8|0)&65535;HEAP32[r3+12>>2]=___zzip_get16(r18+10|0)&65535;HEAP32[r3+16>>2]=___zzip_get32(r18+16|0);HEAP32[r3+20>>2]=___zzip_get32(r18+12|0);HEAP32[r3>>2]=r18+r19-r7;r9=0;STACKTOP=r6;return r9}else if(r5==42){HEAP32[r3>>2]=r20;r5=___zzip_get64(r20+24|0);HEAP32[r3+8>>2]=r5;r5=___zzip_get64(r20+32|0);HEAP32[r3+12>>2]=r5;r5=___zzip_get64(r20+48|0);HEAP32[r3+16>>2]=r5;r5=___zzip_get64(r20+40|0);HEAP32[r3+20>>2]=r5;r9=0;STACKTOP=r6;return r9}}function ___zzip_parse_root_directory(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38;r5=0;r6=STACKTOP;STACKTOP=STACKTOP+48|0;r7=r6;r8=HEAP32[r2+8>>2];r9=HEAP32[r2+20>>2];r10=HEAP32[r2+16>>2];r11=HEAP32[r2>>2]-r9|0;r2=(r10|0)>(r11|0)?r11:r10;r10=_malloc(r9);r11=r10;if((r10|0)==0){r12=-4123;STACKTOP=r6;return r12}do{if((r8|0)>0){r10=r4+12|0;r13=r4+8|0;r14=r7|0;r15=r7+1|0;r16=r7+2|0;r17=r7+3|0;r18=r7+28|0;r19=r7+16|0;r20=r7+20|0;r21=r7+24|0;r22=r7+42|0;r23=r7+10|0;r24=r7+32|0;r25=r7+30|0;r26=0;r27=0;r28=0;r29=r11;while(1){if((FUNCTION_TABLE[HEAP32[r10>>2]](r1,r26+r2|0,0)|0)<0){r12=-4119;r5=22;break}if((FUNCTION_TABLE[HEAP32[r13>>2]](r1,r14,46)|0)<46){r12=-4120;r5=23;break}r30=r26+46|0;if((r30|0)>(r9|0)|(r30|0)<0){r31=r27;r32=r28;break}if((HEAP8[r14]|0)!=80){r31=r27;r32=r28;break}if((HEAP8[r15]|0)!=75){r31=r27;r32=r28;break}if((HEAP8[r16]|0)!=1){r31=r27;r32=r28;break}if((HEAP8[r17]|0)!=2){r31=r27;r32=r28;break}r33=___zzip_get16(r18);HEAP32[r29+8>>2]=___zzip_get32(r19);HEAP32[r29+4>>2]=___zzip_get32(r20);HEAP32[r29>>2]=___zzip_get32(r21);HEAP32[r29+12>>2]=___zzip_get32(r22);r34=___zzip_get16(r23);HEAP8[r29+20|0]=(r34&255)==255?-1:r34&255;r34=r33&65535;r35=r34+r30|0;if((r35|0)>(r9|0)|(r35|0)<0){r31=r27;r32=r28;break}r30=___zzip_get16(r24);r36=___zzip_get16(r25);FUNCTION_TABLE[HEAP32[r13>>2]](r1,r29+21|0,r34);HEAP8[r34+(r29+21)|0]=0;HEAP16[r29+18>>1]=r33;r33=r35+(r30&65535)+(r36&65535)|0;if((r33|0)>(r9|0)){r5=13;break}r36=r29+16|0;r30=r29+24|0;r35=r34+1|0;r34=r30+r35&1;r37=r30+((r30+(r34+r35)&2|r34)+r35)|0;HEAP16[r36>>1]=r37-r29;r35=r27+1|0;if((r35|0)<(r8|0)){r26=r33;r27=r35;r28=r36;r29=r37}else{r31=r35;r32=r36;break}}if(r5==22){STACKTOP=r6;return r12}else if(r5==23){STACKTOP=r6;return r12}else if(r5==13){r31=r27+1|0;r32=r28}if((r32|0)==0){r38=r31;break}HEAP16[r32>>1]=0;if((r3|0)==0){r38=r31;break}HEAP32[r3>>2]=r11;r38=r31}else{r38=0}}while(0);r12=(r38|0)!=(r8|0)?-4127:0;STACKTOP=r6;return r12}function _zzip_dir_alloc_ext_io(r1,r2){var r3,r4,r5;r3=_calloc(1,68);if((r3|0)==0){r4=0;return r4}HEAP32[r3+60>>2]=(r1|0)==0?_zzip_get_default_ext_ext|0:r1;if((r2|0)==0){r5=_zzip_get_default_io()}else{r5=r2}HEAP32[r3+64>>2]=r5;r4=r3;return r4}function _zzip_dir_alloc(r1){var r2,r3;r2=_calloc(1,68);if((r2|0)==0){r3=0;return r3}HEAP32[r2+60>>2]=(r1|0)==0?_zzip_get_default_ext_ext|0:r1;HEAP32[r2+64>>2]=_zzip_get_default_io();r3=r2;return r3}function _zzip_dir_free(r1){var r2,r3;r2=HEAP32[r1+8>>2];if((r2|0)!=0){r3=r2;return r3}r2=HEAP32[r1>>2];if((r2|0)>-1){FUNCTION_TABLE[HEAP32[HEAP32[r1+64>>2]+4>>2]](r2)}r3=0;return r3}function _zzip_dir_close(r1){var r2;r2=r1+8|0;HEAP32[r2>>2]=HEAP32[r2>>2]&-268435457;return _zzip_dir_free(r1)}function _zzip_dir_fdopen(r1,r2){return _zzip_dir_fdopen_ext_io(r1,r2,0,0)}function _zzip_dir_fdopen_ext_io(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13;r5=STACKTOP;STACKTOP=STACKTOP+24|0;r6=r5;r7=_calloc(1,68);r8=r7;if((r7|0)==0){r9=-4116}else{HEAP32[r7+60>>2]=(r3|0)==0?_zzip_get_default_ext_ext|0:r3;if((r4|0)==0){r10=_zzip_get_default_io()}else{r10=r4}r4=r7+64|0;HEAP32[r4>>2]=r10;r3=r7;HEAP32[r3>>2]=r1;r11=FUNCTION_TABLE[HEAP32[r10+16>>2]](r1);do{if((r11|0)<0){r12=-4118}else{r1=___zzip_fetch_disk_trailer(HEAP32[r3>>2],r11,r6,HEAP32[r4>>2]);if((r1|0)!=0){r12=r1;break}r1=r7+24|0;r10=___zzip_parse_root_directory(HEAP32[r3>>2],r6,r1,HEAP32[r4>>2]);if((r10|0)!=0){r12=r10;break}HEAP32[r7+28>>2]=HEAP32[r1>>2];r1=r7+8|0;HEAP32[r1>>2]=HEAP32[r1>>2]|268435456;if((r2|0)==0){r13=r8;STACKTOP=r5;return r13}HEAP32[r2>>2]=0;r13=r8;STACKTOP=r5;return r13}}while(0);_zzip_dir_free(r8);r9=r12}if((r2|0)==0){r13=0;STACKTOP=r5;return r13}HEAP32[r2>>2]=r9;r13=0;STACKTOP=r5;return r13}function ___zzip_try_open(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12;r5=0;r6=0;r7=STACKTOP;STACKTOP=STACKTOP+4096|0;r8=r7;r9=_strlen(r1);if((r9+4|0)>>>0>4095){HEAP32[___errno_location()>>2]=36;r10=-1;STACKTOP=r7;return r10}r11=r8|0;_memcpy(r11,r1,r9+1|0)|0;if((r4|0)==0){r12=_zzip_get_default_io()}else{r12=r4}r4=r8+r9|0;r9=r12|0;r12=(r3|0)==0?_zzip_get_default_ext_ext|0:r3;while(1){r3=HEAP32[r12>>2];if((r3|0)==0){r10=-1;r5=10;break}_strcpy(r4,r3);r3=FUNCTION_TABLE[HEAP32[r9>>2]](r11,r2,(r6=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+7&-8,HEAP32[r6>>2]=0,r6));STACKTOP=r6;if((r3|0)==-1){r12=r12+4|0}else{r10=r3;r5=11;break}}if(r5==10){STACKTOP=r7;return r10}else if(r5==11){STACKTOP=r7;return r10}}function _zzip_dir_open(r1,r2){return _zzip_dir_open_ext_io(r1,r2,0,0)}function _zzip_dir_open_ext_io(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r5=0;r6=STACKTOP;STACKTOP=STACKTOP+4096|0;r7=r6;if((r4|0)==0){r8=_zzip_get_default_io()}else{r8=r4}r4=(r3|0)==0?_zzip_get_default_ext_ext|0:r3;r3=FUNCTION_TABLE[HEAP32[r8>>2]](r1,0,(r5=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+7&-8,HEAP32[r5>>2]=0,r5));STACKTOP=r5;if((r3|0)!=-1){r9=_zzip_dir_fdopen_ext_io(r3,r2,r4,r8);STACKTOP=r6;return r9}r3=r7|0;r10=_strlen(r1);L8:do{if((r10+4|0)>>>0>4095){HEAP32[___errno_location()>>2]=36}else{_memcpy(r3,r1,r10+1|0)|0;if((r8|0)==0){r11=_zzip_get_default_io()}else{r11=r8}r12=r7+r10|0;r13=r11|0;r14=r4;while(1){r15=HEAP32[r14>>2];if((r15|0)==0){break L8}_strcpy(r12,r15);r16=FUNCTION_TABLE[HEAP32[r13>>2]](r3,0,(r5=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+7&-8,HEAP32[r5>>2]=0,r5));STACKTOP=r5;if((r16|0)==-1){r14=r14+4|0}else{break}}r9=_zzip_dir_fdopen_ext_io(r16,r2,r4,r8);STACKTOP=r6;return r9}}while(0);if((r2|0)==0){r9=0;STACKTOP=r6;return r9}HEAP32[r2>>2]=-4117;r9=0;STACKTOP=r6;return r9}function _zzip_dir_read(r1,r2){var r3,r4,r5;if((r1|0)==0){r3=0;return r3}r4=r1+28|0;r1=HEAP32[r4>>2];if((r1|0)==0|(r2|0)==0){r3=0;return r3}HEAP32[r2>>2]=HEAPU8[r1+20|0];HEAP32[r2+4>>2]=HEAP32[HEAP32[r4>>2]+4>>2];HEAP32[r2+8>>2]=HEAP32[HEAP32[r4>>2]>>2];HEAP32[r2+12>>2]=HEAP32[r4>>2]+21;r2=HEAP32[r4>>2];r1=HEAP16[r2+16>>1];if(r1<<16>>16==0){r5=0}else{r5=r2+(r1&65535)|0}HEAP32[r4>>2]=r5;r3=1;return r3}function _zzip_file_close(r1){var r2,r3,r4,r5,r6,r7,r8,r9;r2=0;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;r5=HEAP32[r1>>2];if((HEAP32[r1+8>>2]|0)!=0){_inflateEnd(r1+40|0)}r6=r5+12|0;if((HEAP32[r6>>2]|0)==0){HEAP32[r6>>2]=r4}r7=HEAP32[r1+32>>2];L7:do{if((r7|0)!=0){do{if((HEAP32[r6>>2]|0)==(r4|0)){r8=r5+20|0;if((HEAP32[r8>>2]|0)!=0){break}HEAP32[r8>>2]=r7;break L7}}while(0)}}while(0);r7=r5+32|0;if((HEAP32[r7>>2]|0)==(r1|0)){HEAP32[r7>>2]=0}r7=r5+8|0;HEAP32[r7>>2]=HEAP32[r7>>2]-1;_memset(r1,0,100)|0;do{if((HEAP32[r6>>2]|0)==(r4|0)){r8=r5+16|0;if((HEAP32[r8>>2]|0)!=0){r2=15;break}HEAP32[r8>>2]=r1}else{r2=15}}while(0);if((HEAP32[r6>>2]|0)==(r4|0)){HEAP32[r6>>2]=0}if((HEAP32[r7>>2]|0)!=0){r9=0;STACKTOP=r3;return r9}r9=_zzip_dir_close(r5);STACKTOP=r3;return r9}function _zzip_file_open(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+8|0;r6=r5;r7=HEAP32[r1+24>>2];r8=(r3&4096|0)!=0;r9=r8?FUNCTION_TABLE_OFFSET+2:FUNCTION_TABLE_OFFSET+4;r10=r8?FUNCTION_TABLE_OFFSET+8:FUNCTION_TABLE_OFFSET+14;if((r1|0)==0){r11=0;STACKTOP=r5;return r11}r8=r1|0;r12=HEAP32[r8>>2];if((r12|0)==0|(r12|0)==-1){HEAP32[r1+4>>2]=9;r11=0;STACKTOP=r5;return r11}if((r7|0)==0){HEAP32[r1+4>>2]=2;r11=0;STACKTOP=r5;return r11}L12:do{if((r3&8192|0)==0){r12=r7;while(1){if((FUNCTION_TABLE[r9](r12+21|0,r2)|0)==0){r13=r12;break L12}r14=HEAP16[r12+16>>1];if(r14<<16>>16==0){r4=42;break L12}r12=r12+(r14&65535)|0}}else{r12=FUNCTION_TABLE[r10](r2);r14=r7;while(1){r15=FUNCTION_TABLE[r10](r14+21|0);if((FUNCTION_TABLE[r9](r15,r12)|0)==0){r13=r14;break L12}r15=HEAP16[r14+16>>1];if(r15<<16>>16==0){r4=42;break L12}r14=r14+(r15&65535)|0}}}while(0);if(r4==42){HEAP32[r1+4>>2]=-4124;r11=0;STACKTOP=r5;return r11}r9=r13+20|0;r10=HEAPU8[r9];L26:do{if((r10|0)==0|(r10|0)==8){r7=r1+12|0;if((HEAP32[r7>>2]|0)==0){HEAP32[r7>>2]=r6}do{if((HEAP32[r7>>2]|0)==(r6|0)){r2=r1+16|0;if((HEAP32[r2>>2]|0)==0){r4=18;break}r3=HEAP32[r2>>2];HEAP32[r2>>2]=0;r16=r3;r4=19}else{r4=18}}while(0);if(r4==18){r3=_calloc(1,100);r2=r3;if((r3|0)==0){r17=-4116;r18=r2;r4=43}else{r16=r2;r4=19}}do{if(r4==19){HEAP32[r16>>2]=r1;r2=r1+64|0;HEAP32[r16+96>>2]=HEAP32[r2>>2];r3=r1+8|0;HEAP32[r3>>2]=HEAP32[r3>>2]+1;do{if((HEAP32[r7>>2]|0)==(r6|0)){r3=r1+20|0;if((HEAP32[r3>>2]|0)==0){r4=22;break}HEAP32[r16+32>>2]=HEAP32[r3>>2];HEAP32[r3>>2]=0}else{r4=22}}while(0);if(r4==22){r3=_malloc(32768);HEAP32[r16+32>>2]=r3;if((r3|0)==0){r19=r16;r20=-4116;break}}if((HEAP32[r7>>2]|0)==(r6|0)){HEAP32[r7>>2]=0}r3=r1+32|0;r14=HEAP32[r3>>2];if((r14|0)!=0){r12=FUNCTION_TABLE[HEAP32[HEAP32[r14+96>>2]+12>>2]](HEAP32[HEAP32[r14>>2]>>2],0,1);if((r12|0)<0){r17=-4119;r18=r16;r4=43;break}HEAP32[r14+36>>2]=r12}r12=r13+12|0;HEAP32[r16+36>>2]=HEAP32[r12>>2];HEAP32[r3>>2]=r16;if((FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+12>>2]](HEAP32[r8>>2],HEAP32[r12>>2],0)|0)<0){r17=-4119;r18=r16;r4=43;break}r12=HEAP32[r16+32>>2];if((FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+8>>2]](HEAP32[r8>>2],r12,30)|0)<30){r17=-4120;r18=r16;r4=43;break}if((HEAP8[r12]|0)!=80){r17=-4127;r18=r16;r4=43;break}if((HEAP8[r12+1|0]|0)!=75){r17=-4127;r18=r16;r4=43;break}if((HEAP8[r12+2|0]|0)!=3){r17=-4127;r18=r16;r4=43;break}if((HEAP8[r12+3|0]|0)!=4){r17=-4127;r18=r16;r4=43;break}r3=___zzip_get16(r12+26|0)&65535;r14=(___zzip_get16(r12+28|0)&65535)+r3|0;if((FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+12>>2]](HEAP32[r8>>2],r14,1)|0)<0){r17=-4119;r18=r16;r4=43;break}HEAP32[r16+28>>2]=FUNCTION_TABLE[HEAP32[HEAP32[r2>>2]+12>>2]](HEAP32[r8>>2],0,1);r14=r13|0;HEAP32[r16+20>>2]=HEAP32[r14>>2];r3=r13+4|0;HEAP32[r16+24>>2]=HEAP32[r3>>2];r12=HEAP8[r9];HEAP32[r16+8>>2]=r12&255;HEAP32[r16+12>>2]=HEAP32[r14>>2];if(r12<<24>>24==0){r11=r16;STACKTOP=r5;return r11}r12=r16+40|0;_memset(r12,0,56)|0;r14=_inflateInit2_(r12,-15,__str13|0,56);if((r14|0)==0){HEAP32[r16+16>>2]=HEAP32[r3>>2];r11=r16;STACKTOP=r5;return r11}else{if((r16|0)==0){r21=r14;break L26}_zzip_file_close(r16);r19=r16;r20=r14;break}}}while(0);if(r4==43){if((r18|0)==0){r21=r17;break}else{r19=r18;r20=r17}}_zzip_file_close(r19);r21=r20}else{r21=-4125}}while(0);HEAP32[r1+4>>2]=r21;r11=0;STACKTOP=r5;return r11}function _dirsep_strcasecmp(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r3=0;r4=HEAP8[r1];L1:do{if(r4<<24>>24==0){r5=r2;r3=2}else{r6=r1;r7=r2;r8=r4;while(1){r9=HEAP8[r7];r10=r8&255;r11=r9&255;if(r9<<24>>24==0){r12=r10;r13=r11;break L1}if((r10&224|0)==64){r14=HEAP8[_dirsep_strcasecmp_mapping+(r10&31)|0]|0}else{r14=r10}if((r11&224|0)==64){r15=HEAP8[_dirsep_strcasecmp_mapping+(r11&31)|0]|0}else{r15=r11}if((r14|0)!=(r15|0)){break}r11=r6+1|0;r10=r7+1|0;r9=HEAP8[r11];if(r9<<24>>24==0){r5=r10;r3=2;break L1}else{r6=r11;r7=r10;r8=r9}}r16=r14-r15|0;return r16}}while(0);if(r3==2){r12=0;r13=HEAPU8[r5]}r16=r12-r13|0;return r16}function _dirsep_basename(r1){var r2;r2=_strrchr(r1,47);return(r2|0)==0?r1:r2+1|0}function _strrchr_basename(r1){var r2;r2=_strrchr(r1,47);return(r2|0)==0?r1:r2+1|0}function _zzip_fclose(r1){var r2,r3;if((r1|0)==0){r2=0;return r2}if((HEAP32[r1>>2]|0)==0){r3=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+4>>2]](HEAP32[r1+4>>2]);r2=r3;return r2}else{r2=_zzip_file_close(r1);return r2}}function _zzip_close(r1){var r2,r3;if((r1|0)==0){r2=0;return r2}if((HEAP32[r1>>2]|0)==0){r3=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+4>>2]](HEAP32[r1+4>>2]);r2=r3;return r2}else{r2=_zzip_file_close(r1);return r2}}function _zzip_file_read(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;r4=0;if((r1|0)==0){r5=0;return r5}r6=HEAP32[r1>>2];if((r6|0)==0){r5=0;return r5}r7=r1+12|0;r8=HEAP32[r7>>2];r9=r8>>>0>r3>>>0?r3:r8;if((r8|0)==0){r5=0;return r5}r8=r6+32|0;r3=HEAP32[r8>>2];L10:do{if((r3|0)!=(r1|0)){do{if((r3|0)==0){r4=8}else{r10=FUNCTION_TABLE[HEAP32[HEAP32[r3+96>>2]+12>>2]](HEAP32[HEAP32[r3>>2]>>2],0,1);if((r10|0)<0){break}HEAP32[r3+36>>2]=r10;r4=8}}while(0);do{if(r4==8){if((FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r6>>2],HEAP32[r1+36>>2],0)|0)<0){break}HEAP32[r8>>2]=r1;break L10}}while(0);HEAP32[r6+4>>2]=-4119;r5=-1;return r5}}while(0);if((HEAP32[r1+8>>2]|0)==0){r8=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+8>>2]](HEAP32[r6>>2],r2,r9);if((r8|0)>0){HEAP32[r7>>2]=HEAP32[r7>>2]-r8;r5=r8;return r5}if((r8|0)>=0){r5=0;return r5}HEAP32[r6+4>>2]=-4120;r5=r8;return r5}r8=r1+40|0;r3=r1+56|0;HEAP32[r3>>2]=r9;HEAP32[r1+52>>2]=r2;r2=r1+16|0;r10=r1+60|0;r11=r1+44|0;r12=r1+96|0;r13=r6|0;r14=r1+32|0;r1=r8|0;L32:while(1){r15=HEAP32[r2>>2];do{if((r15|0)!=0){if((HEAP32[r11>>2]|0)!=0){break}r16=FUNCTION_TABLE[HEAP32[HEAP32[r12>>2]+8>>2]](HEAP32[r13>>2],HEAP32[r14>>2],r15>>>0<32768?r15:32768);if((r16|0)<1){r4=16;break L32}HEAP32[r2>>2]=HEAP32[r2>>2]-r16;HEAP32[r11>>2]=r16;HEAP32[r1>>2]=HEAP32[r14>>2]}}while(0);r15=HEAP32[r10>>2];r17=_inflate(r8,0);if((r17|0)==1){r4=19;break}else if((r17|0)!=0){r4=20;break}r16=HEAP32[r7>>2]+(r15-HEAP32[r10>>2])|0;HEAP32[r7>>2]=r16;if((r16|0)==0){break}if((HEAP32[r3>>2]|0)==0){break}}if(r4==19){HEAP32[r7>>2]=0}else if(r4==16){HEAP32[r6+4>>2]=-4120;r5=-1;return r5}else if(r4==20){HEAP32[r6+4>>2]=r17;r5=-1;return r5}r5=r9-HEAP32[r3>>2]|0;return r5}function _zzip_read(r1,r2,r3){var r4,r5,r6;if((r1|0)==0){r4=0;return r4}r5=r1|0;if((HEAP32[r5>>2]|0)==0){r4=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+8>>2]](HEAP32[r1+4>>2],r2,r3);return r4}r6=_zzip_file_read(r1,r2,r3);if((r6|0)!=-1){r4=r6;return r4}r6=_zzip_errno(HEAP32[HEAP32[r5>>2]+4>>2]);HEAP32[___errno_location()>>2]=r6;r4=-1;return r4}function _zzip_fread(r1,r2,r3,r4){var r5,r6,r7;r5=(r2|0)==0?1:r2;r2=Math_imul(r5,r3)|0;do{if((r4|0)==0){r6=0}else{r3=r4|0;if((HEAP32[r3>>2]|0)==0){r6=FUNCTION_TABLE[HEAP32[HEAP32[r4+96>>2]+8>>2]](HEAP32[r4+4>>2],r1,r2);break}r7=_zzip_file_read(r4,r1,r2);if((r7|0)!=-1){r6=r7;break}r7=_zzip_errno(HEAP32[HEAP32[r3>>2]+4>>2]);HEAP32[___errno_location()>>2]=r7;r6=-1}}while(0);return(r6>>>0)/(r5>>>0)&-1}function _zzip_fopen(r1,r2){return _zzip_freopen(r1,r2,0)}function _zzip_freopen(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64;r4=0;r5=(r2|0)==0;r6=r5?__str2|0:r2;r7=HEAP8[r6];r8=r7<<24>>24==0;L1:do{if(r8){r9=0;r10=436}else{r11=0;r12=436;r13=r6;r14=r7;while(1){r15=r14<<24>>24;switch(r15|0){case 114:{r16=r13+1|0;r17=HEAP8[r16];r18=r17<<24>>24==43;r19=r18?2:0;r20=r19|r11;r21=r12;r22=r20;break};case 105:{r23=r12|4096;r21=r23;r22=r11;break};case 42:{r24=r12|8192;r21=r24;r22=r11;break};case 120:{r25=r11|128;r21=r12;r22=r25;break};case 115:{r26=r11|1052672;r21=r12;r22=r26;break};case 110:{r27=r11|2048;r21=r12;r22=r27;break};case 111:{r28=r12&-8;r29=r13+1|0;r30=HEAP8[r29];r31=r30&255;r32=r31&7;r33=r32|r28;r21=r33;r22=r11;break};case 103:{r34=r12&-57;r35=r13+1|0;r36=HEAP8[r35];r37=r36<<24>>24;r38=r37<<3;r39=r38&56;r40=r39|r34;r21=r40;r22=r11;break};case 117:{r41=r12&-449;r42=r13+1|0;r43=HEAP8[r42];r44=r43<<24>>24;r45=r44<<6;r46=r45&448;r47=r46|r41;r21=r47;r22=r11;break};case 113:{r48=r12|131072;r21=r48;r22=r11;break};case 119:{r49=r13+1|0;r50=HEAP8[r49];r51=r50<<24>>24==43;r52=r51?2:1;r53=r11|r52;r54=r53|512;r21=r12;r22=r54;break};case 102:{r55=r11|256;r21=r12;r22=r55;break};default:{r21=r12;r22=r11}}r56=r13+1|0;r57=HEAP8[r56];r58=r57<<24>>24==0;if(r58){r9=r22;r10=r21;break L1}else{r11=r22;r12=r21;r13=r56;r14=r57}}}}while(0);r59=_zzip_open_shared_io(r3,r1,r9,r10,0,0);r60=r10&131072;r61=(r60|0)!=0;r62=(r3|0)==0;r63=r61|r62;if(r63){return r59}r64=_zzip_file_close(r3);return r59}function _zzip_open_shared_io(r1,r2,r3,r4,r5,r6){var r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29;r7=0;r8=0;r9=STACKTOP;STACKTOP=STACKTOP+4104|0;r10=r9;r11=r9+4096;r12=(r1|0)!=0;do{if(r12){r13=HEAP32[r1>>2];if((r13|0)==0){r14=r5;r15=r6;r7=7;break}if((r5|0)==0){r16=HEAP32[r13+60>>2]}else{r16=r5}if((r6|0)!=0){r17=r6;r18=r16;break}r14=r16;r15=HEAP32[r13+64>>2];r7=7}else{r14=r5;r15=r6;r7=7}}while(0);do{if(r7==7){if((r15|0)!=0){r17=r15;r18=r14;break}r17=_zzip_get_default_io();r18=r14}}while(0);if((r4&81920|0)==0){r19=r3;r7=10}else{r20=r3}L12:while(1){if(r7==10){r7=0;if((r4&262144|0)==0){r21=r17}else{r21=_zzip_get_default_io()}r22=FUNCTION_TABLE[HEAP32[r21>>2]](r2,r19,(r8=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+7&-8,HEAP32[r8>>2]=0,r8));STACKTOP=r8;if((r22|0)!=-1){r7=13;break}if((r4&16384|0)==0){r20=r19}else{r23=0;r7=49;break}}if((r20&65|0)!=0){r7=18;break}r3=(r20&2|0)==0?r20:r20^2;r14=_strlen(r2);if((r14|0)>4095){r7=20;break}r24=r10|0;_memcpy(r24,r2,r14+1|0)|0;do{if(r12){r25=r1|0;r26=HEAP32[r25>>2];if((r26|0)==0){break}r14=HEAP32[r26+56>>2];if((r14|0)==0){break}r15=_strlen(r14);if((_memcmp(r2,r14,r15)|0)!=0){break}if((HEAP8[r2+r15|0]|0)!=47){break}r27=r2+(r15+1)|0;if((HEAP8[r27]|0)!=0){r7=27;break L12}}}while(0);while(1){r28=_strrchr(r24,47);if((r28|0)==0){break}HEAP32[r11>>2]=0;HEAP8[r28]=0;r29=___zzip_try_open(r24,r3,r18,r17);if((r29|0)!=-1){r7=31;break L12}}if((r4&16384|0)==0){r7=39;break}else{r19=r3;r7=10}}if(r7==13){r19=_calloc(1,100);if((r19|0)==0){FUNCTION_TABLE[HEAP32[r21+4>>2]](r22);r23=0;STACKTOP=r9;return r23}else{HEAP32[r19+4>>2]=r22;HEAP32[r19+96>>2]=r21;r23=r19;STACKTOP=r9;return r23}}else if(r7==31){r19=_zzip_dir_fdopen_ext_io(r29,r11,r18,r17);r18=HEAP32[r11>>2];if((r18|0)!=0){r11=_zzip_errno(r18);HEAP32[___errno_location()>>2]=r11;FUNCTION_TABLE[HEAP32[r17+4>>2]](r29);r23=0;STACKTOP=r9;return r23}r29=_zzip_file_open(r19,r2+(1-r10+r28)|0,r4);do{if((r29|0)==0){r28=_zzip_errno(HEAP32[r19+4>>2]);HEAP32[___errno_location()>>2]=r28}else{r28=r19+56|0;if((HEAP32[r28>>2]|0)!=0){break}HEAP32[r28>>2]=_strdup(r24)}}while(0);_zzip_dir_close(r19);r23=r29;STACKTOP=r9;return r23}else if(r7==20){HEAP32[___errno_location()>>2]=36;r23=0;STACKTOP=r9;return r23}else if(r7==18){HEAP32[___errno_location()>>2]=22;r23=0;STACKTOP=r9;return r23}else if(r7==39){HEAP32[___errno_location()>>2]=2;r23=0;STACKTOP=r9;return r23}else if(r7==27){r29=_zzip_file_open(r26,r27,r4);if((r29|0)!=0){r23=r29;STACKTOP=r9;return r23}r29=_zzip_errno(HEAP32[HEAP32[r25>>2]+4>>2]);HEAP32[___errno_location()>>2]=r29;r23=0;STACKTOP=r9;return r23}else if(r7==49){STACKTOP=r9;return r23}}function _zzip_open(r1,r2){var r3,r4,r5,r6;r3=r2&1024;r4=(r3|0)==0?r2:r2^1024;r2=r3<<2;if((r4&512|0)==0){r5=r2|436;r6=r4}else{r5=r2|8628;r6=r4^512}return _zzip_open_shared_io(0,r1,r6,r5,0,0)}function _zzip_open_ext_io(r1,r2,r3,r4,r5){return _zzip_open_shared_io(0,r1,r2,r3,r4,r5)}function _zzip_rewind(r1){var r2,r3,r4,r5,r6;if((r1|0)==0){r2=-1;return r2}r3=HEAP32[r1>>2];if((r3|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r1+4>>2],0,0);r2=0;return r2}r4=r3+32|0;r5=HEAP32[r4>>2];if((r5|0)!=(r1|0)){do{if((r5|0)!=0){r6=FUNCTION_TABLE[HEAP32[HEAP32[r5+96>>2]+12>>2]](HEAP32[HEAP32[r5>>2]>>2],0,1);if((r6|0)>=0){HEAP32[r5+36>>2]=r6;break}HEAP32[r3+4>>2]=-4119;r2=-1;return r2}}while(0);HEAP32[r4>>2]=r1}r4=r1+28|0;if((FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r3>>2],HEAP32[r4>>2],0)|0)<0){r2=-1;return r2}HEAP32[r1+12>>2]=HEAP32[r1+20>>2];HEAP32[r1+36>>2]=HEAP32[r4>>2];if((HEAP32[r1+8>>2]|0)==0){r2=0;return r2}r4=_inflateReset(r1+40|0);if((r4|0)==0){HEAP32[r1+44>>2]=0;HEAP32[r1+16>>2]=HEAP32[r1+24>>2];r2=0;return r2}else{_zzip_file_close(r1);r2=r4;return r2}}function _zzip_seek(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r4=0;if((r1|0)==0){r5=-1;return r5}r6=r1|0;if((HEAP32[r6>>2]|0)==0){r5=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r1+4>>2],r2,r3);return r5}r7=r1+20|0;r8=HEAP32[r7>>2];r9=r1+12|0;r10=r8-HEAP32[r9>>2]|0;if((r3|0)==0){r11=r2-r10|0}else if((r3|0)==1){r11=r2}else if((r3|0)==2){r11=r2-r10+r8|0}else{r5=-1;return r5}if((r11|0)==0){r5=r10;return r5}do{if((r11|0)<0){if((_zzip_rewind(r1)|0)==-1){r5=-1;return r5}r2=r11+r10|0;if((r2|0)<0){r5=-1;return r5}else{r12=r2;r13=0;r14=HEAP32[r7>>2];break}}else{r12=r11;r13=r10;r14=r8}}while(0);if((r12+r13|0)>(r14|0)){r5=-1;return r5}if((r12|0)==0){r5=r13;return r5}r13=HEAP32[r6>>2];r14=r13+32|0;r8=HEAP32[r14>>2];L31:do{if((r8|0)!=(r1|0)){do{if((r8|0)==0){r4=18}else{r10=FUNCTION_TABLE[HEAP32[HEAP32[r8+96>>2]+12>>2]](HEAP32[HEAP32[r8>>2]>>2],0,1);if((r10|0)<0){break}HEAP32[r8+36>>2]=r10;r4=18}}while(0);do{if(r4==18){if((FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r13>>2],HEAP32[r1+36>>2],0)|0)<0){break}HEAP32[r14>>2]=r1;break L31}}while(0);HEAP32[r13+4>>2]=-4119;r5=-1;return r5}}while(0);if((HEAP32[r1+8>>2]|0)==0){r14=r1+96|0;r8=r13|0;FUNCTION_TABLE[HEAP32[HEAP32[r14>>2]+12>>2]](HEAP32[r8>>2],0,1);r13=FUNCTION_TABLE[HEAP32[HEAP32[r14>>2]+12>>2]](HEAP32[r8>>2],r12,1);if((r13|0)<=0){r5=r13;return r5}r8=r13-HEAP32[r1+28>>2]|0;HEAP32[r9>>2]=HEAP32[r7>>2]-r8;r5=r8;return r5}r8=_malloc(32768);if((r8|0)==0){r5=-1;return r5}else{r15=r12}while(1){if((r15|0)<=0){break}r12=_zzip_file_read(r1,r8,(r15|0)<32768?r15:32768);if((r12|0)<1){r4=27;break}else{r15=r15-r12|0}}if(r4==27){r5=-1;return r5}if((HEAP32[r6>>2]|0)==0){r5=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r1+4>>2],0,1);return r5}else{r5=HEAP32[r7>>2]-HEAP32[r9>>2]|0;return r5}}function _zzip_tell(r1){var r2;if((r1|0)==0){r2=-1;return r2}if((HEAP32[r1>>2]|0)==0){r2=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r1+4>>2],0,1);return r2}else{r2=HEAP32[r1+20>>2]-HEAP32[r1+12>>2]|0;return r2}}function _zzip_tell32(r1){var r2;if((r1|0)==0){r2=-1;return r2}if((HEAP32[r1>>2]|0)==0){r2=FUNCTION_TABLE[HEAP32[HEAP32[r1+96>>2]+12>>2]](HEAP32[r1+4>>2],0,1);return r2}else{r2=HEAP32[r1+20>>2]-HEAP32[r1+12>>2]|0;return r2}}function _zzip_seek32(r1,r2,r3){return _zzip_seek(r1,r2,r3)}function _zzip_rewinddir(r1){var r2,r3;if((r1|0)==0){return}r2=HEAP32[r1+52>>2];if((r2|0)!=0){_rewinddir(r2);return}r2=HEAP32[r1+24>>2];r3=r1+28|0;if((r2|0)==0){HEAP32[r3>>2]=0;return}else{HEAP32[r3>>2]=r2;return}}function _zzip_readdir(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10;r2=STACKTOP;STACKTOP=STACKTOP+4176|0;r3=r2;r4=r2+80;if((r1|0)==0){HEAP32[___errno_location()>>2]=9;r5=0;STACKTOP=r2;return r5}r6=HEAP32[r1+52>>2];do{if((r6|0)==0){r7=r1+28|0;r8=HEAP32[r7>>2];if((r8|0)==0){r5=0;STACKTOP=r2;return r5}HEAP32[r1+48>>2]=r8+21;HEAP32[r1+36>>2]=HEAPU8[r8+20|0];HEAP32[r1+40>>2]=HEAP32[r8+4>>2];HEAP32[r1+44>>2]=HEAP32[r8>>2];r9=HEAP16[r8+16>>1];if(r9<<16>>16==0){HEAP32[r7>>2]=0;break}else{HEAP32[r7>>2]=r8+(r9&65535);break}}else{r9=r4|0;_memset(r3,0,76)|0;r8=_readdir(r6);if((r8|0)==0){r5=0;STACKTOP=r2;return r5}r7=r8+11|0;r8=r1+36|0;HEAP32[r1+48>>2]=r7;_strcpy(r9,HEAP32[r1+56>>2]);r10=r4+_strlen(r9)|0;tempBigInt=47;HEAP8[r10]=tempBigInt;tempBigInt=tempBigInt>>8;HEAP8[r10+1|0]=tempBigInt;_strcat(r9,r7);if((_stat(r9,r3)|0)==-1){break}r9=HEAP32[r3+36>>2];HEAP32[r1+44>>2]=r9;HEAP32[r1+40>>2]=r9;r9=HEAP32[r3+12>>2];if((r9|0)==0){HEAP32[r8>>2]=0;break}r7=r8|0;if((r9&61440|0)==32768){HEAP32[r7>>2]=0;break}else{HEAP32[r7>>2]=r9|-2147483648;break}}}while(0);r5=r1+36|0;STACKTOP=r2;return r5}function _zzip_telldir(r1){var r2,r3;if((r1|0)==0){HEAP32[___errno_location()>>2]=9;r2=-1;return r2}r3=HEAP32[r1+52>>2];if((r3|0)==0){r2=HEAP32[r1+28>>2]-HEAP32[r1+24>>2]|0;return r2}else{r2=_telldir(r3);return r2}}function _zzip_seekdir(r1,r2){var r3,r4;if((r1|0)==0){return}r3=HEAP32[r1+52>>2];if((r3|0)!=0){_seekdir(r3,r2);return}r3=HEAP32[r1+24>>2];if((r3|0)==0){r4=0}else{r4=r3+r2|0}HEAP32[r1+28>>2]=r4;return}function _zzip_telldir32(r1){var r2,r3;if((r1|0)==0){HEAP32[___errno_location()>>2]=9;r2=-1;return r2}r3=HEAP32[r1+52>>2];if((r3|0)==0){r2=HEAP32[r1+28>>2]-HEAP32[r1+24>>2]|0;return r2}else{r2=_telldir(r3);return r2}}function _zzip_seekdir32(r1,r2){var r3,r4;if((r1|0)==0){return}r3=HEAP32[r1+52>>2];if((r3|0)!=0){_seekdir(r3,r2);return}r3=HEAP32[r1+24>>2];if((r3|0)==0){r4=0}else{r4=r3+r2|0}HEAP32[r1+28>>2]=r4;return}function _zzip_opendir(r1){return _zzip_opendir_ext_io(r1,0,0,0)}function _zzip_opendir_ext_io(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10;r5=0;r6=STACKTOP;STACKTOP=STACKTOP+88|0;r7=r6;r8=r6+8;if((r2&81920|0)==0){r5=2}else{r5=8}while(1){if(r5==2){r5=0;if((_stat(r1,r8)|0)<=-1){r5=8;continue}if((HEAP32[r8+12>>2]&61440|0)==16384){break}else{r5=8;continue}}else if(r5==8){r5=0;r9=_zzip_dir_open_ext_io(r1,r7,r3,r4);if((r9|0)!=0){r5=10;break}if((r2&16384|0)==0){r5=10;break}else{r5=2;continue}}}if(r5==10){r5=HEAP32[r7>>2];if((r5|0)==0){r10=r9;STACKTOP=r6;return r10}r7=_zzip_errno(r5);HEAP32[___errno_location()>>2]=r7;r10=r9;STACKTOP=r6;return r10}r9=_opendir(r1);if((r9|0)==0){r10=0;STACKTOP=r6;return r10}r7=_calloc(1,68);if((r7|0)==0){_closedir(r9);r10=0;STACKTOP=r6;return r10}else{HEAP32[r7+52>>2]=r9;HEAP32[r7+56>>2]=_strdup(r1);r10=r7;STACKTOP=r6;return r10}}function _zzip_closedir(r1){var r2,r3;if((r1|0)==0){HEAP32[___errno_location()>>2]=9;r2=-1;return r2}r3=HEAP32[r1+52>>2];if((r3|0)==0){_zzip_dir_close(r1);r2=0;return r2}else{_closedir(r3);r2=0;return r2}}function _zzip_dir_stat(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r5=0;r6=HEAP32[r1+24>>2];r7=(r4&1024|0)==0?r4:r4|4096;r4=(r7&4096|0)!=0?FUNCTION_TABLE_OFFSET+18:FUNCTION_TABLE_OFFSET+4;if((r6|0)==0){HEAP32[r1+4>>2]=-4124;r8=-1;return r8}L5:do{if((r7&512|0)==0){r9=r6;while(1){r10=r9+21|0;if((FUNCTION_TABLE[r4](r10,r2)|0)==0){r11=r9;r12=r10;r5=12;break L5}r10=HEAP16[r9+16>>1];if(r10<<16>>16==0){r5=10;break L5}r9=r9+(r10&65535)|0}}else{r9=_strrchr(r2,47);r10=(r9|0)==0?r2:r9+1|0;r9=r6;while(1){r13=r9+21|0;r14=_strrchr(r13,47);if((FUNCTION_TABLE[r4]((r14|0)==0?r13:r14+1|0,r10)|0)==0){r11=r9;r12=r13;r5=12;break L5}r13=HEAP16[r9+16>>1];if(r13<<16>>16==0){r5=10;break L5}r9=r9+(r13&65535)|0}}}while(0);if(r5==12){HEAP32[r3>>2]=HEAPU8[r11+20|0];HEAP32[r3+4>>2]=HEAP32[r11+4>>2];HEAP32[r3+8>>2]=HEAP32[r11>>2];HEAP32[r3+12>>2]=r12;r8=0;return r8}else if(r5==10){HEAP32[r1+4>>2]=-4124;r8=-1;return r8}}function _zzip_file_stat(r1,r2){var r3;if((r1|0)==0){r3=-1;return r3}HEAP32[r2>>2]=HEAP32[r1+8>>2];HEAP32[r2+4>>2]=HEAP32[r1+24>>2];HEAP32[r2+8>>2]=HEAP32[r1+20>>2];HEAP32[r2+12>>2]=0;r3=0;return r3}function _zzip_fstat(r1,r2){var r3,r4,r5;r3=STACKTOP;STACKTOP=STACKTOP+80|0;r4=r3;if((HEAP32[r1>>2]|0)!=0){HEAP32[r2>>2]=HEAP32[r1+8>>2];HEAP32[r2+4>>2]=HEAP32[r1+24>>2];HEAP32[r2+8>>2]=HEAP32[r1+20>>2];HEAP32[r2+12>>2]=0;r5=0;STACKTOP=r3;return r5}if((_fstat(HEAP32[r1+4>>2],r4)|0)<0){r5=-1;STACKTOP=r3;return r5}r1=HEAP32[r4+36>>2];HEAP32[r2+8>>2]=r1;HEAP32[r2+4>>2]=r1;HEAP32[r2>>2]=0;r5=0;STACKTOP=r3;return r5}function _zzip_error(r1){return HEAP32[r1+4>>2]}function _zzip_seterror(r1,r2){HEAP32[r1+4>>2]=r2;return}function _zzip_dirhandle(r1){return HEAP32[r1>>2]}function _zzip_dirfd(r1){return HEAP32[r1>>2]}function _zzip_compr_str(r1){var r2,r3,r4,r5,r6;r2=0;L1:do{switch(r1|0){case 1:{r3=__str15|0;break};case 9:{r3=__str6|0;break};case 10:{r3=__str7|0;break};case 8:{r3=__str5|0;break};case 7:{r3=__str47|0;break};case 6:{r3=__str3|0;break};case 2:case 3:case 4:case 5:{r3=__str26|0;break};case 0:{r3=__str4|0;break};default:{r4=r1-1|0;r5=r4>>>0<255;if(r5){r3=__str8|0;break L1}r6=r1&61440;if((r6|0)==24576){r3=__str11|0;break L1}else if((r6|0)==49152){r3=__str138|0;break L1}else if((r6|0)==4096){r3=__str12|0;break L1}else if((r6|0)==40960){r3=__str14|0;break L1}else if((r6|0)==8192){r3=__str10|0;break L1}else if((r6|0)==16384){r3=__str9|0;break L1}else{r3=__str159|0;break L1}}}}while(0);return r3}function _zzip_dir_real(r1){return(HEAP32[r1+52>>2]|0)!=0|0}function _zzip_file_real(r1){return(HEAP32[r1>>2]|0)==0|0}function _zzip_realdir(r1){return HEAP32[r1+52>>2]}function _zzip_realfd(r1){return HEAP32[r1+4>>2]}function _zzip_strerror(r1){var r2,r3,r4,r5;L1:do{if((r1+4127|0)>>>0<31){r2=_errlist|0;while(1){r3=HEAP32[r2+4>>2];if((r3|0)==0){r4=22;break L1}if((HEAP32[r2>>2]|0)==(r1|0)){r5=r3;break}else{r2=r2+8|0}}return r5}else{if((r1|0)>=0){r4=r1;break}if((r1|0)==-1){r5=_strerror(-1);return r5}else{r5=_zError(r1);return r5}}}while(0);r5=_strerror(r4);return r5}function _zzip_strerror_of(r1){var r2,r3,r4,r5;if((r1|0)==0){r2=_strerror(HEAP32[___errno_location()>>2]);return r2}r3=HEAP32[r1+4>>2];L5:do{if((r3+4127|0)>>>0<31){r1=_errlist|0;while(1){r4=HEAP32[r1+4>>2];if((r4|0)==0){r5=22;break L5}if((HEAP32[r1>>2]|0)==(r3|0)){r2=r4;break}else{r1=r1+8|0}}return r2}else{if((r3|0)>=0){r5=r3;break}if((r3|0)==-1){r2=_strerror(-1);return r2}else{r2=_zError(r3);return r2}}}while(0);r2=_strerror(r5);return r2}function _zzip_errno(r1){var r2,r3,r4,r5;r2=0;if((r1|0)>-2){r3=HEAP32[___errno_location()>>2];return r3}else{r4=_errnolist|0}while(1){r5=HEAP32[r4>>2];if((r5|0)==0){r3=22;r2=8;break}if((r5|0)==(r1|0)){break}else{r4=r4+8|0}}if(r2==8){return r3}r3=HEAP32[r4+4>>2];return r3}function _zzip_filesize(r1){var r2,r3,r4;r2=STACKTOP;STACKTOP=STACKTOP+80|0;r3=r2;if((_fstat(r1,r3)|0)<0){r4=-1}else{r4=HEAP32[r3+36>>2]}STACKTOP=r2;return r4}function _zzip_get_default_io(){return _default_io}function _zzip_init_io(r1,r2){var r3;if((r1|0)==0){r3=-4096}else{_memcpy(r1,_default_io,32)|0;HEAP32[r1+20>>2]=r2;r3=0}return r3}function _zzip_dir_creat(r1,r2){var r3;r3=_zzip_get_default_io();if((r3|0)!=(_zzip_get_default_io()|0)){HEAP32[___errno_location()>>2]=22;return 0}r3=(_mkdir(r1,r2)|0)==0;r2=___errno_location();do{if(!r3){if((HEAP32[r2>>2]|0)==17){break}return 0}}while(0);HEAP32[r2>>2]=30;return 0}function _zzip_dir_creat_ext_io(r1,r2,r3,r4){var r5;if((r4|0)==0){r5=_zzip_get_default_io()}else{r5=r4}if((r5|0)!=(_zzip_get_default_io()|0)){HEAP32[___errno_location()>>2]=22;return 0}r5=(_mkdir(r1,r2)|0)==0;r2=___errno_location();do{if(!r5){if((HEAP32[r2>>2]|0)==17){break}return 0}}while(0);HEAP32[r2>>2]=30;return 0}function _zzip_createdir(r1,r2){var r3,r4;if((r2&16|0)!=0){do{if((_mkdir(r1,r2)|0)==-1){if((HEAP32[___errno_location()>>2]|0)==17){break}else{r3=0}return r3}}while(0);r3=_zzip_opendir(r1);return r3}r4=_zzip_get_default_io();if((r4|0)!=(_zzip_get_default_io()|0)){HEAP32[___errno_location()>>2]=22;r3=0;return r3}r4=(_mkdir(r1,r2)|0)==0;r2=___errno_location();do{if(!r4){if((HEAP32[r2>>2]|0)==17){break}else{r3=0}return r3}}while(0);HEAP32[r2>>2]=30;r3=0;return r3}function _zzip_file_mkdir(r1,r2,r3){var r4;if((r1|0)==0){r4=_mkdir(r2,r3)}else{HEAP32[___errno_location()>>2]=30;r4=-1}return r4}function _zzip_file_creat(r1,r2,r3){var r4;if((r1|0)==0){r4=_zzip_open(r2,r3)}else{HEAP32[___errno_location()>>2]=30;r4=0}return r4}function _zzip_write(r1,r2,r3){var r4;if((_zzip_file_real(r1)|0)==0){HEAP32[___errno_location()>>2]=30;r4=-1;return r4}else{r4=_write(_zzip_realfd(r1),r2,r3);return r4}}function _zzip_file_write(r1,r2,r3){HEAP32[___errno_location()>>2]=30;return-1}function _zzip_fwrite(r1,r2,r3,r4){var r5,r6;if((_zzip_file_real(r4)|0)==0){HEAP32[___errno_location()>>2]=30;r5=-1}else{r6=Math_imul(r3,r2)|0;r5=_write(_zzip_realfd(r4),r1,r6)}return(r5|0)==-1?0:r5}function ___zzip_get32(r1){return HEAPU8[r1+2|0]<<16|HEAPU8[r1+3|0]<<24|HEAPU8[r1+1|0]<<8|HEAPU8[r1]}function ___zzip_get16(r1){return HEAPU8[r1+1|0]<<8|HEAPU8[r1]}function ___zzip_get64(r1){var r2,r3,r4,r5,r6,r7,r8;r2=HEAPU8[r1+7|0];r3=r2<<8|0>>>24|HEAPU8[r1+6|0];r4=r3<<8|0>>>24|HEAPU8[r1+5|0];r5=r4<<8|0>>>24|HEAPU8[r1+4|0];r6=r5<<8|0>>>24|HEAPU8[r1+3|0];r7=r6<<8|0>>>24|HEAPU8[r1+2|0];r8=r7<<8|0>>>24|HEAPU8[r1+1|0];return tempRet0=((((((0<<8|r2>>>24)<<8|r3>>>24)<<8|r4>>>24)<<8|r5>>>24)<<8|r6>>>24)<<8|r7>>>24)<<8|r8>>>24|0,r8<<8|0>>>24|HEAPU8[r1]}function ___zzip_set32(r1,r2){HEAP8[r1]=r2;HEAP8[r1+1|0]=r2>>>8;HEAP8[r1+2|0]=r2>>>16;HEAP8[r1+3|0]=r2>>>24;return}function ___zzip_set16(r1,r2){HEAP8[r1]=r2;HEAP8[r1+1|0]=(r2&65535)>>>8;return}function ___zzip_set64(r1,r2,r3){HEAP8[r1]=r2;HEAP8[r1+1|0]=r2>>>8|r3<<24;HEAP8[r1+2|0]=r2>>>16|r3<<16;HEAP8[r1+3|0]=r2>>>24|r3<<8;HEAP8[r1+4|0]=r3;HEAP8[r1+5|0]=r3>>>8|0<<24;HEAP8[r1+6|0]=r3>>>16|0<<16;HEAP8[r1+7|0]=r3>>>24|0<<8;return}
// EMSCRIPTEN_END_FUNCS
Module["___zzip_fetch_disk_trailer"] = ___zzip_fetch_disk_trailer;
Module["___zzip_parse_root_directory"] = ___zzip_parse_root_directory;
Module["_zzip_dir_alloc_ext_io"] = _zzip_dir_alloc_ext_io;
Module["_zzip_dir_alloc"] = _zzip_dir_alloc;
Module["_zzip_dir_free"] = _zzip_dir_free;
Module["_zzip_dir_close"] = _zzip_dir_close;
Module["_zzip_dir_fdopen"] = _zzip_dir_fdopen;
Module["_zzip_dir_fdopen_ext_io"] = _zzip_dir_fdopen_ext_io;
Module["___zzip_try_open"] = ___zzip_try_open;
Module["_zzip_dir_open"] = _zzip_dir_open;
Module["_zzip_dir_open_ext_io"] = _zzip_dir_open_ext_io;
Module["_zzip_dir_read"] = _zzip_dir_read;
Module["_zzip_file_close"] = _zzip_file_close;
Module["_zzip_file_open"] = _zzip_file_open;
Module["_dirsep_strcasecmp"] = _dirsep_strcasecmp;
Module["_dirsep_basename"] = _dirsep_basename;
Module["_strrchr_basename"] = _strrchr_basename;
Module["_zzip_fclose"] = _zzip_fclose;
Module["_zzip_close"] = _zzip_close;
Module["_zzip_file_read"] = _zzip_file_read;
Module["_zzip_read"] = _zzip_read;
Module["_zzip_fread"] = _zzip_fread;
Module["_zzip_fopen"] = _zzip_fopen;
Module["_zzip_freopen"] = _zzip_freopen;
Module["_zzip_open_shared_io"] = _zzip_open_shared_io;
Module["_zzip_open"] = _zzip_open;
Module["_zzip_open_ext_io"] = _zzip_open_ext_io;
Module["_zzip_rewind"] = _zzip_rewind;
Module["_zzip_seek"] = _zzip_seek;
Module["_zzip_tell"] = _zzip_tell;
Module["_zzip_tell32"] = _zzip_tell32;
Module["_zzip_seek32"] = _zzip_seek32;
Module["_zzip_rewinddir"] = _zzip_rewinddir;
Module["_zzip_readdir"] = _zzip_readdir;
Module["_zzip_telldir"] = _zzip_telldir;
Module["_zzip_seekdir"] = _zzip_seekdir;
Module["_zzip_telldir32"] = _zzip_telldir32;
Module["_zzip_seekdir32"] = _zzip_seekdir32;
Module["_zzip_opendir"] = _zzip_opendir;
Module["_zzip_opendir_ext_io"] = _zzip_opendir_ext_io;
Module["_zzip_closedir"] = _zzip_closedir;
Module["_zzip_dir_stat"] = _zzip_dir_stat;
Module["_zzip_file_stat"] = _zzip_file_stat;
Module["_zzip_fstat"] = _zzip_fstat;
Module["_zzip_error"] = _zzip_error;
Module["_zzip_seterror"] = _zzip_seterror;
Module["_zzip_dirhandle"] = _zzip_dirhandle;
Module["_zzip_dirfd"] = _zzip_dirfd;
Module["_zzip_compr_str"] = _zzip_compr_str;
Module["_zzip_dir_real"] = _zzip_dir_real;
Module["_zzip_file_real"] = _zzip_file_real;
Module["_zzip_realdir"] = _zzip_realdir;
Module["_zzip_realfd"] = _zzip_realfd;
Module["_zzip_strerror"] = _zzip_strerror;
Module["_zzip_strerror_of"] = _zzip_strerror_of;
Module["_zzip_errno"] = _zzip_errno;
Module["_zzip_filesize"] = _zzip_filesize;
Module["_zzip_get_default_io"] = _zzip_get_default_io;
Module["_zzip_init_io"] = _zzip_init_io;
Module["_zzip_dir_creat"] = _zzip_dir_creat;
Module["_zzip_dir_creat_ext_io"] = _zzip_dir_creat_ext_io;
Module["_zzip_createdir"] = _zzip_createdir;
Module["_zzip_file_mkdir"] = _zzip_file_mkdir;
Module["_zzip_file_creat"] = _zzip_file_creat;
Module["_zzip_write"] = _zzip_write;
Module["_zzip_file_write"] = _zzip_file_write;
Module["_zzip_fwrite"] = _zzip_fwrite;
Module["___zzip_get32"] = ___zzip_get32;
Module["___zzip_get16"] = ___zzip_get16;
Module["___zzip_get64"] = ___zzip_get64;
Module["___zzip_set32"] = ___zzip_set32;
Module["___zzip_set16"] = ___zzip_set16;
Module["___zzip_set64"] = ___zzip_set64;
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
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
//LIB_DATA:{"sym_deps":{"libs":{},"variable":{},"func":{"_strlen":false,"_llvm_lifetime_start":false,"_llvm_memcpy_p0i8_p0i8_i32":false,"_strrchr":false,"_inflate":false,"_strcat":false,"_inflateReset":false,"_rewinddir":false,"_fstat":false,"_calloc":false,"_main":false,"_malloc":false,"_opendir":false,"_open":false,"_telldir":false,"_strdup":false,"_strcasecmp":false,"_close":false,"_seekdir":false,"_mkdir":false,"_realloc":false,"_lseek":false,"_zError":false,"_readdir":false,"_write":false,"___errno_location":false,"_stat":false,"_memcmp":false,"_strcmp":false,"_free":false,"_read":false,"_inflateEnd":false,"_strerror":false,"_inflateInit2_":false,"_llvm_lifetime_end":false,"_closedir":false,"_llvm_memset_p0i8_i32":false,"_strcpy":false}}}
//END_LIB_DATA
