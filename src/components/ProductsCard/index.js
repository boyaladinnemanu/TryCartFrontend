import { useState, useEffect, useContext } from 'react';
import { ProductCardli, Hearticon,ProductCardimg, ProductName, Productbrand, Productreviewcont, Productprice, Productrating, Productratingcont } from "./styledComponent";
import { MdStarRate } from "react-icons/md";
import Cookies from 'js-cookie'
import { Link, useLocation } from 'react-router-dom';
import { GoHeart, GoHeartFill } from "react-icons/go";
import Usercontext from '../../Context/Usercontext';
import "./index.css";

const ProductsCard = (props) => {
    const { Productdata,isfavorite} = props;
    const { getUser,userfav,setuserfav } = useContext(Usercontext)
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user._id
    const { title, id, price, brand, rating, imageUrls } = Productdata;
    const jwtToken = Cookies.get('jwtToken')
    // const [isFavorite, setIsFavorite] = useState(isfavorite);
    // const [favorites, setFavorites] = useState([]);
   
   console.log(userfav,"context")

    // useEffect(() => {
    //     const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    //     setIsFavorite(favoritesFromStorage.includes(id));
    //   }, [id]);

    // Toggle the favorite status
    const toggleFavorite = (id) => {
        setuserfav((prevFavs) => {
            // Check if the id already exists in the favorites list
            if (prevFavs.includes(id)) {
                // If the id is already in the list, remove it
                return prevFavs.filter((favId) => favId !== id);
            } else {
                // Otherwise, add the id to the favorites list
                return [...prevFavs, id];
            }
        });
        // setfavlist(id)
      };

    return (
        <ProductCardli>
            <Link to={`/products/${id}`} className="link">
                <ProductCardimg src={imageUrls[0]} alt="mainproduct" />
                <ProductName>{title}</ProductName>
                <Productbrand>by {brand}</Productbrand>
                <Productreviewcont>
                    <Productprice>Rs {price}/-</Productprice>
                    <Productratingcont>
                        <Productrating>{rating}</Productrating>
                        <MdStarRate className="icon" />
                    </Productratingcont>
                </Productreviewcont>
            </Link>
            {/* Heart Icon to toggle favorite status */}
            <Hearticon onClick={()=>toggleFavorite(id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                {isfavorite ? (
                    <GoHeartFill size={25} color="red" />
                ) : (
                    <GoHeart size={25} color="gray" />
                )}
            </Hearticon>
        </ProductCardli>
    );
};

export default ProductsCard;
