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

<template lang='jade'>
  section.main(v-show='todos.length')
    input.toggle-all(
      type='checkbox',
      :checked='allChecked',
      @change='toggleAllTodo(!allChecked)')
    ul.todo-list
      todo-item(
        v-for='todo in todos',
        :todo='todo',
        :toggle-todo='toggleTodo',
        :delete-todo='deleteTodo',
        :edit-todo='editTodo')
</template>
