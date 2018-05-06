import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Countdown from './pages/Countdown'
import TodoList from './pages/TodoList'
import Setting from './pages/Setting'
import Electricity from './pages/Electricity'

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
  },
  {
    path: '/electricity',
    name: 'electricity',
    component: Electricity
  }
]

const router = new Router({
  routes
})

export default router
