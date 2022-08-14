import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import App from './App.vue'

// 测试用
import App from './AppTest.vue'

//highlight
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css' //样式
//创建v-highlight全局指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
