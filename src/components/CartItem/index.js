import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Cartitemli,Cartitemimg,
    CartitemDetailsCont,Cartitembrandcont,
    Cartitemquantitycont,Cartitembtn,Cartitemp,Cartitempricecont,
    CartitemRbtn} from './styledComponent'

import Cartcontext from '../../Context/Cartcontext'

import './index.css'
import { useContext } from 'react'

const CartItem = props => {
    const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = useContext(Cartcontext)
      const{Itemdetails} = props
      const {id, title, brand, quantity, price, imageUrls} = Itemdetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const onIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const onDecrement = () => {
        decrementCartItemQuantity(id, quantity)
      }

      return (
        <Cartitemli>
          <Cartitemimg src={imageUrls[0]} alt={title} />
          <CartitemDetailsCont >
            <Cartitembrandcont>
              <Cartitemp >{title}</Cartitemp>
              <Cartitemp >by {brand}</Cartitemp>
            </Cartitembrandcont>
            <Cartitemquantitycont >
              <Cartitembtn
                type="button"
                onClick={onDecrement}
              >
                <BsDashSquare color="#52606D" size={15} />
              </Cartitembtn>
              <Cartitemp >{quantity}</Cartitemp>
              <Cartitembtn
                type="button"
                onClick={onIncrement}
              >
                <BsPlusSquare color="#52606D" size={15} />
              </Cartitembtn>
            </Cartitemquantitycont>
            <Cartitempricecont>
              <Cartitemp>Rs {price * quantity}/-</Cartitemp>
              
            </Cartitempricecont>
          </CartitemDetailsCont>
          <CartitemRbtn
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </CartitemRbtn>
        </Cartitemli>
      )
}

export default CartItem
