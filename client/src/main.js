import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faBug,
  faEllipsisH,
  faChevronRight,
  faPlus,
  faChevronDown,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import OutsideClick from './hooks/OutsideClick';

library.add(faCog);
library.add(faBug);
library.add(faEllipsisH);
library.add(faPlus);
library.add(faChevronRight);
library.add(faChevronDown);
library.add(faSignOutAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  }
});

Vue.directive('outside-click', OutsideClick);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
