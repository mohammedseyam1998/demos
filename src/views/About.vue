<template>
  <div class="about">
    <h1></h1>
    <button v-on:click="clicked('you just clicked on button 1')">
      Button 1
    </button>

<h1>{{this.$data.title}}</h1>
  </div>
</template>
<script>
import printMix from '../mixins/printMix';
export default {
  mixins: [printMix]
}
</script>
