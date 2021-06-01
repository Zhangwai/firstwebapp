// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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
