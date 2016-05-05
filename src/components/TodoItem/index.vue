<script>
  export default {
    props: [
      'todo',
      'deleteTodo',
      'editTodo',
      'toggleTodo'
    ],
    data () {
      return {
        editing: false
      }
    },
    directives: {
      focus (value) {
        if (value) {
          this.vm.$nextTick(() => {
            this.el.focus()
          })
        }
      }
    },
    methods: {
      doneEdit (e) {
        const value = e.target.value.trim()
        if (!value) {
          this.deleteTodo(this.todo)
        } else if (this.editing) {
          this.editTodo(this.todo, value)
          this.editing = false
        }
      },
      cancelEdit (e) {
        e.target.value = this.todo.text
        this.editing = false
      }
    }
  }
</script>

<template>
  <li>
    <div>
      <input type='checkbox'
        :checked='todo.done'
        @change='toggleTodo(todo)'>
      <label v-text='todo.text'
        @dblclick='editing = true'>
      </label>
      <button @click='deleteTodo(todo)'></button>
    </div>
    <input v-show='editing'
      v-focus='editing'
      :value='todo.text'
      @keyup.enter='doneEdit'
      @keyup.esc='cancelEdit'
      @blur='doneEdit'>
  </li>
</template>
