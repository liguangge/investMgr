/**
 * Created by kevin on 17/2/21.
 */
import equity from '../../api/equity'

// initial state
const state = {
  subCompanys: []
}

// getters
const getters = {
  subCompanys: state => state.subCompanys
}

// actions
const actions = {
  getSubCompanys ({commit}) {
    equity.getSubCompanys((subCompanys) => {
      commit('getSubCompanys', {subCompanys})
    })
  }
}

// mutations
const mutations = {
  getSubCompanys (state, {subCompanys}) {
    state.subCompanys = subCompanys
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
