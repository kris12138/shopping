import 'css/common.css'
import './category.css'
import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import mixin from 'js/mixin.js'
import Foot from 'components/Foot.vue'
import Mock from 'mockjs'
let app=new Vue({
    el:'.app',
    data:{
        topList:null,
        topIndex:0,
        subList:null,
        rank:null
    },
    created(){
        
        this.getTopList()
        this.getSubList(this.topIndex,this.topIndex)


    },
    methods:{
        getTopList(){
            let data=Mock.mock({
                "lists|4": [
                  {
                    "id|+1": [
                      800,
                      810,
                      817,
                      811,
                      812,
                      813,
                      814
                    ],
                    "name|1": [
                      "@ctitle",
                      "@ctitle",
                      "@ctitle",
                      "@ctitle",
                      "@ctitle"
                    ]
                  }
                ]
              })
              this.topList=data.lists
            // axios.get(url.topList,{}).then(res=>{
                
            //     this.topList=res.data.lists
            // })
        },
        getSubList(id,index){
            this.topIndex=index
           

                let data=Mock.mock({
                    "data": {
                      "hotGoods|3": [
                        {
                          "id|+1": 1,
                          "img": "@image(90x90,@color)",
                          "name": "@ctitle",
                           
                          "price|+1": [
                            89,
                            29,
                            46.8
                          ],
                          "recommend|+1": [
                            8844,
                            5765,
                            3770
                          ]
                        }
                      ],
                      "hotKeywords": [
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle",
                        "@ctitle"
                      ],
                      "hotShops|3": [
                        {
                          "clickUrl": "www.baidu.com",
                          "follows|+1": [
                            987750,
                            584180,
                            574948
                          ],
                          "name|+1": [
                            "@ctitle",
                            "@ctitle",
                            "@ctitle"
                          ],
                          "imgs": [
                            "@image(68x68,@color)",
                            "@image(68x68,@color)",
                            "@image(68x68,@color)",
                          ]
                        }
                      ]
                    },
                    "message": "成功",
                    "status": 222
                  }
                 )
                 this.rank=data
                // axios.get(url.rank,{}).then(res=>{
                //     this.rank=res.data
                  
                // })

       


                let data1=Mock.mock({
                      "categoryList|5": [
                        {
                            

                          'id|+1': 1,
                          "name|+1": [
                            "@ctitle",
                            "@ctitle",
                            "@ctitle",
                            "@ctitle",
                            "@ctitle"
                          ],
                          "img": "@image(60x60,@color)"
                        }
                      ]
                    
                  })
                  this.subList=data1
                
                // axios.get(url.subList,{id}).then(res=>{
                    
                //     this.subList=res.data.data
                // })
            
        },
        getSearch(name,id){
            location.href = `search.html?keyword=${name}&id=${id}`
            // `${list.href}?index=${index}`
            
        }
    },
    components:{
        Foot:Foot,
    },
    mixins:[mixin]

    
    
})