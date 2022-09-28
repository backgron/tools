type anyObject = Record<string, unknown>;

/**
 * @param key 参数的key | undefined
 * @returns 参数的value | 所有参数组成的对象 | undefined
 * @des 返回结果一定是字符串，如果需要其他类型，需要手动转换 特别注意：undefeind和null还有boolean类型
 *      一般来说只能存string number类型，其余都需要手动判断
 */
export default function getUrlParams(key?: string): string | anyObject | undefined {
  const search = window.location.search;
  if (search === '') return undefined;

  const res = Object.fromEntries(
    decodeURI(search.replace('?', ''))
      .split('&')
      .map((item) => item.split('=')),
  );

  return key ? res[key] : res;
}
