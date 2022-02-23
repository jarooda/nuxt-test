<!-- Please remove this file from your project -->
<template>
  <ol>
    <li v-for="(page, index) in pages" :key="index">
      <NuxtLink :to="page.link">{{ page.name }}</NuxtLink>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data () {
    return {
      pages: [
        {
          name: 'Methods',
          link: '/methods'
        },
        {
          name: 'Computed',
          link: '/computed'
        },
        {
          name: 'Watcher',
          link: '/watcher'
        },
        {
          name: 'Life Cycle',
          link: '/lifecycle'
        },
        {
          name: 'Child and Parent Access',
          link: '/emit-ref'
        }
      ]
    }
  }
}
</script>
