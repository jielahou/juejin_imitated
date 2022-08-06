<template>
  <div id="app">
    <MyNav></MyNav>
    <!-- <EntryList></EntryList> -->
  </div>
</template>

<script>
import MyNav from './components/MyNav/MyNav.vue';
import EntryList from './components/page/EntryList.vue';

export default {
  name: 'App',
  components: {
    MyNav,
    EntryList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
