(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2YZa":function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("tjZM"),n("3I1R"),n("7+kd"),n("0oug"),n("KhsS"),n("gOCb"),n("a57n"),n("GXvd"),n("I1Gw"),n("gXIK"),n("lEou"),n("gbiT"),n("ma9I"),n("qHT+"),n("piMb"),n("yyme"),n("TeQF"),n("fbCW"),n("x0AG"),n("BIHw"),n("XbcX"),n("QWBl"),n("pjDv"),n("yq1k"),n("yXV3"),n("4mDm"),n("uqXc"),n("2B1R"),n("Xe3L"),n("E9XD"),n("9N29"),n("Junv"),n("+2oP"),n("Rfxz"),n("ToJy"),n("94Xl"),n("pDQq"),n("QGkA"),n("c9m3"),n("wZ/5"),n("gtqK"),n("rOQg"),n("9LPj"),n("7+zs"),n("tW5y"),n("DEfu"),n("Tskq"),n("Uydy"),n("eajv"),n("n/mU"),n("PqOI"),n("QNnp"),n("/5zm"),n("CsgD"),n("9mRW"),n("QFcT"),n("a5NK"),n("yiG3"),n("kNcU"),n("KvGi"),n("AmFO"),n("eJiR"),n("I9xj"),n("tl/u"),n("qePV"),n("NbN+"),n("i6QF"),n("WDsR"),n("r/Vq"),n("5uH8"),n("w1rZ"),n("JevA"),n("zKZe"),n("Eqjn"),n("5xtp"),n("T63A"),n("3KgV"),n("wfmh"),n("5DmW"),n("27RR"),n("cDke"),n("NBAS"),n("yQYn"),n("4h0Y"),n("5D5o"),n("tkto"),n("v5b1"),n("W/eh"),n("zuhW"),n("r5Og"),n("ExoC"),n("07d7"),n("B6y2"),n("rNhl"),n("4l63"),n("5s+n"),n("p532"),n("pv2x"),n("SuFq"),n("PzqY"),n("rBZX"),n("XUE8"),n("nkod"),n("f3jH"),n("x2An"),n("25bX"),n("G/JM"),n("1t3B"),n("ftMj"),n("i5pp"),n("TWNs"),n("rB9j"),n("U3f4"),n("JfAA"),n("YGK4"),n("9bJ7"),n("inlA"),n("9tb/"),n("JTJg"),n("PKPk"),n("Rm1S"),n("hDyC"),n("TZCg"),n("2A+d"),n("OM9Z"),n("UxlC"),n("hByQ"),n("EnZy"),n("LKBx"),n("SYor"),n("HiXI"),n("7ueG"),n("z8NH"),n("SpvK"),n("/Yfv"),n("iwkZ"),n("FDzp"),n("XMab"),n("ilnZ"),n("hMMk"),n("+ywr"),n("moxL"),n("qXVe"),n("c162"),n("waxf"),n("0TkE"),n("Onu3"),n("1dYe"),n("IL/d"),n("gvgV"),n("6R/c"),n("YL0P"),n("X5Zq"),n("MoCz"),n("P8wP"),n("7JcK"),n("ypFw"),n("JaFt"),n("zSZm"),n("KVSy"),n("ZJ55"),n("IZzc"),n("s5qe"),n("cvf0"),n("ENF9"),n("H+LF"),n("FZtP"),n("3bBZ"),n("Ew+T"),n("n5b4"),n("Kz25"),n("vxnP"),n("mGGf"),n("ls82"),n("bZMm");var r,o=n("q1tI"),a=n.n(o),i=n("i8i4"),c=(n("HrR1"),n("dSAS")),s=n.n(c),u=n("AitN");function l(e){if(e)return{centerX:e.centerX,centerY:e.centerY,width:e.width,height:e.height,maxContentMode:d(e.maxContentMode),minContentMode:d(e.minContentMode)}}function d(e){if(e){var t=void 0===e.scale?1:e.scale,n=void 0===e.space?0:e.space;r.Scale;switch("string"==typeof e.mode?parseInt(r[e.mode]):e.mode){case r.Scale:return Object(u.contentModeScale)(t);case r.AspectFill:return Object(u.contentModeAspectFill)();case r.AspectFillScale:return Object(u.contentModeAspectFillScale)(t);case r.AspectFit:return Object(u.contentModeAspectFit)();case r.AspectFitScale:return Object(u.contentModeAspectFitScale)(t);case r.AspectFitSpace:return Object(u.contentModeAspectFitSpace)(n);default:return}}}!function(e){e[e.Scale=0]="Scale",e[e.AspectFit=1]="AspectFit",e[e.AspectFitScale=2]="AspectFitScale",e[e.AspectFitSpace=3]="AspectFitSpace",e[e.AspectFill=4]="AspectFill",e[e.AspectFillScale=5]="AspectFillScale"}(r||(r={}));var f=n("wOnQ"),m=n.n(f);function p(e){return void 0===e.roomUUID}function g(e){var t;t={message:e.message,error:e.error},console.log(JSON.stringify(t)),s.a.call("sdk.throwError",t)}function S(e){var t=e.data;"pptImageLoadError"===t.name&&s.a.call("sdk.postMessage",JSON.stringify(t)),t.shapeId&&t.mediaType&&t.action&&s.a.call("sdk.postMessage",JSON.stringify(t))}function h(e,t){var n=function(t,n){r(t,e.scenePreview.bind(e),n)},r=function(e,t,n){var r=document.createElement("div");r.setAttribute("class","shadow"),document.body.appendChild(r),t(e,r,r.clientWidth,r.clientHeight),m()(r,{useCORS:!0,onclone:function(e){Array.from(e.getElementsByTagName("svg")).forEach((function(e){e.setAttribute("width","".concat(e.clientWidth)),e.setAttribute("height","".concat(e.clientHeight))}))}}).then((function(e){window.canvas=e;var t=e.toDataURL();document.body.removeChild(r),n(t)}))};s.a.register("displayer",{setDisableCameraTransform:function(t){e.disableCameraTransform=t},getDisableCameraTransform:function(){return e.disableCameraTransform},setCameraBound:function(n){t("setCameraBound nativeBound",n);var r=l(n);t("setCameraBound bound",r),e.setCameraBound(r)},getMemberState:function(t){return JSON.stringify(e.memberState(t))},scenePathType:function(t){return e.scenePathType(t)},entireScenes:function(){return e.entireScenes()},moveCamera:function(n){t("moveCamera: ",n),e.moveCamera(n)},moveCameraToContain:function(n){t("moveCameraToContain: ",n),e.moveCameraToContain(n)},refreshViewSize:function(){t("refreshViewSize"),e.refreshViewSize()},scalePptToFit:function(n){t("scalePptToFit",n),e.scalePptToFit(n)},convertToPointInWorld:function(n,r){return t("convertToPointInWorld",n,r),e.convertToPointInWorld({x:n,y:r})},setBackgroundColor:function(e,n,r,o){var a=document.getElementById("whiteboard-container");t("setBackgroundColor native",e,n,r,o);var i="rgb(".concat(e,", ").concat(n,", ").concat(r,")");t("setBackgroundColor color",i),a.style.background=i},addHighFrequencyEventListener:function(n,r){t("addHighFrequencyEventListener",n,r),e.addMagixEventListener(n,(function(t){var n=e.uuid||e.roomUUID,r=t.map((function(e){return{uuid:n,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId}}));p(e)?s.a.call("room.fireHighFrequencyEvent",JSON.stringify(r)):s.a.call("player.fireHighFrequencyEvent",JSON.stringify(r))}),r)},addMagixEventListener:function(n){t("addMagixEventListener",n),e.addMagixEventListener(n,(function(n){t("fireMagixEvent",n);var r={uuid:e.uuid||e.roomUUID,eventName:n.event,payload:n.payload,scope:n.scope,authorId:n.authorId};p(e)?s.a.call("room.fireMagixEvent",JSON.stringify(r)):s.a.call("player.fireMagixEvent",JSON.stringify(r))}))},removeMagixEventListener:function(n){t("removeMagixEventListener",n),e.removeMagixEventListener(n)}}),s.a.registerAsyn("displayerAsync",{scenePreview:n,sceneSnapshot:function(t,n){r(t,e.fillSceneSnapshot.bind(e),n)}}),window.html2canvas=m.a,window.pagePreview=n}function v(e,t){window.room=e,h(e,t);s.a.register("ppt",{nextStep:function(){t("nextStep"),e.pptNextStep()},previousStep:function(){t("previousStep"),e.pptPreviousStep()}}),s.a.register("room.sync",{disableSerialization:function(t){e.disableSerialization=t},copy:function(){e.copy()},paste:function(){e.paste()},duplicate:function(){e.duplicate()},delete:function(){e.delete()},disableEraseImage:function(t){e.disableEraseImage=t}}),s.a.registerAsyn("room",{redo:function(t){t(e.redo())},undo:function(t){t(e.undo())},canRedoSteps:function(t){t(e.canRedoSteps)},canUndoSteps:function(t){t(e.canUndoSteps)},setGlobalState:function(n){t("setGlobalState",n),e.setGlobalState(n)},setScenePath:function(n,r){try{t("setScenePath",n),e.setScenePath(n),r(JSON.stringify({}))}catch(e){return r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},setMemberState:function(n){t("setMemberState",n),e.setMemberState(n)},setViewMode:function(n){var r=u.ViewMode[n];void 0===r&&(r=u.ViewMode.Freedom),t("setViewMode",{viewMode:n,mode:r}),e.setViewMode(r)},setWritable:function(t,n){e.setWritable(t).then((function(){n(JSON.stringify({isWritable:e.isWritable,observerId:e.observerId}))})).catch((function(e){n(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))},getMemberState:function(n){return t("getMemberState",e.state.memberState),n(JSON.stringify(e.state.memberState))},getGlobalState:function(n){return t("getGlobalState",e.state.globalState),n(JSON.stringify(e.state.globalState))},getSceneState:function(n){return t("getSceneState",e.state.sceneState),n(JSON.stringify(e.state.sceneState))},getRoomMembers:function(n){return t("getRoomMembers",e.state.roomMembers),n(JSON.stringify(e.state.roomMembers))},getPptImages:function(t){var n=e.state.sceneState.scenes.map((function(e){return e.ppt?e.ppt.src:""}));return t(JSON.stringify(n))},setSceneIndex:function(n,r){t("setSceneIndex",n);try{e.setSceneIndex(n),r(JSON.stringify({}))}catch(e){r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},getScenes:function(n){return t("getScenes",e.state.sceneState.scenes),n(JSON.stringify(e.state.sceneState.scenes))},getZoomScale:function(n){return t("getZoomScale",e.state.zoomScale),n(JSON.stringify(e.state.zoomScale))},getBroadcastState:function(n){return t("getBroadcastState",e.state.zoomScale),n(JSON.stringify(e.state.broadcastState))},getRoomPhase:function(n){return t("getRoomPhase",JSON.stringify(e.phase)),n(e.phase)},disconnect:function(t){e.disconnect().then((function(){t()}))},zoomChange:function(n){t("zoomChange"),e.moveCamera({scale:n})},disableCameraTransform:function(n){t("disableCameraTransform",n),e.disableCameraTransform=n},disableDeviceInputs:function(n){t("disableDeviceInputs",n),e.disableDeviceInputs=n},disableOperations:function(n){t("disableOperations",n),e.disableCameraTransform=n,e.disableDeviceInputs=n},putScenes:function(n,r,o,a){t("putScenes",r),e.putScenes(n,r,o),a(JSON.stringify(e.state.sceneState))},removeScenes:function(n){t("removeScenes",n),e.removeScenes(n)},moveScene:function(n,r){t("moveScene",n,r),e.moveScene(n,r)},cleanScene:function(n){var r;r=void 0!==n&&!!n,t("cleanScene",n),function(n){t("cleanCurrentScene: ",n),e.cleanCurrentScene(n)}(r)},insertImage:function(n){t("insertImage",n),e.insertImage(n)},insertVideo:function(e){t("insertVideo",e)},completeImageUpload:function(n,r){t("completeImageUpload",n,r),e.completeImageUpload(n,r)},dispatchMagixEvent:function(n){t("dispatchMagixEvent",n),e.dispatchMagixEvent(n.eventName,n.payload)},setTimeDelay:function(n){t("setTimeDelay",n),e.timeDelay=n}}),s.a.register("room.state",{getRoomState:function(){return e.state},getTimeDelay:function(){return e.timeDelay},getPhase:function(){return e.phase},isWritable:function(){return e.isWritable},debugInfo:function(){try{var t=e.screen,n=t.camera,r=t.visionRectangle,o=t.adaptedRectangle,a=t.divElement;return{camera:n,visionRectangle:r,adaptedRectangle:o,divWidth:a.clientWidth,divHeight:a.clientHeight}}catch(e){return{error:e.message}}}})}var y=n("xU6Y"),b=n("R+TL"),w=n("WURW"),O=n.n(w);function P(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}var C=["https://scdncloudharestoragev3.herewhite.com","https://expresscloudharestoragev2.herewhite.com"],I=["https://cdncloudroomv2.herewhite.com","https://cdnroom.netless.pro"],M=window.fetch;var T=function(){window.fetch=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(t)){e.next=2;break}return e.abrupt("return",M.call(this,t,n));case 2:return e.abrupt("return",O()([M.call(this,t,n),M.call(this,A(t),n)]));case 3:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){P(a,r,o,i,c,"next",e)}function c(e){P(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()};function A(e){var t,n=[],r="string"==typeof e?e:e.url;if(-1!==C.findIndex((function(e){return-1!==r.indexOf(e)})))n=C;else{if(-1===I.findIndex((function(e){return-1!==r.indexOf(e)})))return e;n=I}if("string"==typeof e){var o=n.findIndex((function(t){return-1!==e.indexOf(t)})),a=n.length-1-o;t=e.replace(n[o],n[a])}else{var i=n.findIndex((function(t){return-1!==e.url.indexOf(t)})),c=n.length-1-i;t=new Request(e.url.replace(n[i],n[c]),e)}return t}function E(e){var t=C.concat(I);return"string"==typeof e?t.some((function(t){return-1!==e.indexOf(t)})):t.some((function(t){return-1!==e.url.indexOf(t)}))}var k=n("pPTB");n("Q8kY");function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=!1,W=0,j=void 0,D=void 0;function B(){var e=void 0,t=void 0;function n(e){if(J){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log(JSON.stringify({funName:e,params:F({},n)})),s.a.call("sdk.logger",{funName:e,params:F({},n)})}}function r(){e&&e.bindHtmlElement(null),t&&t.bindHtmlElement(null)}function i(e){var t=e.enableInterrupterAPI?function(e){var t=s.a.call("sdk.urlInterrupter",e);return t.length>0?t:e}:void 0,r=e.log,o=e.__nativeTags,a=e.__platform,i=(e.initializeOriginsStates,e.userCursor),c=(e.enableInterrupterAPI,e.routeBackup),l=x(e,["log","__nativeTags","__platform","initializeOriginsStates","userCursor","enableInterrupterAPI","routeBackup"]);J=!!r,e,n("newWhiteSdk",e),a&&(window.__platform=a),D=i?new k.UserCursor:void 0,o&&(window.__nativeTags=F(F({},window.__nativeTags),o)),c&&T();var d=Object(u.createPlugins)({video:y.videoPlugin,audio:b.audioPlugin});j=new u.WhiteWebSdk(F(F({},l),{},{plugins:d,urlInterrupter:t}))}function c(t,o){r(),n("joinRoom",t);var a=t.timeout,i=void 0===a?45e3:a,c=t.cameraBound,d=x(t,["timeout","cameraBound"]);j.joinRoom(F(F({},d),{},{cursorAdapter:D,cameraBound:l(c)}),{onPhaseChanged:function(t){return function(t,n){s.a.call("room.firePhaseChanged",t),setTimeout((function(){e&&e.phase===u.RoomPhase.Reconnecting&&e.disconnect().then((function(){s.a.call("room.fireDisconnectWithError","Reconnect time exceeds ".concat(n," milsceonds, sdk call disconnect automatically"))}))}),n)}(t,i)},onRoomStateChanged:f,onDisconnectWithError:m,onKickedWithReason:p,onCatchErrorWhenAppendFrame:I,onCatchErrorWhenRender:M,onPPTLoadProgress:A,onPPTMediaPlay:E,onPPTMediaPause:N}).then((function(t){return r(),e=t,t.bindHtmlElement(R.current),v(t,n),t.state.roomMembers&&D&&D.setColorAndAppliance(t.state.roomMembers),o(JSON.stringify({state:t.state,observerId:t.observerId,isWritable:t.isWritable}))})).catch((function(e){return o(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}function d(e,o){var a=e.step,i=void 0===a?500:a,c=e.cameraBound,u=x(e,["step","cameraBound"]);r(),n("replayRoom",e),j.replayRoom(F(F({},u),{},{cursorAdapter:D,cameraBound:l(c)}),{onPhaseChanged:w,onLoadFirstFrame:O,onPlayerStateChanged:P,onStoppedWithError:C,onProgressTimeChanged:function(e){return function(e,n){!function(e,n,r){n>=W?(e(),W=Math.ceil(n/r)*r):t&&n+r>t.timeDuration&&(e(),W=n)}((function(){s.a.call("player.onScheduleTimeChanged",e)}),e,n)}(e,i)},onCatchErrorWhenAppendFrame:I,onCatchErrorWhenRender:M,onPPTLoadProgress:A,onPPTMediaPlay:E,onPPTMediaPause:N}).then((function(e){r(),t=e,function(e,t){window.player=e,h(e,t),s.a.registerAsyn("player",{play:function(){t("play"),e.play()},pause:function(){t("pause"),e.pause()},stop:function(){t("stop"),e.stop()},seekToScheduleTime:function(n){t("seekToScheduleTime",n),e.seekToScheduleTime(n)},setObserverMode:function(n){t("setObserverMode",n),e.setObserverMode(n)},setPlaybackSpeed:function(n){t("playbackSpeed",n),e.playbackSpeed=n}}),s.a.register("player.state",{roomUUID:function(){return e.roomUUID},phase:function(){return t("phase",e.phase),e.phase},playerState:function(){try{return t("playerState",e.state),e.state}catch(e){return{}}},playbackSpeed:function(){return t("playbackSpeed",e.playbackSpeed),e.playbackSpeed},timeInfo:function(){var n={scheduleTime:e.scheduleTime,timeDuration:e.timeDuration,framesCount:e.framesCount,beginTimestamp:e.beginTimestamp};return t("timeInfo",n),n}})}(e,n),e.bindHtmlElement(R.current);var a=e.scheduleTime,i=e.timeDuration,c=e.framesCount,u=e.beginTimestamp;return o(JSON.stringify({timeInfo:{scheduleTime:a,timeDuration:i,framesCount:c,beginTimestamp:u}}))})).catch((function(e){return o(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}function f(e){e.roomMembers&&D&&D.setColorAndAppliance(e.roomMembers),s.a.call("room.fireRoomStateChanged",JSON.stringify(e))}function m(e){s.a.call("room.fireDisconnectWithError",e.message)}function p(e){s.a.call("room.fireKickedWithReason",e)}function w(e){if(e!==u.PlayerPhase.WaitingFirstFrame&&D&&t)try{D.setColorAndAppliance(t.state.roomMembers)}catch(e){console.warn(e)}W=0,n("onPhaseChanged:",e),s.a.call("player.onPhaseChanged",e)}function O(){n("onLoadFirstFrame"),s.a.call("player.onPlayerStateChanged",JSON.stringify(t.state)),s.a.call("player.onLoadFirstFrame")}function P(e){e.roomMembers&&D&&D.setColorAndAppliance(e.roomMembers),s.a.call("player.onPlayerStateChanged",JSON.stringify(e))}function C(e){s.a.call("player.onStoppedWithError",JSON.stringify({error:e.message,jsStack:e.stack}))}function I(t,n){e?s.a.call("room.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message}):s.a.call("player.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message})}function M(t){e||s.a.call("player.onCatchErrorWhenRender",{error:t.message})}function A(e,t){}function E(e,t){}function N(e,t){}window.testRoom=function(){J=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),c({uuid:"",roomToken:""},(function(){}))},window.testReplay=function(){J=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:"792/uaYcRG0I7ctP9A"}),d({room:"",roomToken:""},(function(){}))},Object(o.useEffect)((function(){return function(){window.removeEventListener("error",g),window.removeEventListener("message",S)}}),[]),Object(u.setAsyncModuleLoadMode)(u.AsyncModuleLoadMode.StoreAsBase64),window.addEventListener("error",g),window.addEventListener("message",S),s.a.registerAsyn("sdk",{newWhiteSdk:i,joinRoom:c,replayRoom:d});var R=Object(o.useRef)(null);return a.a.createElement("div",{ref:R,style:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1}})}i.render(o.createElement(B,null),document.getElementById("root"))},3:function(e,t){},4:function(e,t){},Q8kY:function(e,t,n){}},[["2YZa",1,3,2]]]);