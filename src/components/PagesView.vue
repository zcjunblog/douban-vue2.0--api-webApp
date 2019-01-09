<template>
  <div>
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar'
  export default {
    name: 'Page',
    components:{
      HeaderBar
    }
  }
</script>

<style scoped>

</style>
