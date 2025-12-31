import styled from 'styled-components'

export const Mainlogincont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:color:#ffffff;
`

export const Loginsideimg = styled.img`
    height:100%;
    width:50%;
`
export const Loginformcont = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    justify-content:center;
    align-items:center;
`
export const Loginform = styled.form`
    width:50%;
    border-radius:10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:50px;
    gap:15px;
`
export const LoginLabel = styled.label`
    font-size:20px;
    font-family:sans-serif;
    font-weight:bold;
`

export const LoginInput  = styled.input`
    font-family:sans-serif;
    font-size:15px;
    outline:none;
    border:1px solid #000000;
    border-radius:6px;
    padding-left:10px;
    width:100%;
    height:30px;
    color:#202020;
    background-color:transparent;
`
export const LoginInputcont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:5px;
` 
export const LoginCustbtn = styled.button`
    height:40px;
    width:120px;
    border-radius:10px;
    background-color:#1c64eb;
    color:#ffffff;
    font-family:sans serif;
    font-weight:400;
    font-size:20px;
    align-self:center;
    border:0px;
    margin-top:10px;
`