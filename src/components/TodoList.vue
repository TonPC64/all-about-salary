<template>
  <div>
    <div class="dp-flex al-it-center f-drt-column">
      <div class="menu">TODOLIST</div>
      <div class="sub-menu">(AFTER SALARY COME)</div>
      <div class="dp-flex al-it-flex-start w-100pct pd-5px">
        <b-checkbox :key="index" v-for="(list, index) in todo">{{list.list}} : {{list.price}}</b-checkbox>
      </div>
      <div>
        <b-field>
            <b-input class="mg-5px" v-model="list" placeholder="Add List"></b-input>
            <b-input class="mg-5px w-30pct" v-model="price" type="number" placeholder="Price"></b-input>
            <button class="button is-primary mg-5px" @click="addToList(list, price)">Add</button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: [
        {list: 'gg', price: 500}
      ],
      list: '',
      price: 0
    }
  },
  methods: {
    addToList (list, price) {
      this.todo.push({
        list,
        price
      })
    }
  }
}
</script>

<style scoped>
.menu {
  font-size: 2.25rem;
}
.sub-menu {
  font-size: 1rem;  
}
</style>

