/*
 * @Author: ZhaoQiaoLi
 * @Date: 2021-06-16 16:49:26
 * @LastEditTime: 2021-06-17 16:50:53
 * @LastEditors: ZhaoQiaoLi
 * @FilePath: \sell\src\main.js
 * @Description: ''
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App'
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';
import '@/common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
var routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
Vue.config.productionTip = false
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});