import { VueRouter } from '../core'

import Todos from '../pages/Todos'

const router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: Todos
  }
})

export default router
