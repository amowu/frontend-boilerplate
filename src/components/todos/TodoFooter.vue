<script>
  export default {
    props: [
      'todos',
      'filters',
      'visibility',
      'changeVisibility',
      'clearCompleted'
    ],
    computed: {
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      }
    }
  }
</script>

<template>
  <footer class='footer' v-show='todos.length'>
    <span class='todo-count'>
      <strong>{{ remaining }}</strong>
      {{ remaining | pluralize 'item' }} left
    </span>
    <ul class='filters'>
      <li v-for='(key, val) in filters'>
        <a href='#/{{ $key }}' @click='changeVisibility(key)'>
          {{ key | capitalize }}
        </a>
      </li>
    </ul>
    <button class='clear-completed'
      v-show='todos.length > remaining'
      @click='clearCompleted'>
      Clear completed
    </button>
  </footer>
</template>
