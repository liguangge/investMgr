// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {getCookie} from './util/util'

import 'common/stylus/index.styl'

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
  router,
  template: '<App/>',
  components: {App}
})
