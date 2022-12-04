import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myowntests',
    name: 'myowntests',
    component: () => import('../views/AdminResultListView.vue')
  },
  {
    path: '/myowntests/result',
    name: 'mytestresult',
    component: () => import('../views/AdminResultView.vue')
  },
  {
    path: '/createtest',
    name: 'createtest',
    component: () => import('../views/CreateTestView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/tests',
    name: 'tests',
    component: () => import('../views/TestListView.vue')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('../views/ResultListView.vue')
  },
  {
    path: '/tests/result',
    name: 'result',
    component: () => import('../views/ResultView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
