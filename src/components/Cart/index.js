import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Cartcontext from '../../Context/Cartcontext'
import CheckoutSummary from '../CheckoutSummary'
import CartItem from '../CartItem'
import {Emptycartview,Emptycartbtn,Emptycartimg,Cartviewcont,Cartviewh1,Clearallbtn,Emptycarth1,CartItemsul} from './styledComponent'
import Header from '../Header'

const Cart =()=>{
    const{cartList,removeAllCartItems} = useContext(Cartcontext)
    const navigate = useNavigate()
    const showemptycart = cartList.length===0

    const renderEmptycart=()=>(
        <Emptycartview>
            <Emptycartimg src="https://img.freepik.com/free-vector/empty-shopping-basket-concept-illustration_114360-29795.jpg?uid=R196432016&semt=ais_hybrid&w=740" alt="Empty cart"/>
            <Emptycarth1>Your Cart is Empty</Emptycarth1>
            <Emptycartbtn type="button" onClick={()=>navigate("/products")}>Shop Now</Emptycartbtn>
        </Emptycartview>
    )

    const renderCartview=()=>(
        <Cartviewcont>
            <Cartviewh1>My Cart</Cartviewh1>
            <Clearallbtn onClick={removeAllCartItems}>Remove All</Clearallbtn>
            <CartItemsul>
                {cartList.map(each=><CartItem key={each.id} Itemdetails={each}/>)}
            </CartItemsul>
            <CheckoutSummary/>
        </Cartviewcont>
    )
    return(
        <>
            <Header/>
            {showemptycart?
                renderEmptycart()
                :
                renderCartview()
            }
        </>
    )
}

export default Cart