/**
 * Created by kevin on 17/2/21.
 */
import equity from '../../api/equity'
// import Vue from 'vue'

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
    // Vue.http.jsonp('/api/getSubCompanys').then((response) => {
    // response = response.body
    // console.log('11212' + response.data)
    // let obj = response.data
    // let _subCompanys = obj.subCompanys
    // commit('getSubCompanys', {_subCompanys})
    // })
    equity.getSubCompanys((subCompanys) => {
      commit('getSubCompanys', {subCompanys})
    })
  },
  initSubCompanys ({commit}, subCompanys) {
    console.log('action init subcompany' + subCompanys)
    commit({type: 'initSubCompanys', subCompanys: subCompanys})
  }
}

// mutations
const mutations = {
  getSubCompanys (state, {subCompanys}) {
    state.subCompanys = subCompanys
  },
  initSubCompanys (state, {subCompanys}) {
    console.log('mutations init subcompany' + subCompanys)
    state.subCompanys = subCompanys
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
