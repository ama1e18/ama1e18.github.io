// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/create-load-project.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTCreateProjectContainer" data-dojo-attach-point\x3d"createLoadProjectContainer"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"createProjectContainer"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"loadProjectContainer"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"updateEquationContainer" class\x3d"esriCTUpdateEquationMainContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./create-load-project.html dojo/_base/lang dojo/_base/array dojo/on dojo/dom-construct ./item-list dijit/form/ValidationTextBox dijit/form/Select esri/tasks/query esri/graphic esri/tasks/QueryTask esri/graphicsUtils dojo/Deferred esri/layers/FeatureLayer dojo/promise/all jimu/dijit/Message dojo/dom-style dojo/query ./update-project-cost".split(" "),function(y,z,A,B,C,e,h,p,k,D,u,E,l,v,n,w,m,q,r,x,t,F,G){return y([z,
A,B],{templateString:C,baseClass:"jimu-widget-cost-analysis-create-load-project",highlighterColor:"#000",projectLayer:null,paneListData:[],_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],projectNameOptions:[],projectNameField:null,projectDescField:null,_updateProjectCostWidget:null,postCreate:function(){this.inherited(arguments);this.projectNameField=this.config.projectLayerFields.PROJECTNAME;this.projectDescField=this.config.projectLayerFields.DESCRIPTION;
this.paneListData=[];this.projectLayer=this.layerInfosObj.getLayerInfoById(this.config.projectSettings.projectLayer).layerObject;this.projectNameOptions=[{label:this.nls.createLoadProject.selectProject,value:"defaultSelectProjectNameOption"}];this._createProjectUI();this._loadProjectUI()},startup:function(){this.inherited(arguments);this._initializeData();this._fetchWidgetTopNode();this.paneListData=[{title:this.nls.createLoadProject.createProjectPaneTitle,content:this.createProjectContainer,isOpen:!0},
{title:this.nls.createLoadProject.loadProjectPaneTitle,content:this.loadProjectContainer,isOpen:!1,loadProjectTab:!0}];this.config.hasOwnProperty("updateCostEquationCheckBoxStatus")&&this.config.updateCostEquationCheckBoxStatus&&this.paneListData.push({title:this.nls.updateCostEquationPanel.updateProjectCostTabLabel,content:this.updateEquationContainer,isOpen:!1,updateCostEquationWidget:!0});this._createAndLoadProjectPanes();this._getProjectNamesOptions()},_initializeData:function(){this._updateProjectCostWidget=
null},_showMessage:function(b){(new x({message:b})).message=b},_createProjectUI:function(){var b,a,c,d,f;b=k.create("div",{"class":"esriCTCreateProjectWrapper"},this.createProjectContainer);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);c=new u({required:!0,trim:!0,placeHolder:this.nls.createLoadProject.projectNamePlaceHolder,title:this.nls.createLoadProject.projectNamePlaceHolder,maxLength:this._getFieldInfo(this.projectNameField).fieldLength,autofocus:!0,"class":"esriCTFullwidth esriCTCreateProjectContent esriCTEllipsis"},
a);c.validator=e.hitch(this,function(a){return""===a?!1:this._validateProjectNameLocally(a)?!0:(c.set("state","Error"),c.set("invalidMessage",this.nls.createLoadProject.errorDuplicateProjectName),!1)});f=this._getFieldInfo(this.projectDescField);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);d=new u({required:f.nullable,trim:!0,placeHolder:this.nls.createLoadProject.projectDescPlaceHolder,"class":"esriCTFullwidth esriCTCreateProjectContent esriCTEllipsis",title:this.nls.createLoadProject.projectDescPlaceHolder,
maxLength:f.fieldLength},a);b=k.create("div",{"class":"esriCTFullwidth esriCTCreateLoadButtonWrap"},b);b=this._createButton(this.nls.createLoadProject.createLabel,b);this.own(p(b,"click",e.hitch(this,function(){d.isValid()||(d.set("state","Error"),d.set("message",d.getErrorMessage()));c.isValid()&&d.isValid()&&(this.loadingIndicator.show(),this._validateForDuplicateProjectName(c.get("value")).then(e.hitch(this,function(a){a?(this.loadingIndicator.hide(),c.set("state","Error"),this._showMessage(this.nls.createLoadProject.errorDuplicateProjectName)):
this._addProjectToLayer(c.get("value"),d.get("value")).then(e.hitch(this,function(a){var b;this.loadingIndicator.hide();a&&a.success&&a.globalId?(b={label:c.get("value"),value:a.globalId,descValue:d.get("value"),globalIdValue:a.globalId,objectIdValue:a.objectId},this.projectNameSelect.addOption(b),this.emit("createProject",{name:c.get("value"),desc:d.get("value"),projectId:a.globalId,objectId:a.objectId,projectIdField:this.projectLayer.globalIdField}),c.set("value"," "),d.set("value","")):this._showMessage(this.nls.createLoadProject.errorInCreatingProject)}),
e.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInCreatingProject)}))}),e.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInCreatingProject)})))})));return this.createProjectContainer},_getFieldInfo:function(b){var a,c;this.projectLayer&&this.projectLayer.getField(b)&&(b=this.projectLayer.getField(b),a=b.length,c=!b.nullable);return{fieldLength:a,nullable:c}},_createButton:function(b,a){return k.create("div",
{"class":"jimu-btn esriCTEllipsis",innerHTML:b,title:b},a)},_loadProjectUI:function(){var b,a;b=k.create("div",{"class":"esriCTLoadProjectWrapper"},this.loadProjectContainer);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);b=k.create("div",{"class":"esriCTFullwidth esriCTCreateLoadButtonWrap"},b);this.projectNameSelect=new E({"class":"esriCTFullwidth",options:this.projectNameOptions},k.create("div",{},a));this.projectNameSelect.startup();a=this._createButton(this.nls.createLoadProject.viewInMapLabel,
b);this.own(p(a,"click",e.hitch(this,function(){this.getProjectAssets("ViewProject")})));a=this._createButton(this.nls.common.deleteText,b);this.own(p(a,"click",e.hitch(this,this._deleteBtnClicked)));b=this._createButton(this.nls.createLoadProject.loadLabel,b);this.own(p(b,"click",e.hitch(this,function(){this.getProjectAssets("LoadProject")})));return this.loadProjectContainer},_deleteBtnClicked:function(){var b,a;(a=this.projectNameSelect._getSelectedOptionsAttr())&&a.value?b=new x({message:this.nls.createLoadProject.deleteProjectConfirmationMsg,
type:"question",maxWidth:375,buttons:[{label:this.nls.common.yes,onClick:e.hitch(this,function(){b.close();this.getProjectAssets("DeleteProject")})},{label:this.nls.common.no,onClick:e.hitch(this,function(){b.close()})}]}):this._showMessage(this.nls.createLoadProject.errorProjectNotSelected)},_checkIfProjectExist:function(b){var a,c,d;d=new m;c=new n(this.projectLayer.url);a=new l;a.outFields=[this.projectLayer.objectIdField,this.projectLayer.globalIdField];a.returnGeometry=!1;a.where=this.projectLayer.globalIdField+
" \x3d '"+b+"'";c.execute(a,e.hitch(this,function(a){a&&a.features&&0<a.features.length?d.resolve(!0):d.resolve(!1)}),e.hitch(this,function(){d.resolve(!1)}));return d.promise},getProjectAssets:function(b){var a,c,d,f,g;(g=this.projectNameSelect._getSelectedOptionsAttr())&&g.value?(this.loadingIndicator.show(),this._checkIfProjectExist(g.globalIdValue).then(e.hitch(this,function(H){H?(d=this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject,f=new q(d.url),c=new n(f.url),
a=new l,a.outFields=["*"],a.returnGeometry=!1,a.where=this.config.assetTableFields.PROJECTGUID+" \x3d '"+g.globalIdValue+"'",c.execute(a,e.hitch(this,function(a){this.loadingIndicator.hide();"ViewProject"===b?this._showProjectOnMap(g,a.features):"DeleteProject"===b?this._deleteProject(g,a.features):this._createAssetTemplateInfo(g,a.features)}),e.hitch(this,function(){this._showMessage(this.nls.createLoadProject.errorInLoadingProject);this.loadingIndicator.hide()}))):(this.projectNameSelect.removeOption(g.globalIdValue),
this._showMessage(this.nls.createLoadProject.errorProjectNotFound),this.emit("showCreateLoadPrjPanel"),this.loadingIndicator.hide())}),e.hitch(this,function(){this._showMessage(this.nls.createLoadProject.errorInLoadingProject);this.emit("showCreateLoadPrjPanel");this.loadingIndicator.hide()}))):this._showMessage(this.nls.createLoadProject.errorProjectNotSelected)},_createAssetTemplateInfo:function(b,a){var c=[];this.loadingIndicator.show();h.forEach(a,e.hitch(this,function(a){(a=a.attributes[this.config.assetTableFields.GEOGRAPHYGUID])&&
c.push(a)}));this._getRegionName(c).then(e.hitch(this,function(c){this.loadingIndicator.hide();var d,g;d=[];g={};h.forEach(a,e.hitch(this,function(a){var b,e={},f;b=a.attributes[this.config.assetTableFields.ASSETGUID];f=a.attributes[this.config.assetTableFields.GEOGRAPHYGUID];d.push(b);e.COSTEQUATION=a.attributes[this.config.assetTableFields.COSTEQUATION];e.SCENARIO=a.attributes[this.config.assetTableFields.SCENARIO];e.TEMPLATENAME=a.attributes[this.config.assetTableFields.TEMPLATENAME];e.GEOGRAPHYGUID=
f;e.GEOGRAPHY=f?c[f]:null;e.OBJECTID=a.attributes[this.config.assetTableFields.OBJECTID];g[b]=e}));this._loadProject(b,d,g)}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_getAssetRequestToLayer:function(b,a){var c,d,f,g;g=a.layerObject.id;f=a.layerObject;f.clearSelection();d=new m;a=new n(f.url);c=new l;c.outFields=["*"];c.returnGeometry=!0;c.outSpatialReference=this.map.spatialReference;c.where=f.globalIdField+" in ('"+b.join("','")+"')";a.execute(c,e.hitch(this,function(a){a&&a.features&&
0<a.features.length?d.resolve({layerId:g,features:a.features}):d.resolve({layerId:g,features:[]})}),e.hitch(this,function(){d.resolve({layerId:g,features:[]})}));return d.promise},_getProjectAdditionalCost:function(b){var a,c,d;a=new m;(c=this.config.projectSettings.multiplierAdditionalCostTable)?(c=this.layerInfosObj.getTableInfoById(c).layerObject.url,d=new n(c),c=new l,c.outFields=["*"],c.returnGeometry=!1,c.where=this.config.projectMultiplierFields.PROJECTGUID+" \x3d '"+b+"'",d.execute(c,e.hitch(this,
function(b){var c=[];b&&b.features&&(c=b.features);a.resolve(c)}),e.hitch(this,function(){a.resolve([])}))):a.resolve([]);return a.promise},_getRegionName:function(b){var a,c,d,f;a=new m;this.config.projectSettings.costingGeometryLayer&&this.config.projectSettings.geographyField&&0<b.length?(f=this.layerInfosObj.getLayerInfoById(this.config.projectSettings.costingGeometryLayer).layerObject,d=new n(f.url),c=new l,c.outFields=[this.config.projectSettings.geographyField,f.globalIdField],c.returnDistinctValues=
!0,c.returnGeometry=!1,c.where=f.globalIdField+" in ('"+b.join("','")+"')",d.execute(c,e.hitch(this,function(b){var c={};b&&b.features&&h.forEach(b.features,e.hitch(this,function(a){c[a.attributes[f.globalIdField]]=a.attributes[this.config.projectSettings.geographyField]}));a.resolve(c)}),e.hitch(this,function(){a.resolve([])}))):a.resolve([]);return a.promise},_selectFeaturesOnMap:function(b,a){var c,d;d=this.layerInfosObj.getLayerInfoById(a).layerObject;c=new m;a=new l;a.where=d.globalIdField+" in ('"+
b.join("','")+"')";d.selectFeatures(a,q.SELECTION_NEW,e.hitch(this,function(a){a&&0<a.length?c.resolve(a):c.resolve([])}),e.hitch(this,function(){c.resolve([])}));return c.promise},_showProjectOnMap:function(b,a){var c=[],d=[];h.forEach(a,e.hitch(this,function(a){c.push(a.attributes[this.config.assetTableFields.ASSETGUID])}));0===c.length?this._showMessage(this.nls.createLoadProject.noAssetsToViewOnMap):(this.loadingIndicator.show(),this._selectFeaturesOnMap([b.globalIdValue],this.config.projectSettings.projectLayer).then(e.hitch(this,
function(a){var b=!1;0<a.length&&a[0].geometry&&(b=!0,this.map.setExtent(w.graphicsExtent(a).expand(1.5)));h.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&d.push(this._selectFeaturesOnMap(c,a.id))}));r(d).then(e.hitch(this,function(a){var c=[];this.loadingIndicator.hide();b||(h.forEach(a,e.hitch(this,function(a){c=c.concat(a)})),0<c.length?this.map.setExtent(w.graphicsExtent(c).expand(1.5)):this._showMessage(this.nls.createLoadProject.noAssetsToViewOnMap))}))}),e.hitch(this,
function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInLoadingProject)})))},_deleteFromTable:function(b,a,c){if(b=this.layerInfosObj.getTableInfoById(b))b=b.layerObject;a=a+" \x3d '"+c+"'";b?a=this.appUtils.deleteFeatures(b.url,a):(a=new m,a.resolve(!1),a=a.promise);return a},_deleteProject:function(b,a){this.loadingIndicator.show();this._getRelatedLabelPoint(b.globalIdValue,b,a)},_deleteDetailsRelatedToProject:function(b,a,c){var d=[],f=[];this.emit("deleteProject");
this.loadingIndicator.show();h.forEach(c,e.hitch(this,function(a){d.push(a.attributes[this.config.assetTableFields.ASSETGUID])}));0<d.length&&h.forEach(this.config.layerSettings,e.hitch(this,function(a){var b;a.editable&&(a=this.layerInfosObj.getLayerInfoById(a.id).layerObject,b=a.globalIdField+" in ('"+d.join("','")+"')",f.push(this.appUtils.deleteFeatures(a.url,b)))}));f.push(this._deleteFromTable(this.config.projectSettings.assetTable,this.config.assetTableFields.PROJECTGUID,b));f.push(this._deleteFromTable(this.config.projectSettings.multiplierAdditionalCostTable,
this.config.projectMultiplierFields.PROJECTGUID,b));f.push(this.appUtils.deleteFeatures(this.projectLayer.url,this.projectLayer.globalIdField+" \x3d '"+a.globalIdValue+"'"));r(f).then(e.hitch(this,function(){this.loadingIndicator.hide();this.projectNameSelect.removeOption(b);this._showMessage(this.nls.createLoadProject.projectDeletedMsg);this.projectLayer.clearSelection();this.projectLayer.refresh();h.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&(a=this.layerInfosObj.getLayerInfoById(a.id).layerObject,
a.clearSelection(),a.refresh())}))}))},_loadProject:function(b,a,c){var d=[];this.loadingIndicator.show();if(0<a.length)h.forEach(this.config.layerSettings,e.hitch(this,function(b){var c=this.layerInfosObj.getLayerInfoById(b.id);c&&c.layerObject&&b.editable&&d.push(this._getAssetRequestToLayer(a,c))}));else{var f=new m;d.push(f.promise);f.resolve(null)}r(d).then(e.hitch(this,function(a){var d={},f;f={name:b.label,desc:b.descValue,projectId:b.globalIdValue,objectId:b.objectIdValue};this.selectedProjectFeatureAttr=
b.prjAttributes;h.forEach(a,e.hitch(this,function(a){a&&(d[a.layerId]=a.features)}));this._getProjectAdditionalCost(b.globalIdValue).then(e.hitch(this,function(a){this.loadingIndicator.hide();this.emit("loadProject",{assetTemplateInfo:c,assetInfo:d,projectInfo:f,additionalCostInfo:a,projectIdField:this.projectLayer.globalIdField})}),e.hitch(this,function(){this.loadingIndicator.hide()}))}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_createAndLoadProjectPanes:function(){this.paneListData&&
0<this.paneListData.length&&(this._createOrLoadPrj=new D({itemList:this.paneListData,openMultiple:!1,highlighterColor:this.config.selectedThemeColor},k.create("div",{},this.createLoadProjectContainer)),this.own(p(this._createOrLoadPrj,"refreshUpdateCostEquationWidget",e.hitch(this,function(){this._destroyUpdateCostEquationWidget();this._getProjectNamesOptions()}))),this.own(p(this._createOrLoadPrj,"resetLoadProjectNameDropdown",e.hitch(this,function(){this.projectNameSelect.set("value","defaultSelectProjectNameOption")}))),
this._createOrLoadPrj.startup())},_getProjectNamesOptions:function(){var b,a;this.loadingIndicator.show();a=new n(this.projectLayer.url);b=new l;b.outFields=["*"];b.returnGeometry=!1;b.where="1\x3d1";a.execute(b,e.hitch(this,function(a){var b=[];a&&a.features&&(b=a.features);this._populateProjectNameOptions(b);setTimeout(e.hitch(this,function(){this._displayUpdateCostEquationWidget()}),10)}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_populateProjectNameOptions:function(b){this.projectNameOptions=
[{label:this.nls.createLoadProject.selectProject,value:""}];h.forEach(b,e.hitch(this,function(a){this.projectNameField&&a.attributes[this.projectNameField]&&""!==e.trim(a.attributes[this.projectNameField])&&this.projectNameOptions.push({label:a.attributes[this.projectNameField],value:a.attributes[this.projectLayer.globalIdField],descValue:a.attributes[this.projectDescField],globalIdValue:a.attributes[this.projectLayer.globalIdField],objectIdValue:a.attributes[this.projectLayer.objectIdField],prjAttributes:a.attributes})}));
this.projectNameSelect.set("options",e.clone(this.projectNameOptions));this.loadingIndicator.hide()},_validateProjectNameLocally:function(b){var a=[];this.projectNameSelect&&0<this.projectNameSelect.options.length&&(a=h.filter(this.projectNameSelect.options,function(a){return a.label.toUpperCase()===b.toUpperCase()}));return 0<a.length?!1:!0},_validateForDuplicateProjectName:function(b){var a,c,d;d=new m;c=new n(this.projectLayer.url);a=new l;a.outFields=[this.projectLayer.objectIdField,this.projectLayer.globalIdField];
a.returnGeometry=!1;a.where="UPPER("+this.projectNameField+") \x3d '"+b.toUpperCase()+"'";c.execute(a,e.hitch(this,function(a){a&&a.features&&0<a.features.length?d.resolve(!0):d.resolve(!1)}),e.hitch(this,function(){d.resolve(!1)}));return d.promise},_addProjectToLayer:function(b,a){var c,d;c=new m;d=new v;d.attributes=0<this.projectLayer.templates.length?this.projectLayer.templates[0].prototype.attributes:this.projectLayer.types[0].templates[0].prototype.attributes;d.attributes[this.projectNameField]=
b;d.attributes[this.projectDescField]=a;this.projectLayer.applyEdits([d],null,null,e.hitch(this,function(a){this.selectedProjectFeatureAttr=d.attributes;c.resolve(a[0])}),function(a){c.reject(a)});return c.promise},_fetchWidgetTopNode:function(){var b,a,c;this.domNode.parentNode&&(b=this.domNode.parentNode);b.parentNode&&(a=b.parentNode);a.parentNode&&(c=a.parentNode);c&&(this._widgetTopNode=c)},_instantiateUpdateProjectCostWidget:function(){this._updateProjectCostWidget=new G({nls:this.nls,projectNameOptions:this.projectNameOptions,
widgetTopNode:this._widgetTopNode,layerInfosObj:this.layerInfosObj,config:this.config,map:this.map,loadingIndicator:this.loadingIndicator},k.create("div",{},this.updateEquationContainer));this._updateProjectCostWidget.startup()},_resetHeight:function(){var b=t.getComputedStyle(this._widgetTopNode).height,b=parseFloat(b),b=b-28,a=F(".esriCTItemTitleContainer",this._widgetTopNode);h.forEach(a,e.hitch(this,function(a){a=t.getComputedStyle(a).height;a=parseFloat(a);b-=a}));b-=30;t.set(this.updateEquationContainer,
"height",b+"px")},_destroyUpdateCostEquationWidget:function(){this._updateProjectCostWidget&&this._updateProjectCostWidget.destroy();this._updateProjectCostWidget=null},_displayUpdateCostEquationWidget:function(){this.config.hasOwnProperty("updateCostEquationCheckBoxStatus")&&this.config.updateCostEquationCheckBoxStatus&&(this._resetHeight(),this._instantiateUpdateProjectCostWidget())},_deleteExistingLabelPoint:function(b,a,c,d){if(b&&0<b.length){var f=this.map.getLayer(this.config.projectSettings.pointLayerCentroid),
g=new q(f.url,{outFields:["*"]});g.onLoad=e.hitch(this,function(){var f=[];h.forEach(b,e.hitch(this,function(a){var b={};b[g.objectIdField]=a;a=new v(null,null,b,null);f.push(a)}));g.applyEdits(null,null,f,e.hitch(this,function(){this.map.getLayer(this.config.projectSettings.pointLayerCentroid).refresh();this._deleteDetailsRelatedToProject(a,c,d)}),e.hitch(this,function(){this._deleteDetailsRelatedToProject(a,c,d)}))})}else this._deleteDetailsRelatedToProject(a,c,d)},_getRelatedLabelPoint:function(b,
a,c){if(""!==this.config.projectSettings.pointLayerCentroid&&null!==this.config.projectSettings.pointLayerCentroid&&void 0!==this.config.projectSettings.pointLayerCentroid){var d,f=this.map.getLayer(this.config.projectSettings.pointLayerCentroid),g=new q(f.url,{outFields:["*"]});g.onLoad=e.hitch(this,function(){d=this._getFieldName(g,"projectid")+" \x3d '"+b+"'";var f=new l;f.where=d;g.queryIds(f,e.hitch(this,function(d){this._deleteExistingLabelPoint(d,b,a,c)}),e.hitch(this,function(){this._deleteDetailsRelatedToProject(b,
a,c)}))})}else this._deleteDetailsRelatedToProject(b,a,c)},_getFieldName:function(b,a){var c;h.forEach(b.fields,e.hitch(this,function(b){b.name.toLowerCase()===a.toLowerCase()&&(c=b.name)}));return c}})});