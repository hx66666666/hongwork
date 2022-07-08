import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "echarts";
import ECharts from 'vue-echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('v-chart', ECharts);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
