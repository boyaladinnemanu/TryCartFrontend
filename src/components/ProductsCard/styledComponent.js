import styled from 'styled-components'

export const ProductCardli = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:30%;
    position :relative;
    padding:10px;
`
export const ProductCardimg = styled.img`
    width:100%;
    border-radius:10px;
`
export const ProductName = styled.h1`
    font-family:roboto,"sans serif";
    font-size:20px;
    font-weight:bold;
    color:#000000;
    margin-bottom:0px;
`
export const Productbrand = styled.p`
    font-family:roboto,"sans serif";
    font-size:15px;
    font-weifht:400;
    color:#9eadad;
    margin-bottom:0px;
`
export const Productreviewcont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const Productprice = styled.p`
    font-family:roboto,"sans serif";
    font-size:15px;
    color:#000000;
    font-weight:400;
`
export const Productratingcont = styled.div`
    height:35px;
    width:60px;
    padding:0px 10px 0px 10px;
    border-radius:7px;
    background-color:#04b4db;
    font-family:roboto,"sans serif";
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const Productrating = styled.p`
    font-family:robot,"sans serif";
    font-size:17px;
    color:#ffffff;
    font-weight:300;
`
export const Hearticon = styled.div`
    position:absolute;
    top:20px;
    right:20px;
`