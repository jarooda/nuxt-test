<template>
  <div>
    <div>
      <input id="input1" v-model="input1" type="text">
      +
      <input id="input2" v-model="input2" type="text">
      =
      <p v-if="result === null">?</p>
      <p>{{ result }}</p>
    </div>
    <button id="compute-button" @click="() => add(input1, input2)">Compute</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  input1: number | string
  input2: number | string
  result: number | null | string
}

export default Vue.extend({
  name: 'IndexPage',
  data (): IData {
    return {
      input1: 0,
      input2: 0,
      result: null
    }
  },
  methods: {
    add (...inputs: [string | number]): void {
      let total = 0
      inputs.forEach(input => {
        total += this.convertToNumber(input)
      })
      this.result = total
    },
    convertToNumber (input: any): number {
      if (isNaN(+input)) {
        return 0
      } else {
        return +input
      }
     }
  }
})
</script>
