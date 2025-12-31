import styled from 'styled-components'

export const HeaderCont = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#FAFAFA;
    box-shadow:0px 5px 5px 0px #00000;
    padding:5px 25px 5px 25px;
    border:1px solid #aeb8c7;
`
export const Navbar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${props=>props.menu?"#e6f6ff":""};
    padding:${props=>props.menu?"15px":"0px"};
    @media(min-width:577px){
        display:${props=>props.menu?"none":"flex"};
    }
`
export const Navimg = styled.img`
    width:100%;
`

export const Logo=styled.h1`
    font-family:roboto;
    font-size:35px;
    font-weight:bold;
    color:#000000;
`
export const MenuCont = styled.ul`
    display:none;
    @media (min-width:577px){
        list-style-type:none;
        margin-left:0px;
        padding-left:0px;
        font-family:sans serif;
        font-size:20px;
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:15px;
        color:#475569;
    }
`
export const LogoutBtn = styled.button`
    
    height:35px;
    width:100px;
    background-color:#45a5d9;
    color:#FAFAFA;
    font-family:sans serif;
    font-size:15px;
    font-weight:bold;
    border:0px;
    border-radius:5px;

    @media (max-width:576px){
        display:none;
    }
`

export const LogoutBtnMobile = styled.button`
    
    height:35px;
    width:35px;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:0px;

    @media (min-width:577px){
        display:none;
    }
`

export const Logoutimg = styled.img`
    width:100%;
`

export const MenuContMobile = styled.ul`
    display:none;

    @media(max-width:576px){
        list-style-type:none;
        margin-left:0px;
        padding-left:0px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width:100%;
    }
`

export const Mobileli = styled.li`
    height:30px;
    width:30px;
    margin:0px;
    border:0px;
`
export const Logobtn = styled.button`
    background-color:transparent;
    border:0px;
    cursor:pointer;
`
export const Profilecont = styled.div`
    height:35px;
    width:35px;
    border-radius:50%;
    border:0px;
    background-color:#202020;
    cursor:pointer;
`
export const Profileimg = styled.img`
    width:100%;
    object-fit:content;
    border-radius:50%;
    cursor:pointer;
`
export const Loadingcont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
`
export const Countcont = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:10px;
    position:relative;
`
export const Countp = styled.p`
    font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:300;
    border-radius:50%;
    display:flex;
    padding:2px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:20px;
    hight:15px;
    color:#000000;
    background-color:#f2c0b1;
`