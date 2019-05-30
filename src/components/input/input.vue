<template>
  <div class="yet-form">
    <input
      class="yet-form-input"
      type="text"
      :placeholder="placeHolder"
      :maxlength="length"
      :style="{ 'width': width, 'height': height }"
      v-model="value"
      @input="handleChange"/>
    <span
      class="yet-form-tip"
      :style="{ 'height': height, 'line-height': height, 'display': tipPos === 'bottom' ? 'block' : 'inline-block' }"
      v-if="showTip">
      {{tip}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'yet-input',
    props: {
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '32px'
      },
      val: {
        type: [String, Number],
        default: ''
      },
      placeHolder: {
        type: String,
        default: ''
      },
      tipPos: {
        type: String, // 提示位置
        default: 'right' // right bottom
      },
      tip: {
        type: String, // 提示内容
        default: ''
      },
      showTip: {
        type: [String, Boolean], // 是否展示提示
        default: false
      },
      type: {
        type: String, // 输入框类型
        default: 'text' // 文本 text 手机号 tel 正整数 num 价格 price
      },
      length: {
        type: [String, Number], // 字符长度限制
        default: Infinity
      }
    },
    data () {
      return {
        value: this.val
      }
    },
    methods: {
      handleChange (e) {
        let value = this.value
        if (this.type === 'tel') {
          value = value.replace(/[^\d]/g, '')
          value = value.replace(/^[^1]/g, '')
        } else if (this.type === 'num') {
          value = value.replace(/[^\d]/g, '')
        } else if (this.type === 'price') {
          value = value.replace(/[^\d]/g, '')
        }
        this.value = value
        this.$emit('update:val', value)
      }
    },
    watch: {
      val: function (newValue) {
        this.value = newValue
      }
    }
  }
</script>
