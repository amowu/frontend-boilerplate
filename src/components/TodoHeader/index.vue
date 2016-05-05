<script>
  import TodoTextInput from '../TodoTextInput'

  export default {
    props: [
      'addTodo'
    ],
    components: {
      TodoTextInput
    }
  }
</script>

<template>
  <header>
    <h1>Todos</h1>
    <todo-text-input :add-todo='addTodo'></todo-text-input>
  </header>
</template>
