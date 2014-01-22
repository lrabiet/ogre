# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local

libfreeimage_Dir=.
libfreeimage_Src_Dir=$(libfreeimage_Dir)/Source

Target=libfreeimage.so.js 
INCLUDES=-Iinclude -I. -I../sys-inc -ISource \
         -I$(libfreeimage_Src_Dir)/OpenEXR \
         -I$(libfreeimage_Src_Dir)/OpenEXR/Imath \
	 -I$(libfreeimage_Src_Dir)/OpenEXR/IlmImf \
	 -I$(libfreeimage_Src_Dir)/OpenEXR/Iex \
	 -I$(libfreeimage_Src_Dir)/OpenEXR/Half \
	 -I$(libfreeimage_Src_Dir)/OpenEXR/IlmThread \
	 -I$(libfreeimage_Src_Dir)/LibRawLite \

CFLAGS=
COMPILEFLAG=-O2
LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1  -s ASM_JS=0 


libfreeimage_OBJECTS = \
$(libfreeimage_Src_Dir)/FreeImage/BitmapAccess.bc \
$(libfreeimage_Src_Dir)/FreeImage/ColorLookup.bc \
$(libfreeimage_Src_Dir)/FreeImage/FreeImage.bc \
$(libfreeimage_Src_Dir)/FreeImage/FreeImageC.bc \
$(libfreeimage_Src_Dir)/FreeImage/FreeImageIO.bc \
$(libfreeimage_Src_Dir)/FreeImage/GetType.bc \
$(libfreeimage_Src_Dir)/FreeImage/MemoryIO.bc \
$(libfreeimage_Src_Dir)/FreeImage/PixelAccess.bc \
$(libfreeimage_Src_Dir)/FreeImage/J2KHelper.bc \
$(libfreeimage_Src_Dir)/FreeImage/MNGHelper.bc \
$(libfreeimage_Src_Dir)/FreeImage/Plugin.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginBMP.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginCUT.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginDDS.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginEXR.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginG3.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginGIF.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginHDR.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginICO.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginIFF.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginJ2K.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginJNG.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginJP2.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginJPEG.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginKOALA.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginMNG.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPCD.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPCX.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPFM.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPICT.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPNG.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPNM.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginPSD.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginRAS.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginRAW.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginSGI.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginTARGA.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginTIFF.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginWBMP.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginXBM.bc \
$(libfreeimage_Src_Dir)/FreeImage/PluginXPM.bc \
$(libfreeimage_Src_Dir)/FreeImage/PSDParser.bc \
$(libfreeimage_Src_Dir)/FreeImage/TIFFLogLuv.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion16_555.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion16_565.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion24.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion32.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion4.bc \
$(libfreeimage_Src_Dir)/FreeImage/Conversion8.bc \
$(libfreeimage_Src_Dir)/FreeImage/ConversionFloat.bc \
$(libfreeimage_Src_Dir)/FreeImage/ConversionRGB16.bc \
$(libfreeimage_Src_Dir)/FreeImage/ConversionRGBF.bc \
$(libfreeimage_Src_Dir)/FreeImage/ConversionType.bc \
$(libfreeimage_Src_Dir)/FreeImage/ConversionUINT16.bc \
$(libfreeimage_Src_Dir)/FreeImage/Halftoning.bc \
$(libfreeimage_Src_Dir)/FreeImage/tmoColorConvert.bc \
$(libfreeimage_Src_Dir)/FreeImage/tmoDrago03.bc \
$(libfreeimage_Src_Dir)/FreeImage/tmoFattal02.bc \
$(libfreeimage_Src_Dir)/FreeImage/tmoReinhard05.bc \
$(libfreeimage_Src_Dir)/FreeImage/ToneMapping.bc \
$(libfreeimage_Src_Dir)/FreeImage/NNQuantizer.bc \
$(libfreeimage_Src_Dir)/FreeImage/WuQuantizer.bc \
$(libfreeimage_Src_Dir)/DeprecationManager/Deprecated.bc \
$(libfreeimage_Src_Dir)/DeprecationManager/DeprecationMgr.bc \
$(libfreeimage_Src_Dir)/FreeImage/CacheFile.bc \
$(libfreeimage_Src_Dir)/FreeImage/MultiPage.bc \
$(libfreeimage_Src_Dir)/FreeImage/ZLibInterface.bc \
$(libfreeimage_Src_Dir)/Metadata/Exif.bc \
$(libfreeimage_Src_Dir)/Metadata/FIRational.bc \
$(libfreeimage_Src_Dir)/Metadata/FreeImageTag.bc \
$(libfreeimage_Src_Dir)/Metadata/IPTC.bc \
$(libfreeimage_Src_Dir)/Metadata/TagConversion.bc \
$(libfreeimage_Src_Dir)/Metadata/TagLib.bc \
$(libfreeimage_Src_Dir)/Metadata/XTIFF.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Background.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/BSplineRotate.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Channels.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/ClassicRotate.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Colors.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/CopyPaste.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Display.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Flip.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/JPEGTransform.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/MultigridPoissonSolver.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Rescale.bc \
$(libfreeimage_Src_Dir)/FreeImageToolkit/Resize.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jaricom.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcapimin.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcapistd.bc \
$(libfreeimage_Src_Dir)/LibJPEG/./jcarith.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jccoefct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jccolor.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcdctmgr.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jchuff.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcinit.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcmainct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcmarker.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcmaster.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcomapi.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcparam.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcprepct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jcsample.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jctrans.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdapimin.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdapistd.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdarith.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdatadst.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdatasrc.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdcoefct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdcolor.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jddctmgr.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdhuff.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdinput.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdmainct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdmarker.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdmaster.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdmerge.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdpostct.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdsample.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jdtrans.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jerror.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jfdctflt.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jfdctfst.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jfdctint.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jidctflt.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jidctfst.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jidctint.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jmemmgr.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jmemnobs.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jquant1.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jquant2.bc \
$(libfreeimage_Src_Dir)/LibJPEG/jutils.bc \
$(libfreeimage_Src_Dir)/LibJPEG/transupp.bc \
$(libfreeimage_Src_Dir)/LibPNG/png.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngerror.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngget.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngmem.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngpread.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngread.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngrio.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngrtran.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngrutil.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngset.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngtrans.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngwio.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngwrite.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngwtran.bc \
$(libfreeimage_Src_Dir)/LibPNG/pngwutil.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_aux.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_close.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_codec.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_color.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_compress.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_dir.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_dirinfo.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_dirread.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_dirwrite.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_dumpmode.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_error.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_extension.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_fax3.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_fax3sm.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_flush.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_getimage.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_jpeg.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_luv.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_lzma.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_lzw.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_next.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_ojpeg.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_open.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_packbits.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_pixarlog.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_predict.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_print.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/tif_read.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_strip.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_swab.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_thunder.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_tile.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_version.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_warning.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_write.bc \
$(libfreeimage_Src_Dir)/LibTIFF4/./tif_zip.bc \
$(libfreeimage_Src_Dir)/ZLib/adler32.bc \
$(libfreeimage_Src_Dir)/ZLib/compress.bc \
$(libfreeimage_Src_Dir)/ZLib/crc32.bc \
$(libfreeimage_Src_Dir)/ZLib/deflate.bc \
$(libfreeimage_Src_Dir)/ZLib/gzclose.bc \
$(libfreeimage_Src_Dir)/ZLib/gzlib.bc \
$(libfreeimage_Src_Dir)/ZLib/gzread.bc \
$(libfreeimage_Src_Dir)/ZLib/gzwrite.bc \
$(libfreeimage_Src_Dir)/ZLib/infback.bc \
$(libfreeimage_Src_Dir)/ZLib/inffast.bc \
$(libfreeimage_Src_Dir)/ZLib/inflate.bc \
$(libfreeimage_Src_Dir)/ZLib/inftrees.bc \
$(libfreeimage_Src_Dir)/ZLib/trees.bc \
$(libfreeimage_Src_Dir)/ZLib/uncompr.bc \
$(libfreeimage_Src_Dir)/ZLib/zutil.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/bio.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/cidx_manager.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/cio.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/dwt.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/event.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/image.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/j2k.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/j2k_lib.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/jp2.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/jpt.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/mct.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/mqc.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/openjpeg.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/phix_manager.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/pi.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/ppix_manager.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/raw.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/t1.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/t2.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/tcd.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/tgt.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/thix_manager.bc \
$(libfreeimage_Src_Dir)/LibOpenJPEG/tpix_manager.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfB44Compressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfBoxAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfChannelList.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfChannelListAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfChromaticities.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfChromaticitiesAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfCompressionAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfCompressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfConvert.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfCRgbaFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfDoubleAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfEnvmap.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfEnvmapAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfFloatAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfFrameBuffer.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfFramesPerSecond.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfHeader.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfHuf.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfInputFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfIntAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfIO.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfKeyCode.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfKeyCodeAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfLineOrderAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfLut.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfMatrixAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfMisc.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfOpaqueAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfOutputFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfPizCompressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfPreviewImage.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfPreviewImageAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfPxr24Compressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfRational.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfRationalAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfRgbaFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfRgbaYca.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfRleCompressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfScanLineInputFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfStandardAttributes.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfStdIO.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfStringAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfStringVectorAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTestFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfThreading.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTileDescriptionAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTiledInputFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTiledMisc.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTiledOutputFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTiledRgbaFile.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTileOffsets.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTimeCode.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfTimeCodeAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfVecAttribute.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfVersion.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfWav.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmImf/ImfZipCompressor.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathBox.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathColorAlgo.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathFun.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathMatrixAlgo.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathRandom.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathShear.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Imath/ImathVec.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Iex/IexBaseExc.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Iex/IexThrowErrnoExc.bc \
$(libfreeimage_Src_Dir)/OpenEXR/Half/half.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmThread/IlmThread.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmThread/IlmThreadMutex.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmThread/IlmThreadPool.bc \
$(libfreeimage_Src_Dir)/OpenEXR/IlmThread/IlmThreadSemaphore.bc \
$(libfreeimage_Src_Dir)/LibRawLite/internal/dcraw_common.bc \
$(libfreeimage_Src_Dir)/LibRawLite/internal/dcraw_fileio.bc \
$(libfreeimage_Src_Dir)/LibRawLite/internal/demosaic_packs.bc \
$(libfreeimage_Src_Dir)/LibRawLite/src/libraw_c_api.bc \
$(libfreeimage_Src_Dir)/LibRawLite/src/libraw_cxx.bc \
$(libfreeimage_Src_Dir)/LibRawLite/src/libraw_datastream.bc 


ALL_OBJECTS=$(libfreeimage_OBJECTS)

all: $(Target)

%.bc: %.cpp
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@

%.bc: %.c
	$(CC) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@


libfreeimage.so.bc: $(libfreeimage_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(libfreeimage_OBJECTS)

libfreeimage.so.js: libfreeimage.so.bc
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) $< -o $@

clean:
	rm -f *.js *.html *.bc $(ALL_OBJECTS)

