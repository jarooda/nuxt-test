<template>
  <div>
    <input id="name" v-model="name" type="text">
    <p>Hello, your name without vowel is: {{ nameWithoutVowel }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  name: string
}

export default Vue.extend({
  name: 'IndexPage',
  data (): IData {
    return {
      name: ''
    }
  },
  computed: {
    nameWithoutVowel (): string {
      return this.name.replace(/[aeiou]/ig,'')
    }
  }
})
</script>
