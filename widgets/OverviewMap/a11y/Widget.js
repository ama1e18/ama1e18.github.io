// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/on","dojo/_base/html","jimu/utils","dojo/keys"],function(a,c,b,d,e){return{a11y_init:function(){b.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);b.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",0);b.setAttr(this.overviewMapDijit._maximizerDiv,"tabindex",0);d.initFirstFocusNode(this.domNode,this.overviewMapDijit._controllerDiv);d.initLastFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)},a11y_initEvents:function(){this._closedBy508Controller=
this._openedBy508Enter=!1;this._initToShow=!!this.config.overviewMap.visible;this.own(c(this.domNode,"keydown",a.hitch(this,function(f){var a=f.target;!1===this._initToShow&&f.keyCode===e.ENTER&&b.hasClass(a,this.baseClass)&&(this._openedBy508Enter=!0);f.keyCode!==e.TAB||b.hasClass(a,this.baseClass)||(f.preventDefault(),b.hasClass(a,"ovwController")?this.overviewMapDijit._maximizerDiv.focus():b.hasClass(a,"ovwMaximizer")&&this.overviewMapDijit._controllerDiv.focus())})));this.own(c(this.domNode,"focus",
a.hitch(this,function(){!0!==this._closedBy508Controller&&!1===this._initToShow&&d.isInNavMode()&&!this._openedBy508Enter&&10>b.getStyle(this.domNode,"height")&&this.overviewMapDijit.show()})));this.own(c(this.domNode,"blur",a.hitch(this,function(){!1===this._initToShow&&d.isInNavMode()&&!this._openedBy508Enter&&setTimeout(a.hitch(this,function(){b.isDescendant(document.activeElement,this.domNode)||this.overviewMapDijit.hide()}),10)})));this.own(c(this.overviewMapDijit._controllerDiv,"keydown",a.hitch(this,
function(a){a.keyCode===e.ENTER&&(this.overviewMapDijit.visible?(this.overviewMapDijit.hide(),this._openedBy508Enter=!1,this._closedBy508Controller=!0,this.domNode.focus()):(this.overviewMapDijit.show(),!1===this._initToShow&&(this._openedBy508Enter=!0,this._closedBy508Controller=!1)))})));this.own(c(this.overviewMapDijit._maximizerDiv,"keydown",a.hitch(this,function(a){a.keyCode===e.ENTER&&this.overviewMapDijit._maximizeHandler()})))}}});