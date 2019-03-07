import './cart.css'
import './cart_base.css'
import './cart_trade.css'
import Mock from 'mockjs'
import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import mixin from 'js/mixin.js'
import Foot from 'components/Foot.vue'
 let app =new Vue({
     el:'.app',
     data:{
        cartList:null,
        checkList:null,
        allChecked:false,
        totlaPrice:0
       

     },
     created(){
        this.getGoodsList()

     },
     computed:{
        selectList(){
            if(this.cartList&&this.cartList.length){
              
                let arr=[]
                let total=0
                this.cartList.forEach(good=>{
                    if(good.checked){
                        arr.push(good)
                        total+=good.price*good.number
                    }
      
                })
                this.totlaPrice=total
                return arr

            }
            else{
                return []
            }
          

         }

     },
     methods:{
         getGoodsList(){

            let data=Mock.mock({
                 "goodsList|8": [
                      {
                        "id|10000-99999": 1,
                        "img": "@image(90x90,@color)",
                        "number|1-10": 1,
                        "price|10-150": 1,
                        'name':'@ctitle',
                        'checked|3':false


                      }
                    ]  
              })

              this.cartList=data.goodsList

         },
         selectGoods(item,index){

            this.cartList[index].checked=!this.cartList[index].checked
            console.log(this.cartList)
            for(let i in this.cartList){
                    // console.log(this.cartList[i].checked)
                if(this.cartList[i].checked){
                    // console.log(this.cartList)
                    this.allChecked=true
                    
                }
                else{
                    // console.log(i.checked)
                    this.allChecked=false
                    break
                    
                }
            }

       




        },
        selectAll(){
            this.allChecked=!this.allChecked

            this.cartList.forEach(good=>{
                good['checked']=  this.allChecked
            })

        }


     },
     mixins:[mixin],
     components:{
        Foot:Foot
    }

 })