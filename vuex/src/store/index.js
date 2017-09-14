import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 3
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  // 完整地写
  increment (context) {
    context.commit('increment')
  },
  // 解构的写法
  decrement ({ commit }) {
    commit('decrement')
  }
}
const getters = {
  count (state) {
    // 在这里可以进行计算
    return state.count * 10
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
