<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MyTopNav from './components/MyNav/MyTopNav.vue';

export default {
  name: 'App',
  components: {
    MyTopNav
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
