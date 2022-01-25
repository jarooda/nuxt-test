<template>
  <div>
    <label for="pet-select">Choose a pet:</label>
    <select name="pets" id="pet-select" v-model="myPet">
      <option value="">--Please choose your pet--</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option.toUpperCase() }}</option>
    </select>
    <p>I choose {{ myPet }}, it have {{ leg }} leg(s)</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  options: string[],
  leg: number,
  myPet: string
}

interface leg {
  [key: string]: number
}

const leg: leg = {
  dog: 4,
  cat: 4,
  hamster: 4,
  parrot: 2,
  spider: 8,
  goldfish: 0
}

export default Vue.extend({
  name: 'IndexPage',
  data (): IData {
    return {
      options: ['dog', 'cat', 'hamster', 'parrot', 'spider', 'goldfish'],
      myPet: '',
      leg: 0
    }
  },
  watch: {
    myPet (value: string): void {
      this.leg = leg[value] || 0
    }
  }
})
</script>
