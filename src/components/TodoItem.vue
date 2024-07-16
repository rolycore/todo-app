<template>
    <div>
      <input type="checkbox" v-model="todo.completed" @change="toggleComplete" />
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="$emit('remove-todo', todo)">Remove</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleComplete() {
        this.$emit('update-todo', { ...this.todo, completed: !this.todo.completed })
      }
    }
  }
  </script>
  
  <style scoped>
  
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: black;
}
.completed {
  text-decoration: line-through;
}
button {
  background: red;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 50%;
}
/* Estilos opcionales para hacer la lista más responsive */
@media (max-width: 768px) {
  .checkbox{
    width: 90%; /* Reducir el ancho en pantallas más pequeñas */
  }
}
</style>
