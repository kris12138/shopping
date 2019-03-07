


import { InfiniteScroll} from 'mint-ui';



import "./goods_common.css"
import "./goods_custom.css"
import "./goods.css"
import "./goods_theme.css"
import "./goods_mars.css"
import "./goods_sku.css"
import "./goods_transition.css"
import Swipe from 'components/Swipe.vue'
import Mock from 'mockjs'


import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'
let id = qs.parse(location.search.substr(1))
let app=new Vue({
    el:'#app',
    data:{
        goodsDetails:null,
        tabIndex:0,
        bannerLists:[],
        shuType:0,
        skuShow:false,
        cartNum:1,
        cartShow:false,
        addCartMessage:false,
        bannerListsImg:null
    },
    created(){
        this.getDetails()
        // this.getDealList()

    },
    methods:{
        getDetails(){

          let data1=Mock.mock({
            "lists|3": [
              {
                "clickUrl": "@url",
                "img":"@image(178x178,@color)"
              }
              
            ]
          })

          this.bannerListsImg=data1.lists

 
            let data=Mock.mock({
                "data": {
                  "imgs": [
                    "@image(178x178,@color)"
                  ],
                  "originalPrice|101-300.2-2": 1,
                  "postage": "免运费",
                  "price|1-100.2-2": 1,
                  "sales|500-800": 1,
                  "title": "@ctitle",
                  "storeName": "@ctitle",
                  "skuList|2": [
                    {
                      "lists": [
                        "1个",
                        "2个"
                      ],
                      "title": "@order('净含量','个数')"
                    }
                  ],
                  "remain|100-400": 1,
                  "identification": [
                    "企业认证",
                    "担保交易"
                  ],
                  "description": "@ctitle"
                },
                "message": "",
                "status": 200
              })


              this.goodsDetails=data.data
              for(let i=0;i<this.goodsDetails.imgs.length;i++){
                  this.bannerLists.push({clickUrl:'',
                  img:this.goodsDetails.imgs[i]})
              }


            // axios.get(url.goods,{id}).then(res=>{
            //     this.goodsDetails=res.data.data
            //     for(let i=0;i<this.goodsDetails.imgs.length;i++){
            //         this.bannerLists.push({clickUrl:'',
            //         img:this.goodsDetails.imgs[i]})
            //     }
            // })          
        },
        changeTab(index){
            this.tabIndex=index
  

        },
     
        skuType(index){
            this.shuType=index
            this.skuShow=true
        },
        addCart(){
          this.cartShow=true
          this.skuShow=false
          this.addCartMessage=true
          

            // axios.get(url.cart,
            //     {
            //        id,
            //         "number": this.cartNum
            //       }
            // ).then(res=>{
            //     this.cartShow=true
            //     this.skuShow=false
            //     this.addCartMessage=true
            //     setTimeout(
            //         "this.addCartMessage=false"

            // ,3000)

            // })




          

        },
        changCartNum(num){
            if(num<0&&this.cartNum===1){return}
            this.cartNum= this.cartNum+num
        }

    },
    watch:{
        skuShow(val,oldval){
            document.body.style.overflow=val?'hidden':'auto'
            document.querySelector('html').style.overflow=val?'hidden':'auto'
            document.html.style.height=val?'100%':'auto'
            document.querySelector('html').style.overflow=val?'100%':'auto'
        }


    },
    mixins:[mixin],
    components:{
        Swipe:Swipe
    }
})