import styled from 'styled-components'

export const Checkoutmain = styled.div`
    align-self:flex-end;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
     @media(max-width:576px){
        align-self:flex-start;
    }

`
export const Checkoutcont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:20px;
`
export const Checkoutbtn = styled.button`
    height:40px;
    width:120px;
    font-family:"Roboto",sans serif;
    font-size:20px;
    border-radius:10px;
    cursor:pointer;
    background-color:#45a5d9;
    color:#ffffff;
    margin-top:15px;
    align-self:center;
    border:0px;
    @media(max-width:576px){
        font-size:10px;
        height:30px;
        width:90px;
    }
`
export const Checkouth1 = styled.h1`
    font-family:"Roboto",sans serif;
    font-size:30px;
    margin-bottom:0px;
    font-weight:bold;
    color:#000000;
    @media(max-width:576px){
        font-size:15px;
    }
`
export const Checkoutp = styled.p`
    font-family:"Roboto",sans serif;
    font-size:20px;
    margin-bottom:0px;
    font-weight:300;
    color:#000000;
    @media(max-width:576px){
        font-size:15px;
    }
`
export const Checkoutspan = styled.span`
    font-family:"Roboto",sans serif;
    font-size:30px;
    font-weight:300;
    color:#000000;
    @media(max-width:576px){
        font-size:15px;
    }
`