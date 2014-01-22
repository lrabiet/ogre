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
#include "browser/BrowserMouse.h"
#include "browser/BrowserInputManager.h"
#include "OISException.h"
#include "OISEvents.h"
#include <emscripten.h>

using namespace OIS;

//-------------------------------------------------------------------//
BrowserMouse::BrowserMouse( bool buffered ) : mGrabbed(false), mRegainFocus(false),Mouse("mouse",false,0,NULL)
{
	mBuffered = buffered;
	mType = OISMouse;
	mListener = 0;
}

//-------------------------------------------------------------------//
void BrowserMouse::_initialize()
{
	//Clear old state
	mState.clear();
	mRegainFocus = false;

	_setGrab(true);
	_setVisible(false);
}

//-------------------------------------------------------------------//
BrowserMouse::~BrowserMouse()
{
	_setGrab(true);
	_setVisible(true);

}

//-------------------------------------------------------------------//
void BrowserMouse::capture()
{
	//Used for going from SDL Button to OIS button
	static const MouseButtonID mask[4] = {MB_Left, MB_Middle, MB_Right};
	//Clear out last frames values
	mState.X.rel = 0;
	mState.Y.rel = 0;
	mState.Z.rel = 0;
	int event;
	int button;
	int x,y;
	event=EM_ASM_INT(return GetFunction('mouse')(0); ,0);
	x=EM_ASM_INT(return GetFunction('mouse')(1); ,0);
	y=EM_ASM_INT(return GetFunction('mouse')(2); ,0);
	button=EM_ASM_INT(return GetFunction('mouse')(3); ,0)-1;
	mState.X.abs = x;
	mState.Y.abs = y;
	mState.X.rel = x;
	mState.Y.rel = y;


	switch(event) {
	case MOUSEMOVE:
		if(mBuffered &&  mListener )
			mListener->mouseMoved(  MouseEvent(this, mState ));
		break;
	case MOUSEPRESS:
		mState.buttons |= mask[button];
		if(mBuffered &&  mListener )
			mListener->mousePressed( MouseEvent( this, mState ) ,mask[button]);
		break;
	case MOUSERELEASE:
		mState.buttons &= ~mask[button];
		if(mBuffered &&  mListener )
			mListener->mouseReleased( MouseEvent( this, mState ),mask[button]);
		break;
	}

}

//-------------------------------------------------------------------//
void BrowserMouse::setBuffered(bool buffered)
{
	mBuffered = buffered;
}

//-------------------------------------------------------------------//
void BrowserMouse::_setGrab(bool grabbed)
{
	mGrabbed = grabbed;
}

//-------------------------------------------------------------------//
void BrowserMouse::_setVisible(bool visible)
{
}
