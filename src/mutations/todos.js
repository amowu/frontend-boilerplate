import {
  ADD_TODO,
  CHANGE_TODO_VISIBILITY,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_ALL_TODO,
  TOGGLE_TODO
} from '../core/types'

const state = {
  todos: [
    { text: 'Vue.js', done: true },
    { text: 'Vuex', done: true },
    { text: 'vue-router', done: true },
    { text: 'vue-router-sync', done: true },
    { text: 'Webpack', done: true },
    { text: 'vue-loader', done: true },
    { text: 'Babel', done: true },
    { text: 'ESLint', done: true },
    { text: 'Vue.js devtools Extension', done: true },
    { text: 'TodoMVC example', done: true },
    { text: 'Unit Test', done: false },
    { text: 'E2E Test', done: false },
    { text: 'Continuous Integration', done: false },
    { text: 'Continuous Delivery', done: false }
  ],
  visibility: 'all'
}

const mutations = {
  [ADD_TODO] (state, text) {
    state.todos.push({
      text: text,
      done: false
    })
  },
  [CHANGE_TODO_VISIBILITY] (state, visibility) {
    state.visibility = visibility
  },
  [CLEAR_COMPLETED_TODO] (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  },
  [DELETE_TODO] (state, todo) {
    state.todos.$remove(todo)
  },
  [EDIT_TODO] (state, todo, text) {
    todo.text = text
  },
  [TOGGLE_ALL_TODO] (state, done) {
    state.todos.forEach(todo => {
      todo.done = done
    })
  },
  [TOGGLE_TODO] (state, todo) {
    todo.done = !todo.done
  }
}

export default {
  state,
  mutations
}
