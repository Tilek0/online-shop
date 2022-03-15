import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UniqueId from 'vue-unique-id';
import localizeFilter from "./directives/localize.filter";
// анимация при скролле
import scrollAnimation from "./directives/scrollAnimation";
//сделал импорт cscc чтобы проект видел этот стиль
import './cssMixins/grassCard.scss'

Vue.config.productionTip = false;
Vue.use(UniqueId);
Vue.filter('localize', localizeFilter);
Vue.directive('scrollAnimation', scrollAnimation);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
