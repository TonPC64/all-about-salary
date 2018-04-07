import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Countdown from './components/Countdown'
import TodoList from './components/TodoList'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: Countdown
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoList
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
