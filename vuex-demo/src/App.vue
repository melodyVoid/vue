<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello vuex</h1>
    <h2>$store.state.count:{{$store.state.count}}</h2>
    <h2>计算属性：{{count}}</h2>
    <!--
    <input type="button" value="增加" @click="$store.commit('increase')">
    <input type="button" value="减少" @click="$store.commit('decrease')">
    -->
    <input type="button" value="增加" @click="plus">
    <input type="button" value="减少" @click="reduce">
  </div>
</template>

<script>
//1.先引入mapState对象,引入mapMutations对象
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  /*computed:{
      count(){
          return this.$store.state.count + 1
      }
  }*/
  //2.在计算属性里用mapState
    /*computed:mapState({
        count:state => state.count
    }),*/
    computed:mapGetters([
        "count"
    ]),
    //注意mapActions与mapMutations不同的是mapActions是异步的
    methods:mapActions([
        "plus",
        "reduce"
    ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
