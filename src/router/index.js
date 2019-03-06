import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


// loading for the request, and rendering the other page, and save the loading time 
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)


export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Index
    }, {
      path: '/category',
      name: 'CategoryPage',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
      }]
    }, {
      path: '/car',
      name: 'shopPage',
      component: Car
    }, {
      path: '/car/pay',
      name: 'Payment',
      component: Pay
    },
    {
      path: '/user',
      name: 'AccountPage',
      component: User,
      meta: {
           requireAuth: true,  // which is mean the router need the login
       },
    }, {
      path: '/detail',
      name: 'Information',
      component: Detail
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
