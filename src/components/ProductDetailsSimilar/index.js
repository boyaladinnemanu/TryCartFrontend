import {useEffect,useState,useContext} from 'react'
import Cookies from 'js-cookie'
import ProductsCard from '../ProductsCard';
import Usercontext from '../../Context/Usercontext';
import{Similarproductsul,Similarproducth1} from './styledComponent'
import axios from 'axios'

const ProductDetailsSimilar =(props)=>{
    const[productsList,setproductsList] = useState([])
    const{userfav=[]}= useContext(Usercontext)
    const {product} = props
    const{similarProducts}=product
    
    useEffect(() => {
        if (product && product.similarProducts && product.similarProducts.length > 0) {
            similarProductsfun();
        }
    }, [product]); // rerun when product updates
    
    const similarProductsfun = async () => {
        try {
            const jwtToken = Cookies.get("jwtToken");
            console.log(product, "....1");
            const response = await axios.post("https://try-cartbackend.vercel.app/addproduct/similarproducts", 
                { productIds: product.similarProducts }, 
                { headers: { Authorization: `Bearer ${jwtToken}` } }
            );
            if (response.status === 200) {
                const updatedlist = response.data.similarproducts.map(each => ({
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
                    rating: each.rating,
                    shape: each.shape,
                    similarProducts: each.similar_products,
                    totalReviews: each.total_reviews,
                }));
                setproductsList(updatedlist);
            }
        } catch (err) {
            const errmsg = err?.response?.data?.msg || "something went wrong";
            console.log(errmsg);
        }
    };
    
    console.log(productsList)

    return(
        <>
            <Similarproducth1>Similar Products</Similarproducth1>
            <Similarproductsul>
                {productsList.map(each=>
                    <ProductsCard key={each.id} Productdata={each} isfavorite={userfav.includes(each.id)}/>
                )}
            </Similarproductsul>
        </>
    )
}

export default ProductDetailsSimilar
