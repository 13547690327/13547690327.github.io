(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e890d984"],{"5f66":function(t,e,l){},7340:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"jggcj"},[l("ul",[l("li",{staticClass:"active"},[t._v("1")]),l("li",[t._v("2")]),l("li",[t._v("3")]),l("li",[t._v("4")]),l("li",[t._v("5")]),l("li",[t._v("6")]),l("li",[t._v("7")]),l("li",[t._v("8")])]),l("button",{staticClass:"but"},[t._v("点击抽奖")])])}],i={mounted:function(){var t,e=document.querySelector("ul"),l=document.querySelector(".but"),n=e.querySelectorAll("li"),c=0,i=0,o=3,a=500,u=500,r=!0,s=Math.floor(7*Math.random());function f(){a-=50,a<=10&&(a=10);for(var e=0;e<n.length;e++)n[e].classList.remove("active");c++,c>=n.length&&(c=0,i++),n[c].classList.add("active"),console.log(s),i>=o&&c==s?(clearTimeout(t),r=!0,a=u,setTimeout(function(){alert("恭喜你获得了"+(c+1))},500)):(t=setTimeout(f,a),(i>=o-1||a<=50)&&(a+=100))}l.onclick=function(){r&&(c=0,i=0,f(),r=!1,s=Math.floor(7*Math.random()))}}},o=i,a=(l("f84f"),l("2877")),u=Object(a["a"])(o,n,c,!1,null,null,null);e["default"]=u.exports},f84f:function(t,e,l){"use strict";var n=l("5f66"),c=l.n(n);c.a}}]);
//# sourceMappingURL=chunk-e890d984.7cfe88fe.js.map