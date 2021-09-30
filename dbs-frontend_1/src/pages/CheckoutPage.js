import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { List, Avatar, Tooltip, Button, Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context';
import { PageWrapper } from '../layout';

export const CheckoutPage = () => {
  const context = useContext(GlobalContext);
  const [mounted, setMounted] = useState(false);
  console.log(context)

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    setMounted(true);
  }

  const onIncrement = id => {
    context.setCart(context.cart.map(item => item.id === id ? 
      {...item, cart_qty: item.cart_qty + 1} : {...item}
      ));
  }

  const onMinus = id => {
    context.setCart(context.cart.map(item => item.id === id ? 
      {...item, cart_qty: item.cart_qty - 1} : {...item}
      ));
  }
  
  const onDelete = id => {
    context.setCart(context.cart.filter(item => item.id !== id));
  }

  const handleCheckout = () => {
    console.log('api to checkout');
  }

  return (
    <PageWrapper>
      {mounted && 
        <>
          <List
            itemLayout="horizontal"
            dataSource={context.cart}
            renderItem={item => (
              <List.Item 
                actions={[
                  <Tooltip title="Add">
                    <Button shape="circle" icon={<PlusOutlined />} onClick={() => onIncrement(item.id)} />
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
                  description={`Price $${item.price}, Quantity: ${item.cart_qty}`}
                />
                <div>{`$${(item.price * item.cart_qty).toFixed(2)}`}</div>
              </List.Item>
            )}
          />
          <Divider style={{marginTop: '0'}} />
          <Button type="primary" style={{ float: 'right', marginLeft: '24px', marginTop: '6px' }} onClick={handleCheckout}>
            Checkout
          </Button>
          <div style={{ float: 'right', padding: '12px 0 36px 0', fontWeight: 'bold' }}>
            Total: ${context.cart.map(item => item.cart_qty * item.price).reduce((a, b) => a + b, 0).toFixed(2)}
          </div>
        </>
      }
    </PageWrapper>
  );
};
