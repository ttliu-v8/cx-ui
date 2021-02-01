# 组件介绍
## 目录

1、jx-date-picker：日历选择 <br/>

####
jx-select 下拉框
------
#### API
|参数|说明|类型|可选值|默认值|
|----|-----|-----|-----|-----|
| disabled | 是否禁用 | Boolean | |false|
| itemList | 选项列表 | Array | |[{code:'',desc:''}]|
| value | 值 | String |
| tips | 未输入内容时的提示语 | String | |请选择|
| textAlign | 文本对齐方式 | String | | right |
| label | 标签 | String | | |
---------
#### 事件
|事件|说明|返回值|
|----|---|-----|
|change|选项改变|{code:'编码',desc:'编码文本'}|
