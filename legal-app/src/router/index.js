import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/form',
      name: 'Form',
      component: Form 
    }
  ]
})
