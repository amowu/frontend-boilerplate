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
  <footer v-show='todos.length'>
    <span>
      <strong>{{ remaining }}</strong>
      {{ remaining | pluralize 'item' }} left
    </span>
    <ul>
      <li v-for='(key, val) in filters'>
        <a href='#/{{ $key }}' @click='changeVisibility(key)'>
          {{ key | capitalize }}
        </a>
      </li>
    </ul>
    <button v-show='todos.length > remaining' @click='clearCompleted'>
      Clear completed
    </button>
  </footer>
</template>
