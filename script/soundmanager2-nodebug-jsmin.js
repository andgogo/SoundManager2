/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110306
*/
(function($){function qa(Ga,Ha){function o(c){return function(a){return!this._t||!this._t._a?null:c.call(this,a)}}function ra(){if(b.debugURLParam.test(R))b.debugMode=true}this.flashVersion=8;this.debugFlash=this.debugMode=false;this.useConsole=true;this.waitForWindowLoad=this.consoleOnly=false;this.nullURL="about:blank";this.allowPolling=true;this.useFastPolling=false;this.useMovieStar=true;this.bgColor="#ffffff";this.useHighPerformance=false;this.flashPollingInterval=null;this.flashLoadTimeout=
1E3;this.wmode=null;this.allowScriptAccess="always";this.useHTML5Audio=this.useFlashBlock=false;this.html5Test=/^probably$/i;this.useGlobalHTML5Audio=true;this.requireFlash=false;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:true},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:true},ogg:{type:["audio/ogg; codecs=vorbis"],required:false},
wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:false}};this.defaultOptions={autoLoad:false,stream:true,autoPlay:false,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:true,multiShotEvents:false,position:null,pan:0,type:null,usePolicyFile:false,
volume:100};this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.version=null;this.versionNumber="V2.97a.20110123+DEV";this.movieURL=null;this.url=Ga||null;this.altURL=null;this.enabled=this.swfLoaded=false;this.o=null;this.movieID="sm2-container";this.id=Ha||"sm2movie";this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",
swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;this.sounds={};this.soundIDs=[];this.muted=false;this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=false;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=
/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:false,peakData:false,waveformData:false,eqData:false,movieStar:false};this.sandbox={};this.hasHTML5=null;this.html5={usingFlash:null};this.ignoreFlash=false;var aa,b=this,D,t=navigator.userAgent,k=$,R=k.location.href.toString(),
l=this.flashVersion,j=document,ba,S,w=[],J=false,K=false,r=false,y=false,sa=false,L,s,ca,z,E,da,T,ta,ea,A,ua,M,F,fa,ga,U,ha,va,wa,V,xa,N=null,ia=null,B,ja,G,W,X,ka,p,Y=false,la=false,ya,za,C=null,Aa,Z,u=false,O,x,ma,Ba,q,Ia=Array.prototype.slice,P=false,na,H,Ca,Da=t.match(/pre\//i),Ja=t.match(/(ipad|iphone|ipod)/i);t.match(/mobile/i);var v=t.match(/msie/i),Ka=t.match(/webkit/i),Q=t.match(/safari/i)&&!t.match(/chrome/i),oa=!R.match(/usehtml5audio/i)&&!R.match(/sm2\-ignorebadua/i)&&Q&&t.match(/OS X 10_6_(3|4|5|6)/i),
pa=typeof j.hasFocus!=="undefined"?j.hasFocus():null,I=typeof j.hasFocus==="undefined"&&Q,Ea=!I;this._use_maybe=R.match(/sm2\-useHTML5Maybe\=1/i);this._overHTTP=j.location?j.location.protocol.match(/http/i):null;this.useAltURL=!this._overHTTP;this._global_a=null;if(Ja||Da){b.useHTML5Audio=true;b.ignoreFlash=true;if(b.useGlobalHTML5Audio)P=true}if(Da||this._use_maybe)b.html5Test=/^(probably|maybe)$/i;this.supported=this.ok=function(){return C?r&&!y:b.useHTML5Audio&&b.hasHTML5};this.getMovie=function(c){return v?
k[c]:Q?D(c)||j[c]:D(c)};this.createSound=function(c){function a(){g=W(g);b.sounds[e.id]=new aa(e);b.soundIDs.push(e.id);return b.sounds[e.id]}var g=null,h=null,e=null;if(!r||!b.ok()){ka("soundManager.createSound(): "+B(!r?"notReady":"notOK"));return false}if(arguments.length===2)c={id:arguments[0],url:arguments[1]};e=g=s(c);if(p(e.id,true))return b.sounds[e.id];if(Z(e)){h=a();h._setup_html5(e)}else{if(l>8&&b.useMovieStar){if(e.isMovieStar===null)e.isMovieStar=e.serverURL||(e.type?e.type.match(b.netStreamPattern):
false)||e.url.match(b.netStreamPattern)?true:false;if(e.isMovieStar)if(e.usePeakData)e.usePeakData=false}e=X(e,"soundManager.createSound(): ");h=a();if(l===8)b.o._createSound(e.id,e.onjustbeforefinishtime,e.loops||1,e.usePolicyFile);else{b.o._createSound(e.id,e.url,e.onjustbeforefinishtime,e.usePeakData,e.useWaveformData,e.useEQData,e.isMovieStar,e.isMovieStar?e.bufferTime:false,e.loops||1,e.serverURL,e.duration||null,e.autoPlay,true,e.autoLoad,e.usePolicyFile);if(!e.serverURL){h.connected=true;e.onconnect&&
e.onconnect.apply(h)}}if((e.autoLoad||e.autoPlay)&&!e.serverURL)h.load(e)}e.autoPlay&&!e.serverURL&&h.play();return h};this.destroySound=function(c,a){if(!p(c))return false;var g=b.sounds[c],h;g._iO={};g.stop();g.unload();for(h=0;h<b.soundIDs.length;h++)if(b.soundIDs[h]===c){b.soundIDs.splice(h,1);break}a||g.destruct(true);delete b.sounds[c];return true};this.load=function(c,a){if(!p(c))return false;return b.sounds[c].load(a)};this.unload=function(c){if(!p(c))return false;return b.sounds[c].unload()};
this.start=this.play=function(c,a){if(!r||!b.ok()){ka("soundManager.play(): "+B(!r?"notReady":"notOK"));return false}if(!p(c)){a instanceof Object||(a={url:a});if(a&&a.url){a.id=c;return b.createSound(a).play()}else return false}return b.sounds[c].play(a)};this.setPosition=function(c,a){if(!p(c))return false;return b.sounds[c].setPosition(a)};this.stop=function(c){if(!p(c))return false;return b.sounds[c].stop()};this.stopAll=function(){for(var c in b.sounds)b.sounds[c]instanceof aa&&b.sounds[c].stop()};
this.pause=function(c){if(!p(c))return false;return b.sounds[c].pause()};this.pauseAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].pause()};this.resume=function(c){if(!p(c))return false;return b.sounds[c].resume()};this.resumeAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].resume()};this.togglePause=function(c){if(!p(c))return false;return b.sounds[c].togglePause()};this.setPan=function(c,a){if(!p(c))return false;return b.sounds[c].setPan(a)};this.setVolume=
function(c,a){if(!p(c))return false;return b.sounds[c].setVolume(a)};this.mute=function(c){var a=0;if(typeof c!=="string")c=null;if(c){if(!p(c))return false;return b.sounds[c].mute()}else{for(a=b.soundIDs.length;a--;)b.sounds[b.soundIDs[a]].mute();b.muted=true}return true};this.muteAll=function(){b.mute()};this.unmute=function(c){if(typeof c!=="string")c=null;if(c){if(!p(c))return false;return b.sounds[c].unmute()}else{for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].unmute();b.muted=false}return true};
this.unmuteAll=function(){b.unmute()};this.toggleMute=function(c){if(!p(c))return false;return b.sounds[c].toggleMute()};this.getMemoryUse=function(){if(l===8)return 0;if(b.o)return parseInt(b.o._getMemoryUse(),10)};this.disable=function(c){if(typeof c==="undefined")c=false;if(y)return false;y=true;for(var a=b.soundIDs.length;a--;)wa(b.sounds[b.soundIDs[a]]);L(c);q.remove(k,"load",E);return true};this.canPlayMIME=function(c){var a;if(b.hasHTML5)a=O({type:c});return!C||a?a:c?c.match(b.mimePattern)?
true:false:null};this.canPlayURL=function(c){var a;if(b.hasHTML5)a=O(c);return!C||a?a:c?c.match(b.filePattern)?true:false:null};this.canPlayLink=function(c){if(typeof c.type!=="undefined"&&c.type)if(b.canPlayMIME(c.type))return true;return b.canPlayURL(c.href)};this.getSoundById=function(c){if(!c)throw Error("soundManager.getSoundById(): sID is null/undefined");return b.sounds[c]};this.onready=function(c,a){if(c&&c instanceof Function){a||(a=k);ca("onready",c,a);z();return true}else throw B("needFunction",
"onready");};this.ontimeout=function(c,a){if(c&&c instanceof Function){a||(a=k);ca("ontimeout",c,a);z({type:"ontimeout"});return true}else throw B("needFunction","ontimeout");};this.getMoviePercent=function(){return b.o&&typeof b.o.PercentLoaded!=="undefined"?b.o.PercentLoaded():null};this._wD=this._writeDebug=function(){return true};this._debug=function(){};this.reboot=function(){var c,a;for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].destruct();try{if(v)ia=b.o.innerHTML;N=b.o.parentNode.removeChild(b.o)}catch(g){}ia=
N=null;b.enabled=r=Y=la=J=K=y=b.swfLoaded=false;b.soundIDs=b.sounds=[];b.o=null;for(c in w)if(w.hasOwnProperty(c))for(a=w[c].length;a--;)w[c][a].fired=false;k.setTimeout(function(){b.beginDelayedInit()},20)};this.destruct=function(){b.disable(true)};this.beginDelayedInit=function(){sa=true;F();setTimeout(ua,20);T()};this._html5_events={abort:o(function(){}),canplay:o(function(){this._t._onbufferchange(0);var c=!isNaN(this._t.position)?this._t.position/1E3:null;this._t._html5_canplay=true;if(this._t.position&&
this.currentTime!==c)try{this.currentTime=c}catch(a){}}),load:o(function(){if(!this._t.loaded){this._t._onbufferchange(0);this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration());this._t._onload(true)}}),emptied:o(function(){}),ended:o(function(){this._t._onfinish()}),error:o(function(){this._t._onload(false)}),loadeddata:o(function(){}),loadedmetadata:o(function(){}),loadstart:o(function(){this._t._onbufferchange(1)}),play:o(function(){this._t._onbufferchange(0)}),
playing:o(function(){this._t._onbufferchange(0)}),progress:o(function(c){if(this._t.loaded)return false;var a,g=0,h=c.type==="progress",e=c.target.buffered;a=c.loaded||0;var d=c.total||1;if(e&&e.length){for(a=e.length;a--;)g=e.end(a)-e.start(a);a=g/c.target.duration;h&&isNaN(a)}if(!isNaN(a)){this._t._onbufferchange(0);this._t._whileloading(a,d,this._t._get_html5_duration());a&&d&&a===d&&b._html5_events.load.call(this,c)}}),ratechange:o(function(){}),suspend:o(function(c){b._html5_events.progress.call(this,
c)}),stalled:o(function(){}),timeupdate:o(function(){this._t._onTimer()}),waiting:o(function(){this._t._onbufferchange(1)})};aa=function(c){var a=this,g,h,e;this.sID=c.id;this.url=c.url;this._iO=this.instanceOptions=this.options=s(c);this.pan=this.options.pan;this.volume=this.options.volume;this._lastURL=null;this.isHTML5=false;this._a=null;this.id3={};this._debug=function(){};this._debug();this.load=function(d){var f=null;if(typeof d!=="undefined"){a._iO=s(d);a.instanceOptions=a._iO}else{d=a.options;
a._iO=d;a.instanceOptions=a._iO;if(a._lastURL&&a._lastURL!==a.url){a._iO.url=a.url;a.url=null}}if(!a._iO.url)a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return a;a._lastURL=a.url;a.loaded=false;a.readyState=1;a.playState=0;if(Z(a._iO)){f=a._setup_html5(a._iO);if(!f._called_load){f.load();f._called_load=true;a._iO.autoPlay&&a.play()}}else try{a.isHTML5=false;a._iO=X(W(a._iO));l===8?b.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||
1,a._iO.usePolicyFile):b.o._load(a.sID,a._iO.url,a._iO.stream?true:false,a._iO.autoPlay?true:false,a._iO.loops||1,a._iO.autoLoad?true:false,a._iO.usePolicyFile)}catch(i){ha()}return a};this.unload=function(){if(a.readyState!==0){if(a.isHTML5){h();if(a._a){a._a.pause();a._a.src=""}}else l===8?b.o._unload(a.sID,b.nullURL):b.o._unload(a.sID);g()}return a};this.destruct=function(d){if(a.isHTML5){h();if(a._a){a._a.pause();a._a.src="";P||a._remove_html5_events()}}else{a._iO.onfailure=null;b.o._destroySound(a.sID)}d||
b.destroySound(a.sID,true)};this.start=this.play=function(d,f){var i;f=f===undefined?true:f;d||(d={});a._iO=s(d,a._iO);a._iO=s(a._iO,a.options);a.instanceOptions=a._iO;if(a._iO.serverURL)if(!a.connected){a.getAutoPlay()||a.setAutoPlay(true);return a}if(Z(a._iO)){a._setup_html5(a._iO);e()}if(a.playState===1&&!a.paused)if(i=a._iO.multiShot)a.isHTML5&&a.setPosition(a._iO.position);else return a;if(!a.loaded)if(a.readyState===0){if(!a.isHTML5)a._iO.autoPlay=true;a.load(a._iO)}else if(a.readyState===2)return a;
if(a.paused&&a.position&&a.position>0)a.resume();else{a.playState=1;a.paused=false;if(!a.instanceCount||a._iO.multiShotEvents||l>8&&!a.isHTML5&&!a.getAutoPlay())a.instanceCount++;a.position=typeof a._iO.position!=="undefined"&&!isNaN(a._iO.position)?a._iO.position:0;if(!a.isHTML5)a._iO=X(W(a._iO));if(a._iO.onplay&&f){a._iO.onplay.apply(a);a._onplay_called=true}a.setVolume(a._iO.volume,true);a.setPan(a._iO.pan,true);if(a.isHTML5){e();a._setup_html5().play()}else b.o._start(a.sID,a._iO.loops||1,l===
9?a.position:a.position/1E3)}return a};this.stop=function(d){if(a.playState===1){a._onbufferchange(0);a.resetOnPosition(0);if(!a.isHTML5)a.playState=0;a.paused=false;a._iO.onstop&&a._iO.onstop.apply(a);if(a.isHTML5){if(a._a){a.setPosition(0);a._a.pause();a.playState=0;a._onTimer();h();a.unload()}}else{b.o._stop(a.sID,d);a._iO.serverURL&&a.unload()}a.instanceCount=0;a._iO={}}return a};this.setAutoPlay=function(d){a._iO.autoPlay=d;if(a.isHTML5)a._a&&d&&a.play();else b.o._setAutoPlay(a.sID,d);d&&!a.instanceCount&&
a.readyState===1&&a.instanceCount++};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(d){if(d===undefined)d=0;var f=a.isHTML5?Math.max(d,0):Math.min(a.duration||a._iO.duration,Math.max(d,0));a.position=f;d=a.position/1E3;a.resetOnPosition(a.position);a._iO.position=f;if(a.isHTML5){if(a._a)if(a._html5_canplay)if(a._a.currentTime!==d)try{a._a.currentTime=d}catch(i){}}else{d=l===9?a.position:d;if(a.readyState&&a.readyState!==2)b.o._setPosition(a.sID,d,a.paused||!a.playState)}a.isHTML5&&
a.paused&&a._onTimer(true);return a};this.pause=function(d){if(a.paused||a.playState===0&&a.readyState!==1)return a;a.paused=true;if(a.isHTML5){a._setup_html5().pause();h()}else if(d||d===undefined)b.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){if(!a.paused)return a;a.paused=false;a.playState=1;if(a.isHTML5){a._setup_html5().play();e()}else{a._iO.isMovieStar&&a.setPosition(a.position);b.o._pause(a.sID)}if(!a._onplay_called&&a._iO.onplay){a._iO.onplay.apply(a);
a._onplay_called=true}else a._iO.onresume&&a._iO.onresume.apply(a);return a};this.togglePause=function(){if(a.playState===0){a.play({position:l===9&&!a.isHTML5?a.position:a.position/1E3});return a}a.paused?a.resume():a.pause();return a};this.setPan=function(d,f){if(typeof d==="undefined")d=0;if(typeof f==="undefined")f=false;a.isHTML5||b.o._setPan(a.sID,d);a._iO.pan=d;if(!f)a.pan=d;return a};this.setVolume=function(d,f){if(typeof d==="undefined")d=100;if(typeof f==="undefined")f=false;if(a.isHTML5){if(a._a)a._a.volume=
d/100}else b.o._setVolume(a.sID,b.muted&&!a.muted||a.muted?0:d);a._iO.volume=d;if(!f)a.volume=d;return a};this.mute=function(){a.muted=true;if(a.isHTML5){if(a._a)a._a.muted=true}else b.o._setVolume(a.sID,0);return a};this.unmute=function(){a.muted=false;var d=typeof a._iO.volume!=="undefined";if(a.isHTML5){if(a._a)a._a.muted=false}else b.o._setVolume(a.sID,d?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=function(d,f,i){a._onPositionItems.push({position:d,
method:f,scope:typeof i!=="undefined"?i:a,fired:false});return a};this.processOnPosition=function(){var d,f;d=a._onPositionItems.length;if(!d||!a.playState||a._onPositionFired>=d)return false;for(d=d;d--;){f=a._onPositionItems[d];if(!f.fired&&a.position>=f.position){f.method.apply(f.scope,[f.position]);f.fired=true;b._onPositionFired++}}return true};this.resetOnPosition=function(d){var f,i;f=a._onPositionItems.length;if(!f)return false;for(f=f;f--;){i=a._onPositionItems[f];if(i.fired&&d<=i.position){i.fired=
false;b._onPositionFired--}}return true};this._onTimer=function(d){var f={};if(a._hasTimer||d)if(a._a&&(d||(a.playState>0||a.readyState===1)&&!a.paused)){a.duration=a._get_html5_duration();a.durationEstimate=a.duration;d=a._a.currentTime?a._a.currentTime*1E3:0;a._whileplaying(d,f,f,f,f);return true}else return false};this._get_html5_duration=function(){var d=a._a?a._a.duration*1E3:a._iO?a._iO.duration:undefined;return d&&!isNaN(d)&&d!==Infinity?d:a._iO?a._iO.duration:null};e=function(){a.isHTML5&&
ya(a)};h=function(){a.isHTML5&&za(a)};g=function(){a._onPositionItems=[];a._onPositionFired=0;a._hasTimer=null;a._onplay_called=false;a._a=null;a._html5_canplay=false;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.failures=0;a.loaded=false;a.playState=0;a.paused=false;a.readyState=0;a.muted=false;a.didBeforeFinish=false;a.didJustBeforeFinish=false;a.isBuffering=false;a.instanceOptions={};a.instanceCount=0;a.peakData=
{left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=[];a.eqData.right=[]};g();this._setup_html5=function(d){d=s(a._iO,d);var f=P?b._global_a:a._a;decodeURI(d.url);var i=f&&f._t?f._t.instanceOptions:null;if(f){if(f._t&&i.url===d.url)return f;P&&f._t.playState&&f._t&&d.url!==i.url&&f._t.stop();g();f.src=d.url}else{f=new Audio(d.url);if(P)b._global_a=f}f._called_load=false;a.isHTML5=true;a._a=f;f._t=a;a._add_html5_events();f.loop=d.loops>1?"loop":"";if(d.autoLoad||d.autoPlay){f.autobuffer=
"auto";f.preload="auto";a.load()}else{f.autobuffer=false;f.preload="none"}f.loop=d.loops>1?"loop":"";return f};this._add_html5_events=function(){if(a._a._added_events)return false;var d;a._a._added_events=true;for(d in b._html5_events)b._html5_events.hasOwnProperty(d)&&a._a&&a._a.addEventListener(d,b._html5_events[d],false);return true};this._remove_html5_events=function(){a._a._added_events=false;for(var d in b._html5_events)b._html5_events.hasOwnProperty(d)&&a._a&&a._a.removeEventListener(d,b._html5_events[d],
false)};this._whileloading=function(d,f,i,m){a.bytesLoaded=d;a.bytesTotal=f;a.duration=Math.floor(i);a.bufferLength=m;if(a._iO.isMovieStar)a.durationEstimate=a.duration;else{a.durationEstimate=a._iO.duration?a.duration>a._iO.duration?a.duration:a._iO.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);if(a.durationEstimate===undefined)a.durationEstimate=a.duration}a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};this._onid3=function(d,f){var i=[],m,n;m=0;for(n=d.length;m<
n;m++)i[d[m]]=f[m];a.id3=s(a.id3,i);a._iO.onid3&&a._iO.onid3.apply(a)};this._whileplaying=function(d,f,i,m,n){if(isNaN(d)||d===null)return false;if(a.playState===0&&d>0)d=0;a.position=d;a.processOnPosition();if(l>8&&!a.isHTML5){if(a._iO.usePeakData&&typeof f!=="undefined"&&f)a.peakData={left:f.leftPeak,right:f.rightPeak};if(a._iO.useWaveformData&&typeof i!=="undefined"&&i)a.waveformData={left:i.split(","),right:m.split(",")};if(a._iO.useEQData)if(typeof n!=="undefined"&&n&&n.leftEQ){d=n.leftEQ.split(",");
a.eqData=d;a.eqData.left=d;if(typeof n.rightEQ!=="undefined"&&n.rightEQ)a.eqData.right=n.rightEQ.split(",")}}if(a.playState===1){!a.isHTML5&&b.flashVersion===8&&!a.position&&a.isBuffering&&a._onbufferchange(0);a._iO.whileplaying&&a._iO.whileplaying.apply(a);if((a.loaded||!a.loaded&&a._iO.isMovieStar)&&a._iO.onbeforefinish&&a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-a.position<=a._iO.onbeforefinishtime)a._onbeforefinish()}return true};this._onconnect=function(d){d=d===1;if(a.connected=
d){a.failures=0;if(p(a.sID))if(a.getAutoPlay())a.play(undefined,a.getAutoPlay());else a._iO.autoLoad&&a.load();a._iO.onconnect&&a._iO.onconnect.apply(a,[d])}};this._onload=function(d){d=d?true:false;a.loaded=d;a.readyState=d?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[d]);return true};this._onfailure=function(d,f,i){a.failures++;a._iO.onfailure&&a.failures===1&&a._iO.onfailure(a,d,f,i)};this._onbeforefinish=function(){if(!a.didBeforeFinish){a.didBeforeFinish=true;a._iO.onbeforefinish&&
a._iO.onbeforefinish.apply(a)}};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish){a.didJustBeforeFinish=true;a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)}};this._onfinish=function(){var d=a._iO.onfinish;a._onbufferchange(0);a.resetOnPosition(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=false;a.didJustBeforeFinish=false;if(a.instanceCount){a.instanceCount--;if(!a.instanceCount){a.playState=0;a.paused=false;a.instanceCount=0;a.instanceOptions=
{};a._iO={};h()}if(!a.instanceCount||a._iO.multiShotEvents)d&&d.apply(a)}};this._onbufferchange=function(d){if(a.playState===0)return false;if(d&&a.isBuffering||!d&&!a.isBuffering)return false;a.isBuffering=d===1;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return true};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};ga=function(){return j.body?j.body:j._docElement?j.documentElement:j.getElementsByTagName("div")[0]};D=function(c){return j.getElementById(c)};
s=function(c,a){var g={},h,e;for(h in c)if(c.hasOwnProperty(h))g[h]=c[h];h=typeof a==="undefined"?b.defaultOptions:a;for(e in h)if(h.hasOwnProperty(e)&&typeof g[e]==="undefined")g[e]=h[e];return g};q=function(){function c(e){e=Ia.call(e);var d=e.length;if(g){e[1]="on"+e[1];d>3&&e.pop()}else d===3&&e.push(false);return e}function a(e,d){var f=e.shift(),i=[h[d]];g?f[i](e[0],e[1]):f[i].apply(f,e)}var g=k.attachEvent,h={add:g?"attachEvent":"addEventListener",remove:g?"detachEvent":"removeEventListener"};
return{add:function(){a(c(arguments),"add")},remove:function(){a(c(arguments),"remove")}}}();Z=function(c){return!c.serverURL&&(c.type?O({type:c.type}):O(c.url)||u)};O=function(c){if(!b.useHTML5Audio||!b.hasHTML5)return false;var a,g=b.audioFormats;if(!x){x=[];for(a in g)if(g.hasOwnProperty(a)){x.push(a);if(g[a].related)x=x.concat(g[a].related)}x=RegExp("\\.("+x.join("|")+")","i")}a=typeof c.type!=="undefined"?c.type:null;c=typeof c==="string"?c.toLowerCase().match(x):null;if(!c||!c.length)if(a){c=
a.indexOf(";");c=(c!==-1?a.substr(0,c):a).substr(6)}else return false;else c=c[0].substr(1);if(c&&typeof b.html5[c]!=="undefined")return b.html5[c];else{if(!a)if(c&&b.html5[c])return b.html5[c];else a="audio/"+c;a=b.html5.canPlayType(a);return b.html5[c]=a}};Ba=function(){function c(f){var i,m,n=false;if(!a||typeof a.canPlayType!=="function")return false;if(f instanceof Array){i=0;for(m=f.length;i<m&&!n;i++)if(b.html5[f[i]]||a.canPlayType(f[i]).match(b.html5Test)){n=true;b.html5[f[i]]=true}return n}else return(f=
a&&typeof a.canPlayType==="function"?a.canPlayType(f):false)&&(f.match(b.html5Test)?true:false)}if(!b.useHTML5Audio||typeof Audio==="undefined")return false;var a=typeof Audio!=="undefined"?new Audio(null):null,g,h={},e,d;H();e=b.audioFormats;for(g in e)if(e.hasOwnProperty(g)){h[g]=c(e[g].type);if(e[g]&&e[g].related)for(d=e[g].related.length;d--;)b.html5[e[g].related[d]]=h[g]}h.canPlayType=a?c:null;b.html5=s(b.html5,h);return true};B=function(){};W=function(c){if(l===8&&c.loops>1&&c.stream)c.stream=
false;return c};X=function(c){if(c&&!c.usePolicyFile&&(c.onid3||c.usePeakData||c.useWaveformData||c.useEQData))c.usePolicyFile=true;return c};ka=function(c){typeof console!=="undefined"&&typeof console.warn!=="undefined"&&console.warn(c)};ba=function(){return false};wa=function(c){for(var a in c)if(c.hasOwnProperty(a)&&typeof c[a]==="function")c[a]=ba};V=function(c){if(typeof c==="undefined")c=false;if(y||c)b.disable(c)};xa=function(c){var a=null;if(c)if(c.match(/\.swf(\?.*)?$/i)){if(a=c.substr(c.toLowerCase().lastIndexOf(".swf?")+
4))return c}else if(c.lastIndexOf("/")!==c.length-1)c+="/";return(c&&c.lastIndexOf("/")!==-1?c.substr(0,c.lastIndexOf("/")+1):"./")+b.movieURL};ea=function(){if(l!==8&&l!==9)b.flashVersion=8;var c=b.debugMode||b.debugFlash?"_debug.swf":".swf";if(b.useHTML5Audio&&!u&&b.audioFormats.mp4.required&&b.flashVersion<9)b.flashVersion=9;l=b.flashVersion;b.version=b.versionNumber+(u?" (HTML5-only mode)":l===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(l>8){b.defaultOptions=s(b.defaultOptions,b.flash9Options);b.features.buffering=
true}if(l>8&&b.useMovieStar){b.defaultOptions=s(b.defaultOptions,b.movieStarOptions);b.filePatterns.flash9=RegExp("\\.(mp3|"+b.netStreamTypes.join("|")+")(\\?.*)?$","i");b.mimePattern=b.netStreamMimeTypes;b.features.movieStar=true}else{b.useMovieStar=false;b.features.movieStar=false}b.filePattern=b.filePatterns[l!==8?"flash9":"flash8"];b.movieURL=(l===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",c);b.features.peakData=b.features.waveformData=b.features.eqData=l>8};va=function(c,
a){if(!b.o||!b.allowPolling)return false;b.o._setPolling(c,a)};U=function(c,a){var g=a?a:b.url,h=b.altURL?b.altURL:g,e;e=ga();var d,f,i=G(),m,n=null;n=(n=j.getElementsByTagName("html")[0])&&n.dir&&n.dir.match(/rtl/i);c=typeof c==="undefined"?b.id:c;if(J&&K)return false;if(u){ea();b.oMC=D(b.movieID);S();K=J=true;return false}J=true;ea();b.url=xa(b._overHTTP?g:h);a=b.url;b.wmode=!b.wmode&&b.useHighPerformance&&!b.useMovieStar?"transparent":b.wmode;if(b.wmode!==null&&(t.match(/msie 8/i)||!v&&!b.useHighPerformance)&&
navigator.platform.match(/win32|win64/i)){b.specialWmodeCase=true;b.wmode=null}e={name:c,id:c,src:a,width:"100%",height:"100%",quality:"high",allowScriptAccess:b.allowScriptAccess,bgcolor:b.bgColor,pluginspage:"http://www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:b.wmode,hasPriority:"true"};if(b.debugFlash)e.FlashVars="debug=1";b.wmode||delete e.wmode;if(v){g=j.createElement("div");f='<object id="'+c+'" data="'+a+'" type="'+e.type+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+
e.width+'" height="'+e.height+'"><param name="movie" value="'+a+'" /><param name="AllowScriptAccess" value="'+b.allowScriptAccess+'" /><param name="quality" value="'+e.quality+'" />'+(b.wmode?'<param name="wmode" value="'+b.wmode+'" /> ':"")+'<param name="bgcolor" value="'+b.bgColor+'" />'+(b.debugFlash?'<param name="FlashVars" value="'+e.FlashVars+'" />':"")+"</object>"}else{g=j.createElement("embed");for(d in e)e.hasOwnProperty(d)&&g.setAttribute(d,e[d])}ra();i=G();if(e=ga()){b.oMC=D(b.movieID)?
D(b.movieID):j.createElement("div");if(b.oMC.id){m=b.oMC.className;b.oMC.className=(m?m+" ":b.swfCSS.swfDefault)+(i?" "+i:"");b.oMC.appendChild(g);if(v){d=b.oMC.appendChild(j.createElement("div"));d.className=b.swfCSS.swfBox;d.innerHTML=f}K=true}else{b.oMC.id=b.movieID;b.oMC.className=b.swfCSS.swfDefault+" "+i;d=i=null;if(!b.useFlashBlock)if(b.useHighPerformance)i={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else{i={position:"absolute",width:"6px",height:"6px",
top:"-9999px",left:"-9999px"};if(n)i.left=Math.abs(parseInt(i.left,10))+"px"}if(Ka)b.oMC.style.zIndex=1E4;if(!b.debugFlash)for(m in i)if(i.hasOwnProperty(m))b.oMC.style[m]=i[m];try{v||b.oMC.appendChild(g);e.appendChild(b.oMC);if(v){d=b.oMC.appendChild(j.createElement("div"));d.className=b.swfCSS.swfBox;d.innerHTML=f}K=true}catch(La){throw Error(B("appXHTML"));}}}return true};p=this.getSoundById;M=function(){if(u){U();return false}if(b.o)return false;b.o=b.getMovie(b.id);if(!b.o){if(N){if(v)b.oMC.innerHTML=
ia;else b.oMC.appendChild(N);N=null;J=true}else U(b.id,b.url);b.o=b.getMovie(b.id)}b.oninitmovie instanceof Function&&setTimeout(b.oninitmovie,1);return true};da=function(c){if(c)b.url=c;M()};T=function(){setTimeout(ta,500)};ta=function(){if(Y)return false;Y=true;q.remove(k,"load",T);if(I&&!pa)return false;var c;r||(c=b.getMoviePercent());setTimeout(function(){c=b.getMoviePercent();if(!r&&Ea)if(c===null)if(b.useFlashBlock||b.flashLoadTimeout===0)b.useFlashBlock&&ja();else V(true);else b.flashLoadTimeout!==
0&&V(true)},b.flashLoadTimeout)};da=function(c){if(c)b.url=c;M()};G=function(){var c=[];b.debugMode&&c.push(b.swfCSS.sm2Debug);b.debugFlash&&c.push(b.swfCSS.flashDebug);b.useHighPerformance&&c.push(b.swfCSS.highPerf);return c.join(" ")};ja=function(){B("fbHandler");var c=b.getMoviePercent(),a=b.swfCSS;if(b.ok()){if(b.oMC)b.oMC.className=[G(),a.swfDefault,a.swfLoaded+(b.didFlashBlock?" "+a.swfUnblocked:"")].join(" ")}else{if(C)b.oMC.className=G()+" "+a.swfDefault+" "+(c===null?a.swfTimedout:a.swfError);
b.didFlashBlock=true;z({type:"ontimeout",ignoreInit:true});b.onerror instanceof Function&&b.onerror.apply(k)}};A=function(){function c(){q.remove(k,"focus",A);q.remove(k,"load",A)}if(pa||!I){c();return true}pa=Ea=true;Q&&I&&q.remove(k,"mousemove",A);Y=false;c();return true};L=function(c){if(r)return false;if(u){r=true;z();E();return true}b.useFlashBlock&&b.flashLoadTimeout&&!b.getMoviePercent()||(r=true);if(y||c){if(b.useFlashBlock)b.oMC.className=G()+" "+(b.getMoviePercent()===null?b.swfCSS.swfTimedout:
b.swfCSS.swfError);z({type:"ontimeout"});b.onerror instanceof Function&&b.onerror.apply(k);return false}q.add(k,"unload",ba);if(b.waitForWindowLoad&&!sa){q.add(k,"load",E);return false}else E();return true};ca=function(c,a,g){if(typeof w[c]==="undefined")w[c]=[];w[c].push({method:a,scope:g||null,fired:false})};z=function(c){c||(c={type:"onready"});if(!r&&c&&!c.ignoreInit)return false;var a={success:c&&c.ignoreInit?b.ok():!y},g=c&&c.type?w[c.type]||[]:[];c=[];var h,e=C&&b.useFlashBlock&&!b.ok();for(h=
0;h<g.length;h++)g[h].fired!==true&&c.push(g[h]);if(c.length){h=0;for(g=c.length;h<g;h++){c[h].scope?c[h].method.apply(c[h].scope,[a]):c[h].method(a);if(!e)c[h].fired=true}}return true};E=function(){k.setTimeout(function(){b.useFlashBlock&&ja();z();b.onload instanceof Function&&b.onload.apply(k);b.waitForWindowLoad&&q.add(k,"load",E)},1)};H=function(){if(na!==undefined)return na;var c=false,a=navigator,g=a.plugins,h,e=k.ActiveXObject;if(g&&g.length){if((a=a.mimeTypes)&&a["application/x-shockwave-flash"]&&
a["application/x-shockwave-flash"].enabledPlugin&&a["application/x-shockwave-flash"].enabledPlugin.description)c=true}else if(typeof e!=="undefined"){try{h=new e("ShockwaveFlash.ShockwaveFlash")}catch(d){}c=!!h}return na=c};Aa=function(){var c,a;if(t.match(/iphone os (1|2|3_0|3_1)/i)?true:false){b.hasHTML5=false;u=true;if(b.oMC)b.oMC.style.display="none";return false}if(b.useHTML5Audio){if(!b.html5||!b.html5.canPlayType){b.hasHTML5=false;return true}else b.hasHTML5=true;if(oa)if(H())return true}else return true;
for(a in b.audioFormats)if(b.audioFormats.hasOwnProperty(a)&&b.audioFormats[a].required&&!b.html5.canPlayType(b.audioFormats[a].type))c=true;if(b.ignoreFlash)c=false;u=b.useHTML5Audio&&b.hasHTML5&&!c&&!b.requireFlash;return H()&&c};S=function(){var c,a=[];if(r)return false;if(b.hasHTML5)for(c in b.audioFormats)b.audioFormats.hasOwnProperty(c)&&a.push(c+": "+b.html5[c]);if(u){if(!r){q.remove(k,"load",b.beginDelayedInit);b.enabled=true;L()}return true}M();try{b.o._externalInterfaceTest(false);if(b.allowPolling)va(true,
b.flashPollingInterval?b.flashPollingInterval:b.useFastPolling?10:50);b.debugMode||b.o._disableDebug();b.enabled=true}catch(g){V(true);L();return false}L();q.remove(k,"load",b.beginDelayedInit);return true};ua=function(){if(la)return false;U();M();return la=true};F=function(){if(fa)return false;fa=true;ra();if(!b.useHTML5Audio)if(!H())b.useHTML5Audio=true;Ba();b.html5.usingFlash=Aa();C=b.html5.usingFlash;fa=true;j.removeEventListener&&j.removeEventListener("DOMContentLoaded",F,false);da();return true};
ya=function(c){if(!c._hasTimer)c._hasTimer=true};za=function(c){if(c._hasTimer)c._hasTimer=false};ha=function(){b.onerror instanceof Function&&b.onerror();b.disable()};Ca=function(){if(!oa||!H())return false;var c=b.audioFormats,a,g;for(g in c)if(c.hasOwnProperty(g))if(g==="mp3"||g==="mp4"){b.html5[g]=false;if(c[g]&&c[g].related)for(;a--;)b.html5[c[g].related[a]]=false}};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(b.swfLoaded)return false;(new Date).getTime();b.swfLoaded=
true;I=false;oa&&Ca();v?setTimeout(S,100):S()};ma=function(){if(j.readyState==="complete"){F();j.detachEvent("onreadystatechange",ma)}return true};if(!b.hasHTML5||C){q.add(k,"focus",A);q.add(k,"load",A);q.add(k,"load",T);Q&&I&&q.add(k,"mousemove",A)}if(j.addEventListener)j.addEventListener("DOMContentLoaded",F,false);else j.attachEvent?j.attachEvent("onreadystatechange",ma):ha();j.readyState==="complete"&&setTimeout(F,100)}var Fa=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)Fa=new qa;$.SoundManager=
qa;$.soundManager=Fa})(window);
