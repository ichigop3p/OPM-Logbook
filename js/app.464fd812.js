(function(e){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1)],1)},i=[],r={name:"App",data:function(){return{}}},l=r,s=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),p=a("f6c4"),v=Object(s["a"])(l,o,i,!1,null,null,null),f=v.exports;d()(v,{VApp:u["a"],VMain:p["a"]});var m=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-5",attrs:{elevation:"20"}},[a("v-snackbar",{attrs:{timeout:4e3},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[a("span",{staticClass:"mx-2"},[e._v("Log has been successfully added!")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1),a("v-snackbar",{attrs:{timeout:4e3},model:{value:e.editSnackbar,callback:function(t){e.editSnackbar=t},expression:"editSnackbar"}},[a("span",{staticClass:"mx-2"},[e._v("Log has been successfully updated!")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(t){e.editSnackbar=!1}}},[e._v("Close")])],1),a("v-card-title",[e._v(" Internal & External Communication "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-flex",[a("Add",{on:{logAdded:function(t){e.snackbar=!0}}})],1)],1),a("v-data-table",{attrs:{headers:e.headers,items:e.logs,search:e.search,"sort-by":"date"},scopedSlots:e._u([{key:"item.type",fn:function(t){var n=t.item;return[a("v-chip",{attrs:{color:e.getColor(n.type),dark:""}},[e._v(e._s(n.type))])]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,i=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-2",on:{click:function(t){return e.editBtn(n)}}},"v-icon",i,!1),o),[e._v("mdi-file-edit")])]}}],null,!0)},[a("span",[e._v("Edit")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,i=t.attrs;return[a("v-icon",e._g(e._b({on:{click:function(t){return e.del(n.id)}}},"v-icon",i,!1),o),[e._v("mdi-delete")])]}}],null,!0)},[a("span",[e._v("Delete")])])]}}],null,!0)}),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",trasnsition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"deep-purple darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-toolbar-title",[e._v("Edit Log")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.updateLog()}}},[e._v("Update")])],1)],1),a("v-card-text",{staticClass:"mt-4"},[a("v-form",{ref:"form"},[a("v-container",[a("v-row",[a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"Subject","prepend-icon":"mdi-folder",outlined:"",height:"80",rules:e.inputRules},model:{value:e.editLogs.subject,callback:function(t){e.$set(e.editLogs,"subject",t)},expression:"editLogs.subject"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Date","persistent-hint":"","prepend-icon":"mdi-calendar",outlined:"",rules:e.inputRules},model:{value:e.editLogs.date,callback:function(t){e.$set(e.editLogs,"date",t)},expression:"editLogs.date"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Sender","prepend-icon":"mdi-account-arrow-right",outlined:"",rules:e.inputRules},model:{value:e.editLogs.sender,callback:function(t){e.$set(e.editLogs,"sender",t)},expression:"editLogs.sender"}})],1),a("v-col",{attrs:{sm:"7"}},[a("v-text-field",{attrs:{label:"Control #","prepend-icon":"mdi-numeric-9-box-multiple",outlined:"",rules:e.inputRules},model:{value:e.editLogs.control_no,callback:function(t){e.$set(e.editLogs,"control_no",t)},expression:"editLogs.control_no"}})],1),a("v-col",{attrs:{sm:"5"}},[a("v-text-field",{attrs:{label:"Transmittal Type","prepend-icon":"mdi-clipboard-file",outlined:"",rules:e.inputRules},model:{value:e.editLogs.type,callback:function(t){e.$set(e.editLogs,"type",t)},expression:"editLogs.type"}})],1),a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"PM's Instruction","prepend-icon":"mdi-file-powerpoint",outlined:"",height:"80",rules:e.inputRules},model:{value:e.editLogs.pm_instruction,callback:function(t){e.$set(e.editLogs,"pm_instruction",t)},expression:"editLogs.pm_instruction"}})],1),a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"Action Taken","prepend-icon":"mdi-file-powerpoint",outlined:"",height:"80",rules:e.inputRules},model:{value:e.editLogs.action,callback:function(t){e.$set(e.editLogs,"action",t)},expression:"editLogs.action"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Received By","prepend-icon":"mdi-account-box-multiple",outlined:"",rules:e.inputRules},model:{value:e.editLogs.received_by,callback:function(t){e.$set(e.editLogs,"received_by",t)},expression:"editLogs.received_by"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Received Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar",outlined:"",rules:e.inputRules},model:{value:e.editLogs.received_date,callback:function(t){e.$set(e.editLogs,"received_date",t)},expression:"editLogs.received_date"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},h=[],g=a("5530"),x=(a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"700",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"deep-purple darken-3 pa-5",dark:"",rounded:""}},"v-btn",o,!1),n),[a("v-icon",{staticClass:"mx-1"},[e._v("mdi-file-plus")]),a("span",[e._v("Add Data")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("Create Data")])]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-container",[a("v-row",[a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"Subject","prepend-icon":"mdi-folder",outlined:"",height:"80",rules:e.inputRules},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-menu",{ref:"date1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar",outlined:"",rules:e.inputRules},on:{blur:function(t){e.date=e.parseDate(e.dateFormatted)}},model:{value:e.dateFormatted,callback:function(t){e.dateFormatted=t},expression:"dateFormatted"}},"v-text-field",o,!1),n))]}}]),model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.date1=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Sender","prepend-icon":"mdi-account-arrow-right",outlined:"",rules:e.inputRules},model:{value:e.sender,callback:function(t){e.sender=t},expression:"sender"}})],1),a("v-col",{attrs:{sm:"7"}},[a("v-text-field",{attrs:{label:"Control #","prepend-icon":"mdi-numeric-9-box-multiple",outlined:"",rules:e.inputRules},model:{value:e.ctrlno,callback:function(t){e.ctrlno=t},expression:"ctrlno"}})],1),a("v-col",{attrs:{sm:"5"}},[a("v-select",{attrs:{items:e.types,label:"Transmittal Type","prepend-icon":"mdi-clipboard-file",outlined:"",rules:e.inputRules},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"PM's Instruction","prepend-icon":"mdi-file-powerpoint",outlined:"",height:"80",rules:e.inputRules},model:{value:e.pmins,callback:function(t){e.pmins=t},expression:"pmins"}})],1),a("v-col",{attrs:{sm:"12"}},[a("v-textarea",{attrs:{label:"Action Taken","prepend-icon":"mdi-file-powerpoint",outlined:"",height:"80",rules:e.inputRules},model:{value:e.action,callback:function(t){e.action=t},expression:"action"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Received By","prepend-icon":"mdi-account-box-multiple",outlined:"",rules:e.inputRules},model:{value:e.received,callback:function(t){e.received=t},expression:"received"}})],1),a("v-col",{attrs:{sm:"6"}},[a("v-text-field",{attrs:{label:"Received Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar",outlined:"",rules:e.inputRules},model:{value:e.redate,callback:function(t){e.redate=t},expression:"redate"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mx-0 mt-3",attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),a("v-btn",{staticClass:"mx-0 mt-3",attrs:{text:""},on:{click:e.clear}},[e._v("Clear")]),a("v-btn",{staticClass:"mx-0 mt-3",attrs:{text:"",loading:e.loading,color:"purple darken-1"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)}),k=[],y=a("3835"),_=(a("ac1f"),a("1276"),a("99af"),a("4d90"),a("260b")),V=(a("e71f"),a("588e"),a("000b"),{apiKey:"AIzaSyBk_kJyoakeXrGPIWVEOFjo2eZHqYzkF3Q",authDomain:"opm-s-transmittal-log.firebaseapp.com",projectId:"opm-s-transmittal-log",storageBucket:"opm-s-transmittal-log.appspot.com",messagingSenderId:"770918722516",appId:"1:770918722516:web:bb01c32701ed283e814441",measurementId:"G-7T9QXEG86Y"});_["a"].initializeApp(V),_["a"].analytics();var S=_["a"].firestore();S.settings({timestampsInSnapshots:!0});var w=S,j={data:function(e){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:e.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dialog:!1,subject:"",date1:!1,redate:"",type:"",sender:"",ctrlno:"",pmins:"",action:"",received:"",items:["Jen","Jane","Jan"],types:["Internal","External"],inputRules:[function(e){return e.length>=3||"Minimum length is 3 characters"}],loading:!1}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{submit:function(){var e=this;if(this.$refs.form.validate()){this.loading=!0;var t={subject:this.subject,date:this.date,type:this.type,sender:this.sender,control_no:this.ctrlno,pm_instruction:this.pmins,action:this.action,received_by:this.received,received_date:this.redate};w.collection("log").add(t).then((function(){e.loading=!1,e.dialog=!1,e.$emit("logAdded"),e.subject="",e.date="",e.type="",e.sender="",e.ctrlno="",e.pmins="",e.action="",e.received="",e.redate=""}))}},clear:function(){this.subject="",this.date="",this.type="",this.sender="",this.ctrlno="",this.pmins="",this.action="",this.received="",this.redate=""},formatDate:function(e){if(!e)return null;var t=e.split("-"),a=Object(y["a"])(t,3),n=a[0],o=a[1],i=a[2];return"".concat(o,"/").concat(i,"/").concat(n)},parseDate:function(e){if(!e)return null;var t=e.split("/"),a=Object(y["a"])(t,3),n=a[0],o=a[1],i=a[2];return"".concat(i,"-").concat(n.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}},D=j,L=a("8336"),C=a("b0af"),R=a("99d9"),T=a("62ad"),O=a("a523"),I=a("2e4b"),M=a("169a"),$=a("4bd4"),A=a("132d"),E=a("e449"),F=a("0fd9"),Y=a("b974"),P=a("2fa4"),B=a("8654"),J=a("a844"),z=Object(s["a"])(D,x,k,!1,null,null,null),G=z.exports;d()(z,{VBtn:L["a"],VCard:C["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:T["a"],VContainer:O["a"],VDatePicker:I["a"],VDialog:M["a"],VForm:$["a"],VIcon:A["a"],VMenu:E["a"],VRow:F["a"],VSelect:Y["a"],VSpacer:P["a"],VTextField:B["a"],VTextarea:J["a"]});var H={components:{Add:G},data:function(){return{search:"",headers:[{text:"Subject",align:"start",sortable:!1,value:"subject"},{text:"Date",value:"date"},{text:"Sender",value:"sender"},{text:"Control #",value:"control_no"},{text:"PM Instruction",value:"pm_instruction"},{text:"Action Taken",value:"action"},{text:"Received By",value:"received_by"},{text:"Internal/External",value:"type"},{text:"Actions",value:"actions",sortable:!1}],snackbar:!1,logs:[],dialog:!1,editLogs:[],editedId:null,editSnackbar:!1,inputRules:[function(e){return e.length>=3||"Minimum length is 3 characters"}]}},methods:{getColor:function(e){return"Internal"==e?"#039BE5":"External"==e?"#00897B":"red"},del:function(e){confirm("Do you really want to delete this log?")&&w.collection("log").doc(e).delete().then((function(){console.log("Document Successfully Deleted!")})).catch((function(e){console.error("Error removing document: ",e)})),location.reload()},editBtn:function(e){this.editLogs=e,this.dialog=!0,this.editedId=e.id},updateLog:function(){var e=this;w.collection("log").doc(this.editedId).update(this.editLogs).then((function(){e.dialog=!1,e.editSnackbar=!0}))}},created:function(){var e=this;w.collection("log").onSnapshot((function(t){var a=t.docChanges();a.forEach((function(t){"added"===t.type&&e.logs.push(Object(g["a"])(Object(g["a"])({},t.doc.data()),{},{id:t.doc.id}))}))}))}},Q=H,X=a("cc20"),q=a("8fea"),K=a("0e8f"),U=a("2db4"),W=a("71d9"),Z=a("2a7f"),N=a("3a2f"),ee=Object(s["a"])(Q,b,h,!1,null,null,null),te=ee.exports;d()(ee,{VBtn:L["a"],VCard:C["a"],VCardText:R["b"],VCardTitle:R["c"],VChip:X["a"],VCol:T["a"],VContainer:O["a"],VDataTable:q["a"],VDialog:M["a"],VFlex:K["a"],VForm:$["a"],VIcon:A["a"],VRow:F["a"],VSnackbar:U["a"],VSpacer:P["a"],VTextField:B["a"],VTextarea:J["a"],VToolbar:W["a"],VToolbarItems:Z["a"],VToolbarTitle:Z["b"],VTooltip:N["a"]}),n["a"].use(m["a"]);var ae=[{path:"/",name:"Home",component:te}],ne=new m["a"]({mode:"hash",base:"",routes:ae}),oe=ne,ie=a("f309");n["a"].use(ie["a"]);var re=new ie["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:oe,vuetify:re,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.464fd812.js.map