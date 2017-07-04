import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
    count:2
};

const mutations = {
    plus(state){
        state.count++
    },
    reduce(state){
        state.count--
    }
};

const actions = {
    //完整的写
    plus(context){
        context.commit("plus")
    },
    //解构的写法
    reduce({commit}){
        commit("reduce")
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
    getters,
    actions
})