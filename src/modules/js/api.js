let url={
    hotList:'/index/hotLists',
    bannerList:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    goods:'/goods/details',
    deal:'/goods/deal',
    cart:'/cart/add',
    cartUpdate:'/cart/update',
    cartList:'/cart/list',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMrremove:'/cart/mrremove',
    addressList:'/address/list'

}
let host = 'http://rap2api.taobao.org/app/mock/7058'
for(let key in url){
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
      }
}
export default url