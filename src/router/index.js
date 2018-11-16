import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '../views/MyIndex2.vue'
import MyTable from '../components/MyTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: MyIndex
    },
    {
      path: '/test',
      name: 'myTable',
      component: MyTable
    }
  ]
})
