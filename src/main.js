// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// import {getCookie} from './util/util'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
