import styled from 'styled-components'
import { PiMagnifyingGlassThin } from "react-icons/pi";

export const Allproductsmain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:space-between;
`

export const AllproductsH = styled.h1`
    font-family:roboto,"sans serif";
    font-weight:bold;
    font-size:30px;
    color:#000000;
`
export const Allproductsul = styled.ul`
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
export const AllproductsCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const SearchInput = styled.input`
        height:40px;
        border-radius:20px;
        font-family:"Roboto",sans serif;
        padding:0px 10px 0px 30px;
        border:0px;
        width:90%;
        outline:none;
`
export const SearchCont = styled.div`
    position:relative;
    width:400px;
    height:40px;
    border-radius:20px;
    border:0px;
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.3);
`
export const SearchIcon = styled(PiMagnifyingGlassThin)`
   position: absolute;
   top: 50%;
   right: 10px; /* or whatever spacing you want from the right edge */
   transform: translateY(-50%);
   color: gray;
`
export const FiltersCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
    padding:20px;
`
export const Categoryul= styled.ul`
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    
    gap:15px;
    align-items:center;
`
export const Categoryli = styled.li`
    height:20px;
    padding:10px;
    border:0px;
    box-shadow: 1px 2px 4px 1px rgba(0,0,0,0.3);
    border-radius:20px;
    background-color:${props=>props.selected?"#95d0ec":""};
    color:${props=>props.selected?"#ffffff":"#000000"};
    cursor:pointer;
`
export const Categoryinput = styled.input`
    display:none;
`
export const Categorylabel = styled.label`
    background-color:transparent;
    margin:0px;
    font-family:"Roboto",sans serif;
    font-size:15px;
    cursor:pointer;
`
export const Clearbtn = styled.button`
    background-color:transparent;
    border:0px;
    font-family:"Roboto",sans serif;
    font-size:15px;
    cursor:pointer;
`