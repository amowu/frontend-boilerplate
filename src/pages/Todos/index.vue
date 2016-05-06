<style src="./todomvc-app-css.css"></style>

<script>
  import {
    TodoHeader,
    TodoMain,
    TodoFooter
  } from '../../components/todos'
  import {
    addTodo,
    changeTodoVisibility,
    clearCompletedTodo,
    deleteTodo,
    editTodo,
    toggleAllTodo,
    toggleTodo
  } from '../../actions/todos'

  const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
  }

  export default {
    components: {
      TodoHeader,
      TodoMain,
      TodoFooter
    },
    vuex: {
      getters: {
        todos: state => state.todos.todos,
        visibility: state => state.todos.visibility
      },
      actions: {
        addTodo,
        changeTodoVisibility,
        clearCompletedTodo,
        deleteTodo,
        editTodo,
        toggleAllTodo,
        toggleTodo
      }
    },
    data () {
      return {
        filters
      }
    },
    computed: {
      allChecked () {
        return this.todos.every(todo => todo.done)
      },
      filteredTodos () {
        return filters[this.visibility](this.todos)
      },
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      }
    }
  }
</script>

<template>
  <section class='todoapp'>
    <todo-header
      :add-todo='addTodo'>
    </todo-header>
    <todo-main
      :todos='filteredTodos'
      :all-checked='allChecked'
      :delete-todo='deleteTodo'
      :edit-todo='editTodo'
      :toggle-all-todo='toggleAllTodo'
      :toggle-todo='toggleTodo'>
    </todo-main>
    <todo-footer
      :todos='todos'
      :filters='filters'
      :visibility='visibility'
      :clear-completed-todo='clearCompletedTodo'
      :change-todo-visibility='changeTodoVisibility'>
    </todo-footer>
  </section>
</template>
