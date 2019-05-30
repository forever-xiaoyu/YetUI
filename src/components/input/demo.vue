<template>
  <div>
    <ds-input
      width="200px"
      height="30px"
      placeHolder="请输入"
      type="price"
      length="5"
      :val.sync="value"
      tip="这里是提示"
      tipPos="bottom"
      :showTip="true"
    ></ds-input>
  </div>
</template>

<script>
  import Input from './input'
  export default {
    name: "demo",
    data () {
      return {
        value: ''
      }
    },
    components: {
      [Input.name]: Input
    }
  }
</script>

<style scoped>

</style>
