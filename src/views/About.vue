<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{stats}}
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        stats: this.$store.state.targets
      }
    }
  }
</script>