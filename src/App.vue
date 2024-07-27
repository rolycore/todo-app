<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos="todos" @remove-todo="removeTodo" @update-todo="updateTodo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    Header,
    TodoList,
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo', 'updateTodo'])
  },
};
</script>

<style src="./assets/styles.css"></style>
