// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import {getCookie} from './util/util'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log('1' + to.path)
  if (to.path !== '/NoAuth') {
    console.log('router.beforeEach')
    // console.log(getCookie('test'))
    next()
    //  next('/NoAuth')
  } else {
    next()
  }
})

Vue.http.interceptors.push(function (request, next) {
  // modify method
  // request.method = 'POST'
  // modify headers
  request.headers.set('token', 'token123')
  console.log('before post' + request.headers.toString())
  // continue to next interceptor
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
