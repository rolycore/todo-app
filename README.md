# Todo App

Una aplicación de tareas desarrollada con Vue.js y Vuex.

## Características

- Agregar tareas con título y contenido.
- Marcar tareas como completadas.
- Editar tareas existentes.
- Eliminar tareas.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/rolycore/todo-app.git
cd todo-app
```

2. Instala las dependencias:

```bash
npm install
```

o

```bash
yarn install
```

## Uso

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run serve
```

o

```bash
yarn serve
```

Abre tu navegador y ve a `http://localhost:8080`.

## Estructura del Proyecto

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── Header.vue
│   │   ├── TodoList.vue
│   │   ├── TodoItem.vue
│   │   └── AddTodo.vue
│   ├── App.vue
│   ├── main.js
│   └── store/
│       └── index.js
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
└── vue.config.js

```

## Componentes

### App.vue

App.vue

```vue
<template>
  <div id="app">
    <Header />
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    TodoList,
  },
};
</script>

<style src="./assets/styles.css"></style>

```

### Header.vue

Rotulado + Logo.

```vue
<template>
  <header>
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <h1>Todo List</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.logo {
  width: 50px; /* Ajusta el tamaño según tus necesidades */
  height: auto;
  display: block;
  margin: 0 auto 10px; /* Centrar la imagen y añadir margen inferior */
}
</style>

```

### AddTodo.vue

Componente agregar tarea por hacer.

```vue
<template>
  <div>
    <input 
      type="text" 
      v-model="title" 
      @keyup.enter="addTodo" 
      placeholder="Add a todo"
    />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTodo() {
      if (this.title.trim()) {
        this.$store.dispatch('addTodo', this.title);
        this.title = '';
      }
    },
  },
};
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

```

## TodoList.vue

Lista de tareas.

```vue
<template>
  <div>
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(['todos']),
  },
};
</script>

<style scoped>
div {
  margin: 20px auto;
  width: 300px;
}
</style>

```
## TodoItem.vue

Items de las tareas.
```vue
<template>
  <div :class="{ completed: todo.completed }">
    <input 
      type="checkbox" 
      v-model="todo.completed" 
      @change="toggleTodo(todo.id)"
    />
    <span>{{ todo.title }}</span>
    <button @click="deleteTodo(todo.id)">x</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    toggleTodo(id) {
      this.$store.dispatch('toggleTodo', id);
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
  },
};
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

```

## Estilos Globales

```css
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

```

## Contribuir

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, crea una rama con tus cambios y envía un pull request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o problema, puedes contactarme a través de [shalomsolutiontech@gmail.com](mailto:shalomsolutiontech@gmail.com).

