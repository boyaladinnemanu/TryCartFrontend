import Usercontext from "./Usercontext";
import Cookies from 'js-cookie'
import { useState,useContext,useEffect } from "react";
import axios from "axios"

const UserProvider = ({children})=>{
    const[user,setUser]=useState(null)
    const userDataFromLocal = (() => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            return user || {};
        } catch (error) {
            return {};
        }
    })();
    
    const initialFavs = Array.isArray(userDataFromLocal.favorites) ? userDataFromLocal.favorites : [];
    const [userfav, setuserfav] = useState(initialFavs);
    

    const Logout =()=>{
        setUser(null)
        Cookies.remove("jwtToken")
        localStorage.setItem("favorites", JSON.stringify([]));
        localStorage.setItem('user', JSON.stringify([]));
        localStorage.setItem("CartList",JSON.stringify([]));
        setuserfav([]); 
    }
    const alertfun=()=>{
        const upUser = JSON.parse(localStorage.getItem("user"))
        alert(`${upUser.Name},Your data was saved successfully!`)
    }

    const getUser=async()=>{
        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.get("https://try-cartbackend.vercel.app/register/profile",{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            })
            if(response.status===200){
                setUser(response.data)
                localStorage.setItem("user", JSON.stringify(response.data))
                setuserfav(response.data.favorites);
                

            }
        }catch(err){
            console.log(err)
        }
    }

    const getUsermust=async()=>{
        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.get("https://try-cartbackend.vercel.app/register/profile",{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            })
            if(response.status===200){
                setUser(response.data)
                localStorage.setItem("user", JSON.stringify(response.data))
                
                

            }
        }catch(err){
            console.log(err)
        }
    }

    const profileupdate=async(data)=>{
        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.patch("https://try-cartbackend.vercel.app/register/profile",data,{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            });
            if(response.status===200){
                await getUser()
                await alertfun()
            }
        }catch(err){
            console.log(err)
        }
        
    }

    const favupdate=async(data)=>{
        try{
            const jwtToken = Cookies.get("jwtToken")
            const response = await axios.patch("https://try-cartbackend.vercel.app/register/profile",data,{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            });
            if(response.status===200){
                await getUsermust()
                console.log("ok")
            }
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(userfav));
        let data = JSON.parse(localStorage.getItem('favorites'))
        favupdate({favorites:data})
      }, [userfav]);

    

    useEffect(()=>{
        getUser()
    },[])

    return(
        <Usercontext.Provider value={{ user, setUser, Logout ,getUser,profileupdate,setuserfav,userfav,getUsermust}}>
            {children}
        </Usercontext.Provider>
    )
}

export default UserProvider
