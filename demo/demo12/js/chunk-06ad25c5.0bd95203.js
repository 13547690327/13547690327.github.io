(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ad25c5"],{"1b18":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"chronology"},[t.inits.length?n("div",{staticClass:"chronology"},[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filtertext,expression:"filtertext"}],attrs:{type:"text",name:"",placeholder:"搜索国家/回合"},domProps:{value:t.filtertext},on:{input:function(i){i.target.composing||(t.filtertext=i.target.value)}}}),n("button",{on:{click:function(i){return t.changeheight()}}},[t._v("筛选")])]),n("div",{staticClass:"shaixuan"},[n("h1",[t._v("国家")]),n("ol",t._l(t.countries,(function(i,e){return n("li",{staticClass:"countries quxiao",on:{click:function(n){return t.countriesClick(i.CivilizationDescription,e)}}},[t._v("\n\t\t\t\t\t"+t._s(i.CivilizationDescription)+"\n\t\t\t\t")])})),0),n("h1",[t._v("时代")]),n("ol",t._l(t.shidai,(function(i,e){return n("li",{staticClass:"shidai quxiao",on:{click:function(n){return t.shidaiClick(i.GameEra,e)}}},[t._v("\n\t\t\t\t\t"+t._s(i.name)+"\n\t\t\t\t")])})),0),n("h1",{on:{click:function(i){return t.quxiao()}}},[t._v("取消")])]),t.initFilter.length?n("ul",t._l(t.initFilter,(function(i){return n("li",[n("p",[t._v("回合 "+t._s(i.Turn))]),n("div",{staticClass:"title"},[n("span",[t._v(t._s(i.CivilizationDescription))]),n("span",[t._v("时代分数 "+t._s(i.EraScore))])]),n("div",{staticClass:"cot"},[t._v(t._s(i.InstanceDescription))])])})),0):n("ul",[t._m(0)])]):n("div",{staticClass:"animate"},[n("img",{attrs:{src:e("12ae")}})])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",[e("div",{staticClass:"title"},[e("span",[t._v("没有搜到内容诶，请搜索国家/回合...")]),e("span",[t._v("=  =")])])])}],r=(e("4917"),e("7338")),s=e.n(r),c=!0,o={data:function(){return{filtertext:"",filterxuan:"",filterG:"",active:"",player:{},moment:{},inits:{},countries:{},shidai:[{name:"远古时代",GameEra:"ERA_ANCIENT"},{name:"古典时期",GameEra:"ERA_CLASSICAL"},{name:"中世纪",GameEra:"ERA_MEDIEVAL"},{name:"文艺复兴",GameEra:"ERA_RENAISSANCE"},{name:"工业时代",GameEra:"ERA_INDUSTRIAL"},{name:"现代",GameEra:"ERA_MODERN"},{name:"原子能时代",GameEra:"ERA_ATOMIC"},{name:"信息时代",GameEra:"ERA_INFORMATION"},{name:"未来时代",GameEra:"ERA_FUTURE"}]}},mounted:function(){var t=this;s.a.get("data.json").then((function(i){t.moment=i.data.Moments,t.player=i.data.Players,t.$nextTick((function(){t.initchronlogy()}))}))},methods:{initchronlogy:function(){var t=this.player.map((function(t){return{CivilizationDescription:t.CivilizationDescription}}));this.countries=t.filter((function(t){return!t.CivilizationDescription.match("城")&&!t.CivilizationDescription.match("野")}));this.moment.map((function(t){return{Turn:t.Turn,GameEra:t.GameEra,ActingPlayer:t.ActingPlayer,InstanceDescription:t.InstanceDescription}}));for(var i=[],e=0;e<this.moment.length;e++)for(var n=0;n<this.player.length;n++)this.moment[e].ActingPlayer==this.player[n].Id&&i.push({Turn:this.moment[e].Turn,GameEra:this.moment[e].GameEra,EraScore:this.moment[e].EraScore,ActingPlayer:this.moment[e].ActingPlayer,InstanceDescription:this.moment[e].InstanceDescription,CivilizationDescription:this.player[n].CivilizationDescription});var a=i.filter((function(t){return!t.InstanceDescription.match("历史上曾有两军在此交战")&&!t.InstanceDescription.match("此地曾发生海战")}));this.inits=a},changeheight:function(){var t=document.querySelector(".shaixuan"),i="";c&&(t.style.height="auto",i=getComputedStyle(t).height,t.style.height="0px",c=!1),"0px"==t.style.height?t.style.height=i:(t.style.height=0,c=!0)},countriesClick:function(t,i){this.filterxuan=t;for(var e=document.querySelectorAll(".countries"),n=0;n<e.length;n++)e[n].classList.remove("active");e[i].classList.add("active")},shidaiClick:function(t,i){this.filterG=t;for(var e=document.querySelectorAll(".shidai"),n=0;n<e.length;n++)e[n].classList.remove("active");e[i].classList.add("active")},quxiao:function(){this.filterxuan="",this.filterG="";for(var t=document.querySelectorAll(".quxiao"),i=0;i<t.length;i++)t[i].classList.remove("active")}},computed:{initFilter:function(){var t=this;return this.inits.filter((function(i){return""==t.filtertext&&""==t.filterxuan&&""==t.filterG?t.inits:""==t.filterxuan&&""==t.filterG?i.Turn==t.filtertext||i.CivilizationDescription.match(t.filtertext):i.CivilizationDescription.match(t.filterxuan)&&i.GameEra==t.filterG}))},shaixuanFilter:function(){var t=this;return this.inits.filter((function(i){return i.CivilizationDescription.match(t.filterxuan)&&i.GameEra==t.filterG}))}}},l=o,u=(e("b9fa"),e("2877")),h=Object(u["a"])(l,n,a,!1,null,"6cf22a2b",null);i["default"]=h.exports},b4e9:function(t,i,e){},b9fa:function(t,i,e){"use strict";var n=e("b4e9"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-06ad25c5.0bd95203.js.map