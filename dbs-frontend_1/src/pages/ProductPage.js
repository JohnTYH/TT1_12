import { Button, Card} from 'antd';
import styled from 'styled-components';
import { prods } from '../static';
import { PageWrapper } from '../layout';

const Image = styled.img`
    width: 100px;
`


export const ProductPage = () => {
    return(
        <PageWrapper>
            <div>
                <Card title="Card title" style={{ width: 300 }}>
                    <p>
                    {prods[0].title}
                    </p>
                    <p>
                        <Image className='image' src={prods[0].image} />
                    </p>
                    <p>
                        Price: {prods[0].price}
                    </p>
                    <p>
                        Description: {prods[0].description}
                    </p>
                    
                </Card>
            </div>

            <Button type="primary">Add to Cart</Button>
        </PageWrapper>
        
    )
};
