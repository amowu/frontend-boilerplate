<script>
  export default {
    props: [
      'todos',
      'filters',
      'visibility',
      'changeTodoVisibility',
      'clearCompletedTodo'
    ],
    computed: {
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      }
    }
  }
</script>

<template lang='jade'>
  footer.footer(v-show='todos.length')
    span.todo-count
      strong {{ remaining }}
      {{ remaining | pluralize 'item' }} left
    ul.filters
      li(v-for='(key, val) in filters')
        a(href='#/{{ $key }}', @click='changeTodoVisibility(key)') {{ key | capitalize }}
    button.clear-completed(v-show='todos.length > remaining', @click='clearCompletedTodo') Clear completed
</template>
