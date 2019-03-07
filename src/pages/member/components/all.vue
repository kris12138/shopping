<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item " 
      :key='list.id'
      v-for='list in lists'
      :class="{'address-item-default':list.isDefault}"
       @click='editChange(list)'
      >
        <div class="address-title" >{{list.name}} {{list.tel}}  </div>  
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
 
      </a>
 
    </div>
    <div class="block stick-bottom-row center">

     <span @click='newChange()'>新增地址</span>

    
    </div>
  </div>

</template>

<style scoped>
@import './member.css';
@import './member_base.css';
@import './address_base.css';
@import './address.css';
</style>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import url from 'js/api.js'
export default {
 computed:{
   lists(){
     return this.$store.state.lists
   }
 },
  created(){
    if(!this.$store.state.lists){
      this.$store.dispatch('getLists')

    }
    

  },
    methods:{
        editChange(list){
            this.$router.push({ name: 'form', query: { type: 'edit',instance:list }})
        },
        newChange(list){
          let instance={
        address:"",
cityName:"",
cityValue:"",
districtName:"",
districtValue:"",
id:'',
isDefault:false,
name:"",
provinceName:"",
provinceValue:'',
tel:''

      }
            this.$router.push({ name: 'form', query: { type: 'new',instance:instance }})
        }
    }
}
</script>