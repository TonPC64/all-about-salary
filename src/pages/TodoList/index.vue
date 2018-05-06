<template>
  <div class="app bg cl-white">
    <div class="dp-flex al-it-center f-drt-column">
      <div class="mg-bt-15px">
        <div class="menu f-w-600 bd-bt-st-solid">TODOLIST</div>
        <div class="sub-menu f-w-600">(AFTER SALARY COME)</div>
        <div class="t-al-center f-w-600 mg-t-10px">
          <button class="button is-small btn" @click="previousMonth()" v-html="'<<'"></button>
          <span class="mg-hrzt-5px">{{thisMonth}}</span>
          <button class="button is-small btn" @click="forwardMonth()" v-html="'>>'"></button>
        </div>
      </div>
      <div class="w-100pct">
        <div class="dp-flex f-drt-column al-it-flex-start w-100pct pd-5px bd-w-0px bd-bt-w-1px bd-st-solid bd-cl-gray">
          <div :key="index" v-for="(list, index) in todo" v-if="!list.checked">
            <b-checkbox class="add-list" v-model="list.checked">{{list.list}} : {{list.price | currency}} ฿</b-checkbox>
          </div>
          <div class="w-100pct mg-vtc-5px dp-flex jtf-ct-center">
            <AddTodo @insert="addToList" />
          </div>
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
  </div>
</template>

<script>
import AddTodo from './AddTodo'
import numeral from 'numeral'
export default {
  components: {
    AddTodo
  },
  filters: {
    currency (val) {
      return numeral(val).format('0,0')
    }
  },
  data () {
    return {
      now: {
        month: this.$moment().month(),
        year: this.$moment().year()
      },
      todo: []
    }
  },
  computed: {
    thisMonth () {
      return this.$moment().month(this.now.month).year(this.now.year).format('MMMM Y')
    }
  },
  methods: {
    previousMonth () {
      this.addMonth(-1)
    },
    forwardMonth () {
      this.addMonth(1)
    },
    addMonth (value) {
      let thisMonth = this.$moment().month(this.now.month).year(this.now.year)
      thisMonth.add(value, 'month')
      this.now = {
        month: thisMonth.month(),
        year: thisMonth.year()
      }
    },
    setShowAddList () {
      this.ShowAddList = false
    },
    addToList (data) {
      this.todo.push(data)
    }
  },
  created () {}
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
.btn {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
}
</style>

