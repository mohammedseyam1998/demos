<template>
  <div class="about">
    <h1></h1>
    <button @click="clicked('hello you clicked this button by mixins')">
      Button 1
    </button>

<h1>{{this.$data.title}}</h1>
<p>{{this.$data.content}}</p>
  </div>
</template>
<script>
import printMix from '../mixins/printMix';
export default {
  mixins: [printMix]
}
</script>
