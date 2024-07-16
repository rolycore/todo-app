<template>
    <header>
    <img src="@/assets/LOGO-SHALOM.png" alt="Logo" class="logo" />
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
  