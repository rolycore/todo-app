<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo">
      <input v-model="newTodoText" placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @remove-todo="deleteTodo" 
      @update-todo="updateTodo" 
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: '', // Para almacenar el texto de la nueva tarea
      todos: [
        { id: 1, text: 'Tarea 1', completed: false },
        { id: 2, text: 'Tarea 2', completed: false },
        // Otras tareas iniciales
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim()) {
        this.todos.push({
          id: this.todos.length + 1,
          text: this.newTodoText,
          completed: false
        });
        this.newTodoText = ''; // Limpiar el campo de texto
      }
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex(t => t.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    }
  }
};
</script>

<style scoped>
.todo-list {
  margin: 20px auto;
  max-width: 600px;
}

form {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px;
}

@media (max-width: 768px) {
  .todo-list {
    width: 90%;
  }
}
</style>
