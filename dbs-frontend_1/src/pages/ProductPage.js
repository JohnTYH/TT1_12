import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Route, Switch, useParams } from "react-router";
import styled from "styled-components";
import { prods } from "../static";
import { PageWrapper } from "../layout";
import { useState, useContext } from "react";
import { GlobalContext } from "../context";
import React from "react";

const Image = styled.img`
  width: 12em;
`;
const Price = styled.p`
  color: #dc143c;
  font-size: 150%;
`;
const qtyAvail = styled.span`
  color: #dc143c;
`;
// pass in product id, current product qty into props
export const ProductPage = () => {
  const [isFetch, setIsFetch] = React.useState(true);
  const [props, setProps] = React.useState({});

  const {id} = useParams();

  if (isFetch) {
    fetch("http://localhost:5000/products/"+id)
      .then((response) => response.json())
      .then((result) => {
          setProps(result)
          setIsFetch(false);
          
      })
      .catch((error) => console.log("error", error));
  }

  const context = useContext(GlobalContext);
  const [cart_qty, setQty] = useState(0);

  const handleCart = () => {
    const currentItem = context.cart.find(
      (item) => item.id === props.id
    );
    console.log(props)
    if (!currentItem) {
      context.setCart([
        ...context.cart,
        {
          id: props.id,
          price: props.price,
          cart_qty: cart_qty,
          image: props.image,
          title: props.title
        },
      ]);
    } else {
      context.setCart(
        context.cart.map((item) =>
          item.id === props.id
            ? { ...item, cart_qty: (item.cart_qty += cart_qty) }
            : { ...item }
        )
      );
    }
  };

  return (
    <PageWrapper>
      {props && <><div>
        <Card title={props.title}>
          <p>
            <Image className="image" src={props.image} />
          </p>
          <Price>S${props.price}</Price>
          <p>{props.description}</p>
        </Card>
      </div>
      <div>
        <Button type="primary" onClick={handleCart}>
          Add to Cart
        </Button>
      </div>
      <Button
        type="primary"
        onClick={() => {
          if (cart_qty < props.qty) {
            setQty(cart_qty + 1);
          }
        }}
      >
        +
      </Button>
      <Button
        type="primary"
        onClick={() => {
          if (cart_qty > 0) {
            setQty(cart_qty - 1);
          }
        }}
      >
        -
      </Button>
      <div>
        <p>Quantity: {cart_qty}</p>
      </div>
      <div>
        <p>
          Total Amount: S${(cart_qty * props.price).toFixed(2)}
        </p>
      </div></>}
    </PageWrapper>
  );
};
