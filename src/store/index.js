import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter(t => t !== todo)
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.text === updatedTodo.text)
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo)
      }
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('addTodo', todo)
    },
    removeTodo ({ commit }, todo) {
      commit('removeTodo', todo)
    },
    updateTodo ({ commit }, updatedTodo) {
      commit('updateTodo', updatedTodo)
    }
  },
  getters: {
    allTodos: state => state.todos
  }
})
