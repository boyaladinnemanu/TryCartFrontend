import Header from "../Header"
import styled from "styled-components"
import Cookies from 'js-cookie'
import axios from 'axios'
import { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Usercontext from "../../Context/Usercontext";
import Cartcontext from "../../Context/Cartcontext";
import { RiCoupon3Line } from "react-icons/ri";


const Orderscont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:30px;
`
const Ordersaddresscont= styled.div`
    display:flex;
    flex-direction:column;
    gap:40px;
    align-items:center;
    width:45%;
    height:auto;
    resize: vertical;
    
`
const Ordersaddressarea = styled.textarea`
    width:94%;
  resize: vertical;
  
min-height: 80px;
height:auto;
  padding: 12px 16px;
  font-size: 16px;
  font-family: "Roboto",sans serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;
`
const OrdersPaymentmethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:95%;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width:100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #7d5fff;
    background-color: #f9f6ff;
  }

  input[type="radio"] {
    accent-color: #7d5fff;
    transform: scale(1.2);
  }
`;

const Orderscountcont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:10px;
    box-shadow:1px 2px 4px rgba(0,0,0,0.3);
    width:45%;
    `
const Addressh1 = styled.h1`
    font-family:"Roboto",sans serif;
    font-width:bold;
    font-size:20px;
    margin:0px;
    color:#000000;
`
const Textareacont = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:flex-start;
    width:100%;
`
const Paymentcont = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:flex-start;
    width:100%;
`
const Couponcodecont = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:flex-start;
    width:100%;
`
const CouponInput = styled.input`
    height:40px;
    border-radius:8px;
    padding-left:15px;
     border: 1px solid #ccc;
    outline:none;
    font-family:"Roboto",sans serif;
    font-size:20px;
    font-weight:bold;
`
const Couponiconcont = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`
const Updatebtnscont = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:flex-end;
    align-items:center;
    gap:20px;
`
const Updatebtn = styled.button`
    height:35px;
    width:100px;
    color:#ffffff;
    border:0px;
    border-radius:6px;
    background-color:#45a5d9;
    cursor:pointer;
`
const Placeorderbtn = styled.button`
    height:35px;
    width:100px;
    color:#ffffff;
    border:0px;
    margin:10px;
    border-radius:6px;
    background-color:#45a5d9;
    cursor:pointer;
`
const Costdetails = styled.ul`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    gap:15px;
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
`
const Itemdetils = styled.li`
    fontfamily:"Roboto",sans serif;
    color:#000;
    font-weight:300;
    display:flex;
    justify-content:space-between;
    font-size:16px;
    width:100%;
    padding:10px;
`

const Eachdetailt = styled.p`
    margin:0px;
    width:70%;
`
const Eachdetaile = styled.p`
    margin:0px;
    width:10%;
`
const Eachdetailc = styled.p`
    margin:0px;
    width:20%;
`
const DeliveryDate = styled.p`
    font-family:"Roboto",sans serif;
    font-size:20px;
    font-weight:bold;
    color:#000000;
`

const Orders =()=>{
    const {profileupdate} = useContext(Usercontext)
    const {removeAllCartItems,addWishItem} = useContext(Cartcontext)
    const user = JSON.parse(localStorage.getItem("user"))
    const cartItems = JSON.parse(localStorage.getItem("CartList"))||[]
    const [Address,setAddress] = useState(user?.address||'')
    const [Payment,setPayment] = useState("")
    const [Code,SetCode] = useState("")
    const [Discount,setDiscount] = useState(0)
    const jwtToken = Cookies.get('jwtToken')
    const navigate = useNavigate()
    const handelsave = ()=>{
        profileupdate({address:Address})
    }

    useEffect(() => {
        if (Code === "TryCart100") {
            setDiscount(100);
        } else {
            setDiscount(0);
        }
    }, [Code]);
    const subtotal = cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)||0;
    const Delivery = 50
    const totalAmount = subtotal-Discount+Delivery
    const deliverydate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toDateString()
    console.log(Payment)
    const data = {
        userId: user._id,
        userName: user.Name,
        email: user.Email,
        phone: user.phone,
        address: user.address,
        paymentMethod: Payment,
        orderItems: cartItems.map((item) => ({
          productoId: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          imageUrls: item.imageUrls, // depends on your cartItem format
          brand: item.brand,
          color: item.color,
          shape: item.shape,
        })),
        totalAmount: totalAmount,
        deliverydate:deliverydate,
      };
    const handelcreateorder = async()=>{
        try{
            const response = await axios.post('https://try-cartbackend.vercel.app/orders',data,{
                headers:{
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            if(response.status===201){
                removeAllCartItems()
            }
            alert(response.data.message)
            console.log('Order placed successfully:', response.data.order);
            navigate("/cart",{replace:true})
        }catch(error){
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
              } else {
                alert('Something went wrong. Please try again.');
              }
        }
    }
    const handelwishlist =()=>{
        const wishlist = JSON.parse(localStorage.getItem('CartList'))
        for(let i of wishlist){
            addWishItem(i)
        }
        removeAllCartItems()
        navigate('/profile')
    }
    return(
        <>
            <Header/>
            <Orderscont>
                <Ordersaddresscont>
                    <Textareacont>
                        <Addressh1>Address</Addressh1>
                        <Ordersaddressarea value={Address}  onChange={(e)=>setAddress(e.target.value)}/>
                        <Updatebtnscont>
                            <Updatebtn type="button" onClick={handelsave}>Save</Updatebtn>
                        </Updatebtnscont>
                    </Textareacont>
                    <Couponcodecont>
                        <Addressh1>Apply Coupon</Addressh1>
                        <Couponiconcont>
                        <CouponInput placeholder="Enter coupon code" type="text" value={Code} onChange={(e)=>SetCode(e.target.value)}/>
                        <RiCoupon3Line size={40}/>
                        </Couponiconcont>
                    </Couponcodecont>
                    <Paymentcont>
                    <Addressh1>Payment Method</Addressh1>
                    <OrdersPaymentmethod>
                        
                        <PaymentOption>
                            <input type="radio" name="payment" value="card" onChange={(e)=>setPayment(e.target.value)} />
                            Credit/Debit Card
                        </PaymentOption>
                        <PaymentOption>
                            <input type="radio" name="payment" value="paypal" onChange={(e)=>setPayment(e.target.value)}/>
                            PayPal
                        </PaymentOption>
                        <PaymentOption>
                            <input type="radio" name="payment" value="cash" onChange={(e)=>setPayment(e.target.value)} />
                            Cash on Delivery
                        </PaymentOption>
                        </OrdersPaymentmethod>
                    </Paymentcont>
                </Ordersaddresscont>
                <Orderscountcont>
                    <Addressh1>Billing</Addressh1>
                    <hr width="100%"/>
                    <Costdetails>
                        {cartItems?.map((each,index)=>
                            <Itemdetils key={index}>
                                <Eachdetailt>{`${each.title}   X ${each.quantity}`}</Eachdetailt>
                                <Eachdetaile>=</Eachdetaile>
                                <Eachdetailc>{`₹${each.quantity * each.price}`}</Eachdetailc>
                            </Itemdetils>)}
                    </Costdetails>
                    <hr width="100%"/>
                    <Costdetails>
                            <Itemdetils key="1">
                                <Eachdetailt>SubTotal</Eachdetailt>
                                <Eachdetaile>=</Eachdetaile>
                                <Eachdetailc>{`₹${subtotal}`}</Eachdetailc>
                            </Itemdetils>
                            <Itemdetils key="2">
                                <Eachdetailt>Discount</Eachdetailt>
                                <Eachdetaile>=</Eachdetaile>
                                <Eachdetailc>{`₹${Discount}`}</Eachdetailc>
                            </Itemdetils>
                            <Itemdetils key="3">
                                <Eachdetailt>Delivery Charge</Eachdetailt>
                                <Eachdetaile>=</Eachdetaile>
                                <Eachdetailc>{`₹${Delivery}`}</Eachdetailc>
                            </Itemdetils>
                            <hr width="100%"/>
                            <Itemdetils key="4">
                                <Eachdetailt>Total</Eachdetailt>
                                <Eachdetaile>=</Eachdetaile>
                                <Eachdetailc>{`₹${subtotal-Discount+Delivery}`}</Eachdetailc>
                            </Itemdetils>
                    </Costdetails>
                    <DeliveryDate>
                    Estimated Delivery: {deliverydate}
                    </DeliveryDate>
                    <Updatebtnscont>
                        <Placeorderbtn type="button" onClick={handelcreateorder}>Place Order</Placeorderbtn>
                        <Placeorderbtn type="button" onClick={handelwishlist}>Add to Wishlist</Placeorderbtn>
                    </Updatebtnscont>
                </Orderscountcont>
                
            </Orderscont>
        </>
        
    )
}

export default Orders
