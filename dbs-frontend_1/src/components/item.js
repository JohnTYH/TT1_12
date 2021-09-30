import { LineHeightOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"

import Tooltip from "@mui/material/Tooltip";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink,
    CardImage,
    CardButtonDiv
  } from "./styled-components";


  

export default function Item(props) {
    // const id = props.item.id;
    // const desc = props.item.description;
    // const img = props.item.img;
    const history = useHistory();
    const [title, setTitle] = useState('err');
    const [desc, setDesc] = useState('err');
    const [image, setImg] = useState('err');

    const [quantity, setQuantity] = useState(-1);

    useEffect(() => {
        setQuantity(props.item.qty);
        setTitle(props.item.title);
        setDesc(props.item.description);
        setImg(props.item.image);
        console.log(image);
      },)

    // const history = useHistory();

    return (
        <CardWrapper onClick={() => history.push(`/products`)}>
            <CardHeading>{title}</CardHeading>
                <CardImage> 
                    <Tooltip title={desc}>
                        <img className='img' src={image}/>
                    </Tooltip>
                    
                </CardImage>
                {/* <CardBody> 
                {desc}
                </CardBody> */}
            
                <CardButtonDiv>
    
                    <CardFieldset>
                        <CardButton type="button">Find Out More</CardButton>
                    </CardFieldset>             
                </CardButtonDiv>         
        </CardWrapper>
    )
}