(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"134a":function(t,e,i){var n=i("8034");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("80a3994a",n,!0,{sourceMap:!1,shadowMode:!1})},1674:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAfJJREFUeF7tmU1OxDAMhZ+PwX5WcAkuwRyBHXeAK7DjBEjMAVgOEndgA3cxitRKVaet82Ono8QjzSqt7fflOakSQuc/6lw/HIA7oHMC3gKdG8AXQW8Bb4HOCXgLdG4A3wW8BbwFFAgw8wOA8P8G8ElEfwphL0Iw8y2AI4AbAO9E9FWap7gFmPkewHlWyJGITqXFTd8fIH9o59EA8AbgcUGsGoQV8SHliYiCI7J/GgCeALyuVFAMYUN8SPlCRM/Z6oHybZCZDwB+N4rIhiCIDynviOhnVwAheUShyRAsYi6BKm6BMahmwZqxJHeoAdByQk3xoWZVAKUQaos3AZALYQ/xZgBSIewl3hRALIRhkZp/4U3XruQdRFr4puPqa8A8ecTsbtVrKt7cAQlb5BIEc/HVAES2QzXbV22BabLIdqgy82Nd5muAAxgIRM7+yKuaC6o4IFF8VQjmADLFV4NgCiBC/Hia096HUIz48dww5dmUr7yYZ00ckCMo550YgdIz6gBKhJS8KwldG1cFoCFAI0YKDDUAmoVrxpJgqACwKNgi5hKMYgDdH4szc/cXI91fjfV9OTo57OjzelzaZq59vHgXuHaBUn0OQCLU+rg7oPUZlvS5AyRCrY+7A1qfYUmfO0Ai1Pq4O6D1GZb0uQMkQq2P/wOraxJQwkBxewAAAABJRU5ErkJggg=="},"28e9":function(t,e,i){"use strict";var n=i("f6fc"),o=i.n(n);o.a},"293f":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={nyDialog:i("dc80").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page-login"},[n("v-uni-view",{staticClass:"page-login-video"},[n("v-uni-view",{staticClass:"page-login-video-top"}),n("v-uni-video",{attrs:{id:"myVideo",autoplay:!0,controls:!1,loop:!0,muted:!0,src:i("ea5d"),type:"video/mp4"}})],1),n("v-uni-view",{staticClass:"page-login-logo"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("2989"),mode:""}})],1),n("v-uni-view",{staticClass:"page-login-content"},[n("v-uni-image",{staticClass:"page-login-close",attrs:{src:i("5a3e"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"page-login-title"},[n("v-uni-text",[t._v("注册")])],1),n("v-uni-view",{staticClass:"login-content-item login-content-in"},[n("v-uni-image",{staticClass:"login-content-icon",attrs:{src:i("fe47"),mode:""}}),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入用户名","placeholder-style":"color:#fff"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.accountNumberBlurFn.apply(void 0,arguments)}},model:{value:t.form.accountNumber,callback:function(e){t.$set(t.form,"accountNumber",e)},expression:"form.accountNumber"}})],1),n("v-uni-view",{staticClass:"login-content-item login-content-in"},[n("v-uni-image",{staticClass:"login-content-icon",attrs:{src:i("fe47"),mode:""}}),n("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码","placeholder-style":"color:#fff"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordBlurFn.apply(void 0,arguments)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("v-uni-view",{staticClass:"login-content-item login-content-in"},[n("v-uni-image",{staticClass:"login-content-icon",attrs:{src:i("fe47"),mode:""}}),n("v-uni-input",{attrs:{type:"password",placeholder:"请再次输入密码","placeholder-style":"color:#fff"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordBlurFn.apply(void 0,arguments)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("Verification",{ref:"veri"}),n("v-uni-view",{staticClass:"login-content-in login-content-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("注册")]),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[t._v("...")])],1),n("v-uni-view",{staticClass:"login-content-confirm"},[n("v-uni-radio",{staticClass:"login-content-radio",attrs:{value:"r1",checked:"true"}}),t._v("我已阅读并同意"),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(1)}}},[t._v("相关条款")]),t._v("和"),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(2)}}},[t._v("隐私政策")])],1)],1),n("ny-dialog",{ref:"dialog",attrs:{title:1==t.dialogType?"相关条款":"隐私政策",height:"80%"}},[[1==t.dialogType?n("v-uni-view",[t._v("相关条款")]):t._e(),2==t.dialogType?n("v-uni-view",[t._v("隐私政策")]):t._e()]],2)],1)},a=[]},3265:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"ny-dialog"},[n("v-uni-view",{staticClass:"ny-dialog-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"ny-dialog-content",style:[t.animate,{height:t.height}]},[t.title?t._e():n("v-uni-image",{staticClass:"ny-dialog-close",attrs:{src:i("5a3e"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),t.title?n("v-uni-image",{staticClass:"ny-dialog-mini-close",attrs:{src:i("1674"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),t.title?n("v-uni-view",{staticClass:"ny-dialog-content-title"},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"ny-dialog-content-box"},[t._t("default")],2)],1)],1):t._e()},a=[]},"37bf":function(t,e,i){"use strict";var n=i("4ea4");i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("82c2"),a=i("4ee4"),s=n(i("8e06")),r=n(i("4307")),l={name:"login",components:{Verification:r.default},data:function(){return{loading:!1,dialogType:1,form:{accountNumber:"",password:""},validateStatus:-1}},onShow:function(){var t=uni.createVideoContext("myVideo");t.play()},methods:{openDialog:function(t){this.dialogType=t,this.$refs.dialog.open()},goBack:function(){uni.navigateBack({delta:1})},login:function(){if(this.form.accountNumber)if(this.form.password){if(this.$refs.veri.pass()){var t="pigxpigxpigxpigx",e=(0,a._encrypt)(this.form.password,t);if(-1!==this.validateStatus){var i={name:this.form.accountNumber,password:e,lastLoginVersion:s.default.loginVersion};Object.assign(i,this.$refs.veri.getMixData()),window.mergeAccount&&(i.name=this.form.accountNumber+window.mergeAccount),this.postLogin(i)}else this.validateLogin(e)}}else uni.showToast({icon:"none",title:"密码不能为空"});else uni.showToast({icon:"none",title:"账号不能为空"})},postLogin:function(t){var e=this;this.loading=!0,(0,o._login)(t,(function(t,i){setTimeout((function(){e.loading=!1}),500),t?(e.validateStatus=-1,uni.showToast({icon:"none",title:t.msg,duration:1500}),setTimeout((function(){e.$refs.veri.resetVeri()}),1500)):(uni.showToast({icon:"none",title:"登录成功",duration:1500}),i.firstLogin?uni.showModal({title:"提示",content:"您的登录密码已确认，请及时修改密码，以防泄露！"}):uni.navigateTo({url:"/pages/index/index"}))}))},validateLogin:function(t){var e=this,i={name:this.form.accountNumber,password:t};window.mergeAccoumt&&(i.name=this.accountNumber+window.mergeAccount),this.loading=!0,(0,o._validateLogin)(i,(function(t,i){e.loading=!1,t?(uni.showToast({icon:"none",title:t.msg}),e.$refs.veri.resetVeri()):(e.validateStatus=i.validateStatus?1:0,1===e.validateStatus&&e.login())}))},accountNumberBlurFn:function(t){this.form.accountNumber=t.detail.value,this.form.accountNumber=this.form.accountNumber.toLowerCase(),this.form.accountNumber=this.form.accountNumber.replace(/\ /g,"")},passwordBlurFn:function(t){this.form.password=t.detail.value,this.form.password=this.form.password.replace(/\ /g,"")}}};e.default=l},"4f6f":function(t,e,i){"use strict";var n=i("134a"),o=i.n(n);o.a},"5a3e":function(t,e,i){t.exports=i.p+"static/img/icon_login_close.6eff562e.png"},"5c15":function(t,e,i){"use strict";i.r(e);var n=i("37bf"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},6751:function(t,e,i){"use strict";i.r(e);var n=i("293f"),o=i("5c15");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("28e9");var s,r=i("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"0bfcf131",null,!1,n["a"],s);e["default"]=l.exports},8034:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".ny-dialog[data-v-d3a2d1ba]{position:fixed;width:100%;height:100%;overflow:hidden;top:0;left:0;z-index:999}.ny-dialog-bg[data-v-d3a2d1ba]{width:100%;height:100%;background-color:rgba(0,0,0,.3)}.ny-dialog-content[data-v-d3a2d1ba]{width:100%;position:absolute;left:0;bottom:0;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?40?%;box-sizing:border-box;-webkit-transition:all ease .2s;transition:all ease .2s;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;overflow:hidden}.ny-dialog-content-title[data-v-d3a2d1ba]{height:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#6f9ee3;width:100%}.ny-dialog-content-box[data-v-d3a2d1ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding:%?40?% %?10?% 0 %?10?%}.ny-dialog-close[data-v-d3a2d1ba]{position:absolute;right:%?-20?%;top:%?-8?%;width:%?108?%;height:%?108?%}.ny-dialog-mini-close[data-v-d3a2d1ba]{position:absolute;right:%?10?%;top:%?10?%;width:%?50?%;height:%?50?%}",""]),t.exports=e},"9af2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,defalut:""},height:{type:String,defalut:"80%"}},data:function(){return{show:!1,animate:{transform:"scale(1) translateY(100%)",opacity:.5}}},methods:{open:function(){var t=this;this.show=!0,setTimeout((function(){t.animate={transform:"scale(1) translateY(0)",opacity:1}}),100)},close:function(){var t=this;this.animate={transform:"scale(1) translateY(100%)",opacity:.5},setTimeout((function(){t.show=!1}),200)}},beforeDestory:function(){uni.$off("openHomeNotice")}};e.default=n},cc8c:function(t,e,i){"use strict";i.r(e);var n=i("9af2"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},dc80:function(t,e,i){"use strict";i.r(e);var n=i("3265"),o=i("cc8c");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("4f6f");var s,r=i("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"d3a2d1ba",null,!1,n["a"],s);e["default"]=l.exports},ea5d:function(t,e,i){t.exports=i.p+"static/media/vv.ddfa613b.mp4"},ef9d:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("6150"),s=i("3ebd");e=n(!1);var r=o(a),l=o(s);e.push([t.i,".page-login[data-v-0bfcf131]{width:100%;height:100%;overflow:hidden;position:relative;background-size:cover;background-image:url("+r+")}.page-login-video[data-v-0bfcf131]{position:relative;width:100%;height:100%;pointer-events:none; /* 点击穿透 */z-index:0}.page-login-video-top[data-v-0bfcf131]{width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;background-color:rgba(0,0,0,.3)}.page-login-video uni-video[data-v-0bfcf131]{width:100%;height:100%;pointer-events:none /* 点击穿透 */}.page-login-logo[data-v-0bfcf131]{position:absolute;height:%?240?%;width:%?180?%;top:%?80?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:9}.page-login-content[data-v-0bfcf131]{width:%?700?%;box-sizing:border-box;padding:%?30?% %?40?% %?40?% %?40?%;background-color:hsla(0,0%,100%,.4);position:absolute;bottom:%?100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:%?12?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:9}.login-content-item[data-v-0bfcf131]{width:100%;height:%?100?%;box-sizing:border-box;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-content-in[data-v-0bfcf131]{width:%?500?%;height:%?100?%;border-radius:%?50?%;background-color:hsla(0,0%,100%,.3);overflow:hidden;margin-bottom:%?28?%;box-sizing:border-box;padding:%?20?%}.login-content-in uni-input[data-v-0bfcf131]{font-size:%?24?%}.login-content-btn[data-v-0bfcf131]{background-image:url("+l+");background-size:100% 100%;color:#6f9ee3;font-size:%?32?%;font-weight:700;letter-spacing:%?20?%;text-align:center;padding-left:%?20?%;box-sizing:border-box}.login-content-btn uni-text[data-v-0bfcf131]{position:relative;left:%?16?%}.login-content-icon[data-v-0bfcf131]{width:%?58?%;height:%?58?%;margin-right:%?16?%}.page-login-title[data-v-0bfcf131]{text-align:center;font-size:%?42?%;font-weight:700;letter-spacing:%?12?%;margin-bottom:%?48?%}.page-login-title uni-text[data-v-0bfcf131]{position:relative;left:%?8?%}.login-content-radio[data-v-0bfcf131]{-webkit-transform:scale(.6);transform:scale(.6);position:relative;top:%?-4?%}.login-content-confirm[data-v-0bfcf131]{font-size:%?24?%;-webkit-transform:scale(.9);transform:scale(.9)}.login-content-confirm uni-text[data-v-0bfcf131]{margin:0 %?5?%;color:#4e82d1;font-weight:700}.page-login-close[data-v-0bfcf131]{position:absolute;right:%?-24?%;top:%?-10?%;width:%?146?%;height:%?146?%}",""]),t.exports=e},f6fc:function(t,e,i){var n=i("ef9d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("dad58854",n,!0,{sourceMap:!1,shadowMode:!1})}}]);