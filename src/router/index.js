import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/page/Index'
import Article from '../components/page/Article'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/article', component: Article },
];


export default new VueRouter({
    routes
})