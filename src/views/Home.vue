<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <form class="form" ref="form">
      <input type="text" placeholder="姓名" v-model="name" name="name">
      <input type="text" placeholder="年龄" v-model="age" name="age">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </form>
    <button @click="send">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    data(){
      return{
          name:'',
          age:''
      }
    },
    methods:{
      send(){
          const el=this.$refs.form;
          const formDate=new FormData(el);
          console.log(formDate);
      }
    }
}
</script>
