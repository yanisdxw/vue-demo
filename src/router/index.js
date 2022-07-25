import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'
import UserProfile from '../views/UserProfile.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
