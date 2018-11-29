import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component() {
        return import( /* webpackChunkName: "about" */ './views/About.vue');
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Projects,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
