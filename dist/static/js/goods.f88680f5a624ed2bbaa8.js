webpackJsonp([2],{14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(19),s=i.n(n),a=i(15);i.n(a);e.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new s.a(".swiper-container",{speed:1500,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},loop:!0,pagination:".swiper-pagination"})}}},15:function(t,e){},16:function(t,e){},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return i("div",{staticClass:"swp-page swiper-slide"},[i("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[i("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),t._v(" "),i("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},3:function(t,e,i){"use strict";var n={filters:{keepTwoNum:function(t){return t=Number(t),t.toFixed(2)}}};e.a=n},34:function(t,e){},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){},39:function(t,e){},40:function(t,e){},67:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(35),s=(i.n(n),i(36)),a=(i.n(s),i(34)),o=(i.n(a),i(39)),r=(i.n(o),i(37)),c=(i.n(r),i(38)),u=(i.n(c),i(40)),l=(i.n(u),i(8)),d=i.n(l),p=i(5),f=i.n(p),h=i(0),m=i(6),g=i.n(m),w=i(3);g.a.parse(location.search.substr(1)),new h.default({el:"#app",data:{goodsDetails:null,tabIndex:0,bannerLists:[],shuType:0,skuShow:!1,cartNum:1,cartShow:!1,addCartMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=f.a.mock({data:{imgs:["@image(178x178,@color)"],"originalPrice|100-999":1,postage:"免运费","price|5-99":1,"sales|500-800":1,title:"@ctitle",storeName:"@ctitle","skuList|2":[{lists:["1个","2个"],title:"@order('净含量','个数')"}],"remain|100-400":1,identification:["企业认证","担保交易"],description:"@ctitle"},message:"",status:200});this.goodsDetails=t.data;for(var e=0;e<this.goodsDetails.imgs.length;e++)this.bannerLists.push({clickUrl:"",img:this.goodsDetails.imgs[e]})},changeTab:function(t){this.tabIndex=t},skuType:function(t){this.shuType=t,this.skuShow=!0},addCart:function(){this.cartShow=!0,this.skuShow=!1,this.addCartMessage=!0},changCartNum:function(t){t<0&&1===this.cartNum||(this.cartNum=this.cartNum+t)}},watch:{skuShow:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.html.style.height=t?"100%":"auto",document.querySelector("html").style.overflow=t?"100%":"auto"}},mixins:[w.a],components:{Swipe:d.a}})},8:function(t,e,i){function n(t){i(16)}var s=i(2)(i(14),i(17),n,null,null);t.exports=s.exports}},[67]);
//# sourceMappingURL=goods.f88680f5a624ed2bbaa8.js.map