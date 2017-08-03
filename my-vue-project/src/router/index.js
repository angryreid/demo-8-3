import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'

Vue.use(Router)

import Button from '../pages/pageButton.vue'
import List from '../pages/pageList.vue'
import Input from '../pages/pageInput.vue'
export default new Router({
  routes: [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path:'/btn',
        name:'btn',
        component:Button
    },
    {
        path:'/list',
        name:'list',
        component:List
    },
    {
        path:'/input',
        name:'input',
        component:Input
    }
  ]
})
