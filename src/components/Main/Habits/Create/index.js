import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../../../assets/context/LoginContext";
export default function Create() {
  const {userData} = useContext(LoginContext);
  function Post() {
    const CREATE_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`
    const config = {
      headers: {
        "Authorization": `Bearer ${userData.token}`
      }
    }
    const body = {
      name: "Nome do hábito",
      days: [1, 3, 5]
    }
    const promise = axios.post(CREATE_API,body,config);
    promise.then(response =>{
      console.log(response.data)
    })
  }
    return (
        <SectionCreate>
          <Div>
            <Input placeholder="nome do hábito"></Input>
            <ButtonsWeek>
              <ButtonWeek>D</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
              <ButtonWeek>T</ButtonWeek>
              <ButtonWeek>Q</ButtonWeek>
              <ButtonWeek>Q</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
            </ButtonsWeek>
            <NavButtons>
              <ButtonQuit>Cancelar</ButtonQuit>
              <ButtonSave onClick={Post}>Salvar</ButtonSave>
            </NavButtons>
          </Div>
        </SectionCreate>
    )
}
const SectionCreate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  left: 36px;
  top: 165px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
  margin-bottom: 8px;
  &:focus {
    color: #666666;
    outline: none;
  }
`;
const Div = styled.section``;
const ButtonsWeek = styled.div`
  display: flex;
`;
const ButtonWeek = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
`;
const NavButtons = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ButtonSave = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
`;
const ButtonQuit = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  border-radius: 5px;
  background-color: #ffffff;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  color: #52b6ff;
  outline: none;
  border: none;
`;