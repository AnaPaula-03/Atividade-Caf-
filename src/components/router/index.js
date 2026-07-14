import{ createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import avaliacao from '../views/avaliaçãoView.vue';
import ranking from '../views/rankingView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/avaliacao',
    name: 'avaliacao',
    component: avaliacao,
  },
   {
    path: 'ranking',
    name: 'ranking',
    component: ranking,
   }
];

export default router;