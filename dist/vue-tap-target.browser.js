!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueTapTarget=factory():root.VueTapTarget=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(4);var Component=__webpack_require__(5)(__webpack_require__(3),__webpack_require__(6),"data-v-6d8685c6",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("tap-target",__WEBPACK_IMPORTED_MODULE_0__components_VueTapTarget_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_VueTapTarget_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_VueTapTarget_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueTapTarget_vue__);__webpack_require__.d(__webpack_exports__,"VueTapTarget",function(){return __WEBPACK_IMPORTED_MODULE_0__components_VueTapTarget_vue___default.a});var plugin={version:"0.1.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(0))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"tap-target",props:{backgroundColor:{default:"#3458b2",type:String},color:{default:"#ffffff",type:String},content:{type:String},contentLocation:{default:"nw",type:String},show:{default:!0,type:Boolean},size:{default:"80vw",type:String},target:{type:Object},title:{type:String}},methods:{updatePosition:function(){if(this.show&&this.target){var targetBoundingRect=this.target.$el?this.target.$el.getBoundingClientRect():this.target.getBoundingClientRect(),width=targetBoundingRect.width+30,height=targetBoundingRect.width+30,top=targetBoundingRect.top+targetBoundingRect.height/2-height/2,left=targetBoundingRect.left+targetBoundingRect.width/2-width/2;switch(this.$refs.surround.style.width=Math.ceil(width)+"px",this.$refs.surround.style.height=Math.ceil(height)+"px",this.$refs.surround.style.top=Math.ceil(top)+"px",this.$refs.surround.style.left=Math.ceil(left)+"px",document.body.appendChild(this.$el),this.$refs.overlayTop.style.top=0,this.$refs.overlayTop.style.left=0,this.$refs.overlayTop.style.right=0,this.$refs.overlayTop.style.height=top+"px",this.$refs.overlayRight.style.top=0,this.$refs.overlayRight.style.bottom=0,this.$refs.overlayRight.style.right=0,this.$refs.overlayRight.style.left=left+width+"px",this.$refs.overlayBottom.style.bottom=0,this.$refs.overlayBottom.style.left=0,this.$refs.overlayBottom.style.right=0,this.$refs.overlayBottom.style.top=top+height+"px",this.$refs.overlayLeft.style.top=0,this.$refs.overlayLeft.style.bottom=0,this.$refs.overlayLeft.style.left=0,this.$refs.overlayLeft.style.width=left+"px",this.contentLocation){case"n":this.$refs.content.style.left="50%",this.$refs.content.style.bottom="120%",this.$refs.content.style.transform="translate(-50%, 0)";break;case"ne":this.$refs.content.style.left="50%",this.$refs.content.style.bottom="120%";break;case"e":this.$refs.content.style.left="120%",this.$refs.content.style.top="50%",this.$refs.content.style.transform="translate(0, -50%)";break;case"se":this.$refs.content.style.left="50%",this.$refs.content.style.top="120%";break;case"s":this.$refs.content.style.left="50%",this.$refs.content.style.top="120%",this.$refs.content.style.transform="translate(-50%, 0)";break;case"sw":this.$refs.content.style.right="50%",this.$refs.content.style.top="120%";break;case"w":this.$refs.content.style.right="120%",this.$refs.content.style.top="50%",this.$refs.content.style.transform="translate(0, -50%)";break;case"nw":this.$refs.content.style.right="50%",this.$refs.content.style.bottom="120%"}}},close:function(){this.$emit("close")}},mounted:function(){window.addEventListener("resize",this.updatePosition)},beforeUpdate:function(){this.updatePosition()},beforeDestroy:function(){window.removeEventListener("resize",this.updatePosition),this.$el.remove()}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"tap-target"},[_c("transition",{attrs:{name:"zoom"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.show,expression:"show"}],ref:"surround",staticClass:"tap-target-surround",style:{boxShadow:"0 0 0 "+_vm.size+" "+_vm.backgroundColor}},[_c("div",{staticClass:"tap-target-pulse"}),_vm._v(" "),_c("div",{staticClass:"tap-target-breathe"}),_vm._v(" "),_c("div",{ref:"content",staticClass:"tap-target-content",style:{color:_vm.color,width:"calc("+_vm.size+" * 0.85)"}},[_vm.$slots.default?_vm._t("default"):_vm._e(),_vm._v(" "),_vm.$slots.default?_vm._e():_c("div",[_c("div",{staticStyle:{"margin-bottom":"16px"}},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c("div",{staticStyle:{"font-size":"20px",opacity:"0.8"}},[_vm._v(_vm._s(_vm.content))])])],2)])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.show,expression:"show"}],ref:"overlayTop",staticClass:"tap-target-overlay",on:{click:_vm.close}}),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.show,expression:"show"}],ref:"overlayRight",staticClass:"tap-target-overlay",on:{click:_vm.close}}),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.show,expression:"show"}],ref:"overlayBottom",staticClass:"tap-target-overlay",on:{click:_vm.close}}),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.show,expression:"show"}],ref:"overlayLeft",staticClass:"tap-target-overlay",on:{click:_vm.close}})],1)},staticRenderFns:[]}}])});