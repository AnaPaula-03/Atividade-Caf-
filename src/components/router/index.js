import{ createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import avaliação from '../views/avaliaçãoView.vue';
import ranking from '../views/rankingView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/avaliação',
    name: 'avaliação',
    component: avaliação,
  },
   {
    path: 'ranking',
    name: 'ranking',
    component: ranking,
   }
];