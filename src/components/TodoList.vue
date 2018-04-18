<template>
  <div class="app bg cl-white">
    <div class="dp-flex al-it-center f-drt-column">
      <div class="mg-bt-15px">
        <div class="menu f-w-600 bd-bt-st-solid">TODOLIST</div>
        <div class="sub-menu f-w-600">(AFTER SALARY COME)</div>
      </div>
      <div class="dp-flex f-drt-column al-it-flex-start w-100pct pd-5px">
        <div :key="index" v-for="(list, index) in todo" v-if="!list.checked">
          <b-checkbox class="add-list" v-model="list.checked">{{list.list}} : {{list.price | currency}} ฿</b-checkbox>
        </div>
      </div>
      <div class="dp-flex pd-5px add-list f-w-600 cs-pointer" v-if="ShowAddList"  @click="setShowAddList()">
        <b-icon icon="plus-circle"></b-icon>
        &nbsp;Todo
      </div>
      <div v-else class="" >
        <input class="custom-input mg-5px w-45pct" v-model="list" placeholder="Add List" @keyup.enter="addToList(list, price)"/>
        <input min="0" class="custom-input w-30pct mg-5px" v-model="price" type="number" placeholder="Price" @keyup.enter.native="addToList(list, price)"/>
        <button  class="button f-none mg-7px add-btn" @click="addToList(list, price)">
          <b-icon icon="plus"></b-icon>
        </button>
      </div>
      <b-collapse :open="true" class="dp-flex f-drt-column al-it-flex-start w-100pct pd-5px">
        <div class="f-w-600 add-list" slot="trigger" slot-scope="props">
          <b-icon icon="menu-down"></b-icon>
          Checked items
        </div>
        <div class="dp-flex f-drt-column al-it-flex-start w-100pct">
          <div :key="index" v-for="(list, index) in todo" v-if="list.checked">
            <b-checkbox v-model="list.checked" style="text-decoration: line-through; color: #dadada;">{{list.list}} : {{list.price | currency}} ฿</b-checkbox>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
export default {
  filters: {
    currency (val) {
      return numeral(val).format('0,0')
    }
  },
  data () {
    return {
      ShowAddList: true,
      todo: [
        {list: 'check', price: 500, checked: true},
        {list: 'gg', price: 5000, checked: false}
      ],
      list: '',
      price: ''
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
.bg {
  background: linear-gradient(to left, #b993d6, #8ca6db);
}
.menu {
  font-size: 2.25rem;
}
.sub-menu {
  font-size: 1rem;  
}
.add-list:hover {
  color: #dadada;
}

.custom-input{
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px;
  font-size: 15px;
  border-width: 0px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid white
}
.custom-input:focus {
  outline: none;
}
.custom-input::placeholder {
  color: #ebebeb;
}

.add-btn {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;  
}
</style>

