import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import styles from './index.less';

export default function LoginContainer() {
  const onFinish = (value: any) => {
    console.log(value, '1');
  };

  return (
    <div className={styles.login_bg}>
      <div className={styles.login_wrapper}>
        <div className={styles.login_img}>
          <Avatar
            size={150}
            src="https://t7.baidu.com/it/u=2405382010,1555992666&fm=193&f=GIF"
          />
        </div>
        <div className={styles.login_form}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 5 }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 5 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
