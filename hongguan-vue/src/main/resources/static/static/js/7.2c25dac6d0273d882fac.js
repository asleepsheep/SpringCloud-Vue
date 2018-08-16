webpackJsonp([7,10],{"+h7q":function(t,e){},RPpC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("+6Bu"),i=a.n(n),r={name:"brand-form",props:{oldBrand:{type:Object},isEdit:{type:Boolean,default:!1}},data:function(){return{valid:!1,brand:{name:"",letter:"",image:"",categories:[]},nameRules:[function(t){return!!t||"行业名称不能为空"},function(t){return t.length>1||"行业名称至少2位"}],letterRules:[function(t){return!!t||"首字母不能为空"},function(t){return/^[a-zA-Z]{1}$/.test(t)||"行业字母只能是1个字母"}]}},methods:{submit:function(){var t=this;if(this.$refs.myBrandForm.validate()){var e=this.brand,a=e.categories,n=e.letter,r=i()(e,["categories","letter"]);r.cids=a.map(function(t){return t.id}).join(","),r.letter=n.toUpperCase(),this.$http({method:this.isEdit?"put":"post",url:"/item/brand",data:this.$qs.stringify(r)}).then(function(){t.$emit("close"),t.$message.success("保存成功！")}).catch(function(){t.$message.error("保存失败！")})}},clear:function(){this.$refs.myBrandForm.reset(),this.categories=[]}},watch:{oldBrand:{handler:function(t){this.brand=t?Object.deepCopy(t):{name:"",letter:"",image:"",categories:[]}},deep:!0}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"myBrandForm",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"请输入行业名称",required:"",rules:t.nameRules},model:{value:t.brand.name,callback:function(e){t.$set(t.brand,"name",e)},expression:"brand.name"}}),t._v(" "),a("v-text-field",{attrs:{label:"请输入行业首字母",required:"",rules:t.letterRules},model:{value:t.brand.letter,callback:function(e){t.$set(t.brand,"letter",e)},expression:"brand.letter"}}),t._v(" "),a("v-cascader",{attrs:{url:"/item/category/list",multiple:"",required:"",label:"请选择商机分类"},model:{value:t.brand.categories,callback:function(e){t.$set(t.brand,"categories",e)},expression:"brand.categories"}}),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs3:""}},[a("span",{staticStyle:{"font-size":"16px",color:"#444"}},[t._v("行业标识LOGO：")])]),t._v(" "),a("v-flex",[a("v-upload",{attrs:{url:"/upload/image",multiple:!1,"pic-width":250,"pic-height":90},model:{value:t.brand.image,callback:function(e){t.$set(t.brand,"image",e)},expression:"brand.image"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"my-4",attrs:{row:""}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),a("v-btn",{on:{click:t.clear}},[t._v("重置")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("+h7q")},"data-v-4f9773ce",null);e.default=o.exports},Z9uq:function(t,e){},ssss:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"brand",data:function(){return{search:"",totalBrands:0,brands:[],loading:!0,pagination:{},headers:[{text:"id",align:"center",value:"id"},{text:"名称",align:"center",sortable:!1,value:"name"},{text:"LOGO",align:"center",sortable:!1,value:"image"},{text:"首字母",align:"center",value:"letter",sortable:!0},{text:"操作",align:"center",value:"id",sortable:!1}],show:!1,oldBrand:{},isEdit:!1}},mounted:function(){this.getDataFromServer()},watch:{pagination:{deep:!0,handler:function(){this.getDataFromServer()}},search:{handler:function(){this.getDataFromServer()}}},methods:{getDataFromServer:function(){var t=this;this.$http.get("/item/brand/page",{params:{key:this.search,page:this.pagination.page,rows:this.pagination.rowsPerPage,sortBy:this.pagination.sortBy,desc:this.pagination.descending}}).then(function(e){t.brands=e.data.items,t.totalBrands=e.data.total,t.loading=!1})},addBrand:function(){this.isEdit=!1,this.show=!0,this.oldBrand=null},editBrand:function(t){var e=this;this.$http.get("/item/category/bid/"+t.id).then(function(a){var n=a.data;e.isEdit=!0,e.show=!0,e.oldBrand=t,e.oldBrand.categories=n})},closeWindow:function(){this.getDataFromServer(),this.show=!1}},components:{BrandForm:a("RPpC").default}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("v-btn",{attrs:{color:"primary"},on:{click:t.addBrand}},[t._v("新增行业")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"输入关键字搜索","append-icon":"search","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.brands,pagination:t.pagination,"total-items":t.totalBrands,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.id))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[e.item.image?a("img",{attrs:{src:e.item.image,width:"130",height:"40"}}):a("span",[t._v("无")])]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.letter))]),t._v(" "),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){t.editBrand(e.item)}}},[a("i",{staticClass:"el-icon-edit"})]),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(a){t.deleteBrand(e.item)}}},[a("i",{staticClass:"el-icon-delete"})])],1)]}}])}),t._v(" "),a("v-dialog",{attrs:{"max-width":"500",persistent:"",scrollable:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-toolbar",{attrs:{dense:"",dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(t.isEdit?"修改":"新增")+"行业")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:t.closeWindow}},[a("v-icon",[t._v("close")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"px-5",staticStyle:{height:"400px"}},[a("brand-form",{attrs:{oldBrand:t.oldBrand,isEdit:t.isEdit},on:{close:t.closeWindow}})],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("Z9uq")},"data-v-5a6ba7c0",null);e.default=r.exports}});
//# sourceMappingURL=7.2c25dac6d0273d882fac.js.map