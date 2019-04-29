# 步进器
-----

```html
<yet-stepper
  :min="1"
  :max="5"
  :value="value"
  @add="addNum"
  @reduce="reduceNum"
></yet-stepper>
```

```javascript
export default {
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
```

## 属性
-----

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| min | 最小值 | String/Number | 0
| max | 最大值 | String/Number | Infinity
| value | 当前值 | String/Number | 0
| hasAnimation | 是否开启动画 | Boolean | false

## 事件
-----

| 事件 | 说明 | 参数 | 说明
|----- | ----- | ----- | -----
| add | 增加数量回调 | num | 变化后数量
| reduce | 减少数量回调 | num | 变化后数量
| change | 改变数量回调 | num | 变化后数量
