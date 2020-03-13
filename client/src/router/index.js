import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Dashboard from '@/components/App/Dashboard';
import Project from '@/components/App/Project';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/app/projects/:id',
      name: 'Project-view',
      component: Project
    }
  ]
});
