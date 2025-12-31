import styled from 'styled-components'

export const PlansCardcont = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #000000, ${props => props.color});
  padding: 17px;
  width: 30%;
  height: 80vh;
  border-radius: 10px;
  overflow: visible;
`

export const Plansname = styled.h1`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0px;
`

export const PlansDescription = styled.p`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom:0px;
`

export const PlansPrice = styled.p`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: bold;
  display:flex;
  flex-direction:row;
  gap:2px;
  align-items:flex-start;
  margin:20px;
`

export const Planbtn = styled.button`
  height: 40px;
  width: 130px;
  border-radius: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid #fff;
  align-self:center;
  margin:10px 10px;
  cursor:pointer;
  transition: all 0.3 ease;

  &:hover{
    background-color:#ffffff;
    color:#000000;
    trnasform:scale(1.05)
  }
`

export const Plansbenefit = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
  display:flex;
  align-items:center;
  gap:5px;
  margin:10px 10px;
`

export const PlansBenefcont = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
`

export const Planscurrency = styled.span`
  font-size: 30px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`
