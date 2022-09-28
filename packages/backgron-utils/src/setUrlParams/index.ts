import getUrlParams from '../getUrlParams';

/**
 *
 * @param key 设置参数的key
 * @param value 设置参数的value
 */
export default function setUrlParams(key: object | string, value?: string | boolean | number) {
  const oldParamsObj: JSONObject = getUrlParams() as JSONObject;

  let newParamsObj: JSONObject = oldParamsObj;

  if (typeof key === 'object') {
    newParamsObj = { ...oldParamsObj, ...key };
  } else if (key && value) {
    Reflect.defineProperty(newParamsObj, key, value);
  }

  let paramsStr = '?';
  for (const item in newParamsObj) {
    //@ts-ignore
    paramsStr += '&' + item + '=' + newParamsObj[item];
  }

  window.history.replaceState(null, '', paramsStr.replace('&', ''));
}
