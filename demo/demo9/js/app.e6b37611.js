(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0b8e":function(t,e,i){"use strict";var n=i("0bcb"),a=i.n(n);a.a},"0bcb":function(t,e,i){},"3a10":function(t,e,i){},"427d":function(t,e,i){},"4ee2":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:{name:"home"}}})],1),i("router-view")],1)},r=[],s=i("2877"),o={},c=Object(s["a"])(o,a,r,!1,null,null,null),l=c.exports,u=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("homeheader"),i("swiper"),i("icons"),i("recommend",{attrs:{list:t.list}}),i("weekend",{attrs:{list:t.list}})],1)},d=[],f=i("7338"),m=i.n(f),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"headerLeft"},[i("i",{staticClass:"iconfoot icon-fanhui backicon"})]),i("div",{staticClass:"headerInput"},[i("i",{staticClass:"iconfoot icon-fanhui"}),t._v("\n\t\t输入城市/景点/游玩主题\n\t")]),i("div",{staticClass:"headerRight"},[t._v("\n\t\t城市\n\t\t"),i("i",{staticClass:"iconfoot icon-fanhui arrowicon"})])])}],h={name:"head"},_=h,b=(i("e447"),Object(s["a"])(_,g,v,!1,null,null,null)),w=b.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(t){return i("swiper-slide",[i("img",{staticClass:"swiperimg",attrs:{src:t.imgUrl}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},x=[],j={data:function(){return{swiperOption:{pagination:".swiper-pagination",slidesPerView:1,autoplay:{delay:1e3,disableObInteraction:!1},spaceBetween:30,loop:!0},swiperList:[{id:"1",imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/ebf7306335a5e060dbbfe42b8e8ede9f.jpg_945x288_da043916.jpg"},{id:"2",imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"}]}}},O=j,y=(i("f983"),Object(s["a"])(O,C,x,!1,null,null,null)),E=y.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.iconsswiperOption}},[t._l(t.pages,function(e,n){return i("swiper-slide",{key:n},t._l(e,function(e){return i("div",{staticClass:"icon"},[i("img",{attrs:{src:e.imgurl}}),i("p",[t._v(t._s(e.text))])])}),0)}),i("div",{staticClass:"icon-swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},k=[],$=(i("ac6a"),{data:function(){return{iconsswiperOption:{pagination:".icon-swiper-pagination",loop:!0},iconitem:[{id:"1",imgurl:"https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E5%91%A8%E8%BE%B9%E6%B8%B8.png",text:"周边游"},{id:"2",imgurl:"https://dimg04.c-ctrip.com/images/300a13000000tztb283AD.png",text:"一日游"},{id:"3",imgurl:"https://dimg04.c-ctrip.com/images/300l10000000pj3oq76D9.png",text:"景点·门票"},{id:"4",imgurl:"https://dimg04.c-ctrip.com/images/300b11000000ricm57816.png",text:"主题旅行"},{id:"5",imgurl:"https://dimg04.c-ctrip.com/images/300d13000000tx0nbB454.png",text:"亲子·游学"},{id:"6",imgurl:"https://dimg04.c-ctrip.com/images/300h13000000vjqbpE86C.png",text:"海岛"},{id:"7",imgurl:"https://dimg04.c-ctrip.com/images/300j13000000ty0js75C3.png",text:"带娃出游"},{id:"8",imgurl:"https://dimg04.c-ctrip.com/images/300q13000000twl3sEC5D.png",text:"浪漫之旅"},{id:"9",imgurl:"https://pages.c-ctrip.com/groupTravelUED/travel_homepage/8.1.2icon/%E9%B8%BF%E9%B9%84%C2%B7%E5%A5%A2%E6%B8%B8.png",text:"鸿鹄·奢游"},{id:"10",imgurl:"https://dimg04.c-ctrip.com/images/300713000000uf6gaA365.png",text:"当地向导"}]}},computed:{pages:function(){var t=[];return this.iconitem.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t}}}),P=$,U=(i("0b8e"),Object(s["a"])(P,B,k,!1,null,null,null)),S=U.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"recommendtitle"},[t._v("热销推荐")]),i("ul",t._l(t.list.recommendList,function(e){return i("li",{staticClass:"item border-bottom"},[i("div",{staticClass:"itemimg"},[i("img",{attrs:{src:e.imgUrl}})]),i("div",{staticClass:"iteminfo"},[i("p",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.desc))]),i("button",[t._v("查看详情")])])])}),0)])},z=[],A={props:{list:{type:Object}}},D=A,L=(i("a057"),Object(s["a"])(D,q,z,!1,null,null,null)),M=L.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"weekendtitle"},[t._v("周末去哪儿游")]),i("ul",t._l(t.list.weekendList,function(e){return i("li",{staticClass:"item border-bottom"},[i("div",{staticClass:"itemimg"},[i("img",{attrs:{src:e.imgUrl}})]),i("div",{staticClass:"iteminfo"},[i("p",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.desc))])])])}),0)])},I=[],J={props:{list:{type:Object}}},F=J,R=(i("8fc9"),Object(s["a"])(F,T,I,!1,null,null,null)),V=R.exports,G={components:{homeheader:w,swiper:E,icons:S,recommend:M,weekend:V},data:function(){return{list:{}}},mounted:function(){var t=this;m.a.get("./data.json").then(function(e){t.list=e.data.data})}},H=G,K=(i("a318"),Object(s["a"])(H,p,d,!1,null,null,null)),N=K.exports;n["a"].use(u["a"]);var Q=new u["a"]({routes:[{path:"/",name:"home",component:N}]}),W=i("2f62");n["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{}}),Y=i("94db"),Z=i.n(Y),tt=i("1f80"),et=i.n(tt);i("3a10"),i("4ee2"),i("a07f"),i("dfa4");n["a"].config.productionTip=!1,Z.a.attach(document.body),n["a"].use(et.a),new n["a"]({router:Q,store:X,render:function(t){return t(l)}}).$mount("#app")},"7f1b":function(t,e,i){},"8fc9":function(t,e,i){"use strict";var n=i("7f1b"),a=i.n(n);a.a},a057:function(t,e,i){"use strict";var n=i("f6eb"),a=i.n(n);a.a},a07f:function(t,e,i){},a318:function(t,e,i){"use strict";var n=i("427d"),a=i.n(n);a.a},dd8a:function(t,e,i){},e447:function(t,e,i){"use strict";var n=i("dd8a"),a=i.n(n);a.a},ee4e:function(t,e,i){},f6eb:function(t,e,i){},f983:function(t,e,i){"use strict";var n=i("ee4e"),a=i.n(n);a.a}});
//# sourceMappingURL=app.e6b37611.js.map