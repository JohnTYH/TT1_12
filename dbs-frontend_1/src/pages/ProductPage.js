import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';

const [itemID, setItem] = useState();

const Image = styled.img`
    width: 100px;
`


export const ProductPage = () => {

    return(
        <div>
            <ul>
                <li>
                   data[i].title
                </li>
                <li>
                    <Image className='image' src={data[i].image} />
                </li>
                <li>
                    data[i].price
                </li>
                <li>
                    data[i].description
                </li>
                
            </ul>
        </div>
        
    )
};
