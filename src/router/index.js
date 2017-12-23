import Vue from 'vue'
import Router from 'vue-router'

import News from '@/page/news/News'
import detail from '@/page/news/detail'
import Play from '@/page/play/Play'
import Talk from '@/page/talk/Talk'
import Talk1 from '@/page/talk/Talk1'
import Talk2 from '@/page/talk/Talk2'
import Talk3 from '@/page/talk/Talk3'
import Mine from '@/page/mine/Mine'
import nav from '@/page/news/components/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: { navShow: true },
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: { navShow: true },
      children: [
        {
          path: '/news',
          meta: { navShow: true },
          redirect: '/nav/headlines'
        },
        {
          path: '/nav/:id',
          name: 'nav',
          meta: { navShow: true },
          component: nav
        }
      ]
    },
    {
      path: '/play',
      name: 'Play',
      meta: { navShow: true },
      component: Play
    },
    {
      path: '/talk',
      name: 'Talk',
      meta: { navShow: true },
      component: Talk,
      children: [
        {
          path: '/',
          meta: { navShow: true },
          redirect: '/Talk1'
        },
        {
          path: '/talk1',
          name: 'Talk1',
          meta: { navShow: true },
          component: Talk1
        },
        {
          path: '/talk2',
          name: 'Talk2',
          meta: { navShow: true },
          component: Talk2
        },
        {
          path: '/talk3',
          name: 'Talk3',
          meta: { navShow: true },
          component: Talk3
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      meta: { navShow: true },
      component: Mine
    },
    {
      path: '/detail',
      name: 'detail',
      meta: { navShow: false },
      component: detail
    }
  ]
})
