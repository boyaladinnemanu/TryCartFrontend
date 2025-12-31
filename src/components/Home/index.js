import Header from "../Header"
import {useNavigate} from 'react-router-dom'
import {Homemain,HomeContent,Homehead,Homeimg,Homepara,Homebtn,Homedimg} from './styledComponent'

const Home=()=>{
    const navigate = useNavigate()
    return(
        <>
        <Header/>
        <Homemain>
            <HomeContent>
                <Homehead>Try On the Style That Speaks for You</Homehead>
                <Homeimg
                    src="https://img.freepik.com/premium-vector/optical-shop-illustration-design-concept-websites-landing-pages-mobile-applications-other_108061-899.jpg?uid=R196432016&semt=ais_hybrid&w=740"
                    alt="dresses to be noticed"
                    className="home-mobile-img"
                />
                <Homepara className="home-description">
                Eyewear is more than vision it's an extension of who you are. 
                Frames have always reflected the spirit of their time, and today, 
                we're witnessing a revolution in how we see and are seen. 
                Your glasses speak before you do — make them say something bold. 
                Embrace the season’s freshest styles and explore them virtually, your way.
                </Homepara>

                
                    <Homebtn type="button" className="shop-now-button" 
                    onClick={()=>navigate("/products")}
                    >
                    Shop Now
                    </Homebtn>
                
            </HomeContent>
            <Homedimg
            src="https://img.freepik.com/premium-vector/optical-shop-illustration-design-concept-websites-landing-pages-mobile-applications-other_108061-899.jpg?uid=R196432016&semt=ais_hybrid&w=740"
            alt="dresses to be noticed"
            className="home-desktop-img"
            />
        </Homemain>
        </>
    )
}

export default Home