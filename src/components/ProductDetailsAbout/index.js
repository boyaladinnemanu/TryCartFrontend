import { MdStarRate } from "react-icons/md";
import { BsPlusSquare,BsDashSquare  } from "react-icons/bs";
import Cartcontext from "../../Context/Cartcontext";
import {useState,useContext} from 'react'

import {ProductAboutcont,ProductAboutname,ProductAboutprice,ProductAboutspan,ProductPlusBtn,ProductMinusBtn,Productcount,ProductAboutline,ProductAboutBtn,ProductAboutBtncont,ProductAboutRatingcont,ProductAboutRating,ProductAboutreview,ProductAboutDesc,ProductAboutAvail,ProductAboutbrand} from './styledComponent'
import './index'

const ProductDetailsAbout = (props)=>{
    const [quantity,setQuantity]=useState(1)
    const {addCartItem} = useContext(Cartcontext)
    const{product} = props
    const{title,id,price,availability,brand,category,color,description,imageUrls,isPrime,productId,rating,shape,similarProducts,totalReviews} = product
    

    const onDecrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity =>quantity - 1)
        }
      }

    const onIncrementQuantity = () => {
        setQuantity(quantity => quantity + 1)
      }

    const onAddtocart=()=>{
        addCartItem({...product,quantity})
    }
    return(
        <ProductAboutcont>
            <ProductAboutname>{title}</ProductAboutname>
            <ProductAboutprice>Rs {price}/-</ProductAboutprice>
            <ProductAboutRatingcont>
                <ProductAboutRating>
                    {rating}
                    <MdStarRate className="icon"/>
                </ProductAboutRating>
                <ProductAboutreview>{totalReviews} Reviews</ProductAboutreview>
            </ProductAboutRatingcont>
            <ProductAboutDesc>{description}</ProductAboutDesc>
            <ProductAboutAvail><ProductAboutspan>Availability: </ProductAboutspan> {availability}</ProductAboutAvail>
            <ProductAboutbrand><ProductAboutspan>Brand: </ProductAboutspan> {brand}</ProductAboutbrand>
            <ProductAboutline/>
            <ProductAboutBtncont>
                <ProductMinusBtn type="button" onClick={onDecrementQuantity}>
                    <BsDashSquare className="cont"/>
                </ProductMinusBtn>
                <Productcount>{quantity}</Productcount>
                <ProductPlusBtn type="button" onClick={onIncrementQuantity}>
                    <BsPlusSquare className="cont" />
                </ProductPlusBtn>
                
            </ProductAboutBtncont>
            <ProductAboutBtn type="button" onClick={onAddtocart}>ADD TO CART</ProductAboutBtn>
        </ProductAboutcont>
    )
}

export default ProductDetailsAbout