import styled from 'styled-components'

export const ProfilepageCont=styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
`
export const ProfilepageMain = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px;
    overflow-y: auto;
    width:80%;
    border:1px solid #000000;
    gap:20px;
`
export const OrderspageMain = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    overflow-y: auto;
    gap:20px;
    width:75%;
`
export const Profileformcont = styled.form`
    display:flex;
    flex-direction:row;
    width:100%;
    padding:20px;
    border-radius:10px;
    box-shadow: 1px 2px 4px 1px rgba(0,0,0,0.3);
    height:90%;
`
export const Profileform= styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const Loadingcont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
`
export const Profilegreet = styled.h1`
    font-family:"Roboto",sans serif;
    font-size:30px;
    font-weight:bold;
    color:#000000;
`
export const ProfiledetailsCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:10px;
    width:45%;
`
export const Profileinput= styled.input`
    height:40px;
    border-radius:10px;
    outline:none;
    font-family:"Roboto",sans serif;
    font-size:15px;
    padding-left:10px;
    background-color:transparent;
    border:1px solid #000000;
`
export const ProfileLabel = styled.label`
    font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:bold;
    color:#000000;
`
export const ProfilegenderdetailsCont= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:45%;
`
export const Gendercont = styled.div`
        display:flex;
    flex-direction:row;
    gap:10px;
    align-items:center;
`
export const Profileusergender = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
`
export const Profileh1 = styled.h1`
     font-family:"Roboto",sans serif;
    font-size:15px;
    font-weight:bold;
    margin:0px;
    color:#000000;
`

export const Profilesave=styled.button`
    height:40px;
    width:40px;
    border:0px;
    background-color:transparent;
    cursor:pointer;
`
// export const ProfileTextarea = styled.textarea`
//   width: 95%;
//   padding: 10px;
//   font-family: "Roboto", sans-serif;
//   font-size: 16px;
//   font-weight:300;
//   border-radius: 10px;
//   outline: none;
//   background-color: transparent;
// `;
export const ProfileTextarea = styled.textarea`
  width: 95%;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight:300;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  border: 1px solid #000; /* add this */
`;
export const ProfileRadio = styled.input.attrs({ type: "radio" })`
  margin: 0;
  width: 18px;
  height: 18px;
  accent-color: #45a5d9;
  cursor: pointer;
`;
