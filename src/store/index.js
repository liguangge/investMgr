/**
 * Created by kevin on 17/2/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import equity from './modules/equity'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    equity
  },
  strict: debug,
  plugins: []
})
