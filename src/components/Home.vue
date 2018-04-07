<template>
  <div class="dp-flex f-drt-column">
    <h1 class="title has-text-centered">All About Salary</h1>
    <router-link class="button is-primary is-large mg-bt-8px" :to="{name: 'countdown'}">Countdown</router-link>
    <router-link class="button is-success is-large mg-bt-8px" disabled :to="{name: 'todo'}">Month Todolist(WIP)</router-link>    
  </div>
</template>
