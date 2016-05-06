<script>
  import TodoItem from './TodoItem'

  export default {
    props: [
      'todos',
      'allChecked',
      'deleteTodo',
      'editTodo',
      'toggleAllTodo',
      'toggleTodo'
    ],
    components: {
      TodoItem
    }
  }
</script>

<template>
  <section class='main' v-show='todos.length'>
    <input class='toggle-all'
      type='checkbox'
      :checked='allChecked'
      @change='toggleAllTodo(!allChecked)'>
    <ul class='todo-list'>
      <todo-item v-for='todo in todos'
        :todo='todo'
        :toggle-todo='toggleTodo'
        :delete-todo='deleteTodo'
        :edit-todo='editTodo'>
      </todo-item>
    </ul>
  </section>
</template>
