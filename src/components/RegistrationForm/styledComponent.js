import styled from 'styled-components'

export const RegisterMainCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 130vh;
    // width: 100%;  // ✅ Fix here
    background-color: #ffffff;
    overflow: hidden; // ✅ Optional for extra safety
`

export const RegistorSubCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:transparent;
    width:50%;
`

export const RegistorForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
    gap:10px;
`

export const RegisterInputCont = styled.div`
    display:flex;
    flex-direction:row;
    width:60%;
    align-items:center;
    border-bottom:1px solid #7ccadd ;
`

export const RegisterInputField = styled.input`
    height:55px;
    width:100%;
    border:0px solid #000000;
    margin-bottom:0px;
    padding-bottom:0px;
    outline:none;
    background-color:transparent;
    font-family:sans-serif;
    color:#11344c;
    font-size:20px;
    padding-left:10px;
    font-weight:400;
`
export const RegisterImage = styled.img`
    height: auto;
    object-fit: cover;
    border-radius:15px;
    width:60%;
`

export const RegisterUl = styled.ul`
    margin-left:0px;
    display:flex;
    flex-direction:column;
    gap:10px;
    list-style-type:none;
    font-family:sans-serif;
    
    
    
`
export const RegisterLi = styled.li`
  list-style-type: ${(props) => (props.Ok ? "circle" : "disc")};
  color: ${(props) => (props.Ok ? "green" : "red")};
  transition: color 0.3s ease, list-style-type 0.3s ease;
  font-family:sans-serif;
`
export const Custbtncont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:10px;
`
export const Custbtn = styled.button`
    height:40px;
    width:120px;
    color:#ffffff;
    font-family:sans-serif;
    font-size:20px;
    font-weight:bold;
    background-color:#45a5d9;
    border-radius:15px;
    cursor:pointer;
    border:0px;
`