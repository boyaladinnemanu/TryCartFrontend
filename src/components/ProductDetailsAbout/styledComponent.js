import styled from 'styled-components'

export const ProductAboutcont=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`
export const ProductAboutname = styled.h1`
    font-family:"Roboto",sans serif;
    font-size:40px;
    font-weight:bold;
    margin-top:0px;
`
export const ProductAboutprice = styled.p`
    font-family:"Roboto",sans serif;
    font-size:20px;
    font-weight:bold;
    margin-top:0px;
`
export const ProductAboutRatingcont= styled.div`
    display:flex;
    flex-directin:row;
    justify-content:center;
    align-items:center;
    gap:10px;
`
export const ProductAboutRating= styled.p`
    height:25px;
    width:70px;
    display:flex;
    border-radius:5px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    font-family:"Roboto",sans serif;
    font-size:20px;
    background-color:#45a5d9;
`
export const ProductAboutreview = styled.p`
    font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:300;
`
export const ProductAboutDesc = styled.p`
    font-family:"Roboto",sans serif;
    font-size:20px;
    font-weight:350;
    margin-top:0px;
    line-height:2;
`
export const ProductAboutAvail= styled.h1`
    font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:200;
    margin-top:0px;
`
export const ProductAboutbrand = styled.h1`
    font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:200;
    margin-top:0px;
`

export const ProductAboutspan = styled.span`
    font-family:"Roboto",sans serif;
    font-size:20px;
    font-weight:bold;
    margin-top:0px;
`
export const ProductAboutline = styled.hr`
    width:100%;
    border:1px solid #000000;
`
export const ProductAboutBtn = styled.button`
    height:40px;
    width:130px;
    border-radius:10px;
    background-color:#45a5d9;
    border:0px;
    color:#ffffff;
`
export const ProductAboutBtncont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:150px;
    align-items:center;
`
export const ProductPlusBtn = styled.button`
    background-color:transparent;
    height:30px;
    width:30px;
    border:0px;
    padding:0px;
    .cont{
        font-size:30px;
        margin:0px;
    }
`
export const ProductMinusBtn = styled.button`
     background-color:transparent;
     height:30px;
     width:30px;
     padding:0px;
    border:0px;
     .cont{
     font-size:30px;
     }
`
export const Productcount = styled.p`
    font-family:"Roboto",sans serif;
    font-weight:300;
    font-size:30px;
    display:flex;
    flex-direction:row;
    justify-content:center;
`