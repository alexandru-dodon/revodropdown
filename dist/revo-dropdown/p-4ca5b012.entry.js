import{h as i,r as t,c as e,H as o}from"./p-938d70f2.js";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(i){let t=this;do{if(Element.prototype.matches.call(t,i))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const s="uuid";function r(i,t){return i?t?i[t]:i:""}function n(i,t){return t?i[t]:i}const l=t=>{const e=i=>{const e=function(i,t){var e;let o=[];const s=null===(e=null==t?void 0:t.trim())||void 0===e?void 0:e.toLocaleLowerCase();if(s)for(let t of i.source){let e=r(t,i.dataLabel);"string"==typeof e&&(e=e.toLocaleLowerCase(),"start"===i.filter?0===e.indexOf(s)&&o.push(t):e.indexOf(s)>-1&&o.push(t))}else o=i.source;return o}(t,i);t.onFilterChange({value:i,items:e})};return t.filter||(t.filter="contains"),e(t.filterValue),t.autocomplete&&(t.value=t.filterValue),i("input",Object.assign({class:{"filter-box":!0},type:"text"},t,{onClick:i=>{i.preventDefault(),t.onClick&&t.onClick(i)},onInput:i=>{var o;t.onInput&&t.onInput();const s=null===(o=i.currentTarget)||void 0===o?void 0:o.value;e(s)}}))},a=()=>i("span",{class:"arrow-wrapper"},i("svg",{class:"arrow","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},i("path",{fill:"currentColor",d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}))),d=class{constructor(i){t(this,i),this.changeValue=e(this,"changed",7),this.close=e(this,"close",7),this.open=e(this,"open",7),this.uuid="",this.isClosing=!1,this.currentItem=null,this.isVisible=!1,this.dataLabel=void 0,this.value=void 0,this.currentFilter=void 0,this.dataId=void 0,this.autoClose=!0,this.source=[],this.appendSource=[],this.placeholder="Select",this.appendTo="body",this.filter=void 0,this.maxHeight=void 0,this.hasFilter=!0,this.multiple=!1,this.autocomplete=!1,this.autoFocus=!1}async doClose(i=!1){!i&&this.close.emit().defaultPrevented||(this.isClosing=!0,this.isVisible=!1)}async doOpen(){this.open.emit().defaultPrevented||(this.isVisible=!0)}async doChange(i,t){const e=n(i,this.dataId);if(this.multiple){let i=[...this.value||[]];Array.isArray(this.value)?i.push(e):i=[e],this.value=i}else this.value=e;this.changeValue.emit({val:this.value,originalEvent:t}),this.autocompleteInput&&(this.autocompleteInput.value=this.multiple?"":r(this.currentItem,this.dataLabel)),this.autoClose&&this.isVisible&&this.doClose()}onMouseUp(i){var t;this.isVisible&&!i.defaultPrevented&&!(null===(t=i.target)||void 0===t?void 0:t.closest(`[${s}="${this.uuid}"]`))&&this.doClose()}onKey(i){"Escape"===i.code&&(i.preventDefault(),this.doClose())}onValueChanged(i){console.log("onValueChanged",i),this.currentItem=Array.isArray(i)?i.map((i=>this.getValue(i))):this.getValue(i),console.log("onValueChanged",this.currentItem)}connectedCallback(){this.uuid=`${this.uuidv4((new Date).getTime())}-rvdropdown`,void 0!==this.value&&this.onValueChanged(this.value)}disconnectedCallback(){this.doClose(!0)}componentDidRender(){this.dropdown&&"body"===this.appendTo&&document.body.appendChild(this.dropdown),this.isVisible&&this.updateStyles(),this.dropdownInput&&this.dropdownInput.focus(),this.autoFocus&&this.autocomplete&&setTimeout((()=>{var i;return null===(i=this.autocompleteInput)||void 0===i?void 0:i.focus()}),0)}getSelectedItemLabel(i){return i&&r(i,this.dataLabel)||""}renderDropdown(){return i("div",{class:"revo-dropdown-list",ref:i=>this.dropdown=i},i("div",Object.assign({},{[s]:this.uuid},{class:"dropdown-inner",ref:i=>this.dropdownInner=i}),this.hasFilter&&!this.autocomplete?i(l,{ref:i=>this.dropdownInput=i,source:this.source,filter:this.filter,dataLabel:this.dataLabel,value:this.currentFilter||"",filterValue:this.currentFilter||"",onFilterChange:i=>{var t;this.currentFilter=i.value,this.currentSource=i.items.concat(this.appendSource),null===(t=this.revoList)||void 0===t||t.refresh(this.currentSource)}}):void 0,i("revo-list",{ref:i=>this.revoList=i,isFocused:!0,sourceItems:this.currentSource,dataLabel:this.dataLabel,onChanged:i=>this.doChange(i.detail.item,i.detail.e)})))}deselect(i){if(Array.isArray(this.currentItem)){const t=[...this.currentItem];delete t[i],this.currentItem=[...t].filter((i=>i))}}renderSelect(){const t=this.multiple?"":this.getSelectedItemLabel(this.currentItem);return i("input",{type:"text",disabled:!0,class:"filter-box",value:t})}renderAutocomplete(){const t=this.multiple?"":this.getSelectedItemLabel(this.currentItem);return i(l,{ref:i=>this.autocompleteInput=i,autocomplete:"true",source:this.source,filter:this.filter,dataLabel:this.dataLabel,value:t,filterValue:this.currentFilter,onKeyDown:i=>{if(!this.isVisible)switch(i.code){case"ArrowUp":case"ArrowDown":i.preventDefault(),this.showAutoComplete()}},onInput:()=>this.showAutoComplete(),onFocus:()=>this.showAutoComplete(),onClick:()=>this.showAutoComplete(),onFilterChange:i=>{var t;this.currentFilter=i.value,this.currentSource=i.items.concat(this.appendSource),null===(t=this.revoList)||void 0===t||t.refresh(this.currentSource)}})}renderMultiselected(){let t=[];if(Array.isArray(this.currentItem)&&(t=[...this.currentItem]),console.log("renderMultiselected",t,this.dataLabel),t.length)return i("div",null,t.map(((t,e)=>i("button",{style:{"margin-left":e>0?"2px":""},onClick:i=>{i.stopPropagation(),this.deselect(e)}},i("span",{style:{"margin-right":"5px"}},t," ",this.getSelectedItemLabel(t)),i("span",{style:{cursor:"pointer","font-weight":"bold"}},"✕")))))}render(){var t;let e;this.isVisible&&(e=this.renderDropdown());const r={[s]:this.uuid,class:{active:this.isVisible,shrink:this.isVisible||!!this.currentItem||!!(null===(t=this.autocompleteInput)||void 0===t?void 0:t.value)},ref:i=>this.element=i,onClick:i=>this.selectClick(i)};return this.autocomplete&&(r.autocomplete=!0),i(o,Object.assign({},r),i("label",null,this.placeholder),i("div",{class:"rv-dr-root"},this.multiple&&this.renderMultiselected(),this.autocomplete?this.renderAutocomplete():this.renderSelect(),i("span",{class:"actions"},i(a,null)),i("fieldset",null,i("legend",null,i("span",null,this.placeholder)))),e)}showAutoComplete(){this.isVisible||this.isClosing||(this.isVisible=!0),this.isClosing=!1}getValue(i){for(let t in this.source){const e=this.source[t];if(i==n(e,this.dataId))return e}return null}selectClick(i){i.defaultPrevented||(this.isVisible?this.doClose():this.doOpen())}updateStyles(){if(!this.dropdown)return;const{top:i,left:t,height:e}=this.element.getBoundingClientRect(),o=this.clientRectangle();let s=i+e+o.top;const r={opacity:1,display:"block"};s>o.centerY?(r.top=s-e+"px",r.maxHeight=s-e-o.top-50,this.dropdown.classList.add("top")):(r.top=`${s}px`,r.maxHeight=o.bottom-s-50,this.dropdown.classList.remove("top"));let n=t+o.left;const l=o.right-(n+this.dropdown.clientWidth);l<0&&(n+=l),r.left=`${n}px`,this.dropdownInner.style.maxHeight=`${Math.min(r.maxHeight,this.maxHeight||r.maxHeight)}px`,this.dropdownInner.style.maxWidth=r.maxWidth;for(let i in r)this.dropdown.style[i]=r[i]}clientRectangle(){const i={top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,bottom:0,centerY:0,height:document.body.clientHeight,left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,right:0,width:document.body.clientWidth,centerX:0};return i.bottom=i.top+i.height,i.right=i.left+i.width,i.centerY=i.top+i.height/2,i.centerX=i.left+i.width/2,i}uuidv4(i){return`${i}-xx-y`.replace(/[xy]/g,(i=>{var t=16*Math.random()|0;return("x"==i?t:3&t|8).toString(16)}))}static get watchers(){return{value:["onValueChanged"]}}};d.style='revo-dropdown{font-size:1em;font-family:"Roboto", "Helvetica", "Arial", sans-serif;font-weight:400;line-height:2em;letter-spacing:0.01em;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;vertical-align:top;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;position:relative}revo-dropdown .rv-dr-root{padding:5px 9px;padding-right:35px;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;border-radius:4px;cursor:text;display:-ms-inline-flexbox;display:inline-flex;position:relative;font-size:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center}revo-dropdown input.filter-box{padding-left:6px;padding:9.5px 4px;width:0;min-width:30px;-ms-flex-positive:1;flex-grow:1;text-overflow:ellipsis;border:0;height:1.1876em;margin:0;display:block;background:none;-webkit-box-sizing:content-box;box-sizing:content-box;letter-spacing:inherit;-webkit-animation-duration:10ms;animation-duration:10ms}revo-dropdown input.filter-box:focus{outline:none}revo-dropdown .actions{right:9px;top:calc(50% - $font-size);position:absolute}revo-dropdown label{font-size:1rem;z-index:100;top:0;left:0;position:absolute;display:block;-webkit-transform-origin:top left;transform-origin:top left;line-height:1;-webkit-transition:color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;-webkit-transform:translate(14px, 14px) scale(1);transform:translate(14px, 14px) scale(1);pointer-events:none}revo-dropdown fieldset{border-color:#ececec;top:-5px;left:0;right:0;bottom:0;margin:0;padding:0 8px;overflow:hidden;position:absolute;z-index:0;border-style:solid;border-width:1px;border-radius:inherit;pointer-events:none}revo-dropdown fieldset legend{width:auto;height:11px;display:block;padding:0;font-size:0.75em;max-width:0.01px;text-align:left;-webkit-transition:max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;transition:max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;visibility:hidden}revo-dropdown fieldset legend>span{display:inline-block;padding-left:5px;padding-right:5px}revo-dropdown.shrink label{-webkit-transform:translate(14px, -6px) scale(0.75);transform:translate(14px, -6px) scale(0.75)}revo-dropdown.shrink legend{max-width:1000px;-webkit-transition:max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;transition:max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms}revo-dropdown .arrow{width:9px;margin-top:5px;margin-left:5px;opacity:0.4}revo-dropdown .arrow-wrapper{width:15px;text-align:center}revo-dropdown.active label{color:#0089ff}revo-dropdown.active fieldset{border-color:#0089ff}.revo-dropdown-list{font-size:1em;font-family:"Roboto", "Helvetica", "Arial", sans-serif;font-weight:400;line-height:2em;letter-spacing:0.01em;position:absolute;-webkit-transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 160ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 160ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 160ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 160ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 160ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;z-index:999;display:none;opacity:0}.revo-dropdown-list.top .dropdown-inner{bottom:2px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.revo-dropdown-list.top .dropdown-inner .filter-box{margin-bottom:0}.revo-dropdown-list:not(.top) .dropdown-inner{top:2px;-ms-flex-direction:column;flex-direction:column}.revo-dropdown-list:not(.top) .dropdown-inner .filter-box{margin-top:0}.revo-dropdown-list .dropdown-inner{display:-ms-flexbox;display:flex;max-height:100%;position:absolute;padding:8px 0;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:16px;min-width:16px;-webkit-box-shadow:0 0 14px 0 rgba(53, 64, 82, 0.05);box-shadow:0 0 14px 0 rgba(53, 64, 82, 0.05);border:1px solid rgba(0, 0, 0, 0.05);border-radius:4px;color:rgba(0, 0, 0, 0.87);overflow:hidden;background-color:#fff}.revo-dropdown-list .dropdown-inner .filter-box{border:1px solid #ececec;min-height:30px;line-height:30px;margin:10px;border-radius:6px}.revo-dropdown-list .dropdown-inner .filter-box:focus{outline:none;border-color:#0089ff}';const h=class{constructor(i){t(this,i),this.changed=e(this,"changed",3),this.currentItem=0,this.sourceItems=[],this.isFocused=!1,this.dataLabel=void 0}onKey(i){let t;if(this.isFocused)switch(i.code){case"ArrowUp":if(i.preventDefault(),this.currentItem<=0)return;this.currentItem--;break;case"ArrowDown":i.preventDefault(),this.sourceItems[this.currentItem+1]&&this.currentItem++;break;case"Tab":case"Enter":i.preventDefault(),t=this.sourceItems[this.currentItem],t&&this.changed.emit({item:t,e:i})}}async refresh(i){this.sourceItems=i}componentDidRender(){var i;null===(i=this.selectedEl)||void 0===i||i.scrollIntoView({block:"nearest",inline:"nearest"})}render(){this.selectedEl=void 0;const t=[];for(let e in this.sourceItems){const o=this.sourceItems[e],s=parseInt(e)===this.currentItem,n=i("li",Object.assign({},{class:{selected:s},ref:i=>{s&&(this.selectedEl=i)},onClick:i=>this.changed.emit({item:o,e:i})}),r(o,this.dataLabel));t.push(n)}return i("ul",null,t)}};h.style="revo-list{overflow-x:hidden;overflow-y:auto;max-height:100%;display:block}revo-list ul{margin:0;padding:0;outline:0;list-style:none}revo-list ul>li{width:auto;overflow:hidden;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:48px;font-weight:400;line-height:1.5;padding-top:6px;white-space:nowrap;padding-bottom:6px;padding-left:16px;padding-right:16px;display:-ms-flexbox;display:flex;position:relative;text-align:left;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;text-decoration:none;cursor:pointer}revo-list ul>li.selected{background-color:rgba(0, 0, 0, 0.04)}revo-list ul>li:hover{background-color:rgba(0, 0, 0, 0.04)}";export{d as revo_dropdown,h as revo_list}