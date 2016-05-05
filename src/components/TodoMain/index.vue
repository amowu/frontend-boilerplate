<script>
  import TodoItem from '../../components/TodoItem'

  export default {
    props: [
      'todos',
      'allChecked',
      'deleteTodo',
      'editTodo',
      'toggleAll',
      'toggleTodo'
    ],
    components: {
      TodoItem
    }
  }
</script>

<template>
  <section>
    <input type='checkbox'
      :checked='allChecked'
      @change='toggleAll(!allChecked)'>
    <ul>
      <todo-item v-for='todo in todos'
        :todo='todo'
        :toggle-todo='toggleTodo'
        :delete-todo='deleteTodo'
        :edit-todo='editTodo'>
      </todo-item>
    </ul>
  </section>
</template>
