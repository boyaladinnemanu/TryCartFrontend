import { useEffect,useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import Orderslist from '../Orderslist'

const Myorders = ()=>{
    const [orders,setOrderslist] = useState([])
    const jwtToken = Cookies.get('jwtToken')
    const getdata= async()=>{
        try{
            const response = await axios.get('http://localhost:8000/orders/myorders',{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            })
            if(response.status===200){
                setOrderslist(response.data.myorders)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getdata()
    })
    return(
        <div>
      <Orderslist orders={orders} />
    </div>
    )
}

export default Myorders