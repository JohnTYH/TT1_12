import React, { useEffect } from 'react';
import { PageWrapper } from '../layout';
// import ImageCarousel from "../components/ImageCarousel"
// import { Container, Row, Col } from 'react-bootstrap'
import Item from '../components/item'
import {
  CardContainer
} from "./styled-components";



export const HomePage = () => {

  useEffect(() => {
    onInit();
  }, [])

  const onInit = async () => {
    console.log('mounted');
  }

  return (
    <PageWrapper>
      <CardContainer>
        <Item/>
        <Item/>
      </CardContainer>
    </PageWrapper>
  );
};
