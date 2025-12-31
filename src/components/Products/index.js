import Header from "../Header"
import PrimeDeals from '../PrimeDeals';
import AllProduct from '../Allproducts';
import {Productmain} from './styledComponent'

const Product =()=>{
    return(
        <>
        <Header/>
        <Productmain>
            <PrimeDeals/>
            <AllProduct/>
        </Productmain>
        </>
    )
}

export default Product