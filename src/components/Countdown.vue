<template>
  <div class="app bg">
    <div class="title top cl-white bd-bt-st-solid">
      COUNTDOWN SALARY
    </div>
    <div class="title flex">
      <div class="mid cl-white">
        อีก
      </div>
      <div class="count">
        {{countdown}}
      </div>
      <div class="mid cl-white">
        วัน
      </div>
    </div>
    <div class="money cl-white">
      ใช้เงินได้วันละ
      <div class="money-number" :class="{'green': perday >= 150, 'red': perday < 100}">{{perday}}</div>
      บาท
    </div>
    <section class="columns is-mobile mg-t-5px">
      <b-field class="column" label="เงินเดือนจะเข้า" expanded>
        <b-select v-model="select" placeholder="เลือกวันที่">
          <option v-for="date in 31" :value="date" :key="date">
            วันที่ {{ date }}
          </option>
        </b-select>
      </b-field>
      <b-field class="column" label="เหลือเงิน" expanded>
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
      localStorage.setItem('salary', JSON.stringify(this['_data']))
    },
    load () {
      const localData = localStorage.getItem('salary')
      if (localData) {
        const localJson = JSON.parse(localData)
        Object.keys(localJson).forEach(key => {
          this[key] = localJson[key]
        })
      }
    }
  },
  created () {
    this.load()
  }
}
</script>

<style scoped>
.bg {
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
}
.title {
  color: #fff;
  text-align: center;
  margin: 0px !important;
}
.top {
  font-size: 1.8rem;
  font-weight: bolder;
  padding: 5px;
}
.money {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.1rem;
}
.green {
  color: #00ffbf;
}
.red {
  color: #ff0040;
}
.money-number {
  margin: 0 5px;
  font-weight: bold;
}
.count {
  font-size: 11rem;
  background: -webkit-linear-gradient(90deg, hsl(48, 100%, 67%), white, hsl(48, 100%, 67%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex {
  display: flex;
  justify-content: space-around;
  max-height: 180px;
}
.mid {
  display: flex;
  align-items: center;
  font-size: 3rem;
  margin-top: 30px;
}
</style>
