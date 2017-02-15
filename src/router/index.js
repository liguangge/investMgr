import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Equity from 'components/equity/equity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/equity',
      name: 'equity',
      component: Equity
    }
  ]
})
