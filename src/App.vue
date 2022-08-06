<template>
  <div id="app">
    <MyNav></MyNav>
    <!-- <EntryList></EntryList> -->
    <!-- <AuthorInfo></AuthorInfo> -->
  </div>
</template>

<script>
import MyNav from './components/MyNav/MyNav.vue';
import EntryList from './components/page/EntryList.vue';
import AuthorInfo from './components/page/AuthorInfo.vue';

export default {
  name: 'App',
  components: {
    MyNav,
    EntryList,
    AuthorInfo
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
