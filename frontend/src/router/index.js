import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Write from '@/views/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/write',
      name: 'write',
      component: Write,
      children: [
        // {
        //   name: 'upload',
        //   path: '/upload',
        //   component: () => import('@/views/Upload'),
        // }
      ]
    },
    {
      name: 'upload',
      path: '/upload',
      component: () => import('@/views/Upload'),
    }
  ]
})
