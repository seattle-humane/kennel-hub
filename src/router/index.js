import Vue from 'vue'
import Router from 'vue-router'
import HubPage from '@/components/HubPage'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HubPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})
