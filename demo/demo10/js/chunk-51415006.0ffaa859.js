(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51415006"],{"592e":function(t,a,s){"use strict";var i=s("5cb4"),e=s.n(i);e.a},"593c":function(t,a,s){t.exports=s.p+"img/2.2c74f8a3.jpg"},"5cb4":function(t,a,s){},"65eb":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"game"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.gamewrap,expression:"gamewrap"}],staticClass:"start"},[t._m(0),s("p",{on:{click:function(a){return t.ready()}}},[t._v("开始游戏")]),s("span",[t._v("您上次到达了游戏的第"+t._s(t.count)+"关")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.start,expression:"start"}],staticClass:"gameWrap"},[s("div",{staticClass:"player"},[t._m(1),s("div",{staticClass:"hpanimate",style:{width:t.playerHealth+"%"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:this.playerHealth>0,expression:"this.playerHealth > 0"}],staticClass:"hp",class:{active:t.animate},style:{width:t.playerHealth+"%"}},[s("p",[t._v(t._s(t.playerHealth))])]),s("p",{directives:[{name:"show",rawName:"v-show",value:this.playerHealth<=0,expression:"this.playerHealth <= 0"}],staticClass:"winfail"},[t._v(t._s(t.playerfail))])]),s("div",{staticClass:"monster"},[t._m(2),s("div",{staticClass:"hpanimate",style:{width:t.monsterHealth+"%"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:this.monsterHealth>0,expression:"this.monsterHealth> 0"}],staticClass:"hp",class:{active:t.animate},style:{width:t.monsterHealth+"%"}},[s("p",[t._v(t._s(t.monsterHealth))])]),s("p",{directives:[{name:"show",rawName:"v-show",value:this.monsterHealth<=0,expression:"this.monsterHealth <= 0"}],staticClass:"winfail"},[t._v(t._s(t.monsterfail))])]),s("div",{staticClass:"log"},[s("ul",t._l(t.fightlog,function(a){return s("li",{class:{activep:a.isPlayer,activem:!a.isPlayer}},[t._v("\n\t\t\t\t "+t._s(a.text)+"\n\t\t\t\t")])}),0)]),"a"==t.win?s("div",{staticClass:"item"},[s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.attack()}}},[t._v("普通攻击")])]),s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.specialAttack()}}},[t._v("技能攻击")])]),s("div",{staticClass:"button",on:{click:function(a){return t.huifu()}}},[s("button",[t._v("生命恢复")])]),s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.taopao()}}},[t._v("逃跑")])])]):"b"==t.win?s("div",{staticClass:"item"},[s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.go()}}},[t._v("下一关")])]),s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.taopao()}}},[t._v("逃跑")])])]):s("div",{staticClass:"item"},[s("div",{staticClass:"button"},[s("button",{on:{click:function(a){return t.taopao()}}},[t._v("结束了")])])]),s("div",{staticClass:"jilu"},[t._v("\n\t\t\t第"+t._s(t.count)+"关\n\t\t")])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:s("8d84")}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"msg"},[i("span",[i("img",{attrs:{src:s("593c")}})]),i("span",[t._v("Player")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"msg"},[i("span",[i("img",{attrs:{src:s("98a8")}})]),i("span",[t._v("Monster")])])}],n={name:"game",data:function(){return{gamewrap:!0,start:!1,playerHealth:100,monsterHealth:100,pattack:5,mattack:12,playerfail:"你失败了",monsterfail:"击杀",animate:!1,win:"a",fightlog:[],count:1,a:localStorage.getItem("key"),b:1}},methods:{ready:function(){this.gamewrap=!1,this.start=!0,this.playerHealth=100,this.monsterHealth=100,this.fightlog=[],this.count=1,this.win="a",this.pattack=5,this.mattack=12},calculateDanage:function(t,a){return Math.max(Math.floor(Math.random()*a)+1,t)},playerAttacks:function(t,a){var s=this.calculateDanage(t,a);this.monsterHealth-=s,this.fightlog.unshift({isPlayer:!0,text:"player的攻击对怪兽造成了"+s+"点伤害"})},monsterAttacks:function(t,a){var s=this.calculateDanage(t,a);this.playerHealth-=s,this.fightlog.unshift({isPlayer:!1,text:"monster的攻击对玩家造成了"+s+"点伤害"})},attack:function(){this.animate=!1,this.playerAttacks(this.pattack,this.mattack),this.monsterAttacks(this.pattack,this.mattack),this.winorfail()},specialAttack:function(){this.animate=!1,this.playerAttacks(this.pattack+10,this.mattack+18),this.monsterAttacks(this.pattack+10,this.mattack+18),this.winorfail()},winorfail:function(){this.playerHealth<=0&&this.monsterHealth<=0?this.win="v":this.playerHealth<=0?this.win="v":this.monsterHealth<=0&&(this.win="b")},huifu:function(){this.animate=!0,this.playerHealth<=80?this.playerHealth+=20:this.playerHealth=100,this.fightlog.unshift({isPlayer:!0,text:"玩家治疗了20点血"}),this.monsterHealth<=80?this.monsterHealth+=25:this.monsterHealth=100,this.fightlog.unshift({isPlayer:!1,text:"怪兽治疗了25点血"})},go:function(){this.playerHealth=100,this.monsterHealth=100,this.win="a",this.pattack+=2,this.mattack+=2,this.count++},taopao:function(){this.gamewrap=!0,this.start=!1}}},l=n,r=(s("592e"),s("2877")),c=Object(r["a"])(l,i,e,!1,null,"2b90b210",null);a["default"]=c.exports},"8d84":function(t,a,s){t.exports=s.p+"img/0.305b602d.png"},"98a8":function(t,a,s){t.exports=s.p+"img/1.1f98eecb.jpg"}}]);
//# sourceMappingURL=chunk-51415006.0ffaa859.js.map