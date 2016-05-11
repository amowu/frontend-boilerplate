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

<template lang='jade'>
  li.todo(:class='{ completed: todo.done, editing: editing }')
    .view
      input.toggle(
        type='checkbox',
        :checked='todo.done',
        @change='toggleTodo(todo)')
      label(v-text='todo.text', @dblclick='editing = true')
      button.destroy(@click='deleteTodo(todo)')
    input.edit(
      v-show='editing',
      v-focus='editing',
      :value='todo.text',
      @keyup.enter='doneEdit',
      @keyup.esc='cancelEdit',
      @blur='doneEdit')
</template>
