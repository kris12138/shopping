webpackJsonp([3],{10:function(t,e){},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.cate,function(e,a){return n("li",{class:{active:a===t.curIndex},on:{click:function(n){t.changeNav(e,a)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},13:function(t,e,n){"use strict";var a={hotList:"/index/hotLists",bannerList:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",goods:"/goods/details",deal:"/goods/deal",cart:"/cart/add",cartUpdate:"/cart/update",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressList:"/address/list"};for(var r in a)a.hasOwnProperty(r)&&(a[r]="http://rap2api.taobao.org/app/mock/7058"+a[r]);e.a=a},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),r=n.n(a),i=n(15);n.n(i);e.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new r.a(".swiper-container",{speed:1500,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0},loop:!0,pagination:".swiper-pagination"})}}},15:function(t,e){},16:function(t,e){},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},3:function(t,e,n){"use strict";var a={filters:{keepTwoNum:function(t){return t=Number(t),t.toFixed(2)}}};e.a=a},4:function(t,e,n){function a(t){n(10)}var r=n(2)(n(9),n(11),a,null,null);t.exports=r.exports},44:function(t,e){},7:function(t,e){},71:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),r=(n.n(a),n(44)),i=(n.n(r),n(6)),o=n.n(i),s=n(0),c=n(12),u=(n.n(c),n(13),n(3)),l=n(4),d=(n.n(l),n(8)),p=(n.n(d),n(46)),f=n.n(p),h=n(5),m=n.n(h),v=o.a.parse(location.search.substr(1)).keyword.split("?")[0];new s.default({el:".app",data:{keyword:v,searchList:null,topShow:!1},created:function(){this.getSearchList()},methods:{getSearchList:function(){var t=m.a.mock({"lists|30":[{"id|10000-99999":1,name:"@ctitle",img:"@image(178x178,@color)","price|1-100.2-2":1}]});this.searchList=t},move:function(){document.documentElement.scrollTop>100?this.topShow=!0:this.topShow=!1},toTop:function(){var t=document.getElementsByTagName("body");f()(t,"scroll",{duration:500,easing:"easeOutQuart"})}},mixins:[u.a]})},8:function(t,e,n){function a(t){n(16)}var r=n(2)(n(14),n(17),a,null,null);t.exports=r.exports},9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),r=n.n(a),i=[{name:"主页",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"https://h5.youzan.com/v2/buyer/auth/login?login_ajax_with_code=0&redirect_uri=https%3A%2F%2Fh5.youzan.com%2Fv2%2Ftrade%2Frecord%2Falllist%3Ftype%3Dtopay"}];e.default={data:function(){return{cate:i,curIndex:parseInt(r.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},[71]);
//# sourceMappingURL=search.e7dea79c10b46db1a70c.js.map