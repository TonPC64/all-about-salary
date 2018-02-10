<template>
  <div id="app">
    <hello/>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
}
@media only screen and (min-width: 412px)  {
  .app {
    width: 412px !important;
  }
}
</style>
