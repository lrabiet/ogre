# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local

freetype_Dir=.
freetype_Src_Dir=$(freetype_Dir)

Target=libfreetype.so.js 
INCLUDES=-Iinclude -I. -I../sys-inc -Isrc/base -Iinclude/config -Ibuilds/unix

CFLAGS=-DFT2_BUILD_LIBRARY -DPIC -DEMSCRIPTEN_BUILD=1
COMPILEFLAG=-O2
LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1  -s ASM_JS=0 


freetype_OBJECTS = \
$(freetype_Src_Dir)/builds/unix/ftsystem.bc \
$(freetype_Src_Dir)/src/base/ftdebug.bc \
$(freetype_Src_Dir)/src/base/ftinit.bc \
$(freetype_Src_Dir)/src/base/ftbase.bc \
$(freetype_Src_Dir)/src/base/ftbbox.bc \
$(freetype_Src_Dir)/src/base/ftbdf.bc \
$(freetype_Src_Dir)/src/base/ftbitmap.bc \
$(freetype_Src_Dir)/src/base/ftcid.bc \
$(freetype_Src_Dir)/src/base/ftfstype.bc \
$(freetype_Src_Dir)/src/base/ftgasp.bc \
$(freetype_Src_Dir)/src/base/ftglyph.bc \
$(freetype_Src_Dir)/src/base/ftgxval.bc \
$(freetype_Src_Dir)/src/base/ftlcdfil.bc \
$(freetype_Src_Dir)/src/base/ftmm.bc \
$(freetype_Src_Dir)/src/base/ftotval.bc \
$(freetype_Src_Dir)/src/base/ftpatent.bc \
$(freetype_Src_Dir)/src/base/ftpfr.bc \
$(freetype_Src_Dir)/src/base/ftstroke.bc \
$(freetype_Src_Dir)/src/base/ftsynth.bc \
$(freetype_Src_Dir)/src/base/fttype1.bc \
$(freetype_Src_Dir)/src/base/ftwinfnt.bc \
$(freetype_Src_Dir)/src/base/ftxf86.bc \
$(freetype_Src_Dir)/src/truetype/truetype.bc \
$(freetype_Src_Dir)/src/type1/type1.bc \
$(freetype_Src_Dir)/src/cff/cff.bc \
$(freetype_Src_Dir)/src/cid/type1cid.bc \
$(freetype_Src_Dir)/src/pfr/pfr.bc \
$(freetype_Src_Dir)/src/type42/type42.bc \
$(freetype_Src_Dir)/src/winfonts/winfnt.bc \
$(freetype_Src_Dir)/src/pcf/pcf.bc \
$(freetype_Src_Dir)/src/bdf/bdf.bc \
$(freetype_Src_Dir)/src/sfnt/sfnt.bc \
$(freetype_Src_Dir)/src/autofit/autofit.bc \
$(freetype_Src_Dir)/src/pshinter/pshinter.bc \
$(freetype_Src_Dir)/src/raster/raster.bc \
$(freetype_Src_Dir)/src/smooth/smooth.bc \
$(freetype_Src_Dir)/src/cache/ftcache.bc \
$(freetype_Src_Dir)/src/gzip/ftgzip.bc \
$(freetype_Src_Dir)/src/lzw/ftlzw.bc \
$(freetype_Src_Dir)/src/bzip2/ftbzip2.bc \
$(freetype_Src_Dir)/src/psaux/psaux.bc \
$(freetype_Src_Dir)/src/psnames/psnames.bc 


ALL_OBJECTS=$(freetype_OBJECTS)

all: $(Target)

%.bc: %.cpp
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@

%.bc: %.c
	$(CC) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@


freetype.so.bc: $(freetype_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(freetype_OBJECTS)

libfreetype.so.js: freetype.so.bc
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) $< -o $@

clean:
	rm -f *.js *.html *.js.map *.bc $(ALL_OBJECTS)

