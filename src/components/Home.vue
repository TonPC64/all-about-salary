<template>
  <div class="dp-flex f-drt-column jtf-ct-center h-10calc pd-bt-70px">
    <h1 class="title has-text-centered">All About Salary</h1>
    <router-link class="button is-primary is-large mg-bt-8px" :to="{name: 'countdown'}">Countdown</router-link>
    <router-link class="button is-success is-large mg-bt-8px" disabled :to="{name: 'todo'}">Month Todolist(WIP)</router-link>    
    <router-link class="button is-info is-large mg-bt-8px" :to="{name: 'setting'}">Setting</router-link>    
  </div>
</template>
