import React, { useEffect } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default function NoneContainer() {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
      <img
        style={{ width: '100%', height: '100%' }}
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-6ef56cd91560866685da425c10e235df_b.gif&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652253038&t=43edc4ea0bafa23d6226f5f809120cb8"
        alt=""
      />
      <Button
        onClick={() => {
          history.push('/');
        }}
        style={{
          width: '200px',
          height: '60px',
          position: 'absolute',
          top: '87%',
          left: '43%',
          borderRadius: '16px',
          fontSize: '18px',
        }}
      >
        返回首页
      </Button>
    </div>
  );
}
