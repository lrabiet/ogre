# Makefile for generating a Orge library using Emscripten.

# For placing path overrides.. this path is hidden from git
-include Makefile.local
	      
BUILD_DIR=../..
TOP_DIR=$(BUILD_DIR)/..
CurrentDir=$(shell pwd)
tmpDir=tmp

OgreMain_Dir=$(tmpDir)/OgreMain
OgreMain_Src_Dir=$(OgreMain_Dir)/src
RenderSystem_GLES2_Dir=$(tmpDir)/RenderSystems/GLES2
RenderSystem_GLES2_Src_Dir=$(RenderSystem_GLES2_Dir)/src
Plugin_OctreeSceneManager_Dir=$(tmpDir)/PlugIns/OctreeSceneManager
Plugin_OctreeSceneManager_Src_Dir=$(Plugin_OctreeSceneManager_Dir)/src
Plugin_BSPSceneManager_Dir=$(tmpDir)/PlugIns/BSPSceneManager
Plugin_BSPSceneManager_Src_Dir=$(Plugin_BSPSceneManager_Dir)/src
Plugin_ParticleFX_Dir=$(tmpDir)/PlugIns/ParticleFX
Plugin_ParticleFX_Src_Dir=$(Plugin_ParticleFX_Dir)/src
Plugin_PCZSceneManager_Dir=$(tmpDir)/PlugIns/PCZSceneManager
Plugin_PCZSceneManager_Src_Dir=$(Plugin_PCZSceneManager_Dir)/src
Plugin_OctreeZone_Dir=$(tmpDir)/PlugIns/OctreeZone
Plugin_OctreeZone_Src_Dir=$(Plugin_OctreeZone_Dir)/src
Paging_Dir=$(tmpDir)/Components/Paging
Paging_Src_Dir=$(Paging_Dir)/src
Property_Dir=$(tmpDir)/Components/Property
Property_Src_Dir=$(Property_Dir)/src
Terrain_Dir=$(tmpDir)/Components/Terrain
Terrain_Src_Dir=$(Terrain_Dir)/src
OgreRTShaderSystem_Dir=$(tmpDir)/Components/RTShaderSystem
OgreRTShaderSystem_Src_Dir=$(OgreRTShaderSystem_Dir)/src
DirList=  $(OgreMain_Src_Dir) \
          $(OgreMain_Src_Dir)/Threading \
	  $(OgreMain_Src_Dir)/Emscripten \
          $(RenderSystem_GLES2_Src_Dir) \
          $(RenderSystem_GLES2_Src_Dir)/GLSLES/src \
          $(RenderSystem_GLES2_Src_Dir)/SDL \
          $(OgreRTShaderSystem_Src_Dir) \
          $(Terrain_Src_Dir) \
          $(Property_Src_Dir) \
          $(Paging_Src_Dir) \
          $(Plugin_OctreeZone_Src_Dir) \
          $(Plugin_PCZSceneManager_Src_Dir) \
          $(Plugin_ParticleFX_Src_Dir) \
          $(Plugin_BSPSceneManager_Src_Dir) \
          $(Plugin_OctreeSceneManager_Src_Dir) 

Target=libOgreMain.so.js libRenderSystem_GLES2.so.js \
       libPlugin_OctreeSceneManager.so.js libPlugin_BSPSceneManager.so.js \
       libPlugin_BSPSceneManager.so.js libPlugin_PCZSceneManager.so.js \
       libPlugin_ParticleFX.so.js libPlugin_OctreeZone.so.js \
       libPaging.so.js libProperty.so.js libTerrain.so.js libOgreRTShaderSystem.so.js

define make_target_dir
     @$(foreach dir,$(2),mkdir -p $(subst $(TOP_DIR),$(1),$(dir)); )
endef

INCLUDES=-I$(subst $(tmpDir),$(TOP_DIR),$(BUILD_DIR))/include -I. \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(BUILD_DIR))/sys-inc \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(OgreMain_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Plugin_OctreeSceneManager_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Plugin_BSPSceneManager_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Plugin_OctreeZone_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Paging_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Property_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Terrain_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(OgreRTShaderSystem_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Plugin_PCZSceneManager_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(Plugin_ParticleFX_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(OgreMain_Dir))/include/Emscripten \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(OgreMain_Src_Dir))/nedmalloc \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(RenderSystem_GLES2_Dir))/include \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(RenderSystem_GLES2_Dir))/include/SDL \
	 -I$(subst $(tmpDir),$(TOP_DIR),$(RenderSystem_GLES2_Src_Dir))/GLSLES/include 
	  

CFLAGS=-DEMSCRIPTEN_BUILD=1

COMPILEFLAG=-O2
LIBLINK_DYNAMIC=-s BUILD_AS_SHARED_LIB=1 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1  -s ASM_JS=0 \
                -s DISABLE_EXCEPTION_CATCHING=0 
LIBLINK_STATIC =-s BUILD_AS_SHARED_LIB=2 -s NAMED_GLOBALS=1 -s EXPORT_ALL=1 

RenderSystem_GLES2_OBJECTS = \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2Context.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2HardwareIndexBuffer.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2Support.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2Plugin.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2TextureManager.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2Texture.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2DefaultHardwareBufferManager.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2DepthBuffer.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2HardwarePixelBuffer.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2RenderTexture.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2FrameBufferObject.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2FBOMultiRenderTarget.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2HardwareOcclusionQuery.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2HardwareBufferManager.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2RenderSystem.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2PixelFormat.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2GpuProgramManager.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2EngineDll.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2HardwareVertexBuffer.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2GpuProgram.bc \
$(RenderSystem_GLES2_Src_Dir)/OgreGLES2FBORenderTexture.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgramManagerCommon.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgram.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgramPipelineManager.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgramPipeline.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESPreprocessor.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESLinkProgramManager.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgramCommon.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESExtSupport.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESLinkProgram.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESProgramFactory.bc \
$(RenderSystem_GLES2_Src_Dir)/GLSLES/src/OgreGLSLESGpuProgram.bc \
$(RenderSystem_GLES2_Src_Dir)/SDL/OgreSDLGLContext.bc \
$(RenderSystem_GLES2_Src_Dir)/SDL/OgreSDLGLSupport.bc \
$(RenderSystem_GLES2_Src_Dir)/SDL/OgreSDLWindow.bc 

OgreRTShaderSystem_OBJECTS = \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPColour.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPFog.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPLighting.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPRenderStateBuilder.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPTexturing.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFFPTransform.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFunction.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderFunctionAtom.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderGenerator.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderParameter.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgram.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgramManager.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgramSet.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgramWriter.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderRenderState.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderSubRenderState.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExNormalMapLighting.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExPerPixelLighting.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExIntegratedPSSM3.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderScriptTranslator.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderMaterialSerializerListener.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgramProcessor.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderCGProgramProcessor.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderCGProgramWriter.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderGLSLProgramProcessor.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderGLSLProgramWriter.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderProgramWriterManager.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderHLSLProgramProcessor.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExLayeredBlending.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExHardwareSkinning.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExTextureAtlasSampler.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderGLSLESProgramProcessor.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderGLSLESProgramWriter.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExLinearSkinning.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExHardwareSkinningTechnique.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderExDualQuaternionSkinning.bc \
$(OgreRTShaderSystem_Src_Dir)/OgreShaderHLSLProgramWriter.bc 

Terrain_OBJECTS = \
$(Terrain_Src_Dir)/OgreTerrain.bc \
$(Terrain_Src_Dir)/OgreTerrainGroup.bc \
$(Terrain_Src_Dir)/OgreTerrainLayerBlendMap.bc \
$(Terrain_Src_Dir)/OgreTerrainMaterialGenerator.bc \
$(Terrain_Src_Dir)/OgreTerrainMaterialGeneratorA.bc \
$(Terrain_Src_Dir)/OgreTerrainQuadTreeNode.bc \
$(Terrain_Src_Dir)/OgreTerrainPaging.bc \
$(Terrain_Src_Dir)/OgreTerrainPagedWorldSection.bc \

Property_OBJECTS = \
$(Property_Src_Dir)/OgreProperty.bc 

Paging_OBJECTS = \
$(Paging_Src_Dir)/OgreGrid2DPageStrategy.bc \
$(Paging_Src_Dir)/OgrePage.bc \
$(Paging_Src_Dir)/OgrePageContent.bc \
$(Paging_Src_Dir)/OgrePageContentCollection.bc \
$(Paging_Src_Dir)/OgrePagedWorld.bc \
$(Paging_Src_Dir)/OgrePagedWorldSection.bc \
$(Paging_Src_Dir)/OgrePageManager.bc \
$(Paging_Src_Dir)/OgreSimplePageContentCollection.bc \

Plugin_OctreeZone_OBJECTS = \
$(Plugin_OctreeZone_Src_Dir)/OgreOctreeZone.bc \
$(Plugin_OctreeZone_Src_Dir)/OgreOctreeZoneDll.bc \
$(Plugin_OctreeZone_Src_Dir)/OgreOctreeZoneOctree.bc \
$(Plugin_OctreeZone_Src_Dir)/OgreOctreeZonePlugin.bc \

Plugin_PCZSceneManager_OBJECTS = \
$(Plugin_PCZSceneManager_Src_Dir)/OgreAntiPortal.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgreCapsule.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgreDefaultZone.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCPlane.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZCamera.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZFrustum.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZLight.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZone.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZoneFactory.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZPlugin.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZSceneManager.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZSceneManagerDll.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZSceneNode.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePCZSceneQuery.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePortal.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgrePortalBase.bc \
$(Plugin_PCZSceneManager_Src_Dir)/OgreSegment.bc 

Plugin_ParticleFX_OBJECTS = \
$(Plugin_ParticleFX_Src_Dir)/OgreAreaEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreBoxEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreColourFaderAffector2.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreColourFaderAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreColourImageAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreColourInterpolatorAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreCylinderEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreDeflectorPlaneAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreDirectionRandomiserAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreEllipsoidEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreHollowEllipsoidEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreLinearForceAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreParticleFX.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreParticleFXPlugin.bc \
$(Plugin_ParticleFX_Src_Dir)/OgrePointEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreRingEmitter.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreRotationAffector.bc \
$(Plugin_ParticleFX_Src_Dir)/OgreScaleAffector.bc \

Plugin_BSPSceneManager_OBJECTS = \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspLevel.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspNode.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspResourceManager.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspSceneManager.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspSceneManagerDll.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspSceneManagerPlugin.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreBspSceneNode.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreQuake3Level.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreQuake3Shader.bc \
$(Plugin_BSPSceneManager_Src_Dir)/OgreQuake3ShaderManager.bc 

Plugin_OctreeSceneManager_OBJECTS = \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctree.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreeCamera.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreeNode.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreePlugin.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreeSceneManager.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreeSceneManagerDll.bc \
$(Plugin_OctreeSceneManager_Src_Dir)/OgreOctreeSceneQuery.bc \

OgreMain_OBJECTS = \
$(OgreMain_Src_Dir)/OgreFreeImageCodec.bc \
$(OgreMain_Src_Dir)/OgreInstancedEntity.bc \
$(OgreMain_Src_Dir)/OgreDualQuaternion.bc \
$(OgreMain_Src_Dir)/OgreInstanceManager.bc \
$(OgreMain_Src_Dir)/OgreInstanceBatch.bc \
$(OgreMain_Src_Dir)/OgreInstanceBatchHW.bc \
$(OgreMain_Src_Dir)/OgreInstanceBatchHW_VTF.bc \
$(OgreMain_Src_Dir)/OgreInstanceBatchShader.bc \
$(OgreMain_Src_Dir)/OgreInstanceBatchVTF.bc \
$(OgreMain_Src_Dir)/OgreAlignedAllocator.bc \
$(OgreMain_Src_Dir)/OgreAnimable.bc \
$(OgreMain_Src_Dir)/OgreAnimation.bc \
$(OgreMain_Src_Dir)/OgreAnimationState.bc \
$(OgreMain_Src_Dir)/OgreAnimationTrack.bc \
$(OgreMain_Src_Dir)/OgreArchiveManager.bc \
$(OgreMain_Src_Dir)/OgreAutoParamDataSource.bc \
$(OgreMain_Src_Dir)/OgreAxisAlignedBox.bc \
$(OgreMain_Src_Dir)/OgreBillboard.bc \
$(OgreMain_Src_Dir)/OgreBillboardChain.bc \
$(OgreMain_Src_Dir)/OgreBillboardParticleRenderer.bc \
$(OgreMain_Src_Dir)/OgreBillboardSet.bc \
$(OgreMain_Src_Dir)/OgreBone.bc \
$(OgreMain_Src_Dir)/OgreBorderPanelOverlayElement.bc \
$(OgreMain_Src_Dir)/OgreCamera.bc \
$(OgreMain_Src_Dir)/OgreCodec.bc \
$(OgreMain_Src_Dir)/OgreColourValue.bc \
$(OgreMain_Src_Dir)/OgreCommon.bc \
$(OgreMain_Src_Dir)/OgreCompositionPass.bc \
$(OgreMain_Src_Dir)/OgreCompositionTargetPass.bc \
$(OgreMain_Src_Dir)/OgreCompositionTechnique.bc \
$(OgreMain_Src_Dir)/OgreCompositor.bc \
$(OgreMain_Src_Dir)/OgreCompositorChain.bc \
$(OgreMain_Src_Dir)/OgreCompositorInstance.bc \
$(OgreMain_Src_Dir)/OgreCompositorManager.bc \
$(OgreMain_Src_Dir)/OgreConfigFile.bc \
$(OgreMain_Src_Dir)/OgreControllerManager.bc \
$(OgreMain_Src_Dir)/OgreConvexBody.bc \
$(OgreMain_Src_Dir)/OgreDataStream.bc \
$(OgreMain_Src_Dir)/OgreDefaultHardwareBufferManager.bc \
$(OgreMain_Src_Dir)/OgreDefaultSceneQueries.bc \
$(OgreMain_Src_Dir)/OgreDeflate.bc \
$(OgreMain_Src_Dir)/OgreDistanceLodStrategy.bc \
$(OgreMain_Src_Dir)/OgreDynLib.bc \
$(OgreMain_Src_Dir)/OgreDynLibManager.bc \
$(OgreMain_Src_Dir)/OgreEdgeListBuilder.bc \
$(OgreMain_Src_Dir)/OgreEntity.bc \
$(OgreMain_Src_Dir)/OgreException.bc \
$(OgreMain_Src_Dir)/OgreExternalTextureSource.bc \
$(OgreMain_Src_Dir)/OgreExternalTextureSourceManager.bc \
$(OgreMain_Src_Dir)/OgreFileSystem.bc \
$(OgreMain_Src_Dir)/OgreFont.bc \
$(OgreMain_Src_Dir)/OgreFontManager.bc \
$(OgreMain_Src_Dir)/OgreFrustum.bc \
$(OgreMain_Src_Dir)/OgreGpuProgram.bc \
$(OgreMain_Src_Dir)/OgreGpuProgramManager.bc \
$(OgreMain_Src_Dir)/OgreGpuProgramParams.bc \
$(OgreMain_Src_Dir)/OgreGpuProgramUsage.bc \
$(OgreMain_Src_Dir)/OgreHardwareBufferManager.bc \
$(OgreMain_Src_Dir)/OgreHardwareIndexBuffer.bc \
$(OgreMain_Src_Dir)/OgreHardwareOcclusionQuery.bc \
$(OgreMain_Src_Dir)/OgreHardwarePixelBuffer.bc \
$(OgreMain_Src_Dir)/OgreHighLevelGpuProgram.bc \
$(OgreMain_Src_Dir)/OgreHighLevelGpuProgramManager.bc \
$(OgreMain_Src_Dir)/OgreImage.bc \
$(OgreMain_Src_Dir)/OgreInstancedGeometry.bc \
$(OgreMain_Src_Dir)/OgreKeyFrame.bc \
$(OgreMain_Src_Dir)/OgreLight.bc \
$(OgreMain_Src_Dir)/OgreLodStrategy.bc \
$(OgreMain_Src_Dir)/OgreLodStrategyManager.bc \
$(OgreMain_Src_Dir)/OgreLog.bc \
$(OgreMain_Src_Dir)/OgreLogManager.bc \
$(OgreMain_Src_Dir)/OgreManualObject.bc \
$(OgreMain_Src_Dir)/OgreMaterial.bc \
$(OgreMain_Src_Dir)/OgreMaterialManager.bc \
$(OgreMain_Src_Dir)/OgreMaterialSerializer.bc \
$(OgreMain_Src_Dir)/OgreMath.bc \
$(OgreMain_Src_Dir)/OgreMatrix3.bc \
$(OgreMain_Src_Dir)/OgreMatrix4.bc \
$(OgreMain_Src_Dir)/OgreMemoryAllocatedObject.bc \
$(OgreMain_Src_Dir)/OgreMemoryNedAlloc.bc \
$(OgreMain_Src_Dir)/OgreMemoryNedPooling.bc \
$(OgreMain_Src_Dir)/OgreMemoryTracker.bc \
$(OgreMain_Src_Dir)/OgreMesh.bc \
$(OgreMain_Src_Dir)/OgreMeshSerializer.bc \
$(OgreMain_Src_Dir)/OgreMeshSerializerImpl.bc \
$(OgreMain_Src_Dir)/OgreMovableObject.bc \
$(OgreMain_Src_Dir)/OgreMovablePlane.bc \
$(OgreMain_Src_Dir)/OgreNode.bc \
$(OgreMain_Src_Dir)/OgreNumerics.bc \
$(OgreMain_Src_Dir)/OgreOptimisedUtil.bc \
$(OgreMain_Src_Dir)/OgreOptimisedUtilGeneral.bc \
$(OgreMain_Src_Dir)/OgreOptimisedUtilSSE.bc \
$(OgreMain_Src_Dir)/OgreOverlay.bc \
$(OgreMain_Src_Dir)/OgreOverlayContainer.bc \
$(OgreMain_Src_Dir)/OgreOverlayElement.bc \
$(OgreMain_Src_Dir)/OgreOverlayElementCommands.bc \
$(OgreMain_Src_Dir)/OgreOverlayElementFactory.bc \
$(OgreMain_Src_Dir)/OgreOverlayManager.bc \
$(OgreMain_Src_Dir)/OgrePanelOverlayElement.bc \
$(OgreMain_Src_Dir)/OgreParticle.bc \
$(OgreMain_Src_Dir)/OgreParticleEmitter.bc \
$(OgreMain_Src_Dir)/OgreParticleEmitterCommands.bc \
$(OgreMain_Src_Dir)/OgreParticleIterator.bc \
$(OgreMain_Src_Dir)/OgreParticleSystem.bc \
$(OgreMain_Src_Dir)/OgreParticleSystemManager.bc \
$(OgreMain_Src_Dir)/OgrePass.bc \
$(OgreMain_Src_Dir)/OgrePatchMesh.bc \
$(OgreMain_Src_Dir)/OgrePatchSurface.bc \
$(OgreMain_Src_Dir)/OgrePixelCountLodStrategy.bc \
$(OgreMain_Src_Dir)/OgrePixelFormat.bc \
$(OgreMain_Src_Dir)/OgrePlane.bc \
$(OgreMain_Src_Dir)/OgrePlatformInformation.bc \
$(OgreMain_Src_Dir)/OgrePolygon.bc \
$(OgreMain_Src_Dir)/OgrePose.bc \
$(OgreMain_Src_Dir)/OgrePrecompiledHeaders.bc \
$(OgreMain_Src_Dir)/OgrePredefinedControllers.bc \
$(OgreMain_Src_Dir)/OgrePrefabFactory.bc \
$(OgreMain_Src_Dir)/OgreProfiler.bc \
$(OgreMain_Src_Dir)/OgreProgressiveMesh.bc \
$(OgreMain_Src_Dir)/OgreQuaternion.bc \
$(OgreMain_Src_Dir)/OgreRectangle2D.bc \
$(OgreMain_Src_Dir)/OgreRenderQueue.bc \
$(OgreMain_Src_Dir)/OgreRenderQueueInvocation.bc \
$(OgreMain_Src_Dir)/OgreRenderQueueSortingGrouping.bc \
$(OgreMain_Src_Dir)/OgreRenderSystem.bc \
$(OgreMain_Src_Dir)/OgreRenderSystemCapabilities.bc \
$(OgreMain_Src_Dir)/OgreRenderSystemCapabilitiesManager.bc \
$(OgreMain_Src_Dir)/OgreRenderSystemCapabilitiesSerializer.bc \
$(OgreMain_Src_Dir)/OgreRenderTarget.bc \
$(OgreMain_Src_Dir)/OgreRenderTexture.bc \
$(OgreMain_Src_Dir)/OgreRenderToVertexBuffer.bc \
$(OgreMain_Src_Dir)/OgreRenderWindow.bc \
$(OgreMain_Src_Dir)/OgreResource.bc \
$(OgreMain_Src_Dir)/OgreResourceBackgroundQueue.bc \
$(OgreMain_Src_Dir)/OgreResourceGroupManager.bc \
$(OgreMain_Src_Dir)/OgreResourceManager.bc \
$(OgreMain_Src_Dir)/OgreRibbonTrail.bc \
$(OgreMain_Src_Dir)/OgreRoot.bc \
$(OgreMain_Src_Dir)/OgreRotationSpline.bc \
$(OgreMain_Src_Dir)/OgreSceneManager.bc \
$(OgreMain_Src_Dir)/OgreSceneManagerEnumerator.bc \
$(OgreMain_Src_Dir)/OgreSceneNode.bc \
$(OgreMain_Src_Dir)/OgreSceneQuery.bc \
$(OgreMain_Src_Dir)/OgreScriptCompiler.bc \
$(OgreMain_Src_Dir)/OgreScriptLexer.bc \
$(OgreMain_Src_Dir)/OgreScriptParser.bc \
$(OgreMain_Src_Dir)/OgreScriptTranslator.bc \
$(OgreMain_Src_Dir)/OgreSerializer.bc \
$(OgreMain_Src_Dir)/OgreShadowCameraSetup.bc \
$(OgreMain_Src_Dir)/OgreShadowCameraSetupFocused.bc \
$(OgreMain_Src_Dir)/OgreShadowCameraSetupLiSPSM.bc \
$(OgreMain_Src_Dir)/OgreShadowCameraSetupPlaneOptimal.bc \
$(OgreMain_Src_Dir)/OgreShadowCameraSetupPSSM.bc \
$(OgreMain_Src_Dir)/OgreShadowCaster.bc \
$(OgreMain_Src_Dir)/OgreShadowTextureManager.bc \
$(OgreMain_Src_Dir)/OgreShadowVolumeExtrudeProgram.bc \
$(OgreMain_Src_Dir)/OgreSimpleRenderable.bc \
$(OgreMain_Src_Dir)/OgreSimpleSpline.bc \
$(OgreMain_Src_Dir)/OgreSkeleton.bc \
$(OgreMain_Src_Dir)/OgreSkeletonInstance.bc \
$(OgreMain_Src_Dir)/OgreSkeletonManager.bc \
$(OgreMain_Src_Dir)/OgreSkeletonSerializer.bc \
$(OgreMain_Src_Dir)/OgreSmallVector.bc \
$(OgreMain_Src_Dir)/OgreStaticGeometry.bc \
$(OgreMain_Src_Dir)/OgreStreamSerialiser.bc \
$(OgreMain_Src_Dir)/OgreString.bc \
$(OgreMain_Src_Dir)/OgreStringConverter.bc \
$(OgreMain_Src_Dir)/OgreStringInterface.bc \
$(OgreMain_Src_Dir)/OgreSubEntity.bc \
$(OgreMain_Src_Dir)/OgreSubMesh.bc \
$(OgreMain_Src_Dir)/OgreTagPoint.bc \
$(OgreMain_Src_Dir)/OgreTangentSpaceCalc.bc \
$(OgreMain_Src_Dir)/OgreTechnique.bc \
$(OgreMain_Src_Dir)/OgreTextAreaOverlayElement.bc \
$(OgreMain_Src_Dir)/OgreTexture.bc \
$(OgreMain_Src_Dir)/OgreTextureManager.bc \
$(OgreMain_Src_Dir)/OgreTextureUnitState.bc \
$(OgreMain_Src_Dir)/OgreUnifiedHighLevelGpuProgram.bc \
$(OgreMain_Src_Dir)/OgreUserObjectBindings.bc \
$(OgreMain_Src_Dir)/OgreUTFString.bc \
$(OgreMain_Src_Dir)/OgreVector2.bc \
$(OgreMain_Src_Dir)/OgreVector3.bc \
$(OgreMain_Src_Dir)/OgreVector4.bc \
$(OgreMain_Src_Dir)/OgreVertexIndexData.bc \
$(OgreMain_Src_Dir)/OgreHardwareVertexBuffer.bc \
$(OgreMain_Src_Dir)/OgreViewport.bc \
$(OgreMain_Src_Dir)/OgreWindowEventUtilities.bc \
$(OgreMain_Src_Dir)/OgreWireBoundingBox.bc \
$(OgreMain_Src_Dir)/OgreWorkQueue.bc \
$(OgreMain_Src_Dir)/OgreDDSCodec.bc \
$(OgreMain_Src_Dir)/OgreMeshManager.bc \
$(OgreMain_Src_Dir)/OgrePVRTCCodec.bc \
$(OgreMain_Src_Dir)/OgreDepthBuffer.bc \
$(OgreMain_Src_Dir)/OgreZip.bc \
$(OgreMain_Src_Dir)/Emscripten/OgreConfigDialog.bc \
$(OgreMain_Src_Dir)/Emscripten/OgreErrorDialog.bc \
$(OgreMain_Src_Dir)/Emscripten/OgreTimer.bc \
$(OgreMain_Src_Dir)/OgreSearchOps.bc \
$(OgreMain_Src_Dir)/Threading/OgreDefaultWorkQueueStandard.bc 

all: makedir $(Target)

%.bc: 
	$(CXX) $(COMPILEFLAG) $(INCLUDES) $(CFLAGS) $(subst $(tmpDir),$(TOP_DIR),$(patsubst %.bc,%.cpp,$@) ) -o $@

makedir:
	$(call make_target_dir,$(tmpDir),$(DirList))

libOgreRTShaderSystem.a: $(OgreRTShaderSystem_OBJECTS) 
	$(AR)  r $@ $(OgreRTShaderSystem_OBJECTS)

libOgreRTShaderSystem.so.js: libOgreRTShaderSystem.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libTerrain.a: $(Terrain_OBJECTS) 
	$(AR)  r $@ $(Terrain_OBJECTS)

libTerrain.so.js: libTerrain.a libOgreMain.so.js libPaging.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain -lPaging']" $< -o $@

libPaging.a: $(Paging_OBJECTS) 
	$(AR)  r $@ $(Paging_OBJECTS)

libPaging.so.js: libPaging.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libPlugin_OctreeZone.a: $(Plugin_OctreeZone_OBJECTS) 
	$(AR)  r $@ $(Plugin_OctreeZone_OBJECTS)

libPlugin_OctreeZone.so.js: libPlugin_OctreeZone.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libPlugin_PCZSceneManager.a: $(Plugin_PCZSceneManager_OBJECTS) 
	$(AR)  r $@ $(Plugin_PCZSceneManager_OBJECTS)

libPlugin_PCZSceneManager.so.js: libPlugin_PCZSceneManager.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libPlugin_ParticleFX.a: $(Plugin_ParticleFX_OBJECTS) 
	$(AR)  r $@ $(Plugin_ParticleFX_OBJECTS)

libPlugin_ParticleFX.so.js: libPlugin_ParticleFX.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libPlugin_BSPSceneManager.a: $(Plugin_BSPSceneManager_OBJECTS) 
	$(AR)  r $@ $(Plugin_BSPSceneManager_OBJECTS)

libPlugin_BSPSceneManager.so.js: libPlugin_BSPSceneManager.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libPlugin_OctreeSceneManager.a: $(Plugin_OctreeSceneManager_OBJECTS) 
	$(AR)  r $@ $(Plugin_OctreeSceneManager_OBJECTS)

libPlugin_OctreeSceneManager.so.js: libPlugin_OctreeSceneManager.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libRenderSystem_GLES2.a: $(RenderSystem_GLES2_OBJECTS) 
	$(AR)  r $@ $(RenderSystem_GLES2_OBJECTS)

libRenderSystem_GLES2.so.js: libRenderSystem_GLES2.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

libOgreMain.a: $(OgreMain_OBJECTS) 
	$(AR)  r $@ $(OgreMain_OBJECTS)

libOgreMain.so.js: libOgreMain.a 
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lfreeimage -lzzip -lfreetype']" $< -o $@

libProperty.a: $(Property_OBJECTS) 
	$(AR)  r $@ $(Property_OBJECTS)

libProperty.so.js: libProperty.a libOgreMain.so.js
	$(CXX) $(COMPILEFLAG) $(LIBLINK_DYNAMIC) -s LINK_OPTIONS="['-L$(CurrentDir) -lOgreMain']" $< -o $@

clean:
	rm -rf *.js *.js.map *.bc *.a $(tmpDir)

