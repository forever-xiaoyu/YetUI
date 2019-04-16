<template>
  <div class="vue-skeleton-circle"
     ref="vueSkeletonCircle"
     :style="{
       'backgroundColor': backColor,
       'width': diameter,
       'height': diameter,
       'border-radius': borderRaduis,
       'margin': margin
     }"
  >
  </div>
</template>

<script>
export default {
  name: 'yet-skeleton-circle',
  data () {
    return {
    }
  },
  props: {
    backColor: {
      type: String,
      default: '#efefef'
    },
    diameter: {
      type: String,
      default: '50px'
    },
    margin: {
      type: String,
      default: '0 0 0 0'
    },
    borderRaduis: {
      type: String,
      default: '50%'
    }
  }
}
</script>
