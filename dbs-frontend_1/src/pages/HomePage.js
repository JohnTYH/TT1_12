import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../layout';
import ImageCarousel from "../components/ImageCarousel"
import { useHistory } from "react-router-dom"
import Item from '../components/item'
import {
  CardContainer
} from "./styled-components";
import products from '../data/products.json'
import Button from '@mui/material/Button';



export const HomePage = () => {
  const history = useHistory();
  const productList = products;

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    console.log('mounted');
  }

  return (
    <PageWrapper>
      <ImageCarousel/>
      <Button variant="contained" onClick={() => history.push(`/checkout`)}>Go to Shopping Cart</Button>
      <CardContainer>
        {productList.map((s) => (
          <Item item={s} >{s}</Item>
        ))}
      </CardContainer>
    </PageWrapper>
  );
};
