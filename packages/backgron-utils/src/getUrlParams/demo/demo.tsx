import React, { useState } from 'react';
import { getUrlParams } from 'backgron-utils';

const Demo = () => {
  const [state, setState] = useState<any>('');

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

export default Demo;
