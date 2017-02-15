import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/index'
import Layout from 'views/components/layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/components/layout',
    component: Layout
  }]
})
