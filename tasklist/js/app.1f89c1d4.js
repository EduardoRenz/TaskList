(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],a[s]&&p.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/tasklist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3c07":function(t,e,n){},"4e69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("bb71");n("da64");i["a"].use(a["a"],{theme:{primary:"#F89530",secondary:"#1d1d1d",accent:"#8c9eff",error:"#b71c1c"}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"grey lighten-2"},[n("v-toolbar",{staticClass:"primary",attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase white--text"},[n("span",{attrs:{title:"Desafio Supero Tecnologia"}},[t._v("Eduardo Renz")]),n("span",{staticClass:"font-weight-light",attrs:{title:"Desafio Supero Tecnologia"}},[t._v(" Desafio Supero Tecnologia")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://github.com/EduardoRenz",target:"_blank"}},[n("span",{staticClass:"mr-2 white--text"},[t._v("Github")])])],1),n("v-content",[n("Home")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("NewList",{on:{cancel:function(e){t.dialog=!1},addList:function(e){t.addList(e)}}})],1),n("div",[n("h1",{staticClass:"display-2 font-weight-bold mb-3 text-xs-center "},[t._v("\n        Task List\n      ")])]),n("p",{staticClass:"subheading font-weight-regular text-xs-center "},[t._v("\n        Adicione itens em sua lista de tarefas\n      ")]),n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},t._l(t.lists,function(e,i){return n("v-flex",{key:i,attrs:{md4:""}},[n("TaskList",{attrs:{list:e},on:{deleted:function(n){t.deleteList(e,i)},listEdited:function(e){return t.loadLists()}}})],1)}),1),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{color:"primary",darklarge:"",fixed:"",bottom:"",right:"",fab:"",big:""},on:{click:function(e){t.dialog=!0}}},i),[n("v-icon",[t._v("add")])],1)]}}])},[n("span",[t._v("Nova lista")])])],1)},c=[],l=n("5d73"),u=n.n(l),d=(n("96cf"),n("3b8d")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-list",{attrs:{subheader:""}},[n("v-card-title",[n("v-text-field",{staticClass:"text-xs-center",attrs:{"hide-details":"",disabled:!t.list.editing,"single-line":"",flat:"",solo:!t.list.editing},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&13!==e.keyCode)return null;t.list.editing=!1,t.editList(t.list)}},model:{value:t.list.title,callback:function(e){t.$set(t.list,"title",e)},expression:"list.title"}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.list.editing=!t.list.editing}}},i),[n("v-icon",[t._v("edit")])],1)]}}])},[n("span",[t._v("Editar Titulo")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.deleteList()}}},i),[n("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)]}}])},[n("span",[t._v("Excluir lista")])])],1),n("v-divider"),t._l(t.list.tasks,function(e,i){return n("v-list-tile",{key:i,staticClass:"list-item"},[n("v-list-tile-action",[n("v-checkbox",{attrs:{color:"primary",checked:e.completed},on:{change:function(e){return t.editList(t.list)}},model:{value:e.completed,callback:function(n){t.$set(e,"completed",n)},expression:"item.completed"}})],1),n("v-list-tile-content",[n("v-list-tile-title",{class:{completed:e.completed}},[t._v(t._s(e.task))])],1),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(n){return t.deleteTask(e,i)}}},r),[n("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)]}}],null,!0)},[n("span",[t._v("Excluir item")])])],1)})],2),n("v-card-actions",[n("v-text-field",{attrs:{"single-line":"",label:"Nova tarefa","prepend-icon":"add"},nativeOn:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.addItem():null}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1)],1)},v=[],f=n("bc3a"),h=n.n(f),m=function(){return h.a.create({baseURL:"http://localhost/tasklist/api",headers:{"Access-Control-Allow-Origin":"*","access-control-allow-headers":"*","Access-Control-Request-Method":"*"}})},k={props:["list"],data:function(){return{newTask:""}},methods:{deleteList:function(){this.$emit("deleted",this.list)},addItem:function(){""!=this.newTask.trim()&&this.list.tasks.push({completed:!1,task:this.newTask}),this.editList({id:this.list.id,title:this.list.title,tasks:[{task:this.newTask,completed:!1}]}),this.newTask=""},deleteTask:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().delete("/task/".concat(e.id));case 3:this.list.tasks.splice(n,1),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("Erro ao deletar item da lista",t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(e,n){return t.apply(this,arguments)}return e}(),editList:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().put("/".concat(e.id),e);case 3:this.$emit("listEdited"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("Erro ao editar lista",t.t0.message);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(e){return t.apply(this,arguments)}return e}()}},b=k,x=(n("9c38"),n("2877")),g=n("6544"),_=n.n(g),y=n("8336"),w=n("b0af"),T=n("99d9"),V=n("12b2"),L=n("ac7c"),C=n("ce7e"),O=n("132d"),E=n("8860"),j=n("ba95"),S=n("40fe"),R=n("5d23"),$=n("9910"),A=n("2677"),I=n("3a2f"),N=Object(x["a"])(b,p,v,!1,null,null,null),D=N.exports;_()(N,{VBtn:y["a"],VCard:w["a"],VCardActions:T["a"],VCardTitle:V["a"],VCheckbox:L["a"],VDivider:C["a"],VIcon:O["a"],VList:E["a"],VListTile:j["a"],VListTileAction:S["a"],VListTileContent:R["a"],VListTileTitle:R["b"],VSpacer:$["a"],VTextField:A["a"],VTooltip:I["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-list",{attrs:{subheader:""}},[n("v-card-title",[n("v-text-field",{staticClass:"text-xs-center",attrs:{"hide-details":"",disabled:!t.list.editing,"single-line":"",flat:"",solo:!t.list.editing},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&13!==e.keyCode)return null;t.list.editing=!1}},model:{value:t.list.title,callback:function(e){t.$set(t.list,"title",e)},expression:"list.title"}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.list.editing=!t.list.editing}}},i),[n("v-icon",[t._v("edit")])],1)]}}])},[n("span",[t._v("Editar Titulo")])])],1),n("v-divider"),t._l(t.filteredList,function(e,i){return n("v-list-tile",{key:i,staticClass:"list-item"},[n("v-list-tile-action",{on:{click:function(t){e.completed=!e.completed}}},[n("v-checkbox",{attrs:{color:"primary",disabled:""},model:{value:e.completed,callback:function(n){t.$set(e,"completed",n)},expression:"item.completed"}})],1),n("v-list-tile-content",{on:{click:function(t){e.completed=!e.completed}}},[n("v-list-tile-title",{class:{completed:e.completed}},[t._v(t._s(e.task))])],1),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(n){return t.deleteTask(e,i)}}},r),[n("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)]}}],null,!0)},[n("span",[t._v("Excluir item")])])],1)})],2),n("v-list",{attrs:{subheader:""}},[n("v-divider"),t._l(t.list.tasks.filter(function(t){return t.completed}),function(e,i){return n("v-list-tile",{key:i,staticClass:"list-item"},[n("v-list-tile-action",[n("v-checkbox",{attrs:{disabled:"",color:"primary"},model:{value:e.completed,callback:function(n){t.$set(e,"completed",n)},expression:"item.completed"}})],1),n("v-list-tile-content",{on:{click:function(t){e.completed=!e.completed}}},[n("v-list-tile-title",{class:{completed:e.completed}},[t._v(t._s(e.task))])],1),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(n){return t.deleteTask(e,i)}}},r),[n("v-icon",{attrs:{color:"red"}},[t._v("delete")])],1)]}}],null,!0)},[n("span",[t._v("Excluir item")])])],1)})],2),n("v-card-actions",[n("v-text-field",{attrs:{"single-line":"",label:"Nova tarefa","prepend-icon":"add"},nativeOn:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.addItem():null}},model:{value:t.newTask.task,callback:function(e){t.$set(t.newTask,"task",e)},expression:"newTask.task"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("Cancelar")]),n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addList()}}},[t._v("Concluído")])],1)],1)},P=[],B={data:function(){return{newTask:{task:"",completed:!1},list:{title:"Nova Lista",editing:!0,tasks:[]}}},methods:{addList:function(){this.$emit("addList",this.list),this.list={title:"Nova Lista",editing:!0,tasks:[]}},addItem:function(){""!=this.newTask.task.trim()&&this.list.tasks.push(this.newTask),this.newTask={task:"",completed:!1}}},computed:{filteredList:function(){return this.list.tasks.filter(function(t){return!t.completed})}}},F=B,z=(n("b070"),Object(x["a"])(F,M,P,!1,null,null,null)),H=z.exports;_()(z,{VBtn:y["a"],VCard:w["a"],VCardActions:T["a"],VCardTitle:V["a"],VCheckbox:L["a"],VDivider:C["a"],VIcon:O["a"],VList:E["a"],VListTile:j["a"],VListTileAction:S["a"],VListTileContent:R["a"],VListTileTitle:R["b"],VSpacer:$["a"],VTextField:A["a"],VTooltip:I["a"]});var J={components:{TaskList:D,NewList:H},data:function(){return{dialog:!1,lists:[]}},methods:{addList:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().post("/",e);case 3:this.lists.push(e),this.dialog=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),alert("Erro ao adicionar nova lista");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(e){return t.apply(this,arguments)}return e}(),deleteList:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().delete("/".concat(e.id));case 3:this.lists.splice(n,1),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("Erro ao deletar lista");case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(e,n){return t.apply(this,arguments)}return e}(),loadLists:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,r,s,o,c,l,d,p,v,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m().get("");case 3:e=t.sent,n=!0,i=!1,a=void 0,t.prev=7,r=u()(e.data);case 9:if(n=(s=r.next()).done){t.next=34;break}for(o=s.value,o.editing=!1,c=!0,l=!1,d=void 0,t.prev=15,p=u()(o.tasks);!(c=(v=p.next()).done);c=!0)f=v.value,f.completed=0!=f.completed;t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](15),l=!0,d=t.t0;case 23:t.prev=23,t.prev=24,c||null==p.return||p.return();case 26:if(t.prev=26,!l){t.next=29;break}throw d;case 29:return t.finish(26);case 30:return t.finish(23);case 31:n=!0,t.next=9;break;case 34:t.next=40;break;case 36:t.prev=36,t.t1=t["catch"](7),i=!0,a=t.t1;case 40:t.prev=40,t.prev=41,n||null==r.return||r.return();case 43:if(t.prev=43,!i){t.next=46;break}throw a;case 46:return t.finish(43);case 47:return t.finish(40);case 48:this.lists=e.data,t.next=54;break;case 51:t.prev=51,t.t2=t["catch"](0),alert("Erro ao obter listas",t.t2.message);case 54:case"end":return t.stop()}},t,this,[[0,51],[7,36,40,48],[15,19,23,31],[24,,26,30],[41,,43,47]])}));function e(){return t.apply(this,arguments)}return e}()},beforeMount:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loadLists();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},q=J,G=(n("cccb"),n("a523")),U=n("169a"),K=n("0e8f"),Q=n("a722"),W=Object(x["a"])(q,o,c,!1,null,null,null),X=W.exports;_()(W,{VBtn:y["a"],VContainer:G["a"],VDialog:U["a"],VFlex:K["a"],VIcon:O["a"],VLayout:Q["a"],VTooltip:I["a"]});var Y={name:"App",components:{Home:X},data:function(){return{}}},Z=Y,tt=n("7496"),et=n("549c"),nt=n("71d9"),it=n("2a7f"),at=Object(x["a"])(Z,r,s,!1,null,null,null),rt=at.exports;_()(at,{VApp:tt["a"],VBtn:y["a"],VContent:et["a"],VSpacer:$["a"],VToolbar:nt["a"],VToolbarTitle:it["a"]}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(rt)}}).$mount("#app")},"86f4":function(t,e,n){},"9c38":function(t,e,n){"use strict";var i=n("3c07"),a=n.n(i);a.a},b070:function(t,e,n){"use strict";var i=n("86f4"),a=n.n(i);a.a},cccb:function(t,e,n){"use strict";var i=n("4e69"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1f89c1d4.js.map