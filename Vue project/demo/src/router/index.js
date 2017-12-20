import Vue from 'vue'
import Router from 'vue-router'
import shops from '@/components/shops'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: shops,
    }
  ]
})
