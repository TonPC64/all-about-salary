<template>
  <div class="app bg cl-white">
    <div class="title top cl-white has-text-centered">
      Electricity
    </div>
    <div class="mg-bt-15px">
      <label class="label">เลขมิเตอร์ไฟ บิลที่แล้ว</label>
      <input type="number" @input="save()" class="input is-large" v-model.number="lastBill" placeholder="เลขมิเตอร์ไฟ บิลที่แล้ว">
    </div>
    <div>
      <label class="label">เลขมิเตอร์ล่าสุด</label>
      <input :min="lastBill" type="number" @input="save()" class="input is-large" v-model.number="now" placeholder="เลขมิเตอร์ล่าสุด">
    </div>
  </div>
</template>

<script>
export default {
  name: 'electricity',
  data () {
    return {
      lastBill: '',
      now: ''
    }
  },
  computed: {
    electricUnit () {
      return +this.lastBill - +this.now
    }
  },
  methods: {
    save () {
      const preSave = JSON.stringify({ lastBill: +this.lastBill, now: +this.now })
      localStorage.setItem('salary.electricity', preSave)
    }
  },
  created () {
    const postLoad = localStorage.getItem('salary.electricity')
    if (postLoad) {
      const parsed = JSON.parse(postLoad)
      this.lastBill = parsed.lastBill
      this.now = parsed.now
    }
  }
}
</script>


<style scoped>
.bg {
  background: linear-gradient(to bottom, #ffafbd, #ffc3a0);
}
</style>