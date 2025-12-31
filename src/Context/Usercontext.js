import React from 'react'

const Usercontext = React.createContext({
    user:null,
    setUser:()=>{},
    Logout:()=>{},
})

export default Usercontext