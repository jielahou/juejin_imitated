<template>
  <div id="app">
    <MyTopNav></MyTopNav>
    <Article></Article>
  </div>
</template>

<script>
import MyTopNav from './components/MyNav/MyTopNav.vue';
import Article from './components/page/Article.vue';

export default {
  name: 'App',
  components: {
    Article,
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
