import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Countdown from './components/Countdown'
import TodoList from './components/TodoList'
import Setting from './components/Setting'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
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
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  }
]

const router = new Router({
  routes
})

export default router
