import { useState } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';
import {
  RegisterMainCont,
  RegistorSubCont,
  RegistorForm,
  RegisterInputCont,
  RegisterInputField,
  RegisterImage,
  RegisterUl,
  RegisterLi,
  Custbtncont,
  Custbtn
} from './styledComponent';
import { FiUser } from "react-icons/fi";
import { FcOk } from "react-icons/fc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgPassword } from "react-icons/cg";
import { Link,useNavigate ,Navigate} from 'react-router-dom';
import './index.css';


const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const [passwordView,setPasswordview] = useState(false);
  const [RepasswordView,setRePasswordview] = useState(false);
  const [error,setError] = useState("");
  const navigate = useNavigate()

  const JwtToken = Cookies.get("jwtToken")
    if(JwtToken){
        return <Navigate to="/" />
    }

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUseremailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserpasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleUserRepasswordChange = (e) => {
    setUserRePassword(e.target.value);
  };

  const isemailValid = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email);
  };

  const togglePasswordview = ()=>{
    setPasswordview(prev=>!prev);
  }

  const toggleRePasswordview = ()=>{
    setRePasswordview(prev=>!prev);
  }

  const isvalidPassword = (Password)=>{
    if(!Password){
        return{
        isvalidPassword:false,
        haslowerandhigher:false,
        hasnumberorsymbol:false
        }
    }
    return{
        isvaledlength: Password.length >= 8,
        haslowerandhigher: /[a-z]/.test(Password) && /[A-Z]/.test(Password),
        hasnumberorsymbol:/[\d@#$%^&*]/.test(Password)
    };

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("https://try-cartbackend.vercel.app/register",{userName,userEmail,userPassword});
      alert(response.data.msg)
      navigate("/login",{replace:true})
    }catch(err){
      if(err.response){
        setError(err.response.data.msg)
      }else{
        setError("Somthing went Wrong")
      }
    }
  };

  const { isvaledlength, haslowerandhigher, hasnumberorsymbol } = isvalidPassword(userPassword);
  const acceptPass = isvaledlength&&haslowerandhigher&&hasnumberorsymbol
  const correctPass = userPassword === userRePassword 

  return (
    <RegisterMainCont>
      <RegisterImage
        src="https://img.freepik.com/free-vector/resume-concept-illustration_114360-103.jpg?semt=ais_hybrid&w=740"
        alt="RegisterImage"
      />
      <RegistorSubCont>
        <h1 className="smallheading">
          Already a member? <Link to="/login">Sign in</Link>
        </h1>
        <RegistorForm onSubmit={handleSubmit}>
          <h1 className="mainHeading">Sign Up</h1>
          <p className="para">Secure your try-on experience with TryCart</p>

          <RegisterInputCont>
            <FiUser className="icons"/>
            <RegisterInputField
              type="text"
              placeholder="Username"
              value={userName}
              onChange={handleUsernameChange}
              required
            />
            {userName.length > 1 && <FcOk className="icons"/>}
          </RegisterInputCont>
          <RegisterInputCont>
            <MdOutlineMarkEmailRead className="icons"/>
            <RegisterInputField
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={handleUseremailChange}
              required
            />
            {isemailValid(userEmail) && <FcOk className="icons"/>}
          </RegisterInputCont>
          <RegisterInputCont>
            <CgPassword className="icons"/>
            <RegisterInputField
              type={passwordView?"text":"password"}
              placeholder="Password"
              value={userPassword}
              onChange={handleUserpasswordChange}
              required
            />
            {passwordView?<FaEye className={acceptPass?"eyeicons":"icon"} onClick={togglePasswordview}/>:<FaEyeSlash className={acceptPass?"eyeicons":"icon"} onClick={togglePasswordview}/>}
            
          </RegisterInputCont>
          {!acceptPass &&<RegisterUl>
            <RegisterLi Ok={isvaledlength}>Least 8 Characters</RegisterLi>
            <RegisterLi Ok={hasnumberorsymbol}>Least one number or symbol</RegisterLi>
            <RegisterLi Ok={haslowerandhigher}>Lowercase(a-z) and uppercase(A-Z)</RegisterLi>
          </RegisterUl>}
          <RegisterInputCont>
            <CgPassword className="icons"/>
            <RegisterInputField
              type={RepasswordView?"text":"password"}
              placeholder="Re-type Password"
              value={userRePassword}
              onChange={handleUserRepasswordChange}
              required
            />
            {RepasswordView?<FaEye className={correctPass?"eyeicons":"icon"} onClick={toggleRePasswordview}/>:<FaEyeSlash className={correctPass?"eyeicons":"icon"} onClick={toggleRePasswordview}/>}
            
          </RegisterInputCont>
          <p>{error}</p>
          <Custbtncont>
            <Custbtn type="submit" className="registerBtn">Sign Up</Custbtn>
          </Custbtncont>
        </RegistorForm>
      </RegistorSubCont>
    </RegisterMainCont>
  );
};

export default RegistrationForm;
