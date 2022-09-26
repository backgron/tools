import React, { useState } from 'react';
//@ts-ignore
import { getUrlParams } from 'backgron-utils';

export default () => {
  const [state, setState] = useState('');

  return (
    <div>
      <h1>参数：{JSON.stringify(state)}</h1>
      <button
        onClick={() => {
          setState(getUrlParams());
          console.log(getUrlParams());
        }}
      >
        点击获取
      </button>
    </div>
  );
};
