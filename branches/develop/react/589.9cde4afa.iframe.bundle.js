"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[589],{"../web-components/dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-003f27c9.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var TabGroup=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function TabGroup(hostRef){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,TabGroup),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="dark",this.contextId="default",this.inline=!1,this.label=void 0}),[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Tab Group")}},{key:"render",value:function render(){var appearance=this.appearance,label=this.label;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist","aria-label":label,class:_defineProperty(_defineProperty({},"light",appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light),"inline",this.inline)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",{appearance:appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Default:appearance,"focus-trigger":"tabFocus"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tabs-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}}],[{key:"delegatesFocus",get:function get(){return!0}}])}();TabGroup.style=":host{--border-bottom-color:var(--ic-architectural-300);display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-border-default)}:host(.inline){margin-bottom:0;border-bottom:none}.light{border-bottom:var(--ic-border-width) solid var(--ic-architectural-white)}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}"}}]);