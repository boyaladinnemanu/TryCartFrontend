import React,{useState} from 'react'
import Cookies from 'js-cookie'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import { useContext } from 'react'
import Usercontext from "../../Context/Usercontext"
import { LoginInputcont,LoginLabel,LoginInput,Mainlogincont,Loginsideimg,Loginformcont,Loginform ,LoginCustbtn} from './styledComponent'
import axios from 'axios'

import "./index.css"

const LoginForm = ()=>{

    const [username,setUserName] = useState("")
    const [password,setUserPassword] = useState("")
    const [error,setError]= useState("")
    const { setUser, getUser } = useContext(Usercontext)

    const navigate = useNavigate()

    const JwtToken = Cookies.get("jwtToken")
    if(JwtToken){
        return <Navigate to="/" />
    }

    const changeusername=(e)=>{
        setUserName(e.target.value)
    }

    const changeuserpassword=(e)=>{
        setUserPassword(e.target.value)
    }

    const renderuserInput = ()=>(
        <LoginInputcont>
            <LoginLabel htmlFor="username">UserName</LoginLabel>
            <LoginInput 
            id="username" 
            type="text"
            value={username} 
            placeholder="Enter username" 
            onChange={changeusername}
            />
        </LoginInputcont>
    )

    const renderpasswordInput = ()=>(
        <LoginInputcont>
            <LoginLabel htmlFor="userpassword">Password</LoginLabel>
            <LoginInput 
            id="userpassword" 
            value={password} 
            type="password"
            placeholder="Enter password" 
            onChange={changeuserpassword}
            />
            {error&&<p className='error'>{error}</p>}
        </LoginInputcont>
    )

    const loginSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:8000/login",{username,password});
            const jwttoken = await response.data.Jwt_Token
            Cookies.set("jwtToken",jwttoken,{expires:30})
            await getUser()
            setUserName('')
            setUserPassword('')
            navigate("/",{replace:true})
            
        }catch(e){
            if(e.response&&e.response.data&&e.response.data.msg){
                setError(e.response.data.msg)
            }else{
                setError("somthing went wrong")
            }
        }
    }

    return(
        <Mainlogincont>
            <Loginsideimg src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740" 
            alt="loginimg"/>
            <Loginformcont>
                <Loginform onSubmit={loginSubmit}>
                    <h1 className='heading'>TryCart</h1>
                    {renderuserInput()}
                    {renderpasswordInput()}
                    <LoginCustbtn type="submit">Login</LoginCustbtn>
                    <h1 className="createaccountlink">
                    <Link to="/register" className='link'>Create Account</Link>
                    </h1>
                </Loginform>
            </Loginformcont>
        </Mainlogincont>
    )
}

export default LoginForm