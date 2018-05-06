<template>
  <div class="mg-5px">
    <div class="dp-flex pd-5px add-list f-w-600 cs-pointer" v-if="ShowAddList" @click="ShowAddList = false">
      <b-icon icon="plus-circle"></b-icon>
      <span>Todo</span>
    </div>
    <div v-else class="columns pd-vtc-5px">
      <input class="column custom-input mg-5px w-45pct" v-model="list" placeholder="Add List" @keyup.enter="addToList(list, price)" />
      <input min="0" class="custom-input w-30pct mg-5px" v-model.number="price" type="number" placeholder="Price" @keyup.enter.native="addToList(list, price)" />
      <button class="button f-none mg-7px add-btn" @click="addToList(list, price)">
        <b-icon icon="plus"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ShowAddList: true,
      list: 'add',
      price: '99'
    }
  },
  methods: {
    addToList (list, price) {
      if (list.trim() !== '' && +price !== 0) {
        this.$emit('insert', {
          list,
          price,
          checked: false
        })
        this.ShowAddList = true
        this.list = ''
        this.price = ''
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
.custom-input {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px;
  font-size: 15px;
  border-width: 0px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid white;
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
