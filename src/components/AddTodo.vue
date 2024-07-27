// eslint-disable-next-line
<template>
  
    <div>
      
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <button @click="addTodo">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: ''
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.$emit('add-todo', { text: this.newTodo.trim(), completed: false })
          this.newTodo = ''
        }
      }
    }
  }
  </script>
  

<style scoped>
div {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
input {
  padding: 10px;
  width: 200px;
  margin-right: 10px;
}
button {
  padding: 10px;
}
</style>
