import { useContext } from "react"
import { useState,useEffect } from "react"
import Cookies from 'js-cookie'
import Header from "../Header"
import Profilesidebar from "../Profilesidebar "
import axios from 'axios'
import { LuSave } from "react-icons/lu";
import Usercontext from "../../Context/Usercontext"
import { ProfilepageCont,
    Loadingcont,ProfilepageMain,Profileformcont,
    Profilegreet,ProfiledetailsCont,Profileinput,
    ProfileLabel,ProfilegenderdetailsCont,Gendercont,OrderspageMain,ProfileRadio,Profileusergender,ProfileTextarea,Profileh1,Profileform,Profilesave} from "./styledComponent"
import Myorders from "../Myorders"
import Myfavorites from '../Myfavorites'
import Mywishlist from "../Mywishlist"

const Status = {
    form: "MY_PROFILE",
    myorders: "MY_ORDERS",
    myfavorites:"MY_FAVORITES",
    mywishlist:"MY_WISHLIST"
  };

const Profile = ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const [username,setUsername]=useState(user?.Name||"")
    const [activetab, setActivetab] = useState(Status.form);
    const[phone,setUsercontact] = useState(user?.phone||"")
    const[dob,setUserdob]=useState(user?.dob? new Date(user.dob).toISOString().split('T')[0]:"")
    const[gender,setUsergender]=useState(user?.gender||"")
    const[address,setUseraddress]=useState(user?.address||"")
    const{getUser,profileupdate} = useContext(Usercontext)
    const [showLoader, setShowLoader] = useState(true)
    
    console.log(user)

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setShowLoader(false)
    //   }, 3000)
  
    //   return () => clearTimeout(timer)
    // }, [])

        // if (user) {
        //   setUsername(user.Name)
        //   setUsercontact(user.phone)
        //   setUserdob(user.dob)
        //   setUsergender(user.gender)
        //   setUseraddress(user.address)
        //   console.log("useeffect working")
        // }
      
  
    // if (!user || showLoader) {
    //     return(
    //     <Loadingcont>
    //         <BounceLoader size={50} color="#4a9af0"/>
    //     </Loadingcont>
    //     )
    // }
   
    const handelusername=(e)=>{
        setUsername(e.target.value)
    }
    const handelusercontact=(e)=>{
        setUsercontact(e.target.value)
    }
    const handeluserdob=(e)=>{
        setUserdob(e.target.value)
    }
    const handelusergender=(e)=>{
        setUsergender(e.target.value)
    }
    const handeluseraddress=(e)=>{
        setUseraddress(e.target.value)
        console.log(e.target.value)
    }
    const renderusername=()=>(
        <ProfiledetailsCont>
            <>
            <ProfileLabel htmlFor="name">Username</ProfileLabel>
            <Profileinput id="name" value={username} type="text" placeholder="ManojBoyaladinne" onChange={handelusername} required/>
            </>
        </ProfiledetailsCont>
    )
    const renderuserEmail=()=>(
        <ProfiledetailsCont>
            <>
            <ProfileLabel htmlFor="email">Email</ProfileLabel>
            <Profileinput id="email" value={user.Email} type="email" placeholder="example@gmail.com" required readOnly/>
            </>
        </ProfiledetailsCont>
    )
    const renderusercontact=()=>(
        <ProfiledetailsCont>
            <>
            <ProfileLabel htmlFor="phone">Contact No</ProfileLabel>
            <Profileinput id="phone" value={phone} type="phone" placeholder="987654321" onChange={handelusercontact} required/>
            </>
        </ProfiledetailsCont>
    )
    const renderuserDoB=()=>(
        <ProfiledetailsCont>
            <>
            <ProfileLabel htmlFor="DOB">DOB</ProfileLabel>
            <Profileinput id="DOB" value={dob} type="date"  onChange={handeluserdob} required/>
            </>
        </ProfiledetailsCont>
    )
    const renderusergender = () => (
        <ProfilegenderdetailsCont>
          <Profileh1>Gender</Profileh1>
          <Profileusergender >
            <Gendercont>
              <ProfileRadio
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handelusergender}
              />
              <ProfileLabel htmlFor="male">Male</ProfileLabel>
            </Gendercont>
            <Gendercont>
              <ProfileRadio
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handelusergender}
              />
              <ProfileLabel htmlFor="female">Female</ProfileLabel>
            </Gendercont>
          </Profileusergender>
        </ProfilegenderdetailsCont>
      );
      
    const renderuserAddress =()=>(
        <ProfiledetailsCont>
            <>
            <ProfileLabel htmlFor="address">Address</ProfileLabel>
            <ProfileTextarea
                id="address"
                value={address}
                onChange={handeluseraddress}
                placeholder="Enter your full address"
                required
            />
            </>
        </ProfiledetailsCont>

    )

    const renderprofileform=()=>(
        <>
        <Profilegreet>👋 Hello {user.Name}, hope you're having a great day!</Profilegreet>
        <Profileformcont onSubmit={handelsubmitform}>
            <Profileform>
                {renderusername()}
                {renderuserEmail()}
                {renderusercontact()}
                {renderuserDoB()}
                {renderusergender()}
                {renderuserAddress()}
            </Profileform>
            <Profilesave type="submit">
                <LuSave  size={20} />
            </Profilesave>
        </Profileformcont>
    </>
    )

    
    const handelsubmitform = async (e)=>{
        e.preventDefault()
        const data = {Name:username,phone,dob,address,gender,avatar:user.avatar}
        await profileupdate(data)
    }

    const renderswitchfun=()=>{
        switch(activetab){
            case Status.form:
                return renderprofileform()
            case Status.myorders:
                return <Myorders/>
            case Status.myfavorites:
                return <Myfavorites/>
            case Status.mywishlist:
                return <Mywishlist/>
            default:
                return null
        }
    }
     return(
        <>
            <Header/>
            <ProfilepageCont>
            <Profilesidebar activetab={activetab} setActivetab={setActivetab} />
            <ProfilepageMain>
                {renderswitchfun()}
            </ProfilepageMain>
            </ProfilepageCont>
        </>
    )
}

export default Profile