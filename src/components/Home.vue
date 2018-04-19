<template>
  <div class="dp-flex f-drt-column jtf-ct-center h-10calc pd-bt-70px app bg">
    <h1 class="title has-text-centered f-w-600 is-uppercase">All About Salary</h1>
    <router-link class="button is-primary is-large mg-bt-8px" :to="{name: 'countdown'}">Countdown</router-link>
    <router-link class="button is-success is-large mg-bt-8px" disabled :to="{name: 'todo'}">Month Todolist</router-link>    
    <router-link class="button is-info is-large mg-bt-8px" disabled :to="{name: 'setting'}">Setting</router-link>    
  </div>
</template>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #ffafbd, #ffc3a0);
}
</style>
