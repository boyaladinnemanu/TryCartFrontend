import { useState,useEffect,useContext } from "react";
import Cookies from "js-cookie";
import {AllproductsH,Allproductsul,Allproductsmain,AllproductsCont,SearchInput,SearchIcon,SearchCont,Categoryul,Categoryli,Categoryinput,Categorylabel,FiltersCont,Clearbtn} from "./styledComponent"
import ProductsCard from '../ProductsCard';
import Usercontext from "../../Context/Usercontext";
import { useLocation } from 'react-router-dom';

import axios from 'axios'

import "./index.css";

const prices = [
    { id: "below-500", name: "Below ₹500", min: 0, max: 499 },
    { id: "500-1000", name: "₹500 - ₹1000", min: 500, max: 1000 },
    { id: "1000-1500", name: "₹1000 - ₹1500", min: 1000, max: 1500 },
    { id: "1500-2000", name: "₹1500 - ₹2000", min: 1500, max: 2000 },
    { id: "above-2000", name: "Above ₹2000", min: 2001 }
  ];

  const ratings = [
    { id: "above-3.5", name: "Above 3.5☆", min: 3.5 },
    { id: "above-4", name: "Above 4☆", min: 4 },
    { id: "above-4.5", name: "Above 4.5☆", min: 4.5 },
    { id: "5", name: "5☆", min: 5 }
  ];

  const categories = [
    { id: "Sunglasses", name: "Sunglasses" },
    { id: "Eyeglasses", name: "Eyeglasses" }
  ];

  const colors = [
    { id: "red", name: "Red" },
    { id: "white", name: "White" },
    { id: "black", name: "Black" },
    { id: "pink", name: "Pink" }
  ];
  

const Allproducts = () => {
  const [ProductsList,setProductList] = useState([])
  const [Activecategory,setActivecategory] = useState('')
  const [Activecolor,setActivecolor] = useState('')
  const [Activeprice,setActiveprice] = useState('')
  const [Activerating,setActiverating] = useState('')
  const [Activeinput,setActivesearchinput] = useState('')
  const [favorite,setFavoriteslist] = useState([])
  // const location = useLocation();
  const {profileupdate,userfav=[],setuserfav} = useContext(Usercontext)
  console.log(userfav,"...................")
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user && user.favorites) {
  //     setFavoriteslist(user.favorites); // Set the favorites from localStorage
  //   }
  // }, []);
  


  useEffect(()=>{

        const jwtToken = Cookies.get("jwtToken")

        let priceObj = prices.find((p) => p.id === Activeprice);
        let ratingObj = ratings.find((r) => r.id === Activerating);

        const formatedData=async ()=>{
            try{
                const response = await axios.get("http://localhost:8000/addproduct",{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                },
                params: {
                    category: Activecategory,
                    color: Activecolor,
                    searchq: Activeinput,
                    min_price: priceObj?.min,
                    max_price: priceObj?.max,
                    min_rating: ratingObj?.min,
                  },
                });

                const updatedlist = response.data.map(each=>({
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

                setProductList(updatedlist)

            }catch(err){
                console.log("error:",err)
            }
        }

        formatedData()
  },[Activecategory,Activecolor,Activeinput,Activeprice,Activerating])

  
  

  const handelAcategory=(value)=>{
    setActivecategory(value)
  }
  const handelAcolor=(value)=>{
    setActivecolor(value)
  }
  const handelAprice=(value)=>{
    setActiveprice(value)
  }
  const handelArating=(value)=>{
    setActiverating(value)
  }
  const handelsearchinput=(e)=>{
    setActivesearchinput(e.target.value)
  }
  const handelclearfilters=()=>{
    setActivecategory("")
    setActivecolor("")
    setActiveprice("")
    setActiverating("")
    setActivesearchinput("")
  }

  // const setFavlist = (id) => {
  //   setFavoriteslist(favorite => {
  //     const updatedFavorites = favorite.includes(id)
  //       ? favorite.filter(each => each !== id)
  //       : [...favorite, id];
  
  //     // Update localStorage with the new favorites list
  //     profileupdate({favorites:updatedFavorites});
  //     // getUser()
  
  //     return updatedFavorites;
  //   });
  // };
  
// console.log(favorite)
  return(
    <Allproductsmain>
        <AllproductsCont>
            <AllproductsH>Allproducts</AllproductsH>
            <SearchCont>
                <SearchInput type="Search" placeholder="Search" value={Activeinput} onChange={handelsearchinput}/>
                <SearchIcon size={25}/>
            </SearchCont>
        </AllproductsCont>
        <FiltersCont>
            <Categoryul>
                {categories.map(each=>
                    <Categoryli key={each.id} selected={Activecategory === each.id} value={Activecategory} onClick={()=>handelAcategory(each.id)}>
                        <Categoryinput id={each.id} type="radio"/>
                        <Categorylabel htmlFor={each.id}>{each.name}</Categorylabel>
                    </Categoryli>)}
            </Categoryul>
            <Categoryul>
                {colors.map(each=>
                    <Categoryli key={each.id} selected={Activecolor === each.id} onClick={()=>handelAcolor(each.id)}>
                        <Categoryinput id={each.id} type="radio"/>
                        <Categorylabel htmlFor={each.id}>{each.name}</Categorylabel>
                    </Categoryli>)}
            </Categoryul>
            <Categoryul>
                {prices.map(each=>
                    <Categoryli key={each.id} selected={Activeprice === each.id} onClick={()=>handelAprice(each.id)}>
                        <Categoryinput id={each.id} type="radio"/>
                        <Categorylabel htmlFor={each.id}>{each.name}</Categorylabel>
                    </Categoryli>)}
            </Categoryul>
            <Categoryul>
                {ratings.map(each=>
                    <Categoryli key={each.id} selected={Activerating === each.id} onClick={()=>handelArating(each.id)}>
                        <Categoryinput id={each.id} type="radio"/>
                        <Categorylabel htmlFor={each.id}>{each.name}</Categorylabel>
                    </Categoryli>)}
            </Categoryul>
            <Categoryul>
                <Categoryli>
                    <Clearbtn type="button" onClick={handelclearfilters}>Clear</Clearbtn>
                </Categoryli>
            </Categoryul>
        </FiltersCont>
        <Allproductsul>
            {ProductsList.map(each=>
                <ProductsCard key={each.id} Productdata={each} isfavorite={userfav.includes(each.id)} />
            )}
        </Allproductsul>
    </Allproductsmain>
  )

}

export default Allproducts;