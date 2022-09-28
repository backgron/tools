---
title: setUrlParams
nav:
  title: 工具
  path: /utils
  order: 1
group:
  title: 方法
  path: /function
  order: 1
---

## setUrlParams

设置 url 参数

## Demo:

<code src="./demo/demo.tsx"></code>

## API

```ts
type anyObject = Record<string, unknown>

setUrlParams( key?:string|JSONObject, value?:string)
```

说明：key 为 string 时，需要传入 value,作为 url 参数的值，key 为 object 时，会将 object 解析成 key-value 形式加入 url 参数
