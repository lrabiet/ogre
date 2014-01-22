; ModuleID = 'ois-v1-3/src/OISInputManager.bc'
target datalayout = "e-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-p:32:32:32-v128:32:32"
target triple = "le32-unknown-nacl"

%"class.OIS::InputManager" = type { i32 (...)**, %"class.std::__1::basic_string", %"class.std::__1::vector", %"class.std::__1::map", %"class.std::__1::basic_string", %"class.OIS::LIRCFactoryCreator"*, %"class.OIS::WiiMoteFactoryCreator"* }
%"class.std::__1::basic_string" = type { %"class.std::__1::__compressed_pair" }
%"class.std::__1::__compressed_pair" = type { %"class.std::__1::__libcpp_compressed_pair_imp" }
%"class.std::__1::__libcpp_compressed_pair_imp" = type { %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__rep" }
%"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__rep" = type { %union.anon }
%union.anon = type { %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__long" }
%"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__long" = type { i32, i32, i8* }
%"class.std::__1::vector" = type { %"class.std::__1::__vector_base" }
%"class.std::__1::__vector_base" = type { %"class.OIS::FactoryCreator"**, %"class.OIS::FactoryCreator"**, %"class.std::__1::__compressed_pair.1" }
%"class.OIS::FactoryCreator" = type { i32 (...)** }
%"class.std::__1::__compressed_pair.1" = type { %"class.std::__1::__libcpp_compressed_pair_imp.2" }
%"class.std::__1::__libcpp_compressed_pair_imp.2" = type { %"class.OIS::FactoryCreator"** }
%"class.std::__1::map" = type { %"class.std::__1::__tree" }
%"class.std::__1::__tree" = type { %"class.std::__1::__tree_node"*, %"class.std::__1::__compressed_pair.5", %"class.std::__1::__compressed_pair.9" }
%"class.std::__1::__tree_node" = type { %"class.std::__1::__tree_node_base", %"struct.std::__1::map<OIS::Object *, OIS::FactoryCreator *, std::__1::less<OIS::Object *>, std::__1::allocator<std::__1::pair<OIS::Object *const, OIS::FactoryCreator *> > >::__value_type" }
%"class.std::__1::__tree_node_base" = type { %"class.std::__1::__tree_end_node", %"class.std::__1::__tree_node_base"*, %"class.std::__1::__tree_node_base"*, i8 }
%"class.std::__1::__tree_end_node" = type { %"class.std::__1::__tree_node_base"* }
%"struct.std::__1::map<OIS::Object *, OIS::FactoryCreator *, std::__1::less<OIS::Object *>, std::__1::allocator<std::__1::pair<OIS::Object *const, OIS::FactoryCreator *> > >::__value_type" = type { %"struct.std::__1::pair.51" }
%"struct.std::__1::pair.51" = type { %"class.OIS::Object"*, %"class.OIS::FactoryCreator"* }
%"class.OIS::Object" = type { i32 (...)**, %"class.std::__1::basic_string", i32, i8, i32, %"class.OIS::InputManager"* }
%"class.std::__1::__compressed_pair.5" = type { %"class.std::__1::__libcpp_compressed_pair_imp.6" }
%"class.std::__1::__libcpp_compressed_pair_imp.6" = type { %"class.std::__1::__tree_end_node" }
%"class.std::__1::__compressed_pair.9" = type { %"class.std::__1::__libcpp_compressed_pair_imp.10" }
%"class.std::__1::__libcpp_compressed_pair_imp.10" = type { i32 }
%"class.OIS::LIRCFactoryCreator" = type opaque
%"class.OIS::WiiMoteFactoryCreator" = type opaque
%"class.std::__1::__tree_iterator" = type { %"class.std::__1::__tree_node.12"* }
%"class.std::__1::__tree_node.12" = type { %"class.std::__1::__tree_node_base", %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type" }
%"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type" = type { %"struct.std::__1::pair" }
%"struct.std::__1::pair" = type { %"class.std::__1::basic_string", %"class.std::__1::basic_string" }
%"class.std::__1::multimap" = type { %"class.std::__1::__tree.11" }
%"class.std::__1::__tree.11" = type { %"class.std::__1::__tree_node.12"*, %"class.std::__1::__compressed_pair.13", %"class.std::__1::__compressed_pair.17" }
%"class.std::__1::__compressed_pair.13" = type { %"class.std::__1::__libcpp_compressed_pair_imp.14" }
%"class.std::__1::__libcpp_compressed_pair_imp.14" = type { %"class.std::__1::__tree_end_node" }
%"class.std::__1::__compressed_pair.17" = type { %"class.std::__1::__libcpp_compressed_pair_imp.18" }
%"class.std::__1::__libcpp_compressed_pair_imp.18" = type { i32 }
%"class.std::__1::basic_ostringstream" = type { %"class.std::__1::basic_ostream.base", %"class.std::__1::basic_stringbuf", %"class.std::__1::basic_ios" }
%"class.std::__1::basic_ostream.base" = type { i32 (...)** }
%"class.std::__1::basic_stringbuf" = type { %"class.std::__1::basic_streambuf", %"class.std::__1::basic_string", i8*, i32 }
%"class.std::__1::basic_streambuf" = type { i32 (...)**, %"class.std::__1::locale", i8*, i8*, i8*, i8*, i8*, i8* }
%"class.std::__1::locale" = type { %"class.std::__1::locale::__imp"* }
%"class.std::__1::locale::__imp" = type opaque
%"class.std::__1::basic_ios" = type { %"class.std::__1::ios_base", %"class.std::__1::basic_ostream"*, i32 }
%"class.std::__1::ios_base" = type { i32 (...)**, i32, i32, i32, i32, i32, i8*, i8*, void (i32, %"class.std::__1::ios_base"*, i32)**, i32*, i32, i32, i32*, i32, i32, i8**, i32, i32 }
%"class.std::__1::basic_ostream" = type { i32 (...)**, %"class.std::__1::basic_ios" }
%"struct.std::__1::pair.22" = type { %"class.std::__1::basic_string", %"class.std::__1::basic_string" }
%"class.std::__1::__basic_string_common" = type { i8 }
%"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short" = type { %union.anon.0, [11 x i8] }
%union.anon.0 = type { i8 }
%"class.OIS::LinuxInputManager" = type { %"class.OIS::InputManager", %"class.OIS::FactoryCreator", %"class.std::__1::vector.23", i8, i8, i8, i32, i8, i8, i8, i8 }
%"class.std::__1::vector.23" = type { %"class.std::__1::__vector_base.24" }
%"class.std::__1::__vector_base.24" = type { %"class.OIS::JoyStickInfo"*, %"class.OIS::JoyStickInfo"*, %"class.std::__1::__compressed_pair.47" }
%"class.OIS::JoyStickInfo" = type { i32, i32, i32, %"class.std::__1::basic_string", i8, i8, i8, %"class.std::__1::map.25", %"class.std::__1::map.25", %"class.std::__1::map.37" }
%"class.std::__1::map.25" = type { %"class.std::__1::__tree.26" }
%"class.std::__1::__tree.26" = type { %"class.std::__1::__tree_node.27"*, %"class.std::__1::__compressed_pair.28", %"class.std::__1::__compressed_pair.32" }
%"class.std::__1::__tree_node.27" = type { %"class.std::__1::__tree_node_base", %"struct.std::__1::map<int, int, std::__1::less<int>, std::__1::allocator<std::__1::pair<const int, int> > >::__value_type" }
%"struct.std::__1::map<int, int, std::__1::less<int>, std::__1::allocator<std::__1::pair<const int, int> > >::__value_type" = type { %"struct.std::__1::pair.70" }
%"struct.std::__1::pair.70" = type { i32, i32 }
%"class.std::__1::__compressed_pair.28" = type { %"class.std::__1::__libcpp_compressed_pair_imp.29" }
%"class.std::__1::__libcpp_compressed_pair_imp.29" = type { %"class.std::__1::__tree_end_node" }
%"class.std::__1::__compressed_pair.32" = type { %"class.std::__1::__libcpp_compressed_pair_imp.33" }
%"class.std::__1::__libcpp_compressed_pair_imp.33" = type { i32 }
%"class.std::__1::map.37" = type { %"class.std::__1::__tree.38" }
%"class.std::__1::__tree.38" = type { %"class.std::__1::__tree_node.39"*, %"class.std::__1::__compressed_pair.40", %"class.std::__1::__compressed_pair.44" }
%"class.std::__1::__tree_node.39" = type { %"class.std::__1::__tree_node_base", %"struct.std::__1::map<int, OIS::Range, std::__1::less<int>, std::__1::allocator<std::__1::pair<const int, OIS::Range> > >::__value_type" }
%"struct.std::__1::map<int, OIS::Range, std::__1::less<int>, std::__1::allocator<std::__1::pair<const int, OIS::Range> > >::__value_type" = type { %"struct.std::__1::pair.71" }
%"struct.std::__1::pair.71" = type { i32, %"class.OIS::Range" }
%"class.OIS::Range" = type { i32, i32 }
%"class.std::__1::__compressed_pair.40" = type { %"class.std::__1::__libcpp_compressed_pair_imp.41" }
%"class.std::__1::__libcpp_compressed_pair_imp.41" = type { %"class.std::__1::__tree_end_node" }
%"class.std::__1::__compressed_pair.44" = type { %"class.std::__1::__libcpp_compressed_pair_imp.45" }
%"class.std::__1::__libcpp_compressed_pair_imp.45" = type { i32 }
%"class.std::__1::__compressed_pair.47" = type { %"class.std::__1::__libcpp_compressed_pair_imp.48" }
%"class.std::__1::__libcpp_compressed_pair_imp.48" = type { %"class.OIS::JoyStickInfo"* }
%"class.std::__1::multimap.54" = type { %"class.std::__1::__tree.55" }
%"class.std::__1::__tree.55" = type { %"class.std::__1::__tree_node.56"*, %"class.std::__1::__compressed_pair.58", %"class.std::__1::__compressed_pair.62" }
%"class.std::__1::__tree_node.56" = type { %"class.std::__1::__tree_node_base", %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type" }
%"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type" = type { %"struct.std::__1::pair.57" }
%"struct.std::__1::pair.57" = type { i32, %"class.std::__1::basic_string" }
%"class.std::__1::__compressed_pair.58" = type { %"class.std::__1::__libcpp_compressed_pair_imp.59" }
%"class.std::__1::__libcpp_compressed_pair_imp.59" = type { %"class.std::__1::__tree_end_node" }
%"class.std::__1::__compressed_pair.62" = type { %"class.std::__1::__libcpp_compressed_pair_imp.63" }
%"class.std::__1::__libcpp_compressed_pair_imp.63" = type { i32 }
%"class.std::__1::__tree_const_iterator.81" = type { %"class.std::__1::__tree_node.56"* }
%"class.std::__1::__tree_iterator.68" = type { %"class.std::__1::__tree_node.56"* }
%"class.OIS::Exception" = type { %"class.std::exception", i32, i32, i8*, i8* }
%"class.std::exception" = type { i32 (...)** }
%"class.std::__1::__vector_base_common" = type { i8 }
%"class.std::__1::fpos" = type { %struct.__mbstate_t, i64 }
%struct.__mbstate_t = type { i32, %union.anon.94 }
%union.anon.94 = type { i32 }

@_ZTVN3OIS12InputManagerE = unnamed_addr constant [5 x i8*] [i8* null, i8* bitcast ({ i8*, i8* }* @_ZTIN3OIS12InputManagerE to i8*), i8* bitcast (void ()* @__cxa_pure_virtual to i8*), i8* bitcast (void (%"class.OIS::InputManager"*)* @_ZN3OIS12InputManagerD2Ev to i8*), i8* bitcast (void (%"class.OIS::InputManager"*)* @_ZN3OIS12InputManagerD0Ev to i8*)]
@.str = private unnamed_addr constant [6 x i8] c"1.3.0\00", align 1
@.str1 = private unnamed_addr constant [7 x i8] c"WINDOW\00", align 1
@.str2 = private unnamed_addr constant [1 x i8] zeroinitializer, align 1
@.str3 = private unnamed_addr constant [33 x i8] c"No devices match requested type.\00", align 1
@.str4 = private unnamed_addr constant [33 x i8] c"ois-v1-3/src/OISInputManager.cpp\00", align 1
@_ZTIN3OIS9ExceptionE = external constant i8*
@.str5 = private unnamed_addr constant [26 x i8] c"Object creator not known.\00", align 1
@_ZTVN10__cxxabiv117__class_type_infoE = external global i8*
@_ZTSN3OIS12InputManagerE = constant [21 x i8] c"N3OIS12InputManagerE\00"
@_ZTIN3OIS12InputManagerE = unnamed_addr constant { i8*, i8* } { i8* bitcast (i8** getelementptr inbounds (i8** @_ZTVN10__cxxabiv117__class_type_infoE, i32 2) to i8*), i8* getelementptr inbounds ([21 x i8]* @_ZTSN3OIS12InputManagerE, i32 0, i32 0) }
@_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr unnamed_addr constant [10 x i8*] [i8* inttoptr (i32 56 to i8*), i8* null, i8* bitcast ({ i8*, i8*, i8* }* @_ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE to i8*), i8* bitcast (void (%"class.std::__1::basic_ostringstream"*)* @_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_ostringstream"*)* @_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev to i8*), i8* inttoptr (i32 -56 to i8*), i8* inttoptr (i32 -56 to i8*), i8* bitcast ({ i8*, i8*, i8* }* @_ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE to i8*), i8* bitcast (void (%"class.std::__1::basic_ostringstream"*)* @_ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_ostringstream"*)* @_ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev to i8*)]
@_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr unnamed_addr constant [4 x i8*] [i8* bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i64 0, i64 3) to i8*), i8* bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE, i64 0, i64 3) to i8*), i8* bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE, i64 0, i64 8) to i8*), i8* bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i64 0, i64 8) to i8*)]
@_ZTVN10__cxxabiv120__si_class_type_infoE = external global i8*
@_ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr constant [70 x i8] c"NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE\00"
@_ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE = external constant i8*
@_ZTINSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr unnamed_addr constant { i8*, i8*, i8* } { i8* bitcast (i8** getelementptr inbounds (i8** @_ZTVN10__cxxabiv120__si_class_type_infoE, i32 2) to i8*), i8* getelementptr inbounds ([70 x i8]* @_ZTSNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 0), i8* bitcast (i8** @_ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE to i8*) }
@_ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE = linkonce_odr unnamed_addr constant [10 x i8*] [i8* inttoptr (i32 56 to i8*), i8* null, i8* bitcast (i8** @_ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE to i8*), i8* bitcast (void (%"class.std::__1::basic_ostream"*)* @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_ostream"*)* @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev to i8*), i8* inttoptr (i32 -56 to i8*), i8* inttoptr (i32 -56 to i8*), i8* bitcast (i8** @_ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE to i8*), i8* bitcast (void (%"class.std::__1::basic_ostream"*)* @_ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_ostream"*)* @_ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev to i8*)]
@_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr unnamed_addr constant [16 x i8*] [i8* null, i8* bitcast ({ i8*, i8*, i8* }* @_ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE to i8*), i8* bitcast (void (%"class.std::__1::basic_stringbuf"*)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_stringbuf"*)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev to i8*), i8* bitcast (void (%"class.std::__1::basic_streambuf"*, %"class.std::__1::locale"*)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE to i8*), i8* bitcast (%"class.std::__1::basic_streambuf"* (%"class.std::__1::basic_streambuf"*, i8*, i32)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci to i8*), i8* bitcast (void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, i64, i32, i32)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj to i8*), i8* bitcast (void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, %"class.std::__1::fpos"*, i32)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj to i8*), i8* bitcast (i32 (%"class.std::__1::basic_streambuf"*)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv to i8*), i8* bitcast (i32 (%"class.std::__1::basic_streambuf"*)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv to i8*), i8* bitcast (i32 (%"class.std::__1::basic_streambuf"*, i8*, i32)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci to i8*), i8* bitcast (i32 (%"class.std::__1::basic_stringbuf"*)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv to i8*), i8* bitcast (i32 (%"class.std::__1::basic_streambuf"*)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv to i8*), i8* bitcast (i32 (%"class.std::__1::basic_stringbuf"*, i32)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi to i8*), i8* bitcast (i32 (%"class.std::__1::basic_streambuf"*, i8*, i32)* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci to i8*), i8* bitcast (i32 (%"class.std::__1::basic_stringbuf"*, i32)* @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi to i8*)]
@_ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr constant [66 x i8] c"NSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE\00"
@_ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE = external constant i8*
@_ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE = linkonce_odr unnamed_addr constant { i8*, i8*, i8* } { i8* bitcast (i8** getelementptr inbounds (i8** @_ZTVN10__cxxabiv120__si_class_type_infoE, i32 2) to i8*), i8* getelementptr inbounds ([66 x i8]* @_ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 0), i8* bitcast (i8** @_ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE to i8*) }
@_ZTVN3OIS9ExceptionE = external unnamed_addr constant [5 x i8*]

@_ZN3OIS12InputManagerD1Ev = alias void (%"class.OIS::InputManager"*)* @_ZN3OIS12InputManagerD2Ev

define void @_ZN3OIS12InputManagerC2ERKNSt3__112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(%"class.OIS::InputManager"* %this, %"class.std::__1::basic_string"* %name) unnamed_addr align 2 {
invoke.cont3:
  %0 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([5 x i8*]* @_ZTVN3OIS12InputManagerE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %0, align 4
  %m_VersionName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 1
  tail call void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(%"class.std::__1::basic_string"* %m_VersionName, i8* getelementptr inbounds ([6 x i8]* @.str, i32 0, i32 0), i32 5)
  %__begin_.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  store %"class.OIS::FactoryCreator"** null, %"class.OIS::FactoryCreator"*** %__begin_.i.i.i, align 4
  %__end_.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  store %"class.OIS::FactoryCreator"** null, %"class.OIS::FactoryCreator"*** %__end_.i.i.i, align 4
  %__first_.i.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 2, i32 0, i32 0
  store %"class.OIS::FactoryCreator"** null, %"class.OIS::FactoryCreator"*** %__first_.i.i.i.i.i.i, align 4
  %mFactoryObjects = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3
  %__tree_.i.i = getelementptr inbounds %"class.std::__1::map"* %mFactoryObjects, i32 0, i32 0
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0
  %__left_.i.i.i.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i.i.i, align 4
  %__first_.i.i.i20.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 2, i32 0, i32 0
  store i32 0, i32* %__first_.i.i.i20.i.i, align 4
  %1 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node"*
  %__begin_node_.i.i.i = getelementptr inbounds %"class.std::__1::map"* %mFactoryObjects, i32 0, i32 0, i32 0
  store %"class.std::__1::__tree_node"* %1, %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  %mInputSystemName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 4
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %mInputSystemName, %"class.std::__1::basic_string"* %name)
          to label %invoke.cont5 unwind label %ehcleanup

invoke.cont5:                                     ; preds = %invoke.cont3
  %m_lircSupport = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 5
  store %"class.OIS::LIRCFactoryCreator"* null, %"class.OIS::LIRCFactoryCreator"** %m_lircSupport, align 4
  %m_wiiMoteSupport = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 6
  store %"class.OIS::WiiMoteFactoryCreator"* null, %"class.OIS::WiiMoteFactoryCreator"** %m_wiiMoteSupport, align 4
  %2 = load %"class.OIS::FactoryCreator"*** %__begin_.i.i.i, align 4
  %3 = load %"class.OIS::FactoryCreator"*** %__end_.i.i.i, align 4
  %cmp.i.i.i6 = icmp eq %"class.OIS::FactoryCreator"** %2, %3
  br i1 %cmp.i.i.i6, label %_ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit, label %while.body.i.i.i.lr.ph

while.body.i.i.i.lr.ph:                           ; preds = %invoke.cont5
  %4 = ptrtoint %"class.OIS::FactoryCreator"** %2 to i32
  %scevgep = getelementptr %"class.OIS::FactoryCreator"** %3, i32 -1
  %scevgep7 = bitcast %"class.OIS::FactoryCreator"** %scevgep to i8*
  %5 = sub i32 0, %4
  %uglygep = getelementptr i8* %scevgep7, i32 %5
  %uglygep8 = ptrtoint i8* %uglygep to i32
  %6 = lshr i32 %uglygep8, 2
  %7 = xor i32 %6, -1
  %scevgep9 = getelementptr %"class.OIS::FactoryCreator"** %3, i32 %7
  store %"class.OIS::FactoryCreator"** %scevgep9, %"class.OIS::FactoryCreator"*** %__end_.i.i.i, align 4
  br label %_ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit

_ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit: ; preds = %while.body.i.i.i.lr.ph, %invoke.cont5
  %8 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i.i.i, align 4
  %9 = bitcast %"class.std::__1::__tree_node_base"* %8 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %__tree_.i.i, %"class.std::__1::__tree_node"* %9) nounwind
  store i32 0, i32* %__first_.i.i.i20.i.i, align 4
  store %"class.std::__1::__tree_node"* %1, %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i.i.i, align 4
  ret void

ehcleanup:                                        ; preds = %invoke.cont3
  %10 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %__left_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0, i32 0
  %11 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i, align 4
  %12 = bitcast %"class.std::__1::__tree_node_base"* %11 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %__tree_.i.i, %"class.std::__1::__tree_node"* %12) nounwind
  %13 = load %"class.OIS::FactoryCreator"*** %__begin_.i.i.i, align 4
  %14 = ptrtoint %"class.OIS::FactoryCreator"** %13 to i32
  %cmp.i.i.i3 = icmp eq %"class.OIS::FactoryCreator"** %13, null
  br i1 %cmp.i.i.i3, label %ehcleanup10, label %while.cond.i.i.preheader.i.i.i

while.cond.i.i.preheader.i.i.i:                   ; preds = %ehcleanup
  %15 = load %"class.OIS::FactoryCreator"*** %__end_.i.i.i, align 4
  %cmp.i.i1.i.i.i = icmp eq %"class.OIS::FactoryCreator"** %13, %15
  br i1 %cmp.i.i1.i.i.i, label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i, label %while.body.i.i.lr.ph.i.i.i

while.body.i.i.lr.ph.i.i.i:                       ; preds = %while.cond.i.i.preheader.i.i.i
  %scevgep.i.i.i = getelementptr %"class.OIS::FactoryCreator"** %15, i32 -1
  %scevgep2.i.i.i = bitcast %"class.OIS::FactoryCreator"** %scevgep.i.i.i to i8*
  %16 = sub i32 0, %14
  %uglygep.i.i.i = getelementptr i8* %scevgep2.i.i.i, i32 %16
  %uglygep3.i.i.i = ptrtoint i8* %uglygep.i.i.i to i32
  %17 = lshr i32 %uglygep3.i.i.i, 2
  %18 = xor i32 %17, -1
  %scevgep4.i.i.i = getelementptr %"class.OIS::FactoryCreator"** %15, i32 %18
  store %"class.OIS::FactoryCreator"** %scevgep4.i.i.i, %"class.OIS::FactoryCreator"*** %__end_.i.i.i, align 4
  br label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i

_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i: ; preds = %while.body.i.i.lr.ph.i.i.i, %while.cond.i.i.preheader.i.i.i
  %19 = bitcast %"class.OIS::FactoryCreator"** %13 to i8*
  tail call void @_ZdlPv(i8* %19) nounwind
  br label %ehcleanup10

ehcleanup10:                                      ; preds = %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i, %ehcleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %m_VersionName)
          to label %eh.resume unwind label %terminate.lpad

eh.resume:                                        ; preds = %ehcleanup10
  resume { i8*, i32 } %10

terminate.lpad:                                   ; preds = %ehcleanup10
  %20 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable
}

declare i32 @__gxx_personality_v0(...)

declare void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"*, %"class.std::__1::basic_string"*)

declare void @_ZSt9terminatev()

declare void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"*)

define void @_ZN3OIS12InputManagerD0Ev(%"class.OIS::InputManager"* %this) unnamed_addr align 2 {
entry:
  invoke void @_ZN3OIS12InputManagerD2Ev(%"class.OIS::InputManager"* %this)
          to label %invoke.cont unwind label %lpad

invoke.cont:                                      ; preds = %entry
  %0 = bitcast %"class.OIS::InputManager"* %this to i8*
  tail call void @_ZdlPv(i8* %0) nounwind
  ret void

lpad:                                             ; preds = %entry
  %1 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %2 = bitcast %"class.OIS::InputManager"* %this to i8*
  tail call void @_ZdlPv(i8* %2) nounwind
  resume { i8*, i32 } %1
}

declare void @_ZdlPv(i8*) nounwind

define void @_ZN3OIS12InputManagerD2Ev(%"class.OIS::InputManager"* %this) unnamed_addr align 2 {
entry:
  %0 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([5 x i8*]* @_ZTVN3OIS12InputManagerE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %0, align 4
  %mInputSystemName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 4
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %mInputSystemName)
          to label %invoke.cont3 unwind label %ehcleanup

invoke.cont3:                                     ; preds = %entry
  %__tree_.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0
  %__left_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0, i32 0
  %1 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i, align 4
  %2 = bitcast %"class.std::__1::__tree_node_base"* %1 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %__tree_.i.i, %"class.std::__1::__tree_node"* %2) nounwind
  %__begin_.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %3 = load %"class.OIS::FactoryCreator"*** %__begin_.i.i.i, align 4
  %4 = ptrtoint %"class.OIS::FactoryCreator"** %3 to i32
  %cmp.i.i.i = icmp eq %"class.OIS::FactoryCreator"** %3, null
  br i1 %cmp.i.i.i, label %invoke.cont7, label %while.cond.i.i.preheader.i.i.i

while.cond.i.i.preheader.i.i.i:                   ; preds = %invoke.cont3
  %__end_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %5 = load %"class.OIS::FactoryCreator"*** %__end_.i.i.i.i.i, align 4
  %cmp.i.i1.i.i.i = icmp eq %"class.OIS::FactoryCreator"** %3, %5
  br i1 %cmp.i.i1.i.i.i, label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i, label %while.body.i.i.lr.ph.i.i.i

while.body.i.i.lr.ph.i.i.i:                       ; preds = %while.cond.i.i.preheader.i.i.i
  %scevgep.i.i.i = getelementptr %"class.OIS::FactoryCreator"** %5, i32 -1
  %scevgep2.i.i.i = bitcast %"class.OIS::FactoryCreator"** %scevgep.i.i.i to i8*
  %6 = sub i32 0, %4
  %uglygep.i.i.i = getelementptr i8* %scevgep2.i.i.i, i32 %6
  %uglygep3.i.i.i = ptrtoint i8* %uglygep.i.i.i to i32
  %7 = lshr i32 %uglygep3.i.i.i, 2
  %8 = xor i32 %7, -1
  %scevgep4.i.i.i = getelementptr %"class.OIS::FactoryCreator"** %5, i32 %8
  store %"class.OIS::FactoryCreator"** %scevgep4.i.i.i, %"class.OIS::FactoryCreator"*** %__end_.i.i.i.i.i, align 4
  br label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i

_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i: ; preds = %while.body.i.i.lr.ph.i.i.i, %while.cond.i.i.preheader.i.i.i
  %9 = bitcast %"class.OIS::FactoryCreator"** %3 to i8*
  tail call void @_ZdlPv(i8* %9) nounwind
  br label %invoke.cont7

invoke.cont7:                                     ; preds = %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i, %invoke.cont3
  %m_VersionName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 1
  tail call void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %m_VersionName)
  ret void

ehcleanup:                                        ; preds = %entry
  %10 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %__tree_.i.i1 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0
  %__left_.i.i.i.i.i2 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0, i32 0
  %11 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i2, align 4
  %12 = bitcast %"class.std::__1::__tree_node_base"* %11 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %__tree_.i.i1, %"class.std::__1::__tree_node"* %12) nounwind
  %__begin_.i.i.i3 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %13 = load %"class.OIS::FactoryCreator"*** %__begin_.i.i.i3, align 4
  %14 = ptrtoint %"class.OIS::FactoryCreator"** %13 to i32
  %cmp.i.i.i4 = icmp eq %"class.OIS::FactoryCreator"** %13, null
  br i1 %cmp.i.i.i4, label %ehcleanup10, label %while.cond.i.i.preheader.i.i.i7

while.cond.i.i.preheader.i.i.i7:                  ; preds = %ehcleanup
  %__end_.i.i.i.i.i5 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %15 = load %"class.OIS::FactoryCreator"*** %__end_.i.i.i.i.i5, align 4
  %cmp.i.i1.i.i.i6 = icmp eq %"class.OIS::FactoryCreator"** %13, %15
  br i1 %cmp.i.i1.i.i.i6, label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i14, label %while.body.i.i.lr.ph.i.i.i13

while.body.i.i.lr.ph.i.i.i13:                     ; preds = %while.cond.i.i.preheader.i.i.i7
  %scevgep.i.i.i8 = getelementptr %"class.OIS::FactoryCreator"** %15, i32 -1
  %scevgep2.i.i.i9 = bitcast %"class.OIS::FactoryCreator"** %scevgep.i.i.i8 to i8*
  %16 = sub i32 0, %14
  %uglygep.i.i.i10 = getelementptr i8* %scevgep2.i.i.i9, i32 %16
  %uglygep3.i.i.i11 = ptrtoint i8* %uglygep.i.i.i10 to i32
  %17 = lshr i32 %uglygep3.i.i.i11, 2
  %18 = xor i32 %17, -1
  %scevgep4.i.i.i12 = getelementptr %"class.OIS::FactoryCreator"** %15, i32 %18
  store %"class.OIS::FactoryCreator"** %scevgep4.i.i.i12, %"class.OIS::FactoryCreator"*** %__end_.i.i.i.i.i5, align 4
  br label %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i14

_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i14: ; preds = %while.body.i.i.lr.ph.i.i.i13, %while.cond.i.i.preheader.i.i.i7
  %19 = bitcast %"class.OIS::FactoryCreator"** %13 to i8*
  tail call void @_ZdlPv(i8* %19) nounwind
  br label %ehcleanup10

ehcleanup10:                                      ; preds = %_ZNSt3__113__vector_baseIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE5clearEv.exit.i.i.i14, %ehcleanup
  %m_VersionName11 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %m_VersionName11)
          to label %eh.resume unwind label %terminate.lpad

eh.resume:                                        ; preds = %ehcleanup10
  resume { i8*, i32 } %10

terminate.lpad:                                   ; preds = %ehcleanup10
  %20 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable
}

define i32 @_ZN3OIS12InputManager16getVersionNumberEv() nounwind readnone align 2 {
entry:
  ret i32 66304
}

define %"class.std::__1::basic_string"* @_ZN3OIS12InputManager14getVersionNameEv(%"class.OIS::InputManager"* %this) nounwind readnone align 2 {
entry:
  %m_VersionName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 1
  ret %"class.std::__1::basic_string"* %m_VersionName
}

define %"class.OIS::InputManager"* @_ZN3OIS12InputManager17createInputSystemEj(i32 %windowhandle) align 2 {
entry:
  %agg.tmp.i = alloca %"class.std::__1::__tree_iterator", align 4
  %ref.tmp.i = alloca %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type", align 4
  %ref.tmp.i.i.i = alloca %"class.std::__1::basic_string", align 4
  %ref.tmp.i.i.i155 = bitcast %"class.std::__1::basic_string"* %ref.tmp.i.i.i to i8*
  %pl = alloca %"class.std::__1::multimap", align 4
  %wnd = alloca %"class.std::__1::basic_ostringstream", align 4
  %ref.tmp3 = alloca %"struct.std::__1::pair", align 4
  %ref.tmp4 = alloca %"struct.std::__1::pair.22", align 4
  %agg.tmp = alloca %"class.std::__1::basic_string", align 4
  %agg.tmp6 = alloca %"class.std::__1::basic_string", align 4
  %__tree_.i.i = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0, i32 1, i32 0, i32 0
  %__left_.i.i.i.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i.i.i, align 4
  %__first_.i.i.i20.i.i = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0, i32 2, i32 0, i32 0
  store i32 0, i32* %__first_.i.i.i20.i.i, align 4
  %0 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node.12"*
  %__begin_node_.i.i.i = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0, i32 0
  store %"class.std::__1::__tree_node.12"* %0, %"class.std::__1::__tree_node.12"** %__begin_node_.i.i.i, align 4
  %1 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 2
  %2 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 0, i32 0
  %3 = bitcast %"class.std::__1::basic_ostringstream"* %wnd to %"class.std::__1::basic_ostream"*
  %__sb_.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1
  %4 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %2, align 4
  %5 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 2, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTCNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_ostreamIcS2_EE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %5, align 4
  %6 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 2, i32 0
  %7 = bitcast %"class.std::__1::basic_stringbuf"* %__sb_.i to i8*
  invoke void @_ZNSt3__18ios_base4initEPv(%"class.std::__1::ios_base"* %6, i8* %7)
          to label %_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE.exit.i unwind label %lpad.i

_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE.exit.i: ; preds = %entry
  %8 = getelementptr inbounds %"class.std::__1::basic_ios"* %1, i32 0, i32 0, i32 0
  %__tie_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 2, i32 1
  store %"class.std::__1::basic_ostream"* null, %"class.std::__1::basic_ostream"** %__tie_.i.i.i, align 4
  %__fill_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 2, i32 2
  store i32 -1, i32* %__fill_.i.i.i, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %2, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %8, align 4
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEEC2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %.noexc.i unwind label %lpad4.i

.noexc.i:                                         ; preds = %_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE.exit.i
  %9 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %9, align 4
  %__str_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 1
  %scevgep = getelementptr %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0
  %__hm_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 2
  %__mode_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 3
  %10 = bitcast i32* %scevgep to i8*
  call void @llvm.memset.p0i8.i64(i8* %10, i8 0, i64 16, i32 4, i1 false)
  store i32 16, i32* %__mode_.i.i.i, align 4
  call void @llvm.memset.p0i8.i32(i8* %ref.tmp.i.i.i155, i8 0, i32 12, i32 4, i1 false)
  invoke void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE(%"class.std::__1::basic_stringbuf"* %__sb_.i, %"class.std::__1::basic_string"* %ref.tmp.i.i.i)
          to label %invoke.cont5.i.i.i unwind label %lpad4.i.i.i

invoke.cont5.i.i.i:                               ; preds = %.noexc.i
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %ref.tmp.i.i.i)
          to label %invoke.cont unwind label %lpad2.i.i.i

lpad2.i.i.i:                                      ; preds = %invoke.cont5.i.i.i
  %11 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %12 = extractvalue { i8*, i32 } %11, 0
  %13 = extractvalue { i8*, i32 } %11, 1
  br label %ehcleanup.i.i.i

lpad4.i.i.i:                                      ; preds = %.noexc.i
  %14 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %15 = extractvalue { i8*, i32 } %14, 0
  %16 = extractvalue { i8*, i32 } %14, 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %ref.tmp.i.i.i)
          to label %ehcleanup.i.i.i unwind label %terminate.lpad.i.i.i

ehcleanup.i.i.i:                                  ; preds = %lpad4.i.i.i, %lpad2.i.i.i
  %ehselector.slot.i.i.i.0 = phi i32 [ %13, %lpad2.i.i.i ], [ %16, %lpad4.i.i.i ]
  %exn.slot.i.i.i.0 = phi i8* [ %12, %lpad2.i.i.i ], [ %15, %lpad4.i.i.i ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i.i)
          to label %invoke.cont8.i.i.i unwind label %terminate.lpad.i.i.i

invoke.cont8.i.i.i:                               ; preds = %ehcleanup.i.i.i
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %invoke.cont10.i.i.i unwind label %terminate.lpad.i.i.i

invoke.cont10.i.i.i:                              ; preds = %invoke.cont8.i.i.i
  %lpad.val.i.i.i = insertvalue { i8*, i32 } undef, i8* %exn.slot.i.i.i.0, 0
  %lpad.val11.i.i.i = insertvalue { i8*, i32 } %lpad.val.i.i.i, i32 %ehselector.slot.i.i.i.0, 1
  br label %lpad4.body.i

terminate.lpad.i.i.i:                             ; preds = %invoke.cont8.i.i.i, %ehcleanup.i.i.i, %lpad4.i.i.i
  %17 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

lpad.i:                                           ; preds = %entry
  %18 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %19 = extractvalue { i8*, i32 } %18, 0
  %20 = extractvalue { i8*, i32 } %18, 1
  br label %ehcleanup.i

lpad4.i:                                          ; preds = %_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE.exit.i
  %21 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad4.body.i

lpad4.body.i:                                     ; preds = %lpad4.i, %invoke.cont10.i.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %21, %lpad4.i ], [ %lpad.val11.i.i.i, %invoke.cont10.i.i.i ]
  %22 = extractvalue { i8*, i32 } %eh.lpad-body.i, 0
  %23 = extractvalue { i8*, i32 } %eh.lpad-body.i, 1
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %3, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %ehcleanup.i unwind label %terminate.lpad.i

ehcleanup.i:                                      ; preds = %lpad4.body.i, %lpad.i
  %ehselector.slot.i.0 = phi i32 [ %23, %lpad4.body.i ], [ %20, %lpad.i ]
  %exn.slot.i.0 = phi i8* [ %22, %lpad4.body.i ], [ %19, %lpad.i ]
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %1)
          to label %invoke.cont7.i unwind label %terminate.lpad.i

invoke.cont7.i:                                   ; preds = %ehcleanup.i
  %lpad.val.i = insertvalue { i8*, i32 } undef, i8* %exn.slot.i.0, 0
  %lpad.val8.i = insertvalue { i8*, i32 } %lpad.val.i, i32 %ehselector.slot.i.0, 1
  br label %lpad.body

terminate.lpad.i:                                 ; preds = %ehcleanup.i, %lpad4.body.i
  %24 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont:                                      ; preds = %invoke.cont5.i.i.i
  %call = invoke %"class.std::__1::basic_ostream"* @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj(%"class.std::__1::basic_ostream"* %3, i32 %windowhandle)
          to label %invoke.cont2 unwind label %lpad1

invoke.cont2:                                     ; preds = %invoke.cont
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(%"class.std::__1::basic_string"* %agg.tmp, i8* getelementptr inbounds ([7 x i8]* @.str1, i32 0, i32 0), i32 6)
          to label %invoke.cont5 unwind label %lpad1

invoke.cont5:                                     ; preds = %invoke.cont2
  %agg.result4.i = bitcast %"class.std::__1::basic_string"* %agg.tmp6 to i8*
  %25 = load i32* %__mode_.i.i.i, align 4
  %and.i = and i32 %25, 16
  %tobool.i = icmp eq i32 %and.i, 0
  br i1 %tobool.i, label %if.else.i, label %if.then.i

if.then.i:                                        ; preds = %invoke.cont5
  %26 = load i8** %__hm_.i.i.i, align 4
  %__nout_.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 0, i32 6
  %27 = load i8** %__nout_.i.i, align 4
  %cmp.i = icmp ult i8* %26, %27
  br i1 %cmp.i, label %if.then2.i, label %if.end.i

if.then2.i:                                       ; preds = %if.then.i
  store i8* %27, i8** %__hm_.i.i.i, align 4
  br label %if.end.i

if.end.i:                                         ; preds = %if.then2.i, %if.then.i
  %28 = phi i8* [ %27, %if.then2.i ], [ %26, %if.then.i ]
  %__bout_.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 0, i32 5
  %29 = load i8** %__bout_.i.i, align 4
  %sub.ptr.rhs.cast.i.i.i114 = ptrtoint i8* %29 to i32
  %sub.ptr.lhs.cast.i.i.i115 = ptrtoint i8* %28 to i32
  %sub.ptr.sub.i.i.i116 = sub i32 %sub.ptr.lhs.cast.i.i.i115, %sub.ptr.rhs.cast.i.i.i114
  %cmp.i117 = icmp eq i32 %sub.ptr.sub.i.i.i116, -1
  br i1 %cmp.i117, label %if.end.thread.i118, label %if.end.i120

if.end.thread.i118:                               ; preds = %if.end.i
  %30 = bitcast %"class.std::__1::basic_string"* %agg.tmp6 to %"class.std::__1::__basic_string_common"*
  invoke void @_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(%"class.std::__1::__basic_string_common"* %30)
          to label %cond.false.i.i133 unwind label %lpad7

if.end.i120:                                      ; preds = %if.end.i
  %cmp3.i119 = icmp ult i32 %sub.ptr.sub.i.i.i116, 11
  br i1 %cmp3.i119, label %if.then4.i126, label %cond.false.i.i133

if.then4.i126:                                    ; preds = %if.end.i120
  %shl.i.i121 = shl i32 %sub.ptr.sub.i.i.i116, 1
  %conv.i.i122 = trunc i32 %shl.i.i121 to i8
  %__s2.i.i123 = bitcast %"class.std::__1::basic_string"* %agg.tmp6 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  store i8 %conv.i.i122, i8* %agg.result4.i, align 4
  %arrayidx.i.i125 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s2.i.i123, i32 0, i32 1, i32 0
  br label %for.cond.preheader.i136

cond.false.i.i133:                                ; preds = %if.end.i120, %if.end.thread.i118
  %add.i.i.i127 = add i32 %sub.ptr.sub.i.i.i116, 16
  %and.i.i.i128 = and i32 %add.i.i.i127, -16
  %call.i.i.i151 = invoke noalias i8* @_Znwj(i32 %and.i.i.i128)
          to label %call.i.i.i.noexc150 unwind label %lpad7

call.i.i.i.noexc150:                              ; preds = %cond.false.i.i133
  %__data_.i.i129 = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  store i8* %call.i.i.i151, i8** %__data_.i.i129, align 4
  %or.i.i130 = or i32 %and.i.i.i128, 1
  %__cap_.i.i131 = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0
  store i32 %or.i.i130, i32* %__cap_.i.i131, align 4
  %__size_.i.i132 = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  store i32 %sub.ptr.sub.i.i.i116, i32* %__size_.i.i132, align 4
  br label %for.cond.preheader.i136

for.cond.preheader.i136:                          ; preds = %call.i.i.i.noexc150, %if.then4.i126
  %__p.0.ph.i134 = phi i8* [ %arrayidx.i.i125, %if.then4.i126 ], [ %call.i.i.i151, %call.i.i.i.noexc150 ]
  %cmp1113.i135 = icmp eq i8* %29, %28
  br i1 %cmp1113.i135, label %.noexc10, label %for.body.lr.ph.i139

for.body.lr.ph.i139:                              ; preds = %for.cond.preheader.i136
  %31 = sub i32 0, %sub.ptr.rhs.cast.i.i.i114
  %scevgep.i137 = getelementptr i8* %28, i32 %31
  br label %for.body.i145

for.body.i145:                                    ; preds = %for.body.i145, %for.body.lr.ph.i139
  %__first.addr.015.i140 = phi i8* [ %29, %for.body.lr.ph.i139 ], [ %incdec.ptr.i142, %for.body.i145 ]
  %__p.014.i141 = phi i8* [ %__p.0.ph.i134, %for.body.lr.ph.i139 ], [ %incdec.ptr12.i143, %for.body.i145 ]
  %32 = load i8* %__first.addr.015.i140, align 1
  store i8 %32, i8* %__p.014.i141, align 1
  %incdec.ptr.i142 = getelementptr inbounds i8* %__first.addr.015.i140, i32 1
  %incdec.ptr12.i143 = getelementptr inbounds i8* %__p.014.i141, i32 1
  %cmp11.i144 = icmp eq i8* %incdec.ptr.i142, %28
  br i1 %cmp11.i144, label %for.cond.for.end_crit_edge.i147, label %for.body.i145

for.cond.for.end_crit_edge.i147:                  ; preds = %for.body.i145
  %scevgep16.i138 = ptrtoint i8* %scevgep.i137 to i32
  %scevgep17.i146 = getelementptr i8* %__p.0.ph.i134, i32 %scevgep16.i138
  br label %.noexc10

.noexc10:                                         ; preds = %for.cond.for.end_crit_edge.i147, %for.cond.preheader.i136
  %__p.0.lcssa.i148 = phi i8* [ %scevgep17.i146, %for.cond.for.end_crit_edge.i147 ], [ %__p.0.ph.i134, %for.cond.preheader.i136 ]
  store i8 0, i8* %__p.0.lcssa.i148, align 1
  br label %invoke.cont8

if.else.i:                                        ; preds = %invoke.cont5
  %and8.i = and i32 %25, 8
  %tobool9.i = icmp eq i32 %and8.i, 0
  br i1 %tobool9.i, label %if.end16.i, label %if.then10.i

if.then10.i:                                      ; preds = %if.else.i
  %__binp_.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 0, i32 2
  %33 = load i8** %__binp_.i.i, align 4
  %__einp_.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %wnd, i32 0, i32 1, i32 0, i32 4
  %34 = load i8** %__einp_.i.i, align 4
  %sub.ptr.rhs.cast.i.i.i = ptrtoint i8* %33 to i32
  %sub.ptr.lhs.cast.i.i.i = ptrtoint i8* %34 to i32
  %sub.ptr.sub.i.i.i = sub i32 %sub.ptr.lhs.cast.i.i.i, %sub.ptr.rhs.cast.i.i.i
  %cmp.i12 = icmp eq i32 %sub.ptr.sub.i.i.i, -1
  br i1 %cmp.i12, label %if.end.thread.i, label %if.end.i13

if.end.thread.i:                                  ; preds = %if.then10.i
  %35 = bitcast %"class.std::__1::basic_string"* %agg.tmp6 to %"class.std::__1::__basic_string_common"*
  invoke void @_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(%"class.std::__1::__basic_string_common"* %35)
          to label %cond.false.i.i unwind label %lpad7

if.end.i13:                                       ; preds = %if.then10.i
  %cmp3.i = icmp ult i32 %sub.ptr.sub.i.i.i, 11
  br i1 %cmp3.i, label %if.then4.i, label %cond.false.i.i

if.then4.i:                                       ; preds = %if.end.i13
  %shl.i.i = shl i32 %sub.ptr.sub.i.i.i, 1
  %conv.i.i = trunc i32 %shl.i.i to i8
  %__s2.i.i = bitcast %"class.std::__1::basic_string"* %agg.tmp6 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  store i8 %conv.i.i, i8* %agg.result4.i, align 4
  %arrayidx.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s2.i.i, i32 0, i32 1, i32 0
  br label %for.cond.preheader.i

cond.false.i.i:                                   ; preds = %if.end.i13, %if.end.thread.i
  %add.i.i.i = add i32 %sub.ptr.sub.i.i.i, 16
  %and.i.i.i = and i32 %add.i.i.i, -16
  %call.i.i.i15 = invoke noalias i8* @_Znwj(i32 %and.i.i.i)
          to label %call.i.i.i.noexc unwind label %lpad7

call.i.i.i.noexc:                                 ; preds = %cond.false.i.i
  %__data_.i.i = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  store i8* %call.i.i.i15, i8** %__data_.i.i, align 4
  %or.i.i = or i32 %and.i.i.i, 1
  %__cap_.i.i = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0
  store i32 %or.i.i, i32* %__cap_.i.i, align 4
  %__size_.i.i = getelementptr inbounds %"class.std::__1::basic_string"* %agg.tmp6, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  store i32 %sub.ptr.sub.i.i.i, i32* %__size_.i.i, align 4
  br label %for.cond.preheader.i

for.cond.preheader.i:                             ; preds = %call.i.i.i.noexc, %if.then4.i
  %__p.0.ph.i = phi i8* [ %arrayidx.i.i, %if.then4.i ], [ %call.i.i.i15, %call.i.i.i.noexc ]
  %cmp1113.i = icmp eq i8* %33, %34
  br i1 %cmp1113.i, label %.noexc11, label %for.body.lr.ph.i

for.body.lr.ph.i:                                 ; preds = %for.cond.preheader.i
  %36 = sub i32 0, %sub.ptr.rhs.cast.i.i.i
  %scevgep.i = getelementptr i8* %34, i32 %36
  br label %for.body.i

for.body.i:                                       ; preds = %for.body.i, %for.body.lr.ph.i
  %__first.addr.015.i = phi i8* [ %33, %for.body.lr.ph.i ], [ %incdec.ptr.i, %for.body.i ]
  %__p.014.i = phi i8* [ %__p.0.ph.i, %for.body.lr.ph.i ], [ %incdec.ptr12.i, %for.body.i ]
  %37 = load i8* %__first.addr.015.i, align 1
  store i8 %37, i8* %__p.014.i, align 1
  %incdec.ptr.i = getelementptr inbounds i8* %__first.addr.015.i, i32 1
  %incdec.ptr12.i = getelementptr inbounds i8* %__p.014.i, i32 1
  %cmp11.i = icmp eq i8* %incdec.ptr.i, %34
  br i1 %cmp11.i, label %for.cond.for.end_crit_edge.i, label %for.body.i

for.cond.for.end_crit_edge.i:                     ; preds = %for.body.i
  %scevgep16.i = ptrtoint i8* %scevgep.i to i32
  %scevgep17.i = getelementptr i8* %__p.0.ph.i, i32 %scevgep16.i
  br label %.noexc11

.noexc11:                                         ; preds = %for.cond.for.end_crit_edge.i, %for.cond.preheader.i
  %__p.0.lcssa.i = phi i8* [ %scevgep17.i, %for.cond.for.end_crit_edge.i ], [ %__p.0.ph.i, %for.cond.preheader.i ]
  store i8 0, i8* %__p.0.lcssa.i, align 1
  br label %invoke.cont8

if.end16.i:                                       ; preds = %if.else.i
  call void @llvm.memset.p0i8.i32(i8* %agg.result4.i, i8 0, i32 12, i32 4, i1 false)
  br label %invoke.cont8

invoke.cont8:                                     ; preds = %if.end16.i, %.noexc11, %.noexc10
  %first.i.i.i = getelementptr inbounds %"struct.std::__1::pair.22"* %ref.tmp4, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %first.i.i.i, %"class.std::__1::basic_string"* %agg.tmp)
          to label %.noexc unwind label %lpad9

.noexc:                                           ; preds = %invoke.cont8
  %second.i.i.i = getelementptr inbounds %"struct.std::__1::pair.22"* %ref.tmp4, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %second.i.i.i, %"class.std::__1::basic_string"* %agg.tmp6)
          to label %invoke.cont10 unwind label %lpad.i.i.i

lpad.i.i.i:                                       ; preds = %.noexc
  %38 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i)
          to label %lpad9.body unwind label %terminate.lpad.i.i.i65

terminate.lpad.i.i.i65:                           ; preds = %lpad.i.i.i
  %39 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont10:                                    ; preds = %.noexc
  %first.i.i = getelementptr inbounds %"struct.std::__1::pair"* %ref.tmp3, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %first.i.i, %"class.std::__1::basic_string"* %first.i.i.i)
          to label %.noexc71 unwind label %lpad11

.noexc71:                                         ; preds = %invoke.cont10
  %second.i.i = getelementptr inbounds %"struct.std::__1::pair"* %ref.tmp3, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %second.i.i, %"class.std::__1::basic_string"* %second.i.i.i)
          to label %invoke.cont12 unwind label %lpad.i.i

lpad.i.i:                                         ; preds = %.noexc71
  %40 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i)
          to label %lpad11.body unwind label %terminate.lpad.i.i

terminate.lpad.i.i:                               ; preds = %lpad.i.i
  %41 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont12:                                    ; preds = %.noexc71
  %first.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i, i32 0, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %first.i.i.i.i, %"class.std::__1::basic_string"* %first.i.i)
          to label %.noexc16 unwind label %lpad13

.noexc16:                                         ; preds = %invoke.cont12
  %second.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i, i32 0, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %second.i.i.i.i, %"class.std::__1::basic_string"* %second.i.i)
          to label %.noexc88 unwind label %lpad.i.i.i.i

lpad.i.i.i.i:                                     ; preds = %.noexc16
  %42 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %lpad13.body unwind label %terminate.lpad.i.i.i.i

terminate.lpad.i.i.i.i:                           ; preds = %lpad.i.i.i.i
  %43 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

.noexc88:                                         ; preds = %.noexc16
  invoke void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE14__insert_multiERKSF_(%"class.std::__1::__tree_iterator"* sret %agg.tmp.i, %"class.std::__1::__tree.11"* %__tree_.i.i, %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i)
          to label %invoke.cont.i unwind label %lpad.i83

invoke.cont.i:                                    ; preds = %.noexc88
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i unwind label %lpad.i.i.i.i21

lpad.i.i.i.i21:                                   ; preds = %invoke.cont.i
  %44 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %lpad13.body unwind label %terminate.lpad.i.i.i.i22

terminate.lpad.i.i.i.i22:                         ; preds = %lpad.i.i.i.i21
  %45 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i: ; preds = %invoke.cont.i
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %invoke.cont14 unwind label %lpad13

lpad.i83:                                         ; preds = %.noexc88
  %46 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i33 unwind label %lpad.i.i.i.i29

lpad.i.i.i.i29:                                   ; preds = %lpad.i83
  %47 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %terminate.lpad.i87.body unwind label %terminate.lpad.i.i.i.i31

terminate.lpad.i.i.i.i31:                         ; preds = %lpad.i.i.i.i29
  %48 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i33: ; preds = %lpad.i83
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %lpad13.body unwind label %terminate.lpad.i87

terminate.lpad.i87:                               ; preds = %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i33
  %49 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  br label %terminate.lpad.i87.body

terminate.lpad.i87.body:                          ; preds = %terminate.lpad.i87, %lpad.i.i.i.i29
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont14:                                    ; preds = %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i)
          to label %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i unwind label %lpad.i.i38

lpad.i.i38:                                       ; preds = %invoke.cont14
  %50 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i)
          to label %lpad11.body unwind label %terminate.lpad.i.i39

terminate.lpad.i.i39:                             ; preds = %lpad.i.i38
  %51 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i: ; preds = %invoke.cont14
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i)
          to label %invoke.cont15 unwind label %lpad11

invoke.cont15:                                    ; preds = %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i)
          to label %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i unwind label %lpad.i.i46

lpad.i.i46:                                       ; preds = %invoke.cont15
  %52 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i)
          to label %lpad9.body unwind label %terminate.lpad.i.i48

terminate.lpad.i.i48:                             ; preds = %lpad.i.i46
  %53 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i: ; preds = %invoke.cont15
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i)
          to label %invoke.cont17 unwind label %lpad9

invoke.cont17:                                    ; preds = %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %agg.tmp6)
          to label %invoke.cont19 unwind label %lpad7

invoke.cont19:                                    ; preds = %invoke.cont17
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %agg.tmp)
          to label %invoke.cont22 unwind label %lpad1

invoke.cont22:                                    ; preds = %invoke.cont19
  %call.i57 = invoke noalias i8* @_Znwj(i32 88)
          to label %call.i.noexc unwind label %lpad1

call.i.noexc:                                     ; preds = %invoke.cont22
  %54 = bitcast i8* %call.i57 to %"class.OIS::LinuxInputManager"*
  invoke void @_ZN3OIS17LinuxInputManagerC1Ev(%"class.OIS::LinuxInputManager"* %54)
          to label %invoke.cont.i53 unwind label %lpad.i54

invoke.cont.i53:                                  ; preds = %call.i.noexc
  %55 = bitcast i8* %call.i57 to %"class.OIS::InputManager"*
  %56 = bitcast i8* %call.i57 to void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)***
  %vtable.i = load void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)*** %56, align 4
  %57 = load void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)** %vtable.i, align 4
  invoke void %57(%"class.OIS::InputManager"* %55, %"class.std::__1::multimap"* %pl)
          to label %invoke.cont25 unwind label %lpad1.i

lpad.i54:                                         ; preds = %call.i.noexc
  %58 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %59 = extractvalue { i8*, i32 } %58, 0
  %60 = extractvalue { i8*, i32 } %58, 1
  call void @_ZdlPv(i8* %call.i57) nounwind
  br label %eh.resume.i

lpad1.i:                                          ; preds = %invoke.cont.i53
  %61 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  %62 = extractvalue { i8*, i32 } %61, 0
  %63 = call i8* @__cxa_begin_catch(i8* %62) nounwind
  %isnull.i = icmp eq i8* %call.i57, null
  br i1 %isnull.i, label %delete.end.i, label %delete.notnull.i

delete.notnull.i:                                 ; preds = %lpad1.i
  %64 = bitcast i8* %call.i57 to void (%"class.OIS::InputManager"*)***
  %vtable3.i = load void (%"class.OIS::InputManager"*)*** %64, align 4
  %vfn4.i = getelementptr inbounds void (%"class.OIS::InputManager"*)** %vtable3.i, i32 2
  %65 = load void (%"class.OIS::InputManager"*)** %vfn4.i, align 4
  invoke void %65(%"class.OIS::InputManager"* %55)
          to label %delete.end.i unwind label %lpad5.i

delete.end.i:                                     ; preds = %delete.notnull.i, %lpad1.i
  invoke void @__cxa_rethrow() noreturn
          to label %unreachable.i unwind label %lpad5.i

lpad5.i:                                          ; preds = %delete.end.i, %delete.notnull.i
  %66 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %67 = extractvalue { i8*, i32 } %66, 0
  %68 = extractvalue { i8*, i32 } %66, 1
  invoke void @__cxa_end_catch()
          to label %eh.resume.i unwind label %terminate.lpad.i56

eh.resume.i:                                      ; preds = %lpad5.i, %lpad.i54
  %exn.slot.0.i = phi i8* [ %67, %lpad5.i ], [ %59, %lpad.i54 ]
  %ehselector.slot.0.i = phi i32 [ %68, %lpad5.i ], [ %60, %lpad.i54 ]
  %lpad.val.i55 = insertvalue { i8*, i32 } undef, i8* %exn.slot.0.i, 0
  %lpad.val9.i = insertvalue { i8*, i32 } %lpad.val.i55, i32 %ehselector.slot.0.i, 1
  br label %lpad1.body

terminate.lpad.i56:                               ; preds = %lpad5.i
  %69 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

unreachable.i:                                    ; preds = %delete.end.i
  unreachable

invoke.cont25:                                    ; preds = %invoke.cont.i53
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %2, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %5, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %9, align 4
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i unwind label %lpad.i.i.i.i59

lpad.i.i.i.i59:                                   ; preds = %invoke.cont25
  %70 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %lpad.body.i.i unwind label %terminate.lpad.i.i.i.i60

terminate.lpad.i.i.i.i60:                         ; preds = %lpad.i.i.i.i59
  %71 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i: ; preds = %invoke.cont25
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %invoke.cont.i.i unwind label %lpad.i.i61

invoke.cont.i.i:                                  ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %3, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %invoke.cont.i63 unwind label %lpad.i64

lpad.i.i61:                                       ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  %72 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i.i

lpad.body.i.i:                                    ; preds = %lpad.i.i61, %lpad.i.i.i.i59
  %eh.lpad-body.i.i = phi { i8*, i32 } [ %72, %lpad.i.i61 ], [ %70, %lpad.i.i.i.i59 ]
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %3, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body.i unwind label %terminate.lpad.i.i62

terminate.lpad.i.i62:                             ; preds = %lpad.body.i.i
  %73 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont.i63:                                  ; preds = %invoke.cont.i.i
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %1)
          to label %invoke.cont27 unwind label %lpad

lpad.i64:                                         ; preds = %invoke.cont.i.i
  %74 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i64, %lpad.body.i.i
  %eh.lpad-body.i65 = phi { i8*, i32 } [ %74, %lpad.i64 ], [ %eh.lpad-body.i.i, %lpad.body.i.i ]
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %1)
          to label %lpad.body unwind label %terminate.lpad.i67

terminate.lpad.i67:                               ; preds = %lpad.body.i
  %75 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

lpad:                                             ; preds = %invoke.cont.i63
  %76 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body

lpad.body:                                        ; preds = %lpad, %lpad.body.i, %invoke.cont7.i
  %eh.lpad-body = phi { i8*, i32 } [ %lpad.val8.i, %invoke.cont7.i ], [ %76, %lpad ], [ %eh.lpad-body.i65, %lpad.body.i ]
  %77 = extractvalue { i8*, i32 } %eh.lpad-body, 0
  %78 = extractvalue { i8*, i32 } %eh.lpad-body, 1
  br label %eh.resume

lpad1:                                            ; preds = %invoke.cont22, %invoke.cont19, %invoke.cont2, %invoke.cont
  %79 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad1.body

lpad1.body:                                       ; preds = %lpad1, %eh.resume.i
  %eh.lpad-body58 = phi { i8*, i32 } [ %79, %lpad1 ], [ %lpad.val9.i, %eh.resume.i ]
  %80 = extractvalue { i8*, i32 } %eh.lpad-body58, 0
  %81 = extractvalue { i8*, i32 } %eh.lpad-body58, 1
  br label %ehcleanup28

lpad7:                                            ; preds = %invoke.cont17, %cond.false.i.i, %if.end.thread.i, %cond.false.i.i133, %if.end.thread.i118
  %82 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %83 = extractvalue { i8*, i32 } %82, 0
  %84 = extractvalue { i8*, i32 } %82, 1
  br label %ehcleanup23

lpad9:                                            ; preds = %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i, %invoke.cont8
  %85 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad9.body

lpad9.body:                                       ; preds = %lpad9, %lpad.i.i46, %lpad.i.i.i
  %eh.lpad-body66 = phi { i8*, i32 } [ %38, %lpad.i.i.i ], [ %85, %lpad9 ], [ %52, %lpad.i.i46 ]
  %86 = extractvalue { i8*, i32 } %eh.lpad-body66, 0
  %87 = extractvalue { i8*, i32 } %eh.lpad-body66, 1
  br label %ehcleanup20

lpad11:                                           ; preds = %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i, %invoke.cont10
  %88 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad11.body

lpad11.body:                                      ; preds = %lpad11, %lpad.i.i38, %lpad.i.i
  %eh.lpad-body72 = phi { i8*, i32 } [ %40, %lpad.i.i ], [ %88, %lpad11 ], [ %50, %lpad.i.i38 ]
  %89 = extractvalue { i8*, i32 } %eh.lpad-body72, 0
  %90 = extractvalue { i8*, i32 } %eh.lpad-body72, 1
  br label %ehcleanup

lpad13:                                           ; preds = %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i, %invoke.cont12
  %91 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad13.body

lpad13.body:                                      ; preds = %lpad13, %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i33, %lpad.i.i.i.i21, %lpad.i.i.i.i
  %eh.lpad-body90 = phi { i8*, i32 } [ %46, %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i33 ], [ %42, %lpad.i.i.i.i ], [ %91, %lpad13 ], [ %44, %lpad.i.i.i.i21 ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i)
          to label %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77 unwind label %lpad.i.i73

lpad.i.i73:                                       ; preds = %lpad13.body
  %92 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i)
          to label %terminate.lpad.body unwind label %terminate.lpad.i.i75

terminate.lpad.i.i75:                             ; preds = %lpad.i.i73
  %93 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77: ; preds = %lpad13.body
  %94 = extractvalue { i8*, i32 } %eh.lpad-body90, 1
  %95 = extractvalue { i8*, i32 } %eh.lpad-body90, 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i)
          to label %ehcleanup unwind label %terminate.lpad

ehcleanup:                                        ; preds = %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77, %lpad11.body
  %exn.slot.0 = phi i8* [ %89, %lpad11.body ], [ %95, %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77 ]
  %ehselector.slot.0 = phi i32 [ %90, %lpad11.body ], [ %94, %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77 ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i)
          to label %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87 unwind label %lpad.i.i83

lpad.i.i83:                                       ; preds = %ehcleanup
  %96 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i)
          to label %terminate.lpad.body unwind label %terminate.lpad.i.i85

terminate.lpad.i.i85:                             ; preds = %lpad.i.i83
  %97 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87: ; preds = %ehcleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i)
          to label %ehcleanup20 unwind label %terminate.lpad

ehcleanup20:                                      ; preds = %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87, %lpad9.body
  %exn.slot.1 = phi i8* [ %86, %lpad9.body ], [ %exn.slot.0, %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87 ]
  %ehselector.slot.1 = phi i32 [ %87, %lpad9.body ], [ %ehselector.slot.0, %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87 ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %agg.tmp6)
          to label %ehcleanup23 unwind label %terminate.lpad

ehcleanup23:                                      ; preds = %ehcleanup20, %lpad7
  %exn.slot.2 = phi i8* [ %83, %lpad7 ], [ %exn.slot.1, %ehcleanup20 ]
  %ehselector.slot.2 = phi i32 [ %84, %lpad7 ], [ %ehselector.slot.1, %ehcleanup20 ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %agg.tmp)
          to label %ehcleanup28 unwind label %terminate.lpad

invoke.cont27:                                    ; preds = %invoke.cont.i63
  %__left_.i.i.i.i.i93 = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0, i32 1, i32 0, i32 0, i32 0
  %98 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i93, align 4
  %99 = bitcast %"class.std::__1::__tree_node_base"* %98 to %"class.std::__1::__tree_node.12"*
  call void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree.11"* %__tree_.i.i, %"class.std::__1::__tree_node.12"* %99) nounwind
  ret %"class.OIS::InputManager"* %55

ehcleanup28:                                      ; preds = %ehcleanup23, %lpad1.body
  %exn.slot.3 = phi i8* [ %80, %lpad1.body ], [ %exn.slot.2, %ehcleanup23 ]
  %ehselector.slot.3 = phi i32 [ %81, %lpad1.body ], [ %ehselector.slot.2, %ehcleanup23 ]
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %2, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %5, align 4
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %9, align 4
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i98 unwind label %lpad.i.i.i.i96

lpad.i.i.i.i96:                                   ; preds = %ehcleanup28
  %100 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %lpad.body.i.i102 unwind label %terminate.lpad.i.i.i.i97

terminate.lpad.i.i.i.i97:                         ; preds = %lpad.i.i.i.i96
  %101 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i98: ; preds = %ehcleanup28
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %invoke.cont.i.i99 unwind label %lpad.i.i100

invoke.cont.i.i99:                                ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i98
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %3, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %invoke.cont.i104 unwind label %lpad.i105

lpad.i.i100:                                      ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i98
  %102 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  br label %lpad.body.i.i102

lpad.body.i.i102:                                 ; preds = %lpad.i.i100, %lpad.i.i.i.i96
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %3, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body.i107 unwind label %terminate.lpad.i.i103

terminate.lpad.i.i103:                            ; preds = %lpad.body.i.i102
  %103 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont.i104:                                 ; preds = %invoke.cont.i.i99
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %1)
          to label %eh.resume unwind label %terminate.lpad

lpad.i105:                                        ; preds = %invoke.cont.i.i99
  %104 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  br label %lpad.body.i107

lpad.body.i107:                                   ; preds = %lpad.i105, %lpad.body.i.i102
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %1)
          to label %terminate.lpad.body unwind label %terminate.lpad.i109

terminate.lpad.i109:                              ; preds = %lpad.body.i107
  %105 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

eh.resume:                                        ; preds = %invoke.cont.i104, %lpad.body
  %exn.slot.4 = phi i8* [ %77, %lpad.body ], [ %exn.slot.3, %invoke.cont.i104 ]
  %ehselector.slot.4 = phi i32 [ %78, %lpad.body ], [ %ehselector.slot.3, %invoke.cont.i104 ]
  %__left_.i.i.i.i.i = getelementptr inbounds %"class.std::__1::multimap"* %pl, i32 0, i32 0, i32 1, i32 0, i32 0, i32 0
  %106 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i, align 4
  %107 = bitcast %"class.std::__1::__tree_node_base"* %106 to %"class.std::__1::__tree_node.12"*
  call void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree.11"* %__tree_.i.i, %"class.std::__1::__tree_node.12"* %107) nounwind
  %lpad.val = insertvalue { i8*, i32 } undef, i8* %exn.slot.4, 0
  %lpad.val32 = insertvalue { i8*, i32 } %lpad.val, i32 %ehselector.slot.4, 1
  resume { i8*, i32 } %lpad.val32

terminate.lpad:                                   ; preds = %invoke.cont.i104, %ehcleanup23, %ehcleanup20, %_ZNSt3__14pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i87, %_ZNSt3__14pairIKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_ED2Ev.exit.i77
  %108 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  br label %terminate.lpad.body

terminate.lpad.body:                              ; preds = %terminate.lpad, %lpad.body.i107, %lpad.i.i83, %lpad.i.i73
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable
}

declare %"class.std::__1::basic_ostream"* @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj(%"class.std::__1::basic_ostream"*, i32)

define %"class.OIS::InputManager"* @_ZN3OIS12InputManager17createInputSystemERNSt3__18multimapINS1_12basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_NS1_4lessIS8_EENS6_INS1_4pairIKS8_S8_EEEEEE(%"class.std::__1::multimap"* %paramList) align 2 {
entry:
  %call = tail call noalias i8* @_Znwj(i32 88)
  %0 = bitcast i8* %call to %"class.OIS::LinuxInputManager"*
  invoke void @_ZN3OIS17LinuxInputManagerC1Ev(%"class.OIS::LinuxInputManager"* %0)
          to label %invoke.cont unwind label %lpad

invoke.cont:                                      ; preds = %entry
  %1 = bitcast i8* %call to %"class.OIS::InputManager"*
  %2 = bitcast i8* %call to void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)***
  %vtable = load void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)*** %2, align 4
  %3 = load void (%"class.OIS::InputManager"*, %"class.std::__1::multimap"*)** %vtable, align 4
  invoke void %3(%"class.OIS::InputManager"* %1, %"class.std::__1::multimap"* %paramList)
          to label %try.cont unwind label %lpad1

lpad:                                             ; preds = %entry
  %4 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %5 = extractvalue { i8*, i32 } %4, 0
  %6 = extractvalue { i8*, i32 } %4, 1
  tail call void @_ZdlPv(i8* %call) nounwind
  br label %eh.resume

lpad1:                                            ; preds = %invoke.cont
  %7 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  %8 = extractvalue { i8*, i32 } %7, 0
  %9 = tail call i8* @__cxa_begin_catch(i8* %8) nounwind
  %isnull = icmp eq i8* %call, null
  br i1 %isnull, label %delete.end, label %delete.notnull

delete.notnull:                                   ; preds = %lpad1
  %10 = bitcast i8* %call to void (%"class.OIS::InputManager"*)***
  %vtable3 = load void (%"class.OIS::InputManager"*)*** %10, align 4
  %vfn4 = getelementptr inbounds void (%"class.OIS::InputManager"*)** %vtable3, i32 2
  %11 = load void (%"class.OIS::InputManager"*)** %vfn4, align 4
  invoke void %11(%"class.OIS::InputManager"* %1)
          to label %delete.end unwind label %lpad5

delete.end:                                       ; preds = %delete.notnull, %lpad1
  invoke void @__cxa_rethrow() noreturn
          to label %unreachable unwind label %lpad5

lpad5:                                            ; preds = %delete.end, %delete.notnull
  %12 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %13 = extractvalue { i8*, i32 } %12, 0
  %14 = extractvalue { i8*, i32 } %12, 1
  invoke void @__cxa_end_catch()
          to label %eh.resume unwind label %terminate.lpad

try.cont:                                         ; preds = %invoke.cont
  ret %"class.OIS::InputManager"* %1

eh.resume:                                        ; preds = %lpad5, %lpad
  %exn.slot.0 = phi i8* [ %13, %lpad5 ], [ %5, %lpad ]
  %ehselector.slot.0 = phi i32 [ %14, %lpad5 ], [ %6, %lpad ]
  %lpad.val = insertvalue { i8*, i32 } undef, i8* %exn.slot.0, 0
  %lpad.val9 = insertvalue { i8*, i32 } %lpad.val, i32 %ehselector.slot.0, 1
  resume { i8*, i32 } %lpad.val9

terminate.lpad:                                   ; preds = %lpad5
  %15 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

unreachable:                                      ; preds = %delete.end
  unreachable
}

define linkonce_odr void @_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_ostringstream"* %this) unnamed_addr inlinehint align 2 {
entry:
  %0 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %0, align 4
  %1 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %1, align 4
  %__sb_.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 1
  %2 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %2, align 4
  %__str_.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 1, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i unwind label %lpad.i.i.i

lpad.i.i.i:                                       ; preds = %entry
  %3 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %4 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %lpad.body.i unwind label %terminate.lpad.i.i.i

terminate.lpad.i.i.i:                             ; preds = %lpad.i.i.i
  %5 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i: ; preds = %entry
  %6 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %6)
          to label %invoke.cont.i unwind label %lpad.i

invoke.cont.i:                                    ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i
  %7 = bitcast %"class.std::__1::basic_ostringstream"* %this to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %7, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %invoke.cont unwind label %lpad

lpad.i:                                           ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i
  %8 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i, %lpad.i.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %8, %lpad.i ], [ %3, %lpad.i.i.i ]
  %9 = bitcast %"class.std::__1::basic_ostringstream"* %this to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %9, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body unwind label %terminate.lpad.i

terminate.lpad.i:                                 ; preds = %lpad.body.i
  %10 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont:                                      ; preds = %invoke.cont.i
  %11 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2
  tail call void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %11)
  ret void

lpad:                                             ; preds = %invoke.cont.i
  %12 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body

lpad.body:                                        ; preds = %lpad, %lpad.body.i
  %eh.lpad-body = phi { i8*, i32 } [ %12, %lpad ], [ %eh.lpad-body.i, %lpad.body.i ]
  %13 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %13)
          to label %eh.resume unwind label %terminate.lpad

eh.resume:                                        ; preds = %lpad.body
  resume { i8*, i32 } %eh.lpad-body

terminate.lpad:                                   ; preds = %lpad.body
  %14 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable
}

declare noalias i8* @_Znwj(i32)

declare void @_ZN3OIS17LinuxInputManagerC1Ev(%"class.OIS::LinuxInputManager"*)

declare i8* @__cxa_begin_catch(i8*)

declare void @__cxa_rethrow()

declare void @__cxa_end_catch()

define void @_ZN3OIS12InputManager18destroyInputSystemEPS0_(%"class.OIS::InputManager"* %manager) align 2 {
entry:
  %cmp = icmp eq %"class.OIS::InputManager"* %manager, null
  br i1 %cmp, label %delete.end, label %if.end

if.end:                                           ; preds = %entry
  %__tree_.i = getelementptr inbounds %"class.OIS::InputManager"* %manager, i32 0, i32 3, i32 0
  %__begin_node_.i.i.i = getelementptr inbounds %"class.std::__1::__tree"* %__tree_.i, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %manager, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0
  %1 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node"*
  %lnot.i.i13 = icmp eq %"class.std::__1::__tree_node"* %0, %1
  br i1 %lnot.i.i13, label %delete.notnull, label %for.body

for.body:                                         ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, %if.end
  %i.sroa.0.014 = phi %"class.std::__1::__tree_node"* [ %11, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit ], [ %0, %if.end ]
  %second = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.014, i32 0, i32 1, i32 0, i32 1
  %2 = load %"class.OIS::FactoryCreator"** %second, align 4
  %3 = bitcast %"class.OIS::FactoryCreator"* %2 to void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)***
  %vtable = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)*** %3, align 4
  %vfn = getelementptr inbounds void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vtable, i32 7
  %4 = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vfn, align 4
  %first = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.014, i32 0, i32 1, i32 0, i32 0
  %5 = load %"class.OIS::Object"** %first, align 4
  tail call void %4(%"class.OIS::FactoryCreator"* %2, %"class.OIS::Object"* %5)
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.014, i32 0, i32 0, i32 1
  %6 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %6, null
  br i1 %cmp.i, label %while.cond.i.preheader, label %while.cond.i.i

while.cond.i.preheader:                           ; preds = %for.body
  %7 = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.014, i32 0, i32 0
  br label %while.cond.i

while.cond.i.i:                                   ; preds = %while.cond.i.i, %for.body
  %__x.addr.i9.0.i = phi %"class.std::__1::__tree_node_base"* [ %8, %while.cond.i.i ], [ %6, %for.body ]
  %__left_.i10.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i, i32 0, i32 0, i32 0
  %8 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i, align 4
  %cmp.i13.i = icmp eq %"class.std::__1::__tree_node_base"* %8, null
  br i1 %cmp.i13.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i.i

while.cond.i:                                     ; preds = %while.cond.i, %while.cond.i.preheader
  %__x.addr.0.i = phi %"class.std::__1::__tree_node_base"* [ %9, %while.cond.i ], [ %7, %while.cond.i.preheader ]
  %__parent_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i, i32 0, i32 2
  %9 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i, align 4
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %9, i32 0, i32 0, i32 0
  %10 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %lnot.i = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i, %10
  br i1 %lnot.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit: ; preds = %while.cond.i, %while.cond.i.i
  %retval.0.i = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.i9.0.i, %while.cond.i.i ], [ %9, %while.cond.i ]
  %11 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i to %"class.std::__1::__tree_node"*
  %12 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node_base"*
  %lnot.i.i = icmp eq %"class.std::__1::__tree_node_base"* %retval.0.i, %12
  br i1 %lnot.i.i, label %delete.notnull, label %for.body

delete.notnull:                                   ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, %if.end
  %__left_.i.i11 = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i, i32 0, i32 0
  %13 = load %"class.std::__1::__tree_node_base"** %__left_.i.i11, align 4
  %14 = bitcast %"class.std::__1::__tree_node_base"* %13 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %__tree_.i, %"class.std::__1::__tree_node"* %14) nounwind
  %__first_.i.i.i38.i = getelementptr inbounds %"class.OIS::InputManager"* %manager, i32 0, i32 3, i32 0, i32 2, i32 0, i32 0
  store i32 0, i32* %__first_.i.i.i38.i, align 4
  store %"class.std::__1::__tree_node"* %1, %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i.i11, align 4
  %15 = bitcast %"class.OIS::InputManager"* %manager to void (%"class.OIS::InputManager"*)***
  %vtable6 = load void (%"class.OIS::InputManager"*)*** %15, align 4
  %vfn7 = getelementptr inbounds void (%"class.OIS::InputManager"*)** %vtable6, i32 2
  %16 = load void (%"class.OIS::InputManager"*)** %vfn7, align 4
  tail call void %16(%"class.OIS::InputManager"* %manager)
  br label %delete.end

delete.end:                                       ; preds = %delete.notnull, %entry
  ret void
}

define %"class.std::__1::basic_string"* @_ZN3OIS12InputManager15inputSystemNameEv(%"class.OIS::InputManager"* %this) nounwind readnone align 2 {
entry:
  %mInputSystemName = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 4
  ret %"class.std::__1::basic_string"* %mInputSystemName
}

define i32 @_ZN3OIS12InputManager18getNumberOfDevicesENS_4TypeE(%"class.OIS::InputManager"* nocapture %this, i32 %iType) align 2 {
entry:
  %__begin_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %0 = load %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  %__end_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %1 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %lnot.i4 = icmp eq %"class.OIS::FactoryCreator"** %0, %1
  br i1 %lnot.i4, label %for.end, label %for.body

for.body:                                         ; preds = %for.body, %entry
  %factoyObjects.06 = phi i32 [ %add, %for.body ], [ 0, %entry ]
  %i.sroa.0.05 = phi %"class.OIS::FactoryCreator"** [ %incdec.ptr.i, %for.body ], [ %0, %entry ]
  %2 = load %"class.OIS::FactoryCreator"** %i.sroa.0.05, align 4
  %3 = bitcast %"class.OIS::FactoryCreator"* %2 to i32 (%"class.OIS::FactoryCreator"*, i32)***
  %vtable = load i32 (%"class.OIS::FactoryCreator"*, i32)*** %3, align 4
  %vfn = getelementptr inbounds i32 (%"class.OIS::FactoryCreator"*, i32)** %vtable, i32 3
  %4 = load i32 (%"class.OIS::FactoryCreator"*, i32)** %vfn, align 4
  %call4 = tail call i32 %4(%"class.OIS::FactoryCreator"* %2, i32 %iType)
  %add = add nsw i32 %call4, %factoyObjects.06
  %incdec.ptr.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %i.sroa.0.05, i32 1
  %lnot.i = icmp eq %"class.OIS::FactoryCreator"** %incdec.ptr.i, %1
  br i1 %lnot.i, label %for.end, label %for.body

for.end:                                          ; preds = %for.body, %entry
  %factoyObjects.0.lcssa = phi i32 [ 0, %entry ], [ %add, %for.body ]
  ret i32 %factoyObjects.0.lcssa
}

define void @_ZN3OIS12InputManager15listFreeDevicesEv(%"class.std::__1::multimap.54"* noalias sret %agg.result, %"class.OIS::InputManager"* nocapture %this) align 2 {
entry:
  %agg.tmp.i64 = alloca %"class.std::__1::__tree_const_iterator.81", align 4
  %ref.tmp.i = alloca %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type", align 4
  %tmp.i65 = alloca %"class.std::__1::__tree_iterator.68", align 4
  %temp = alloca %"class.std::__1::multimap.54", align 4
  %__tree_.i.i = getelementptr inbounds %"class.std::__1::multimap.54"* %agg.result, i32 0, i32 0
  %__first_.i.i.i.i.i8 = getelementptr inbounds %"class.std::__1::multimap.54"* %agg.result, i32 0, i32 0, i32 1, i32 0, i32 0
  %__left_.i.i.i.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i8, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i.i.i, align 4
  %__first_.i.i.i20.i.i = getelementptr inbounds %"class.std::__1::multimap.54"* %agg.result, i32 0, i32 0, i32 2, i32 0, i32 0
  store i32 0, i32* %__first_.i.i.i20.i.i, align 4
  %0 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i8 to %"class.std::__1::__tree_node.56"*
  %__begin_node_.i.i.i9 = getelementptr inbounds %"class.std::__1::multimap.54"* %agg.result, i32 0, i32 0, i32 0
  store %"class.std::__1::__tree_node.56"* %0, %"class.std::__1::__tree_node.56"** %__begin_node_.i.i.i9, align 4
  %__begin_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %1 = load %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  %__end_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %2 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %lnot.i26 = icmp eq %"class.OIS::FactoryCreator"** %1, %2
  br i1 %lnot.i26, label %nrvo.skipdtor, label %for.body.lr.ph

for.body.lr.ph:                                   ; preds = %entry
  %__begin_node_.i.i.i = getelementptr inbounds %"class.std::__1::multimap.54"* %temp, i32 0, i32 0, i32 0
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.std::__1::multimap.54"* %temp, i32 0, i32 0, i32 1, i32 0, i32 0
  %3 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node.56"*
  %__tree_.i.i20 = getelementptr inbounds %"class.std::__1::multimap.54"* %temp, i32 0, i32 0
  %__left_.i.i.i.i.i21 = getelementptr inbounds %"class.std::__1::multimap.54"* %temp, i32 0, i32 0, i32 1, i32 0, i32 0, i32 0
  %__e.i.sroa.0.0..idx = getelementptr inbounds %"class.std::__1::__tree_const_iterator.81"* %agg.tmp.i64, i32 0, i32 0
  %first.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i, i32 0, i32 0, i32 0
  %second.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i, i32 0, i32 0, i32 1
  br label %for.body

for.body:                                         ; preds = %for.inc, %for.body.lr.ph
  %i.sroa.0.027 = phi %"class.OIS::FactoryCreator"** [ %1, %for.body.lr.ph ], [ %incdec.ptr.i, %for.inc ]
  %4 = load %"class.OIS::FactoryCreator"** %i.sroa.0.027, align 4
  %5 = bitcast %"class.OIS::FactoryCreator"* %4 to void (%"class.std::__1::multimap.54"*, %"class.OIS::FactoryCreator"*)***
  %vtable = load void (%"class.std::__1::multimap.54"*, %"class.OIS::FactoryCreator"*)*** %5, align 4
  %vfn = getelementptr inbounds void (%"class.std::__1::multimap.54"*, %"class.OIS::FactoryCreator"*)** %vtable, i32 2
  %6 = load void (%"class.std::__1::multimap.54"*, %"class.OIS::FactoryCreator"*)** %vfn, align 4
  invoke void %6(%"class.std::__1::multimap.54"* sret %temp, %"class.OIS::FactoryCreator"* %4)
          to label %invoke.cont unwind label %lpad

invoke.cont:                                      ; preds = %for.body
  %7 = load %"class.std::__1::__tree_node.56"** %__begin_node_.i.i.i, align 4
  %lnot.i.i.i24 = icmp eq %"class.std::__1::__tree_node.56"* %7, %3
  br i1 %lnot.i.i.i24, label %for.inc, label %for.body.i

for.body.i:                                       ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, %invoke.cont
  %agg.tmp51.sroa.0.025 = phi %"class.std::__1::__tree_node.56"* [ %14, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit ], [ %7, %invoke.cont ]
  store %"class.std::__1::__tree_node.56"* %0, %"class.std::__1::__tree_node.56"** %__e.i.sroa.0.0..idx, align 4
  %first2.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node.56"* %agg.tmp51.sroa.0.025, i32 0, i32 1, i32 0, i32 0
  %8 = load i32* %first2.i.i.i.i, align 4
  store i32 %8, i32* %first.i.i.i.i, align 4
  %second3.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node.56"* %agg.tmp51.sroa.0.025, i32 0, i32 1, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %second.i.i.i.i, %"class.std::__1::basic_string"* %second3.i.i.i.i)
          to label %.noexc unwind label %lpad5

.noexc:                                           ; preds = %for.body.i
  invoke void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE14__insert_multiENS_21__tree_const_iteratorISH_PNS_11__tree_nodeISH_PvEEiEERKSH_(%"class.std::__1::__tree_iterator.68"* sret %tmp.i65, %"class.std::__1::__tree.55"* %__tree_.i.i, %"class.std::__1::__tree_const_iterator.81"* byval %agg.tmp.i64, %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %ref.tmp.i)
          to label %invoke.cont.i unwind label %lpad.i

invoke.cont.i:                                    ; preds = %.noexc
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %.noexc74 unwind label %lpad5

.noexc74:                                         ; preds = %invoke.cont.i
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node.56"* %agg.tmp51.sroa.0.025, i32 0, i32 0, i32 1
  %9 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %9, null
  br i1 %cmp.i, label %while.cond.i.preheader, label %while.cond.i.i

while.cond.i.preheader:                           ; preds = %.noexc74
  %10 = getelementptr inbounds %"class.std::__1::__tree_node.56"* %agg.tmp51.sroa.0.025, i32 0, i32 0
  br label %while.cond.i

while.cond.i.i:                                   ; preds = %while.cond.i.i, %.noexc74
  %__x.addr.i9.0.i = phi %"class.std::__1::__tree_node_base"* [ %11, %while.cond.i.i ], [ %9, %.noexc74 ]
  %__left_.i10.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i, i32 0, i32 0, i32 0
  %11 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i, align 4
  %cmp.i13.i = icmp eq %"class.std::__1::__tree_node_base"* %11, null
  br i1 %cmp.i13.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i.i

while.cond.i:                                     ; preds = %while.cond.i, %while.cond.i.preheader
  %__x.addr.0.i = phi %"class.std::__1::__tree_node_base"* [ %12, %while.cond.i ], [ %10, %while.cond.i.preheader ]
  %__parent_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i, i32 0, i32 2
  %12 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i, align 4
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %12, i32 0, i32 0, i32 0
  %13 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %lnot.i14 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i, %13
  br i1 %lnot.i14, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit: ; preds = %while.cond.i, %while.cond.i.i
  %retval.0.i = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.i9.0.i, %while.cond.i.i ], [ %12, %while.cond.i ]
  %14 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i to %"class.std::__1::__tree_node.56"*
  %15 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node_base"*
  %lnot.i.i.i = icmp eq %"class.std::__1::__tree_node_base"* %retval.0.i, %15
  br i1 %lnot.i.i.i, label %for.inc, label %for.body.i

lpad.i:                                           ; preds = %.noexc
  %16 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %lpad5.body unwind label %terminate.lpad.i

terminate.lpad.i:                                 ; preds = %lpad.i
  %17 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

for.inc:                                          ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, %invoke.cont
  %18 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i21, align 4
  %19 = bitcast %"class.std::__1::__tree_node_base"* %18 to %"class.std::__1::__tree_node.56"*
  call void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %__tree_.i.i20, %"class.std::__1::__tree_node.56"* %19) nounwind
  %incdec.ptr.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %i.sroa.0.027, i32 1
  %lnot.i = icmp eq %"class.OIS::FactoryCreator"** %incdec.ptr.i, %2
  br i1 %lnot.i, label %nrvo.skipdtor, label %for.body

lpad:                                             ; preds = %for.body
  %20 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %21 = extractvalue { i8*, i32 } %20, 0
  %22 = extractvalue { i8*, i32 } %20, 1
  br label %eh.resume

lpad5:                                            ; preds = %invoke.cont.i, %for.body.i
  %23 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad5.body

lpad5.body:                                       ; preds = %lpad5, %lpad.i
  %eh.lpad-body = phi { i8*, i32 } [ %23, %lpad5 ], [ %16, %lpad.i ]
  %24 = extractvalue { i8*, i32 } %eh.lpad-body, 0
  %25 = extractvalue { i8*, i32 } %eh.lpad-body, 1
  %26 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i21, align 4
  %27 = bitcast %"class.std::__1::__tree_node_base"* %26 to %"class.std::__1::__tree_node.56"*
  call void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %__tree_.i.i20, %"class.std::__1::__tree_node.56"* %27) nounwind
  br label %eh.resume

nrvo.skipdtor:                                    ; preds = %for.inc, %entry
  ret void

eh.resume:                                        ; preds = %lpad5.body, %lpad
  %exn.slot.0 = phi i8* [ %24, %lpad5.body ], [ %21, %lpad ]
  %ehselector.slot.0 = phi i32 [ %25, %lpad5.body ], [ %22, %lpad ]
  %__left_.i.i.i.i.i = getelementptr inbounds %"class.std::__1::multimap.54"* %agg.result, i32 0, i32 0, i32 1, i32 0, i32 0, i32 0
  %28 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i.i.i, align 4
  %29 = bitcast %"class.std::__1::__tree_node_base"* %28 to %"class.std::__1::__tree_node.56"*
  call void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %__tree_.i.i, %"class.std::__1::__tree_node.56"* %29) nounwind
  %lpad.val = insertvalue { i8*, i32 } undef, i8* %exn.slot.0, 0
  %lpad.val11 = insertvalue { i8*, i32 } %lpad.val, i32 %ehselector.slot.0, 1
  resume { i8*, i32 } %lpad.val11
}

define %"class.OIS::Object"* @_ZN3OIS12InputManager17createInputObjectENS_4TypeEbRKNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(%"class.OIS::InputManager"* %this, i32 %iType, i1 zeroext %bufferMode, %"class.std::__1::basic_string"* %vendor) align 2 {
entry:
  %obj = alloca %"class.OIS::Object"*, align 4
  store %"class.OIS::Object"* null, %"class.OIS::Object"** %obj, align 4
  %__begin_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %0 = load %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  %__end_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %1 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %lnot.i12 = icmp eq %"class.OIS::FactoryCreator"** %0, %1
  br i1 %lnot.i12, label %invoke.cont, label %for.body

for.body:                                         ; preds = %for.inc, %entry
  %i.sroa.0.013 = phi %"class.OIS::FactoryCreator"** [ %incdec.ptr.i, %for.inc ], [ %0, %entry ]
  %2 = load %"class.OIS::FactoryCreator"** %i.sroa.0.013, align 4
  %3 = bitcast %"class.OIS::FactoryCreator"* %2 to i32 (%"class.OIS::FactoryCreator"*, i32)***
  %vtable = load i32 (%"class.OIS::FactoryCreator"*, i32)*** %3, align 4
  %vfn = getelementptr inbounds i32 (%"class.OIS::FactoryCreator"*, i32)** %vtable, i32 4
  %4 = load i32 (%"class.OIS::FactoryCreator"*, i32)** %vfn, align 4
  %call4 = call i32 %4(%"class.OIS::FactoryCreator"* %2, i32 %iType)
  %cmp = icmp sgt i32 %call4, 0
  br i1 %cmp, label %if.then, label %for.inc

if.then:                                          ; preds = %for.body
  %call.i = call i32 @_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc(%"class.std::__1::basic_string"* %vendor, i8* getelementptr inbounds ([1 x i8]* @.str2, i32 0, i32 0)) nounwind
  %cmp.i = icmp eq i32 %call.i, 0
  br i1 %cmp.i, label %for.end, label %lor.lhs.false

lor.lhs.false:                                    ; preds = %if.then
  %5 = load %"class.OIS::FactoryCreator"** %i.sroa.0.013, align 4
  %6 = bitcast %"class.OIS::FactoryCreator"* %5 to i1 (%"class.OIS::FactoryCreator"*, i32, %"class.std::__1::basic_string"*)***
  %vtable7 = load i1 (%"class.OIS::FactoryCreator"*, i32, %"class.std::__1::basic_string"*)*** %6, align 4
  %vfn8 = getelementptr inbounds i1 (%"class.OIS::FactoryCreator"*, i32, %"class.std::__1::basic_string"*)** %vtable7, i32 5
  %7 = load i1 (%"class.OIS::FactoryCreator"*, i32, %"class.std::__1::basic_string"*)** %vfn8, align 4
  %call9 = call zeroext i1 %7(%"class.OIS::FactoryCreator"* %5, i32 %iType, %"class.std::__1::basic_string"* %vendor)
  br i1 %call9, label %for.end, label %for.inc

for.inc:                                          ; preds = %lor.lhs.false, %for.body
  %incdec.ptr.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %i.sroa.0.013, i32 1
  %lnot.i = icmp eq %"class.OIS::FactoryCreator"** %incdec.ptr.i, %1
  br i1 %lnot.i, label %invoke.cont, label %for.body

for.end:                                          ; preds = %lor.lhs.false, %if.then
  %8 = load %"class.OIS::FactoryCreator"** %i.sroa.0.013, align 4
  %9 = bitcast %"class.OIS::FactoryCreator"* %8 to %"class.OIS::Object"* (%"class.OIS::FactoryCreator"*, %"class.OIS::InputManager"*, i32, i1, %"class.std::__1::basic_string"*)***
  %vtable12 = load %"class.OIS::Object"* (%"class.OIS::FactoryCreator"*, %"class.OIS::InputManager"*, i32, i1, %"class.std::__1::basic_string"*)*** %9, align 4
  %vfn13 = getelementptr inbounds %"class.OIS::Object"* (%"class.OIS::FactoryCreator"*, %"class.OIS::InputManager"*, i32, i1, %"class.std::__1::basic_string"*)** %vtable12, i32 6
  %10 = load %"class.OIS::Object"* (%"class.OIS::FactoryCreator"*, %"class.OIS::InputManager"*, i32, i1, %"class.std::__1::basic_string"*)** %vfn13, align 4
  %call14 = call %"class.OIS::Object"* %10(%"class.OIS::FactoryCreator"* %8, %"class.OIS::InputManager"* %this, i32 %iType, i1 zeroext %bufferMode, %"class.std::__1::basic_string"* %vendor)
  store %"class.OIS::Object"* %call14, %"class.OIS::Object"** %obj, align 4
  %11 = load %"class.OIS::FactoryCreator"** %i.sroa.0.013, align 4
  %mFactoryObjects = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3
  %call16 = call %"class.OIS::FactoryCreator"** @_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_(%"class.std::__1::map"* %mFactoryObjects, %"class.OIS::Object"** %obj)
  store %"class.OIS::FactoryCreator"* %11, %"class.OIS::FactoryCreator"** %call16, align 4
  %.pre = load %"class.OIS::Object"** %obj, align 4
  %tobool19 = icmp eq %"class.OIS::Object"* %.pre, null
  br i1 %tobool19, label %invoke.cont, label %if.end21

invoke.cont:                                      ; preds = %for.end, %for.inc, %entry
  %exception = call i8* @__cxa_allocate_exception(i32 20) nounwind
  %12 = bitcast i8* %exception to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([5 x i8*]* @_ZTVN3OIS9ExceptionE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %12, align 4
  %eType.i.i = getelementptr inbounds i8* %exception, i32 4
  %13 = bitcast i8* %eType.i.i to i32*
  store i32 1, i32* %13, align 4
  %eLine.i.i = getelementptr inbounds i8* %exception, i32 8
  %14 = bitcast i8* %eLine.i.i to i32*
  store i32 208, i32* %14, align 4
  %eFile.i.i = getelementptr inbounds i8* %exception, i32 12
  %15 = bitcast i8* %eFile.i.i to i8**
  store i8* getelementptr inbounds ([33 x i8]* @.str4, i32 0, i32 0), i8** %15, align 4
  %eText.i.i = getelementptr inbounds i8* %exception, i32 16
  %16 = bitcast i8* %eText.i.i to i8**
  store i8* getelementptr inbounds ([33 x i8]* @.str3, i32 0, i32 0), i8** %16, align 4
  call void @__cxa_throw(i8* %exception, i8* bitcast (i8** @_ZTIN3OIS9ExceptionE to i8*), i8* bitcast (void (%"class.OIS::Exception"*)* @_ZN3OIS9ExceptionD1Ev to i8*)) noreturn
  unreachable

if.end21:                                         ; preds = %for.end
  %17 = bitcast %"class.OIS::Object"* %.pre to void (%"class.OIS::Object"*)***
  %vtable22 = load void (%"class.OIS::Object"*)*** %17, align 4
  %vfn23 = getelementptr inbounds void (%"class.OIS::Object"*)** %vtable22, i32 7
  %18 = load void (%"class.OIS::Object"*)** %vfn23, align 4
  invoke void %18(%"class.OIS::Object"* %.pre)
          to label %try.cont unwind label %lpad24

lpad24:                                           ; preds = %if.end21
  %19 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  %20 = extractvalue { i8*, i32 } %19, 0
  %21 = call i8* @__cxa_begin_catch(i8* %20) nounwind
  invoke void @_ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE(%"class.OIS::InputManager"* %this, %"class.OIS::Object"* %.pre)
          to label %invoke.cont27 unwind label %lpad26

invoke.cont27:                                    ; preds = %lpad24
  invoke void @__cxa_rethrow() noreturn
          to label %unreachable unwind label %lpad26

lpad26:                                           ; preds = %invoke.cont27, %lpad24
  %22 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @__cxa_end_catch()
          to label %eh.resume unwind label %terminate.lpad

try.cont:                                         ; preds = %if.end21
  ret %"class.OIS::Object"* %.pre

eh.resume:                                        ; preds = %lpad26
  resume { i8*, i32 } %22

terminate.lpad:                                   ; preds = %lpad26
  %23 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

unreachable:                                      ; preds = %invoke.cont27
  unreachable
}

define linkonce_odr %"class.OIS::FactoryCreator"** @_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEEixERSA_(%"class.std::__1::map"* %this, %"class.OIS::Object"** nocapture %__k) align 2 {
entry:
  %__parent = alloca %"class.std::__1::__tree_node_base"*, align 4
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.std::__1::map"* %this, i32 0, i32 0, i32 1, i32 0, i32 0
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %0, null
  br i1 %cmp.i, label %if.end34.i, label %while.body.preheader.i

while.body.preheader.i:                           ; preds = %entry
  %1 = load %"class.OIS::Object"** %__k, align 4
  br label %while.body.i

while.body.i:                                     ; preds = %if.then22.i, %if.then7.i, %while.body.preheader.i
  %__nd.0.in.i = phi %"class.std::__1::__tree_node_base"* [ %0, %while.body.preheader.i ], [ %3, %if.then7.i ], [ %4, %if.then22.i ]
  %__value_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 1
  %first.i = bitcast %"class.std::__1::__tree_node_base"* %__value_.i to %"class.OIS::Object"**
  %2 = load %"class.OIS::Object"** %first.i, align 4
  %cmp.i73.i = icmp ult %"class.OIS::Object"* %1, %2
  br i1 %cmp.i73.i, label %if.then7.i, label %if.else14.i

if.then7.i:                                       ; preds = %while.body.i
  %__left_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 0, i32 0, i32 0
  %3 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %cmp10.i = icmp eq %"class.std::__1::__tree_node_base"* %3, null
  br i1 %cmp10.i, label %if.else.i, label %while.body.i

if.else.i:                                        ; preds = %if.then7.i
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit

if.else14.i:                                      ; preds = %while.body.i
  %cmp.i.i = icmp ult %"class.OIS::Object"* %2, %1
  br i1 %cmp.i.i, label %if.then22.i, label %if.else31.i

if.then22.i:                                      ; preds = %if.else14.i
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 0, i32 1
  %4 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp25.i = icmp eq %"class.std::__1::__tree_node_base"* %4, null
  br i1 %cmp25.i, label %if.else28.i, label %while.body.i

if.else28.i:                                      ; preds = %if.then22.i
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit

if.else31.i:                                      ; preds = %if.else14.i
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit

if.end34.i:                                       ; preds = %entry
  %5 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node_base"*
  store %"class.std::__1::__tree_node_base"* %5, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit

_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit: ; preds = %if.end34.i, %if.else31.i, %if.else28.i, %if.else.i
  %__parent.0.load = phi %"class.std::__1::__tree_node_base"* [ %__nd.0.in.i, %if.else.i ], [ %__nd.0.in.i, %if.else28.i ], [ %__nd.0.in.i, %if.else31.i ], [ %5, %if.end34.i ]
  %retval.0.i = phi %"class.std::__1::__tree_node_base"** [ %__left_.i, %if.else.i ], [ %__right_.i, %if.else28.i ], [ %__parent, %if.else31.i ], [ %__left_.i.i, %if.end34.i ]
  %6 = load %"class.std::__1::__tree_node_base"** %retval.0.i, align 4
  %7 = bitcast %"class.std::__1::__tree_node_base"* %6 to %"class.std::__1::__tree_node"*
  %cmp = icmp eq %"class.std::__1::__tree_node_base"* %6, null
  br i1 %cmp, label %if.then, label %if.end

if.then:                                          ; preds = %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit
  %call.i.i.i = call noalias i8* @_Znwj(i32 24)
  %8 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node"*
  %__value_.i36 = getelementptr inbounds i8* %call.i.i.i, i32 16
  %new.isnull.i.i = icmp eq i8* %__value_.i36, null
  br i1 %new.isnull.i.i, label %invoke.cont.i, label %new.notnull.i.i

new.notnull.i.i:                                  ; preds = %if.then
  %9 = bitcast i8* %__value_.i36 to %"class.OIS::Object"**
  %10 = load %"class.OIS::Object"** %__k, align 4
  store %"class.OIS::Object"* %10, %"class.OIS::Object"** %9, align 4
  br label %invoke.cont.i

invoke.cont.i:                                    ; preds = %new.notnull.i.i, %if.then
  %second.i = getelementptr inbounds i8* %call.i.i.i, i32 20
  %new.isnull.i383.i = icmp eq i8* %second.i, null
  br i1 %new.isnull.i383.i, label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit, label %new.notnull.i384.i

new.notnull.i384.i:                               ; preds = %invoke.cont.i
  %11 = bitcast i8* %second.i to %"class.OIS::FactoryCreator"**
  store %"class.OIS::FactoryCreator"* null, %"class.OIS::FactoryCreator"** %11, align 4
  br label %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit

_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit: ; preds = %new.notnull.i384.i, %invoke.cont.i
  %12 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"*
  %__left_.i33 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i33, align 4
  %__right_.i34 = getelementptr inbounds i8* %call.i.i.i, i32 4
  %13 = bitcast i8* %__right_.i34 to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %13, align 4
  %__parent_.i = getelementptr inbounds i8* %call.i.i.i, i32 8
  %14 = bitcast i8* %__parent_.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* %__parent.0.load, %"class.std::__1::__tree_node_base"** %14, align 4
  store %"class.std::__1::__tree_node_base"* %12, %"class.std::__1::__tree_node_base"** %retval.0.i, align 4
  %__begin_node_.i43.i = getelementptr inbounds %"class.std::__1::map"* %this, i32 0, i32 0, i32 0
  %15 = load %"class.std::__1::__tree_node"** %__begin_node_.i43.i, align 4
  %__left_5.i = getelementptr inbounds %"class.std::__1::__tree_node"* %15, i32 0, i32 0, i32 0, i32 0
  %16 = load %"class.std::__1::__tree_node_base"** %__left_5.i, align 4
  %cmp.i35 = icmp eq %"class.std::__1::__tree_node_base"* %16, null
  br i1 %cmp.i35, label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSN_SN_.exit, label %if.then.i

if.then.i:                                        ; preds = %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit
  %17 = bitcast %"class.std::__1::__tree_node_base"* %16 to %"class.std::__1::__tree_node"*
  store %"class.std::__1::__tree_node"* %17, %"class.std::__1::__tree_node"** %__begin_node_.i43.i, align 4
  %.pre.i = load %"class.std::__1::__tree_node_base"** %retval.0.i, align 4
  br label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSN_SN_.exit

_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSN_SN_.exit: ; preds = %if.then.i, %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit
  %18 = phi %"class.std::__1::__tree_node_base"* [ %12, %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE25__construct_node_with_keyERSA_.exit ], [ %.pre.i, %if.then.i ]
  %__left_12.i = getelementptr inbounds %"class.std::__1::map"* %this, i32 0, i32 0, i32 1, i32 0, i32 0, i32 0
  %19 = load %"class.std::__1::__tree_node_base"** %__left_12.i, align 4
  call void @_ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %19, %"class.std::__1::__tree_node_base"* %18) nounwind
  %__first_.i.i.i.i = getelementptr inbounds %"class.std::__1::map"* %this, i32 0, i32 0, i32 2, i32 0, i32 0
  %20 = load i32* %__first_.i.i.i.i, align 4
  %inc.i = add i32 %20, 1
  store i32 %inc.i, i32* %__first_.i.i.i.i, align 4
  br label %if.end

if.end:                                           ; preds = %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSN_SN_.exit, %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit
  %__r.0 = phi %"class.std::__1::__tree_node"* [ %7, %_ZNSt3__13mapIPN3OIS6ObjectEPNS1_14FactoryCreatorENS_4lessIS3_EENS_9allocatorINS_4pairIKS3_S5_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_.exit ], [ %8, %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSN_SN_.exit ]
  %second = getelementptr inbounds %"class.std::__1::__tree_node"* %__r.0, i32 0, i32 1, i32 0, i32 1
  ret %"class.OIS::FactoryCreator"** %second
}

declare i8* @__cxa_allocate_exception(i32)

define linkonce_odr void @_ZN3OIS9ExceptionD1Ev(%"class.OIS::Exception"* nocapture %this) unnamed_addr nounwind readnone align 2 {
entry:
  ret void
}

declare void @__cxa_throw(i8*, i8*, i8*)

define void @_ZN3OIS12InputManager18destroyInputObjectEPNS_6ObjectE(%"class.OIS::InputManager"* %this, %"class.OIS::Object"* %obj) align 2 {
entry:
  %cmp = icmp eq %"class.OIS::Object"* %obj, null
  br i1 %cmp, label %if.end7, label %if.end

if.end:                                           ; preds = %entry
  %__first_.i.i.i.i.i8 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0
  %0 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i8 to %"class.std::__1::__tree_node"*
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i8, i32 0, i32 0
  %1 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %cmp59.i.i = icmp eq %"class.std::__1::__tree_node_base"* %1, null
  br i1 %cmp59.i.i, label %invoke.cont, label %while.body.lr.ph.i.i

while.body.lr.ph.i.i:                             ; preds = %if.then.i.i, %if.end
  %__result.addr.0.ph11.i.i = phi %"class.std::__1::__tree_node"* [ %__root.addr.06.i.i, %if.then.i.i ], [ %0, %if.end ]
  %__root.addr.0.ph10.i.in.i = phi %"class.std::__1::__tree_node_base"* [ %4, %if.then.i.i ], [ %1, %if.end ]
  br label %while.body.i.i

while.body.i.i:                                   ; preds = %if.else.i.i, %while.body.lr.ph.i.i
  %__root.addr.06.i.in.i = phi %"class.std::__1::__tree_node_base"* [ %__root.addr.0.ph10.i.in.i, %while.body.lr.ph.i.i ], [ %6, %if.else.i.i ]
  %__root.addr.06.i.i = bitcast %"class.std::__1::__tree_node_base"* %__root.addr.06.i.in.i to %"class.std::__1::__tree_node"*
  %first.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__root.addr.06.i.in.i, i32 1
  %2 = bitcast %"class.std::__1::__tree_node_base"* %first.i.i.i to %"class.OIS::Object"**
  %3 = load %"class.OIS::Object"** %2, align 4
  %cmp.i.i.i.i = icmp ult %"class.OIS::Object"* %3, %obj
  br i1 %cmp.i.i.i.i, label %if.else.i.i, label %if.then.i.i

if.then.i.i:                                      ; preds = %while.body.i.i
  %__left_.i2.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__root.addr.06.i.in.i, i32 0, i32 0, i32 0
  %4 = load %"class.std::__1::__tree_node_base"** %__left_.i2.i, align 4
  %cmp5.i.i = icmp eq %"class.std::__1::__tree_node_base"* %4, null
  br i1 %cmp5.i.i, label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE13__lower_boundIS4_EENS_15__tree_iteratorISF_PNS_11__tree_nodeISF_PvEEiEERKT_SP_SP_.exit.i, label %while.body.lr.ph.i.i

if.else.i.i:                                      ; preds = %while.body.i.i
  %5 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__root.addr.06.i.in.i, i32 0, i32 1
  %6 = load %"class.std::__1::__tree_node_base"** %5, align 4
  %cmp.i.i = icmp eq %"class.std::__1::__tree_node_base"* %6, null
  br i1 %cmp.i.i, label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE13__lower_boundIS4_EENS_15__tree_iteratorISF_PNS_11__tree_nodeISF_PvEEiEERKT_SP_SP_.exit.i, label %while.body.i.i

_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE13__lower_boundIS4_EENS_15__tree_iteratorISF_PNS_11__tree_nodeISF_PvEEiEERKT_SP_SP_.exit.i: ; preds = %if.else.i.i, %if.then.i.i
  %__result.addr.0.ph8.i.i = phi %"class.std::__1::__tree_node"* [ %__result.addr.0.ph11.i.i, %if.else.i.i ], [ %__root.addr.06.i.i, %if.then.i.i ]
  %lnot.i.i9 = icmp eq %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i, %0
  br i1 %lnot.i.i9, label %invoke.cont, label %land.lhs.true.i

land.lhs.true.i:                                  ; preds = %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE13__lower_boundIS4_EENS_15__tree_iteratorISF_PNS_11__tree_nodeISF_PvEEiEERKT_SP_SP_.exit.i
  %first.i.i = getelementptr inbounds %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i, i32 0, i32 1, i32 0, i32 0
  %7 = load %"class.OIS::Object"** %first.i.i, align 4
  %cmp.i.i.i = icmp ugt %"class.OIS::Object"* %7, %obj
  br i1 %cmp.i.i.i, label %invoke.cont, label %if.then3

if.then3:                                         ; preds = %land.lhs.true.i
  %second = getelementptr inbounds %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i, i32 0, i32 1, i32 0, i32 1
  %8 = load %"class.OIS::FactoryCreator"** %second, align 4
  %9 = bitcast %"class.OIS::FactoryCreator"* %8 to void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)***
  %vtable = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)*** %9, align 4
  %vfn = getelementptr inbounds void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vtable, i32 7
  %10 = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vfn, align 4
  tail call void %10(%"class.OIS::FactoryCreator"* %8, %"class.OIS::Object"* %obj)
  %11 = getelementptr inbounds %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i, i32 0, i32 0
  %__right_.i.i = getelementptr inbounds %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i, i32 0, i32 0, i32 1
  %12 = load %"class.std::__1::__tree_node_base"** %__right_.i.i, align 4
  %cmp.i.i12 = icmp eq %"class.std::__1::__tree_node_base"* %12, null
  br i1 %cmp.i.i12, label %while.cond.i.i, label %while.cond.i.i.i

while.cond.i.i.i:                                 ; preds = %while.cond.i.i.i, %if.then3
  %__x.addr.i9.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %13, %while.cond.i.i.i ], [ %12, %if.then3 ]
  %__left_.i10.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i.i, i32 0, i32 0, i32 0
  %13 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i.i, align 4
  %cmp.i13.i.i = icmp eq %"class.std::__1::__tree_node_base"* %13, null
  br i1 %cmp.i13.i.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i, label %while.cond.i.i.i

while.cond.i.i:                                   ; preds = %while.cond.i.i, %if.then3
  %__x.addr.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %14, %while.cond.i.i ], [ %11, %if.then3 ]
  %__parent_.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i.i, i32 0, i32 2
  %14 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i.i, align 4
  %__left_.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %14, i32 0, i32 0, i32 0
  %15 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i, align 4
  %lnot.i.i13 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i.i, %15
  br i1 %lnot.i.i13, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i, label %while.cond.i.i

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i: ; preds = %while.cond.i.i, %while.cond.i.i.i
  %retval.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %14, %while.cond.i.i ], [ %__x.addr.i9.0.i.i, %while.cond.i.i.i ]
  %__begin_node_.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 0
  %16 = load %"class.std::__1::__tree_node"** %__begin_node_.i.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node"* %16, %__result.addr.0.ph8.i.i
  br i1 %cmp.i, label %if.then.i14, label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit

if.then.i14:                                      ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i
  %17 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i.i to %"class.std::__1::__tree_node"*
  store %"class.std::__1::__tree_node"* %17, %"class.std::__1::__tree_node"** %__begin_node_.i.i, align 4
  br label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit

_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit: ; preds = %if.then.i14, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i
  %__first_.i.i.i45.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 2, i32 0, i32 0
  %18 = load i32* %__first_.i.i.i45.i, align 4
  %dec.i = add i32 %18, -1
  store i32 %dec.i, i32* %__first_.i.i.i45.i, align 4
  %__left_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0, i32 0
  %19 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  tail call void @_ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %19, %"class.std::__1::__tree_node_base"* %11) nounwind
  %20 = bitcast %"class.std::__1::__tree_node"* %__result.addr.0.ph8.i.i to i8*
  tail call void @_ZdlPv(i8* %20) nounwind
  br label %if.end7

invoke.cont:                                      ; preds = %land.lhs.true.i, %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE13__lower_boundIS4_EENS_15__tree_iteratorISF_PNS_11__tree_nodeISF_PvEEiEERKT_SP_SP_.exit.i, %if.end
  %exception = tail call i8* @__cxa_allocate_exception(i32 20) nounwind
  %21 = bitcast i8* %exception to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([5 x i8*]* @_ZTVN3OIS9ExceptionE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %21, align 4
  %eType.i.i = getelementptr inbounds i8* %exception, i32 4
  %22 = bitcast i8* %eType.i.i to i32*
  store i32 8, i32* %22, align 4
  %eLine.i.i = getelementptr inbounds i8* %exception, i32 8
  %23 = bitcast i8* %eLine.i.i to i32*
  store i32 237, i32* %23, align 4
  %eFile.i.i = getelementptr inbounds i8* %exception, i32 12
  %24 = bitcast i8* %eFile.i.i to i8**
  store i8* getelementptr inbounds ([33 x i8]* @.str4, i32 0, i32 0), i8** %24, align 4
  %eText.i.i = getelementptr inbounds i8* %exception, i32 16
  %25 = bitcast i8* %eText.i.i to i8**
  store i8* getelementptr inbounds ([26 x i8]* @.str5, i32 0, i32 0), i8** %25, align 4
  tail call void @__cxa_throw(i8* %exception, i8* bitcast (i8** @_ZTIN3OIS9ExceptionE to i8*), i8* bitcast (void (%"class.OIS::Exception"*)* @_ZN3OIS9ExceptionD1Ev to i8*)) noreturn
  unreachable

if.end7:                                          ; preds = %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit, %entry
  ret void
}

declare void @llvm.memcpy.p0i8.p0i8.i32(i8* nocapture, i8* nocapture, i32, i32, i1) nounwind

define void @_ZN3OIS12InputManager17addFactoryCreatorEPNS_14FactoryCreatorE(%"class.OIS::InputManager"* %this, %"class.OIS::FactoryCreator"* %factory) align 2 {
entry:
  %factory.addr = alloca %"class.OIS::FactoryCreator"*, align 4
  store %"class.OIS::FactoryCreator"* %factory, %"class.OIS::FactoryCreator"** %factory.addr, align 4
  %cmp = icmp eq %"class.OIS::FactoryCreator"* %factory, null
  br i1 %cmp, label %if.end, label %if.then

if.then:                                          ; preds = %entry
  %__end_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %0 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %__first_.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 2, i32 0, i32 0
  %1 = load %"class.OIS::FactoryCreator"*** %__first_.i.i.i.i, align 4
  %cmp.i = icmp eq %"class.OIS::FactoryCreator"** %0, %1
  br i1 %cmp.i, label %if.else.i, label %if.then.i

if.then.i:                                        ; preds = %if.then
  %new.isnull.i.i = icmp eq %"class.OIS::FactoryCreator"** %0, null
  br i1 %new.isnull.i.i, label %_ZNSt3__116allocator_traitsINS_9allocatorIPN3OIS14FactoryCreatorEEEE9constructIS4_S4_EEvRS5_PT_RKT0_.exit.i, label %new.notnull.i.i

new.notnull.i.i:                                  ; preds = %if.then.i
  store %"class.OIS::FactoryCreator"* %factory, %"class.OIS::FactoryCreator"** %0, align 4
  %.pre = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  br label %_ZNSt3__116allocator_traitsINS_9allocatorIPN3OIS14FactoryCreatorEEEE9constructIS4_S4_EEvRS5_PT_RKT0_.exit.i

_ZNSt3__116allocator_traitsINS_9allocatorIPN3OIS14FactoryCreatorEEEE9constructIS4_S4_EEvRS5_PT_RKT0_.exit.i: ; preds = %new.notnull.i.i, %if.then.i
  %2 = phi %"class.OIS::FactoryCreator"** [ %.pre, %new.notnull.i.i ], [ null, %if.then.i ]
  %incdec.ptr.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %2, i32 1
  store %"class.OIS::FactoryCreator"** %incdec.ptr.i, %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  br label %if.end

if.else.i:                                        ; preds = %if.then
  %mFactories = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2
  call void @_ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_(%"class.std::__1::vector"* %mFactories, %"class.OIS::FactoryCreator"** %factory.addr)
  br label %if.end

if.end:                                           ; preds = %if.else.i, %_ZNSt3__116allocator_traitsINS_9allocatorIPN3OIS14FactoryCreatorEEEE9constructIS4_S4_EEvRS5_PT_RKT0_.exit.i, %entry
  ret void
}

define void @_ZN3OIS12InputManager20removeFactoryCreatorEPNS_14FactoryCreatorE(%"class.OIS::InputManager"* %this, %"class.OIS::FactoryCreator"* %factory) align 2 {
entry:
  %cmp = icmp eq %"class.OIS::FactoryCreator"* %factory, null
  br i1 %cmp, label %if.end24, label %if.then

if.then:                                          ; preds = %entry
  %__begin_node_.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  %__first_.i.i.i.i.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0
  %1 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node"*
  %lnot.i.i16651 = icmp eq %"class.std::__1::__tree_node"* %0, %1
  br i1 %lnot.i.i16651, label %for.end, label %for.body.lr.ph

for.body.lr.ph:                                   ; preds = %if.then
  %__first_.i.i.i45.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 2, i32 0, i32 0
  %__left_.i = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 3, i32 0, i32 1, i32 0, i32 0, i32 0
  br label %for.body

for.body:                                         ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37, %for.body.lr.ph
  %i.sroa.0.052 = phi %"class.std::__1::__tree_node"* [ %0, %for.body.lr.ph ], [ %25, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37 ]
  %second = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.052, i32 0, i32 1, i32 0, i32 1
  %2 = load %"class.OIS::FactoryCreator"** %second, align 4
  %cmp4 = icmp eq %"class.OIS::FactoryCreator"* %2, %factory
  br i1 %cmp4, label %if.then5, label %for.inc

if.then5:                                         ; preds = %for.body
  %3 = bitcast %"class.OIS::FactoryCreator"* %factory to void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)***
  %vtable = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)*** %3, align 4
  %vfn = getelementptr inbounds void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vtable, i32 7
  %4 = load void (%"class.OIS::FactoryCreator"*, %"class.OIS::Object"*)** %vfn, align 4
  %first = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.052, i32 0, i32 1, i32 0, i32 0
  %5 = load %"class.OIS::Object"** %first, align 4
  tail call void %4(%"class.OIS::FactoryCreator"* %factory, %"class.OIS::Object"* %5)
  %6 = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.052, i32 0, i32 0
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.052, i32 0, i32 0, i32 1
  %7 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp.i23 = icmp eq %"class.std::__1::__tree_node_base"* %7, null
  br i1 %cmp.i23, label %while.cond.i, label %while.cond.i.i

while.cond.i.i:                                   ; preds = %while.cond.i.i, %if.then5
  %__x.addr.i9.0.i = phi %"class.std::__1::__tree_node_base"* [ %8, %while.cond.i.i ], [ %7, %if.then5 ]
  %__left_.i10.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i, i32 0, i32 0, i32 0
  %8 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i, align 4
  %cmp.i13.i = icmp eq %"class.std::__1::__tree_node_base"* %8, null
  br i1 %cmp.i13.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i.i

while.cond.i:                                     ; preds = %while.cond.i, %if.then5
  %__x.addr.0.i = phi %"class.std::__1::__tree_node_base"* [ %9, %while.cond.i ], [ %6, %if.then5 ]
  %__parent_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i, i32 0, i32 2
  %9 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i, align 4
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %9, i32 0, i32 0, i32 0
  %10 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %lnot.i24 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i, %10
  br i1 %lnot.i24, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit: ; preds = %while.cond.i, %while.cond.i.i
  %retval.0.i = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.i9.0.i, %while.cond.i.i ], [ %9, %while.cond.i ]
  %11 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i to %"class.std::__1::__tree_node"*
  br i1 %cmp.i23, label %while.cond.i.i42, label %while.cond.i.i.i40

while.cond.i.i.i40:                               ; preds = %while.cond.i.i.i40, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit
  %__x.addr.i9.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %12, %while.cond.i.i.i40 ], [ %7, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit ]
  %__left_.i10.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i.i, i32 0, i32 0, i32 0
  %12 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i.i, align 4
  %cmp.i13.i.i = icmp eq %"class.std::__1::__tree_node_base"* %12, null
  br i1 %cmp.i13.i.i, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i, label %while.cond.i.i.i40

while.cond.i.i42:                                 ; preds = %while.cond.i.i42, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit
  %__x.addr.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %13, %while.cond.i.i42 ], [ %6, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit ]
  %__parent_.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i.i, i32 0, i32 2
  %13 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i.i, align 4
  %__left_.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %13, i32 0, i32 0, i32 0
  %14 = load %"class.std::__1::__tree_node_base"** %__left_.i.i.i, align 4
  %lnot.i.i41 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i.i, %14
  br i1 %lnot.i.i41, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i, label %while.cond.i.i42

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i: ; preds = %while.cond.i.i42, %while.cond.i.i.i40
  %retval.0.i.i = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.i9.0.i.i, %while.cond.i.i.i40 ], [ %13, %while.cond.i.i42 ]
  %15 = load %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  %cmp.i43 = icmp eq %"class.std::__1::__tree_node"* %15, %i.sroa.0.052
  br i1 %cmp.i43, label %if.then.i, label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit

if.then.i:                                        ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i
  %16 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i.i to %"class.std::__1::__tree_node"*
  store %"class.std::__1::__tree_node"* %16, %"class.std::__1::__tree_node"** %__begin_node_.i.i.i, align 4
  br label %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit

_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit: ; preds = %if.then.i, %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit.i
  %17 = load i32* %__first_.i.i.i45.i, align 4
  %dec.i = add i32 %17, -1
  store i32 %dec.i, i32* %__first_.i.i.i45.i, align 4
  %18 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  tail call void @_ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %18, %"class.std::__1::__tree_node_base"* %6) nounwind
  %19 = bitcast %"class.std::__1::__tree_node"* %i.sroa.0.052 to i8*
  tail call void @_ZdlPv(i8* %19) nounwind
  br label %for.inc

for.inc:                                          ; preds = %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit, %for.body
  %i.sroa.0.1 = phi %"class.std::__1::__tree_node"* [ %11, %_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE5eraseENS_21__tree_const_iteratorISF_PNS_11__tree_nodeISF_PvEEiEE.exit ], [ %i.sroa.0.052, %for.body ]
  %__right_.i25 = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.1, i32 0, i32 0, i32 1
  %20 = load %"class.std::__1::__tree_node_base"** %__right_.i25, align 4
  %cmp.i26 = icmp eq %"class.std::__1::__tree_node_base"* %20, null
  br i1 %cmp.i26, label %while.cond.i35.preheader, label %while.cond.i.i30

while.cond.i35.preheader:                         ; preds = %for.inc
  %21 = getelementptr inbounds %"class.std::__1::__tree_node"* %i.sroa.0.1, i32 0, i32 0
  br label %while.cond.i35

while.cond.i.i30:                                 ; preds = %while.cond.i.i30, %for.inc
  %__x.addr.i9.0.i27 = phi %"class.std::__1::__tree_node_base"* [ %22, %while.cond.i.i30 ], [ %20, %for.inc ]
  %__left_.i10.i28 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i27, i32 0, i32 0, i32 0
  %22 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i28, align 4
  %cmp.i13.i29 = icmp eq %"class.std::__1::__tree_node_base"* %22, null
  br i1 %cmp.i13.i29, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37, label %while.cond.i.i30

while.cond.i35:                                   ; preds = %while.cond.i35, %while.cond.i35.preheader
  %__x.addr.0.i31 = phi %"class.std::__1::__tree_node_base"* [ %23, %while.cond.i35 ], [ %21, %while.cond.i35.preheader ]
  %__parent_.i.i32 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i31, i32 0, i32 2
  %23 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i32, align 4
  %__left_.i.i33 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %23, i32 0, i32 0, i32 0
  %24 = load %"class.std::__1::__tree_node_base"** %__left_.i.i33, align 4
  %lnot.i34 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i31, %24
  br i1 %lnot.i34, label %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37, label %while.cond.i35

_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37: ; preds = %while.cond.i35, %while.cond.i.i30
  %retval.0.i36 = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.i9.0.i27, %while.cond.i.i30 ], [ %23, %while.cond.i35 ]
  %25 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i36 to %"class.std::__1::__tree_node"*
  %26 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i.i to %"class.std::__1::__tree_node_base"*
  %lnot.i.i166 = icmp eq %"class.std::__1::__tree_node_base"* %retval.0.i36, %26
  br i1 %lnot.i.i166, label %for.end, label %for.body

for.end:                                          ; preds = %_ZNSt3__111__tree_nextIPNS_16__tree_node_baseIPvEEEET_S5_.exit37, %if.then
  %__begin_.i104 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 0
  %27 = load %"class.OIS::FactoryCreator"*** %__begin_.i104, align 4
  %__end_.i91 = getelementptr inbounds %"class.OIS::InputManager"* %this, i32 0, i32 2, i32 0, i32 1
  %28 = load %"class.OIS::FactoryCreator"*** %__end_.i91, align 4
  br label %for.cond.i

for.cond.i:                                       ; preds = %for.body.i, %for.end
  %agg.tmp1367.sroa.0.0 = phi %"class.OIS::FactoryCreator"** [ %27, %for.end ], [ %incdec.ptr.i.i, %for.body.i ]
  %lnot.i.i = icmp eq %"class.OIS::FactoryCreator"** %agg.tmp1367.sroa.0.0, %28
  br i1 %lnot.i.i, label %if.end24, label %for.body.i

for.body.i:                                       ; preds = %for.cond.i
  %29 = load %"class.OIS::FactoryCreator"** %agg.tmp1367.sroa.0.0, align 4
  %cmp.i = icmp eq %"class.OIS::FactoryCreator"* %29, %factory
  %incdec.ptr.i.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %agg.tmp1367.sroa.0.0, i32 1
  br i1 %cmp.i, label %_ZNSt3__14findINS_11__wrap_iterIPPN3OIS14FactoryCreatorEEES4_EET_S7_S7_RKT0_.exit, label %for.cond.i

_ZNSt3__14findINS_11__wrap_iterIPPN3OIS14FactoryCreatorEEES4_EET_S7_S7_RKT0_.exit: ; preds = %for.body.i
  %lnot.i = icmp eq %"class.OIS::FactoryCreator"** %agg.tmp1367.sroa.0.0, %28
  br i1 %lnot.i, label %if.end24, label %if.then19

if.then19:                                        ; preds = %_ZNSt3__14findINS_11__wrap_iterIPPN3OIS14FactoryCreatorEEES4_EET_S7_S7_RKT0_.exit
  %sub.ptr.lhs.cast.i.i = ptrtoint %"class.OIS::FactoryCreator"** %agg.tmp1367.sroa.0.0 to i32
  %sub.ptr.rhs.cast.i.i = ptrtoint %"class.OIS::FactoryCreator"** %27 to i32
  %sub.ptr.sub.i.i = sub i32 %sub.ptr.lhs.cast.i.i, %sub.ptr.rhs.cast.i.i
  %sub.ptr.div.i.i = ashr exact i32 %sub.ptr.sub.i.i, 2
  %add.ptr.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %27, i32 %sub.ptr.div.i.i
  %add.ptr.i.sum = add i32 %sub.ptr.div.i.i, 1
  %add.ptr2.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %27, i32 %add.ptr.i.sum
  %sub.ptr.lhs.cast.i.i.i = ptrtoint %"class.OIS::FactoryCreator"** %28 to i32
  %sub.ptr.rhs.cast.i.i.i = ptrtoint %"class.OIS::FactoryCreator"** %add.ptr2.i to i32
  %sub.ptr.sub.i.i.i = sub i32 %sub.ptr.lhs.cast.i.i.i, %sub.ptr.rhs.cast.i.i.i
  %sub.ptr.div.i.i.i = ashr exact i32 %sub.ptr.sub.i.i.i, 2
  %30 = bitcast %"class.OIS::FactoryCreator"** %add.ptr.i to i8*
  %31 = bitcast %"class.OIS::FactoryCreator"** %add.ptr2.i to i8*
  tail call void @llvm.memmove.p0i8.p0i8.i32(i8* %30, i8* %31, i32 %sub.ptr.sub.i.i.i, i32 4, i1 false) nounwind
  %add.ptr.i.sum22 = add i32 %sub.ptr.div.i.i.i, %sub.ptr.div.i.i
  %add.ptr.i.i.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %27, i32 %add.ptr.i.sum22
  %32 = load %"class.OIS::FactoryCreator"*** %__end_.i91, align 4
  %cmp.i.i.i45 = icmp eq %"class.OIS::FactoryCreator"** %add.ptr.i.i.i, %32
  br i1 %cmp.i.i.i45, label %if.end24, label %while.body.i.i.i.lr.ph

while.body.i.i.i.lr.ph:                           ; preds = %if.then19
  %scevgep = getelementptr %"class.OIS::FactoryCreator"** %32, i32 -1
  %scevgep53 = bitcast %"class.OIS::FactoryCreator"** %scevgep to i8*
  %scevgep5455 = ptrtoint %"class.OIS::FactoryCreator"** %add.ptr.i.i.i to i32
  %33 = sub i32 0, %scevgep5455
  %uglygep = getelementptr i8* %scevgep53, i32 %33
  %uglygep56 = ptrtoint i8* %uglygep to i32
  %34 = lshr i32 %uglygep56, 2
  %35 = xor i32 %34, -1
  %scevgep57 = getelementptr %"class.OIS::FactoryCreator"** %32, i32 %35
  store %"class.OIS::FactoryCreator"** %scevgep57, %"class.OIS::FactoryCreator"*** %__end_.i91, align 4
  br label %if.end24

if.end24:                                         ; preds = %while.body.i.i.i.lr.ph, %if.then19, %_ZNSt3__14findINS_11__wrap_iterIPPN3OIS14FactoryCreatorEEES4_EET_S7_S7_RKT0_.exit, %for.cond.i, %entry
  ret void
}

define void @_ZN3OIS12InputManager18enableAddOnFactoryENS0_14AddOnFactoriesE(%"class.OIS::InputManager"* nocapture %this, i32 %factory) nounwind readnone align 2 {
entry:
  ret void
}

declare void @__cxa_pure_virtual()

declare void @llvm.memmove.p0i8.p0i8.i32(i8* nocapture, i8* nocapture, i32, i32, i1) nounwind

declare void @__cxa_call_unexpected(i8*)

define linkonce_odr void @_ZNSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE21__push_back_slow_pathIKS3_EEvRT_(%"class.std::__1::vector"* %this, %"class.OIS::FactoryCreator"** nocapture %__x) align 2 {
entry:
  %__end_.i = getelementptr inbounds %"class.std::__1::vector"* %this, i32 0, i32 0, i32 1
  %0 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %__begin_.i = getelementptr inbounds %"class.std::__1::vector"* %this, i32 0, i32 0, i32 0
  %1 = load %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  %sub.ptr.lhs.cast.i = ptrtoint %"class.OIS::FactoryCreator"** %0 to i32
  %sub.ptr.rhs.cast.i = ptrtoint %"class.OIS::FactoryCreator"** %1 to i32
  %sub.ptr.sub.i = sub i32 %sub.ptr.lhs.cast.i, %sub.ptr.rhs.cast.i
  %sub.ptr.div.i = ashr exact i32 %sub.ptr.sub.i, 2
  %add = add i32 %sub.ptr.div.i, 1
  %cmp.i = icmp ugt i32 %add, 1073741823
  br i1 %cmp.i, label %if.then.i, label %if.end.i

if.then.i:                                        ; preds = %entry
  %2 = bitcast %"class.std::__1::vector"* %this to %"class.std::__1::__vector_base_common"*
  tail call void @_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(%"class.std::__1::__vector_base_common"* %2)
  %.pre = load %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  br label %if.end.i

if.end.i:                                         ; preds = %if.then.i, %entry
  %3 = phi %"class.OIS::FactoryCreator"** [ %.pre, %if.then.i ], [ %1, %entry ]
  %__first_.i.i.i.i.i.i = getelementptr inbounds %"class.std::__1::vector"* %this, i32 0, i32 0, i32 2, i32 0, i32 0
  %4 = load %"class.OIS::FactoryCreator"*** %__first_.i.i.i.i.i.i, align 4
  %sub.ptr.lhs.cast.i.i.i = ptrtoint %"class.OIS::FactoryCreator"** %4 to i32
  %sub.ptr.rhs.cast.i.i.i = ptrtoint %"class.OIS::FactoryCreator"** %3 to i32
  %sub.ptr.sub.i.i.i = sub i32 %sub.ptr.lhs.cast.i.i.i, %sub.ptr.rhs.cast.i.i.i
  %sub.ptr.div.i.i.i = ashr exact i32 %sub.ptr.sub.i.i.i, 2
  %cmp3.i = icmp ugt i32 %sub.ptr.div.i.i.i, 536870910
  br i1 %cmp3.i, label %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread, label %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit

_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread: ; preds = %if.end.i
  %5 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %sub.ptr.lhs.cast.i2321 = ptrtoint %"class.OIS::FactoryCreator"** %5 to i32
  %sub.ptr.sub.i2522 = sub i32 %sub.ptr.lhs.cast.i2321, %sub.ptr.rhs.cast.i.i.i
  %sub.ptr.div.i2623 = ashr exact i32 %sub.ptr.sub.i2522, 2
  br label %cond.true.i.i

_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit: ; preds = %if.end.i
  %mul.i = ashr exact i32 %sub.ptr.sub.i.i.i, 1
  %cmp.i.i.i.i = icmp ult i32 %mul.i, %add
  %.sroa.speculated = select i1 %cmp.i.i.i.i, i32 %add, i32 %mul.i
  %6 = load %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  %sub.ptr.lhs.cast.i23 = ptrtoint %"class.OIS::FactoryCreator"** %6 to i32
  %sub.ptr.sub.i25 = sub i32 %sub.ptr.lhs.cast.i23, %sub.ptr.rhs.cast.i.i.i
  %sub.ptr.div.i26 = ashr exact i32 %sub.ptr.sub.i25, 2
  %cmp.i.i = icmp eq i32 %.sroa.speculated, 0
  br i1 %cmp.i.i, label %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEEC1EjjS6_.exit, label %cond.true.i.i

cond.true.i.i:                                    ; preds = %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread
  %sub.ptr.div.i2629 = phi i32 [ %sub.ptr.div.i2623, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread ], [ %sub.ptr.div.i26, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %sub.ptr.sub.i2527 = phi i32 [ %sub.ptr.sub.i2522, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread ], [ %sub.ptr.sub.i25, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %retval.i.025 = phi i32 [ 1073741823, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit.thread ], [ %.sroa.speculated, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %mul.i.i.i.i = shl i32 %retval.i.025, 2
  %call.i.i.i.i = tail call noalias i8* @_Znwj(i32 %mul.i.i.i.i)
  %7 = bitcast i8* %call.i.i.i.i to %"class.OIS::FactoryCreator"**
  br label %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEEC1EjjS6_.exit

_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEEC1EjjS6_.exit: ; preds = %cond.true.i.i, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit
  %sub.ptr.div.i2630 = phi i32 [ %sub.ptr.div.i2629, %cond.true.i.i ], [ %sub.ptr.div.i26, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %sub.ptr.sub.i2528 = phi i32 [ %sub.ptr.sub.i2527, %cond.true.i.i ], [ %sub.ptr.sub.i25, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %retval.i.026 = phi i32 [ %retval.i.025, %cond.true.i.i ], [ 0, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %cond.i.i = phi %"class.OIS::FactoryCreator"** [ %7, %cond.true.i.i ], [ null, %_ZNKSt3__16vectorIPN3OIS14FactoryCreatorENS_9allocatorIS3_EEE11__recommendEj.exit ]
  %add.ptr.i.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %cond.i.i, i32 %sub.ptr.div.i2630
  %add.ptr8.i.i = getelementptr inbounds %"class.OIS::FactoryCreator"** %cond.i.i, i32 %retval.i.026
  %new.isnull.i = icmp eq %"class.OIS::FactoryCreator"** %add.ptr.i.i, null
  br i1 %new.isnull.i, label %invoke.cont8, label %new.notnull.i

new.notnull.i:                                    ; preds = %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEEC1EjjS6_.exit
  %8 = load %"class.OIS::FactoryCreator"** %__x, align 4
  store %"class.OIS::FactoryCreator"* %8, %"class.OIS::FactoryCreator"** %add.ptr.i.i, align 4
  br label %invoke.cont8

invoke.cont8:                                     ; preds = %new.notnull.i, %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEEC1EjjS6_.exit
  %add.ptr.i.i.sum = add i32 %sub.ptr.div.i2630, 1
  %incdec.ptr = getelementptr inbounds %"class.OIS::FactoryCreator"** %cond.i.i, i32 %add.ptr.i.i.sum
  %9 = bitcast %"class.OIS::FactoryCreator"** %cond.i.i to i8*
  %10 = bitcast %"class.OIS::FactoryCreator"** %3 to i8*
  tail call void @llvm.memcpy.p0i8.p0i8.i32(i8* %9, i8* %10, i32 %sub.ptr.sub.i2528, i32 4, i1 false) nounwind
  store %"class.OIS::FactoryCreator"** %cond.i.i, %"class.OIS::FactoryCreator"*** %__begin_.i, align 4
  store %"class.OIS::FactoryCreator"** %incdec.ptr, %"class.OIS::FactoryCreator"*** %__end_.i, align 4
  store %"class.OIS::FactoryCreator"** %add.ptr8.i.i, %"class.OIS::FactoryCreator"*** %__first_.i.i.i.i.i.i, align 4
  %tobool.i.i = icmp eq %"class.OIS::FactoryCreator"** %3, null
  br i1 %tobool.i.i, label %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEED1Ev.exit, label %if.then.i.i

if.then.i.i:                                      ; preds = %invoke.cont8
  tail call void @_ZdlPv(i8* %10) nounwind
  br label %_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEED1Ev.exit

_ZNSt3__114__split_bufferIPN3OIS14FactoryCreatorERNS_9allocatorIS3_EEED1Ev.exit: ; preds = %if.then.i.i, %invoke.cont8
  ret void
}

declare void @_ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv(%"class.std::__1::__vector_base_common"*)

define linkonce_odr void @_ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %__root, %"class.std::__1::__tree_node_base"* %__z) nounwind {
entry:
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  %cmp = icmp eq %"class.std::__1::__tree_node_base"* %0, null
  br i1 %cmp, label %cond.end19, label %lor.lhs.false

lor.lhs.false:                                    ; preds = %entry
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 1
  %1 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %cmp6 = icmp eq %"class.std::__1::__tree_node_base"* %1, null
  br i1 %cmp6, label %cond.end.thread203, label %while.cond.i.i

cond.end.thread203:                               ; preds = %lor.lhs.false
  %__left_9204 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 0, i32 0
  br label %if.then

while.cond.i.i:                                   ; preds = %while.cond.i.i, %lor.lhs.false
  %__x.addr.i9.0.i = phi %"class.std::__1::__tree_node_base"* [ %2, %while.cond.i.i ], [ %1, %lor.lhs.false ]
  %__left_.i10.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i, i32 0, i32 0, i32 0
  %2 = load %"class.std::__1::__tree_node_base"** %__left_.i10.i, align 4
  %cmp.i13.i = icmp eq %"class.std::__1::__tree_node_base"* %2, null
  br i1 %cmp.i13.i, label %cond.end19, label %while.cond.i.i

cond.end19:                                       ; preds = %while.cond.i.i, %entry
  %cond.ph = phi %"class.std::__1::__tree_node_base"* [ %__z, %entry ], [ %__x.addr.i9.0.i, %while.cond.i.i ]
  %__left_9195 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond.ph, i32 0, i32 0, i32 0
  %__right_18 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond.ph, i32 0, i32 1
  %3 = load %"class.std::__1::__tree_node_base"** %__right_18, align 4
  %cmp30 = icmp eq %"class.std::__1::__tree_node_base"* %3, null
  br i1 %cmp30, label %cond.end19.if.end_crit_edge, label %if.then

cond.end19.if.end_crit_edge:                      ; preds = %cond.end19
  %__parent_.i388.pre = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond.ph, i32 0, i32 2
  br label %if.end

if.then:                                          ; preds = %cond.end19, %cond.end.thread203
  %__left_9201 = phi %"class.std::__1::__tree_node_base"** [ %__left_9195, %cond.end19 ], [ %__left_9204, %cond.end.thread203 ]
  %cond198 = phi %"class.std::__1::__tree_node_base"* [ %cond.ph, %cond.end19 ], [ %__z, %cond.end.thread203 ]
  %cond20183 = phi %"class.std::__1::__tree_node_base"* [ %3, %cond.end19 ], [ %0, %cond.end.thread203 ]
  %__parent_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond198, i32 0, i32 2
  %4 = load %"class.std::__1::__tree_node_base"** %__parent_, align 4
  %__parent_31 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond20183, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %4, %"class.std::__1::__tree_node_base"** %__parent_31, align 4
  br label %if.end

if.end:                                           ; preds = %if.then, %cond.end19.if.end_crit_edge
  %__left_9200 = phi %"class.std::__1::__tree_node_base"** [ %__left_9195, %cond.end19.if.end_crit_edge ], [ %__left_9201, %if.then ]
  %cond199 = phi %"class.std::__1::__tree_node_base"* [ %cond.ph, %cond.end19.if.end_crit_edge ], [ %cond198, %if.then ]
  %__parent_.i388.pre-phi = phi %"class.std::__1::__tree_node_base"** [ %__parent_.i388.pre, %cond.end19.if.end_crit_edge ], [ %__parent_, %if.then ]
  %cmp30185 = phi i1 [ false, %cond.end19.if.end_crit_edge ], [ true, %if.then ]
  %cond20184 = phi %"class.std::__1::__tree_node_base"* [ null, %cond.end19.if.end_crit_edge ], [ %cond20183, %if.then ]
  %5 = load %"class.std::__1::__tree_node_base"** %__parent_.i388.pre-phi, align 4
  %__left_.i389 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %5, i32 0, i32 0, i32 0
  %6 = load %"class.std::__1::__tree_node_base"** %__left_.i389, align 4
  %cmp.i390 = icmp eq %"class.std::__1::__tree_node_base"* %cond199, %6
  br i1 %cmp.i390, label %if.then33, label %if.else41

if.then33:                                        ; preds = %if.end
  store %"class.std::__1::__tree_node_base"* %cond20184, %"class.std::__1::__tree_node_base"** %__left_.i389, align 4
  %cmp36 = icmp eq %"class.std::__1::__tree_node_base"* %cond199, %__root
  br i1 %cmp36, label %if.end46, label %if.then37

if.then37:                                        ; preds = %if.then33
  %7 = load %"class.std::__1::__tree_node_base"** %__parent_.i388.pre-phi, align 4
  %__right_39 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %7, i32 0, i32 1
  %8 = load %"class.std::__1::__tree_node_base"** %__right_39, align 4
  br label %if.end46

if.else41:                                        ; preds = %if.end
  %__right_43 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %5, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %cond20184, %"class.std::__1::__tree_node_base"** %__right_43, align 4
  %9 = load %"class.std::__1::__tree_node_base"** %__parent_.i388.pre-phi, align 4
  %__left_45 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %9, i32 0, i32 0, i32 0
  %10 = load %"class.std::__1::__tree_node_base"** %__left_45, align 4
  br label %if.end46

if.end46:                                         ; preds = %if.else41, %if.then37, %if.then33
  %__w.0 = phi %"class.std::__1::__tree_node_base"* [ %8, %if.then37 ], [ %10, %if.else41 ], [ null, %if.then33 ]
  %__root.addr.0 = phi %"class.std::__1::__tree_node_base"* [ %__root, %if.then37 ], [ %__root, %if.else41 ], [ %cond20184, %if.then33 ]
  %__is_black_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond199, i32 0, i32 3
  %11 = load i8* %__is_black_, align 1
  %12 = and i8 %11, 1
  %tobool = icmp eq i8 %12, 0
  %cmp48 = icmp eq %"class.std::__1::__tree_node_base"* %cond199, %__z
  br i1 %cmp48, label %if.end83, label %if.then49

if.then49:                                        ; preds = %if.end46
  %__parent_50 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 2
  %13 = load %"class.std::__1::__tree_node_base"** %__parent_50, align 4
  store %"class.std::__1::__tree_node_base"* %13, %"class.std::__1::__tree_node_base"** %__parent_.i388.pre-phi, align 4
  %14 = load %"class.std::__1::__tree_node_base"** %__parent_50, align 4
  %__left_.i385 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %14, i32 0, i32 0, i32 0
  %15 = load %"class.std::__1::__tree_node_base"** %__left_.i385, align 4
  %cmp.i386 = icmp eq %"class.std::__1::__tree_node_base"* %15, %__z
  br i1 %cmp.i386, label %if.then53, label %if.else56

if.then53:                                        ; preds = %if.then49
  %__left_55 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %13, i32 0, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* %cond199, %"class.std::__1::__tree_node_base"** %__left_55, align 4
  br label %if.end59

if.else56:                                        ; preds = %if.then49
  %__right_58 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %13, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %cond199, %"class.std::__1::__tree_node_base"** %__right_58, align 4
  br label %if.end59

if.end59:                                         ; preds = %if.else56, %if.then53
  %16 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  store %"class.std::__1::__tree_node_base"* %16, %"class.std::__1::__tree_node_base"** %__left_9200, align 4
  %__parent_63 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %16, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %cond199, %"class.std::__1::__tree_node_base"** %__parent_63, align 4
  %__right_64 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 1
  %17 = load %"class.std::__1::__tree_node_base"** %__right_64, align 4
  %__right_65 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond199, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %17, %"class.std::__1::__tree_node_base"** %__right_65, align 4
  %cmp71 = icmp eq %"class.std::__1::__tree_node_base"* %17, null
  br i1 %cmp71, label %if.end75, label %if.then72

if.then72:                                        ; preds = %if.end59
  %__parent_74 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %17, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %cond199, %"class.std::__1::__tree_node_base"** %__parent_74, align 4
  br label %if.end75

if.end75:                                         ; preds = %if.then72, %if.end59
  %__is_black_76 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__z, i32 0, i32 3
  %18 = load i8* %__is_black_76, align 1
  %19 = and i8 %18, 1
  store i8 %19, i8* %__is_black_, align 1
  %cmp80 = icmp eq %"class.std::__1::__tree_node_base"* %__root.addr.0, %__z
  %cond.__root.addr.0 = select i1 %cmp80, %"class.std::__1::__tree_node_base"* %cond199, %"class.std::__1::__tree_node_base"* %__root.addr.0
  br label %if.end83

if.end83:                                         ; preds = %if.end75, %if.end46
  %__root.addr.1 = phi %"class.std::__1::__tree_node_base"* [ %__root.addr.0, %if.end46 ], [ %cond.__root.addr.0, %if.end75 ]
  %cmp89 = icmp eq %"class.std::__1::__tree_node_base"* %__root.addr.1, null
  %or.cond = or i1 %tobool, %cmp89
  br i1 %or.cond, label %if.end268, label %if.then90

if.then90:                                        ; preds = %if.end83
  br i1 %cmp30185, label %if.then96, label %while.body

if.then96:                                        ; preds = %if.then90
  %__is_black_97 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %cond20184, i32 0, i32 3
  store i8 1, i8* %__is_black_97, align 1
  br label %if.end268

while.body:                                       ; preds = %cond.true230, %if.end228, %cond.true147, %if.end145, %if.then90
  %__w.1 = phi %"class.std::__1::__tree_node_base"* [ %__w.0, %if.then90 ], [ %43, %cond.true147 ], [ %42, %if.end145 ], [ %81, %cond.true230 ], [ %80, %if.end228 ]
  %__root.addr.2 = phi %"class.std::__1::__tree_node_base"* [ %__root.addr.1, %if.then90 ], [ %__root.addr.4, %cond.true147 ], [ %__root.addr.4, %if.end145 ], [ %__root.addr.6, %cond.true230 ], [ %__root.addr.6, %if.end228 ]
  %__parent_.i353 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.1, i32 0, i32 2
  %20 = load %"class.std::__1::__tree_node_base"** %__parent_.i353, align 4
  %__left_.i354 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %20, i32 0, i32 0, i32 0
  %21 = load %"class.std::__1::__tree_node_base"** %__left_.i354, align 4
  %cmp.i355 = icmp eq %"class.std::__1::__tree_node_base"* %__w.1, %21
  %__is_black_184 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.1, i32 0, i32 3
  %22 = load i8* %__is_black_184, align 1
  %23 = and i8 %22, 1
  %tobool185 = icmp ne i8 %23, 0
  br i1 %cmp.i355, label %if.else183, label %if.then100

if.then100:                                       ; preds = %while.body
  br i1 %tobool185, label %if.end114, label %if.then103

if.then103:                                       ; preds = %if.then100
  store i8 1, i8* %__is_black_184, align 1
  %__is_black_106 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %20, i32 0, i32 3
  store i8 0, i8* %__is_black_106, align 1
  %24 = load %"class.std::__1::__tree_node_base"** %__parent_.i353, align 4
  %__right_.i168 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %24, i32 0, i32 1
  %25 = load %"class.std::__1::__tree_node_base"** %__right_.i168, align 4
  %__left_.i169 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %25, i32 0, i32 0, i32 0
  %26 = load %"class.std::__1::__tree_node_base"** %__left_.i169, align 4
  store %"class.std::__1::__tree_node_base"* %26, %"class.std::__1::__tree_node_base"** %__right_.i168, align 4
  %cmp.i170 = icmp eq %"class.std::__1::__tree_node_base"* %26, null
  br i1 %cmp.i170, label %if.end.i177, label %if.then.i172

if.then.i172:                                     ; preds = %if.then103
  %__parent_.i171 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %26, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %24, %"class.std::__1::__tree_node_base"** %__parent_.i171, align 4
  br label %if.end.i177

if.end.i177:                                      ; preds = %if.then.i172, %if.then103
  %__parent_5.i173 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %24, i32 0, i32 2
  %27 = load %"class.std::__1::__tree_node_base"** %__parent_5.i173, align 4
  %__parent_6.i174 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %25, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %27, %"class.std::__1::__tree_node_base"** %__parent_6.i174, align 4
  %28 = load %"class.std::__1::__tree_node_base"** %__parent_5.i173, align 4
  %__left_.i.i175 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %28, i32 0, i32 0, i32 0
  %29 = load %"class.std::__1::__tree_node_base"** %__left_.i.i175, align 4
  %cmp.i.i176 = icmp eq %"class.std::__1::__tree_node_base"* %29, %24
  br i1 %cmp.i.i176, label %if.then8.i178, label %if.else.i180

if.then8.i178:                                    ; preds = %if.end.i177
  store %"class.std::__1::__tree_node_base"* %25, %"class.std::__1::__tree_node_base"** %__left_.i.i175, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181

if.else.i180:                                     ; preds = %if.end.i177
  %__right_12.i179 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %28, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %25, %"class.std::__1::__tree_node_base"** %__right_12.i179, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181

_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181: ; preds = %if.else.i180, %if.then8.i178
  store %"class.std::__1::__tree_node_base"* %24, %"class.std::__1::__tree_node_base"** %__left_.i169, align 4
  store %"class.std::__1::__tree_node_base"* %25, %"class.std::__1::__tree_node_base"** %__parent_5.i173, align 4
  %__left_108 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.1, i32 0, i32 0, i32 0
  %30 = load %"class.std::__1::__tree_node_base"** %__left_108, align 4
  %cmp109 = icmp eq %"class.std::__1::__tree_node_base"* %__root.addr.2, %30
  %__w.1.__root.addr.2 = select i1 %cmp109, %"class.std::__1::__tree_node_base"* %__w.1, %"class.std::__1::__tree_node_base"* %__root.addr.2
  %__right_113 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %30, i32 0, i32 1
  %31 = load %"class.std::__1::__tree_node_base"** %__right_113, align 4
  br label %if.end114

if.end114:                                        ; preds = %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181, %if.then100
  %__w.2 = phi %"class.std::__1::__tree_node_base"* [ %__w.1, %if.then100 ], [ %31, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181 ]
  %__root.addr.4 = phi %"class.std::__1::__tree_node_base"* [ %__root.addr.2, %if.then100 ], [ %__w.1.__root.addr.2, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit181 ]
  %__left_115 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 0, i32 0
  %32 = load %"class.std::__1::__tree_node_base"** %__left_115, align 4
  %cmp120 = icmp eq %"class.std::__1::__tree_node_base"* %32, null
  br i1 %cmp120, label %land.lhs.true125, label %lor.lhs.false121

lor.lhs.false121:                                 ; preds = %if.end114
  %__is_black_123 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %32, i32 0, i32 3
  %33 = load i8* %__is_black_123, align 1
  %34 = and i8 %33, 1
  %tobool124 = icmp eq i8 %34, 0
  br i1 %tobool124, label %if.else155, label %land.lhs.true125

land.lhs.true125:                                 ; preds = %lor.lhs.false121, %if.end114
  %__right_126 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 1
  %35 = load %"class.std::__1::__tree_node_base"** %__right_126, align 4
  %cmp131 = icmp eq %"class.std::__1::__tree_node_base"* %35, null
  br i1 %cmp131, label %if.then136, label %lor.lhs.false132

lor.lhs.false132:                                 ; preds = %land.lhs.true125
  %__is_black_134 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %35, i32 0, i32 3
  %36 = load i8* %__is_black_134, align 1
  %37 = and i8 %36, 1
  %tobool135 = icmp eq i8 %37, 0
  br i1 %tobool135, label %lor.lhs.false162, label %if.then136

if.then136:                                       ; preds = %lor.lhs.false132, %land.lhs.true125
  %__is_black_137 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 3
  store i8 0, i8* %__is_black_137, align 1
  %__parent_138 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 2
  %38 = load %"class.std::__1::__tree_node_base"** %__parent_138, align 4
  %cmp139 = icmp eq %"class.std::__1::__tree_node_base"* %38, %__root.addr.4
  br i1 %cmp139, label %if.then143, label %lor.lhs.false140

lor.lhs.false140:                                 ; preds = %if.then136
  %__is_black_141 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %38, i32 0, i32 3
  %39 = load i8* %__is_black_141, align 1
  %40 = and i8 %39, 1
  %tobool142 = icmp eq i8 %40, 0
  br i1 %tobool142, label %if.then143, label %if.end145

if.then143:                                       ; preds = %lor.lhs.false140, %if.then136
  %.lcssa = phi %"class.std::__1::__tree_node_base"* [ %38, %lor.lhs.false140 ], [ %__root.addr.4, %if.then136 ]
  %__is_black_144 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %.lcssa, i32 0, i32 3
  store i8 1, i8* %__is_black_144, align 1
  br label %if.end268

if.end145:                                        ; preds = %lor.lhs.false140
  %__parent_.i324 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %38, i32 0, i32 2
  %41 = load %"class.std::__1::__tree_node_base"** %__parent_.i324, align 4
  %__left_.i325 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %41, i32 0, i32 0, i32 0
  %42 = load %"class.std::__1::__tree_node_base"** %__left_.i325, align 4
  %cmp.i326 = icmp eq %"class.std::__1::__tree_node_base"* %38, %42
  br i1 %cmp.i326, label %cond.true147, label %while.body

cond.true147:                                     ; preds = %if.end145
  %__right_149 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %41, i32 0, i32 1
  %43 = load %"class.std::__1::__tree_node_base"** %__right_149, align 4
  br label %while.body

if.else155:                                       ; preds = %lor.lhs.false121
  %__right_156.phi.trans.insert = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 1
  %.pre = load %"class.std::__1::__tree_node_base"** %__right_156.phi.trans.insert, align 4
  %cmp161 = icmp eq %"class.std::__1::__tree_node_base"* %.pre, null
  br i1 %cmp161, label %if.then166, label %lor.lhs.false162

lor.lhs.false162:                                 ; preds = %if.else155, %lor.lhs.false132
  %44 = phi %"class.std::__1::__tree_node_base"* [ %.pre, %if.else155 ], [ %35, %lor.lhs.false132 ]
  %__is_black_164 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %44, i32 0, i32 3
  %45 = load i8* %__is_black_164, align 1
  %46 = and i8 %45, 1
  %tobool165 = icmp eq i8 %46, 0
  br i1 %tobool165, label %if.end171, label %if.then166

if.then166:                                       ; preds = %lor.lhs.false162, %if.else155
  %__is_black_168 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %32, i32 0, i32 3
  store i8 1, i8* %__is_black_168, align 1
  %__is_black_169 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 3
  store i8 0, i8* %__is_black_169, align 1
  %47 = load %"class.std::__1::__tree_node_base"** %__left_115, align 4
  %__right_.i155 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %47, i32 0, i32 1
  %48 = load %"class.std::__1::__tree_node_base"** %__right_.i155, align 4
  store %"class.std::__1::__tree_node_base"* %48, %"class.std::__1::__tree_node_base"** %__left_115, align 4
  %cmp.i156 = icmp eq %"class.std::__1::__tree_node_base"* %48, null
  br i1 %cmp.i156, label %if.end.i163, label %if.then.i158

if.then.i158:                                     ; preds = %if.then166
  %__parent_.i157 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %48, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %__w.2, %"class.std::__1::__tree_node_base"** %__parent_.i157, align 4
  br label %if.end.i163

if.end.i163:                                      ; preds = %if.then.i158, %if.then166
  %__parent_5.i159 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.2, i32 0, i32 2
  %49 = load %"class.std::__1::__tree_node_base"** %__parent_5.i159, align 4
  %__parent_6.i160 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %47, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %49, %"class.std::__1::__tree_node_base"** %__parent_6.i160, align 4
  %50 = load %"class.std::__1::__tree_node_base"** %__parent_5.i159, align 4
  %__left_.i.i161 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %50, i32 0, i32 0, i32 0
  %51 = load %"class.std::__1::__tree_node_base"** %__left_.i.i161, align 4
  %cmp.i.i162 = icmp eq %"class.std::__1::__tree_node_base"* %51, %__w.2
  br i1 %cmp.i.i162, label %if.then8.i164, label %if.else.i166

if.then8.i164:                                    ; preds = %if.end.i163
  store %"class.std::__1::__tree_node_base"* %47, %"class.std::__1::__tree_node_base"** %__left_.i.i161, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit167

if.else.i166:                                     ; preds = %if.end.i163
  %__right_12.i165 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %50, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %47, %"class.std::__1::__tree_node_base"** %__right_12.i165, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit167

_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit167: ; preds = %if.else.i166, %if.then8.i164
  store %"class.std::__1::__tree_node_base"* %__w.2, %"class.std::__1::__tree_node_base"** %__right_.i155, align 4
  store %"class.std::__1::__tree_node_base"* %47, %"class.std::__1::__tree_node_base"** %__parent_5.i159, align 4
  br label %if.end171

if.end171:                                        ; preds = %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit167, %lor.lhs.false162
  %__w.3 = phi %"class.std::__1::__tree_node_base"* [ %47, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit167 ], [ %__w.2, %lor.lhs.false162 ]
  %__parent_172 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.3, i32 0, i32 2
  %52 = load %"class.std::__1::__tree_node_base"** %__parent_172, align 4
  %__is_black_173 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %52, i32 0, i32 3
  %53 = load i8* %__is_black_173, align 1
  %54 = and i8 %53, 1
  %__is_black_175 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.3, i32 0, i32 3
  store i8 %54, i8* %__is_black_175, align 1
  store i8 1, i8* %__is_black_173, align 1
  %__right_179 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.3, i32 0, i32 1
  %55 = load %"class.std::__1::__tree_node_base"** %__right_179, align 4
  %__is_black_180 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %55, i32 0, i32 3
  store i8 1, i8* %__is_black_180, align 1
  %56 = load %"class.std::__1::__tree_node_base"** %__parent_172, align 4
  %__right_.i140 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %56, i32 0, i32 1
  %57 = load %"class.std::__1::__tree_node_base"** %__right_.i140, align 4
  %__left_.i141 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %57, i32 0, i32 0, i32 0
  %58 = load %"class.std::__1::__tree_node_base"** %__left_.i141, align 4
  store %"class.std::__1::__tree_node_base"* %58, %"class.std::__1::__tree_node_base"** %__right_.i140, align 4
  %cmp.i142 = icmp eq %"class.std::__1::__tree_node_base"* %58, null
  br i1 %cmp.i142, label %if.end.i149, label %if.then.i144

if.then.i144:                                     ; preds = %if.end171
  %__parent_.i143 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %58, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %56, %"class.std::__1::__tree_node_base"** %__parent_.i143, align 4
  br label %if.end.i149

if.end.i149:                                      ; preds = %if.then.i144, %if.end171
  %__parent_5.i145 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %56, i32 0, i32 2
  %59 = load %"class.std::__1::__tree_node_base"** %__parent_5.i145, align 4
  %__parent_6.i146 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %57, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %59, %"class.std::__1::__tree_node_base"** %__parent_6.i146, align 4
  %60 = load %"class.std::__1::__tree_node_base"** %__parent_5.i145, align 4
  %__left_.i.i147 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %60, i32 0, i32 0, i32 0
  %61 = load %"class.std::__1::__tree_node_base"** %__left_.i.i147, align 4
  %cmp.i.i148 = icmp eq %"class.std::__1::__tree_node_base"* %61, %56
  br i1 %cmp.i.i148, label %if.then8.i150, label %if.else.i152

if.then8.i150:                                    ; preds = %if.end.i149
  store %"class.std::__1::__tree_node_base"* %57, %"class.std::__1::__tree_node_base"** %__left_.i.i147, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit153

if.else.i152:                                     ; preds = %if.end.i149
  %__right_12.i151 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %60, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %57, %"class.std::__1::__tree_node_base"** %__right_12.i151, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit153

_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit153: ; preds = %if.else.i152, %if.then8.i150
  store %"class.std::__1::__tree_node_base"* %56, %"class.std::__1::__tree_node_base"** %__left_.i141, align 4
  store %"class.std::__1::__tree_node_base"* %57, %"class.std::__1::__tree_node_base"** %__parent_5.i145, align 4
  br label %if.end268

if.else183:                                       ; preds = %while.body
  br i1 %tobool185, label %if.end197, label %if.then186

if.then186:                                       ; preds = %if.else183
  store i8 1, i8* %__is_black_184, align 1
  %__is_black_189 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %20, i32 0, i32 3
  store i8 0, i8* %__is_black_189, align 1
  %62 = load %"class.std::__1::__tree_node_base"** %__parent_.i353, align 4
  %__left_.i126 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %62, i32 0, i32 0, i32 0
  %63 = load %"class.std::__1::__tree_node_base"** %__left_.i126, align 4
  %__right_.i127 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %63, i32 0, i32 1
  %64 = load %"class.std::__1::__tree_node_base"** %__right_.i127, align 4
  store %"class.std::__1::__tree_node_base"* %64, %"class.std::__1::__tree_node_base"** %__left_.i126, align 4
  %cmp.i128 = icmp eq %"class.std::__1::__tree_node_base"* %64, null
  br i1 %cmp.i128, label %if.end.i135, label %if.then.i130

if.then.i130:                                     ; preds = %if.then186
  %__parent_.i129 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %64, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %62, %"class.std::__1::__tree_node_base"** %__parent_.i129, align 4
  br label %if.end.i135

if.end.i135:                                      ; preds = %if.then.i130, %if.then186
  %__parent_5.i131 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %62, i32 0, i32 2
  %65 = load %"class.std::__1::__tree_node_base"** %__parent_5.i131, align 4
  %__parent_6.i132 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %63, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %65, %"class.std::__1::__tree_node_base"** %__parent_6.i132, align 4
  %66 = load %"class.std::__1::__tree_node_base"** %__parent_5.i131, align 4
  %__left_.i.i133 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %66, i32 0, i32 0, i32 0
  %67 = load %"class.std::__1::__tree_node_base"** %__left_.i.i133, align 4
  %cmp.i.i134 = icmp eq %"class.std::__1::__tree_node_base"* %67, %62
  br i1 %cmp.i.i134, label %if.then8.i136, label %if.else.i138

if.then8.i136:                                    ; preds = %if.end.i135
  store %"class.std::__1::__tree_node_base"* %63, %"class.std::__1::__tree_node_base"** %__left_.i.i133, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139

if.else.i138:                                     ; preds = %if.end.i135
  %__right_12.i137 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %66, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %63, %"class.std::__1::__tree_node_base"** %__right_12.i137, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139

_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139: ; preds = %if.else.i138, %if.then8.i136
  store %"class.std::__1::__tree_node_base"* %62, %"class.std::__1::__tree_node_base"** %__right_.i127, align 4
  store %"class.std::__1::__tree_node_base"* %63, %"class.std::__1::__tree_node_base"** %__parent_5.i131, align 4
  %__right_191 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.1, i32 0, i32 1
  %68 = load %"class.std::__1::__tree_node_base"** %__right_191, align 4
  %cmp192 = icmp eq %"class.std::__1::__tree_node_base"* %__root.addr.2, %68
  %__w.1.__root.addr.2105 = select i1 %cmp192, %"class.std::__1::__tree_node_base"* %__w.1, %"class.std::__1::__tree_node_base"* %__root.addr.2
  %__left_196 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %68, i32 0, i32 0, i32 0
  %69 = load %"class.std::__1::__tree_node_base"** %__left_196, align 4
  br label %if.end197

if.end197:                                        ; preds = %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139, %if.else183
  %__w.4 = phi %"class.std::__1::__tree_node_base"* [ %__w.1, %if.else183 ], [ %69, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139 ]
  %__root.addr.6 = phi %"class.std::__1::__tree_node_base"* [ %__root.addr.2, %if.else183 ], [ %__w.1.__root.addr.2105, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit139 ]
  %__left_198 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 0, i32 0
  %70 = load %"class.std::__1::__tree_node_base"** %__left_198, align 4
  %cmp203 = icmp eq %"class.std::__1::__tree_node_base"* %70, null
  br i1 %cmp203, label %land.lhs.true208, label %lor.lhs.false204

lor.lhs.false204:                                 ; preds = %if.end197
  %__is_black_206 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %70, i32 0, i32 3
  %71 = load i8* %__is_black_206, align 1
  %72 = and i8 %71, 1
  %tobool207 = icmp eq i8 %72, 0
  br i1 %tobool207, label %lor.lhs.false245, label %land.lhs.true208

land.lhs.true208:                                 ; preds = %lor.lhs.false204, %if.end197
  %__right_209 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 1
  %73 = load %"class.std::__1::__tree_node_base"** %__right_209, align 4
  %cmp214 = icmp eq %"class.std::__1::__tree_node_base"* %73, null
  br i1 %cmp214, label %if.then219, label %lor.lhs.false215

lor.lhs.false215:                                 ; preds = %land.lhs.true208
  %__is_black_217 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %73, i32 0, i32 3
  %74 = load i8* %__is_black_217, align 1
  %75 = and i8 %74, 1
  %tobool218 = icmp eq i8 %75, 0
  br i1 %tobool218, label %if.else238, label %if.then219

if.then219:                                       ; preds = %lor.lhs.false215, %land.lhs.true208
  %__is_black_220 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 3
  store i8 0, i8* %__is_black_220, align 1
  %__parent_221 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 2
  %76 = load %"class.std::__1::__tree_node_base"** %__parent_221, align 4
  %__is_black_222 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %76, i32 0, i32 3
  %77 = load i8* %__is_black_222, align 1
  %78 = and i8 %77, 1
  %tobool223 = icmp eq i8 %78, 0
  %cmp225 = icmp eq %"class.std::__1::__tree_node_base"* %76, %__root.addr.6
  %or.cond106 = or i1 %tobool223, %cmp225
  br i1 %or.cond106, label %if.then226, label %if.end228

if.then226:                                       ; preds = %if.then219
  store i8 1, i8* %__is_black_222, align 1
  br label %if.end268

if.end228:                                        ; preds = %if.then219
  %__parent_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %76, i32 0, i32 2
  %79 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %__left_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %79, i32 0, i32 0, i32 0
  %80 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %76, %80
  br i1 %cmp.i, label %cond.true230, label %while.body

cond.true230:                                     ; preds = %if.end228
  %__right_232 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %79, i32 0, i32 1
  %81 = load %"class.std::__1::__tree_node_base"** %__right_232, align 4
  br label %while.body

if.else238:                                       ; preds = %lor.lhs.false215
  br i1 %cmp203, label %if.then249, label %lor.lhs.false245

lor.lhs.false245:                                 ; preds = %if.else238, %lor.lhs.false204
  %__is_black_247 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %70, i32 0, i32 3
  %82 = load i8* %__is_black_247, align 1
  %83 = and i8 %82, 1
  %tobool248 = icmp eq i8 %83, 0
  br i1 %tobool248, label %if.end254, label %if.then249

if.then249:                                       ; preds = %lor.lhs.false245, %if.else238
  %__right_250 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 1
  %84 = load %"class.std::__1::__tree_node_base"** %__right_250, align 4
  %__is_black_251 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %84, i32 0, i32 3
  store i8 1, i8* %__is_black_251, align 1
  %__is_black_252 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 3
  store i8 0, i8* %__is_black_252, align 1
  %85 = load %"class.std::__1::__tree_node_base"** %__right_250, align 4
  %__left_.i114 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %85, i32 0, i32 0, i32 0
  %86 = load %"class.std::__1::__tree_node_base"** %__left_.i114, align 4
  store %"class.std::__1::__tree_node_base"* %86, %"class.std::__1::__tree_node_base"** %__right_250, align 4
  %cmp.i115 = icmp eq %"class.std::__1::__tree_node_base"* %86, null
  br i1 %cmp.i115, label %if.end.i122, label %if.then.i117

if.then.i117:                                     ; preds = %if.then249
  %__parent_.i116 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %86, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %__w.4, %"class.std::__1::__tree_node_base"** %__parent_.i116, align 4
  br label %if.end.i122

if.end.i122:                                      ; preds = %if.then.i117, %if.then249
  %__parent_5.i118 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.4, i32 0, i32 2
  %87 = load %"class.std::__1::__tree_node_base"** %__parent_5.i118, align 4
  %__parent_6.i119 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %85, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %87, %"class.std::__1::__tree_node_base"** %__parent_6.i119, align 4
  %88 = load %"class.std::__1::__tree_node_base"** %__parent_5.i118, align 4
  %__left_.i.i120 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %88, i32 0, i32 0, i32 0
  %89 = load %"class.std::__1::__tree_node_base"** %__left_.i.i120, align 4
  %cmp.i.i121 = icmp eq %"class.std::__1::__tree_node_base"* %89, %__w.4
  br i1 %cmp.i.i121, label %if.then8.i123, label %if.else.i125

if.then8.i123:                                    ; preds = %if.end.i122
  store %"class.std::__1::__tree_node_base"* %85, %"class.std::__1::__tree_node_base"** %__left_.i.i120, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

if.else.i125:                                     ; preds = %if.end.i122
  %__right_12.i124 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %88, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %85, %"class.std::__1::__tree_node_base"** %__right_12.i124, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit: ; preds = %if.else.i125, %if.then8.i123
  store %"class.std::__1::__tree_node_base"* %__w.4, %"class.std::__1::__tree_node_base"** %__left_.i114, align 4
  store %"class.std::__1::__tree_node_base"* %85, %"class.std::__1::__tree_node_base"** %__parent_5.i118, align 4
  br label %if.end254

if.end254:                                        ; preds = %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit, %lor.lhs.false245
  %__w.5 = phi %"class.std::__1::__tree_node_base"* [ %85, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit ], [ %__w.4, %lor.lhs.false245 ]
  %__parent_255 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.5, i32 0, i32 2
  %90 = load %"class.std::__1::__tree_node_base"** %__parent_255, align 4
  %__is_black_256 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %90, i32 0, i32 3
  %91 = load i8* %__is_black_256, align 1
  %92 = and i8 %91, 1
  %__is_black_258 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.5, i32 0, i32 3
  store i8 %92, i8* %__is_black_258, align 1
  store i8 1, i8* %__is_black_256, align 1
  %__left_262 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__w.5, i32 0, i32 0, i32 0
  %93 = load %"class.std::__1::__tree_node_base"** %__left_262, align 4
  %__is_black_263 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %93, i32 0, i32 3
  store i8 1, i8* %__is_black_263, align 1
  %94 = load %"class.std::__1::__tree_node_base"** %__parent_255, align 4
  %__left_.i108 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %94, i32 0, i32 0, i32 0
  %95 = load %"class.std::__1::__tree_node_base"** %__left_.i108, align 4
  %__right_.i109 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %95, i32 0, i32 1
  %96 = load %"class.std::__1::__tree_node_base"** %__right_.i109, align 4
  store %"class.std::__1::__tree_node_base"* %96, %"class.std::__1::__tree_node_base"** %__left_.i108, align 4
  %cmp.i110 = icmp eq %"class.std::__1::__tree_node_base"* %96, null
  br i1 %cmp.i110, label %if.end.i, label %if.then.i

if.then.i:                                        ; preds = %if.end254
  %__parent_.i111 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %96, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %94, %"class.std::__1::__tree_node_base"** %__parent_.i111, align 4
  br label %if.end.i

if.end.i:                                         ; preds = %if.then.i, %if.end254
  %__parent_5.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %94, i32 0, i32 2
  %97 = load %"class.std::__1::__tree_node_base"** %__parent_5.i, align 4
  %__parent_6.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %95, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %97, %"class.std::__1::__tree_node_base"** %__parent_6.i, align 4
  %98 = load %"class.std::__1::__tree_node_base"** %__parent_5.i, align 4
  %__left_.i.i112 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %98, i32 0, i32 0, i32 0
  %99 = load %"class.std::__1::__tree_node_base"** %__left_.i.i112, align 4
  %cmp.i.i = icmp eq %"class.std::__1::__tree_node_base"* %99, %94
  br i1 %cmp.i.i, label %if.then8.i, label %if.else.i

if.then8.i:                                       ; preds = %if.end.i
  store %"class.std::__1::__tree_node_base"* %95, %"class.std::__1::__tree_node_base"** %__left_.i.i112, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

if.else.i:                                        ; preds = %if.end.i
  %__right_12.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %98, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %95, %"class.std::__1::__tree_node_base"** %__right_12.i, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit: ; preds = %if.else.i, %if.then8.i
  store %"class.std::__1::__tree_node_base"* %94, %"class.std::__1::__tree_node_base"** %__right_.i109, align 4
  store %"class.std::__1::__tree_node_base"* %95, %"class.std::__1::__tree_node_base"** %__parent_5.i, align 4
  br label %if.end268

if.end268:                                        ; preds = %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit, %if.then226, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit153, %if.then143, %if.then96, %if.end83
  ret void
}

define linkonce_odr void @_ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %__root, %"class.std::__1::__tree_node_base"* %__x) nounwind {
entry:
  %cmp = icmp eq %"class.std::__1::__tree_node_base"* %__x, %__root
  %__is_black_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x, i32 0, i32 3
  %frombool = zext i1 %cmp to i8
  store i8 %frombool, i8* %__is_black_, align 1
  br i1 %cmp, label %while.end, label %land.rhs

land.rhs:                                         ; preds = %while.cond.backedge, %entry
  %__x.addr.090 = phi %"class.std::__1::__tree_node_base"* [ %3, %while.cond.backedge ], [ %__x, %entry ]
  %__parent_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.090, i32 0, i32 2
  %0 = load %"class.std::__1::__tree_node_base"** %__parent_, align 4
  %__is_black_2 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %0, i32 0, i32 3
  %1 = load i8* %__is_black_2, align 1
  %2 = and i8 %1, 1
  %lnot = icmp eq i8 %2, 0
  br i1 %lnot, label %while.body, label %while.end

while.body:                                       ; preds = %land.rhs
  %__parent_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %0, i32 0, i32 2
  %3 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %__left_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %3, i32 0, i32 0, i32 0
  %4 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %0, %4
  br i1 %cmp.i, label %if.then, label %if.else27

if.then:                                          ; preds = %while.body
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %3, i32 0, i32 1
  %5 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %cmp8 = icmp eq %"class.std::__1::__tree_node_base"* %5, null
  br i1 %cmp8, label %if.else, label %land.lhs.true

land.lhs.true:                                    ; preds = %if.then
  %__is_black_9 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %5, i32 0, i32 3
  %6 = load i8* %__is_black_9, align 1
  %7 = and i8 %6, 1
  %tobool10 = icmp eq i8 %7, 0
  br i1 %tobool10, label %if.then11, label %if.else

if.then11:                                        ; preds = %land.lhs.true
  store i8 1, i8* %__is_black_2, align 1
  %cmp15 = icmp eq %"class.std::__1::__tree_node_base"* %3, %__root
  %__is_black_16 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %3, i32 0, i32 3
  %frombool17 = zext i1 %cmp15 to i8
  store i8 %frombool17, i8* %__is_black_16, align 1
  store i8 1, i8* %__is_black_9, align 1
  br label %while.cond.backedge

if.else:                                          ; preds = %land.lhs.true, %if.then
  %__left_.i74 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %0, i32 0, i32 0, i32 0
  %8 = load %"class.std::__1::__tree_node_base"** %__left_.i74, align 4
  %cmp.i75 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.090, %8
  br i1 %cmp.i75, label %if.end, label %if.then20

if.then20:                                        ; preds = %if.else
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %0, i32 0, i32 1
  %9 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %__left_.i42 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %9, i32 0, i32 0, i32 0
  %10 = load %"class.std::__1::__tree_node_base"** %__left_.i42, align 4
  store %"class.std::__1::__tree_node_base"* %10, %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp.i43 = icmp eq %"class.std::__1::__tree_node_base"* %10, null
  br i1 %cmp.i43, label %if.end.i, label %if.then.i

if.then.i:                                        ; preds = %if.then20
  %__parent_.i44 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %10, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %0, %"class.std::__1::__tree_node_base"** %__parent_.i44, align 4
  %.pre97 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  br label %if.end.i

if.end.i:                                         ; preds = %if.then.i, %if.then20
  %11 = phi %"class.std::__1::__tree_node_base"* [ %.pre97, %if.then.i ], [ %3, %if.then20 ]
  %__parent_6.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %9, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %11, %"class.std::__1::__tree_node_base"** %__parent_6.i, align 4
  %12 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %12, i32 0, i32 0, i32 0
  %13 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %cmp.i.i = icmp eq %"class.std::__1::__tree_node_base"* %13, %0
  br i1 %cmp.i.i, label %if.then8.i, label %if.else.i

if.then8.i:                                       ; preds = %if.end.i
  store %"class.std::__1::__tree_node_base"* %9, %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

if.else.i:                                        ; preds = %if.end.i
  %__right_12.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %12, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %9, %"class.std::__1::__tree_node_base"** %__right_12.i, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit: ; preds = %if.else.i, %if.then8.i
  store %"class.std::__1::__tree_node_base"* %0, %"class.std::__1::__tree_node_base"** %__left_.i42, align 4
  store %"class.std::__1::__tree_node_base"* %9, %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %.pre = load %"class.std::__1::__tree_node_base"** %__parent_6.i, align 4
  br label %if.end

if.end:                                           ; preds = %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit, %if.else
  %14 = phi %"class.std::__1::__tree_node_base"* [ %3, %if.else ], [ %.pre, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit ]
  %15 = phi %"class.std::__1::__tree_node_base"* [ %0, %if.else ], [ %9, %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit ]
  %__is_black_23 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %15, i32 0, i32 3
  store i8 1, i8* %__is_black_23, align 1
  %__is_black_25 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %14, i32 0, i32 3
  store i8 0, i8* %__is_black_25, align 1
  %__left_.i72 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %14, i32 0, i32 0, i32 0
  %16 = load %"class.std::__1::__tree_node_base"** %__left_.i72, align 4
  %__right_.i73 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %16, i32 0, i32 1
  %17 = load %"class.std::__1::__tree_node_base"** %__right_.i73, align 4
  store %"class.std::__1::__tree_node_base"* %17, %"class.std::__1::__tree_node_base"** %__left_.i72, align 4
  %cmp.i74 = icmp eq %"class.std::__1::__tree_node_base"* %17, null
  br i1 %cmp.i74, label %if.end.i81, label %if.then.i76

if.then.i76:                                      ; preds = %if.end
  %__parent_.i75 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %17, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %14, %"class.std::__1::__tree_node_base"** %__parent_.i75, align 4
  br label %if.end.i81

if.end.i81:                                       ; preds = %if.then.i76, %if.end
  %__parent_5.i77 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %14, i32 0, i32 2
  %18 = load %"class.std::__1::__tree_node_base"** %__parent_5.i77, align 4
  %__parent_6.i78 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %16, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %18, %"class.std::__1::__tree_node_base"** %__parent_6.i78, align 4
  %19 = load %"class.std::__1::__tree_node_base"** %__parent_5.i77, align 4
  %__left_.i.i79 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %19, i32 0, i32 0, i32 0
  %20 = load %"class.std::__1::__tree_node_base"** %__left_.i.i79, align 4
  %cmp.i.i80 = icmp eq %"class.std::__1::__tree_node_base"* %20, %14
  br i1 %cmp.i.i80, label %if.then8.i82, label %if.else.i84

if.then8.i82:                                     ; preds = %if.end.i81
  store %"class.std::__1::__tree_node_base"* %16, %"class.std::__1::__tree_node_base"** %__left_.i.i79, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit85

if.else.i84:                                      ; preds = %if.end.i81
  %__right_12.i83 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %19, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %16, %"class.std::__1::__tree_node_base"** %__right_12.i83, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit85

_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit85: ; preds = %if.else.i84, %if.then8.i82
  store %"class.std::__1::__tree_node_base"* %14, %"class.std::__1::__tree_node_base"** %__right_.i73, align 4
  store %"class.std::__1::__tree_node_base"* %16, %"class.std::__1::__tree_node_base"** %__parent_5.i77, align 4
  br label %while.end

if.else27:                                        ; preds = %while.body
  %cmp36 = icmp eq %"class.std::__1::__tree_node_base"* %4, null
  br i1 %cmp36, label %if.else48, label %land.lhs.true37

land.lhs.true37:                                  ; preds = %if.else27
  %__is_black_38 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %4, i32 0, i32 3
  %21 = load i8* %__is_black_38, align 1
  %22 = and i8 %21, 1
  %tobool39 = icmp eq i8 %22, 0
  br i1 %tobool39, label %if.then40, label %if.else48

if.then40:                                        ; preds = %land.lhs.true37
  store i8 1, i8* %__is_black_2, align 1
  %cmp44 = icmp eq %"class.std::__1::__tree_node_base"* %3, %__root
  %__is_black_45 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %3, i32 0, i32 3
  %frombool46 = zext i1 %cmp44 to i8
  store i8 %frombool46, i8* %__is_black_45, align 1
  store i8 1, i8* %__is_black_38, align 1
  br label %while.cond.backedge

while.cond.backedge:                              ; preds = %if.then40, %if.then11
  %cmp1 = icmp eq %"class.std::__1::__tree_node_base"* %3, %__root
  br i1 %cmp1, label %while.end, label %land.rhs

if.else48:                                        ; preds = %land.lhs.true37, %if.else27
  %__left_.i61 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %0, i32 0, i32 0, i32 0
  %23 = load %"class.std::__1::__tree_node_base"** %__left_.i61, align 4
  %cmp.i62 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.090, %23
  br i1 %cmp.i62, label %if.then50, label %if.end52

if.then50:                                        ; preds = %if.else48
  %__right_.i60 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.090, i32 0, i32 1
  %24 = load %"class.std::__1::__tree_node_base"** %__right_.i60, align 4
  store %"class.std::__1::__tree_node_base"* %24, %"class.std::__1::__tree_node_base"** %__left_.i61, align 4
  %cmp.i61 = icmp eq %"class.std::__1::__tree_node_base"* %24, null
  br i1 %cmp.i61, label %if.end.i68, label %if.then.i63

if.then.i63:                                      ; preds = %if.then50
  %__parent_.i62 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %24, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %0, %"class.std::__1::__tree_node_base"** %__parent_.i62, align 4
  %.pre98 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  br label %if.end.i68

if.end.i68:                                       ; preds = %if.then.i63, %if.then50
  %25 = phi %"class.std::__1::__tree_node_base"* [ %.pre98, %if.then.i63 ], [ %3, %if.then50 ]
  store %"class.std::__1::__tree_node_base"* %25, %"class.std::__1::__tree_node_base"** %__parent_, align 4
  %26 = load %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %__left_.i.i66 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %26, i32 0, i32 0, i32 0
  %27 = load %"class.std::__1::__tree_node_base"** %__left_.i.i66, align 4
  %cmp.i.i67 = icmp eq %"class.std::__1::__tree_node_base"* %27, %0
  br i1 %cmp.i.i67, label %if.then8.i69, label %if.else.i71

if.then8.i69:                                     ; preds = %if.end.i68
  store %"class.std::__1::__tree_node_base"* %__x.addr.090, %"class.std::__1::__tree_node_base"** %__left_.i.i66, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

if.else.i71:                                      ; preds = %if.end.i68
  %__right_12.i70 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %26, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %__x.addr.090, %"class.std::__1::__tree_node_base"** %__right_12.i70, align 4
  br label %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit

_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit: ; preds = %if.else.i71, %if.then8.i69
  store %"class.std::__1::__tree_node_base"* %0, %"class.std::__1::__tree_node_base"** %__right_.i60, align 4
  store %"class.std::__1::__tree_node_base"* %__x.addr.090, %"class.std::__1::__tree_node_base"** %__parent_.i, align 4
  %.pre99 = load %"class.std::__1::__tree_node_base"** %__parent_, align 4
  br label %if.end52

if.end52:                                         ; preds = %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit, %if.else48
  %28 = phi %"class.std::__1::__tree_node_base"* [ %.pre99, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit ], [ %3, %if.else48 ]
  %29 = phi %"class.std::__1::__tree_node_base"* [ %__x.addr.090, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit ], [ %0, %if.else48 ]
  %__is_black_54 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %29, i32 0, i32 3
  store i8 1, i8* %__is_black_54, align 1
  %__is_black_56 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %28, i32 0, i32 3
  store i8 0, i8* %__is_black_56, align 1
  %__right_.i45 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %28, i32 0, i32 1
  %30 = load %"class.std::__1::__tree_node_base"** %__right_.i45, align 4
  %__left_.i46 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %30, i32 0, i32 0, i32 0
  %31 = load %"class.std::__1::__tree_node_base"** %__left_.i46, align 4
  store %"class.std::__1::__tree_node_base"* %31, %"class.std::__1::__tree_node_base"** %__right_.i45, align 4
  %cmp.i47 = icmp eq %"class.std::__1::__tree_node_base"* %31, null
  br i1 %cmp.i47, label %if.end.i54, label %if.then.i49

if.then.i49:                                      ; preds = %if.end52
  %__parent_.i48 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %31, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %28, %"class.std::__1::__tree_node_base"** %__parent_.i48, align 4
  br label %if.end.i54

if.end.i54:                                       ; preds = %if.then.i49, %if.end52
  %__parent_5.i50 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %28, i32 0, i32 2
  %32 = load %"class.std::__1::__tree_node_base"** %__parent_5.i50, align 4
  %__parent_6.i51 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %30, i32 0, i32 2
  store %"class.std::__1::__tree_node_base"* %32, %"class.std::__1::__tree_node_base"** %__parent_6.i51, align 4
  %33 = load %"class.std::__1::__tree_node_base"** %__parent_5.i50, align 4
  %__left_.i.i52 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %33, i32 0, i32 0, i32 0
  %34 = load %"class.std::__1::__tree_node_base"** %__left_.i.i52, align 4
  %cmp.i.i53 = icmp eq %"class.std::__1::__tree_node_base"* %34, %28
  br i1 %cmp.i.i53, label %if.then8.i55, label %if.else.i57

if.then8.i55:                                     ; preds = %if.end.i54
  store %"class.std::__1::__tree_node_base"* %30, %"class.std::__1::__tree_node_base"** %__left_.i.i52, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit58

if.else.i57:                                      ; preds = %if.end.i54
  %__right_12.i56 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %33, i32 0, i32 1
  store %"class.std::__1::__tree_node_base"* %30, %"class.std::__1::__tree_node_base"** %__right_12.i56, align 4
  br label %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit58

_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit58: ; preds = %if.else.i57, %if.then8.i55
  store %"class.std::__1::__tree_node_base"* %28, %"class.std::__1::__tree_node_base"** %__left_.i46, align 4
  store %"class.std::__1::__tree_node_base"* %30, %"class.std::__1::__tree_node_base"** %__parent_5.i50, align 4
  br label %while.end

while.end:                                        ; preds = %_ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit58, %while.cond.backedge, %_ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT_.exit85, %land.rhs, %entry
  ret void
}

declare i32 @_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc(%"class.std::__1::basic_string"*, i8*) nounwind

define linkonce_odr void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE14__insert_multiENS_21__tree_const_iteratorISH_PNS_11__tree_nodeISH_PvEEiEERKSH_(%"class.std::__1::__tree_iterator.68"* noalias nocapture sret %agg.result, %"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_const_iterator.81"* nocapture byval %__p, %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v) align 2 {
entry:
  %__parent = alloca %"class.std::__1::__tree_node_base"*, align 4
  %agg.tmp = alloca %"class.std::__1::__tree_const_iterator.81", align 4
  %0 = getelementptr inbounds %"class.std::__1::__tree_const_iterator.81"* %__p, i32 0, i32 0
  %1 = load %"class.std::__1::__tree_node.56"** %0, align 4
  %2 = getelementptr inbounds %"class.std::__1::__tree_const_iterator.81"* %agg.tmp, i32 0, i32 0
  store %"class.std::__1::__tree_node.56"* %1, %"class.std::__1::__tree_node.56"** %2, align 4
  %call = call %"class.std::__1::__tree_node_base"** @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE11__find_leafENS_21__tree_const_iteratorISH_PNS_11__tree_nodeISH_PvEEiEERPNS_16__tree_node_baseISO_EERKSH_(%"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_const_iterator.81"* byval %agg.tmp, %"class.std::__1::__tree_node_base"** %__parent, %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v)
  %call.i.i.i = call noalias i8* @_Znwj(i32 32)
  %3 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node.56"*
  %__value_.i = getelementptr inbounds i8* %call.i.i.i, i32 16
  %new.isnull.i.i = icmp eq i8* %__value_.i, null
  br i1 %new.isnull.i.i, label %_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit, label %new.notnull.i.i

new.notnull.i.i:                                  ; preds = %entry
  %first.i.i.i.i.i = bitcast i8* %__value_.i to i32*
  %first2.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0
  %4 = load i32* %first2.i.i.i.i.i, align 4
  store i32 %4, i32* %first.i.i.i.i.i, align 4
  %second.i.i.i.i.i = getelementptr inbounds i8* %call.i.i.i, i32 20
  %5 = bitcast i8* %second.i.i.i.i.i to %"class.std::__1::basic_string"*
  %second3.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %5, %"class.std::__1::basic_string"* %second3.i.i.i.i.i)
          to label %_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit unwind label %lpad.i

lpad.i:                                           ; preds = %new.notnull.i.i
  %6 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %tobool.i.i.i.i25 = icmp eq i8* %call.i.i.i, null
  br i1 %tobool.i.i.i.i25, label %eh.resume.i, label %if.then3.i.i.i.i.i

if.then3.i.i.i.i.i:                               ; preds = %lpad.i
  call void @_ZdlPv(i8* %call.i.i.i) nounwind
  br label %eh.resume.i

eh.resume.i:                                      ; preds = %if.then3.i.i.i.i.i, %lpad.i
  resume { i8*, i32 } %6

_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit: ; preds = %new.notnull.i.i, %entry
  %7 = load %"class.std::__1::__tree_node_base"** %__parent, align 4
  %8 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"*
  %__left_.i = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %__right_.i = getelementptr inbounds i8* %call.i.i.i, i32 4
  %9 = bitcast i8* %__right_.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %9, align 4
  %__parent_.i = getelementptr inbounds i8* %call.i.i.i, i32 8
  %10 = bitcast i8* %__parent_.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* %7, %"class.std::__1::__tree_node_base"** %10, align 4
  store %"class.std::__1::__tree_node_base"* %8, %"class.std::__1::__tree_node_base"** %call, align 4
  %__begin_node_.i43.i = getelementptr inbounds %"class.std::__1::__tree.55"* %this, i32 0, i32 0
  %11 = load %"class.std::__1::__tree_node.56"** %__begin_node_.i43.i, align 4
  %__left_5.i = getelementptr inbounds %"class.std::__1::__tree_node.56"* %11, i32 0, i32 0, i32 0, i32 0
  %12 = load %"class.std::__1::__tree_node_base"** %__left_5.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %12, null
  br i1 %cmp.i, label %invoke.cont7, label %if.then.i

if.then.i:                                        ; preds = %_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit
  %13 = bitcast %"class.std::__1::__tree_node_base"* %12 to %"class.std::__1::__tree_node.56"*
  store %"class.std::__1::__tree_node.56"* %13, %"class.std::__1::__tree_node.56"** %__begin_node_.i43.i, align 4
  %.pre.i = load %"class.std::__1::__tree_node_base"** %call, align 4
  br label %invoke.cont7

invoke.cont7:                                     ; preds = %if.then.i, %_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit
  %14 = phi %"class.std::__1::__tree_node_base"* [ %8, %_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE16__construct_nodeERKSH_.exit ], [ %.pre.i, %if.then.i ]
  %__left_12.i = getelementptr inbounds %"class.std::__1::__tree.55"* %this, i32 0, i32 1, i32 0, i32 0, i32 0
  %15 = load %"class.std::__1::__tree_node_base"** %__left_12.i, align 4
  call void @_ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %15, %"class.std::__1::__tree_node_base"* %14) nounwind
  %__first_.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree.55"* %this, i32 0, i32 2, i32 0, i32 0
  %16 = load i32* %__first_.i.i.i.i, align 4
  %inc.i = add i32 %16, 1
  store i32 %inc.i, i32* %__first_.i.i.i.i, align 4
  %__ptr_.i.i118 = getelementptr inbounds %"class.std::__1::__tree_iterator.68"* %agg.result, i32 0, i32 0
  store %"class.std::__1::__tree_node.56"* %3, %"class.std::__1::__tree_node.56"** %__ptr_.i.i118, align 4
  ret void
}

define linkonce_odr %"class.std::__1::__tree_node_base"** @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE11__find_leafENS_21__tree_const_iteratorISH_PNS_11__tree_nodeISH_PvEEiEERPNS_16__tree_node_baseISO_EERKSH_(%"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_const_iterator.81"* nocapture byval %__hint, %"class.std::__1::__tree_node_base"** nocapture %__parent, %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* nocapture %__v) nounwind align 2 {
entry:
  %__first_.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree.55"* %this, i32 0, i32 1, i32 0, i32 0
  %0 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i to %"class.std::__1::__tree_node.56"*
  %__ptr_.i = getelementptr inbounds %"class.std::__1::__tree_const_iterator.81"* %__hint, i32 0, i32 0
  %1 = load %"class.std::__1::__tree_node.56"** %__ptr_.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node.56"* %1, %0
  br i1 %cmp.i, label %if.then, label %lor.lhs.false

lor.lhs.false:                                    ; preds = %entry
  %first.i94 = getelementptr inbounds %"class.std::__1::__tree_node.56"* %1, i32 0, i32 1, i32 0, i32 0
  %first3.i96 = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0
  %2 = load i32* %first.i94, align 4
  %3 = load i32* %first3.i96, align 4
  %cmp.i.i98 = icmp slt i32 %2, %3
  br i1 %cmp.i.i98, label %if.end20, label %if.then

if.then:                                          ; preds = %lor.lhs.false, %entry
  %__begin_node_.i.i = getelementptr inbounds %"class.std::__1::__tree.55"* %this, i32 0, i32 0
  %4 = load %"class.std::__1::__tree_node.56"** %__begin_node_.i.i, align 4
  %cmp.i64 = icmp eq %"class.std::__1::__tree_node.56"* %1, %4
  %__left_.phi.trans.insert = getelementptr inbounds %"class.std::__1::__tree_node.56"* %1, i32 0, i32 0, i32 0, i32 0
  %.pre = load %"class.std::__1::__tree_node_base"** %__left_.phi.trans.insert, align 4
  br i1 %cmp.i64, label %if.then13, label %lor.lhs.false8

lor.lhs.false8:                                   ; preds = %if.then
  %cmp.i14 = icmp eq %"class.std::__1::__tree_node_base"* %.pre, null
  br i1 %cmp.i14, label %while.cond.i.preheader, label %while.cond.i.i

while.cond.i.preheader:                           ; preds = %lor.lhs.false8
  %5 = getelementptr inbounds %"class.std::__1::__tree_node.56"* %1, i32 0, i32 0
  br label %while.cond.i

while.cond.i.i:                                   ; preds = %while.cond.i.i, %lor.lhs.false8
  %__x.addr.i9.0.i = phi %"class.std::__1::__tree_node_base"* [ %6, %while.cond.i.i ], [ %.pre, %lor.lhs.false8 ]
  %__right_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.i9.0.i, i32 0, i32 1
  %6 = load %"class.std::__1::__tree_node_base"** %__right_.i.i, align 4
  %cmp.i12.i = icmp eq %"class.std::__1::__tree_node_base"* %6, null
  br i1 %cmp.i12.i, label %_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit, label %while.cond.i.i

while.cond.i:                                     ; preds = %while.cond.i, %while.cond.i.preheader
  %__x.addr.0.i = phi %"class.std::__1::__tree_node_base"* [ %7, %while.cond.i ], [ %5, %while.cond.i.preheader ]
  %__parent_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__x.addr.0.i, i32 0, i32 2
  %7 = load %"class.std::__1::__tree_node_base"** %__parent_.i.i, align 4
  %__left_.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %7, i32 0, i32 0, i32 0
  %8 = load %"class.std::__1::__tree_node_base"** %__left_.i.i, align 4
  %cmp.i.i15 = icmp eq %"class.std::__1::__tree_node_base"* %__x.addr.0.i, %8
  br i1 %cmp.i.i15, label %while.cond.i, label %_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit

_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit: ; preds = %while.cond.i, %while.cond.i.i
  %retval.0.i = phi %"class.std::__1::__tree_node_base"* [ %7, %while.cond.i ], [ %__x.addr.i9.0.i, %while.cond.i.i ]
  %9 = bitcast %"class.std::__1::__tree_node_base"* %retval.0.i to %"class.std::__1::__tree_node.56"*
  %__value_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %retval.0.i, i32 1
  %first.i = getelementptr inbounds %"struct.std::__1::multimap<OIS::Type, std::__1::basic_string<char>, std::__1::less<OIS::Type>, std::__1::allocator<std::__1::pair<const OIS::Type, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0
  %first3.i = bitcast %"class.std::__1::__tree_node_base"* %__value_.i to i32*
  %10 = load i32* %first.i, align 4
  %11 = load i32* %first3.i, align 4
  %cmp.i.i = icmp slt i32 %10, %11
  br i1 %cmp.i.i, label %if.end, label %if.then13

if.then13:                                        ; preds = %_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit, %if.then
  %__prior.sroa.0.0 = phi %"class.std::__1::__tree_node.56"* [ %9, %_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit ], [ %1, %if.then ]
  %cmp = icmp eq %"class.std::__1::__tree_node_base"* %.pre, null
  br i1 %cmp, label %if.then15, label %if.else

if.then15:                                        ; preds = %if.then13
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node.56"* %1, i32 0, i32 0, i32 0, i32 0
  %12 = getelementptr inbounds %"class.std::__1::__tree_node.56"* %1, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* %12, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.else:                                          ; preds = %if.then13
  %13 = getelementptr inbounds %"class.std::__1::__tree_node.56"* %__prior.sroa.0.0, i32 0, i32 0
  store %"class.std::__1::__tree_node_base"* %13, %"class.std::__1::__tree_node_base"** %__parent, align 4
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node.56"* %__prior.sroa.0.0, i32 0, i32 0, i32 1
  br label %return

if.end:                                           ; preds = %_ZNSt3__111__tree_prevIPNS_16__tree_node_baseIPvEEEET_S5_.exit
  %__left_.i.i22 = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i, i32 0, i32 0
  %14 = load %"class.std::__1::__tree_node_base"** %__left_.i.i22, align 4
  %cmp.i23 = icmp eq %"class.std::__1::__tree_node_base"* %14, null
  br i1 %cmp.i23, label %if.end22.i39, label %while.body.i30

while.body.i30:                                   ; preds = %if.else12.i37, %if.then5.i33, %if.end
  %__nd.0.in.i26 = phi %"class.std::__1::__tree_node_base"* [ %14, %if.end ], [ %16, %if.then5.i33 ], [ %17, %if.else12.i37 ]
  %__value_.i27 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i26, i32 1
  %first3.i.i28 = bitcast %"class.std::__1::__tree_node_base"* %__value_.i27 to i32*
  %15 = load i32* %first3.i.i28, align 4
  %cmp.i.i.i29 = icmp slt i32 %10, %15
  br i1 %cmp.i.i.i29, label %if.then5.i33, label %if.else12.i37

if.then5.i33:                                     ; preds = %while.body.i30
  %__left_.i31 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i26, i32 0, i32 0, i32 0
  %16 = load %"class.std::__1::__tree_node_base"** %__left_.i31, align 4
  %cmp8.i32 = icmp eq %"class.std::__1::__tree_node_base"* %16, null
  br i1 %cmp8.i32, label %if.else.i34, label %while.body.i30

if.else.i34:                                      ; preds = %if.then5.i33
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i26, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.else12.i37:                                    ; preds = %while.body.i30
  %__right_.i35 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i26, i32 0, i32 1
  %17 = load %"class.std::__1::__tree_node_base"** %__right_.i35, align 4
  %cmp15.i36 = icmp eq %"class.std::__1::__tree_node_base"* %17, null
  br i1 %cmp15.i36, label %if.else18.i38, label %while.body.i30

if.else18.i38:                                    ; preds = %if.else12.i37
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i26, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.end22.i39:                                     ; preds = %if.end
  %18 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i to %"class.std::__1::__tree_node_base"*
  store %"class.std::__1::__tree_node_base"* %18, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.end20:                                         ; preds = %lor.lhs.false
  %__left_.i.i16 = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i, i32 0, i32 0
  %19 = load %"class.std::__1::__tree_node_base"** %__left_.i.i16, align 4
  %cmp.i17 = icmp eq %"class.std::__1::__tree_node_base"* %19, null
  br i1 %cmp.i17, label %if.end22.i, label %while.body.i

while.body.i:                                     ; preds = %if.else12.i, %if.then5.i, %if.end20
  %__nd.0.in.i = phi %"class.std::__1::__tree_node_base"* [ %19, %if.end20 ], [ %21, %if.then5.i ], [ %22, %if.else12.i ]
  %__value_.i18 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 1
  %first.i.i = bitcast %"class.std::__1::__tree_node_base"* %__value_.i18 to i32*
  %20 = load i32* %first.i.i, align 4
  %cmp.i.i.i = icmp slt i32 %20, %3
  br i1 %cmp.i.i.i, label %if.then5.i, label %if.else12.i

if.then5.i:                                       ; preds = %while.body.i
  %__right_.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 0, i32 1
  %21 = load %"class.std::__1::__tree_node_base"** %__right_.i, align 4
  %cmp8.i = icmp eq %"class.std::__1::__tree_node_base"* %21, null
  br i1 %cmp8.i, label %if.else.i, label %while.body.i

if.else.i:                                        ; preds = %if.then5.i
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.else12.i:                                      ; preds = %while.body.i
  %__left_.i19 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.i, i32 0, i32 0, i32 0
  %22 = load %"class.std::__1::__tree_node_base"** %__left_.i19, align 4
  %cmp15.i = icmp eq %"class.std::__1::__tree_node_base"* %22, null
  br i1 %cmp15.i, label %if.else18.i, label %while.body.i

if.else18.i:                                      ; preds = %if.else12.i
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.i, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.end22.i:                                       ; preds = %if.end20
  %23 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i to %"class.std::__1::__tree_node_base"*
  store %"class.std::__1::__tree_node_base"* %23, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

return:                                           ; preds = %if.end22.i, %if.else18.i, %if.else.i, %if.end22.i39, %if.else18.i38, %if.else.i34, %if.else, %if.then15
  %retval.0 = phi %"class.std::__1::__tree_node_base"** [ %__left_, %if.then15 ], [ %__right_, %if.else ], [ %__left_.i31, %if.else.i34 ], [ %__right_.i35, %if.else18.i38 ], [ %__left_.i.i22, %if.end22.i39 ], [ %__right_.i, %if.else.i ], [ %__left_.i19, %if.else18.i ], [ %__left_.i.i16, %if.end22.i ]
  ret %"class.std::__1::__tree_node_base"** %retval.0
}

define linkonce_odr void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE14__insert_multiERKSF_(%"class.std::__1::__tree_iterator"* noalias nocapture sret %agg.result, %"class.std::__1::__tree.11"* %this, %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v) align 2 {
entry:
  %__parent = alloca %"class.std::__1::__tree_node_base"*, align 4
  %call = call %"class.std::__1::__tree_node_base"** @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKSF_(%"class.std::__1::__tree.11"* %this, %"class.std::__1::__tree_node_base"** %__parent, %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v)
  %call.i.i.i = call noalias i8* @_Znwj(i32 40)
  %0 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node.12"*
  %__value_.i = getelementptr inbounds i8* %call.i.i.i, i32 16
  %new.isnull.i.i = icmp eq i8* %__value_.i, null
  br i1 %new.isnull.i.i, label %_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit, label %new.notnull.i.i

new.notnull.i.i:                                  ; preds = %entry
  %first.i.i.i.i.i = bitcast i8* %__value_.i to %"class.std::__1::basic_string"*
  %first2.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %first.i.i.i.i.i, %"class.std::__1::basic_string"* %first2.i.i.i.i.i)
          to label %.noexc.i unwind label %lpad.i

.noexc.i:                                         ; preds = %new.notnull.i.i
  %second.i.i.i.i.i = getelementptr inbounds i8* %call.i.i.i, i32 28
  %1 = bitcast i8* %second.i.i.i.i.i to %"class.std::__1::basic_string"*
  %second3.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_(%"class.std::__1::basic_string"* %1, %"class.std::__1::basic_string"* %second3.i.i.i.i.i)
          to label %_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit unwind label %lpad.i.i.i.i.i

lpad.i.i.i.i.i:                                   ; preds = %.noexc.i
  %2 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i.i)
          to label %lpad.body.i unwind label %terminate.lpad.i.i.i.i.i

terminate.lpad.i.i.i.i.i:                         ; preds = %lpad.i.i.i.i.i
  %3 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  call void @_ZSt9terminatev() noreturn nounwind
  unreachable

lpad.i:                                           ; preds = %new.notnull.i.i
  %4 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i, %lpad.i.i.i.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %4, %lpad.i ], [ %2, %lpad.i.i.i.i.i ]
  %tobool.i.i.i.i25 = icmp eq i8* %call.i.i.i, null
  br i1 %tobool.i.i.i.i25, label %eh.resume.i, label %if.then3.i.i.i.i.i

if.then3.i.i.i.i.i:                               ; preds = %lpad.body.i
  call void @_ZdlPv(i8* %call.i.i.i) nounwind
  br label %eh.resume.i

eh.resume.i:                                      ; preds = %if.then3.i.i.i.i.i, %lpad.body.i
  resume { i8*, i32 } %eh.lpad-body.i

_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit: ; preds = %.noexc.i, %entry
  %5 = load %"class.std::__1::__tree_node_base"** %__parent, align 4
  %6 = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"*
  %__left_.i = bitcast i8* %call.i.i.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %__right_.i = getelementptr inbounds i8* %call.i.i.i, i32 4
  %7 = bitcast i8* %__right_.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* null, %"class.std::__1::__tree_node_base"** %7, align 4
  %__parent_.i = getelementptr inbounds i8* %call.i.i.i, i32 8
  %8 = bitcast i8* %__parent_.i to %"class.std::__1::__tree_node_base"**
  store %"class.std::__1::__tree_node_base"* %5, %"class.std::__1::__tree_node_base"** %8, align 4
  store %"class.std::__1::__tree_node_base"* %6, %"class.std::__1::__tree_node_base"** %call, align 4
  %__begin_node_.i43.i = getelementptr inbounds %"class.std::__1::__tree.11"* %this, i32 0, i32 0
  %9 = load %"class.std::__1::__tree_node.12"** %__begin_node_.i43.i, align 4
  %__left_5.i = getelementptr inbounds %"class.std::__1::__tree_node.12"* %9, i32 0, i32 0, i32 0, i32 0
  %10 = load %"class.std::__1::__tree_node_base"** %__left_5.i, align 4
  %cmp.i = icmp eq %"class.std::__1::__tree_node_base"* %10, null
  br i1 %cmp.i, label %invoke.cont6, label %if.then.i

if.then.i:                                        ; preds = %_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit
  %11 = bitcast %"class.std::__1::__tree_node_base"* %10 to %"class.std::__1::__tree_node.12"*
  store %"class.std::__1::__tree_node.12"* %11, %"class.std::__1::__tree_node.12"** %__begin_node_.i43.i, align 4
  %.pre.i = load %"class.std::__1::__tree_node_base"** %call, align 4
  br label %invoke.cont6

invoke.cont6:                                     ; preds = %if.then.i, %_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit
  %12 = phi %"class.std::__1::__tree_node_base"* [ %6, %_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__construct_nodeERKSF_.exit ], [ %.pre.i, %if.then.i ]
  %__left_12.i = getelementptr inbounds %"class.std::__1::__tree.11"* %this, i32 0, i32 1, i32 0, i32 0, i32 0
  %13 = load %"class.std::__1::__tree_node_base"** %__left_12.i, align 4
  call void @_ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(%"class.std::__1::__tree_node_base"* %13, %"class.std::__1::__tree_node_base"* %12) nounwind
  %__first_.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree.11"* %this, i32 0, i32 2, i32 0, i32 0
  %14 = load i32* %__first_.i.i.i.i, align 4
  %inc.i = add i32 %14, 1
  store i32 %inc.i, i32* %__first_.i.i.i.i, align 4
  %__ptr_.i.i117 = getelementptr inbounds %"class.std::__1::__tree_iterator"* %agg.result, i32 0, i32 0
  store %"class.std::__1::__tree_node.12"* %0, %"class.std::__1::__tree_node.12"** %__ptr_.i.i117, align 4
  ret void
}

define linkonce_odr %"class.std::__1::__tree_node_base"** @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE16__find_leaf_highERPNS_16__tree_node_baseIPvEERKSF_(%"class.std::__1::__tree.11"* %this, %"class.std::__1::__tree_node_base"** nocapture %__parent, %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* nocapture %__v) nounwind align 2 {
entry:
  %__first_.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree.11"* %this, i32 0, i32 1, i32 0, i32 0
  %__left_.i = getelementptr inbounds %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_.i, align 4
  %cmp = icmp eq %"class.std::__1::__tree_node_base"* %0, null
  br i1 %cmp, label %if.end22, label %while.body.preheader

while.body.preheader:                             ; preds = %entry
  %__s.i.i.i.i.i.i = bitcast %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i.i.i.i.i = bitcast %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v to i8*
  %1 = load i8* %__size_.i.i.i.i.i.i, align 1
  %conv.i.i.i.i.i.i = zext i8 %1 to i32
  %and.i.i.i.i.i.i = and i32 %conv.i.i.i.i.i.i, 1
  %tobool.i.i.i.i.i.i = icmp eq i32 %and.i.i.i.i.i.i, 0
  %shr.i.i.i.i.i.i20 = lshr i32 %conv.i.i.i.i.i.i, 1
  %and.i.i.i91.i.i.i.i = and i8 %1, 1
  %tobool.i.i.i92.i.i.i.i = icmp eq i8 %and.i.i.i91.i.i.i.i, 0
  %arrayidx.i.i.i108.i.i.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i.i.i.i, i32 0, i32 1, i32 0
  %__data_.i21.i.i99.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %__size_.i23.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__v, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  br i1 %tobool.i.i.i.i.i.i, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us, label %while.body.preheader.while.body.preheader.split_crit_edge

while.body.preheader.while.body.preheader.split_crit_edge: ; preds = %while.body.preheader
  br i1 %tobool.i.i.i92.i.i.i.i, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us: ; preds = %if.then5.us, %if.else12.us, %while.body.preheader
  %__nd.0.in.us = phi %"class.std::__1::__tree_node_base"* [ %0, %while.body.preheader ], [ %9, %if.then5.us ], [ %8, %if.else12.us ]
  %__value_.us = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us, i32 1
  %__s.i.i30.i.i.i.i.us = bitcast %"class.std::__1::__tree_node_base"* %__value_.us to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i31.i.i.i.i.us = bitcast %"class.std::__1::__tree_node_base"* %__value_.us to i8*
  %2 = load i8* %__size_.i.i31.i.i.i.i.us, align 1
  %conv.i.i32.i.i.i.i.us = zext i8 %2 to i32
  %and.i.i33.i.i.i.i.us = and i32 %conv.i.i32.i.i.i.i.us, 1
  %tobool.i.i34.i.i.i.i.us = icmp eq i32 %and.i.i33.i.i.i.i.us, 0
  br i1 %tobool.i.i34.i.i.i.i.us, label %cond.false.i52.i.i.i.i.us, label %cond.true.i42.i.i.i.i.us

cond.true.i42.i.i.i.i.us:                         ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us
  %__size_.i23.i41.i.i.i.i.us = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us, i32 1, i32 1
  %3 = bitcast %"class.std::__1::__tree_node_base"** %__size_.i23.i41.i.i.i.i.us to i32*
  %4 = load i32* %3, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us

cond.false.i52.i.i.i.i.us:                        ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us
  %shr.i.i51.i.i.i.i21.us = lshr i32 %conv.i.i32.i.i.i.i.us, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us: ; preds = %cond.false.i52.i.i.i.i.us, %cond.true.i42.i.i.i.i.us
  %cond.i53.i.i.i.i.us = phi i32 [ %4, %cond.true.i42.i.i.i.i.us ], [ %shr.i.i51.i.i.i.i21.us, %cond.false.i52.i.i.i.i.us ]
  br i1 %tobool.i.i.i92.i.i.i.i, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us, label %cond.true.i.i100.i.i.i.i.us

cond.true.i.i100.i.i.i.i.us:                      ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us
  %5 = load i8** %__data_.i21.i.i99.i.i.i.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us: ; preds = %cond.true.i.i100.i.i.i.i.us, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us
  %cond.i.i110.i.i.i.i.us = phi i8* [ %5, %cond.true.i.i100.i.i.i.i.us ], [ %arrayidx.i.i.i108.i.i.i.i, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit54.i.i.i.i.us ]
  %and.i.i.i.i.i.i.i.us = and i8 %2, 1
  %tobool.i.i.i.i.i.i.i.us = icmp eq i8 %and.i.i.i.i.i.i.i.us, 0
  br i1 %tobool.i.i.i.i.i.i.i.us, label %cond.false.i.i66.i.i.i.i.us, label %cond.true.i.i65.i.i.i.i.us

cond.true.i.i65.i.i.i.i.us:                       ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us
  %__data_.i21.i.i.i.i.i.i.us = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us, i32 1, i32 2
  %6 = load %"class.std::__1::__tree_node_base"** %__data_.i21.i.i.i.i.i.i.us, align 4
  %7 = bitcast %"class.std::__1::__tree_node_base"* %6 to i8*
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us

cond.false.i.i66.i.i.i.i.us:                      ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us
  %arrayidx.i.i.i.i.i.i.i.us = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i30.i.i.i.i.us, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us: ; preds = %cond.false.i.i66.i.i.i.i.us, %cond.true.i.i65.i.i.i.i.us
  %cond.i.i.i.i.i.i.us = phi i8* [ %7, %cond.true.i.i65.i.i.i.i.us ], [ %arrayidx.i.i.i.i.i.i.i.us, %cond.false.i.i66.i.i.i.i.us ]
  %cmp.i.i.i.i.i.i.i.us = icmp ult i32 %cond.i53.i.i.i.i.us, %shr.i.i.i.i.i.i20
  %.sroa.speculated.us = select i1 %cmp.i.i.i.i.i.i.i.us, i32 %cond.i53.i.i.i.i.us, i32 %shr.i.i.i.i.i.i20
  %call.i.i.i.i.i.us = tail call i32 @memcmp(i8* %cond.i.i110.i.i.i.i.us, i8* %cond.i.i.i.i.i.i.us, i32 %.sroa.speculated.us) nounwind readonly
  %cmp.i.i.i.i.us = icmp eq i32 %call.i.i.i.i.i.us, 0
  br i1 %cmp.i.i.i.i.us, label %if.end.i.i.i.i.us, label %if.then.i.i.i.i.us

if.then.i.i.i.i.us:                               ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us
  %phitmp.us = icmp slt i32 %call.i.i.i.i.i.us, 0
  br i1 %phitmp.us, label %if.then5.us, label %if.else12.us

if.end.i.i.i.i.us:                                ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us
  %cmp8.i.i.i.i.us = icmp ult i32 %shr.i.i.i.i.i.i20, %cond.i53.i.i.i.i.us
  br i1 %cmp8.i.i.i.i.us, label %if.then5.us, label %if.else12.us

if.else12.us:                                     ; preds = %if.end.i.i.i.i.us, %if.then.i.i.i.i.us
  %__right_.us = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us, i32 0, i32 1
  %8 = load %"class.std::__1::__tree_node_base"** %__right_.us, align 4
  %cmp15.us = icmp eq %"class.std::__1::__tree_node_base"* %8, null
  br i1 %cmp15.us, label %if.else18, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us

if.then5.us:                                      ; preds = %if.end.i.i.i.i.us, %if.then.i.i.i.i.us
  %__left_.us = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us, i32 0, i32 0, i32 0
  %9 = load %"class.std::__1::__tree_node_base"** %__left_.us, align 4
  %cmp8.us = icmp eq %"class.std::__1::__tree_node_base"* %9, null
  br i1 %cmp8.us, label %if.else, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28: ; preds = %if.then5.us64, %if.else12.us61, %while.body.preheader.while.body.preheader.split_crit_edge
  %__nd.0.in.us24 = phi %"class.std::__1::__tree_node_base"* [ %0, %while.body.preheader.while.body.preheader.split_crit_edge ], [ %17, %if.then5.us64 ], [ %16, %if.else12.us61 ]
  %__value_.us25 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us24, i32 1
  %10 = load i32* %__size_.i23.i.i.i.i.i, align 4
  %__s.i.i30.i.i.i.i.us30 = bitcast %"class.std::__1::__tree_node_base"* %__value_.us25 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i31.i.i.i.i.us31 = bitcast %"class.std::__1::__tree_node_base"* %__value_.us25 to i8*
  %11 = load i8* %__size_.i.i31.i.i.i.i.us31, align 1
  %conv.i.i32.i.i.i.i.us32 = zext i8 %11 to i32
  %and.i.i33.i.i.i.i.us33 = and i32 %conv.i.i32.i.i.i.i.us32, 1
  %tobool.i.i34.i.i.i.i.us34 = icmp eq i32 %and.i.i33.i.i.i.i.us33, 0
  br i1 %tobool.i.i34.i.i.i.i.us34, label %cond.false.i52.i.i.i.i.us37, label %cond.true.i42.i.i.i.i.us35

cond.true.i42.i.i.i.i.us35:                       ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28
  %__size_.i23.i41.i.i.i.i.us36 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us24, i32 1, i32 1
  %12 = bitcast %"class.std::__1::__tree_node_base"** %__size_.i23.i41.i.i.i.i.us36 to i32*
  %13 = load i32* %12, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us43

cond.false.i52.i.i.i.i.us37:                      ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28
  %shr.i.i51.i.i.i.i21.us38 = lshr i32 %conv.i.i32.i.i.i.i.us32, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us43

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us43: ; preds = %cond.false.i52.i.i.i.i.us37, %cond.true.i42.i.i.i.i.us35
  %cond.i53.i.i.i.i.us40 = phi i32 [ %13, %cond.true.i42.i.i.i.i.us35 ], [ %shr.i.i51.i.i.i.i21.us38, %cond.false.i52.i.i.i.i.us37 ]
  %and.i.i.i.i.i.i.i.us45 = and i8 %11, 1
  %tobool.i.i.i.i.i.i.i.us46 = icmp eq i8 %and.i.i.i.i.i.i.i.us45, 0
  br i1 %tobool.i.i.i.i.i.i.i.us46, label %cond.false.i.i66.i.i.i.i.us49, label %cond.true.i.i65.i.i.i.i.us47

cond.true.i.i65.i.i.i.i.us47:                     ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us43
  %__data_.i21.i.i.i.i.i.i.us48 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us24, i32 1, i32 2
  %14 = load %"class.std::__1::__tree_node_base"** %__data_.i21.i.i.i.i.i.i.us48, align 4
  %15 = bitcast %"class.std::__1::__tree_node_base"* %14 to i8*
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us51

cond.false.i.i66.i.i.i.i.us49:                    ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i.us43
  %arrayidx.i.i.i.i.i.i.i.us50 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i30.i.i.i.i.us30, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us51

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us51: ; preds = %cond.false.i.i66.i.i.i.i.us49, %cond.true.i.i65.i.i.i.i.us47
  %cond.i.i.i.i.i.i.us52 = phi i8* [ %15, %cond.true.i.i65.i.i.i.i.us47 ], [ %arrayidx.i.i.i.i.i.i.i.us50, %cond.false.i.i66.i.i.i.i.us49 ]
  %cmp.i.i.i.i.i.i.i.us53 = icmp ult i32 %cond.i53.i.i.i.i.us40, %10
  %.sroa.speculated.us54 = select i1 %cmp.i.i.i.i.i.i.i.us53, i32 %cond.i53.i.i.i.i.us40, i32 %10
  %call.i.i.i.i.i.us55 = tail call i32 @memcmp(i8* %arrayidx.i.i.i108.i.i.i.i, i8* %cond.i.i.i.i.i.i.us52, i32 %.sroa.speculated.us54) nounwind readonly
  %cmp.i.i.i.i.us56 = icmp eq i32 %call.i.i.i.i.i.us55, 0
  br i1 %cmp.i.i.i.i.us56, label %if.end.i.i.i.i.us59, label %if.then.i.i.i.i.us57

if.then.i.i.i.i.us57:                             ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us51
  %phitmp.us58 = icmp slt i32 %call.i.i.i.i.i.us55, 0
  br i1 %phitmp.us58, label %if.then5.us64, label %if.else12.us61

if.end.i.i.i.i.us59:                              ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i.us51
  %cmp8.i.i.i.i.us60 = icmp ult i32 %10, %cond.i53.i.i.i.i.us40
  br i1 %cmp8.i.i.i.i.us60, label %if.then5.us64, label %if.else12.us61

if.else12.us61:                                   ; preds = %if.end.i.i.i.i.us59, %if.then.i.i.i.i.us57
  %__right_.us62 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us24, i32 0, i32 1
  %16 = load %"class.std::__1::__tree_node_base"** %__right_.us62, align 4
  %cmp15.us63 = icmp eq %"class.std::__1::__tree_node_base"* %16, null
  br i1 %cmp15.us63, label %if.else18, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28

if.then5.us64:                                    ; preds = %if.end.i.i.i.i.us59, %if.then.i.i.i.i.us57
  %__left_.us65 = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in.us24, i32 0, i32 0, i32 0
  %17 = load %"class.std::__1::__tree_node_base"** %__left_.us65, align 4
  %cmp8.us66 = icmp eq %"class.std::__1::__tree_node_base"* %17, null
  br i1 %cmp8.us66, label %if.else, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i.us28

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i: ; preds = %if.else12, %if.then5, %while.body.preheader.while.body.preheader.split_crit_edge
  %__nd.0.in = phi %"class.std::__1::__tree_node_base"* [ %0, %while.body.preheader.while.body.preheader.split_crit_edge ], [ %25, %if.then5 ], [ %26, %if.else12 ]
  %__value_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in, i32 1
  %18 = load i32* %__size_.i23.i.i.i.i.i, align 4
  %__s.i.i30.i.i.i.i = bitcast %"class.std::__1::__tree_node_base"* %__value_ to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i31.i.i.i.i = bitcast %"class.std::__1::__tree_node_base"* %__value_ to i8*
  %19 = load i8* %__size_.i.i31.i.i.i.i, align 1
  %conv.i.i32.i.i.i.i = zext i8 %19 to i32
  %and.i.i33.i.i.i.i = and i32 %conv.i.i32.i.i.i.i, 1
  %tobool.i.i34.i.i.i.i = icmp eq i32 %and.i.i33.i.i.i.i, 0
  br i1 %tobool.i.i34.i.i.i.i, label %cond.false.i52.i.i.i.i, label %cond.true.i42.i.i.i.i

cond.true.i42.i.i.i.i:                            ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i
  %__size_.i23.i41.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in, i32 1, i32 1
  %20 = bitcast %"class.std::__1::__tree_node_base"** %__size_.i23.i41.i.i.i.i to i32*
  %21 = load i32* %20, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i

cond.false.i52.i.i.i.i:                           ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i
  %shr.i.i51.i.i.i.i21 = lshr i32 %conv.i.i32.i.i.i.i, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i: ; preds = %cond.false.i52.i.i.i.i, %cond.true.i42.i.i.i.i
  %cond.i53.i.i.i.i = phi i32 [ %21, %cond.true.i42.i.i.i.i ], [ %shr.i.i51.i.i.i.i21, %cond.false.i52.i.i.i.i ]
  %22 = load i8** %__data_.i21.i.i99.i.i.i.i, align 4
  %and.i.i.i.i.i.i.i = and i8 %19, 1
  %tobool.i.i.i.i.i.i.i = icmp eq i8 %and.i.i.i.i.i.i.i, 0
  br i1 %tobool.i.i.i.i.i.i.i, label %cond.false.i.i66.i.i.i.i, label %cond.true.i.i65.i.i.i.i

cond.true.i.i65.i.i.i.i:                          ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i
  %__data_.i21.i.i.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in, i32 1, i32 2
  %23 = load %"class.std::__1::__tree_node_base"** %__data_.i21.i.i.i.i.i.i, align 4
  %24 = bitcast %"class.std::__1::__tree_node_base"* %23 to i8*
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i

cond.false.i.i66.i.i.i.i:                         ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit111.i.i.i.i
  %arrayidx.i.i.i.i.i.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i30.i.i.i.i, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i: ; preds = %cond.false.i.i66.i.i.i.i, %cond.true.i.i65.i.i.i.i
  %cond.i.i.i.i.i.i = phi i8* [ %24, %cond.true.i.i65.i.i.i.i ], [ %arrayidx.i.i.i.i.i.i.i, %cond.false.i.i66.i.i.i.i ]
  %cmp.i.i.i.i.i.i.i = icmp ult i32 %cond.i53.i.i.i.i, %18
  %.sroa.speculated = select i1 %cmp.i.i.i.i.i.i.i, i32 %cond.i53.i.i.i.i, i32 %18
  %call.i.i.i.i.i = tail call i32 @memcmp(i8* %22, i8* %cond.i.i.i.i.i.i, i32 %.sroa.speculated) nounwind readonly
  %cmp.i.i.i.i = icmp eq i32 %call.i.i.i.i.i, 0
  br i1 %cmp.i.i.i.i, label %if.end.i.i.i.i, label %if.then.i.i.i.i

if.then.i.i.i.i:                                  ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i
  %phitmp = icmp slt i32 %call.i.i.i.i.i, 0
  br i1 %phitmp, label %if.then5, label %if.else12

if.end.i.i.i.i:                                   ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit.i.i.i.i
  %cmp8.i.i.i.i = icmp ult i32 %18, %cond.i53.i.i.i.i
  br i1 %cmp8.i.i.i.i, label %if.then5, label %if.else12

if.then5:                                         ; preds = %if.end.i.i.i.i, %if.then.i.i.i.i
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in, i32 0, i32 0, i32 0
  %25 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  %cmp8 = icmp eq %"class.std::__1::__tree_node_base"* %25, null
  br i1 %cmp8, label %if.else, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i

if.else:                                          ; preds = %if.then5, %if.then5.us64, %if.then5.us
  %__left_.lcssa = phi %"class.std::__1::__tree_node_base"** [ %__left_.us, %if.then5.us ], [ %__left_.us65, %if.then5.us64 ], [ %__left_, %if.then5 ]
  %__nd.0.in.lcssa22 = phi %"class.std::__1::__tree_node_base"* [ %__nd.0.in.us, %if.then5.us ], [ %__nd.0.in.us24, %if.then5.us64 ], [ %__nd.0.in, %if.then5 ]
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.lcssa22, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.else12:                                        ; preds = %if.end.i.i.i.i, %if.then.i.i.i.i
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node_base"* %__nd.0.in, i32 0, i32 1
  %26 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %cmp15 = icmp eq %"class.std::__1::__tree_node_base"* %26, null
  br i1 %cmp15, label %if.else18, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit.i.i.i.i

if.else18:                                        ; preds = %if.else12, %if.else12.us61, %if.else12.us
  %__right_.lcssa = phi %"class.std::__1::__tree_node_base"** [ %__right_.us, %if.else12.us ], [ %__right_.us62, %if.else12.us61 ], [ %__right_, %if.else12 ]
  %__nd.0.in.lcssa = phi %"class.std::__1::__tree_node_base"* [ %__nd.0.in.us, %if.else12.us ], [ %__nd.0.in.us24, %if.else12.us61 ], [ %__nd.0.in, %if.else12 ]
  store %"class.std::__1::__tree_node_base"* %__nd.0.in.lcssa, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

if.end22:                                         ; preds = %entry
  %27 = bitcast %"class.std::__1::__tree_end_node"* %__first_.i.i.i.i to %"class.std::__1::__tree_node_base"*
  store %"class.std::__1::__tree_node_base"* %27, %"class.std::__1::__tree_node_base"** %__parent, align 4
  br label %return

return:                                           ; preds = %if.end22, %if.else18, %if.else
  %retval.0 = phi %"class.std::__1::__tree_node_base"** [ %__left_.lcssa, %if.else ], [ %__right_.lcssa, %if.else18 ], [ %__left_.i, %if.end22 ]
  ret %"class.std::__1::__tree_node_base"** %retval.0
}

declare i32 @memcmp(i8* nocapture, i8* nocapture, i32) nounwind readonly

declare void @_ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv(%"class.std::__1::__basic_string_common"*)

declare void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"*, i8**)

declare void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"*)

define linkonce_odr void @_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev(%"class.std::__1::basic_ostringstream"* %this) unnamed_addr inlinehint align 2 {
entry:
  %0 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %0, align 4
  %1 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %1, align 4
  %__sb_.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 1
  %2 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i.i, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %2, align 4
  %__str_.i.i.i.i = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 1, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i.i.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i unwind label %lpad.i.i.i.i

lpad.i.i.i.i:                                     ; preds = %entry
  %3 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %4 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i.i, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %lpad.body.i.i unwind label %terminate.lpad.i.i.i.i

terminate.lpad.i.i.i.i:                           ; preds = %lpad.i.i.i.i
  %5 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i: ; preds = %entry
  %6 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %__sb_.i.i, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %6)
          to label %invoke.cont.i.i unwind label %lpad.i.i

invoke.cont.i.i:                                  ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  %7 = bitcast %"class.std::__1::basic_ostringstream"* %this to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %7, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %invoke.cont.i unwind label %lpad.i

lpad.i.i:                                         ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  %8 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i.i

lpad.body.i.i:                                    ; preds = %lpad.i.i, %lpad.i.i.i.i
  %eh.lpad-body.i.i = phi { i8*, i32 } [ %8, %lpad.i.i ], [ %3, %lpad.i.i.i.i ]
  %9 = bitcast %"class.std::__1::basic_ostringstream"* %this to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %9, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body.i unwind label %terminate.lpad.i.i

terminate.lpad.i.i:                               ; preds = %lpad.body.i.i
  %10 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont.i:                                    ; preds = %invoke.cont.i.i
  %11 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %11)
          to label %invoke.cont unwind label %lpad

lpad.i:                                           ; preds = %invoke.cont.i.i
  %12 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i, %lpad.body.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %12, %lpad.i ], [ %eh.lpad-body.i.i, %lpad.body.i.i ]
  %13 = getelementptr inbounds %"class.std::__1::basic_ostringstream"* %this, i32 0, i32 2
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %13)
          to label %lpad.body unwind label %terminate.lpad.i

terminate.lpad.i:                                 ; preds = %lpad.body.i
  %14 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont:                                      ; preds = %invoke.cont.i
  %15 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8*
  tail call void @_ZdlPv(i8* %15) nounwind
  ret void

lpad:                                             ; preds = %invoke.cont.i
  %16 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body

lpad.body:                                        ; preds = %lpad, %lpad.body.i
  %eh.lpad-body = phi { i8*, i32 } [ %16, %lpad ], [ %eh.lpad-body.i, %lpad.body.i ]
  %17 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8*
  tail call void @_ZdlPv(i8* %17) nounwind
  resume { i8*, i32 } %eh.lpad-body
}

define linkonce_odr void @_ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_ostringstream"* %this) unnamed_addr align 2 {
entry:
  %0 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8*
  %1 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8**
  %2 = load i8** %1, align 4
  %3 = getelementptr inbounds i8* %2, i32 -12
  %4 = bitcast i8* %3 to i32*
  %5 = load i32* %4, align 4
  %6 = getelementptr inbounds i8* %0, i32 %5
  %7 = bitcast i8* %6 to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %7, align 4
  %.sum = add i32 %5, 56
  %8 = getelementptr inbounds i8* %0, i32 %.sum
  %9 = bitcast i8* %8 to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %9, align 4
  %.sum1 = add i32 %5, 4
  %__sb_.i.i = getelementptr inbounds i8* %0, i32 %.sum1
  %10 = bitcast i8* %__sb_.i.i to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %10, align 4
  %.sum2 = add i32 %5, 36
  %__str_.i.i.i.i = getelementptr inbounds i8* %0, i32 %.sum2
  %11 = bitcast i8* %__str_.i.i.i.i to %"class.std::__1::basic_string"*
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %11)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i unwind label %lpad.i.i.i.i

lpad.i.i.i.i:                                     ; preds = %entry
  %12 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %13 = bitcast i8* %__sb_.i.i to %"class.std::__1::basic_streambuf"*
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %13)
          to label %lpad.body.i.i unwind label %terminate.lpad.i.i.i.i

terminate.lpad.i.i.i.i:                           ; preds = %lpad.i.i.i.i
  %14 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i: ; preds = %entry
  %15 = bitcast i8* %__sb_.i.i to %"class.std::__1::basic_streambuf"*
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %15)
          to label %invoke.cont.i.i unwind label %lpad.i.i

invoke.cont.i.i:                                  ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  %16 = bitcast i8* %6 to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %16, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev.exit unwind label %lpad.i

lpad.i.i:                                         ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i
  %17 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i.i

lpad.body.i.i:                                    ; preds = %lpad.i.i, %lpad.i.i.i.i
  %eh.lpad-body.i.i = phi { i8*, i32 } [ %17, %lpad.i.i ], [ %12, %lpad.i.i.i.i ]
  %18 = bitcast i8* %6 to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %18, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body.i unwind label %terminate.lpad.i.i

terminate.lpad.i.i:                               ; preds = %lpad.body.i.i
  %19 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

lpad.i:                                           ; preds = %invoke.cont.i.i
  %20 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i, %lpad.body.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %20, %lpad.i ], [ %eh.lpad-body.i.i, %lpad.body.i.i ]
  %21 = bitcast i8* %8 to %"class.std::__1::basic_ios"*
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %21)
          to label %eh.resume.i unwind label %terminate.lpad.i

eh.resume.i:                                      ; preds = %lpad.body.i
  resume { i8*, i32 } %eh.lpad-body.i

terminate.lpad.i:                                 ; preds = %lpad.body.i
  %22 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev.exit: ; preds = %invoke.cont.i.i
  %23 = bitcast i8* %8 to %"class.std::__1::basic_ios"*
  tail call void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %23)
  ret void
}

define linkonce_odr void @_ZTv0_n12_NSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev(%"class.std::__1::basic_ostringstream"* %this) unnamed_addr align 2 {
entry:
  %0 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8*
  %1 = bitcast %"class.std::__1::basic_ostringstream"* %this to i8**
  %2 = load i8** %1, align 4
  %3 = getelementptr inbounds i8* %2, i32 -12
  %4 = bitcast i8* %3 to i32*
  %5 = load i32* %4, align 4
  %6 = getelementptr inbounds i8* %0, i32 %5
  %7 = bitcast i8* %6 to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 3) to i32 (...)**), i32 (...)*** %7, align 4
  %.sum = add i32 %5, 56
  %8 = getelementptr inbounds i8* %0, i32 %.sum
  %9 = bitcast i8* %8 to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([10 x i8*]* @_ZTVNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 8) to i32 (...)**), i32 (...)*** %9, align 4
  %.sum1 = add i32 %5, 4
  %__sb_.i.i.i = getelementptr inbounds i8* %0, i32 %.sum1
  %10 = bitcast i8* %__sb_.i.i.i to i32 (...)***
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %10, align 4
  %.sum2 = add i32 %5, 36
  %__str_.i.i.i.i.i = getelementptr inbounds i8* %0, i32 %.sum2
  %11 = bitcast i8* %__str_.i.i.i.i.i to %"class.std::__1::basic_string"*
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %11)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i.i unwind label %lpad.i.i.i.i.i

lpad.i.i.i.i.i:                                   ; preds = %entry
  %12 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %13 = bitcast i8* %__sb_.i.i.i to %"class.std::__1::basic_streambuf"*
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %13)
          to label %lpad.body.i.i.i unwind label %terminate.lpad.i.i.i.i.i

terminate.lpad.i.i.i.i.i:                         ; preds = %lpad.i.i.i.i.i
  %14 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i.i: ; preds = %entry
  %15 = bitcast i8* %__sb_.i.i.i to %"class.std::__1::basic_streambuf"*
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %15)
          to label %invoke.cont.i.i.i unwind label %lpad.i.i.i

invoke.cont.i.i.i:                                ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i.i
  %16 = bitcast i8* %6 to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %16, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %invoke.cont.i.i unwind label %lpad.i.i

lpad.i.i.i:                                       ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i.i.i.i
  %17 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i.i.i

lpad.body.i.i.i:                                  ; preds = %lpad.i.i.i, %lpad.i.i.i.i.i
  %eh.lpad-body.i.i.i = phi { i8*, i32 } [ %17, %lpad.i.i.i ], [ %12, %lpad.i.i.i.i.i ]
  %18 = bitcast i8* %6 to %"class.std::__1::basic_ostream"*
  invoke void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ostream"* %18, i8** getelementptr inbounds ([4 x i8*]* @_ZTTNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 1))
          to label %lpad.body.i.i unwind label %terminate.lpad.i.i.i

terminate.lpad.i.i.i:                             ; preds = %lpad.body.i.i.i
  %19 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

invoke.cont.i.i:                                  ; preds = %invoke.cont.i.i.i
  %20 = bitcast i8* %8 to %"class.std::__1::basic_ios"*
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %20)
          to label %_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev.exit unwind label %lpad.i

lpad.i.i:                                         ; preds = %invoke.cont.i.i.i
  %21 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i.i

lpad.body.i.i:                                    ; preds = %lpad.i.i, %lpad.body.i.i.i
  %eh.lpad-body.i.i = phi { i8*, i32 } [ %21, %lpad.i.i ], [ %eh.lpad-body.i.i.i, %lpad.body.i.i.i ]
  %22 = bitcast i8* %8 to %"class.std::__1::basic_ios"*
  invoke void @_ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_ios"* %22)
          to label %lpad.body.i unwind label %terminate.lpad.i.i

terminate.lpad.i.i:                               ; preds = %lpad.body.i.i
  %23 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

lpad.i:                                           ; preds = %invoke.cont.i.i
  %24 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body.i

lpad.body.i:                                      ; preds = %lpad.i, %lpad.body.i.i
  %eh.lpad-body.i = phi { i8*, i32 } [ %24, %lpad.i ], [ %eh.lpad-body.i.i, %lpad.body.i.i ]
  tail call void @_ZdlPv(i8* %6) nounwind
  resume { i8*, i32 } %eh.lpad-body.i

_ZNSt3__119basic_ostringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev.exit: ; preds = %invoke.cont.i.i
  tail call void @_ZdlPv(i8* %6) nounwind
  ret void
}

declare void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev(%"class.std::__1::basic_ostream"*)

declare void @_ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev(%"class.std::__1::basic_ostream"*)

declare void @_ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev(%"class.std::__1::basic_ostream"*)

declare void @_ZTv0_n12_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev(%"class.std::__1::basic_ostream"*)

define linkonce_odr void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_stringbuf"* %this) unnamed_addr inlinehint align 2 {
entry:
  %0 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %0, align 4
  %__str_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit unwind label %lpad.i

lpad.i:                                           ; preds = %entry
  %1 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %2 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %2)
          to label %eh.resume.i unwind label %terminate.lpad.i

eh.resume.i:                                      ; preds = %lpad.i
  resume { i8*, i32 } %1

terminate.lpad.i:                                 ; preds = %lpad.i
  %3 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit: ; preds = %entry
  %4 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0
  tail call void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
  ret void
}

declare void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"*)

define linkonce_odr void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev(%"class.std::__1::basic_stringbuf"* %this) unnamed_addr inlinehint align 2 {
entry:
  %0 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 0
  store i32 (...)** bitcast (i8** getelementptr inbounds ([16 x i8*]* @_ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE, i32 0, i32 2) to i32 (...)**), i32 (...)*** %0, align 4
  %__str_.i.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %__str_.i.i)
          to label %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i unwind label %lpad.i.i

lpad.i.i:                                         ; preds = %entry
  %1 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  %2 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %2)
          to label %lpad.body unwind label %terminate.lpad.i.i

terminate.lpad.i.i:                               ; preds = %lpad.i.i
  %3 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i: ; preds = %entry
  %4 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0
  invoke void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev(%"class.std::__1::basic_streambuf"* %4)
          to label %invoke.cont unwind label %lpad

invoke.cont:                                      ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i
  %5 = bitcast %"class.std::__1::basic_stringbuf"* %this to i8*
  tail call void @_ZdlPv(i8* %5) nounwind
  ret void

lpad:                                             ; preds = %_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev.exit.i
  %6 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          cleanup
  br label %lpad.body

lpad.body:                                        ; preds = %lpad, %lpad.i.i
  %eh.lpad-body = phi { i8*, i32 } [ %6, %lpad ], [ %1, %lpad.i.i ]
  %7 = bitcast %"class.std::__1::basic_stringbuf"* %this to i8*
  tail call void @_ZdlPv(i8* %7) nounwind
  resume { i8*, i32 } %eh.lpad-body
}

declare void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE(%"class.std::__1::basic_streambuf"*, %"class.std::__1::locale"*)

declare %"class.std::__1::basic_streambuf"* @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPci(%"class.std::__1::basic_streambuf"*, i8*, i32)

define linkonce_odr void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj(%"class.std::__1::fpos"* noalias nocapture sret %agg.result, %"class.std::__1::basic_stringbuf"* %this, i64 %__off, i32 %__way, i32 %__wch) unnamed_addr nounwind align 2 {
entry:
  %__hm_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %0 = load i8** %__hm_, align 4
  %__nout_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 6
  %1 = load i8** %__nout_.i, align 4
  %cmp = icmp ult i8* %0, %1
  br i1 %cmp, label %if.then, label %if.end

if.then:                                          ; preds = %entry
  store i8* %1, i8** %__hm_, align 4
  br label %if.end

if.end:                                           ; preds = %if.then, %entry
  %2 = phi i8* [ %1, %if.then ], [ %0, %entry ]
  %and = and i32 %__wch, 24
  switch i32 %and, label %if.end11 [
    i32 0, label %if.then5
    i32 24, label %land.lhs.true
  ]

if.then5:                                         ; preds = %if.end
  %3 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %3, align 8
  %__off_.i.i209 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i209, align 8
  br label %return

land.lhs.true:                                    ; preds = %if.end
  switch i32 %__way, label %sw.default [
    i32 1, label %if.then10
    i32 0, label %sw.epilog
    i32 2, label %sw.bb24
  ]

if.then10:                                        ; preds = %land.lhs.true
  %4 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %4, align 8
  %__off_.i.i201 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i201, align 8
  br label %return

if.end11:                                         ; preds = %if.end
  switch i32 %__way, label %sw.default [
    i32 0, label %sw.epilog
    i32 1, label %sw.bb12
    i32 2, label %sw.bb24
  ]

sw.bb12:                                          ; preds = %if.end11
  %and13 = and i32 %__wch, 8
  %tobool = icmp eq i32 %and13, 0
  br i1 %tobool, label %if.else, label %if.then14

if.then14:                                        ; preds = %sw.bb12
  %__ninp_.i193 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  %5 = load i8** %__ninp_.i193, align 4
  %__binp_.i190 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 2
  %6 = load i8** %__binp_.i190, align 4
  %sub.ptr.lhs.cast = ptrtoint i8* %5 to i32
  %sub.ptr.rhs.cast = ptrtoint i8* %6 to i32
  %sub.ptr.sub = sub i32 %sub.ptr.lhs.cast, %sub.ptr.rhs.cast
  %conv = sext i32 %sub.ptr.sub to i64
  br label %sw.epilog

if.else:                                          ; preds = %sw.bb12
  %__bout_.i184 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 5
  %7 = load i8** %__bout_.i184, align 4
  %sub.ptr.lhs.cast19 = ptrtoint i8* %1 to i32
  %sub.ptr.rhs.cast20 = ptrtoint i8* %7 to i32
  %sub.ptr.sub21 = sub i32 %sub.ptr.lhs.cast19, %sub.ptr.rhs.cast20
  %conv22 = sext i32 %sub.ptr.sub21 to i64
  br label %sw.epilog

sw.bb24:                                          ; preds = %if.end11, %land.lhs.true
  %8 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0
  %__size_.i.i.i159 = bitcast %union.anon* %8 to i8*
  %9 = load i8* %__size_.i.i.i159, align 1
  %and.i.i.i161 = and i8 %9, 1
  %tobool.i.i.i162 = icmp eq i8 %and.i.i.i161, 0
  br i1 %tobool.i.i.i162, label %cond.false.i.i179, label %cond.true.i.i170

cond.true.i.i170:                                 ; preds = %sw.bb24
  %__data_.i21.i.i169 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %10 = load i8** %__data_.i21.i.i169, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit181

cond.false.i.i179:                                ; preds = %sw.bb24
  %__s.i.i.i158 = bitcast %union.anon* %8 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %arrayidx.i.i.i178 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i158, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit181

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit181: ; preds = %cond.false.i.i179, %cond.true.i.i170
  %cond.i.i180 = phi i8* [ %10, %cond.true.i.i170 ], [ %arrayidx.i.i.i178, %cond.false.i.i179 ]
  %sub.ptr.lhs.cast27 = ptrtoint i8* %2 to i32
  %sub.ptr.rhs.cast28 = ptrtoint i8* %cond.i.i180 to i32
  %sub.ptr.sub29 = sub i32 %sub.ptr.lhs.cast27, %sub.ptr.rhs.cast28
  %conv30 = sext i32 %sub.ptr.sub29 to i64
  br label %sw.epilog

sw.default:                                       ; preds = %if.end11, %land.lhs.true
  %11 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %11, align 8
  %__off_.i.i136 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i136, align 8
  br label %return

sw.epilog:                                        ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit181, %if.else, %if.then14, %if.end11, %land.lhs.true
  %__noff.0 = phi i64 [ %conv30, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit181 ], [ %conv, %if.then14 ], [ %conv22, %if.else ], [ 0, %land.lhs.true ], [ 0, %if.end11 ]
  %add = add nsw i64 %__noff.0, %__off
  %cmp31 = icmp slt i64 %add, 0
  br i1 %cmp31, label %if.then40, label %lor.lhs.false

lor.lhs.false:                                    ; preds = %sw.epilog
  %12 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0
  %__size_.i.i.i = bitcast %union.anon* %12 to i8*
  %13 = load i8* %__size_.i.i.i, align 1
  %and.i.i.i = and i8 %13, 1
  %tobool.i.i.i = icmp eq i8 %and.i.i.i, 0
  br i1 %tobool.i.i.i, label %cond.false.i.i, label %cond.true.i.i

cond.true.i.i:                                    ; preds = %lor.lhs.false
  %__data_.i21.i.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %14 = load i8** %__data_.i21.i.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

cond.false.i.i:                                   ; preds = %lor.lhs.false
  %__s.i.i.i = bitcast %union.anon* %12 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %arrayidx.i.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit: ; preds = %cond.false.i.i, %cond.true.i.i
  %cond.i.i = phi i8* [ %14, %cond.true.i.i ], [ %arrayidx.i.i.i, %cond.false.i.i ]
  %sub.ptr.lhs.cast35 = ptrtoint i8* %2 to i32
  %sub.ptr.rhs.cast36 = ptrtoint i8* %cond.i.i to i32
  %sub.ptr.sub37 = sub i32 %sub.ptr.lhs.cast35, %sub.ptr.rhs.cast36
  %conv38 = sext i32 %sub.ptr.sub37 to i64
  %cmp39 = icmp slt i64 %conv38, %add
  br i1 %cmp39, label %if.then40, label %if.end41

if.then40:                                        ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit, %sw.epilog
  %15 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %15, align 8
  %__off_.i.i124 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i124, align 8
  br label %return

if.end41:                                         ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit
  %cmp42 = icmp eq i64 %add, 0
  %and59.pre = and i32 %__wch, 8
  br i1 %cmp42, label %if.end58, label %if.then43

if.then43:                                        ; preds = %if.end41
  %tobool45 = icmp eq i32 %and59.pre, 0
  br i1 %tobool45, label %if.end50, label %land.lhs.true46

land.lhs.true46:                                  ; preds = %if.then43
  %__ninp_.i116 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  %16 = load i8** %__ninp_.i116, align 4
  %cmp48 = icmp eq i8* %16, null
  br i1 %cmp48, label %if.then49, label %if.end50

if.then49:                                        ; preds = %land.lhs.true46
  %17 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %17, align 8
  %__off_.i.i113 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i113, align 8
  br label %return

if.end50:                                         ; preds = %land.lhs.true46, %if.then43
  %and51 = and i32 %__wch, 16
  %tobool52 = icmp ne i32 %and51, 0
  %cmp55 = icmp eq i8* %1, null
  %or.cond = and i1 %tobool52, %cmp55
  br i1 %or.cond, label %if.then56, label %if.end58

if.then56:                                        ; preds = %if.end50
  %18 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %18, align 8
  %__off_.i.i102 = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 -1, i64* %__off_.i.i102, align 8
  br label %return

if.end58:                                         ; preds = %if.end50, %if.end41
  %tobool60 = icmp eq i32 %and59.pre, 0
  br i1 %tobool60, label %if.end65, label %if.then61

if.then61:                                        ; preds = %if.end58
  %__binp_.i94 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 2
  %19 = load i8** %__binp_.i94, align 4
  %idx.ext = trunc i64 %add to i32
  %add.ptr = getelementptr inbounds i8* %19, i32 %idx.ext
  %__ninp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  store i8* %add.ptr, i8** %__ninp_.i, align 4
  %__einp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  store i8* %2, i8** %__einp_.i, align 4
  br label %if.end65

if.end65:                                         ; preds = %if.then61, %if.end58
  %and66 = and i32 %__wch, 16
  %tobool67 = icmp eq i32 %and66, 0
  br i1 %tobool67, label %if.end72, label %if.then68

if.then68:                                        ; preds = %if.end65
  %__bout_.i86 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 5
  %20 = load i8** %__bout_.i86, align 4
  %conv71 = trunc i64 %add to i32
  %add.ptr.i = getelementptr inbounds i8* %20, i32 %conv71
  store i8* %add.ptr.i, i8** %__nout_.i, align 4
  br label %if.end72

if.end72:                                         ; preds = %if.then68, %if.end65
  %21 = bitcast %"class.std::__1::fpos"* %agg.result to i64*
  store i64 0, i64* %21, align 8
  %__off_.i.i = getelementptr inbounds %"class.std::__1::fpos"* %agg.result, i32 0, i32 1
  store i64 %add, i64* %__off_.i.i, align 8
  br label %return

return:                                           ; preds = %if.end72, %if.then56, %if.then49, %if.then40, %sw.default, %if.then10, %if.then5
  ret void
}

define linkonce_odr void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj(%"class.std::__1::fpos"* noalias sret %agg.result, %"class.std::__1::basic_stringbuf"* %this, %"class.std::__1::fpos"* nocapture byval %__sp, i32 %__wch) unnamed_addr alwaysinline align 2 {
entry:
  %0 = bitcast %"class.std::__1::basic_stringbuf"* %this to void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, i64, i32, i32)***
  %vtable = load void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, i64, i32, i32)*** %0, align 4
  %vfn = getelementptr inbounds void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, i64, i32, i32)** %vtable, i32 4
  %1 = load void (%"class.std::__1::fpos"*, %"class.std::__1::basic_stringbuf"*, i64, i32, i32)** %vfn, align 4
  %__off_.i = getelementptr inbounds %"class.std::__1::fpos"* %__sp, i32 0, i32 1
  %2 = load i64* %__off_.i, align 8
  tail call void %1(%"class.std::__1::fpos"* sret %agg.result, %"class.std::__1::basic_stringbuf"* %this, i64 %2, i32 0, i32 %__wch)
  ret void
}

declare i32 @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv(%"class.std::__1::basic_streambuf"*)

declare i32 @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv(%"class.std::__1::basic_streambuf"*)

declare i32 @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPci(%"class.std::__1::basic_streambuf"*, i8*, i32)

define linkonce_odr i32 @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv(%"class.std::__1::basic_stringbuf"* nocapture %this) unnamed_addr nounwind align 2 {
entry:
  %__hm_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %0 = load i8** %__hm_, align 4
  %__nout_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 6
  %1 = load i8** %__nout_.i, align 4
  %cmp = icmp ult i8* %0, %1
  br i1 %cmp, label %if.then, label %if.end

if.then:                                          ; preds = %entry
  store i8* %1, i8** %__hm_, align 4
  br label %if.end

if.end:                                           ; preds = %if.then, %entry
  %2 = phi i8* [ %1, %if.then ], [ %0, %entry ]
  %__mode_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 3
  %3 = load i32* %__mode_, align 4
  %and = and i32 %3, 8
  %tobool = icmp eq i32 %and, 0
  br i1 %tobool, label %return, label %if.then4

if.then4:                                         ; preds = %if.end
  %__einp_.i41 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  %4 = load i8** %__einp_.i41, align 4
  %cmp7 = icmp ult i8* %4, %2
  %__ninp_.i35 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  %5 = load i8** %__ninp_.i35, align 4
  br i1 %cmp7, label %if.then8, label %if.end12

if.then8:                                         ; preds = %if.then4
  store i8* %2, i8** %__einp_.i41, align 4
  br label %if.end12

if.end12:                                         ; preds = %if.then8, %if.then4
  %6 = phi i8* [ %2, %if.then8 ], [ %4, %if.then4 ]
  %cmp15 = icmp ult i8* %5, %6
  br i1 %cmp15, label %if.then16, label %return

if.then16:                                        ; preds = %if.end12
  %7 = load i8* %5, align 1
  %conv.i = zext i8 %7 to i32
  br label %return

return:                                           ; preds = %if.then16, %if.end12, %if.end
  %retval.0 = phi i32 [ %conv.i, %if.then16 ], [ -1, %if.end ], [ -1, %if.end12 ]
  ret i32 %retval.0
}

declare i32 @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv(%"class.std::__1::basic_streambuf"*)

define linkonce_odr i32 @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi(%"class.std::__1::basic_stringbuf"* nocapture %this, i32 %__c) unnamed_addr nounwind align 2 {
entry:
  %__hm_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %0 = load i8** %__hm_, align 4
  %__nout_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 6
  %1 = load i8** %__nout_.i, align 4
  %cmp = icmp ult i8* %0, %1
  br i1 %cmp, label %if.then, label %if.end

if.then:                                          ; preds = %entry
  store i8* %1, i8** %__hm_, align 4
  br label %if.end

if.end:                                           ; preds = %if.then, %entry
  %2 = phi i8* [ %1, %if.then ], [ %0, %entry ]
  %__binp_.i69 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 2
  %3 = load i8** %__binp_.i69, align 4
  %__ninp_.i66 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  %4 = load i8** %__ninp_.i66, align 4
  %cmp6 = icmp ult i8* %3, %4
  br i1 %cmp6, label %if.then7, label %return

if.then7:                                         ; preds = %if.end
  %cmp.i63 = icmp eq i32 %__c, -1
  br i1 %cmp.i63, label %if.then10, label %if.end15

if.then10:                                        ; preds = %if.then7
  %add.ptr = getelementptr inbounds i8* %4, i32 -1
  store i8* %3, i8** %__binp_.i69, align 4
  store i8* %add.ptr, i8** %__ninp_.i66, align 4
  %__einp_.i54 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  store i8* %2, i8** %__einp_.i54, align 4
  br label %return

if.end15:                                         ; preds = %if.then7
  %__mode_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 3
  %5 = load i32* %__mode_, align 4
  %and = and i32 %5, 16
  %tobool = icmp eq i32 %and, 0
  %arrayidx = getelementptr inbounds i8* %4, i32 -1
  br i1 %tobool, label %lor.lhs.false, label %if.then19

lor.lhs.false:                                    ; preds = %if.end15
  %6 = load i8* %arrayidx, align 1
  %sext = shl i32 %__c, 24
  %conv.i40 = ashr exact i32 %sext, 24
  %conv1.i = sext i8 %6 to i32
  %cmp.i = icmp eq i32 %conv.i40, %conv1.i
  br i1 %cmp.i, label %if.then19, label %return

if.then19:                                        ; preds = %lor.lhs.false, %if.end15
  store i8* %3, i8** %__binp_.i69, align 4
  store i8* %arrayidx, i8** %__ninp_.i66, align 4
  %__einp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  store i8* %2, i8** %__einp_.i, align 4
  %conv.i = trunc i32 %__c to i8
  store i8 %conv.i, i8* %arrayidx, align 1
  br label %return

return:                                           ; preds = %if.then19, %lor.lhs.false, %if.then10, %if.end
  %retval.0 = phi i32 [ 0, %if.then10 ], [ %__c, %if.then19 ], [ -1, %lor.lhs.false ], [ -1, %if.end ]
  ret i32 %retval.0
}

declare i32 @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKci(%"class.std::__1::basic_streambuf"*, i8*, i32)

define linkonce_odr i32 @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi(%"class.std::__1::basic_stringbuf"* %this, i32 %__c) unnamed_addr align 2 {
entry:
  %cmp.i57 = icmp eq i32 %__c, -1
  br i1 %cmp.i57, label %return, label %if.then

if.then:                                          ; preds = %entry
  %0 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0
  %__ninp_.i141 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  %1 = load i8** %__ninp_.i141, align 4
  %__binp_.i178 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 2
  %2 = load i8** %__binp_.i178, align 4
  %sub.ptr.lhs.cast = ptrtoint i8* %1 to i32
  %sub.ptr.rhs.cast = ptrtoint i8* %2 to i32
  %sub.ptr.sub = sub i32 %sub.ptr.lhs.cast, %sub.ptr.rhs.cast
  %__nout_.i175 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 6
  %3 = load i8** %__nout_.i175, align 4
  %__eout_.i172 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 7
  %4 = load i8** %__eout_.i172, align 4
  %cmp = icmp eq i8* %3, %4
  br i1 %cmp, label %if.then7, label %if.then.if.end37_crit_edge

if.then.if.end37_crit_edge:                       ; preds = %if.then
  %__hm_40.phi.trans.insert = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %.pre = load i8** %__hm_40.phi.trans.insert, align 4
  %__mode_43.pre = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 3
  br label %if.end37

if.then7:                                         ; preds = %if.then
  %__mode_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 3
  %5 = load i32* %__mode_, align 4
  %and = and i32 %5, 16
  %tobool = icmp eq i32 %and, 0
  br i1 %tobool, label %return, label %if.end

if.end:                                           ; preds = %if.then7
  %__bout_.i166 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 5
  %6 = load i8** %__bout_.i166, align 4
  %sub.ptr.lhs.cast13 = ptrtoint i8* %3 to i32
  %sub.ptr.rhs.cast14 = ptrtoint i8* %6 to i32
  %sub.ptr.sub15 = sub i32 %sub.ptr.lhs.cast13, %sub.ptr.rhs.cast14
  %__hm_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %7 = load i8** %__hm_, align 4
  %sub.ptr.lhs.cast18 = ptrtoint i8* %7 to i32
  %sub.ptr.sub20 = sub i32 %sub.ptr.lhs.cast18, %sub.ptr.rhs.cast14
  %__str_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc(%"class.std::__1::basic_string"* %__str_, i8 signext 0)
          to label %invoke.cont21 unwind label %lpad

invoke.cont21:                                    ; preds = %if.end
  %__s.i.i152 = bitcast %"class.std::__1::basic_string"* %__str_ to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i153 = bitcast %"class.std::__1::basic_string"* %__str_ to i8*
  %8 = load i8* %__size_.i.i153, align 1
  %and.i.i155 = and i8 %8, 1
  %tobool.i.i156 = icmp eq i8 %and.i.i155, 0
  br i1 %tobool.i.i156, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit, label %cond.true.i158

cond.true.i158:                                   ; preds = %invoke.cont21
  %__cap_.i.i = getelementptr inbounds %"class.std::__1::basic_string"* %__str_, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0
  %9 = load i32* %__cap_.i.i, align 4
  %and.i11.i = and i32 %9, -2
  %phitmp = add i32 %and.i11.i, -1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit: ; preds = %cond.true.i158, %invoke.cont21
  %cond.i160 = phi i32 [ %phitmp, %cond.true.i158 ], [ 10, %invoke.cont21 ]
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(%"class.std::__1::basic_string"* %__str_, i32 %cond.i160, i8 signext 0)
          to label %invoke.cont25 unwind label %lpad

invoke.cont25:                                    ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit
  %10 = load i8* %__size_.i.i153, align 1
  %and.i.i.i115 = and i8 %10, 1
  %tobool.i.i.i116 = icmp eq i8 %and.i.i.i115, 0
  br i1 %tobool.i.i.i116, label %cond.false.i.i133, label %cond.true.i.i124

cond.true.i.i124:                                 ; preds = %invoke.cont25
  %__data_.i21.i.i123 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %11 = load i8** %__data_.i21.i.i123, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit135

cond.false.i.i133:                                ; preds = %invoke.cont25
  %arrayidx.i.i.i132 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i152, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit135

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit135: ; preds = %cond.false.i.i133, %cond.true.i.i124
  %cond.i.i134 = phi i8* [ %11, %cond.true.i.i124 ], [ %arrayidx.i.i.i132, %cond.false.i.i133 ]
  %conv.i.i87 = zext i8 %10 to i32
  %and.i.i = and i32 %conv.i.i87, 1
  %tobool.i.i = icmp eq i32 %and.i.i, 0
  br i1 %tobool.i.i, label %cond.false.i89, label %cond.true.i88

cond.true.i88:                                    ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit135
  %__size_.i23.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  %12 = load i32* %__size_.i23.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit

cond.false.i89:                                   ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit135
  %shr.i.i11 = lshr i32 %conv.i.i87, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit: ; preds = %cond.false.i89, %cond.true.i88
  %cond.i90 = phi i32 [ %12, %cond.true.i88 ], [ %shr.i.i11, %cond.false.i89 ]
  %add.ptr = getelementptr inbounds i8* %cond.i.i134, i32 %cond.i90
  store i8* %cond.i.i134, i8** %__bout_.i166, align 4
  store i8* %add.ptr, i8** %__eout_.i172, align 4
  %add.ptr.i = getelementptr inbounds i8* %cond.i.i134, i32 %sub.ptr.sub15
  store i8* %add.ptr.i, i8** %__nout_.i175, align 4
  %add.ptr34 = getelementptr inbounds i8* %cond.i.i134, i32 %sub.ptr.sub20
  store i8* %add.ptr34, i8** %__hm_, align 4
  br label %if.end37

lpad:                                             ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit, %if.end
  %13 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  %14 = extractvalue { i8*, i32 } %13, 0
  %15 = tail call i8* @__cxa_begin_catch(i8* %14) nounwind
  tail call void @__cxa_end_catch()
  br label %return

if.end37:                                         ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit, %if.then.if.end37_crit_edge
  %__mode_43.pre-phi = phi i32* [ %__mode_43.pre, %if.then.if.end37_crit_edge ], [ %__mode_, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit ]
  %16 = phi i8* [ %.pre, %if.then.if.end37_crit_edge ], [ %add.ptr34, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit ]
  %17 = phi i8* [ %4, %if.then.if.end37_crit_edge ], [ %add.ptr, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit ]
  %18 = phi i8* [ %3, %if.then.if.end37_crit_edge ], [ %add.ptr.i, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit ]
  %add.ptr39 = getelementptr inbounds i8* %18, i32 1
  %__hm_40 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  %cmp.i.i.i = icmp ult i8* %add.ptr39, %16
  %.sroa.speculated = select i1 %cmp.i.i.i, i8* %16, i8* %add.ptr39
  store i8* %.sroa.speculated, i8** %__hm_40, align 4
  %19 = load i32* %__mode_43.pre-phi, align 4
  %and44 = and i32 %19, 8
  %tobool45 = icmp eq i32 %and44, 0
  br i1 %tobool45, label %if.end52, label %if.then46

if.then46:                                        ; preds = %if.end37
  %20 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0
  %__size_.i.i.i = bitcast %union.anon* %20 to i8*
  %21 = load i8* %__size_.i.i.i, align 1
  %and.i.i.i = and i8 %21, 1
  %tobool.i.i.i = icmp eq i8 %and.i.i.i, 0
  br i1 %tobool.i.i.i, label %cond.false.i.i, label %cond.true.i.i

cond.true.i.i:                                    ; preds = %if.then46
  %__data_.i21.i.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %22 = load i8** %__data_.i21.i.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

cond.false.i.i:                                   ; preds = %if.then46
  %__s.i.i.i = bitcast %union.anon* %20 to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %arrayidx.i.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit: ; preds = %cond.false.i.i, %cond.true.i.i
  %cond.i.i = phi i8* [ %22, %cond.true.i.i ], [ %arrayidx.i.i.i, %cond.false.i.i ]
  %add.ptr50 = getelementptr inbounds i8* %cond.i.i, i32 %sub.ptr.sub
  store i8* %cond.i.i, i8** %__binp_.i178, align 4
  store i8* %add.ptr50, i8** %__ninp_.i141, align 4
  %__einp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  store i8* %.sroa.speculated, i8** %__einp_.i, align 4
  br label %if.end52

if.end52:                                         ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit, %if.end37
  %cmp.i = icmp eq i8* %18, %17
  br i1 %cmp.i, label %if.then.i, label %if.end.i

if.then.i:                                        ; preds = %if.end52
  %23 = bitcast %"class.std::__1::basic_stringbuf"* %this to i32 (%"class.std::__1::basic_streambuf"*, i32)***
  %vtable.i = load i32 (%"class.std::__1::basic_streambuf"*, i32)*** %23, align 4
  %vfn.i = getelementptr inbounds i32 (%"class.std::__1::basic_streambuf"*, i32)** %vtable.i, i32 13
  %24 = load i32 (%"class.std::__1::basic_streambuf"*, i32)** %vfn.i, align 4
  %conv.i.i = and i32 %__c, 255
  %call2.i = tail call i32 %24(%"class.std::__1::basic_streambuf"* %0, i32 %conv.i.i)
  br label %return

if.end.i:                                         ; preds = %if.end52
  %conv = trunc i32 %__c to i8
  store i8* %add.ptr39, i8** %__nout_.i175, align 4
  store i8 %conv, i8* %18, align 1
  %conv.i6.i = and i32 %__c, 255
  br label %return

return:                                           ; preds = %if.end.i, %if.then.i, %lpad, %if.then7, %entry
  %retval.0 = phi i32 [ -1, %lpad ], [ -1, %if.then7 ], [ %call2.i, %if.then.i ], [ %conv.i6.i, %if.end.i ], [ 0, %entry ]
  ret i32 %retval.0
}

declare void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc(%"class.std::__1::basic_string"*, i8 signext)

declare void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(%"class.std::__1::basic_string"*, i32, i8 signext)

declare void @llvm.memset.p0i8.i32(i8* nocapture, i8, i32, i32, i1) nounwind

declare void @_ZNSt3__115basic_streambufIcNS_11char_traitsIcEEEC2Ev(%"class.std::__1::basic_streambuf"*)

define linkonce_odr void @_ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE(%"class.std::__1::basic_stringbuf"* %this, %"class.std::__1::basic_string"* %__s) align 2 {
entry:
  %__str_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1
  %call = tail call %"class.std::__1::basic_string"* @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(%"class.std::__1::basic_string"* %__str_, %"class.std::__1::basic_string"* %__s)
  %__hm_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 2
  store i8* null, i8** %__hm_, align 4
  %__mode_ = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 3
  %0 = load i32* %__mode_, align 4
  %and = and i32 %0, 8
  %tobool = icmp eq i32 %and, 0
  br i1 %tobool, label %if.end, label %if.then

if.then:                                          ; preds = %entry
  %__s.i.i.i = bitcast %"class.std::__1::basic_string"* %__str_ to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i.i = bitcast %"class.std::__1::basic_string"* %__str_ to i8*
  %1 = load i8* %__size_.i.i.i, align 1
  %and.i.i.i = and i8 %1, 1
  %tobool.i.i.i = icmp eq i8 %and.i.i.i, 0
  br i1 %tobool.i.i.i, label %cond.false.i.i, label %cond.true.i.i

cond.true.i.i:                                    ; preds = %if.then
  %__data_.i21.i.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %2 = load i8** %__data_.i21.i.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

cond.false.i.i:                                   ; preds = %if.then
  %arrayidx.i.i.i = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit: ; preds = %cond.false.i.i, %cond.true.i.i
  %cond.i.i = phi i8* [ %2, %cond.true.i.i ], [ %arrayidx.i.i.i, %cond.false.i.i ]
  %conv.i.i162 = zext i8 %1 to i32
  %and.i.i163 = and i32 %conv.i.i162, 1
  %tobool.i.i164 = icmp eq i32 %and.i.i163, 0
  br i1 %tobool.i.i164, label %cond.false.i182, label %cond.true.i172

cond.true.i172:                                   ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit
  %__size_.i23.i171 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  %3 = load i32* %__size_.i23.i171, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit184

cond.false.i182:                                  ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit
  %shr.i.i1814 = lshr i32 %conv.i.i162, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit184

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit184: ; preds = %cond.false.i182, %cond.true.i172
  %cond.i183 = phi i32 [ %3, %cond.true.i172 ], [ %shr.i.i1814, %cond.false.i182 ]
  %add.ptr = getelementptr inbounds i8* %cond.i.i, i32 %cond.i183
  store i8* %add.ptr, i8** %__hm_, align 4
  br i1 %tobool.i.i.i, label %cond.false.i.i334, label %cond.true.i.i325

cond.true.i.i325:                                 ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit184
  %__data_.i21.i.i369 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %4 = load i8** %__data_.i21.i.i369, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit336

cond.false.i.i334:                                ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit184
  %arrayidx.i.i.i378 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i, i32 0, i32 1, i32 0
  %arrayidx.i.i.i333 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i.i, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit336

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit336: ; preds = %cond.false.i.i334, %cond.true.i.i325
  %cond.i.i3805 = phi i8* [ %4, %cond.true.i.i325 ], [ %arrayidx.i.i.i378, %cond.false.i.i334 ]
  %cond.i.i335 = phi i8* [ %4, %cond.true.i.i325 ], [ %arrayidx.i.i.i333, %cond.false.i.i334 ]
  %__binp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 2
  store i8* %cond.i.i3805, i8** %__binp_.i, align 4
  %__ninp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 3
  store i8* %cond.i.i335, i8** %__ninp_.i, align 4
  %__einp_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 4
  store i8* %add.ptr, i8** %__einp_.i, align 4
  br label %if.end

if.end:                                           ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit336, %entry
  %and13 = and i32 %0, 16
  %tobool14 = icmp eq i32 %and13, 0
  br i1 %tobool14, label %if.end37, label %if.then15

if.then15:                                        ; preds = %if.end
  %__s.i.i265 = bitcast %"class.std::__1::basic_string"* %__str_ to %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"*
  %__size_.i.i266 = bitcast %"class.std::__1::basic_string"* %__str_ to i8*
  %5 = load i8* %__size_.i.i266, align 1
  %conv.i.i267 = zext i8 %5 to i32
  %and.i.i268 = and i32 %conv.i.i267, 1
  %tobool.i.i269 = icmp eq i32 %and.i.i268, 0
  br i1 %tobool.i.i269, label %cond.false.i287, label %cond.true.i277

cond.true.i277:                                   ; preds = %if.then15
  %__size_.i23.i276 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  %6 = load i32* %__size_.i23.i276, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit289

cond.false.i287:                                  ; preds = %if.then15
  %shr.i.i2862 = lshr i32 %conv.i.i267, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit289

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit289: ; preds = %cond.false.i287, %cond.true.i277
  %cond.i288 = phi i32 [ %6, %cond.true.i277 ], [ %shr.i.i2862, %cond.false.i287 ]
  %and.i.i.i228 = and i8 %5, 1
  %tobool.i.i.i229 = icmp eq i8 %and.i.i.i228, 0
  br i1 %tobool.i.i.i229, label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit248.thread, label %cond.true.i201

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit248.thread: ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit289
  %add.ptr207 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i265, i32 0, i32 1, i32 %cond.i288
  store i8* %add.ptr207, i8** %__hm_, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit

cond.true.i201:                                   ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit289
  %__data_.i21.i.i236 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %7 = load i8** %__data_.i21.i.i236, align 4
  %add.ptr20 = getelementptr inbounds i8* %7, i32 %cond.i288
  store i8* %add.ptr20, i8** %__hm_, align 4
  %__cap_.i.i = getelementptr inbounds %"class.std::__1::basic_string"* %__str_, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0, i32 0
  %8 = load i32* %__cap_.i.i, align 4
  %and.i11.i = and i32 %8, -2
  %phitmp = add i32 %and.i11.i, -1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit: ; preds = %cond.true.i201, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit248.thread
  %cond.i203 = phi i32 [ %phitmp, %cond.true.i201 ], [ 10, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit248.thread ]
  tail call void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc(%"class.std::__1::basic_string"* %__str_, i32 %cond.i203, i8 signext 0)
  %9 = load i8* %__size_.i.i266, align 1
  %and.i.i.i120 = and i8 %9, 1
  %tobool.i.i.i121 = icmp eq i8 %and.i.i.i120, 0
  br i1 %tobool.i.i.i121, label %cond.false.i.i93, label %cond.true.i.i84

cond.true.i.i84:                                  ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit
  %__data_.i21.i.i128 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 2
  %10 = load i8** %__data_.i21.i.i128, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit95

cond.false.i.i93:                                 ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE8capacityEv.exit
  %arrayidx.i.i.i137 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i265, i32 0, i32 1, i32 0
  %arrayidx.i.i.i92 = getelementptr inbounds %"struct.std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >::__short"* %__s.i.i265, i32 0, i32 1, i32 0
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit95

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit95: ; preds = %cond.false.i.i93, %cond.true.i.i84
  %11 = phi i8* [ %10, %cond.true.i.i84 ], [ %arrayidx.i.i.i137, %cond.false.i.i93 ]
  %cond.i.i94 = phi i8* [ %10, %cond.true.i.i84 ], [ %arrayidx.i.i.i92, %cond.false.i.i93 ]
  %conv.i.i = zext i8 %9 to i32
  %and.i.i = and i32 %conv.i.i, 1
  %tobool.i.i = icmp eq i32 %and.i.i, 0
  br i1 %tobool.i.i, label %cond.false.i, label %cond.true.i

cond.true.i:                                      ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit95
  %__size_.i23.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 1, i32 0, i32 0, i32 0, i32 0, i32 0, i32 1
  %12 = load i32* %__size_.i23.i, align 4
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit

cond.false.i:                                     ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4dataEv.exit95
  %shr.i.i3 = lshr i32 %conv.i.i, 1
  br label %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit

_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit: ; preds = %cond.false.i, %cond.true.i
  %cond.i = phi i32 [ %12, %cond.true.i ], [ %shr.i.i3, %cond.false.i ]
  %add.ptr31 = getelementptr inbounds i8* %cond.i.i94, i32 %cond.i
  %__nout_.i42 = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 6
  store i8* %11, i8** %__nout_.i42, align 4
  %__bout_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 5
  store i8* %11, i8** %__bout_.i, align 4
  %__eout_.i = getelementptr inbounds %"class.std::__1::basic_stringbuf"* %this, i32 0, i32 0, i32 7
  store i8* %add.ptr31, i8** %__eout_.i, align 4
  %13 = load i32* %__mode_, align 4
  %and33 = and i32 %13, 3
  %tobool34 = icmp eq i32 %and33, 0
  br i1 %tobool34, label %if.end37, label %if.then35

if.then35:                                        ; preds = %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit
  %add.ptr.i = getelementptr inbounds i8* %11, i32 %cond.i288
  store i8* %add.ptr.i, i8** %__nout_.i42, align 4
  br label %if.end37

if.end37:                                         ; preds = %if.then35, %_ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4sizeEv.exit, %if.end
  ret void
}

declare %"class.std::__1::basic_string"* @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(%"class.std::__1::basic_string"*, %"class.std::__1::basic_string"*)

declare void @_ZNSt3__18ios_base4initEPv(%"class.std::__1::ios_base"*, i8*)

define linkonce_odr void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %this, %"class.std::__1::__tree_node"* %__nd) nounwind align 2 {
entry:
  %cmp = icmp eq %"class.std::__1::__tree_node"* %__nd, null
  br i1 %cmp, label %if.end, label %if.then

if.then:                                          ; preds = %entry
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node"* %__nd, i32 0, i32 0, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  %1 = bitcast %"class.std::__1::__tree_node_base"* %0 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %this, %"class.std::__1::__tree_node"* %1) nounwind
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node"* %__nd, i32 0, i32 0, i32 1
  %2 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %3 = bitcast %"class.std::__1::__tree_node_base"* %2 to %"class.std::__1::__tree_node"*
  tail call void @_ZNSt3__16__treeINS_3mapIPN3OIS6ObjectEPNS2_14FactoryCreatorENS_4lessIS4_EENS_9allocatorINS_4pairIKS4_S6_EEEEE12__value_typeENS_19__map_value_compareIS4_SF_S8_Lb1EEENS9_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree"* %this, %"class.std::__1::__tree_node"* %3) nounwind
  %4 = bitcast %"class.std::__1::__tree_node"* %__nd to i8*
  tail call void @_ZdlPv(i8* %4) nounwind
  ret void

if.end:                                           ; preds = %entry
  ret void
}

declare void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(%"class.std::__1::basic_string"*, i8*, i32)

define linkonce_odr void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_node.56"* %__nd) nounwind align 2 {
entry:
  %cmp = icmp eq %"class.std::__1::__tree_node.56"* %__nd, null
  br i1 %cmp, label %if.end, label %if.then

if.then:                                          ; preds = %entry
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node.56"* %__nd, i32 0, i32 0, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  %1 = bitcast %"class.std::__1::__tree_node_base"* %0 to %"class.std::__1::__tree_node.56"*
  tail call void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_node.56"* %1) nounwind
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node.56"* %__nd, i32 0, i32 0, i32 1
  %2 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %3 = bitcast %"class.std::__1::__tree_node_base"* %2 to %"class.std::__1::__tree_node.56"*
  tail call void @_ZNSt3__16__treeINS_8multimapIN3OIS4TypeENS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIS3_EENS7_INS_4pairIKS3_S9_EEEEE12__value_typeENS_19__map_value_compareIS3_SH_SB_Lb1EEENS7_ISH_EEE7destroyEPNS_11__tree_nodeISH_PvEE(%"class.std::__1::__tree.55"* %this, %"class.std::__1::__tree_node.56"* %3) nounwind
  %second.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node.56"* %__nd, i32 0, i32 1, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %invoke.cont6 unwind label %lpad

invoke.cont6:                                     ; preds = %if.then
  %4 = bitcast %"class.std::__1::__tree_node.56"* %__nd to i8*
  tail call void @_ZdlPv(i8* %4) nounwind
  br label %if.end

lpad:                                             ; preds = %if.then
  %5 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          filter [0 x i8*] zeroinitializer
  %6 = extractvalue { i8*, i32 } %5, 0
  tail call void @__cxa_call_unexpected(i8* %6) noreturn nounwind
  unreachable

if.end:                                           ; preds = %invoke.cont6, %entry
  ret void
}

define linkonce_odr void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree.11"* %this, %"class.std::__1::__tree_node.12"* %__nd) nounwind align 2 {
entry:
  %cmp = icmp eq %"class.std::__1::__tree_node.12"* %__nd, null
  br i1 %cmp, label %if.end, label %if.then

if.then:                                          ; preds = %entry
  %__left_ = getelementptr inbounds %"class.std::__1::__tree_node.12"* %__nd, i32 0, i32 0, i32 0, i32 0
  %0 = load %"class.std::__1::__tree_node_base"** %__left_, align 4
  %1 = bitcast %"class.std::__1::__tree_node_base"* %0 to %"class.std::__1::__tree_node.12"*
  tail call void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree.11"* %this, %"class.std::__1::__tree_node.12"* %1) nounwind
  %__right_ = getelementptr inbounds %"class.std::__1::__tree_node.12"* %__nd, i32 0, i32 0, i32 1
  %2 = load %"class.std::__1::__tree_node_base"** %__right_, align 4
  %3 = bitcast %"class.std::__1::__tree_node_base"* %2 to %"class.std::__1::__tree_node.12"*
  tail call void @_ZNSt3__16__treeINS_8multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_NS_4lessIS7_EENS5_INS_4pairIKS7_S7_EEEEE12__value_typeENS_19__map_value_compareIS7_SF_S9_Lb1EEENS5_ISF_EEE7destroyEPNS_11__tree_nodeISF_PvEE(%"class.std::__1::__tree.11"* %this, %"class.std::__1::__tree_node.12"* %3) nounwind
  %__value_ = getelementptr inbounds %"class.std::__1::__tree_node.12"* %__nd, i32 0, i32 1
  %second.i.i.i.i = getelementptr inbounds %"class.std::__1::__tree_node.12"* %__nd, i32 0, i32 1, i32 0, i32 1
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %second.i.i.i.i)
          to label %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i unwind label %lpad.i.i.i.i

lpad.i.i.i.i:                                     ; preds = %if.then
  %4 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          filter [0 x i8*] zeroinitializer
  %first2.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__value_, i32 0, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first2.i.i.i.i)
          to label %lpad.body unwind label %terminate.lpad.i.i.i.i

terminate.lpad.i.i.i.i:                           ; preds = %lpad.i.i.i.i
  %5 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          catch i8* null
  tail call void @_ZSt9terminatev() noreturn nounwind
  unreachable

_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i: ; preds = %if.then
  %first.i.i.i.i = getelementptr inbounds %"struct.std::__1::multimap<std::__1::basic_string<char>, std::__1::basic_string<char>, std::__1::less<std::__1::basic_string<char> >, std::__1::allocator<std::__1::pair<const std::__1::basic_string<char>, std::__1::basic_string<char> > > >::__value_type"* %__value_, i32 0, i32 0, i32 0
  invoke void @_ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev(%"class.std::__1::basic_string"* %first.i.i.i.i)
          to label %invoke.cont6 unwind label %lpad

invoke.cont6:                                     ; preds = %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i
  %6 = bitcast %"class.std::__1::__tree_node.12"* %__nd to i8*
  tail call void @_ZdlPv(i8* %6) nounwind
  br label %if.end

lpad:                                             ; preds = %_ZNSt3__18multimapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE12__value_typeD2Ev.exit.i
  %7 = landingpad { i8*, i32 } personality i8* bitcast (i32 (...)* @__gxx_personality_v0 to i8*)
          filter [0 x i8*] zeroinitializer
  br label %lpad.body

lpad.body:                                        ; preds = %lpad, %lpad.i.i.i.i
  %eh.lpad-body = phi { i8*, i32 } [ %7, %lpad ], [ %4, %lpad.i.i.i.i ]
  %8 = extractvalue { i8*, i32 } %eh.lpad-body, 0
  tail call void @__cxa_call_unexpected(i8* %8) noreturn nounwind
  unreachable

if.end:                                           ; preds = %invoke.cont6, %entry
  ret void
}

declare void @llvm.memset.p0i8.i64(i8* nocapture, i8, i64, i32, i1) nounwind
