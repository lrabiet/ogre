# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local

CurrentDir=$(shell pwd)

libOIS_Dir=.
libOIS_Src_Dir=$(libOIS_Dir)/src

Target=libOIS.so.js 

INCLUDES=-I../../include -I. \
	 -I../../sys-inc \
         -I$(libOIS_Dir)/includes 
	  

CFLAGS=-DEMSCRIPTEN_BUILD=1

COMPILEFLAG=-O2
LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1  -s ASM_JS=0 \
                -s DISABLE_EXCEPTION_CATCHING=0 

libOIS_OBJECTS = \
$(libOIS_Src_Dir)/OISInputManager.bc \
$(libOIS_Src_Dir)/OISObject.bc \
$(libOIS_Src_Dir)/OISEffect.bc \
$(libOIS_Src_Dir)/OISJoyStick.bc \
$(libOIS_Src_Dir)/OISKeyboard.bc \
$(libOIS_Src_Dir)/OISForceFeedback.bc \
$(libOIS_Src_Dir)/OISException.bc  \
$(libOIS_Src_Dir)/browser/BrowserInputManager.bc \
$(libOIS_Src_Dir)/browser/BrowserJoyStick.bc \
$(libOIS_Src_Dir)/browser/BrowserKeyboard.bc \
$(libOIS_Src_Dir)/browser/BrowserMouse.bc 


ALL_OBJECTS=$(libOIS_OBJECTS)

all: $(Target)

%.bc: %.cpp
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@

libOIS.a: $(libOIS_OBJECTS) 
	$(AR)  r $@ $(libOIS_OBJECTS)

libOIS.so.js: libOIS.a
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) $< -o $@

clean:
	rm -f *.js *.js.map *.bc *.a $(ALL_OBJECTS)

