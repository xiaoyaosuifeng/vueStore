<template>
    <ul>
        <li v-for="item in this.$store.getters.todoList">
            <span>{{item.id}}</span><span>{{item.name}}</span><span>{{item.done?'完成':'未完成'}}</span>
            <span>
                <button @click="finish(item.id)">完成</button>
            </span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "todoList",
        methods:{
            finish(i){
                this.$store.dispatch('finish',i);
            }
        }
    }
</script>

<style scoped>
ul>li{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #e5e5e5;
}
ul>li>span{
    display: inline-block;
    width: 20%;
}
</style>