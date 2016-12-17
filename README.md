# === couchdb_native_saga ===

# === Getting Started ===

This is a React Native project with Couchbase Lite and Redux-saga.
As of today (12-17-16) only ios version is there to play with.

Couchbase Lite install: https://gist.github.com/jchris/3c32524577deff3d69aa

1. Download and unzip Couchbase Lite iOS
2. Drag and drop into your React Native app Xcode project the following:
		CouchbaseLite.framework,
		CouchbaseLiteListener.framework,
		Extras -> CBLRegisterJSViewCompiler.h
		 				&	libCBLJSViewCompiler.a
3. Add the library dependencies:
	Go to the "Build Settings" tab of your app target's settings. Find the "Other Linker Flags" row in the "Linker" section, flag should be -ObjC + others
	Go to the "Build Phases" tab of the app target's settings.
	In the "Link Binary with Libraries" section, click the plus button and add CFNetwork.framework, Security.framework, SystemConfiguration.framework, libsqlite3.tbd and libz.tbd.					
4. Add header imports to your AppDelegate.m

```
#import "CouchbaseLite/CouchbaseLite.h"
#import "CouchbaseLiteListener/CBLListener.h"
#import "CBLRegisterJSViewCompiler.h"
```
... Add function to launch db

```
- (void)launchCouchbaseLite
{
	CBLManager* dbmgr = [CBLManager sharedInstance];
	CBLRegisterJSViewCompiler();
	CBLListener* listener = [[CBLListener alloc] initWithManager:dbmgr port:5810];
	[listener start:nil];
}
```
...

```
[self launchCouchbaseLite];
```
-------------------------------------------------------------------------------
Checkout this repo, install depdencies, then start with the following:

```
	> git clone git@github.com:tskipa/couchdb_native_saga.git
	> cd into it
	> npm install
	> react-native run-ios

```
