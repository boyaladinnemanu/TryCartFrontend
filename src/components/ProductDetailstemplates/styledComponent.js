import styled from 'styled-components'

export const Productdetailsimgcont = styled.div`
    display: flex;
    flex-direction: row;
    width: 65%;
    padding:10px;
    justify-content: space-between;
    align-items: center; /* corrected */
    height: 80vh; /* ensure children inherit same height */
`

export const ProductTemplatescont = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; /* corrected */
    list-style-type: none;
    margin-left: 0px;
    gap:5px;
    padding:5px;
    padding-left: 0px;
    height: 100%; /* match parent height */
    width: 30%;
`

export const Productli = styled.li`
    height:100px;
    width:100px;
    background-color:#F6F6F5;
    border:${props=>props.active?"2px solid #45a5d9":"0px"};
    border-radius:5px;
`

export const ProductTemplateimg = styled.img`
    width: 100%;
    height:100%;
    border-radius:5px;
    cursor: pointer;
`

export const ProductimgCont = styled.div`
    height: 100%; /* match parent height */
    width: 100%;
    padding:5px;
    position:${props=>props.try?"":"relative"};
   background-color:#F6F6F5;
`

export const Productimg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; /* maintain aspect ratio */
`
export const Tryonicon = styled.div`
    position:absolute;
    top:10px;
    right:15px;
    color:gray;
    background-color:transparent;
    cursor:pointer;
    transition:transform 0.2s ease;

    &:hover{
        transform: scale(1.1);
        color:#45a5d9;
    }

    svg{
        height:25px;
        width:25px;
    }
`