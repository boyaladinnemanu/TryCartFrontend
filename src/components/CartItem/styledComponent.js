import styled from 'styled-components'

export const Cartitemli = styled.li`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  @media(max-width:576px){
      display: flex;
      flex-direction:row;
      gap:10px;
  }
`

export const Cartitemimg = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  object-fit: content;
   @media(max-width:576px){
      width:40%;
  }
`

export const CartitemDetailsCont = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:80%;
   @media(max-width:576px){
      width:50%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
  }
`

export const Cartitembrandcont = styled.div`
  display: flex;
  flex-direction: column;
  width:400px;
  justify-content:space-between;
   @media(max-width:576px){
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
  }
`

export const Cartitemp = styled.p`
  font-size: 14px;
  font-family:"Roboto",sans serif;
  color: #333;
  &:first-child {
    font-weight: bold;
    font-family:"Roboto",sans serif;
    font-size: 16px;
  }
     @media(max-width:576px){
      font-size: 8px;
      font-family:"Roboto",sans serif;
      color: #333;
      &:first-child {
        font-weight: bold;
        font-family:"Roboto",sans serif;
        font-size: 10px;
  }
  }
`

export const Cartitemquantitycont = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  width:100px;
  @media(max-width:576px){
      display: flex;
      width:80%;
      align-self:flex-start;
      justify-content:space-between;
  }
`

export const Cartitembtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left:0px;
  &:hover {
    transform: scale(1.1);
  }
`

export const Cartitempricecont = styled.div`
  display: flex;
  align-items: center;
  width:150px;
  @media(max-width:576px){
      width:100%;
      justify-content:flex-start;
  }
`

export const CartitemRbtn = styled.button`
  background-color: transparent;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  @media(max-width:576px){
      margin:0px;
      padding:0px;
  }
`
