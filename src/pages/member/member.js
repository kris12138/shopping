import './components/member.css'
import './components/member_base.css'
import Vue from 'vue'
import router from './router'
import store from './vuex/index'
new Vue({
    el:'.app',
    router:router,
    store:store
})