import {
  ADD_TODO,
  CHANGE_TODO_VISIBILITY,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_ALL_TODO,
  TOGGLE_TODO
} from './types'

export const addTodo = makeAction(ADD_TODO)
export const changeVisibility = makeAction(CHANGE_TODO_VISIBILITY)
export const clearCompleted = makeAction(CLEAR_COMPLETED_TODO)
export const deleteTodo = makeAction(DELETE_TODO)
export const editTodo = makeAction(EDIT_TODO)
export const toggleAll = makeAction(TOGGLE_ALL_TODO)
export const toggleTodo = makeAction(TOGGLE_TODO)

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
