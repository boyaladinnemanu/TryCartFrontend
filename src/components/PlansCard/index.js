import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { SiTicktick } from "react-icons/si";
import {PlansCardcont,Plansname,PlansDescription,PlansPrice,Planbtn,Plansbenefit,PlansBenefcont,Planscurrency} from "./styledComponent"

const PlansCard =(props)=>{
    const{Plans}=props
    const{id,name,price,description,benefits,tagColor}=Plans
    const navigate = useNavigate()
    
    const handelPlane = async()=>{
        try{
            const jwtToken = Cookies.get('jwtToken')
            const response = await axios.patch("http://localhost:8000/makeprime",
            {},
            {
                headers:{
                    Authorization:`Berear ${jwtToken}`
                }
            })
            if(response.status===200){
                alert(response.data.msg)
                navigate('/products')
            }
        }catch(err){
            alert(err)
        }
    }

    return(
        <PlansCardcont color={tagColor}>
            <Plansname>{name}</Plansname>
            <PlansDescription>{description}</PlansDescription>
            <PlansPrice><Planscurrency>{price[0]}</Planscurrency>{price.slice(1)}</PlansPrice>
            <Planbtn type="button" onClick={handelPlane}>Get Start</Planbtn>
            <PlansBenefcont>
                {benefits.map((each,index)=><Plansbenefit key={index}><SiTicktick /> {each}</Plansbenefit>)}
            </PlansBenefcont>
        </PlansCardcont>
    )
}

export default PlansCard