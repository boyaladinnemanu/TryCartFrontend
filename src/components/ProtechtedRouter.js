import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

const ProtechtedRouter =({children})=>{
    const JwtToken = Cookies.get("jwtToken")
    if(JwtToken===undefined){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtechtedRouter