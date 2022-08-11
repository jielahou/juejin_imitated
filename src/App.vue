<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNav from './components/MyNav/MyNav.vue';

export default {
  name: 'App',
  components: {
    MyNav
  }
}
</script>

<style>
* {
  margin: 0px;
}

body {
  background-color: #f4f5f5;
}
</style>
