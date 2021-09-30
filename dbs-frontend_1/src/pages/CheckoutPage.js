import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { List, Avatar, Tooltip, Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context';
import { PageWrapper } from '../layout';

export const CheckoutPage = () => {
  const context = useContext(GlobalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    setMounted(true);
  }

  const onMinus = id => {
    console.log(id);
  }
  
  const onDelete = id => {
    context.setCart(context.cart.filter(item => item.id !== id));
  }

  return (
    <PageWrapper>
      {mounted && 
          <List
            itemLayout="horizontal"
            dataSource={context.cart}
            renderItem={item => (
              <List.Item 
                actions={[
                  <Tooltip title="Add">
                    <Button shape="circle" icon={<PlusOutlined />} />
                  </Tooltip>,
                  <Tooltip title="Minus">
                    <Button shape="circle" icon={<MinusOutlined />} onClick={() => onMinus(item.id)}/>
                  </Tooltip>,
                  <Tooltip title="Remove">
                    <Button shape="circle" icon={<DeleteOutlined />} onClick={() => onDelete(item.id)} />
                  </Tooltip>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<span>{item.title}</span>}
                  description={`Quantity: ${item.qty}`}
                />
                <div>{`$${item.price * item.qty}`}</div>
              </List.Item>
            )}
          />
        }
    </PageWrapper>
  );
};
