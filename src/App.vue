<script>
  import Todo from './components/Todo'
  import {
    addTodo,
    toggleAll,
    clearCompleted
  } from './vuex/actions'

  const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
  }

  export default {
    components: {
      Todo
    },
    vuex: {
      getters: {
        todos: state => state.todos
      },
      actions: {
        addTodo,
        toggleAll,
        clearCompleted
      }
    },
    data () {
      return {
        visibility: 'all',
        filters: filters
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
    },
    methods: {
      tryAddTodo (e) {
        var text = e.target.value
        if (text.trim()) {
          this.addTodo(text)
        }
        e.target.value = ''
      }
    }
  }
</script>

<template>
  <section>
    <header>
      <h1>todos</h1>
      <input autofocus autocomplete='off' placeholder='What needs to be done?' @keyup.enter='tryAddTodo'>
    </header>
    <section>
      <input type='checkbox' :checked='allChecked' @change='toggleAll(!allChecked)'>
      <ul>
        <todo v-for='todo in filteredTodos' :todo='todo'></todo>
      </ul>
    </section>
    <footer v-show='todos.length'>
      <span>
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize 'item' }} left
      </span>
      <ul>
        <li v-for='(key, val) in filters'>
          <a href='#/{{$key}}' @click='visibility = key'>
            {{ key | capitalize }}
          </a>
        </li>
      </ul>
      <button v-show='todos.length > remaining' @click='clearCompleted'>
        Clear completed
      </button>
    </footer>
  </section>
</template>
