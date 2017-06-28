//引入自定义的组件
import MelodyComponent from "./Melody.vue"

const Melody = {
    //外界使用Vue.use()的时候默认调用install方法
    install(Vue){
        Vue.component("melody",MelodyComponent);
    }
};

export default Melody