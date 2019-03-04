<template>
  <div class="hello">
    <form @submit.prevent="setName">
      <input type="text" v-model="yourName">
    </form>
    {{yourName}}
    <!-- <div class="target this-tag" v-for="(target, index) in targets">
      <h1 v-if="target.hp > 0">Fight</h1>
      <h1 v-else>You Win!</h1>
      <h2 :class="{dead: target.hp<=0}">Target: {{target.name}}</h2>
      <img :src="target.imgUrl" alt="">
      <h3>Health: {{target.hp}}</h3>
      <div v-if="index == activeTarget">
        <button @click='attack(index, 1)'>Slap</button>
        <button @click='attack(index, 5)'>Punch</button>
        <button @click='attack(index, 10)'>Kick</button>
        <button @click="target.hp = 100">RESET</button>
      </div>
    </div> -->
    <h1 v-if="activeTarget.hp > 0">Fight</h1>
    <h1 v-else>You Win!</h1>
    <h2 v-if="activeTarget.name">Target: {{activeTarget.name}}</h2>
    <img :src="activeTarget.imgUrl" alt="">
    <h3>Health: {{activeTarget.hp}}</h3>
    <button @click='attack(1)'>Slap</button>
    <button @click='attack(5)'>Punch</button>
    <button @click='attack(10)'>Kick</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        targetIndex: 0,
        yourName: ''
      }
    },
    computed: {
      activeTarget() {
        if (this.$store.state.targets.length > this.targetIndex) {
          return this.$store.state.targets[this.targetIndex]
        }
        return {}
      }
    },
    methods: {
      attack(num) {
        this.$store.dispatch('attack', { index: this.targetIndex, value: num })
        if (this.activeTarget.hp <= 0) {
          this.targetIndex++
        }
      },
      setName() {
        this.$store.dispatch('setName', this.yourName)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .dead {
    color: red;
    text-decoration: line-through;
  }
</style>