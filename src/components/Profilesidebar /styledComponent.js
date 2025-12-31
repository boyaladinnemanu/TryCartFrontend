import styled from 'styled-components'
import { FiEdit } from "react-icons/fi";

export const Profilesidebarcont = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:flex-start;
    align-items:center;
    gap:20px;
    background-color:#45a5d9;
    width:20%;
`
export const Userimgcont = styled.div`
    width:90%;
    border-radius:50%;
    border:0px;
    position:relative;
`

export const Userimg = styled.img`
    width:100%;
    object-fit:content:
    border-radius:50%;
    border-radius:50%;
`
export const Picedit = styled(FiEdit)`
    position:absolute;
    bottom:20px;
    right:30px;
    cursor:pointer;
    &:hover {
        color: #fff; /* Change color on hover */
        transform: scale(1.2); /* Slightly enlarge the icon on hover */
    }
`