<template>
    <div id="melody">
        <h3>我是自定义的全局组件melody</h3>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:"我是信息"
            }
        }
    }
</script>