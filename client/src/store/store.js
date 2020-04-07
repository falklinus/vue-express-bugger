import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        localStorage.setItem('jwt-token', token);
        state.isUserLoggedIn = true;
      } else {
        localStorage.removeItem('jwt-token');
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      return new Promise(resolve => {
        commit('setToken', token);
        resolve('Success');
      });
    },
    setUser({ commit }, user) {
      return new Promise(resolve => {
        commit('setUser', user);
        resolve('Success');
      });
    },
    checkForToken({ commit }) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem('jwt-token');
        if (token) {
          commit('setToken', token);
          resolve('Success');
        } else {
          reject('Error');
        }
      });
    }
  }
});
