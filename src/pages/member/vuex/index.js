
import Vue from 'vue'
import Vuex from 'vuex'
import url from 'js/api.js'
import axios from 'axios'
Vue.use(Vuex)
import Axios from 'axios';

const store =new Vuex.Store({
    state:{
        lists:null
    },
    mutations:{
        init(state,lists){
            state.lists=lists
        },
        add(state,instance){
            state.lists.push(instance)

        }
    },
    actions:{
        getLists({commit}){
            axios.get(url.addressList,{}).then(res=>{
                commit('init',res.data.lists)
            })
        },
        addAction({commit},instance){
            axios.get(url.cart,instance).then(res=>{
                commit('add',instance)
            })

        }
    }
})
export default store