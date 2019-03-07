import 'css/common.css'
import './search.css'
import qs from 'qs'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'
import Velocity from 'velocity-animate'
import Mock from 'mockjs'
let keyword= qs.parse(location.search.substr(1))['keyword'].split('?')[0]

let app=new Vue({
    el:'.app',
    data:{
        keyword:keyword,
        searchList:null,
        topShow:false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){

            
            let data=Mock.mock({
               
                  "lists|30": [
                    {
                        "id|10000-99999": 1,
                        "name": "@ctitle",
                        "img": "@image(178x178,@color)",
                        "price|1-100.2-2": 1
                    }
                  ]
                }           
              )
              this.searchList=data



            // axios.get(url.searchList,
            //     {keyword, id}
            // ).then(res=>{
            //     this.searchList=res.data
            //     // alert(this.searchList)
            // })
        },
        move(){
            if(document.documentElement.scrollTop>100){
             
                this.topShow=true
            }else{
                this.topShow=false
            }

        },
        toTop(){
            var oBox = document.getElementsByTagName('body')
            Velocity(oBox,"scroll", { duration: 500, easing: "easeOutQuart" }); 
            // Velocity(document.documentElement,'scroll',{duration:1000})

        }
    },
    mixins:[mixin]
})