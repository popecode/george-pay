import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProgressMap from '@/components/ProgressMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgressMap',
      component: ProgressMap
    }
  ]
})
