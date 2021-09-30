import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../layout';
// import ImageCarousel from "../components/ImageCarousel"
// import { Container, Row, Col } from 'react-bootstrap'
import Item from '../components/item'
import {
  CardContainer
} from "./styled-components";
import products from '../data/products.json'


export const HomePage = () => {
  const productList = products;

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    console.log('mounted');
  }

  return (
    <PageWrapper>
      <CardContainer>
        {productList.map((s) => (
          <Item item={s} >{s}</Item>
          ))}
      </CardContainer>
    </PageWrapper>
  );
};
