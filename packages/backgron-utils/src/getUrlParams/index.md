---
title: getUrlParams 卡片
nav:
  title: 工具
  path: /utils
  order: 1
group:
  title: 方法
  path: /function
  order: 1
---

## getUrlParams

获取 url 参数

## Demo:

<code src="./demo/demo.tsx"></code>

## API

```ts
type anyObject = Record<string, unknown>

const res: string | anyObject | undefined  = getUrlParams(key?:string)
```

说明：key 为 string 时，返回 url 对应的值；key 为 undefined 时，返回 url 参数对象；如果没有，则返回 undefined 或空对象
