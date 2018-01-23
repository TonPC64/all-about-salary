<template>
  <div class="app">
    <div class="title">
      COUNTDOWN SALARY
    </div>
    <div class="title">
      เหลืออีก {{countdown}} วัน
    </div>
    <div class="title">
      ใช้เงินได้วันละ
      {{perday}} บาท
    </div>
    <section class="columns is-mobile">
        <b-field class="column" label="เงินเดือนจะเข้า">
            <b-select v-model="select" placeholder="เลือกวันที่">
                <option
                    v-for="date in 31"
                    :value="date"
                    :key="date">
                    วันที่ {{ date }}
                </option>
            </b-select>
        </b-field>
        <b-field class="column" label="เหลือเงิน">
          <b-input v-model="money"></b-input>
        </b-field>
    </section>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      select: 1,
      money: 0
    }
  },
  computed: {
    countdown () {
      const now = this.$moment()
      let next = this.$moment().date(this.select)

      const diff = next.diff(now, 'day')
      if (diff >= 0) {
        return diff
      }
      next = next.add(1, 'month')
      return next.diff(now, 'day')
    },
    perday () {
      return (this.money / this.countdown).toFixed(0)
    }
  },
  watch: {
    select (val) {
      this.save()
    },
    money (val) {
      this.save()
    }
  },
  methods: {
    save () {
      window.localStorage.setItem('salary', JSON.stringify(this['_data']))
    },
    load () {
      const localData = window.localStorage.getItem('salary')
      if (localData) {
        this['_data'] = JSON.parse(localData)
      }
    }
  },
  created () {
    this.load()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title {
  color: #fff;
  text-align: center;
}

</style>
