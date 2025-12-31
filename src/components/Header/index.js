import {Link,useNavigate} from "react-router-dom"
import {BounceLoader} from 'react-spinners'
import { useContext,useState,useEffect } from "react"
import Usercontext from "../../Context/Usercontext"
import Cartcontext from "../../Context/Cartcontext"
import {HeaderCont,Navbar,Countcont,Countp,Navimg,Logo,Logobtn,MenuCont,Loadingcont,Profilecont,Profileimg,LogoutBtn,Mobileli,Logoutimg,MenuContMobile,LogoutBtnMobile} from './styledComponent'
import './index.css'


const Header =()=>{
    const navigate = useNavigate()
    const {Logout} = useContext(Usercontext)
    const {cartList,removeAllCartItems} = useContext(Cartcontext)
    const [showLoader, setShowLoader] = useState(true)
    const user = localStorage.getItem("user")
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setShowLoader(false)
    //   }, 1000)
  
    //   return () => clearTimeout(timer)
    // }, [])
  
    // if (!user || showLoader) {
    //     return(
    //     <Loadingcont>
    //         <BounceLoader size={50} color="#4a9af0"/>
    //     </Loadingcont>
    //     )
    // }

    const {avatar} = JSON.parse(user)

    
    const onlogout=()=>{
        Logout()
        navigate("/login")
    }
    const handelprofile=()=>{
        navigate('/profile')
    }

    const cartlistcount = () => (
        (cartList.length > 0) ? (
            <Countcont>
                <p>Cart</p>
                <Countp>{cartList.length}</Countp>
            </Countcont>
        ) : (
            <>Cart</>
        )
    );
    
    
    return(
        <HeaderCont>
            <Navbar>
                <Logobtn type="button" onClick={()=>window.location.replace('/')}>
                    <Logo>TRyCart.</Logo>
                </Logobtn>
                <MenuCont>
                    <Link to="/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link to="/products" className="link">
                        <li>Products</li>
                    </Link>
                    <Link to="/cart" className="link">
                        <li>{cartlistcount()}</li>
                    </Link>
                    <LogoutBtn type="button" onClick={onlogout}>
                    Logout
                    </LogoutBtn>
                    <Profilecont onClick={handelprofile}>
                        <Profileimg src={avatar} alt="profile image"/>
                    </Profilecont>
                </MenuCont>
                
                <LogoutBtnMobile type="button" onClick={onlogout}>
                    <Logoutimg 
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="logout icon"
                    />
                </LogoutBtnMobile>
            </Navbar>
            <Navbar menu>
                <MenuContMobile>
                    <Link to="/" className="link">
                        <Mobileli>
                            <Navimg
                                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                                alt="nav home"
                            />
                        </Mobileli>
                    </Link>
                    <Link to="/products" className="link">
                        <Mobileli>
                            <Navimg
                                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                                alt="nav products"
                            />
                        </Mobileli>
                    </Link>
                    <Link to="/cart" className="link">
                        <Mobileli>
                            <Navimg
                                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                                alt="nav cart"
                            />
                        </Mobileli>
                    </Link>
                </MenuContMobile>
            </Navbar>

        </HeaderCont>
    )

}

export default Header