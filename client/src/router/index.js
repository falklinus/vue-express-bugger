import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Pages/Home';
import Register from '@/components/Pages/Register';
import Login from '@/components/Pages/Login';
import Dashboard from '@/components/App/Dashboard';
import Project from '@/components/App/Project';
import store from '../store/store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.isUserLoggedIn) {
    next();
    return;
  }
  next('/app');
};

const ifAuthenticated = (to, from, next) => {
  if (store.state.isUserLoggedIn) {
    next();
    return;
  }
  next('/login');
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/app',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/app/projects/:id',
      name: 'Project-view',
      component: Project,
      beforeEnter: ifAuthenticated
    }
  ]
});
