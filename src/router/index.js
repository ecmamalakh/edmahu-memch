import Vue from 'vue'
import Router from 'vue-router'
import MemChallenge from '@/components/MemChallenge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemChallenge',
      component: MemChallenge
    }
  ]
})
