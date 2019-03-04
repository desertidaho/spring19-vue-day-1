<template>
  <div class="home">
    <h1> <img alt="Vue logo" src="../assets/logo.png">ue Rocks!</h1>
    <h2>You have defeated: []</h2>
    <HelloWorld />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
  img {
    height: 50px
  }
</style>