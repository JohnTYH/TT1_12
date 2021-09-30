import { List, Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context';
import { PageWrapper } from '../layout';
import { prods } from '../static';

export const CheckoutPage = () => {
  const context = useContext(GlobalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    setMounted(true);
  }

  return (
    <PageWrapper>
      {mounted && 
          <List
            itemLayout="horizontal"
            dataSource={prods}
            renderItem={item => (
              <List.Item 
                actions={[<a href="/">+</a>, <a href="/">-</a>, <a href="/">Remove</a>]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<span>{item.title}</span>}
                  description={item.description}
                />
                <div>QUANTITY</div>
              </List.Item>
            )}
          />
        }
    </PageWrapper>
  );
};
