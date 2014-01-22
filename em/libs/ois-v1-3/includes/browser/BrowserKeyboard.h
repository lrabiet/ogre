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
#ifndef _OIS_BrowserKEYBOARD_H
#define _OIS_BrowserKEYBOARD_H

#include "OISKeyboard.h"
#include "browser/BrowserPrereqs.h"
typedef unsigned char Uint8;
namespace OIS
{
   enum BrowserKey
   {
	   Browser_BACKSPACE=8,
	   Browser_TAB=9,
	   Browser_RETURN=13,
	   Browser_LSHIFT=16,
	   Browser_RSHIFT=16,
	   Browser_LCTRL=17,
	   Browser_LALT=18,
	   Browser_RALT=18,
	   Browser_CAPSLOCK=20,
	   Browser_ESCAPE=27,
	   Browser_SPACE=32,
	   Browser_PAGEUP=33,
	   Browser_PAGEDOWN=34,
	   Browser_END=35,
	   Browser_HOME=36,
	   Browser_LEFT=37,
	   Browser_UP=38,
	   Browser_RIGHT=39,
	   Browser_DOWN=40,
	   Browser_INSERT=45,
	   Browser_DELETE=46,
	   Browser_0=48,
	   Browser_1=49,
	   Browser_2=50,
	   Browser_3=51,
	   Browser_4=52,
	   Browser_5=53,
	   Browser_6=54,
	   Browser_7=55,
	   Browser_8=56,
	   Browser_9=57,
	   Browser_a=65,
	   Browser_b=66,
	   Browser_c=67,
	   Browser_d=68,
	   Browser_e=69,
	   Browser_f=70,
	   Browser_g=71,
	   Browser_h=72,
	   Browser_i=73,
	   Browser_j=74,
	   Browser_k=75,
	   Browser_l=76,
	   Browser_m=77,
	   Browser_n=78,
	   Browser_o=79,
	   Browser_p=80,
	   Browser_q=81,
	   Browser_r=82,
	   Browser_s=83,
	   Browser_t=84,
	   Browser_u=85,
	   Browser_v=86,
	   Browser_w=87,
	   Browser_x=88,
	   Browser_y=89,
	   Browser_z=90,
	   Browser_KP_MULTIPLY=56,
	   Browser_LSUPER=91,
	   Browser_RSUPER=92,
	   Browser_KP0=96,
	   Browser_KP1=97,
	   Browser_KP2=98,
	   Browser_KP3=99,
	   Browser_KP4=100,
	   Browser_KP5=101,
	   Browser_KP6=102,
	   Browser_KP7=103,
	   Browser_KP8=104,
	   Browser_KP9=105,
	   Browser_KP_PLUS=107,
	   Browser_KP_EQUALS=108,
	   Browser_KP_MINUS=109,
	   Browser_KP_PERIOD=110,
	   Browser_KP_DIVIDE=111,
	   Browser_F1=112,
	   Browser_F2=113,
	   Browser_F3=114,
	   Browser_F4=115,
	   Browser_F5=116,
	   Browser_F6=117,
	   Browser_F7=118,
	   Browser_F8=119,
	   Browser_F9=120,
	   Browser_F10=121,
	   Browser_F11=122,
	   Browser_F12=123,
	   Browser_F13=124,
	   Browser_F14=125,
	   Browser_F15=126,
	   Browser_NUMLOCK=144,
	   Browser_SCROLLOCK=145,
	   Browser_COLON=186,
	   Browser_SEMICOLON=186,
	   Browser_EQUALS=187,
	   Browser_COMMA=188,
	   Browser_MINUS=189,
	   Browser_PERIOD=190,
	   Browser_SLASH=191,
	   Browser_BACKSLASH=220,
	   Browser_QUOTE=222,
	   Browser_BACKQUOTE=222,
    };
	class BrowserKeyboard : public Keyboard
	{
	public:
		/**
		@remarks
			Constructor
		@param buffered
			True for buffered input mode
		*/
		BrowserKeyboard( bool buffered );
		virtual ~BrowserKeyboard();

		/** @copydoc Keyboard::isKeyDown */
		virtual bool isKeyDown( KeyCode key ) const;

		/** @copydoc Keyboard::getAsString */
		virtual const std::string& getAsString( KeyCode kc );

		/** @copydoc Keyboard::copyKeyStates */
		virtual void copyKeyStates( char keys[256] ) const;

		/** @copydoc Object::setBuffered */
		virtual void setBuffered(bool buffered);

		/** @copydoc Object::capture */
		virtual void capture();

		/** @copydoc Object::queryInterface */
		virtual Interface* queryInterface(Interface::IType type) {return 0;}

		/** @copydoc Object::_initialize */
		virtual void _initialize();

		/** @copydoc Object::setTextTranslation */
		virtual void setTextTranslation( TextTranslationMode mode );

	protected:
		BrowserKeyboard():Keyboard("keyboard",false,0,NULL) {}

		typedef std::map<BrowserKey, KeyCode> KeyMap;
        KeyMap mKeyMap;

		unsigned char KeyBuffer[256];
		Uint8* mBrowserBuff;

		std::string mGetString;
	};
}
#endif
