import Vue from 'vue'
import Router from 'vue-router'
import Douyu from '@/pages/Douyu'
import list from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/douyu/3'
    },
    {
      path: '/',
      redirect: '/douyu/3'
    },
    {
      path: '/douyu',
      name: 'douyu',
      component: Douyu,
      children: [
        { path: '/douyu/:id', component: list },
      ]
    }
  ]
})
