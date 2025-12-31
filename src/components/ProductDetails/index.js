import {useEffect,useState} from 'react'
import Cookies from 'js-cookie'
import {useParams} from 'react-router-dom'
import ProductDetailstemplates from '../ProductDetailstemplates'
import ProductDetailsAbout from '../ProductDetailsAbout'
import ProductDetailsSimilar from '../ProductDetailsSimilar'
import Header from '../Header'
import {Productdetailsaboutcont,Productdetailscont} from './styledComponent'
import axios from 'axios'
const ProductDetails =()=>{
    const {id} = useParams();
    const[ProductdetailsList,setProductdetailslist]= useState([])

    useEffect(()=>{
        fetchproductDetails()
    },[id])

    const fetchproductDetails= async ()=>{
        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.get(`https://try-cartbackend.vercel.app/addproduct/${id}`,{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            })
            if(response.status===200){
                console.log(response)
                const each = response.data.product
                const updatedlist = {
                    title: each.title,
                    id: each._id,
                    price: each.price,
                    availability: each.availability,
                    brand: each.brand,
                    category: each.category,
                    color: each.color,
                    description: each.description,
                    imageUrls: each.image_urls,
                    isPrime: each.is_prime,
                    productId: each.product_id,
                    transparentimgUrl:each.transparentimg_url,
                    rating: each.rating,
                    shape: each.shape,
                    similarProducts: each.similar_products,
                    totalReviews: each.total_reviews,
                  };
                setProductdetailslist(updatedlist)
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <Header/>
        <Productdetailscont>
            <ProductDetailstemplates product={ProductdetailsList}/>
            <ProductDetailsAbout product={ProductdetailsList}/>
        </Productdetailscont>
        <ProductDetailsSimilar product={ProductdetailsList} />
        </>
    )
}

export default ProductDetails
