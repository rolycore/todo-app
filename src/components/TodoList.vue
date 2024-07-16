<template>
    <div class="todo-list">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import TodoItem from "./TodoItem.vue";
  
  export default {
    name: "TodoList",
    components: {
      TodoItem,
    },
    computed: {
      ...mapState(["todos"]),
    },
  };
  </script>
  
  <style scoped>
  .todo-list {
    margin: 20px auto; /* Centrar el contenedor */
    max-width: 600px; /* Limitar el ancho máximo */
  }
  
  /* Estilos opcionales para hacer la lista más responsive */
  @media (max-width: 768px) {
    .todo-list {
      width: 90%; /* Reducir el ancho en pantallas más pequeñas */
    }
  }
  </style>
  
