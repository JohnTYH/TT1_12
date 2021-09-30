import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context';
import { authService } from '../services';

export const LoginPage = () => {
  const history = useHistory();
  const context = useContext(GlobalContext);

  const onFinish = async (values) => {
    try {
      const res = await authService.login({ username: values.username, password: values.password });
      console.log(res)
      // context.setToken({ token: res.token });
      context.setUser({user: res})
      console.log(context.user)
      // sessionStorage.setItem("token", JSON.stringify(res.token));
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', margin: '0', background: '#f5f5f5' }}>
      <div style={{ margin: 'auto', width: '300px', padding: '24px 24px 0 24px', background: '#fff' }} >
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
