import Vue from 'vue'
import Router from 'vue-router'

import News from '@/components/News'
import Play from '@/components/Play'
import Talk from '@/components/Talk'
import Mine from '@/components/Mine'
import nav from '@/components/news/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/news'
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      children:[
        {
          path: '/news',
          redirect:'/nav/headlines' 
        },
        {
          path:'/nav/:id',
          name:'nav',
          component:nav
        }
      ]
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/talk',
      name: 'Talk',
      component: Talk
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }

  ]
})
