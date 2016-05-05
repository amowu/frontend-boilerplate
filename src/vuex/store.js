import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: [],
  visibility: 'all'
}

const mutations = {
  ADD_TODO (state, text) {
    state.todos.push({
      text: text,
      done: false
    })
  },
  DELETE_TODO (state, todo) {
    state.todos.$remove(todo)
  },
  TOGGLE_TODO (state, todo) {
    todo.done = !todo.done
  },
  EDIT_TODO (state, todo, text) {
    todo.text = text
  },
  TOGGLE_ALL (state, done) {
    state.todos.forEach(todo => {
      todo.done = done
    })
  },
  CLEAR_COMPLETED (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  },
  CHANGE_VISIBILITY (state, visibility) {
    state.visibility = visibility
  }
}

export default new Vuex.Store({
  state,
  mutations
})
