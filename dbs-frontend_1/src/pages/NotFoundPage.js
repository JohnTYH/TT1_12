import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const NotFoundPage = () => {

  const history = useHistory();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Result
        style={{ margin: 'auto' }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => history.goBack()}>Back</Button>}
      />
    </div>
  );
};
