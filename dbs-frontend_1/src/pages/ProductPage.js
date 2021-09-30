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

// pass in product id, current product qty into props
export const ProductPage = (props) => {
    const context = useContext(GlobalContext);
    const [cart_qty, setQty] = useState(0);

    const handleCart = () => {
    const currentItem = context.cart.find(item => item.id === prods[this.props.id].id);
        if (!currentItem) {
            context.setCart([...context.cart, {id: prods[this.props.id].id, price: prods[this.props.id].price, cart_qty: prods[this.props.id].qty, image: prods[this.props.id].image}]);
        } else {
            context.setCart(context.cart.map(item => item.id === prods[this.props.id].id ? {...item, cart_qty: item.qty += prods[this.props.id].qty} : {...item}));
        } 
    }


    return(
        <PageWrapper>
            <div>
                <Card title={prods[this.props.id].title}>
                    <p>
                        <Image className='image' src={prods[this.props.id].image} />
                    </p>
                    <Price>
                        S${prods[this.props.id].price}
                    </Price>
                    <p>
                        {prods[this.props.id].description}
                    </p>
                    
                </Card>
            </div>
            <div>
            <Button type="primary" onClick={handleCart}>Add to Cart</Button>
            </div>
            <Button type="primary" onClick={() => {
                if(cart_qty < this.props.qty){setQty(cart_qty+1)}
                }}>
                +
            </Button>
            <Button type="primary" onClick={() => {if(cart_qty > 0) {setQty(cart_qty-1)}}}>-</Button>
            <div>
                <p>Quantity: {cart_qty}</p>
            </div>
            <div>
                <p>Total Amount: S${(cart_qty * prods[this.props.id].price).toFixed(2)}</p>
            </div>
        </PageWrapper>
        
    )
};
