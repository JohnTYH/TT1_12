import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card} from 'antd';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import { prods } from '../static';
import { PageWrapper } from '../layout';
import { useState } from 'react';

const Image = styled.img`
    width: 12em;
`
const Price = styled.p`
    color: #DC143C;
    font-size: 150%;
`
const qtyAvail = styled.span`
    color: #DC143C;
`

export const ProductPage = () => {
    const [qty, setQty] = useState(0);
    return(
        <PageWrapper>
            <div>
                <Card title={prods[0].title}>
                    <p>
                        <Image className='image' src={prods[0].image} />
                    </p>
                    <Price>
                        S${prods[0].price}
                    </Price>
                    <p>
                        {prods[0].description}
                    </p>
                    
                </Card>
            </div>
            <div>
            <Button type="primary">Add to Cart</Button>
            </div>
            <Button type="primary" onClick={() => {
                if(qty < 50){setQty(qty+1)}
                }}>
                +
            </Button>
            <Button type="primary" onClick={() => {if(qty > 0) {setQty(qty-1)}}}>-</Button>
            <span>
                Quantity Available: {50}
            </ span>
            <div>
                <p>Quantity: {qty}</p>
            </div>
            <div>
                <p>Total Amount: S${(qty * prods[0].price).toFixed(2)}</p>
            </div>
        </PageWrapper>
        
    )
};
