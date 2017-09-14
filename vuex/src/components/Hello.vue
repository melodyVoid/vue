<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="$store.commit('increment')">增加</el-button>
    <el-button type="primary" @click="$store.commit('decrement')">减少</el-button>
    <h1>$store.state.count：{{ $store.state.count }}</h1>
    <hr>
    <el-button @click="increment">增加</el-button>
    <el-button @click="decrement">减少</el-button>
    <h1>计算属性：{{ count }}</h1>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: mapGetters([
      'count'
    ]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
