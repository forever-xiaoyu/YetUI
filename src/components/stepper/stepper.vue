<template>
  <div class="yet-stepper" @click.stop="{}" ref="stepper">
    <div
      :class="{
        'stepper-reduce' : value <= min,
        'stepper-reduce--init' : value > 0 && value > min
      }"
      v-if="value > 0"
      @click.stop="reduceNum"
    >
    </div>
    <div
      class="stepper-number"
      v-if="value > 0"
    >
      {{value}}
    </div>
    <div
      :class="{
        'stepper-add--init' : value <= 0,
        'stepper-add' : value > 0 && value < max,
        'stepper-add--limit' : value >= max
      }"
      @click.stop="addNum($event)"
    >
    </div>
  </div>
</template>
<script>
  export default {
    name: 'yet-stepper',
    props: {
      min: {
        type: [String, Number],
        default: 0
      },
      max: {
        type: [String, Number],
        default: Infinity
      },
      value: {
        type: [String, Number],
        default: 0
      },
      hasAnimation: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        num: this.value
      }
    },
    watch: {
      value: function (newVal) {
        this.num = newVal
      }
    },
    // 若都使用 value ，当用户进行频繁加减购的时候会出现 12345
    // 请求成功后回显商品数量的时候会再次出现 12345，体验不好
    // 所以使用 num 进行数据请求，使用默认的 value 作为数量的回显
    methods: {
      reduceNum () {
        this.num = Number(this.num)
        if (this.num > this.min) {
          this.num--
        }
        this.$emit('reduce', this.num)
        this.$emit('change', this.num)
      },
      addNum (e) {
        if (this.hasAnimation) {
          this.num = Number(this.num)
          if (this.num < this.max) {
            this.num++
          }
          this.addAnimation(e)
          setTimeout(() => {
            this.$emit('add', this.num)
            this.$emit('change', this.num)
          }, 400)
        } else {
          this.num = Number(this.num)
          if (this.num < this.max) {
            this.num++
          }
          this.$emit('add', this.num)
          this.$emit('change', this.num)
        }

      },
      addAnimation (e) {
        let cartEle = document.createElement('div')
        cartEle.className = 'yet-add'
        let r = e.target.getBoundingClientRect()
        cartEle.style.left = r.left + 7 + 'px'
        cartEle.style.top = r.top + 7 + 'px'
        document.body.appendChild(cartEle)
        setTimeout(function () {
          cartEle.style.top = window.innerHeight - 45 + 'px'
          cartEle.style.left = '35px'
          setTimeout(function () {
            document.body.removeChild(cartEle)
          }, 410)
        }, 0)
      }
    }
  }
</script>
