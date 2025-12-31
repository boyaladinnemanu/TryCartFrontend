import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cartcontext from '../../Context/Cartcontext';
import Orders from '../Orders';
import {
  Checkoutmain,
  Checkoutbtn,
  Checkouth1,
  Checkoutp,
  Checkoutcont,
  Checkoutspan,
} from './styledComponent';
import './index.css';

const CheckoutSummary = () => {
  const { cartList } = useContext(Cartcontext);
  const navigate = useNavigate()

  const noItems = cartList.length;
  const total = cartList.reduce(
    (acc, each) => acc + each.price * each.quantity,
    0
  );

  return (
    <Checkoutmain>
      <Checkoutcont>
        <Checkouth1>
          Order Summary
        </Checkouth1>
        <Checkoutp>
          You have <Checkoutspan>{noItems}</Checkoutspan>{' '}
          {noItems === 1 ? 'item' : 'items'} in your cart
        </Checkoutp>
        <Checkoutp>
          Total Amount: <Checkoutspan>₹{total.toFixed(2)}</Checkoutspan>
        </Checkoutp>
        <Checkoutbtn type="button" onClick={()=>navigate('/Orders')}>
        Buy Now
        </Checkoutbtn>
      </Checkoutcont>
    </Checkoutmain>
  );
};

export default CheckoutSummary;
