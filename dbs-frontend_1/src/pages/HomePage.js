import React, { useState, useEffect } from "react";
import { PageWrapper } from "../layout";
import ImageCarousel from "../components/ImageCarousel"
import { useHistory } from "react-router-dom"
import Item from "../components/item";
import { CardContainer } from "./styled-components";
import products from "../data/products.json";
import Button from '@mui/material/Button';

export const HomePage = () => {
  const history = useHistory();
  const [productList, setProductList] = useState(products);
  const [isFetch, setIsFetch] = useState(true);
  // const productList = products;

  if (isFetch) {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((result) => {
        setProductList(result);
        setIsFetch(false);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    onInit();
  }, []);

  const onInit = async () => {
    console.log("mounted");
  };

  return (
    <PageWrapper>
      <ImageCarousel/>
      <Button variant="contained" onClick={() => history.push(`/checkout`)}>Go to Shopping Cart</Button>
      <CardContainer>
        {productList.map((s) => (
          <Item item={s}>{s}</Item>
        ))}
      </CardContainer>
    </PageWrapper>
  );
};
