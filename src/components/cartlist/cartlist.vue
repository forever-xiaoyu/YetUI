<template>
  <div class="yet-cartlist">
    <div class="cartlist-content" :class="{'cartlist-content--hide': !isShow}" :style="{ bottom: bottom }">
      <div class="cartlist-item__title">
        <span class="cartlist-item__titext">{{cartName}}</span>
      </div>
      <div class="cartlist-item__container" :style="{ height: height }">
        <slot></slot>
      </div>
    </div>
    <div class="yet-cartlist__masker" @click="showCartList" v-show="isShow"></div>
  </div>
</template>
<script>
  export default {
    name: 'yet-cartlist',
    props: {
      height: {
        type: String,
        default: 300
      },
      bottom: {
        type: String,
        default: 0
      },
      cartName: {
        type: String,
        default: '购物车'
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showCartList () {
        this.isShow = !this.isShow
        this.$emit('showCart', this.isShow)
      }
    }
  }
</script>
