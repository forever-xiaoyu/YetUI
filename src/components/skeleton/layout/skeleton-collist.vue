<template>
  <div class="skeleton-collist">
    <yet-skeleton-column
      :padding="padding"
    >
      <yet-skeleton-square
        :width="squareWidth"
        :height="squareHeight"
        :count="squareCount"
        :margin="squareMargin"
      >
      </yet-skeleton-square>
    </yet-skeleton-column>
  </div>
</template>

<script>
  export default {
    name: "yet-skeleton-collist",
    props: {
      padding: {
        type: String,
        default: '5px'
      },
      squareWidth: {
        type: [String],
        default: '100px'
      },
      squareHeight: {
        type: [String],
        default: '15px'
      },
      squareMargin: {
        type: [String],
        default: '4px 0 4px 5px'
      },
      squareCount: {
        type: [String, Number],
        default: '5'
      }
    }
  }
</script>

<style scoped>

</style>
