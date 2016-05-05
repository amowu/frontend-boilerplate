import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from '../pages/Todos'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Todos
  }
})

export default router
