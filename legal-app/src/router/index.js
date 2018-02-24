import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import ProgressMap from '@/components/ProgressMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgressMap',
      component: ProgressMap
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    }
  ]
})
