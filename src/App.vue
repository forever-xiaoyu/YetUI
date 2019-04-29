<template>
  <div id="app">
    <yet-stepper
      :min="1"
      :max="5"
      :value="value"
      :hasAnimation="true"
      @add="addNum"
      @reduce="reduceNum"
    ></yet-stepper>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      value: 2
    }
  },
  methods: {
    addNum (num) {
      this.value = num
    },
    reduceNum (num) {
      this.value = num
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background: #dddddd;*/
  margin-top: 60px;
}
</style>
