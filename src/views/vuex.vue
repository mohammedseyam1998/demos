<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalTvCount">I can't buy any..</p>
    <button 
      :disabled="!totalTvCount"
      @click="buyTv">
      Buy TV
    </button>
    <button 
      :disabled="totalTvCount < 2"
      @click="buyTwoTvs">
      Buy Two TVs
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Customer',
  computed: {
    // If you have only one state/getter object spread operators are not necessarily needed
    // But we'll use it for now, so you can see how they are used
    // mapState/mapGetter accepts an array of strings as parameter
    ...mapState(['totalTvCount']),
    ...mapGetters(['happyStaff'])
  },
  methods: {
    ...mapActions(['removeTv']),
    buyTv() {
      this.removeTv(1) // Remove 1 TV
    },
    buyTwoTvs() {
      this.removeTv(2) // Remove 2 TVs
    }
  }
}
</script>
<style scoped>
</style>