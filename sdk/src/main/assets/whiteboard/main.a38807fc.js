(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2YZa":function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("tjZM"),n("3I1R"),n("7+kd"),n("0oug"),n("KhsS"),n("gOCb"),n("a57n"),n("GXvd"),n("I1Gw"),n("gXIK"),n("lEou"),n("gbiT"),n("ma9I"),n("qHT+"),n("piMb"),n("yyme"),n("TeQF"),n("fbCW"),n("x0AG"),n("BIHw"),n("XbcX"),n("QWBl"),n("pjDv"),n("yq1k"),n("yXV3"),n("4mDm"),n("uqXc"),n("2B1R"),n("Xe3L"),n("E9XD"),n("9N29"),n("Junv"),n("+2oP"),n("Rfxz"),n("ToJy"),n("94Xl"),n("pDQq"),n("QGkA"),n("c9m3"),n("wZ/5"),n("gtqK"),n("rOQg"),n("9LPj"),n("7+zs"),n("tW5y"),n("DEfu"),n("Tskq"),n("Uydy"),n("eajv"),n("n/mU"),n("PqOI"),n("QNnp"),n("/5zm"),n("CsgD"),n("9mRW"),n("QFcT"),n("a5NK"),n("yiG3"),n("kNcU"),n("KvGi"),n("AmFO"),n("eJiR"),n("I9xj"),n("tl/u"),n("qePV"),n("NbN+"),n("i6QF"),n("WDsR"),n("r/Vq"),n("5uH8"),n("w1rZ"),n("JevA"),n("zKZe"),n("Eqjn"),n("5xtp"),n("T63A"),n("3KgV"),n("wfmh"),n("5DmW"),n("27RR"),n("cDke"),n("NBAS"),n("yQYn"),n("4h0Y"),n("5D5o"),n("tkto"),n("v5b1"),n("W/eh"),n("zuhW"),n("r5Og"),n("ExoC"),n("07d7"),n("B6y2"),n("rNhl"),n("4l63"),n("5s+n"),n("p532"),n("pv2x"),n("SuFq"),n("PzqY"),n("rBZX"),n("XUE8"),n("nkod"),n("f3jH"),n("x2An"),n("25bX"),n("G/JM"),n("1t3B"),n("ftMj"),n("i5pp"),n("TWNs"),n("rB9j"),n("U3f4"),n("JfAA"),n("YGK4"),n("9bJ7"),n("inlA"),n("9tb/"),n("JTJg"),n("PKPk"),n("Rm1S"),n("hDyC"),n("TZCg"),n("2A+d"),n("OM9Z"),n("UxlC"),n("hByQ"),n("EnZy"),n("LKBx"),n("SYor"),n("HiXI"),n("7ueG"),n("z8NH"),n("SpvK"),n("/Yfv"),n("iwkZ"),n("FDzp"),n("XMab"),n("ilnZ"),n("hMMk"),n("+ywr"),n("moxL"),n("qXVe"),n("c162"),n("waxf"),n("0TkE"),n("Onu3"),n("1dYe"),n("IL/d"),n("gvgV"),n("6R/c"),n("YL0P"),n("X5Zq"),n("MoCz"),n("P8wP"),n("7JcK"),n("ypFw"),n("JaFt"),n("zSZm"),n("KVSy"),n("ZJ55"),n("IZzc"),n("s5qe"),n("cvf0"),n("ENF9"),n("H+LF"),n("FZtP"),n("3bBZ"),n("Ew+T"),n("n5b4"),n("Kz25"),n("vxnP"),n("mGGf"),n("ls82"),n("bZMm");var r,a=n("q1tI"),o=n.n(a),i=n("i8i4"),c=(n("HrR1"),n("dSAS")),s=n.n(c),u=n("AitN");function l(e){if(e)return{centerX:e.centerX,centerY:e.centerY,width:e.width,height:e.height,maxContentMode:d(e.maxContentMode),minContentMode:d(e.minContentMode)}}function d(e){if(e){var t=void 0===e.scale?1:e.scale,n=void 0===e.space?0:e.space;r.Scale;switch("string"==typeof e.mode?parseInt(r[e.mode]):e.mode){case r.Scale:return Object(u.contentModeScale)(t);case r.AspectFill:return Object(u.contentModeAspectFill)();case r.AspectFillScale:return Object(u.contentModeAspectFillScale)(t);case r.AspectFit:return Object(u.contentModeAspectFit)();case r.AspectFitScale:return Object(u.contentModeAspectFitScale)(t);case r.AspectFitSpace:return Object(u.contentModeAspectFitSpace)(n);default:return}}}!function(e){e[e.Scale=0]="Scale",e[e.AspectFit=1]="AspectFit",e[e.AspectFitScale=2]="AspectFitScale",e[e.AspectFitSpace=3]="AspectFitSpace",e[e.AspectFill=4]="AspectFill",e[e.AspectFillScale=5]="AspectFillScale"}(r||(r={}));var f=n("wOnQ"),m=n.n(f);function p(e){return void 0===e.roomUUID}function g(e){var t;t={message:e.message,error:e.error},console.log(JSON.stringify(t)),s.a.call("sdk.throwError",t)}function h(e){var t=e.data;"pptImageLoadError"===t.name&&s.a.call("sdk.postMessage",JSON.stringify(t)),t.shapeId&&t.mediaType&&t.action&&s.a.call("sdk.postMessage",JSON.stringify(t))}function S(e,t){var n=function(t,n){r(t,e.scenePreview.bind(e),n)},r=function(e,t,n){var r=document.createElement("div");r.setAttribute("class","shadow");var a=document.getElementById("whiteboard-container");if(a){var o=window.getComputedStyle(a).backgroundColor;r.style.background=o}document.body.appendChild(r),t(e,r,r.clientWidth,r.clientHeight),m()(r,{useCORS:!0,onclone:function(e){Array.from(e.getElementsByTagName("svg")).forEach((function(e){e.setAttribute("width","".concat(e.clientWidth)),e.setAttribute("height","".concat(e.clientHeight))}))}}).then((function(e){window.canvas=e;var t=e.toDataURL();document.body.removeChild(r),n(t)}))};s.a.register("displayer",{setDisableCameraTransform:function(t){e.disableCameraTransform=t},getDisableCameraTransform:function(){return e.disableCameraTransform},setCameraBound:function(n){t("setCameraBound nativeBound",n);var r=l(n);t("setCameraBound bound",r),e.setCameraBound(r)},getMemberState:function(t){return JSON.stringify(e.memberState(t))},scenePathType:function(t){return e.scenePathType(t)},entireScenes:function(){return e.entireScenes()},moveCamera:function(n){t("moveCamera: ",n),e.moveCamera(n)},moveCameraToContain:function(n){t("moveCameraToContain: ",n),e.moveCameraToContain(n)},refreshViewSize:function(){t("refreshViewSize"),e.refreshViewSize()},scalePptToFit:function(n){t("scalePptToFit",n),e.scalePptToFit(n)},convertToPointInWorld:function(n,r){return t("convertToPointInWorld",n,r),e.convertToPointInWorld({x:n,y:r})},setBackgroundColor:function(e,n,r,a){var o=document.getElementById("whiteboard-container");t("setBackgroundColor native",e,n,r,a);var i="rgb(".concat(e,", ").concat(n,", ").concat(r,")");t("setBackgroundColor color",i),o.style.background=i},addHighFrequencyEventListener:function(n,r){t("addHighFrequencyEventListener",n,r),e.addMagixEventListener(n,(function(t){var n=e.uuid||e.roomUUID,r=t.map((function(e){return{uuid:n,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId}}));p(e)?s.a.call("room.fireHighFrequencyEvent",JSON.stringify(r)):s.a.call("player.fireHighFrequencyEvent",JSON.stringify(r))}),r)},addMagixEventListener:function(n){t("addMagixEventListener",n),e.addMagixEventListener(n,(function(n){t("fireMagixEvent",n);var r={uuid:e.uuid||e.roomUUID,eventName:n.event,payload:n.payload,scope:n.scope,authorId:n.authorId};p(e)?s.a.call("room.fireMagixEvent",JSON.stringify(r)):s.a.call("player.fireMagixEvent",JSON.stringify(r))}))},removeMagixEventListener:function(n){t("removeMagixEventListener",n),e.removeMagixEventListener(n)}}),s.a.registerAsyn("displayerAsync",{scenePreview:n,sceneSnapshot:function(t,n){r(t,e.fillSceneSnapshot.bind(e),n)}}),window.html2canvas=m.a,window.pagePreview=n}function v(e,t){window.room=e,S(e,t);s.a.register("ppt",{nextStep:function(){t("nextStep"),e.pptNextStep()},previousStep:function(){t("previousStep"),e.pptPreviousStep()}}),s.a.register("room.sync",{disableSerialization:function(t){e.disableSerialization=t},copy:function(){e.copy()},paste:function(){e.paste()},duplicate:function(){e.duplicate()},delete:function(){e.delete()},disableEraseImage:function(t){e.disableEraseImage=t}}),s.a.registerAsyn("room",{redo:function(t){t(e.redo())},undo:function(t){t(e.undo())},canRedoSteps:function(t){t(e.canRedoSteps)},canUndoSteps:function(t){t(e.canUndoSteps)},setGlobalState:function(n){t("setGlobalState",n),e.setGlobalState(n)},setScenePath:function(n,r){try{t("setScenePath",n),e.setScenePath(n),r(JSON.stringify({}))}catch(e){return r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},setMemberState:function(n){t("setMemberState",n),e.setMemberState(n)},setViewMode:function(n){var r=u.ViewMode[n];void 0===r&&(r=u.ViewMode.Freedom),t("setViewMode",{viewMode:n,mode:r}),e.setViewMode(r)},setWritable:function(t,n){e.setWritable(t).then((function(){n(JSON.stringify({isWritable:e.isWritable,observerId:e.observerId}))})).catch((function(e){n(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))},getMemberState:function(n){return t("getMemberState",e.state.memberState),n(JSON.stringify(e.state.memberState))},getGlobalState:function(n){return t("getGlobalState",e.state.globalState),n(JSON.stringify(e.state.globalState))},getSceneState:function(n){return t("getSceneState",e.state.sceneState),n(JSON.stringify(e.state.sceneState))},getRoomMembers:function(n){return t("getRoomMembers",e.state.roomMembers),n(JSON.stringify(e.state.roomMembers))},getPptImages:function(t){var n=e.state.sceneState.scenes.map((function(e){return e.ppt?e.ppt.src:""}));return t(JSON.stringify(n))},setSceneIndex:function(n,r){t("setSceneIndex",n);try{e.setSceneIndex(n),r(JSON.stringify({}))}catch(e){r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},getScenes:function(n){return t("getScenes",e.state.sceneState.scenes),n(JSON.stringify(e.state.sceneState.scenes))},getZoomScale:function(n){return t("getZoomScale",e.state.zoomScale),n(JSON.stringify(e.state.zoomScale))},getBroadcastState:function(n){return t("getBroadcastState",e.state.zoomScale),n(JSON.stringify(e.state.broadcastState))},getRoomPhase:function(n){return t("getRoomPhase",JSON.stringify(e.phase)),n(e.phase)},disconnect:function(t){e.disconnect().then((function(){t()}))},zoomChange:function(n){t("zoomChange"),e.moveCamera({scale:n})},disableCameraTransform:function(n){t("disableCameraTransform",n),e.disableCameraTransform=n},disableDeviceInputs:function(n){t("disableDeviceInputs",n),e.disableDeviceInputs=n},disableOperations:function(n){t("disableOperations",n),e.disableCameraTransform=n,e.disableDeviceInputs=n},putScenes:function(n,r,a,o){t("putScenes",r),e.putScenes(n,r,a),o(JSON.stringify(e.state.sceneState))},removeScenes:function(n){t("removeScenes",n),e.removeScenes(n)},moveScene:function(n,r){t("moveScene",n,r),e.moveScene(n,r)},cleanScene:function(n){var r;r=void 0!==n&&!!n,t("cleanScene",n),function(n){t("cleanCurrentScene: ",n),e.cleanCurrentScene(n)}(r)},insertImage:function(n){t("insertImage",n),e.insertImage(n)},insertVideo:function(e){t("insertVideo",e)},completeImageUpload:function(n,r){t("completeImageUpload",n,r),e.completeImageUpload(n,r)},dispatchMagixEvent:function(n){t("dispatchMagixEvent",n),e.dispatchMagixEvent(n.eventName,n.payload)},setTimeDelay:function(n){t("setTimeDelay",n),e.timeDelay=n}}),s.a.register("room.state",{getRoomState:function(){return e.state},getTimeDelay:function(){return e.timeDelay},getPhase:function(){return e.phase},isWritable:function(){return e.isWritable},debugInfo:function(){try{var t=e.screen,n=t.camera,r=t.visionRectangle,a=t.adaptedRectangle,o=t.divElement;return{camera:n,visionRectangle:r,adaptedRectangle:a,divWidth:o.clientWidth,divHeight:o.clientHeight}}catch(e){return{error:e.message}}}})}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"mixCallback",void 0),b(this,"startAudioMixing",(function(e,n,r,a,o){return t.mixCallback=o,s.a.call("rtc.startAudioMixing",{filePath:e,loopback:n,replace:r,cycle:a})})),s.a.register("rtc",{callback:function(e,n){t.mixCallback&&t.mixCallback(e,n)}})}var t,n,r;return t=e,(n=[{key:"stopAudioMixing",value:function(){return s.a.call("rtc.stopAudioMixing")}},{key:"pauseAudioMixing",value:function(){return s.a.call("rtc.pauseAudioMixing")}},{key:"resumeAudioMixing",value:function(){return s.a.call("rtc.resumeAudioMixing")}},{key:"setAudioMixingPosition",value:function(e){return s.a.call("rtc.setAudioMixingPosition",e)}}])&&y(t.prototype,n),r&&y(t,r),e}(),P=n("xU6Y"),O=n("R+TL"),k=n("WURW"),M=n.n(k);function C(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var A=["https://scdncloudharestoragev3.herewhite.com","https://expresscloudharestoragev2.herewhite.com"],I=["https://cdncloudroomv2.herewhite.com","https://cdnroom.netless.pro"],T=window.fetch;var x=function(){window.fetch=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(t)){e.next=2;break}return e.abrupt("return",T.call(this,t,n));case 2:return e.abrupt("return",M()([T.call(this,t,n),T.call(this,E(t),n)]));case 3:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){C(o,r,a,i,c,"next",e)}function c(e){C(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()};function E(e){var t,n=[],r="string"==typeof e?e:e.url;if(-1!==A.findIndex((function(e){return-1!==r.indexOf(e)})))n=A;else{if(-1===I.findIndex((function(e){return-1!==r.indexOf(e)})))return e;n=I}if("string"==typeof e){var a=n.findIndex((function(t){return-1!==e.indexOf(t)})),o=n.length-1-a;t=e.replace(n[a],n[o])}else{var i=n.findIndex((function(t){return-1!==e.url.indexOf(t)})),c=n.length-1-i;t=new Request(e.url.replace(n[i],n[c]),e)}return t}function F(e){var t=A.concat(I);return"string"==typeof e?t.some((function(t){return-1!==e.indexOf(t)})):t.some((function(t){return-1!==e.url.indexOf(t)}))}var N=n("pPTB");n("Q8kY");function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=!1,B=0,_=void 0,L=void 0,z=new w;function U(){var e=void 0,t=void 0;function n(e){if(D){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log(JSON.stringify({funName:e,params:j({},n)})),s.a.call("sdk.logger",{funName:e,params:j({},n)})}}function r(){e&&e.bindHtmlElement(null),t&&t.bindHtmlElement(null)}function i(e){var t=e.enableInterrupterAPI?function(e){var t=s.a.call("sdk.urlInterrupter",e);return t.length>0?t:e}:void 0,r=e.log,a=e.__nativeTags,o=e.__platform,i=(e.initializeOriginsStates,e.userCursor),c=(e.enableInterrupterAPI,e.routeBackup),l=e.enableRtcIntercept,d=R(e,["log","__nativeTags","__platform","initializeOriginsStates","userCursor","enableInterrupterAPI","routeBackup","enableRtcIntercept"]);D=!!r,e,n("newWhiteSdk",e),o&&(window.__platform=o),L=i?new N.UserCursor:void 0,a&&(window.__nativeTags=j(j({},window.__nativeTags),a)),c&&x();var f=d.pptParams||{};l&&(f.rtcClient=z);var m=Object(u.createPlugins)({video:P.videoPlugin,audio:O.audioPlugin});try{_=new u.WhiteWebSdk(j(j({},d),{},{plugins:m,urlInterrupter:t,onWhiteSetupFailed:function(e){n("onWhiteSetupFailed",e),s.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})},pptParams:f})),window.sdk=_}catch(e){n("onWhiteSetupFailed",e),s.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})}}function c(t,a){if(_){r(),n("joinRoom",t);var o=t.timeout,i=void 0===o?45e3:o,c=t.cameraBound,d=R(t,["timeout","cameraBound"]);_.joinRoom(j(j({},d),{},{cursorAdapter:L,disableAutoResize:!0,cameraBound:l(c)}),{onPhaseChanged:function(t){return function(t,n){s.a.call("room.firePhaseChanged",t),setTimeout((function(){e&&e.phase===u.RoomPhase.Reconnecting&&e.disconnect().then((function(){s.a.call("room.fireDisconnectWithError","Reconnect time exceeds ".concat(n," milsceonds, sdk call disconnect automatically"))}))}),n)}(t,i)},onRoomStateChanged:f,onDisconnectWithError:m,onKickedWithReason:p,onCatchErrorWhenAppendFrame:M,onCatchErrorWhenRender:C,onPPTLoadProgress:A,onPPTMediaPlay:I,onPPTMediaPause:T}).then((function(t){return r(),e=t,t.bindHtmlElement(E.current),v(t,n),t.state.roomMembers&&L&&L.setColorAndAppliance(t.state.roomMembers),a(JSON.stringify({state:t.state,observerId:t.observerId,isWritable:t.isWritable}))})).catch((function(e){return a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else a(JSON.stringify({__error:{message:"sdk init failed"}}))}function d(e,a){if(_){var o=e.step,i=void 0===o?500:o,c=e.cameraBound,u=R(e,["step","cameraBound"]);r(),n("replayRoom",e),_.replayRoom(j(j({},u),{},{cursorAdapter:L,disableAutoResize:!0,cameraBound:l(c)}),{onPhaseChanged:y,onLoadFirstFrame:b,onPlayerStateChanged:w,onStoppedWithError:k,onProgressTimeChanged:function(e){return function(e,n){!function(e,n,r){n>=B?(e(),B=Math.ceil(n/r)*r):t&&n+r>t.timeDuration&&(e(),B=n)}((function(){s.a.call("player.onScheduleTimeChanged",e)}),e,n)}(e,i)},onCatchErrorWhenAppendFrame:M,onCatchErrorWhenRender:C,onPPTLoadProgress:A,onPPTMediaPlay:I,onPPTMediaPause:T}).then((function(e){r(),t=e,function(e,t){window.player=e,S(e,t),s.a.registerAsyn("player",{play:function(){t("play"),e.play()},pause:function(){t("pause"),e.pause()},stop:function(){t("stop"),e.stop()},seekToScheduleTime:function(n){t("seekToScheduleTime",n),e.seekToScheduleTime(n)},setObserverMode:function(n){t("setObserverMode",n),e.setObserverMode(n)},setPlaybackSpeed:function(n){t("playbackSpeed",n),e.playbackSpeed=n}}),s.a.register("player.state",{roomUUID:function(){return e.roomUUID},phase:function(){return t("phase",e.phase),e.phase},playerState:function(){try{return t("playerState",e.state),e.state}catch(e){return{}}},playbackSpeed:function(){return t("playbackSpeed",e.playbackSpeed),e.playbackSpeed},timeInfo:function(){var n={scheduleTime:e.scheduleTime,timeDuration:e.timeDuration,framesCount:e.framesCount,beginTimestamp:e.beginTimestamp};return t("timeInfo",n),n}})}(e,n),e.bindHtmlElement(E.current);var o=e.scheduleTime,i=e.timeDuration,c=e.framesCount,u=e.beginTimestamp;return a(JSON.stringify({timeInfo:{scheduleTime:o,timeDuration:i,framesCount:c,beginTimestamp:u}}))})).catch((function(e){return a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else a(JSON.stringify({__error:{message:"sdk init failed"}}))}function f(e){e.roomMembers&&L&&L.setColorAndAppliance(e.roomMembers),s.a.call("room.fireRoomStateChanged",JSON.stringify(e))}function m(e){s.a.call("room.fireDisconnectWithError",e.message)}function p(e){s.a.call("room.fireKickedWithReason",e)}function y(e){if(e!==u.PlayerPhase.WaitingFirstFrame&&L&&t)try{L.setColorAndAppliance(t.state.roomMembers)}catch(e){console.warn(e)}B=0,n("onPhaseChanged:",e),s.a.call("player.onPhaseChanged",e)}function b(){n("onLoadFirstFrame"),s.a.call("player.onPlayerStateChanged",JSON.stringify(t.state)),s.a.call("player.onLoadFirstFrame")}function w(e){e.roomMembers&&L&&L.setColorAndAppliance(e.roomMembers),s.a.call("player.onPlayerStateChanged",JSON.stringify(e))}function k(e){s.a.call("player.onStoppedWithError",JSON.stringify({error:e.message,jsStack:e.stack}))}function M(t,n){e?s.a.call("room.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message}):s.a.call("player.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message})}function C(t){e||s.a.call("player.onCatchErrorWhenRender",{error:t.message})}function A(e,t){}function I(e,t){n("onPPTMediaPlay",e,t),s.a.call("sdk.onPPTMediaPlay",{shapeId:e,type:t})}function T(e,t){n("onPPTMediaPause",e,t),s.a.call("sdk.onPPTMediaPause",{shapeId:e,type:t})}window.testRoom=function(){D=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),c({uuid:"",roomToken:""},(function(){}))},window.testReplay=function(){D=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),d({room:"",roomToken:""},(function(){}))},Object(a.useEffect)((function(){return function(){window.removeEventListener("error",g),window.removeEventListener("message",h)}}),[]),Object(u.setAsyncModuleLoadMode)(u.AsyncModuleLoadMode.StoreAsBase64),window.addEventListener("error",g),window.addEventListener("message",h),s.a.registerAsyn("sdk",{newWhiteSdk:i,joinRoom:c,replayRoom:d});var E=Object(a.useRef)(null);return o.a.createElement("div",{id:"whiteboard-container",ref:E,style:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1}})}i.render(a.createElement(U,null),document.getElementById("root"))},3:function(e,t){},4:function(e,t){},Q8kY:function(e,t,n){}},[["2YZa",1,3,2]]]);