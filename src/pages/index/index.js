import 'css/common.css'
import './index.css'
import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'
import { InfiniteScroll} from 'mint-ui';
import Mock from 'mockjs'
Vue.use(InfiniteScroll)
let app=new Vue({
    el:'.app',
    data:{
        lists:null,
        pageNum:1,
        loading:false,
        allLoaded:false,
        pageSize:6,
        bannerLists:null
    },
    created(){
        this.getLists()
        this.getBanner()
        
    },
    methods:{
        getLists(){
            if(this.allLoaded)return
            this.loading=true


            let data=Mock.mock({
                "lists|6": [
                  {
                    "id|10000-99999": 1,
                    "img": "@image(178x178,@color)",
                    "name": "@ctitle",
                    "price|1-100.2-2": 1
                  }
                ]
              })


              let currentList=data.lists
              if(currentList.length<this.pageSize){
                  this.allLoaded=true
              }
              if(this.lists){
                this.lists=this.lists.concat(currentList)

              }else{
                this.lists=currentList
              }





            // axios.get(url.hotList,{
            //     "pageNum": this.pageNum,
            //     "pageSize": this.pageSize
            //   }).then(res=>{
            //       let currentList=res.data.lists
            //       if(currentList.length<this.pageSize){
            //           this.allLoaded=true
            //       }
            //       if(this.lists){
            //         this.lists=this.lists.concat(currentList)

            //       }else{
            //         this.lists=currentList
            //       }
            // })
            this.loading=false
            this.pageNum++

        },
        getBanner(){

          let data=Mock.mock({
            "lists|3": [
              {
                "clickUrl": "@url",
                "img": "@image(375x180,@color)"
              }
            ]
          })

          this.bannerLists=data.lists


            // axios.get(url.bannerList,{
            // }).then(res=>{
            //     this.bannerLists=res.data.lists
            // })
        }
    },
    components:{
        Foot:Foot,
        Swipe:Swipe
    }
    

})
