window=window||global,window.layalib||(window.layalib=function(e,i){(window._layalibs||(window._layalibs=[])).push({f:e,i:i})}),window.layalib(function(e,i,t){var n=(t.un,t.uns,t["static"]),o=t["class"],a=t.getset,s=(t.__newvec,laya.utils.Browser),l=(laya.events.Event,laya.events.EventDispatcher),r=laya.resource.HTMLImage,u=laya.utils.Handler,d=laya.display.Input,c=laya.net.Loader,f=laya.net.LocalStorage,h=laya.maths.Matrix,v=laya.renders.Render,p=laya.utils.RunDriver,m=laya.media.SoundChannel,g=laya.media.SoundManager,y=(laya.display.Stage,laya.net.URL),w=laya.utils.Utils,_=(function(){function e(){}return o(e,"laya.wx.mini.MiniLocation"),e.__init__=function(){b.window.navigator.geolocation.getCurrentPosition=e.getCurrentPosition,b.window.navigator.geolocation.watchPosition=e.watchPosition,b.window.navigator.geolocation.clearWatch=e.clearWatch},e.getCurrentPosition=function(e,i,t){function n(i){null!=e&&e(i)}var o;o={},o.success=n,o.fail=i,b.window.wx.getLocation(o)},e.watchPosition=function(i,n,o){e._curID++;var a;return a={},a.success=i,a.error=n,e._watchDic[e._curID]=a,t.systemTimer.loop(1e3,null,e._myLoop),e._curID},e.clearWatch=function(i){delete e._watchDic[i],e._hasWatch()||t.systemTimer.clear(null,e._myLoop)},e._hasWatch=function(){var i;for(i in e._watchDic)if(e._watchDic[i])return!0;return!1},e._myLoop=function(){e.getCurrentPosition(e._mySuccess,e._myError)},e._mySuccess=function(i){var t={};t.coords=i,t.timestamp=s.now();var n;for(n in e._watchDic)e._watchDic[n].success&&e._watchDic[n].success(t)},e._myError=function(i){var t;for(t in e._watchDic)e._watchDic[t].error&&e._watchDic[t].error(i)},e._watchDic={},e._curID=0,e}(),function(){function i(){}return o(i,"laya.wx.mini.MiniFileMgr"),i.isLocalNativeFile=function(e){for(var i=0,t=b.nativefiles.length;t>i;i++)if(-1!=e.indexOf(b.nativefiles[i]))return!0;return!1},i.getFileInfo=function(e){var t=e,n=i.filesListObj[t];return null==n?null:n},i.read=function(e,t,n,o,a,s){void 0===t&&(t="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===s&&(s="");var l;l=""==o||-1==o.indexOf("http://")&&-1==o.indexOf("https://")?e:i.getFileNativePath(e),l=y.getAdptedFilePath(l),i.fs.readFile({filePath:l,encoding:t,success:function(e){null!=n&&n.runWith([0,e])},fail:function(e){e&&""!=o?i.downFiles(o,t,n,o,a,s):null!=n&&n.runWith([1])}})},i.downFiles=function(e,t,n,o,a,s,l){void 0===t&&(t="ascii"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===s&&(s=""),void 0===l&&(l=!0);var r=i.wxdown({url:e,success:function(r){200===r.statusCode?i.readFile(r.tempFilePath,t,n,o,a,s,l):403===r.statusCode?null!=n&&n.runWith([0,e]):null!=n&&n.runWith([1,r])},fail:function(e){null!=n&&n.runWith([1,e])}});r.onProgressUpdate(function(e){null!=n&&n.runWith([2,e.progress])})},i.readFile=function(e,t,n,o,a,s,l){void 0===t&&(t="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===s&&(s=""),void 0===l&&(l=!0),e=y.getAdptedFilePath(e),i.fs.readFile({filePath:e,encoding:t,success:function(s){-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?(b.autoCacheFile||a)&&i.copyFile(e,o,n,t,l):null!=n&&n.runWith([0,s])},fail:function(e){e&&null!=n&&n.runWith([1,e])}})},i.downOtherFiles=function(e,t,n,o,a){void 0===n&&(n=""),void 0===o&&(o=!1),void 0===a&&(a=!0),i.wxdown({url:e,success:function(e){200===e.statusCode?(b.autoCacheFile||o)&&-1==n.indexOf("qlogo.cn")&&-1==n.indexOf(".php")?i.copyFile(e.tempFilePath,n,t,"",a):null!=t&&t.runWith([0,e.tempFilePath]):null!=t&&t.runWith([1,e])},fail:function(e){null!=t&&t.runWith([1,e])}})},i.downLoadFile=function(n,o,a,s){void 0===o&&(o=""),void 0===s&&(s="ascii"),e.navigator.userAgent.indexOf("MiniGame")<0?t.loader.load(n,a):"image"==o||"sound"==o?i.downOtherFiles(n,a,n,!0,!1):i.downFiles(n,s,a,n,!0,o,!1)},i.copyFile=function(e,t,n,o,a){void 0===o&&(o=""),void 0===a&&(a=!0);var s=e.split("/"),l=s[s.length-1],r=i.getFileInfo(t),u=i.getFileNativePath(l),d=52428800,c=4194304,f=i.getCacheUseSize();r?r.readyUrl!=t?i.fs.getFileInfo({filePath:e,success:function(e){a&&f+c+e.size>=d&&(e.size>b.minClearSize&&(b.minClearSize=e.size),i.onClearCacheRes()),i.deleteFile(l,t,n,o,e.size)},fail:function(e){null!=n&&n.runWith([1,e])}}):null!=n&&n.runWith([0]):i.fs.getFileInfo({filePath:e,success:function(s){a&&f+c+s.size>=d&&(s.size>b.minClearSize&&(b.minClearSize=s.size),i.onClearCacheRes()),i.fs.copyFile({srcPath:e,destPath:u,success:function(e){i.onSaveFile(t,l,!0,o,n,s.size)},fail:function(e){null!=n&&n.runWith([1,e])}})},fail:function(e){null!=n&&n.runWith([1,e])}})},i.onClearCacheRes=function(){var e=b.minClearSize,t=[];for(var n in i.filesListObj)t.push(i.filesListObj[n]);i.sortOn(t,"times",16);for(var o=0,a=1,s=t.length;s>a;a++){var l=t[a];if(o>=e)break;o+=l.size,i.deleteFile("",l.readyUrl)}},i.sortOn=function(e,i,t){return void 0===t&&(t=0),16==t?e.sort(function(e,t){return e[i]-t[i]}):18==t?e.sort(function(e,t){return t[i]-e[i]}):e.sort(function(e,t){return e[i]-t[i]})},i.getFileNativePath=function(e){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+e},i.deleteFile=function(e,t,n,o,a){void 0===t&&(t=""),void 0===o&&(o=""),void 0===a&&(a=0);var s=i.getFileInfo(t),l=i.getFileNativePath(s.md5);i.fs.unlink({filePath:l,success:function(s){var l=""!=e?!0:!1;if(""!=e){var r=i.getFileNativePath(e);i.fs.copyFile({srcPath:e,destPath:r,success:function(a){i.onSaveFile(t,e,l,o,n,a.size)},fail:function(e){null!=n&&n.runWith([1,e])}})}else i.onSaveFile(t,e,l,o,n,a)},fail:function(e){}})},i.deleteAll=function(){var e=[];for(var t in i.filesListObj)e.push(i.filesListObj[t]);for(var n=1,o=e.length;o>n;n++){var a=e[n];i.deleteFile("",a.readyUrl)}laya.wx.mini.MiniFileMgr.filesListObj&&laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize&&(laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize=0),laya.wx.mini.MiniFileMgr.writeFilesList("",JSON.stringify({}),!1)},i.onSaveFile=function(e,t,n,o,a,l){void 0===n&&(n=!0),void 0===o&&(o=""),void 0===l&&(l=0);var r=e;if(null==i.filesListObj.fileUsedSize&&(i.filesListObj.fileUsedSize=0),n){i.getFileNativePath(t);i.filesListObj[r]={md5:t,readyUrl:e,size:l,times:s.now(),encoding:o},i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)+l,i.writeFilesList(r,JSON.stringify(i.filesListObj),!0),null!=a&&a.runWith([0])}else if(i.filesListObj[r]){var u=parseInt(i.filesListObj[r].size);i.filesListObj.fileUsedSize=parseInt(i.filesListObj.fileUsedSize)-u,delete i.filesListObj[r],i.writeFilesList(r,JSON.stringify(i.filesListObj),!1),null!=a&&a.runWith([0])}},i.writeFilesList=function(e,t,n){var o=i.fileNativeDir+"/"+i.fileListName;i.fs.writeFile({filePath:o,encoding:"utf8",data:t,success:function(e){},fail:function(e){}}),!b.isZiYu&&b.isPosMsgYu&&wx.postMessage({url:e,data:i.filesListObj[e],isLoad:"filenative",isAdd:n})},i.getCacheUseSize=function(){return i.filesListObj&&i.filesListObj.fileUsedSize?i.filesListObj.fileUsedSize:0},i.existDir=function(e,t){i.fs.mkdir({dirPath:e,success:function(e){null!=t&&t.runWith([0,{data:JSON.stringify({})}])},fail:function(e){-1!=e.errMsg.indexOf("file already exists")?i.readSync(i.fileListName,"utf8",t):null!=t&&t.runWith([1,e])}})},i.readSync=function(e,t,n,o){void 0===t&&(t="ascill"),void 0===o&&(o="");var a,s=i.getFileNativePath(e);try{a=i.fs.readFileSync(s,t),null!=n&&n.runWith([0,{data:a}])}catch(l){null!=n&&n.runWith([1])}},i.setNativeFileDir=function(e){i.fileNativeDir=wx.env.USER_DATA_PATH+e},i.filesListObj={},i.fileNativeDir=null,i.fileListName="layaairfiles.txt",i.ziyuFileData={},i.ziyuFileTextureData={},i.loadPath="",i.DESCENDING=2,i.NUMERIC=16,n(i,["fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),i}()),x=function(){function e(){}return o(e,"laya.wx.mini.MiniLocalStorage"),e.__init__=function(){e.items=e},e.setItem=function(e,i){try{wx.setStorageSync(e,i)}catch(t){wx.setStorage({key:e,data:i})}},e.getItem=function(e){return wx.getStorageSync(e)},e.setJSON=function(i,t){e.setItem(i,t)},e.getJSON=function(i){return e.getItem(i)},e.removeItem=function(e){wx.removeStorageSync(e)},e.clear=function(){wx.clearStorageSync()},e.getStorageInfoSync=function(){try{var e=wx.getStorageInfoSync();return console.log(e.keys),console.log(e.currentSize),console.log(e.limitSize),e}catch(i){}return null},e.support=!0,e.items=null,e}(),F=(function(){function e(e,i){this.videoend=!1,this.videourl="",this.videoElement=null,this.onPlayFunc=null,this.onEndedFunC=null,this._duration=NaN,this.position=NaN,void 0===e&&(e=320),void 0===i&&(i=240),this.videoElement=b.window.wx.createVideo({width:e,height:i,autoplay:!0})}o(e,"laya.wx.mini.MiniVideo");var i=e.prototype;return i.on=function(e,i,t){"loadedmetadata"==e?(this.onPlayFunc=t.bind(i),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==e&&(this.onEndedFunC=t.bind(i),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)},i.onTimeUpdateFunc=function(e){this.position=e.position,this._duration=e.duration},i.onPlayFunction=function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====视频加载完成========"),null!=this.onPlayFunc&&this.onPlayFunc()},i.onEndedFunction=function(){this.videoElement&&(this.videoend=!0,console.log("=====视频播放完毕========"),null!=this.onEndedFunC&&this.onEndedFunC())},i.off=function(e,i,t){"loadedmetadata"==e?(this.onPlayFunc=t.bind(i),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==e&&(this.onEndedFunC=t.bind(i),this.videoElement.offEnded=this.onEndedFunction.bind(this))},i.load=function(e){this.videoElement&&(this.videoElement.src=e)},i.play=function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())},i.pause=function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())},i.size=function(e,i){this.videoElement&&(this.videoElement.width=e,this.videoElement.height=i)},i.destroy=function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null},i.reload=function(){this.videoElement&&(this.videoElement.src=this.videourl)},a(0,i,"duration",function(){return this._duration}),a(0,i,"paused",function(){return this.videoElement?this.videoElement.paused:!1}),a(0,i,"loop",function(){return this.videoElement?this.videoElement.loop:!1},function(e){this.videoElement&&(this.videoElement.loop=e)}),a(0,i,"currentTime",function(){return this.videoElement?this.videoElement.initialTime:0},function(e){this.videoElement&&(this.videoElement.initialTime=e)}),a(0,i,"ended",function(){return this.videoend}),a(0,i,"muted",function(){return this.videoElement?this.videoElement.muted:!1},function(e){this.videoElement&&(this.videoElement.muted=e)}),a(0,i,"videoWidth",function(){return this.videoElement?this.videoElement.width:0}),a(0,i,"videoHeight",function(){return this.videoElement?this.videoElement.height:0}),a(0,i,"playbackRate",function(){return this.videoElement?this.videoElement.playbackRate:0},function(e){this.videoElement&&(this.videoElement.playbackRate=e)}),a(0,i,"x",function(){return this.videoElement?this.videoElement.x:0},function(e){this.videoElement&&(this.videoElement.x=e)}),a(0,i,"y",function(){return this.videoElement?this.videoElement.y:0},function(e){this.videoElement&&(this.videoElement.y=e)}),a(0,i,"currentSrc",function(){return this.videoElement.src}),e.__init__=function(){laya.device.media.Video=e},e}(),function(){function e(){}o(e,"laya.wx.mini.MiniImage");var i=e.prototype;return i._loadImage=function(i){var t=this;if(b.isZiYu)return void e.onCreateImage(i,t,!0);var n=!1;if(_.isLocalNativeFile(i)){if(-1==i.indexOf("http://usr/")&&(-1!=i.indexOf("http://")||-1!=i.indexOf("https://")))if(""!=_.loadPath)i=i.split(_.loadPath)[1];else{var o=""!=y.rootPath?y.rootPath:y._basePath,a=i;""!=o&&(i=i.split(o)[1]),i||(i=a)}if(b.subNativeFiles&&0==b.subNativeheads.length)for(var s in b.subNativeFiles){var l=b.subNativeFiles[s];b.subNativeheads=b.subNativeheads.concat(l);for(var r=0;r<l.length;r++)b.subMaps[l[r]]=s+"/"+l[r]}if(b.subNativeFiles&&-1!=i.indexOf("/")){var d=i.split("/")[0]+"/";if(d&&-1!=b.subNativeheads.indexOf(d)){var c=b.subMaps[d];i=i.replace(d,c)}}}else n=!0,i=y.formatURL(i);_.getFileInfo(i)?e.onCreateImage(i,t,!n):-1!=i.indexOf("http://usr/")||-1==i.indexOf("http://")&&-1==i.indexOf("https://")?e.onCreateImage(i,t,!0):b.isZiYu?e.onCreateImage(i,t,!0):_.downOtherFiles(i,new u(e,e.onDownImgCallBack,[i,t]),i)},e.onDownImgCallBack=function(i,t,n,o){void 0===o&&(o=""),n?t.onError(null):e.onCreateImage(i,t,!1,o)},e.onCreateImage=function(e,i,t,n){function o(){var e=i._imgCache[a];e&&(e.onload=null,e.onerror=null,delete i._imgCache[a])}void 0===t&&(t=!1),void 0===n&&(n="");var a;if(b.autoCacheFile)if(t)if(b.isZiYu){var l=y.formatURL(e);a=_.ziyuFileTextureData[l]?_.ziyuFileTextureData[l]:e}else a=e;else if(""!=n)a=n;else{var u=_.getFileInfo(e),d=u.md5;a=_.getFileNativePath(d)}else a=t?e:n;null==i._imgCache&&(i._imgCache={});var c,f=function(){o(),i.event("error","Load image failed")};if("nativeimage"==i._type){var h=function(){o(),i.onLoaded(c)};c=new s.window.Image,c.crossOrigin="",c.onload=h,c.onerror=f,c.src=a,i._imgCache[a]=c}else{var v=new s.window.Image;h=function(){c=r.create(v.width,v.height),c.loadImageSource(v,!0),c._setCreateURL(a),o(),i.onLoaded(c)},v.crossOrigin="",v.onload=h,v.onerror=f,v.src=a,i._imgCache[a]=v}},e}()),C=function(){function i(){}return o(i,"laya.wx.mini.MiniInput"),i._createInputElement=function(){d._initInput(d.area=s.createElement("textarea")),d._initInput(d.input=s.createElement("input")),d.inputContainer=s.createElement("div"),d.inputContainer.style.position="absolute",d.inputContainer.style.zIndex=1e5,s.container.appendChild(d.inputContainer),d.inputContainer.setPos=function(e,i){d.inputContainer.style.left=e+"px",d.inputContainer.style.top=i+"px"},t.stage.on("resize",null,i._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(i){e.dispatchEvent&&e.dispatchEvent("resize")}),g._soundClass=L,g._musicClass=L;var n=b.systemInfo.model,o=b.systemInfo.system;-1!=n.indexOf("iPhone")&&(s.onIPhone=!0,s.onIOS=!0,s.onIPad=!0,s.onAndroid=!1),(-1!=o.indexOf("Android")||-1!=o.indexOf("Adr"))&&(s.onAndroid=!0,s.onIPhone=!1,s.onIOS=!1,s.onIPad=!1)},i._onStageResize=function(){var e=t.stage._canvasTransform.identity();e.scale(s.width/v.canvas.width/s.pixelRatio,s.height/v.canvas.height/s.pixelRatio)},i.wxinputFocus=function(e){var i=d.inputElement.target;(!i||i.editable)&&(b.window.wx.offKeyboardConfirm(),b.window.wx.offKeyboardInput(),b.window.wx.showKeyboard({defaultValue:i.text,maxLength:i.maxChars,multiple:i.multiline,confirmHold:!0,confirmType:i.confirmType||"done",success:function(e){},fail:function(e){}}),b.window.wx.onKeyboardConfirm(function(e){var t=e?e.value:"";i._restrictPattern&&(t=t.replace(/\u2006|\x27/g,""),i._restrictPattern.test(t)&&(t=t.replace(i._restrictPattern,""))),i.text=t,i.event("input"),laya.wx.mini.MiniInput.inputEnter(),i.event("confirm")}),b.window.wx.onKeyboardInput(function(e){var t=e?e.value:"";return i.multiline||-1==t.indexOf("\n")?(i._restrictPattern&&(t=t.replace(/\u2006|\x27/g,""),i._restrictPattern.test(t)&&(t=t.replace(i._restrictPattern,""))),i.text=t,void i.event("input")):void laya.wx.mini.MiniInput.inputEnter()}))},i.inputEnter=function(){d.inputElement.target.focus=!1},i.wxinputblur=function(){i.hideKeyboard()},i.hideKeyboard=function(){b.window.wx.offKeyboardConfirm(),b.window.wx.offKeyboardInput(),b.window.wx.hideKeyboard({success:function(e){console.log("隐藏键盘")},fail:function(e){console.log("隐藏键盘出错:"+(e?e.errMsg:""))}})},i}(),b=function(){function i(){}return o(i,"laya.wx.mini.MiniAdpter"),i.getJson=function(e){return JSON.parse(e)},i.enable=function(){i.init(t.isWXPosMsg,t.isWXOpenDataContext)},i.init=function(n,o){void 0===n&&(n=!1),void 0===o&&(o=!1),i._inited||(i._inited=!0,i.window=e,i.window.hasOwnProperty("wx")&&(i.window.navigator.userAgent.indexOf("MiniGame")<0||(i.isZiYu=o,i.isPosMsgYu=n,i.EnvConfig={},i.isZiYu||(_.setNativeFileDir("/layaairGame"),_.existDir(_.fileNativeDir,u.create(i,i.onMkdirCallBack))),i.systemInfo=wx.getSystemInfoSync(),i.window.focus=function(){},t._getUrlPath=function(){return""},i.window.logtime=function(e){},i.window.alertTimeLog=function(e){},i.window.resetShareInfo=function(){},i.window.CanvasRenderingContext2D=function(){},i.window.CanvasRenderingContext2D.prototype=i.window.wx.createCanvas().getContext("2d").__proto__,i.window.document.body.appendChild=function(){},i.EnvConfig.pixelRatioInt=0,s._pixelRatio=i.pixelRatio(),i._preCreateElement=s.createElement,s.createElement=i.createElement,p.createShaderCondition=i.createShaderCondition,w.parseXMLFromString=i.parseXMLFromString,d._createInputElement=C._createInputElement,i.EnvConfig.load=c.prototype.load,c.prototype.load=E.prototype.load,c.prototype._loadImage=F.prototype._loadImage,f._baseClass=x,x.__init__(),i.window.wx.onMessage(i._onMessage))))},i._onMessage=function(e){switch(e.type){case"changeMatrix":t.stage.transform.identity(),t.stage._width=e.w,t.stage._height=e.h,t.stage._canvasTransform=new h(e.a,e.b,e.c,e.d,e.tx,e.ty);break;case"display":t.stage.frameRate=e.rate||"fast";break;case"undisplay":t.stage.frameRate="sleep"}"opendatacontext"==e.isLoad?e.url&&(_.ziyuFileData[e.url]=e.atlasdata,_.ziyuFileTextureData[e.imgReadyUrl]=e.imgNativeUrl):"openJsondatacontext"==e.isLoad?e.url&&(_.ziyuFileData[e.url]=e.atlasdata):"openJsondatacontextPic"==e.isLoad&&(_.ziyuFileTextureData[e.imgReadyUrl]=e.imgNativeUrl)},i.getUrlEncode=function(e,i){return"arraybuffer"==i?"":"utf8"},i.downLoadFile=function(e,i,t,n){void 0===i&&(i=""),void 0===n&&(n="utf8");var o=_.getFileInfo(e);o?null!=t&&t.runWith([0]):_.downLoadFile(e,i,t,n)},i.remove=function(e,i){_.deleteFile("",e,i,"",0)},i.removeAll=function(){_.deleteAll()},i.hasNativeFile=function(e){return _.isLocalNativeFile(e)},i.getFileInfo=function(e){return _.getFileInfo(e)},i.getFileList=function(){return _.filesListObj},i.exitMiniProgram=function(){i.window.wx.exitMiniProgram()},i.onMkdirCallBack=function(e,i){e||(_.filesListObj=JSON.parse(i.data))},i.pixelRatio=function(){if(!i.EnvConfig.pixelRatioInt)try{return i.EnvConfig.pixelRatioInt=i.systemInfo.pixelRatio,i.systemInfo.pixelRatio}catch(e){}return i.EnvConfig.pixelRatioInt},i.createElement=function(t){if("canvas"==t){var n;return 1==i.idx?i.isZiYu?(n=sharedCanvas,n.style={}):n=e.canvas:n=e.wx.createCanvas(),i.idx++,n}if("textarea"==t||"input"==t)return i.onCreateInput(t);if("div"==t){var o=i._preCreateElement(t);return o.contains=function(e){return null},o.removeChild=function(e){},o}return i._preCreateElement(t)},i.onCreateInput=function(e){var t=i._preCreateElement(e);return t.focus=C.wxinputFocus,t.blur=C.wxinputblur,t.style={},t.value=0,t.parentElement={},t.placeholder={},t.type={},t.setColor=function(e){},t.setType=function(e){},t.setFontFace=function(e){},t.addEventListener=function(e){},t.contains=function(e){return null},t.removeChild=function(e){},t},i.createShaderCondition=function(e){var i=this,t=function(){return i[e.replace("this.","")]};return t},i.sendAtlasToOpenDataContext=function(e){if(!laya.wx.mini.MiniAdpter.isZiYu){var t=c.getRes(y.formatURL(e));if(!t)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";t.meta.image.split(",");if(t.meta&&t.meta.image)for(var n=t.meta.image.split(","),o=e.indexOf("/")>=0?"/":"\\",a=e.lastIndexOf(o),s=a>=0?e.substr(0,a+1):"",l=0,r=n.length;r>l;l++)n[l]=s+n[l];else n=[e.replace(".json",".png")];for(l=0;l<n.length;l++){var u=n[l];i.postInfoToContext(e,u,t)}}},i.postInfoToContext=function(e,i,t){var n={frames:t.frames,meta:t.meta},o=i,a=_.getFileInfo(y.formatURL(i));if(a)var s=a.md5,l=_.getFileNativePath(s);else l=o;if(!l)throw"获取图集的磁盘url路径不存在！";wx.postMessage({url:e,atlasdata:n,imgNativeUrl:l,imgReadyUrl:o,isLoad:"opendatacontext"})},i.sendSinglePicToOpenDataContext=function(e){var i=y.formatURL(e),t=_.getFileInfo(i);if(t){var n=t.md5,o=_.getFileNativePath(n);e=i}else o=e;if(!o)throw"获取图集的磁盘url路径不存在！";wx.postMessage({url:e,imgNativeUrl:o,imgReadyUrl:e,isLoad:"openJsondatacontextPic"})},i.sendJsonDataToDataContext=function(e){if(!laya.wx.mini.MiniAdpter.isZiYu){var i=c.getRes(e);if(!i)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";wx.postMessage({url:e,atlasdata:i,isLoad:"openJsondatacontext"})}},i.EnvConfig=null,i.window=null,i._preCreateElement=null,i._inited=!1,i.systemInfo=null,i.isZiYu=!1,i.isPosMsgYu=!1,i.autoCacheFile=!0,i.minClearSize=5242880,i.subNativeFiles=null,i.subNativeheads=[],i.subMaps=[],i.AutoCacheDownFile=!1,i.parseXMLFromString=function(i){var t;i=i.replace(/>\s+</g,"><");try{t=(new e.Parser.DOMParser).parseFromString(i,"text/xml")}catch(n){throw"需要引入xml解析库文件"}return t},i.idx=1,n(i,["nativefiles",function(){return this.nativefiles=["layaNativeDir","wxlocal"]}]),i}(),E=function(e){function i(){i.__super.call(this)}o(i,"laya.wx.mini.MiniLoader",e);var t=i.prototype;return t.load=function(e,t,n,o,a){void 0===n&&(n=!0),void 0===a&&(a=!1);var s=this;if(s._url=e,!e)return void s.onLoaded(null);if(e=y.customFormat(e),0===e.indexOf("data:image")?s._type=t="image":s._type=t||(t=c.getTypeFromUrl(s._url)),s._cache=n,s._data=null,!a&&c.loadedMap[y.formatURL(e)])return s._data=c.loadedMap[y.formatURL(e)],this.event("progress",1),void this.event("complete",s._data);if(null!=c.parserMap[t])return s._customParse=!0,void(c.parserMap[t]instanceof laya.utils.Handler?c.parserMap[t].runWith(this):c.parserMap[t].call(null,this));var l;switch(t){case"atlas":case"prefab":case"plf":l="json";break;case"font":l="xml";break;case"plfb":l="arraybuffer";break;default:l=t}if(c.preLoadedMap[y.formatURL(e)])return void s.onLoaded(c.preLoadedMap[y.formatURL(e)]);var r=b.getUrlEncode(e,l),d=w.getFileExtension(e);if(-1!=i._fileTypeArr.indexOf(d))b.EnvConfig.load.call(this,e,t,n,o,a);else{if(b.isZiYu&&!_.ziyuFileData[e]&&(e=y.formatURL(e)),b.isZiYu&&_.ziyuFileData[e]){var f=_.ziyuFileData[e];return void s.onLoaded(f)}if(_.getFileInfo(e)){var h=_.getFileInfo(e);h.encoding=null==h.encoding?"utf8":h.encoding,_.readFile(e,h.encoding,new u(i,i.onReadNativeCallBack,[r,e,t,n,o,a,s]),e)}else{if(_.isLocalNativeFile(e)){if(b.subNativeFiles&&0==b.subNativeheads.length)for(var v in b.subNativeFiles){var p=b.subNativeFiles[v];b.subNativeheads=b.subNativeheads.concat(p);for(var m=0;m<p.length;m++)b.subMaps[p[m]]=v+"/"+p[m]}if(b.subNativeFiles&&-1!=e.indexOf("/")){var g=e.split("/")[0]+"/";if(g&&-1!=b.subNativeheads.indexOf(g)){var x=b.subMaps[g];e=e.replace(g,x)}}var F=""!=y.rootPath?y.rootPath:y._basePath,C=e;return""!=F&&(e=e.split(F)[1]),e||(e=C),void _.read(e,r,new u(i,i.onReadNativeCallBack,[r,e,t,n,o,a,s]))}var E=y.formatURL(e);-1!=E.indexOf("http://usr/")||-1==E.indexOf("http://")&&-1==E.indexOf("https://")||b.AutoCacheDownFile?_.readFile(e,r,new u(i,i.onReadNativeCallBack,[r,e,t,n,o,a,s]),e):b.EnvConfig.load.call(s,e,t,n,o,a)}}},i.onReadNativeCallBack=function(e,i,t,n,o,a,s,l,r){if(void 0===n&&(n=!0),void 0===a&&(a=!1),void 0===l&&(l=0),l)1==l&&b.EnvConfig.load.call(s,i,t,n,o,a);else{var u;u="json"==t||"atlas"==t||"prefab"==t||"plf"==t?b.getJson(r.data):"xml"==t?w.parseXMLFromString(r.data):r.data,!b.isZiYu&&b.isPosMsgYu&&"arraybuffer"!=t&&wx.postMessage({url:i,data:u,isLoad:"filedata"}),s.onLoaded(u)}},n(i,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),i}(l),L=function(e){function i(){this._sound=null,this.url=null,this.loaded=!1,this.readyUrl=null,i.__super.call(this)}o(i,"laya.wx.mini.MiniSound",e);var t=i.prototype;return t.load=function(e){if(_.isLocalNativeFile(e)){if(-1!=e.indexOf("http://")||-1!=e.indexOf("https://"))if(""!=_.loadPath)e=e.split(_.loadPath)[1];else{var t=""!=y.rootPath?y.rootPath:y._basePath;""!=t&&(e=e.split(t)[1])}}else e=y.formatURL(e);if(this.url=e,this.readyUrl=e,i._audioCache[this.readyUrl])return void this.event("complete");if(b.autoCacheFile&&_.getFileInfo(e))this.onDownLoadCallBack(e,0);else if(b.autoCacheFile)if(_.isLocalNativeFile(e)){t=""!=y.rootPath?y.rootPath:y._basePath;var n=e;if(""!=t&&(e=e.split(t)[1]),e||(e=n),b.subNativeFiles&&0==b.subNativeheads.length)for(var o in b.subNativeFiles){var a=b.subNativeFiles[o];b.subNativeheads=b.subNativeheads.concat(a);for(var s=0;s<a.length;s++)b.subMaps[a[s]]=o+"/"+a[s]}if(b.subNativeFiles&&-1!=e.indexOf("/")){var l=e.split("/")[0]+"/";if(l&&-1!=b.subNativeheads.indexOf(l)){var r=b.subMaps[l];e=e.replace(l,r)}}this.onDownLoadCallBack(e,0)}else!_.isLocalNativeFile(e)&&-1==e.indexOf("http://")&&-1==e.indexOf("https://")||-1!=e.indexOf("http://usr/")?this.onDownLoadCallBack(e,0):_.downOtherFiles(e,u.create(this,this.onDownLoadCallBack,[e]),e);else this.onDownLoadCallBack(e,0)},t.onDownLoadCallBack=function(e,t){if(t)this.event("error");else{var n;if(b.autoCacheFile){if(_.isLocalNativeFile(e)){var o=""!=y.rootPath?y.rootPath:y._basePath,a=e;""==o||-1==e.indexOf("http://")&&-1==e.indexOf("https://")||(n=e.split(o)[1]),n||(n=a)}else{var s=_.getFileInfo(e);if(s&&s.md5){var l=s.md5;n=_.getFileNativePath(l)}else n=e}this._sound=i._createSound(),this._sound.src=this.url=n}else this._sound=i._createSound(),this._sound.src=e;this._sound.onCanplay(i.bindToThis(this.onCanPlay,this)),this._sound.onError(i.bindToThis(this.onError,this))}},t.onError=function(e){try{console.log("-----1---------------minisound-----id:"+i._id),console.log(e)}catch(e){console.log("-----2---------------minisound-----id:"+i._id),console.log(e)}this.event("error"),this._sound.offError(null)},t.onCanPlay=function(){this.loaded=!0,this.event("complete"),this._sound.offCanplay(null)},t.play=function(e,t){void 0===e&&(e=0),void 0===t&&(t=0);var n;if(this.url==g._bgMusic?(i._musicAudio||(i._musicAudio=i._createSound()),n=i._musicAudio):n=i._audioCache[this.readyUrl]?i._audioCache[this.readyUrl]._sound:i._createSound(),!n)return null;if(b.autoCacheFile&&_.getFileInfo(this.url)){var o=_.getFileInfo(this.url),a=o.md5;n.src=this.url=_.getFileNativePath(a)}else n.src=this.url;var s=new P(n,this);return s.url=this.url,s.loops=t,s.loop=0===t?!0:!1,s.startTime=e,s.play(),g.addChannel(s),s},t.dispose=function(){var e=i._audioCache[this.readyUrl];e&&(e.src="",e._sound&&(e._sound.destroy(),e._sound=null,e=null),delete i._audioCache[this.readyUrl])},a(0,t,"duration",function(){return this._sound.duration}),i._createSound=function(){return i._id++,b.window.wx.createInnerAudioContext()},i.bindToThis=function(e,i){var t=e;return t=e.bind(i)},i._musicAudio=null,i._id=0,i._audioCache={},i}(l),P=(function(e){function i(){i.__super.call(this)}o(i,"laya.wx.mini.MiniAccelerator",e);var t=i.prototype;return t.on=function(t,n,o,a){return e.prototype.on.call(this,t,n,o,a),i.startListen(this.onDeviceOrientationChange),this},t.off=function(t,n,o,a){return void 0===a&&(a=!1),this.hasListener(t)||i.stopListen(),e.prototype.off.call(this,t,n,o,a)},i.__init__=function(){try{var e;if(e=laya.device.motion.Accelerator,!e)return;e.prototype.on=i.prototype.on,e.prototype.off=i.prototype.off}catch(t){}},i.startListen=function(e){if(i._callBack=e,!i._isListening){i._isListening=!0;try{wx.onAccelerometerChange(i.onAccelerometerChange)}catch(t){}}},i.stopListen=function(){i._isListening=!1;try{wx.stopAccelerometer({})}catch(e){}},i.onAccelerometerChange=function(e){var t;t={},t.acceleration=e,t.accelerationIncludingGravity=e,t.rotationRate={},null!=i._callBack&&i._callBack(t)},i._isListening=!1,i._callBack=null,i}(l),function(e){function i(e,t){this._audio=null,this._onEnd=null,this._miniSound=null,i.__super.call(this),this._audio=e,this._miniSound=t,this._onEnd=i.bindToThis(this.__onEnd,this),e.onEnded(this._onEnd)}o(i,"laya.wx.mini.MiniSoundChannel",e);var n=i.prototype;return n.__onEnd=function(){return L._audioCache[this.url]=this._miniSound,1==this.loops?(this.completeHandler&&(t.systemTimer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete")):(this.loops>0&&this.loops--,this.startTime=0,void this.play())},n.play=function(){this.isStopped=!1,g.addChannel(this),this._audio.play()},n.stop=function(){this.isStopped=!0,g.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.stop(),this._audio.offEnded(null),this._miniSound.dispose(),this._audio=null,this._miniSound=null,this._onEnd=null)},n.pause=function(){this.isStopped=!0,this._audio.pause()},n.resume=function(){this._audio&&(this.isStopped=!1,g.addChannel(this),this._audio.play())},a(0,n,"startTime",null,function(e){this._audio&&(this._audio.startTime=e)}),a(0,n,"autoplay",function(){return this._audio.autoplay},function(e){this._audio.autoplay=e}),a(0,n,"position",function(){return this._audio?this._audio.currentTime:0}),a(0,n,"duration",function(){return this._audio?this._audio.duration:0}),a(0,n,"loop",function(){return this._audio.loop},function(e){this._audio.loop=e}),a(0,n,"volume",function(){return this._audio?this._audio.volume:1},function(e){this._audio&&(this._audio.volume=e)}),i.bindToThis=function(e,i){var t=e;return t=e.bind(i)},i}(m))},1e3);