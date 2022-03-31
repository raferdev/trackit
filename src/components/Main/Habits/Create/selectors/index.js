import { useState } from "react";
import styled from "styled-components"
export default function Selectors(props) {
    const {id,name,setDays} = props;
    const [select, setSelect] = useState(false);
    function postCreate() {
        setSelect(select?false:true)
        setDays((days) => {
        const daysArr = [...days];
        const index = daysArr.indexOf(id);
        if(index===-1) {
          return [...days,id];
        } else { 
          daysArr.splice(index,1);
          return [...daysArr]
        }
        })
      }
    return (
    <ButtonWeek type="button" background={select?"#CFCFCF;":"#ffffff"} color={select?"#ffffff":"#dbdbdb"} onClick={postCreate}>{name}</ButtonWeek>
    )
}
const ButtonWeek = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background-color: ${props => props.background};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${props => props.color};
`;