<script>
  import TodoTextInput from './TodoTextInput'

  export default {
    props: [
      'addTodo'
    ],
    components: {
      TodoTextInput
    }
  }
</script>

<template lang='jade'>
  header.header
    h1 Todos
    todo-text-input(:add-todo='addTodo')
</template>
