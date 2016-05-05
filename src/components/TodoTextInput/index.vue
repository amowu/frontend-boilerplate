<script>
  export default {
    props: [
      'addTodo'
    ],
    methods: {
      tryAddTodo (e) {
        const text = e.target.value
        if (text.trim()) {
          this.addTodo(text)
        }
        e.target.value = ''
      }
    }
  }
</script>

<template>
  <input
    autofocus
    autocomplete='off'
    placeholder='What needs to be done?'
    @keyup.enter='tryAddTodo'>
</template>
