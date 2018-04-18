<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  margin: 5px;
}

.app {
  height: calc(100vh - 10px);
  border-radius: 20px;
  padding: 10px;
  position: relative;
}
@media only screen and (min-width: 412px)  {
  .app {
    width: 412px !important;
  }
}
</style>
