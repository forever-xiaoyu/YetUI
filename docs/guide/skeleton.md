# 骨架屏

> 骨架屏是在页面完全渲染完成之前，用户会看到的一个简单结构样式，描述当前页面的大致框架结构，让用户感知到页面正在逐步加载，加载完成后，最终骨架屏中各个占位部分将被真实的数据替换。


## 基本形状
-----
### 长方形

```html
<yet-skeleton-square 
  width="100px"
>
</yet-skeleton-square>
```

### 矩形/圆形

```html
<yet-skeleton-circle 
  diameter="50px"
>
</yet-skeleton-circle>
```

## 基本排列
-----
### 横向排列

```html
<yet-skeleton-row 
  padding="10px"
>
  <yet-skeleton-square 
    width="100px"
  >
  </yet-skeleton-square>
  <yet-skeleton-square 
    width="50px" 
    margin="0 0 0 0"
  >
  </yet-skeleton-square>
  <yet-skeleton-square 
    width="50px" 
    margin="0 0 0 10px"
  >
  </yet-skeleton-square>
</yet-skeleton-row>
```

### 纵向排列

```html
<yet-skeleton-column>
  <yet-skeleton-square 
    width="275px" 
    :count="2" 
    margin="5px 10px 5px 10px"
  >
  </yet-skeleton-square>
  <yet-skeleton-square 
    width="100px" 
    margin="5px 10px 5px 10px"
  >
  </yet-skeleton-square>
</yet-skeleton-column>
```

## 常用布局
-----
### 水平布局
```html
<yet-skeleton>
  <yet-skeleton-rowlist
    padding="10px"
    :rowCount="3"
  >
  </yet-skeleton-rowlist>
</yet-skeleton>
```

### 纵向布局
```html
<yet-skeleton>
  <yet-skeleton-collist
    padding="10px"
    :squareCount="10"
  >
  </yet-skeleton-collist>
</yet-skeleton>
```

## 属性
-----

### 基本形状
#### circle

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| diameter | 直径/长宽 | String | 50px
| backColor | 背景色 | String | #efefef
| borderRaduis | 圆角 | String | 50%
| margin | 外部间距 | String | 0 0 0 0

#### square

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | :----: | -----
| width | 长度 | String | 100%
| height | 高度 | String | 12px
| backColor | 背景色 | String | #efefef
| count | 数量 | String/Number | 1
| margin | 外部间距 | String | 0 0 0 0

### 基本排列
#### row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | :----: | -----
| width | 长度 | String | 100%
| padding | 填充间距 | String | 0 0 0 0

#### column

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | :----: | -----
| width | 长度 | String | 100%
| padding | 填充间距 | String | 0 0 0 0

### 常用布局
#### 水平布局
| 字段 | 说明 | 类型 | 默认值
|----- | ----- | :----: | -----
| squareWidth | 长方形长度 | String | 200px
| squareMargin | 长方形外距 | String | 4px 0 4px 5px
| squareCount | 长方形数量 | String/Number | 3
| diameter | 圆形直径 | String | 60px
| rowCount | 总数量 | String/Number | 1
| padding | 填充间距 | String | 0 0 0 0

#### 纵向布局
| 字段 | 说明 | 类型 | 默认值
|----- | ----- | :----: | -----
| squareWidth | 长方形长度 | String | 200px
| squareHeight | 长方形高度 | String | 15px
| squareMargin | 长方形外距 | String | 4px 0 4px 5px
| squareCount | 长方形数量 | String/Number | 3
| padding | 填充间距 | String | 0 0 0 0
