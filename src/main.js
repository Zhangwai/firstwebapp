// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//swiper swiper6.x分页器要单独引
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

//css
import 'css/reset200802.css'
import 'css/iconfont.css'
//js
import FastClick from 'fastclick' //300ms的延迟

FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//组件
  template: '<App/>'//模板
})
