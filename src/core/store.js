import { Vuex } from '../core'

import todos from '../mutations/todos'

export default new Vuex.Store({
  modules: {
    todos
  }
})
