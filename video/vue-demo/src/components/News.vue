<template id="news">
    <div>
        <h3>我是新闻</h3>
        <p>我是新闻的内容</p>
        <ul>
            <li v-for="item in news">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                news:["新闻一","新闻二","新闻三"]
            }
        },
        components: {}
    }
</script>
<style>
</style>
