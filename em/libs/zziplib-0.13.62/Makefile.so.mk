# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local

libzzip_Dir=.
libzzip_Src_Dir=$(libzzip_Dir)

Target=libzzip.so.js 
INCLUDES=-Iinclude -I. -I../sys-inc 

CFLAGS=
COMPILEFLAG=-O2
LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1  -s ASM_JS=0 


libzzip_OBJECTS = \
$(libzzip_Src_Dir)/zzip/zip.bc \
$(libzzip_Src_Dir)/zzip/file.bc \
$(libzzip_Src_Dir)/zzip/dir.bc \
$(libzzip_Src_Dir)/zzip/stat.bc \
$(libzzip_Src_Dir)/zzip/info.bc \
$(libzzip_Src_Dir)/zzip/err.bc \
$(libzzip_Src_Dir)/zzip/plugin.bc \
$(libzzip_Src_Dir)/zzip/write.bc \
$(libzzip_Src_Dir)/zzip/fetch.bc 


ALL_OBJECTS=$(libzzip_OBJECTS)

all: $(Target)

%.bc: %.cpp
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@

%.bc: %.c
	$(CC) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@


libzzip.so.bc: $(libzzip_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(libzzip_OBJECTS)

libzzip.so.js: libzzip.so.bc
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) $< -o $@

clean:
	rm -f *.js *.html *.bc $(ALL_OBJECTS)

