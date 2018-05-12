<template>
  <div class="home app bg">
    <div class="centered">
      <img src="/static/images/icons/icon-384x384.png" width="260" alt="">
    </div>
    <h1 class="title has-text-centered is-uppercase">All About Salary</h1>
    <router-link class="button is-primary is-large mg-bt-8px" :to="{name: 'countdown'}">Countdown</router-link>
    <router-link class="button is-success is-large mg-bt-8px" disabled :to="{name: 'todo'}">Month Todolist</router-link>
    <router-link class="button is-danger is-large mg-bt-8px" disabled :to="{name: 'electricity'}">Electricity</router-link>
    <router-link class="button is-info is-large mg-bt-8px" disabled :to="{name: 'setting'}">Setting</router-link>
  </div>
</template>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #ffafbd, #ffc3a0);
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 10px);
  padding-bottom: 70px;
}
.centered {
  display: flex;
  justify-content: center;
}
.mg-bt-8px {
  margin-bottom: 8px;
}
</style>
