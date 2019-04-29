# 购物车
-----

```html
<yet-cartlist
  height="300px"
  bottom="0"
  cartName="This is the title"
  @showCart="doSomething"
  ref="cart"
>
  <li class="cartlist-item">
    <div class="cartlist-item__img">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556515023330&di=b2168bb78f3b286344299d017fe1b298&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F150924%2F258216-1509241F20510.jpg">
    </div>
    <div class="cartlist-itemright">
      <span class="cartlist-itemright__text">good name</span>
      <div class="cartlistright-goods">
          <span class="cartlistright-goods__price">¥
            <span class="cartlistright-goods__price--font">15.</span>50
          </span>
      </div>
    </div>
  </li>
</yet-cartlist>
```

## 属性
-----

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| height | 高度 | String | 300px
| bottom | 底部距离 | String | 0
| cartName | 标题名 | String | 购物车

## 事件
-----

| 事件 | 说明 | 参数 | 说明
|----- | ----- | ----- | -----
| showCart | 购物车回调 | isShow | 购物车状态
