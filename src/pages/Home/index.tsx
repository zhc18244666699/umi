import React, { useEffect } from 'react';
import { history } from 'umi';
import { Button, PageHeader } from 'antd';
import styles from './index.less';

export default function HomeContainer() {
  useEffect(() => {});
  return (
    <div className={styles.home_container}>
      功能点总结
      <div className={styles.home_nav}>
        <ul>
          <li>
            <Button
              style={{ fontSize: '18px', margin: '10px 0' }}
              onClick={() => {
                history.push('/drag');
              }}
              type="link"
            >
              react: 拖拽
            </Button>
          </li>
          <li>
            <Button
              style={{ fontSize: '18px', margin: '10px 0' }}
              onClick={() => {
                history.push('/player');
              }}
              type="link"
            >
              react: Player播放器
            </Button>
          </li>
          <li>
            <Button
              style={{ fontSize: '18px', margin: '10px 0' }}
              onClick={() => {
                history.push('/detail');
              }}
              type="link"
            >
              react: 详情背景
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
