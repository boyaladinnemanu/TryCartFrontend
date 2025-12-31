import { useState, useEffect ,useContext} from "react";
import Cookies from 'js-cookie';
import ProductsCard from "../ProductsCard";
import {Myfavcont} from './styledComponent'
import Usercontext from "../../Context/Usercontext";
import axios from 'axios';

const Myfavorites = () => {
    const users = JSON.parse(localStorage.getItem('user')) || {};
    console.log(users,".....fav......")
    const [FavList, setFavlist] = useState([]);
    const {userfav,getUsermust,getUser,user} = useContext(Usercontext)
    const Ids = user.favorites || [];
    const[count,setcount]=useState(0)
    console.log(userfav,"....userfav.....................")
    console.log(user,"....user.....................")

    useEffect(() => {
        if (userfav.length >= 0) { // only call if favorites exist
            getingdata();
        }
    }, [user]);

    const getingdata = async () => {
        try {
            const jwtToken = Cookies.get("jwtToken");
            const response = await axios.post(
                "http://localhost:8000/addproduct/favorites",
                { Ids },
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                }
            );
            if (response.status === 200) {
                console.log("fav..........")
                const updatedlist = response.data.favproducts.map(each=>({
                    title:each.title,
                    id:each._id,
                    price:each.price,
                    availability:each.availability,
                    brand:each.brand,
                    category:each.category,
                    color:each.color,
                    description:each.description,
                    imageUrls:each.image_urls,
                    isPrime:each.is_prime,
                    productId:each.product_id,
                    rating:each.rating,
                    shape:each.shape,
                    similarProducts:each.similar_products,
                    totalReviews:each.total_reviews,
                }))
                setFavlist(updatedlist);
                console.log(updatedlist,"...resfav....");
            }
        } catch (err) {
            console.log(err);
        }
    };
    console.log(FavList,"....check....")
    return (
        <>
            <h1>My Favorites</h1>
            <Myfavcont>
                {FavList.length > 0 ? (
                    FavList.map((each) => (
                        <ProductsCard key={each.id} Productdata={each} isfavorite="true" />
                        
                    ))
                ) : (
                    <p>No favorites found</p>
                )}
            </Myfavcont>
        </>
    );
};

export default Myfavorites;
