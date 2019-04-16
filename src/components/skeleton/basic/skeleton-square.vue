<template>
  <div class="vue-skeleton-square-wrap">
    <div class="vue-skeleton-square"
      v-for=" i in Number(count)"
      :key="i"
      :style="{
        'backgroundColor': backColor,
        'width': width,
        'height': height,
        'margin': margin
      }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'yet-skeleton-square',
  data () {
    return {
    }
  },
  props: {
    backColor: {
      type: String,
      default: '#efefef'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '12px'
    },
    margin: {
      type: String,
      default: '0 0 0 0'
    },
    count: {
      type: [String, Number],
      default: '1'
    }
  }
}
</script>
