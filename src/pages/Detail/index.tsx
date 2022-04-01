import React, { useEffect } from 'react';
import { message } from 'antd';
import ReactCanvasNest from 'react-canvas-nest';
import HeaderContainer from '../component/Header';
import { history } from 'umi';

export default function PlayerContainer() {
  return (
    <div>
      <HeaderContainer title="React 背景" subTitle="炫酷背景" />
      <ReactCanvasNest
        className="canvasNest"
        config={{ pointColor: '255, 255, 255' }}
      />
      <ul>
        <li style={{ fontSize: '24px', color: 'red', textAlign: 'center' }}>
          滑动你的鼠标，点击返回上一菜单
        </li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
      </ul>
    </div>
  );
}
