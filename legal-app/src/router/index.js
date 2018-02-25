import Vue from 'vue'
import Router from 'vue-router'
import ProgressMap from '@/components/ProgressMap'
import Home from '@/components/Home'
import DocumentPreview from '@/components/DocumentPreview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgressMap',
      component: ProgressMap
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
