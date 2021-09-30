import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
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
    CardLink
  } from "./styled-components";

export default function Item(props) {
    // const history = useHistory();
    // console.log(`../images/posters/${props.picturePath}.jpg`)

    return (
        <CardWrapper>
            {/* <img> */}
            <CardHeading>test</CardHeading>
                <CardBody> a paragraph of text asdamdklasmdksadksadmk saldmasl ksamkldm askldsa mkiodma skldsmaklm saklfmal mkgfaklf maklaklsm kldklsam ldsam
                    <CardFieldset>
                        <CardButton type="button">Check Out</CardButton>
                    </CardFieldset>
                </CardBody> 
        </CardWrapper>
    )
}