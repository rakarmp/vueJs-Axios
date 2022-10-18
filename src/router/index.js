import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/home',
        name: 'homeview',
        component: () => import('../views/HomeView.vue')
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router