import React from 'react';
import { setUrlParams } from 'backgron-utils';

export default () => {
  return (
    <>
      <button onClick={() => setUrlParams({ name: 'backgron', age: 18 })}>加入url参数</button>
    </>
  );
};
