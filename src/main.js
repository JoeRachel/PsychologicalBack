import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/less/index.less'
import VueParticles from 'vue-particles'



import router from '../router'
import store from '../store';
import http from 'axios'
import '../api/mock.js'

// import axios from 'axios'
// //其他vue组件中就可以this.$axios调用使用
// Vue.prototype.$axios = axios

import axios from 'axios'
import '../public/reset.css'
Vue.prototype.$axios = axios




Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueParticles)

Vue.prototype.$http = http

//守卫
router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else {
        next()
    }
})

new Vue({
    store,
    router,
    axios,
    el: '#app',
    render: h => h(App),
    created() {
        store.commit('addMenu', router)

    }
});