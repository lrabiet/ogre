CurrentDir=$(shell pwd)

INCLUDES=-I. 

export EMCC_FORCE_STDLIBS=1
SAMPLE = SampleBrowser.html
TARGETCC =emcc
LIBS=-O2 -s ASM_JS=0 -s DISABLE_EXCEPTION_CATCHING=0 -s USE_EXTERNAL_MAIN=1  --delay-pack-file build/data@data \
-s TOTAL_MEMORY=133554432 -s EXPORT_ALL=1 -s NAMED_GLOBALS=1 -s LEGACY_GL_EMULATION=1\
-s LINK_OPTIONS="['-L$(CurrentDir)/build/data/lib -lBrowser']"


all : $(SAMPLE)

$(SAMPLE) : shell/Main.o   
	$(TARGETCC) $(CFLAGS) -o $@ $<   $(LIBS)
	@cp -f SampleBrowser.html SampleBrowser.js build

.cpp.o:
	$(TARGETCC) -c $(CFLAGS) $(INCLUDES) $< -o $(@D)/$(@F)


debug : all

clean:
	$(RM) *.o $(SAMPLE) *.js *.html *.html.map *.js.map *.bc
