import Vue from 'vue'
import App from './App.vue'
//import Melody from "./components/melody/index.js"
//默认引入的就是index.js,所以上下两句一样
import Melody from "./components/melody"

Vue.use(Melody);

new Vue({
  el: '#app',
  render: h => h(App)
});
