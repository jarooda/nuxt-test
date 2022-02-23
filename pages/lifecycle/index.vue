<template>
  <div>
    <h3>Bom will self destruct in {{ timeLeft }}</h3>
    <img class="bomb jump" src="https://pngimg.com/uploads/bomb/bomb_PNG5.png" alt="Bomb">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  interval: any
  counter: number
  timer: number
}

export default Vue.extend({
  data (): IData {
    return {
      interval: undefined,
      counter: 0,
      timer: 10
    }
  },
  computed: {
    timeLeft (): number {
      return this.timer - this.counter
    },
  },
  mounted () {
    this.interval = setInterval(() => {
      this.counter++
      if (this.counter === this.timer) {
        this.$destroy()
      }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
    console.log("Bye bye!")
  },
  destroyed () {
    this.$router.push('/')
  }
})
</script>

<style>
.bomb {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.jump {
  transform-origin: 50% 50%;
  animation: jump .5s linear alternate infinite;
}

@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,30%,0) scale3d(.7,1.5,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1.5,.7,1);}
}

</style>
