import { createRouter, createWebHistory } from 'vue-router';
import home from './views/home/index.vue';
import article from './views/article/index.vue';

const routes = [
    { path: '/', component: home },
    { path: '/article/:articleName', component: article },
];
export const routerHistory = createWebHistory();

export const router = createRouter({
    routes,
    history: routerHistory,
});
