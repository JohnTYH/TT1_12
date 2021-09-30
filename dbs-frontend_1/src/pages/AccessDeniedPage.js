import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const AccessDeniedPage = () => {

  const history = useHistory();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Result
        style={{ margin: 'auto' }}
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary" onClick={() => history.push('/')}>Login</Button>}
      />
    </div>
  );
};
