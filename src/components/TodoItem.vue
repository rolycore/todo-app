<template>
  <div>
    <input type="checkbox" 
      :checked="todo.completed" 
      @change="toggleComplete" />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="deleteTodo">Remove</button>
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
      // Emitir un evento con el cambio de estado del todo
      this.$emit('update-todo', { ...this.todo, completed: !this.todo.completed });
    },
    deleteTodo() {
      // Emitir un evento para indicar que se debe eliminar el todo
      this.$emit('remove-todo', this.todo);
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
</style>
