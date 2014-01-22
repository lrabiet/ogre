# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local

CurrentDir=$(shell pwd)
BUILD_DIR=../..
SampleDir=$(BUILD_DIR)/../Samples

Browser_Dir=$(SampleDir)/Browser
Browser_Src_Dir=$(Browser_Dir)/src
SkyBox_Dir=$(SampleDir)/SkyBox
SkyBox_Src_Dir=$(SkyBox_Dir)/src
SkyPlane_Dir=$(SampleDir)/SkyPlane
SkyPlane_Src_Dir=$(SkyPlane_Dir)/src
CameraTrack_Dir=$(SampleDir)/CameraTrack
CameraTrack_Src_Dir=$(CameraTrack_Dir)/src
BezierPatch_Dir=$(SampleDir)/BezierPatch
BezierPatch_Src_Dir=$(BezierPatch_Dir)/src
BSP_Dir=$(SampleDir)/BSP
BSP_Src_Dir=$(BSP_Dir)/src
CelShading_Dir=$(SampleDir)/CelShading
CelShading_Src_Dir=$(CelShading_Dir)/src
Character_Dir=$(SampleDir)/Character
Character_Src_Dir=$(Character_Dir)/src
Compositor_Dir=$(SampleDir)/Compositor
Compositor_Src_Dir=$(Compositor_Dir)/src
CubeMapping_Dir=$(SampleDir)/CubeMapping
CubeMapping_Src_Dir=$(CubeMapping_Dir)/src
DeferredShading_Dir=$(SampleDir)/DeferredShading
DeferredShading_Src_Dir=$(DeferredShading_Dir)/src
Dot3Bump_Dir=$(SampleDir)/Dot3Bump
Dot3Bump_Src_Dir=$(Dot3Bump_Dir)/src
DualQuaternion_Dir=$(SampleDir)/DualQuaternion
DualQuaternion_Src_Dir=$(DualQuaternion_Dir)/src
DynTex_Dir=$(SampleDir)/DynTex
DynTex_Src_Dir=$(DynTex_Dir)/src
FacialAnimation_Dir=$(SampleDir)/FacialAnimation
FacialAnimation_Src_Dir=$(FacialAnimation_Dir)/src
Fresnel_Dir=$(SampleDir)/Fresnel
Fresnel_Src_Dir=$(Fresnel_Dir)/src
Grass_Dir=$(SampleDir)/Grass
Grass_Src_Dir=$(Grass_Dir)/src
Instancing_Dir=$(SampleDir)/Instancing
Instancing_Src_Dir=$(Instancing_Dir)/src
Isosurf_Dir=$(SampleDir)/Isosurf
Isosurf_Src_Dir=$(Isosurf_Dir)/src
Lighting_Dir=$(SampleDir)/Lighting
Lighting_Src_Dir=$(Lighting_Dir)/src
NewInstancing_Dir=$(SampleDir)/NewInstancing
NewInstancing_Src_Dir=$(NewInstancing_Dir)/src
OceanDemo_Dir=$(SampleDir)/OceanDemo
OceanDemo_Src_Dir=$(OceanDemo_Dir)/src
ParticleFX_Dir=$(SampleDir)/ParticleFX
ParticleFX_Src_Dir=$(ParticleFX_Dir)/src
ParticleGS_Dir=$(SampleDir)/ParticleGS
ParticleGS_Src_Dir=$(ParticleGS_Dir)/src
ShaderSystem_Dir=$(SampleDir)/ShaderSystem
ShaderSystem_Src_Dir=$(ShaderSystem_Dir)/src
Shadows_Dir=$(SampleDir)/Shadows
Shadows_Src_Dir=$(Shadows_Dir)/src
SkeletalAnimation_Dir=$(SampleDir)/SkeletalAnimation
SkeletalAnimation_Src_Dir=$(SkeletalAnimation_Dir)/src
SkyDome_Dir=$(SampleDir)/SkyDome
SkyDome_Src_Dir=$(SkyDome_Dir)/src
Smoke_Dir=$(SampleDir)/Smoke
Smoke_Src_Dir=$(Smoke_Dir)/src
SphereMapping_Dir=$(SampleDir)/SphereMapping
SphereMapping_Src_Dir=$(SphereMapping_Dir)/src
SSAO_Dir=$(SampleDir)/SSAO
SSAO_Src_Dir=$(SSAO_Dir)/src
Terrain_Dir=$(SampleDir)/Terrain
Terrain_Src_Dir=$(Terrain_Dir)/src
TextureArray_Dir=$(SampleDir)/TextureArray
TextureArray_Src_Dir=$(TextureArray_Dir)/src
TextureFX_Dir=$(SampleDir)/TextureFX
TextureFX_Src_Dir=$(TextureFX_Dir)/src
Transparency_Dir=$(SampleDir)/Transparency
Transparency_Src_Dir=$(Transparency_Dir)/src
VolumeTex_Dir=$(SampleDir)/VolumeTex
VolumeTex_Src_Dir=$(VolumeTex_Dir)/src
Water_Dir=$(SampleDir)/Water
Water_Src_Dir=$(Water_Dir)/src

Target=libSample_Water.so.js libSample_VolumeTex.so.js libSample_Transparency.so.js \
       libSample_TextureFX.so.js libSample_TextureArray.so.js libSample_Terrain.so.js libSample_SSAO.so.js libSample_SphereMapping.so.js \
       libSample_Smoke.so.js libSample_SkyDome.so.js libSample_SkeletalAnimation.so.js libSample_ShaderSystem.so.js libSample_Shadows.so.js \
       libSample_ParticleGS.so.js libSample_ParticleFX.so.js libSample_Ocean.so.js libSample_NewInstancing.so.js libSample_Lighting.so.js \
       libSample_Isosurf.so.js libSample_Instancing.so.js libSample_Grass.so.js libSample_Fresnel.so.js libSample_FacialAnimation.so.js \
       libSample_DynTex.so.js libSample_DualQuaternion.so.js libSample_Dot3Bump.so.js libSample_DeferredShading.so.js \
       libSample_CubeMapping.so.js libSample_Compositor.so.js libSample_Character.so.js libSample_CelShading.so.js libSample_BSP.so.js \
       libSample_BezierPatch.so.js libSample_SkyBox.so.js libSample_SkyPlane.so.js libSample_CameraTrack.so.js libBrowser.so.js

INCLUDES=-I$(SkyBox_Dir) -I$(SkyBox_Dir)/include -I$(SkyBox_Src_Dir) \
	 -I$(Browser_Dir) -I$(Browser_Dir)/include -I$(Browser_Src_Dir) \
         -I$(SkyPlane_Dir) -I$(SkyPlane_Dir)/include -I$(SkyPlane_Src_Dir) \
	 -I$(CameraTrack_Dir) -I$(CameraTrack_Dir)/include -I$(CameraTrack_Src_Dir) \
	 -I$(BezierPatch_Dir) -I$(BezierPatch_Dir)/include -I$(BezierPatch_Src_Dir) \
	 -I$(BSP_Dir) -I$(BSP_Dir)/include -I$(BSP_Src_Dir) \
	 -I$(CelShading_Dir) -I$(CelShading_Dir)/include -I$(CelShading_Src_Dir) \
	 -I$(Character_Dir) -I$(Character_Dir)/include -I$(Character_Src_Dir) \
	 -I$(Compositor_Dir) -I$(Compositor_Dir)/include -I$(Compositor_Src_Dir) \
	 -I$(CubeMapping_Dir) -I$(CubeMapping_Dir)/include -I$(CubeMapping_Src_Dir) \
	 -I$(DeferredShading_Dir) -I$(DeferredShading_Dir)/include -I$(DeferredShading_Src_Dir) \
	 -I$(Dot3Bump_Dir) -I$(Dot3Bump_Dir)/include -I$(Dot3Bump_Src_Dir) \
	 -I$(DualQuaternion_Dir) -I$(DualQuaternion_Dir)/include -I$(DualQuaternion_Src_Dir) \
	 -I$(DynTex_Dir) -I$(DynTex_Dir)/include -I$(DynTex_Src_Dir) \
	 -I$(FacialAnimation_Dir) -I$(FacialAnimation_Dir)/include -I$(FacialAnimation_Src_Dir) \
	 -I$(Fresnel_Dir) -I$(Fresnel_Dir)/include -I$(Fresnel_Src_Dir) \
	 -I$(Grass_Dir) -I$(Grass_Dir)/include -I$(Grass_Src_Dir) \
	 -I$(Instancing_Dir) -I$(Instancing_Dir)/include -I$(Instancing_Src_Dir) \
	 -I$(Isosurf_Dir) -I$(Isosurf_Dir)/include -I$(Isosurf_Src_Dir) \
	 -I$(Lighting_Dir) -I$(Lighting_Dir)/include -I$(Lighting_Src_Dir) \
	 -I$(NewInstancing_Dir) -I$(NewInstancing_Dir)/include -I$(NewInstancing_Src_Dir) \
	 -I$(OceanDemo_Dir) -I$(OceanDemo_Dir)/include -I$(OceanDemo_Src_Dir) \
	 -I$(ParticleFX_Dir) -I$(ParticleFX_Dir)/include -I$(ParticleFX_Src_Dir) \
	 -I$(ParticleGS_Dir) -I$(ParticleGS_Dir)/include -I$(ParticleGS_Src_Dir) \
	 -I$(ShaderSystem_Dir) -I$(ShaderSystem_Dir)/include -I$(ShaderSystem_Src_Dir) \
	 -I$(Shadows_Dir) -I$(Shadows_Dir)/include -I$(Shadows_Src_Dir) \
	 -I$(SkeletalAnimation_Dir) -I$(SkeletalAnimation_Dir)/include -I$(SkeletalAnimation_Src_Dir) \
	 -I$(SkyDome_Dir) -I$(SkyDome_Dir)/include -I$(SkyDome_Src_Dir) \
	 -I$(Smoke_Dir) -I$(Smoke_Dir)/include -I$(Smoke_Src_Dir) \
	 -I$(SphereMapping_Dir) -I$(SphereMapping_Dir)/include -I$(SphereMapping_Src_Dir) \
	 -I$(SSAO_Dir) -I$(SSAO_Dir)/include -I$(SSAO_Src_Dir) \
	 -I$(Terrain_Dir) -I$(Terrain_Dir)/include -I$(Terrain_Src_Dir) \
	 -I$(TextureArray_Dir) -I$(TextureArray_Dir)/include -I$(TextureArray_Src_Dir) \
	 -I$(TextureFX_Dir) -I$(TextureFX_Dir)/include -I$(TextureFX_Src_Dir) \
	 -I$(Transparency_Dir) -I$(Transparency_Dir)/include -I$(Transparency_Src_Dir) \
	 -I$(VolumeTex_Dir) -I$(VolumeTex_Dir)/include -I$(VolumeTex_Src_Dir) \
	 -I$(Water_Dir) -I$(Water_Dir)/include -I$(Water_Src_Dir) \
         -I$(BUILD_DIR)/sys-inc -I$(BUILD_DIR)/sys-inc/OGRE -I$(BUILD_DIR)/sys-inc/OGRE/RTShaderSystem \
	 -I$(BUILD_DIR)/sys-inc/OIS -I$(BUILD_DIR)/sys-inc/OGRE/Terrain -I$(BUILD_DIR)/sys-inc/OGRE/Paging

ifeq ($(findstring clean, $(BUILD)),)
   installlibs=copylibs
endif

CFLAGS=-DUSE_RTSHADER_SYSTEM

LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1 
Default_Option=-s LINK_OPTIONS="['-L$(CurrentDir)/build/data/lib -lOgreRTShaderSystem -lOgreMain ']" 
Terrain_Option=-s LINK_OPTIONS="['-L$(CurrentDir)/build/data/lib -lOgreRTShaderSystem -lOgreMain -lTerrain ']" 
OgrePlugin=-lPlugin_ParticleFX  -lPlugin_PCZSceneManager -lPlugin_OctreeZone -lPlugin_OctreeSceneManager
OgreSamples=-lSample_BezierPatch -lSample_BSP -lSample_CameraTrack -lSample_CelShading -lSample_Character -lSample_Compositor \
-lSample_CubeMapping -lSample_DeferredShading -lSample_Dot3Bump -lSample_DynTex -lSample_DualQuaternion -lSample_FacialAnimation \
-lSample_Fresnel -lSample_Grass -lSample_Instancing -lSample_Isosurf -lSample_Lighting -lSample_NewInstancing \
-lSample_Ocean -lSample_ParticleGS -lSample_ParticleFX -lSample_ShaderSystem -lSample_Shadows -lSample_SkeletalAnimation \
-lSample_SkyBox -lSample_SkyDome -lSample_SkyPlane -lSample_Smoke -lSample_SphereMapping -lSample_SSAO -lSample_Terrain \
-lSample_TextureFX -lSample_TextureArray -lSample_Transparency -lSample_VolumeTex -lSample_Water
Browser_Option=-s LINK_OPTIONS="['-L$(CurrentDir)/build/data/lib $(OgrePlugin) $(OgreSamples) -lRenderSystem_GLES2 -lOgreRTShaderSystem -lOIS -lOgreMain ']" \
               -s EXPORTED_FUNCTIONS="['_renderOneFrame']" 

Browser_OBJECTS = \
$(Browser_Src_Dir)/FileSystemLayerImpl_Unix.bc \
$(Browser_Src_Dir)/SampleBrowser.bc 

SkyBox_OBJECTS = \
$(SkyBox_Src_Dir)/SkyBox.bc 

SkyPlane_OBJECTS = \
$(SkyPlane_Src_Dir)/SkyPlane.bc 

CameraTrack_OBJECTS = \
$(CameraTrack_Src_Dir)/CameraTrack.bc 

BezierPatch_OBJECTS = \
$(BezierPatch_Src_Dir)/BezierPatch.bc

BSP_OBJECTS = \
$(BSP_Src_Dir)/BSP.bc

CelShading_OBJECTS = \
$(CelShading_Src_Dir)/CelShading.bc

Character_OBJECTS = \
$(Character_Src_Dir)/CharacterSample.bc \
$(Character_Src_Dir)/Sinbad.bc

Compositor_OBJECTS = \
$(Compositor_Src_Dir)/Compositor.bc \
$(Compositor_Src_Dir)/HelperLogics.bc 

CubeMapping_OBJECTS = \
$(CubeMapping_Src_Dir)/CubeMapping.bc

DeferredShading_OBJECTS = \
$(DeferredShading_Src_Dir)/AmbientLight.bc \
$(DeferredShading_Src_Dir)/DeferredLightCP.bc \
$(DeferredShading_Src_Dir)/DeferredShading.bc \
$(DeferredShading_Src_Dir)/DeferredShadingDemo.bc \
$(DeferredShading_Src_Dir)/DLight.bc \
$(DeferredShading_Src_Dir)/GBufferMaterialGenerator.bc \
$(DeferredShading_Src_Dir)/GBufferSchemeHandler.bc \
$(DeferredShading_Src_Dir)/GeomUtils.bc \
$(DeferredShading_Src_Dir)/LightMaterialGenerator.bc \
$(DeferredShading_Src_Dir)/MaterialGenerator.bc \
$(DeferredShading_Src_Dir)/SSAOLogic.bc 

Dot3Bump_OBJECTS = \
$(Dot3Bump_Src_Dir)/Dot3Bump.bc

DualQuaternion_OBJECTS = \
$(DualQuaternion_Src_Dir)/DualQuaternion.bc

DynTex_OBJECTS = \
$(DynTex_Src_Dir)/DynTex.bc

FacialAnimation_OBJECTS = \
$(FacialAnimation_Src_Dir)/FacialAnimation.bc

Fresnel_OBJECTS = \
$(Fresnel_Src_Dir)/Fresnel.bc

Grass_OBJECTS = \
$(Grass_Src_Dir)/Grass.bc

Instancing_OBJECTS = \
$(Instancing_Src_Dir)/Instancing.bc

Isosurf_OBJECTS = \
$(Isosurf_Src_Dir)/ProceduralTools.bc \
$(Isosurf_Src_Dir)/Isosurf.bc

Lighting_OBJECTS = \
$(Lighting_Src_Dir)/Lighting.bc

NewInstancing_OBJECTS = \
$(NewInstancing_Src_Dir)/NewInstancing.bc

OceanDemo_OBJECTS = \
$(OceanDemo_Src_Dir)/OceanDemo.bc \
$(OceanDemo_Src_Dir)/MaterialControls.bc

ParticleFX_OBJECTS = \
$(ParticleFX_Src_Dir)/ParticleFX.bc

ParticleGS_OBJECTS = \
$(ParticleGS_Src_Dir)/ParticleGS.bc \
$(ParticleGS_Src_Dir)/ProceduralManualObject.bc \
$(ParticleGS_Src_Dir)/RandomTools.bc 

ShaderSystem_OBJECTS = \
$(ShaderSystem_Src_Dir)/ShaderSystem.bc \
$(ShaderSystem_Src_Dir)/ShaderExReflectionMap.bc \
$(ShaderSystem_Src_Dir)/OgreShaderExInstancedViewports.bc \

Shadows_OBJECTS = \
$(Shadows_Src_Dir)/Shadows.bc

SkeletalAnimation_OBJECTS = \
$(SkeletalAnimation_Src_Dir)/SkeletalAnimation.bc

SkyDome_OBJECTS = \
$(SkyDome_Src_Dir)/SkyDome.bc

Smoke_OBJECTS = \
$(Smoke_Src_Dir)/Smoke.bc

SphereMapping_OBJECTS = \
$(SphereMapping_Src_Dir)/SphereMapping.bc

SSAO_OBJECTS = \
$(SSAO_Src_Dir)/SSAO.bc

Terrain_OBJECTS = \
$(Terrain_Src_Dir)/Terrain.bc

TextureArray_OBJECTS = \
$(TextureArray_Src_Dir)/TextureArray.bc

TextureFX_OBJECTS = \
$(TextureFX_Src_Dir)/TextureFX.bc

Transparency_OBJECTS = \
$(Transparency_Src_Dir)/Transparency.bc

VolumeTex_OBJECTS = \
$(VolumeTex_Src_Dir)/VolumeTex.bc \
$(VolumeTex_Src_Dir)/ThingRenderable.bc \
$(VolumeTex_Src_Dir)/VolumeRenderable.bc 
Water_OBJECTS = \
$(Water_Src_Dir)/Water.bc \
$(Water_Src_Dir)/WaterMesh.bc

ALL_OBJECTS=$(Water_OBJECTS) $(VolumeTex_OBJECTS)  $(Transparency_OBJECTS) \
            $(TextureFX_OBJECTS) $(TextureArray_OBJECTS) $(Terrain_OBJECTS) $(SSAO_OBJECTS) \
            $(SphereMapping_OBJECTS) $(Smoke_OBJECTS) $(SkeletalAnimation_OBJECTS) $(ShaderSystem_OBJECTS) $(Shadows_OBJECTS) \
            $(ParticleGS_OBJECTS) $(ParticleFX_OBJECTS) $(OceanDemo_OBJECTS) $(NewInstancing_OBJECTS) $(Lighting_OBJECTS) \
            $(Isosurf_OBJECTS) $(Instancing_OBJECTS) $(Grass_OBJECTS) $(Fresnel_OBJECTS) $(FacialAnimation_OBJECTS) \
            $(DynTex_OBJECTS) $(DualQuaternion_OBJECTS) $(Dot3Bump_OBJECTS) $(DeferredShading_OBJECTS) $(CubeMapping_OBJECTS) \
            $(Compositor_OBJECTS) $(Compositor_OBJECTS) $(Character_OBJECTS) $(CelShading_OBJECTS) $(BSP_OBJECTS)  \
            $(BezierPatch_OBJECTS) $(SkyBox_OBJECTS) $(SkyPlane_OBJECTS) $(CameraTrack_OBJECTS) $(Browser_OBJECTS)

COMPILEFLAG=-O2 -s ASM_JS=0 -s LEGACY_GL_EMULATION=1
            

all: $(installlibs) $(Target)

%.bc: %.cpp
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $< -o $@

Browser.bc: $(Browser_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Browser_OBJECTS) 

libBrowser.so.js: Browser.bc libSample_SkyBox.so.js libSample_SkyPlane.so.js libSample_CameraTrack.so.js
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Browser_Option) -o $@ 
	@cp -f $@ build/data/lib

SkyBox.bc: $(SkyBox_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SkyBox_OBJECTS) 

libSample_SkyBox.so.js: SkyBox.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

SkyPlane.bc: $(SkyPlane_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SkyPlane_OBJECTS) 

libSample_SkyPlane.so.js: SkyPlane.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

CameraTrack.bc: $(CameraTrack_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(CameraTrack_OBJECTS) 

libSample_CameraTrack.so.js: CameraTrack.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

BezierPatch.bc: $(BezierPatch_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(BezierPatch_OBJECTS) 

libSample_BezierPatch.so.js: BezierPatch.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

BSP.bc: $(BSP_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(BSP_OBJECTS) 

libSample_BSP.so.js: BSP.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

CelShading.bc: $(CelShading_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(CelShading_OBJECTS) 

libSample_CelShading.so.js: CelShading.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Character.bc: $(Character_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Character_OBJECTS) 

libSample_Character.so.js: Character.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Compositor.bc: $(Compositor_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Compositor_OBJECTS) 

libSample_Compositor.so.js: Compositor.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

CubeMapping.bc: $(CubeMapping_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(CubeMapping_OBJECTS) 

libSample_CubeMapping.so.js: CubeMapping.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

DeferredShading.bc: $(DeferredShading_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(DeferredShading_OBJECTS) 

libSample_DeferredShading.so.js: DeferredShading.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Dot3Bump.bc: $(Dot3Bump_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Dot3Bump_OBJECTS) 

libSample_Dot3Bump.so.js: Dot3Bump.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

DualQuaternion.bc: $(DualQuaternion_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(DualQuaternion_OBJECTS) 

libSample_DualQuaternion.so.js: DualQuaternion.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

DynTex.bc: $(DynTex_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(DynTex_OBJECTS) 

libSample_DynTex.so.js: DynTex.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

FacialAnimation.bc: $(FacialAnimation_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(FacialAnimation_OBJECTS) 

libSample_FacialAnimation.so.js: FacialAnimation.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Fresnel.bc: $(Fresnel_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Fresnel_OBJECTS) 

libSample_Fresnel.so.js: Fresnel.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Grass.bc: $(Grass_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Grass_OBJECTS) 

libSample_Grass.so.js: Grass.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Instancing.bc: $(Instancing_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Instancing_OBJECTS) 

libSample_Instancing.so.js: Instancing.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Isosurf.bc: $(Isosurf_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Isosurf_OBJECTS) 

libSample_Isosurf.so.js: Isosurf.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Lighting.bc: $(Lighting_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Lighting_OBJECTS) 

libSample_Lighting.so.js: Lighting.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

NewInstancing.bc: $(NewInstancing_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(NewInstancing_OBJECTS) 

libSample_NewInstancing.so.js: NewInstancing.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

OceanDemo.bc: $(OceanDemo_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(OceanDemo_OBJECTS) 

libSample_Ocean.so.js: OceanDemo.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

ParticleFX.bc: $(ParticleFX_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(ParticleFX_OBJECTS) 

libSample_ParticleFX.so.js: ParticleFX.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

ParticleGS.bc: $(ParticleGS_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(ParticleGS_OBJECTS) 

libSample_ParticleGS.so.js: ParticleGS.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

ShaderSystem.bc: $(ShaderSystem_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(ShaderSystem_OBJECTS) 

libSample_ShaderSystem.so.js: ShaderSystem.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Shadows.bc: $(Shadows_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Shadows_OBJECTS) 

libSample_Shadows.so.js: Shadows.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

SkeletalAnimation.bc: $(SkeletalAnimation_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SkeletalAnimation_OBJECTS) 

libSample_SkeletalAnimation.so.js: SkeletalAnimation.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

SkyDome.bc: $(SkyDome_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SkyDome_OBJECTS) 

libSample_SkyDome.so.js: SkyDome.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Smoke.bc: $(Smoke_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Smoke_OBJECTS) 

libSample_Smoke.so.js: Smoke.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

SphereMapping.bc: $(SphereMapping_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SphereMapping_OBJECTS) 

libSample_SphereMapping.so.js: SphereMapping.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

SSAO.bc: $(SSAO_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(SSAO_OBJECTS) 

libSample_SSAO.so.js: SSAO.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Terrain.bc: $(Terrain_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Terrain_OBJECTS) 

libSample_Terrain.so.js: Terrain.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

TextureArray.bc: $(TextureArray_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(TextureArray_OBJECTS) 

libSample_TextureArray.so.js: TextureArray.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

TextureFX.bc: $(TextureFX_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(TextureFX_OBJECTS) 

libSample_TextureFX.so.js: TextureFX.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Transparency.bc: $(Transparency_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Transparency_OBJECTS) 

libSample_Transparency.so.js: Transparency.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

VolumeTex.bc: $(VolumeTex_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(VolumeTex_OBJECTS) 

libSample_VolumeTex.so.js: VolumeTex.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

Water.bc: $(Water_OBJECTS) 
	$(CXX) $(COMPILEFLAG) -o $@ $(Water_OBJECTS) 

libSample_Water.so.js: Water.bc
	$(CXX)  $< $(LIBLINK_DYNAMIC) $(Default_Option) -o $@ 
	@cp -f $@ build/data/lib

copylibs:
	@mkdir -p build/data/lib
	@cp -f ../../libs/Ogre/libfreeimage.so.js build/data/lib
	@cp -f ../../libs/Ogre/libfreetype.so.js build/data/lib
	@cp -f ../../libs/Ogre/libOIS.so.js build/data/lib
	@cp -f ../../libs/Ogre/libzzip.so.js build/data/lib
	@cp -f ../../libs/Ogre/libOgreMain.so.js build/data/lib
	@cp -f ../../libs/Ogre/libRenderSystem_GLES2.so.js build/data/lib
	@cp -f ../../libs/Ogre/libOgreRTShaderSystem.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPaging.so.js build/data/lib
	@cp -f ../../libs/Ogre/libTerrain.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPlugin_ParticleFX.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPlugin_BSPSceneManager.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPlugin_PCZSceneManager.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPlugin_OctreeZone.so.js build/data/lib
	@cp -f ../../libs/Ogre/libPlugin_OctreeSceneManager.so.js build/data/lib
	@cp -rf ../../../Samples/Media/ build/data

clean:
	@rm -rf *.js *.html *.bc *.a *.map build/*.html build/*.js build/data/lib build/data/Media $(ALL_OBJECTS)

