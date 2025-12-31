import {useState,useEffect,useContext} from 'react' 
import {useNavigate,useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import Usercontext from '../../Context/Usercontext'
import axios from 'axios'
import {BounceLoader} from 'react-spinners'
import {Primeproductsul,FailureLoadercont,ExclusiveDeals,Failurecont,FailureH1,Failurep,Failurebutton,FailureDiscountimg,FailureDiscounttext} from "./styledComponent"
import ProductsCard from '../ProductsCard';



const actualstatus = {
    progress:"PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE",
    initial:"INITIAL"
}

const PrimeDeals =()=>{
    const [activestatus,setActivestatus] = useState(actualstatus.initial)
    const [PrimeDealsList,setPrimeDealsList] = useState([])
    const {userfav} = useContext(Usercontext)
    const navigate = useNavigate()
    const [IsPrimeUser,setIsprime] = useState(Cookies.get("primeuser"))
    const location = useLocation();

    useEffect(()=>{
        PrimeDealsfun()
    },[location]);

    const PrimeDealsfun = async ()=>{

        setActivestatus(actualstatus.progress)


        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.get("http://localhost:8000/addproduct/prime",{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }}
            )
            if(response.status===200){
                const updatedlist = response.data.products.map(each=>({
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
                setPrimeDealsList(updatedlist)
                setActivestatus(actualstatus.success)
                console.log("running..")
            }else{
                console.log("response error")
            }
        }catch(err){
            if(err.response && err.response.status===401){
                setActivestatus(actualstatus.failure)
                Cookies.set("primeuser","false")
                console.log("failure..")
            }else{
                console.log("Error:",err.message)
            }
        }
    }

    const renderSuccessView=()=>(
        <>
            <Primeproductsul>
                {PrimeDealsList.map(each=>
                    <ProductsCard key={each.id} Productdata={each} isfavorite={userfav.includes(each.id)}/>
                )}
            </Primeproductsul>
        </>
    )

    const renderFailureView=()=>(
        <Failurecont>
            <FailureDiscountimg src="https://img.freepik.com/premium-vector/man-shopping-online-with-mobile-smartphone_112255-863.jpg?uid=R196432016&semt=ais_hybrid&w=740" alt="Dicountimg"/>
            <FailureDiscounttext>
                <FailureH1>Become a Prime Member</FailureH1>
                <Failurep>Get exclusive discounts, early access, and more!</Failurep>
                <Failurebutton type="button" onClick={()=>navigate('/primeuser')}>Join Prime Now</Failurebutton>
            </FailureDiscounttext>
        </Failurecont>
    )

    const renderProgressView=()=>(
        <FailureLoadercont>
            <BounceLoader color="#4a9af0" size={50}/>
        </FailureLoadercont>
    )

    const renderSwitch=()=>{
        switch(activestatus){
            case actualstatus.success:
                return renderSuccessView()
            case actualstatus.failure:
                return renderFailureView()
            case actualstatus.progress:
                return renderProgressView()
            default:
                return null
        }
    }

    return(
        <>
            <ExclusiveDeals>Exclusive Prime Deals</ExclusiveDeals>
            {renderSwitch()}
        </>
        
    )
}

export default PrimeDeals