
all: Browser

mklibs:
	make -C Browser -f Makefile.so.mk $(BUILD)

Browser: mklibs 
	make -C Browser -f Makefile.shell.mk $(BUILD)

