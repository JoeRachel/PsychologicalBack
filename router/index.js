import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from "../views/Home.vue"

Vue.use(VueRouter)

// 禁止全局路由错误处理打印NavigationDuplicated
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: '/',
        name: 'Main',
        //redirect: '/home',//不需要点导航栏的首页直接显示home页面
        component: () =>
            import ('../views/Main.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login/login.vue')
    }

]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router