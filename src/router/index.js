import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Equity from 'components/equity/equity'
import UserMgr from 'components/usermgr/usermgr'
import NoAuth from 'components/common/noauth'

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
    },
    {
      path: '/usermgr',
      name: 'usermgr',
      component: UserMgr
    },
    {
      path: '/noauth',
      name: 'noauth',
      component: NoAuth
    }
  ]
})
