import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'
import UserProfile from '../views/UserProfile.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userList',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/userProfile',
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
