"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[6929],{"./dist/esm/ic-badge.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_badge:()=>Badge});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/types-f605c21c.js"),_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/helpers-c601757c.js");const Badge=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLabel=null,this.setBadgeColour=()=>{if(null!==this.customColor&&null!==(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.customColor)){const colorRGBA=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.customColor);this.customColorRGBA=colorRGBA,this.el.style.backgroundColor=`rgba(${colorRGBA.r.toString()}, ${colorRGBA.g.toString()}, ${colorRGBA.b.toString()}, ${colorRGBA.a.toString()})`}},this.getBadgeForeground=()=>{let red,green,blue;switch(this.variant){case"custom":red=this.customColorRGBA.r,green=this.customColorRGBA.g,blue=this.customColorRGBA.b;break;case"error":red=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-error-r")),green=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-error-g")),blue=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-error-b"));break;case"success":red=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-success-r")),green=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-success-g")),blue=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-success-b"));break;case"warning":red=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-warning-r")),green=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-warning-g")),blue=parseInt((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-warning-b"));break;case"info":{const info=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.h)((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-status-info"));red=info.r,green=info.g,blue=info.b;break}case"neutral":{const neutral=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.h)((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-architectural-500"));red=neutral.r,green=neutral.g,blue=neutral.b;break}case"light":{const light=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.h)((0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.g)("--ic-architectural-40"));red=light.r,green=light.g,blue=light.b;break}}const brightness=(299*red+587*green+114*blue)/1e3;this.foregroundColour=brightness>133.3505?_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark:_types_f605c21c_js__WEBPACK_IMPORTED_MODULE_1__.I.Light},this.getTextLabel=()=>{let label;return null!==this.textLabel&&(label=null!==this.maxNumber&&Number(this.textLabel)>this.maxNumber?`${this.maxNumber}+`:this.textLabel),label},this.setAccessibleLabel=()=>{const parentElType=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.el),parentElAriaLabel=(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el).ariaLabel,defaultAriaLabel=this.isAccessibleLabelDefined()?this.accessibleLabel:this.textLabel||"with badge being displayed";null!==(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el)&&("IC-CARD"!==parentElType&&("IC-TAB"!==parentElType||"IC-TAB"===parentElType&&parentElAriaLabel)?(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el).ariaLabel=`${parentElAriaLabel?`${parentElAriaLabel} ,`:""} ${defaultAriaLabel}`:this.ariaLabel=`, ${defaultAriaLabel}`)},this.isAccessibleLabelDefined=()=>(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.accessibleLabel)&&null!==this.accessibleLabel,this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="default",this.textLabel=void 0,this.type="text",this.variant="neutral",this.visible=!0}componentWillLoad(){"custom"===this.variant&&this.setBadgeColour(),this.getBadgeForeground(),this.setAccessibleLabel()}componentDidLoad(){"text"===this.type&&(0,_helpers_c601757c_js__WEBPACK_IMPORTED_MODULE_2__.a)([{prop:this.textLabel,propName:"text-label"}],"Badge")}async showBadge(){this.visible=!0}async hideBadge(){this.visible=!1}render(){const{position,size,type,variant,foregroundColour,visible}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`${position}`]:!0,[`${size}`]:!0,[`${variant}`]:!0,[`${type}`]:!0,[`foreground-${foregroundColour}`]:null!==foregroundColour,show:visible,hide:!visible},id:this.el.id||null,"aria-label":this.ariaLabel,role:"status"},"icon"===type&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge-icon"}),"text"===type&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"small"===size?"badge-small":"badge"},this.getTextLabel()))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Badge.style="@media (prefers-reduced-motion: no-preference){:host(.show){animation:expand var(--ic-transition-duration-slow)}:host(.hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host(.neutral){background-color:var(--ic-architectural-500)}:host(.light){background-color:var(--ic-architectural-40)}:host(.info){background-color:var(--ic-status-info)}:host(.warning){background-color:var(--ic-status-warning-mid)}:host(.error){background-color:var(--ic-status-error)}:host(.success){background-color:var(--ic-status-success)}:host(.small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.dot.default){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.dot.small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.dot.large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.foreground-dark) ::slotted(*){fill:var(--ic-color-primary-text)}:host(.foreground-light) ::slotted(*){fill:white}:host(.foreground-dark) ic-typography{color:var(--ic-color-primary-text)}:host(.foreground-light) ic-typography{color:white}:host(.text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.text.small) ic-typography{padding:0 0.2132rem}:host(.text.large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.icon.small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.icon.large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.far.small),:host(.dot.far.large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.dot.far),:host(.dot.far.small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.dot.near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.inline){position:static}:host(.hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);