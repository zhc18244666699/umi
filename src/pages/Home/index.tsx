import React from 'react';
import { history } from 'umi';
import { Button, PageHeader } from 'antd';
import styles from './index.less';

export default function HomeContainer() {
  return (
    <div className={styles.home_container}>
      功能点总结
      <div className={styles.home_nav}>
        <ul>
          <li>
            <Button
              onClick={() => {
                history.push('/drag');
              }}
              type="link"
            >
              react: 拖拽
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
