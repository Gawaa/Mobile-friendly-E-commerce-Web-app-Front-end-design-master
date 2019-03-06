import axios from 'axios'
import store from '@/vuex/store.js'
import router from '../router'

const api = axios.create();
api.defaults.baseURL = 'http://api.com';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// interceptor request 
api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.commit('SET_LOADING',true);



    // return status
    if(store.state.login.token) {
      config.headers.Authorization = `token ${store.state.login.token}`;
    }

    return config;

  }, function (error) {
    // error request 
    alert('网络错误,请稍后再试');

    store.commit('SET_LOADING',false);

    return Promise.reject(error);
  });

// add interceptor 
api.interceptors.response.use(function (response) {
   
    setTimeout(()=>{
      store.commit('SET_LOADING',false);
    },300)

    return response;

  }, function (error) {

    store.commit('SET_LOADING',false);

    if(errore.response) {

      if(error.response.status== 401) {
          // rentrun 401
        store.commit('CHANGE_TOKEN',0);

        alert('Please Login Again ');

        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })

      }
    }

    return Promise.reject(error);
  });
export default api
