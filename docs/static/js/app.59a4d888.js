(function(t){function e(e){for(var o,s,c=e[0],i=e[1],u=e[2],f=0,d=[];f<c.length;f++)s=c[f],a[s]&&d.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},4360:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e2f3"),n("450d");var o=n("06f9"),a=n.n(o),r=(n("915d"),n("e04d")),s=n.n(r),c=(n("f4f9"),n("c2cc")),i=n.n(c),u=(n("7a0f"),n("0f6c")),l=n.n(u),f=(n("adec"),n("3d2d")),d=n.n(f),p=(n("bdc7"),n("aa2f")),h=n.n(p),b=(n("a673"),n("7b31")),v=n.n(b),m=(n("de31"),n("c69e")),y=n.n(m),g=(n("8bd8"),n("4cb2")),_=n.n(g),w=(n("4ca3"),n("443e")),x=n.n(w),S=(n("cbb5"),n("8bbc")),j=n.n(S),k=(n("a7cc"),n("df33")),O=n.n(k),C=(n("b8e0"),n("a4c4")),M=n.n(C),P=(n("1f1a"),n("4e4b")),V=n.n(P),z=(n("1951"),n("eedf")),E=n.n(z),$=n("2b0e"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},J=[],Q=(n("034f"),n("2877")),A={},B=Object(Q["a"])(A,T,J,!1,null,null,null),L=B.exports,R=n("4360"),U=n.n(R),q=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-header",[n("div",{staticClass:"bs-container"},[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",{staticStyle:{"font-size":"18px"},attrs:{index:"1"}},[t._v("Shortcut save 1s!")])],1)],1)]),n("el-main",[n("div",{staticClass:"bs-container"},[n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"save1s捷径目前正处于开发阶段，后端接口变化可能会导致捷径不可用，请注意及时更新。",type:"warning"}}),n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"如果你是从微信或QQ打开的本网站，安装捷径时，可能需要选择菜单从Safari打开。",type:"warning"}}),n("el-row",{staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},[n("el-col",{attrs:{span:24}},[n("el-badge",{staticClass:"item",attrs:{value:t.shortcuts_count,type:"primary"}},[n("el-button",{attrs:{type:"text"}},[t._v("南京邮电大学捷径")])],1)],1)],1),t._l(t.four_cols_shortcuts,function(e,o){return n("el-row",{key:o,staticClass:"hidden-xs-only",staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},t._l(e,function(t){return n("el-col",{key:t.name,attrs:{sm:6}},[n("Shortcut",{attrs:{name:t.name,icon:t.icon,color:t.color,url:t.url,description:t.description}})],1)}),1)}),t._l(t.two_cols_shortcuts,function(e,o){return n("el-row",{key:1e3+o,staticClass:"hidden-sm-and-up",staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},t._l(e,function(t){return n("el-col",{key:t.name,attrs:{span:12}},[n("Shortcut",{attrs:{name:t.name,icon:t.icon,color:t.color,url:t.url,description:t.description}})],1)}),1)})],2)]),n("el-footer",[n("div",{staticClass:"bs-container"},[n("el-tag",{staticStyle:{cursor:"pointer","font-size":"14px"},attrs:{type:"info"},on:{click:t.save1s}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" A save1s project.\n        ")],1)],1)])],1)],1)},F=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card",style:{backgroundColor:t.color},attrs:{shadow:"always","body-style":{padding:"10x 15px"}}},[n("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.dialogVisible=!0}}},[n("div",{staticStyle:{"font-size":"30px"}},[n("font-awesome-icon",{attrs:{icon:t.icon}})],1),n("div",{staticClass:"text"},[t._v(t._s(t.name))])])]),n("el-dialog",{attrs:{title:t.name,visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("p",[t._v(t._s(t.description))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("退出")]),n("el-button",{attrs:{type:"primary"},on:{click:t.downloadShortcut}},[t._v("下载")])],1)])],1)},H=[],I={data:function(){return{dialogVisible:!1}},name:"Shortcut",props:["color","name","icon","url","description"],methods:{downloadShortcut:function(){window.open(this.url,"_blank")}}},K=I,N=(n("96fb"),Object(Q["a"])(K,G,H,!1,null,"532794db",null)),W=N.exports,X=(n("e05f"),n("bc3a")),Y=n.n(X),Z=Y.a.create({baseURL:"./",timeout:5e3}),tt={fetchShortcuts:function(){return Z.get("/static/shortcuts.json").then(function(t){return t.data})}},et={components:{Shortcut:W},data:function(){return{shortcuts:[],shortcuts_count:0,msgBody:""}},computed:{two_cols_shortcuts:function(){return nt(2,this.shortcuts)},four_cols_shortcuts:function(){return nt(4,this.shortcuts)}},methods:{save1s:function(){window.open("https://github.com/save1s","_blank")}},mounted:function(){var t=this;tt.fetchShortcuts().then(function(e){t.shortcuts=e,t.shortcuts_count=e.length})},name:"Main",props:{}};function nt(t,e){for(var n=[],o=0;o<Math.ceil(e.length/t);o++){n[o]=[];for(var a=0;a<t&&a+t*o<e.length;a++)n[o].push(e[a+t*o])}return n}var ot=et,at=(n("b737"),Object(Q["a"])(ot,D,F,!1,null,"8151c318",null)),rt=at.exports;$["default"].use(q["a"]);var st=new q["a"]({routes:[{path:"/",name:"home",component:rt,meta:{title:"Shortcut save 1s!"}}]}),ct=(n("0fae"),n("ecee")),it=n("c074"),ut=n("ad3d"),lt=n("f2d1");ct["c"].add(it["a"]),ct["c"].add(lt["a"]),$["default"].component("font-awesome-icon",ut["a"]),$["default"].use(E.a),$["default"].use(V.a),$["default"].use(M.a),$["default"].use(O.a),$["default"].use(j.a),$["default"].use(x.a),$["default"].use(_.a),$["default"].use(y.a),$["default"].use(v.a),$["default"].use(h.a),$["default"].use(d.a),$["default"].use(l.a),$["default"].use(i.a),$["default"].use(s.a),$["default"].use(a.a),$["default"].config.productionTip=!1;var ft="Shortcut save 1s!";st.afterEach(function(t){document.title=t.meta.title||ft});var dt=new $["default"]({router:st,store:U.a,render:function(t){return t(L)}});dt.$mount("#app")},"64a9":function(t,e,n){},"96fb":function(t,e,n){"use strict";var o=n("c90c"),a=n.n(o);a.a},b737:function(t,e,n){"use strict";var o=n("fc42"),a=n.n(o);a.a},c90c:function(t,e,n){},fc42:function(t,e,n){}});
//# sourceMappingURL=app.59a4d888.js.map