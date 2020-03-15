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
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCog);
library.add(faBug);
library.add(faEllipsisH);
library.add(faPlus);
library.add(faChevronRight);
library.add(faChevronDown);

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

// This variable will hold the reference to
// document's click handler
let handleOutsideClick;

Vue.directive('closable', {
  bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = e => {
      e.stopPropagation();
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler } = binding.value;

      // This variable indicates if the clicked element is excluded

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target)) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    };
    // Register click/touchstart event listeners on the whole page
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },

  unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  }
});

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
