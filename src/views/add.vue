<template>
    <div>
        <input type="text" v-model="value" placeholder="要做的事情">
        <button @click="addList">添加</button>
    </div>
</template>

<script>
    export default {
        name: "add",
        data(){
            return{
                value:''
            }
        },
        methods:{
            addList(){
                console.log(this.$store);
                let id=this.$store.state.addList.list.length+1;
                let obj={id,name:this.value,done:false}
                this.$store.dispatch('addList',obj)
            }
        }
    }
</script>

<style scoped>

</style>