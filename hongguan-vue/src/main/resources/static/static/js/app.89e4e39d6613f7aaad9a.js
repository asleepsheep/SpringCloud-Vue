webpackJsonp([19],{"729U":function(e,t){},"7zck":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]},i=n("VU/8")({name:"App"},r,!1,null,null,null).exports,o=n("/ocq");function s(e,t,a,r){return{exact:!0,path:e,name:a,children:r,component:function(){return n("r07X")("./pages"+t)}}}a.default.use(o.a);var u=new o.a({routes:[s("/login","/Login","Login"),{path:"/",component:function(){return n.e(1).then(n.bind(null,"cpAg"))},redirect:"/index/dashboard",children:[s("/index/dashboard","/Dashboard","Dashboard"),s("/item/category","/item/Category","Category"),s("/item/brand","/item/Brand","Brand"),s("/item/list","/item/Goods","Goods"),s("/item/specification","/item/specification/Specification","Specification"),s("/user/statistics","/item/Statistics","Statistics"),s("/trade/promotion","/trade/Promotion","Promotion")]}]}),c=n("3EgV"),p=n.n(c),l=n("QmSG"),d=n("mvHQ"),m=n.n(d),f=n("//Fk"),g=n.n(f),v=n("zL8q"),h={info:function(e){Object(v.Message)({showClose:!0,message:e,type:"info"})},error:function(e){Object(v.Message)({showClose:!0,message:e,type:"error"})},success:function(e){Object(v.Message)({showClose:!0,message:e,type:"success"})},warning:function(e){Object(v.Message)({showClose:!0,message:e,type:"warning"})},confirm:function(e){return new g.a(function(t,n){v.MessageBox.confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t()}).catch(function(){n()})})},prompt:function(e){return new g.a(function(t,n){v.MessageBox.prompt(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(e){var n=e.value;t(n)}).catch(function(){n()})})}},b={install:function(e){e.component("vTree",function(){return n.e(16).then(n.bind(null,"vXi7"))}),e.component("vCascader",function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"a6nq"))}),e.component("vUpload",function(){return n.e(17).then(n.bind(null,"oOAS"))}),e.component("vEditor",function(){return n.e(15).then(n.bind(null,"jnmG"))}),e.prototype.$message=h,e.prototype.$format=function(e){if("string"==typeof e){if(isNaN(e))return null;var t=e.lastIndexOf("."),n="";return n=t<0?e+"00":t===n.length-2?e.replace(".","")+"0":e.replace(".",""),parseInt(n)}if("number"==typeof e){if(null==e)return null;var a=e+"";if(0===a.length)return 0;if(1===a.length)return"0.0"+e;if(2===a.length)return"0."+e;var r=a.indexOf(".");if(r<0)return a.substring(0,a.length-2)+"."+a.substring(a.length-2);var i=a.substring(0,r)+a.substring(r+1);if(1===r)return"0.0"+i;if(2===r)return"0."+i;if(r>2)return i.substring(0,r-2)+"."+i.substring(r-2)}}}};Object.deepCopy=function(e){return JSON.parse(m()(e))};var y,w=b,B=n("Xxa5"),x=n.n(B),O=n("exGp"),P=n.n(O),S=n("mtWM"),C=n.n(S);C.a.defaults.baseURL=l.a.api,C.a.defaults.timeout=2e3,C.a.loadData=(y=P()(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)})),function(e){return y.apply(this,arguments)}),a.default.prototype.$http=C.a;n("7zck");var G=n("mw3O"),A=n.n(G);n("tvR6"),n("729U");a.default.use(p.a,{theme:l.a.theme}),a.default.use(w),a.default.prototype.$qs=A.a,a.default.config.productionTip=!1,new a.default({el:"#app",router:u,components:{App:i},template:"<App/>"})},QmSG:function(e,t,n){"use strict";var a={locale:"zh-CN",url:"http://api.leyou.com",debug:{http:!1},api:"http://api.leyou.com/api",theme:{primary:"#2196F3",secondary:"#455A64",accent:"#9c27b0",error:"#f44336",warning:"#FFC107",info:"#64B5F6",success:"#4caf50"},isDark:!0,unitOption:[{header:"长度"},{value:"mm"},{value:"cm"},{value:"dm"},{value:"m"},{value:"寸"},{value:"英寸"},{value:"尺"},{divider:!0},{header:"重量"},{value:"mg"},{value:"g"},{value:"kg"},{value:"t"},{divider:!0},{header:"像素"},{value:"万像素"},{divider:!0},{header:"频率"},{value:"Hz"},{value:"mHz"},{value:"gHz"},{divider:!0},{header:"存储"},{value:"KB"},{value:"MB"},{value:"GB"},{divider:!0},{header:"电压"},{value:"V"},{value:"KV"},{divider:!0},{header:"电池容量"},{value:"mAh"},{divider:!0},{header:"功率"},{value:"w"},{value:"Kw"},{divider:!0},{header:"电流"},{value:"μA"},{value:"mA"},{value:"A"},{divider:!0},{header:"电阻"},{value:"Ω"},{value:"KΩ"},{value:"A"},{divider:!0}]};t.a=a},r07X:function(e,t,n){var a={"./pages/Dashboard":["s+3R",4],"./pages/Dashboard.vue":["s+3R",4],"./pages/Layout":["cpAg",1],"./pages/Layout.vue":["cpAg",1],"./pages/Login":["P7ry",13],"./pages/Login.vue":["P7ry",13],"./pages/item/Brand":["ssss",7,0],"./pages/item/Brand.vue":["ssss",7,0],"./pages/item/BrandForm":["RPpC",0,10],"./pages/item/BrandForm.vue":["RPpC",0,10],"./pages/item/Category":["DpGy",9],"./pages/item/Category.vue":["DpGy",9],"./pages/item/Goods":["priW",5,0],"./pages/item/Goods.vue":["priW",5,0],"./pages/item/GoodsForm":["mWTg",6,0],"./pages/item/GoodsForm.vue":["mWTg",6,0],"./pages/item/specification/SpecGroup":["22DO",3],"./pages/item/specification/SpecGroup.vue":["22DO",3],"./pages/item/specification/SpecParam":["KE2j",2],"./pages/item/specification/SpecParam.vue":["KE2j",2],"./pages/item/specification/Specification":["wwgk",12],"./pages/item/specification/Specification.vue":["wwgk",12],"./pages/trade/Promotion":["OPnq",8],"./pages/trade/Promotion.vue":["OPnq",8],"./pages/user/Statistics":["BnTR",11],"./pages/user/Statistics.vue":["BnTR",11]};function r(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(a)},r.id="r07X",e.exports=r},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.89e4e39d6613f7aaad9a.js.map