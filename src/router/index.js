export const otherRouters = [{
    path: '/login',
    name: 'Login',
    component: resolve => require(['../views/page/signin/login.vue'], resolve)
}, {
    path: '/home',
    name: 'index',
    component: resolve => require(['../views/page/home/home.vue'], resolve),
}, {
    path: '/',
    name: 'BaseTransition',
    component: resolve => require(['../views/common/basetransition.vue'], resolve),
    children: [{
        path: '/',
        name: 'index',
        component: resolve => require(['../views/common/basetransition.vue'], resolve),
    }]
}];