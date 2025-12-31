import styled from "styled-components";


export const Homemain = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:70px;
    align-items:center;
    padding:50px;

    @media(max-width:576px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        padding:30px;
        text-align:center;
    }
`
export const HomeContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:20px;
`
export const Homehead = styled.h1`
    font-family:'Roboto', sans-serif;
    font-size:45px;
    font-weight:bold;
    color:#000000;
    max-width:560px;
    margin:0px;
    line-height:1.3;
`

export const Homepara = styled.p`
    font-family:sans serif;
    font-size:20px;
    color:#64748b;
    line-height:2;
`
export const Homeimg = styled.img`
    height:300px;
    width:250px;
    border-radius:10px;
    align-self:center;
    @media(min-width:577px){
        display:none;
    }
`
export const Homebtn = styled.button`
    height:40px;
    width:120px;
    border-radius:5px;
    border:0px;
    background-color:#08c4be;
    color:#000000;
    font-size:18px;
    font-weight:bold;
    color:#ffffff;
`
export const Homedimg = styled.img`
    width:40%;
    border-radius:10px;
    @media(max-width:576px){
        display:none;
    }
`