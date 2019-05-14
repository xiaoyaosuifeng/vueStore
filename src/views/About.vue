<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$store.commit('show')">点击显示</button>
    <h2 v-show="$store.state.show">vuex列子</h2>
  </div>
</template>
