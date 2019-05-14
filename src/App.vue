<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <add></add>
    <h3>完成</h3>
    <doneList></doneList>
    <h3>未完成</h3>
    <todoList></todoList>
  </div>
</template>
<script>
  import add from './views/add'
  import todoList from './views/todoList'
  import doneList from './views/doneList'
  export default {
      name:'vuexDemo',
      data(){
          return{
              num:null,
          }
      },
      created(){
          document.cookie='userName=jone Smith'
          document.cookie=''
        function t() {
              return new Promise((resolve)=>{
                  setTimeout(()=>{
                      console.log(3);
                      resolve()
                  },1000)
              })

        }
         async function fn() {
             console.log(1);
             await t()
             console.log(4);
         }
          fn().then(()=>{
              console.log(5);
          })
          console.log(2);

      },
      components:{
          add,
          todoList,
          doneList
      },
      methods:{
          handle(){
              this.$store.dispatch('handleAdd',this.num)
              this.$store.dispatch('handleShow');
          }
      }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style>
  body {
    background: rgba(247, 247, 247, 1);
  }

  .box {
    padding: 4rem 1rem 1rem;
  }

  .logo {
    width: 9rem;
    height: 3.4rem;
    display: block;
    margin: auto;
  }
  .bb-n{
    border-bottom:none !important;
  }
  .title{
    font-size:1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(52,52,52,1);
    margin: 1rem auto 3rem;
    width: 13rem;
    height: 1rem;
  }
  .title>div{
    display: inline-block;
  }
  .title:after,.title:before{
    content: '';
    height: 0.1rem;
    width: 1rem;
    background: #434343;
    display: inline-block;
    margin-bottom: 0.4rem;
  }
  #form>div{
    width: 28rem;
    margin: auto;
    background: #fff;
    height: 4.8rem;
    padding:0.1rem 0 0.1rem 1.2rem ;
    box-sizing: border-box;
    border:1px solid rgba(230,230,230,1);
    border-radius:2px;
  }
  #form>div:last-child{
    height: 7rem;
  }
  #form>div>img{
    display: inline-block;
    width: 1rem;
  }
  #form input{
    -webkit-appearance:none;
    display: inline-block;
    width:24rem ;
    border: none;
    margin-top: 0.3rem;

    height: 4rem;
    line-height: 100%;
    font-size: 1.2rem;
    outline: none;
  }
  #form textarea{
    -webkit-appearance:none;
    padding-top: 0.5rem;
    box-sizing: border-box;
    width:25rem ;
    border: none;
    height: 100%;
    line-height: 100%;
    font-size: 1.2rem;
    outline: none;
  }
  .submit{
    width: 28rem;
    margin: 2rem auto 0;
    text-align: center;
    font-size: 1.5rem;
    height: 3.8rem;
    line-height: 3.8rem;
    background:rgba(236,28,28,1);
    border-radius:2px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
</style>