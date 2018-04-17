<template>
  <div>
    <div class="dp-flex al-it-center f-drt-column">
      <div class="menu f-w-bold">TODOLIST</div>
      <div class="sub-menu f-w-bold">(AFTER SALARY COME)</div>
      <div class="dp-flex f-drt-column al-it-flex-start w-100pct pd-5px">
        <div :key="index" v-for="(list, index) in todo" v-if="!list.checked">
          <b-checkbox v-model="list.checked">{{list.list}} : {{list.price}}฿</b-checkbox>
        </div>
      </div>
      <div class="dp-flex pd-5px cl-grey" v-if="ShowAddList"  @click="setShowAddList()">
        <b-icon icon="plus"></b-icon>
        List item
      </div>
      <b-field v-else>
        <b-input class="mg-5px" v-model="list" placeholder="Add List" @keyup.enter.native="addToList(list, price)"></b-input>
        <b-input min="0" class="mg-5px w-30pct" v-model="price" type="number" placeholder="Price" @keyup.enter.native="addToList(list, price)"></b-input>
        <button  class="button is-primary mg-5px" @click="addToList(list, price)">Add</button>
      </b-field>
      <b-collapse :open="true" class="dp-flex f-drt-column al-it-flex-start w-100pct pd-5px">
        <div slot="trigger" slot-scope="props">
          <b-icon icon="menu-down"></b-icon>
          Checked items
        </div>
        <div class="dp-flex f-drt-column al-it-flex-start w-100pct">
          <div :key="index" v-for="(list, index) in todo" v-if="list.checked">
            <b-checkbox v-model="list.checked" style="text-decoration: line-through; color: grey;">{{list.list}} : {{list.price}}฿</b-checkbox>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ShowAddList: true,
      todo: [
        {list: 'check', price: 500, checked: true},
        {list: 'gg', price: 500, checked: false}
      ],
      list: '',
      price: 0
    }
  },
  methods: {
    setShowAddList () {
      this.ShowAddList = false
    },
    addToList (list, price) {
      if ((list.trim()) !== '' && +price !== 0) {
        this.todo.push({
          list,
          price,
          checked: false
        })
        this.ShowAddList = true
      } else if (list.trim() === '') {
        this.$toast.open({
          type: 'is-danger',
          message: 'ไม่เห็นมีอะไรให้เพิ่ม'
        })
      } else {
        this.$toast.open({
          type: 'is-danger',
          message: 'ไม่มีราคาจะเพิ่มทำไม'
        })
      }
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

