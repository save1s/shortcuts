(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)s=i[f],o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"234e":function(t,e,n){"use strict";var a=n("a3ed"),o=n.n(a);o.a},4360:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e2f3"),n("450d");var a=n("06f9"),o=n.n(a),r=(n("915d"),n("e04d")),s=n.n(r),i=(n("f4f9"),n("c2cc")),c=n.n(i),u=(n("7a0f"),n("0f6c")),l=n.n(u),f=(n("adec"),n("3d2d")),d=n.n(f),p=(n("bdc7"),n("aa2f")),h=n.n(p),v=(n("a673"),n("7b31")),b=n.n(v),m=(n("de31"),n("c69e")),y=n.n(m),g=(n("8bd8"),n("4cb2")),_=n.n(g),w=(n("4ca3"),n("443e")),x=n.n(w),S=(n("cbb5"),n("8bbc")),j=n.n(S),k=(n("a7cc"),n("df33")),O=n.n(k),C=(n("b8e0"),n("a4c4")),M=n.n(C),P=(n("1f1a"),n("4e4b")),V=n.n(P),z=(n("1951"),n("eedf")),E=n.n(z),$=n("2b0e"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},J=[],Q=(n("034f"),n("2877")),A={},B=Object(Q["a"])(A,T,J,!1,null,null,null),L=B.exports,R=n("4360"),U=n.n(R),q=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-header",[n("div",{staticClass:"bs-container"},[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",{staticStyle:{"font-size":"18px"},attrs:{index:"1"}},[t._v("Shortcuts save 1s!")])],1)],1)]),n("el-main",[n("div",{staticClass:"bs-container"},[n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"save1s捷径目前正处于开发阶段，后端接口变化可能会导致捷径不可用，请注意及时更新。",type:"warning"}}),n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"如果你是从微信或QQ打开的本网站，安装捷径时，可能需要选择菜单从Safari打开。",type:"warning"}}),n("el-row",{staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},[n("el-col",{attrs:{span:24}},[n("el-badge",{staticClass:"item",attrs:{value:t.shortcuts_count,type:"primary"}},[n("el-button",{attrs:{type:"text"}},[t._v("南京邮电大学捷径")])],1)],1)],1),t._l(t.four_cols_shortcuts,function(e,a){return n("el-row",{key:a,staticClass:"hidden-xs-only",staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},t._l(e,function(t){return n("el-col",{key:t.name,attrs:{sm:6}},[n("Shortcut",{attrs:{name:t.name,icon:t.icon,color:t.color,url:t.url,description:t.description}})],1)}),1)}),t._l(t.two_cols_shortcuts,function(e,a){return n("el-row",{key:1e3+a,staticClass:"hidden-sm-and-up",staticStyle:{padding:"5px"},attrs:{gutter:20,type:"flex",justify:"left"}},t._l(e,function(t){return n("el-col",{key:t.name,attrs:{span:12}},[n("Shortcut",{attrs:{name:t.name,icon:t.icon,color:t.color,url:t.url,description:t.description}})],1)}),1)})],2)]),n("el-footer",[n("div",{staticClass:"bs-container"},[n("el-tag",{staticStyle:{cursor:"pointer","font-size":"14px"},attrs:{type:"info"},on:{click:t.save1s}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" A save1s project.\n        ")],1)],1)])],1)],1)},F=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card",style:{backgroundColor:t.color},attrs:{shadow:"always","body-style":{padding:"10x 15px"}}},[n("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.dialogVisible=!0}}},[n("div",{staticStyle:{"font-size":"30px"}},[n("i",{class:t.icon_class})]),n("div",{staticClass:"text"},[t._v(t._s(t.name))])])]),n("el-dialog",{attrs:{title:t.name,visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("p",[t._v(t._s(t.description))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("退出")]),n("el-button",{attrs:{type:"primary"},on:{click:t.downloadShortcut}},[t._v("下载")])],1)])],1)},H=[],I={data:function(){return{dialogVisible:!1}},computed:{icon_class:function(){return"fas fa-"+this.icon}},name:"Shortcut",props:["color","name","icon","url","description"],methods:{downloadShortcut:function(){window.open(this.url,"_blank")}}},K=I,N=(n("234e"),Object(Q["a"])(K,G,H,!1,null,"362c12fa",null)),W=N.exports,X=(n("e05f"),n("bc3a")),Y=n.n(X),Z=Y.a.create({baseURL:"./",timeout:5e3}),tt={fetchShortcuts:function(){return Z.get("/static/shortcuts.json").then(function(t){return t.data})}},et={components:{Shortcut:W},data:function(){return{shortcuts:[],shortcuts_count:0,msgBody:""}},computed:{two_cols_shortcuts:function(){return nt(2,this.shortcuts)},four_cols_shortcuts:function(){return nt(4,this.shortcuts)}},methods:{save1s:function(){window.open("https://github.com/save1s","_blank")}},mounted:function(){var t=this;tt.fetchShortcuts().then(function(e){t.shortcuts=e,t.shortcuts_count=e.length})},name:"Main",props:{}};function nt(t,e){for(var n=[],a=0;a<Math.ceil(e.length/t);a++){n[a]=[];for(var o=0;o<t&&o+t*a<e.length;o++)n[a].push(e[o+t*a])}return n}var at=et,ot=(n("e376"),Object(Q["a"])(at,D,F,!1,null,"58226767",null)),rt=ot.exports;$["default"].use(q["a"]);var st=new q["a"]({routes:[{path:"/",name:"home",component:rt,meta:{title:"Shortcuts save 1s!"}}]}),it=(n("0fae"),n("ecee")),ct=n("ad3d"),ut=n("f2d1");it["c"].add(ut["a"]),$["default"].component("font-awesome-icon",ct["a"]),$["default"].use(E.a),$["default"].use(V.a),$["default"].use(M.a),$["default"].use(O.a),$["default"].use(j.a),$["default"].use(x.a),$["default"].use(_.a),$["default"].use(y.a),$["default"].use(b.a),$["default"].use(h.a),$["default"].use(d.a),$["default"].use(l.a),$["default"].use(c.a),$["default"].use(s.a),$["default"].use(o.a),$["default"].config.productionTip=!1;var lt="Shortcut save 1s!";st.afterEach(function(t){document.title=t.meta.title||lt});var ft=new $["default"]({router:st,store:U.a,render:function(t){return t(L)}});ft.$mount("#app")},"64a9":function(t,e,n){},a091:function(t,e,n){},a3ed:function(t,e,n){},e376:function(t,e,n){"use strict";var a=n("a091"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a75ca17d.js.map