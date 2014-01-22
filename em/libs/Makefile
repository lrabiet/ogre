ifeq ($(findstring clean, $(BUILD)),)
   installlibs=copylibs
endif

all: libOgres 

libFreeImage.so.js:
	make -C FreeImage -f Makefile.so.mk $(BUILD)

libfreetype.so.js:
	make -C freetype-2.5.2 -f Makefile.so.mk $(BUILD)

libOIS.so.js:
	make -C ois-v1-3 -f Makefile.so.mk $(BUILD)

libzzip.so.js:
	make -C zziplib-0.13.62 -f Makefile.so.mk $(BUILD)

copylibs:
	@cp -f FreeImage/libfreeimage.so.js Ogre
	@cp -f freetype-2.5.2/libfreetype.so.js Ogre
	@cp -f ois-v1-3/libOIS.so.js Ogre
	@cp -f zziplib-0.13.62/libzzip.so.js Ogre

libOgres:  libFreeImage.so.js libfreetype.so.js  libOIS.so.js  libzzip.so.js $(installlibs)
	make -C Ogre -f Makefile.so.mk $(BUILD)

