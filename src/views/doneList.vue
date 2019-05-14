<template>
    <div>
        <ul>
            <li v-for="item in this.$store.getters.doneList">
                <span>{{item.id}}</span><span>{{item.name}}</span><span>{{item.done?'完成':'未完成'}}</span>
                <span><button @click="del(item.id)">删除</button></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "doneList",
        methods:{
            del(i){
                this.$store.dispatch('del',i);
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