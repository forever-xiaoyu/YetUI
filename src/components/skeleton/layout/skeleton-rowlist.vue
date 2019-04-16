<template>
  <div class="skeleton-rowlist">
    <yet-skeleton-row
      v-for=" i in Number(rowCount)"
      :key="i"
      :padding="padding"
    >
      <yet-skeleton-circle
        :diameter="diameter"
      >
      </yet-skeleton-circle>
      <yet-skeleton-square
        :width="squareWidth"
        :count="squareCount"
        :margin="squareMargin"
      >
      </yet-skeleton-square>
    </yet-skeleton-row>
  </div>
</template>

<script>
  export default {
    name: "yet-skeleton-rowlist",
    props: {
      padding: {
        type: String,
        default: '5px'
      },
      rowCount: {
        type: [String, Number],
        default: '1'
      },
      diameter: {
        type: [String],
        default: '60px'
      },
      squareWidth: {
        type: [String],
        default: '200px'
      },
      squareMargin: {
        type: [String],
        default: '4px 0 4px 5px'
      },
      squareCount: {
        type: [String, Number],
        default: '3'
      }
    }
  }
</script>

<style scoped>

</style>
