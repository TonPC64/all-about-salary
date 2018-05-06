import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Countdown from './components/Countdown'
import TodoList from './components/TodoList'
import Setting from './components/Setting'
import Electricity from './components/Electricity'

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
