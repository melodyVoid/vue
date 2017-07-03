import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
    count:2
};

const mutations = {
    increase(state){
        state.count++
    },
    decrease(state){
        state.count--
    }
};
const getters = {
    count(state){
        return state.count
    }
};
//注意：是new Vuex.Store()，一开始写的new Vuex()
export default new Vuex.Store({
    state,
    mutations,
    getters
})