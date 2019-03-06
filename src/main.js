import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http
import less from 'less'
import Mint from 'mint-ui';    //mobille end UI
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$api = api;


// hook function for beforeEach()

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // need authentication and more judgement 
      if (store.state.login.token) {  // via vuex know the state
        next();
      } else {    // if no authentication, return to the login page and login again 
        next({
          path: '/login',
          
        })
      }
    }
    else { //do not need authentication and jump direcly 
      next();
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
