/*
The zlib/libpng License

Copyright (c) 2005-2007 Phillip Castaneda (pjcast -- www.wreckedgames.com)

This software is provided 'as-is', without any express or implied warranty. In no event will
the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial 
applications, and to alter it and redistribute it freely, subject to the following
restrictions:

    1. The origin of this software must not be misrepresented; you must not claim that 
		you wrote the original software. If you use this software in a product, 
		an acknowledgment in the product documentation would be appreciated but is 
		not required.

    2. Altered source versions must be plainly marked as such, and must not be 
		misrepresented as being the original software.

    3. This notice may not be removed or altered from any source distribution.
*/
#include "browser/BrowserKeyboard.h"
#include "browser/BrowserInputManager.h"
#include "OISException.h"
#include "OISEvents.h"
#include <sstream>
#include <emscripten.h>

using namespace OIS;

//-------------------------------------------------------------------//
BrowserKeyboard::BrowserKeyboard( bool buffered )
:Keyboard("keyboard",buffered,0,NULL)
{
	mBuffered = buffered;
	mType = OISKeyboard;
	mListener = 0;

	//Clear our keyboard state buffer
	memset( &KeyBuffer, 0, 256 );
}

//-------------------------------------------------------------------//
void BrowserKeyboard::_initialize()
{
	mModifiers = 0;
	mBrowserBuff = 0;

	mKeyMap.insert( KeyMap::value_type(Browser_ESCAPE,KC_ESCAPE) );
	mKeyMap.insert( KeyMap::value_type(Browser_MINUS, KC_MINUS) );
	mKeyMap.insert( KeyMap::value_type(Browser_EQUALS, KC_EQUALS) );
	mKeyMap.insert( KeyMap::value_type(Browser_BACKSPACE, KC_BACK) );
	mKeyMap.insert( KeyMap::value_type(Browser_TAB, KC_TAB) );
	mKeyMap.insert( KeyMap::value_type(Browser_RETURN, KC_RETURN) );
	mKeyMap.insert( KeyMap::value_type(Browser_LCTRL, KC_LCONTROL));
	mKeyMap.insert( KeyMap::value_type(Browser_SEMICOLON, KC_SEMICOLON) );
	mKeyMap.insert( KeyMap::value_type(Browser_COLON, KC_COLON) );
	mKeyMap.insert( KeyMap::value_type(Browser_QUOTE, KC_APOSTROPHE) );
	mKeyMap.insert( KeyMap::value_type(Browser_BACKQUOTE, KC_GRAVE)  );
	mKeyMap.insert( KeyMap::value_type(Browser_LSHIFT, KC_LSHIFT) );
	mKeyMap.insert( KeyMap::value_type(Browser_BACKSLASH, KC_BACKSLASH) );
	mKeyMap.insert( KeyMap::value_type(Browser_SLASH, KC_SLASH) );
	mKeyMap.insert( KeyMap::value_type(Browser_COMMA, KC_COMMA)  );
	mKeyMap.insert( KeyMap::value_type(Browser_PERIOD, KC_PERIOD));
	mKeyMap.insert( KeyMap::value_type(Browser_RSHIFT, KC_RSHIFT));
	mKeyMap.insert( KeyMap::value_type(Browser_KP_MULTIPLY, KC_MULTIPLY) );
	mKeyMap.insert( KeyMap::value_type(Browser_LALT, KC_LMENU) );
	mKeyMap.insert( KeyMap::value_type(Browser_SPACE, KC_SPACE));
	mKeyMap.insert( KeyMap::value_type(Browser_CAPSLOCK, KC_CAPITAL) );
	mKeyMap.insert( KeyMap::value_type(Browser_1, KC_1) );
	mKeyMap.insert( KeyMap::value_type(Browser_2, KC_2) );
	mKeyMap.insert( KeyMap::value_type(Browser_3, KC_3) );
	mKeyMap.insert( KeyMap::value_type(Browser_4, KC_4) );
	mKeyMap.insert( KeyMap::value_type(Browser_5, KC_5) );
	mKeyMap.insert( KeyMap::value_type(Browser_6, KC_6) );
	mKeyMap.insert( KeyMap::value_type(Browser_7, KC_7) );
	mKeyMap.insert( KeyMap::value_type(Browser_8, KC_8) );
	mKeyMap.insert( KeyMap::value_type(Browser_9, KC_9) );
	mKeyMap.insert( KeyMap::value_type(Browser_0, KC_0) );
	mKeyMap.insert( KeyMap::value_type(Browser_a, KC_A) );
	mKeyMap.insert( KeyMap::value_type(Browser_b, KC_B) );
	mKeyMap.insert( KeyMap::value_type(Browser_c, KC_C) );
	mKeyMap.insert( KeyMap::value_type(Browser_d, KC_D) );
	mKeyMap.insert( KeyMap::value_type(Browser_e, KC_E) );
	mKeyMap.insert( KeyMap::value_type(Browser_f, KC_F) );
	mKeyMap.insert( KeyMap::value_type(Browser_g, KC_G) );
	mKeyMap.insert( KeyMap::value_type(Browser_h, KC_H) );
	mKeyMap.insert( KeyMap::value_type(Browser_i, KC_I) );
	mKeyMap.insert( KeyMap::value_type(Browser_j, KC_J) );
	mKeyMap.insert( KeyMap::value_type(Browser_k, KC_K) );
	mKeyMap.insert( KeyMap::value_type(Browser_l, KC_L) );
	mKeyMap.insert( KeyMap::value_type(Browser_m, KC_M) );
	mKeyMap.insert( KeyMap::value_type(Browser_n, KC_N) );
	mKeyMap.insert( KeyMap::value_type(Browser_o, KC_O) );
	mKeyMap.insert( KeyMap::value_type(Browser_p, KC_P) );
	mKeyMap.insert( KeyMap::value_type(Browser_q, KC_Q) );
	mKeyMap.insert( KeyMap::value_type(Browser_r, KC_R) );
	mKeyMap.insert( KeyMap::value_type(Browser_s, KC_S) );
	mKeyMap.insert( KeyMap::value_type(Browser_t, KC_T) );
	mKeyMap.insert( KeyMap::value_type(Browser_u, KC_U) );
	mKeyMap.insert( KeyMap::value_type(Browser_v, KC_V) );
	mKeyMap.insert( KeyMap::value_type(Browser_w, KC_W) );
	mKeyMap.insert( KeyMap::value_type(Browser_x, KC_X) );
	mKeyMap.insert( KeyMap::value_type(Browser_y, KC_Y) );
	mKeyMap.insert( KeyMap::value_type(Browser_z, KC_Z) );
	mKeyMap.insert( KeyMap::value_type(Browser_F1, KC_F1) );
	mKeyMap.insert( KeyMap::value_type(Browser_F2, KC_F2) );
	mKeyMap.insert( KeyMap::value_type(Browser_F3, KC_F3) );
	mKeyMap.insert( KeyMap::value_type(Browser_F4, KC_F4) );
	mKeyMap.insert( KeyMap::value_type(Browser_F5, KC_F5) );
	mKeyMap.insert( KeyMap::value_type(Browser_F6, KC_F6) );
	mKeyMap.insert( KeyMap::value_type(Browser_F7, KC_F7) );
	mKeyMap.insert( KeyMap::value_type(Browser_F8, KC_F8) );
	mKeyMap.insert( KeyMap::value_type(Browser_F9, KC_F9) );
	mKeyMap.insert( KeyMap::value_type(Browser_F10, KC_F10) );
	mKeyMap.insert( KeyMap::value_type(Browser_F11, KC_F11) );
	mKeyMap.insert( KeyMap::value_type(Browser_F12, KC_F12) );
	mKeyMap.insert( KeyMap::value_type(Browser_F13, KC_F13) );
	mKeyMap.insert( KeyMap::value_type(Browser_F14, KC_F14) );
	mKeyMap.insert( KeyMap::value_type(Browser_F15, KC_F15) );
	mKeyMap.insert( KeyMap::value_type(Browser_NUMLOCK, KC_NUMLOCK) );
	mKeyMap.insert( KeyMap::value_type(Browser_SCROLLOCK, KC_SCROLL));
	mKeyMap.insert( KeyMap::value_type(Browser_KP0, KC_NUMPAD0) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP1, KC_NUMPAD1) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP2, KC_NUMPAD2) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP3, KC_NUMPAD3) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP4, KC_NUMPAD4) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP5, KC_NUMPAD5) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP6, KC_NUMPAD6) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP7, KC_NUMPAD7) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP8, KC_NUMPAD8) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP9, KC_NUMPAD9) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP_PLUS, KC_ADD) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP_MINUS, KC_SUBTRACT) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP_PERIOD, KC_DECIMAL) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP_EQUALS, KC_NUMPADEQUALS) );
	mKeyMap.insert( KeyMap::value_type(Browser_KP_DIVIDE, KC_DIVIDE) );
	mKeyMap.insert( KeyMap::value_type(Browser_RALT, KC_RMENU) );
	mKeyMap.insert( KeyMap::value_type(Browser_HOME, KC_HOME) );
	mKeyMap.insert( KeyMap::value_type(Browser_UP, KC_UP) );
	mKeyMap.insert( KeyMap::value_type(Browser_PAGEUP, KC_PGUP) );
	mKeyMap.insert( KeyMap::value_type(Browser_LEFT, KC_LEFT) );
	mKeyMap.insert( KeyMap::value_type(Browser_RIGHT, KC_RIGHT) );
	mKeyMap.insert( KeyMap::value_type(Browser_END, KC_END) );
	mKeyMap.insert( KeyMap::value_type(Browser_DOWN, KC_DOWN) );
	mKeyMap.insert( KeyMap::value_type(Browser_PAGEDOWN, KC_PGDOWN) );
	mKeyMap.insert( KeyMap::value_type(Browser_INSERT, KC_INSERT) );
	mKeyMap.insert( KeyMap::value_type(Browser_DELETE, KC_DELETE) );
	mKeyMap.insert( KeyMap::value_type(Browser_LSUPER, KC_LWIN) );
	mKeyMap.insert( KeyMap::value_type(Browser_RSUPER, KC_RWIN) );
}

//-------------------------------------------------------------------//
BrowserKeyboard::~BrowserKeyboard()
{
}

//-------------------------------------------------------------------//
void BrowserKeyboard::capture()
{
	BrowserKey key=(BrowserKey)0;
	key=(BrowserKey) EM_ASM_INT(
	  return GetFunction('keycode')();
	,0);
	KeyCode kc = mKeyMap[key];
	KeyBuffer[kc] = 0;

	if( mBuffered && mListener )
		mListener->keyPressed(KeyEvent(this,kc,0));
}

//-------------------------------------------------------------------//
bool BrowserKeyboard::isKeyDown( KeyCode key ) const
{
	return KeyBuffer[key] == 1 ? true : false;
}

//-------------------------------------------------------------------//
const std::string& BrowserKeyboard::getAsString( KeyCode kc )
{
	mGetString = "Unknown";
	return mGetString;
}

//-------------------------------------------------------------------//
void BrowserKeyboard::copyKeyStates( char keys[256] ) const
{
	for(int i = 0; i < 256; ++i)
		keys[i] = KeyBuffer[i];
}

//-------------------------------------------------------------------//
void BrowserKeyboard::setBuffered(bool buffered)
{
	mBuffered = buffered;
}

//-------------------------------------------------------------------//
void BrowserKeyboard::setTextTranslation( TextTranslationMode mode )
{
	mTextMode = mode;
}
