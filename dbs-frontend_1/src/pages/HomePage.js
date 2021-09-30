import React, { useEffect } from 'react';
import { PageWrapper } from '../layout';

export const HomePage = () => {

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    console.log('mounted');
  }

  return (
    <PageWrapper>
      <div>Home Page</div>
    </PageWrapper>
  );
};
