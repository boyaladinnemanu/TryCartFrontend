import styled from 'styled-components'

export const Primeproductsul = styled.ul`
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:20px;
    align-items:center;
    flex-wrap:wrap;
`
export const Failurecont = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 5px #000000;
  display: flex;
  flex-direction: row;
  width:100%;
  height:60vh;
  align-items: center;
  justify-content:space-between;
  background-image: linear-gradient(45deg, #BADFFE, #DAEEFE);
  color: white;
  text-shadow: 1px 1px 2px #000;
`
export const FailureDiscountimg= styled.img`
    width:40%;
    border-radius:10px;
    height:100%;
    border-right:0px;
    border-top-right-radius:0px;
`
export const FailureDiscounttext= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:60%;
`

export const FailureH1= styled.h1`
    font-family:'Pacifico', cursive;
    font-size:50px;
    font-weight:bold;
    color:#F4A618;
    margin-bottom:0px;
`
export const Failurep= styled.p`
    font-family:'Pacifico', cursive;
    font-size:20px;
    font-weight:400;
    color:#D61B31;
    margin-top:0px;
`
export const Failurebutton = styled.button`
    height:40px;
    width:130px;
    font-family:'Pacifico', cursive;
    border-radius:10px;
    font-size:15px;
    background-color:#3568CD;
    color:#ffffff;
    border:0px;
    transition:all 0.3 ease;
    &:hover{
        background-color:#ffffff;
        color:#000000;
        transform:scale(1.05);
    }
`
export const ExclusiveDeals = styled.h1`
    font-family:roboto,"sans serif";
    font-weight:bold;
    font-size:30px;
    color:#000000;
    align-self:flex-start;
`
export const FailureLoadercont = styled.div`
  border:0px;
  display: flex;
  flex-direction: row;
  width:100%;
  height:60vh;
  align-items: center;
  justify-content:center;
`