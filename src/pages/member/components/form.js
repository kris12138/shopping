import axios from 'axios'
import url from 'js/api.js'
export default {
    data(){
        return {
            address: "",
            cityName: "选择城市",
            cityValue: -1,
            districtValue: -1,
            districtName: "选择城区",
            id: '',
            name: "",
            provinceValue: -1,
            provinceName: '选择省',
            tel: '',
            type:'',
            instance:null,
            addressData:require('js/address.json'),
            cityList:null,
            districtList:null
        }
    },
    computed:{
        lists(){
            return  this.$store.state.lists
        }

    },
    created(){
        let query=this.$route.query
        this.type=query.type
        this.instance=query.instance   
        if(this.type==='edit'){
            this.provinceName=this.instance.provinceName
            this.provinceValue=this.instance.provinceValue
            this.cityName=this.instance.cityName
            this.cityValue=this.instance.cityValue
            this.districtName=this.instance.districtName
            this.districtValue=this.instance.districtValue
        }
    },
    methods:{
        add(){
            if(this.type==='edit'){
                axios.post(url.cartUpdate,{
                    "address": this.address,
                    "cityValue": this.cityValue,
                    "districtValue": this.districtValue,
                    "provinceValue": this.provinceValue,
                    "id": this.id,
                    "name": this.name,
                    "tel": this.tel
                  }).then(res=>{
                      alert('更新成功')
                      this.$router.go(-1)
                  })

            }
            if(this.type==='new'){
                let instance={
                    "address": this.address,
                    "cityValue": this.cityValue,
                    "districtValue": this.districtValue,
                    "provinceValue": this.provinceValue,
                    "name": this.name,
                    "tel": this.tel

                  }
                  this.$store.dispatch('addAction',instance)

            }
        },
        cartremove(){
            axios.post(url.cart,{
                "id": this.id
              }).then(res=>{
                  alert('删除成功')
                  this.$router.go(-1)
              })

        }

    },
    watch:{
        lists(val){
            this.$router.go(-1)

        }
        ,
        provinceValue(val){
            if(val===-1){return}
            let index=this.addressData.list.findIndex(province=>{
                return province.value===val
            })
            this.cityList=this.addressData.list[index].children
            // this.districtList=null
            if(this.type==='edit'){

                this.cityValue=-1
                this.cityName='选择城市'
                this.districtValue=-1
                this.districtName='选择城区'
                

            }else{
                this.cityValue=-1
                this.cityName='选择城市'
                this.districtValue=-1
                this.districtName='选择城区'
            }
         
          

        },
        cityValue(val){
            if(val===-1) return
            let index=this.cityList.findIndex(city=>{
                return city.value===val
            })
            this.districtList=this.cityList[index].children

            if(this.type==='edit'){
                

            }else{
                this.districtValue=-1
                this.districtName='选择城区'
            }
           
            

        }


    }
}