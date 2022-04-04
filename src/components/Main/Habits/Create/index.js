import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { LoginContext } from "../../../../assets/context/LoginContext";
import Selectors from "./selectors";
import { ThreeDots } from "react-loader-spinner";
export default function Create(props) {
  const { setCreate, setReload, setShowCreate } = props;
  const { userData } = useContext(LoginContext);
  const [days, setDays] = useState([]);
  const [habit, setHabit] = useState("");
  const [submit, setSubmit] = useState(false);
  const daysSelectors = ["D", "S", "T", "Q", "Q", "S", "S"];
  function Post(event) {
    event.preventDefault();
    setSubmit(true);
    const CREATE_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const body = {
      name: habit,
      days: days,
    };
    const promise = axios.post(CREATE_API, body, config);
    promise.then(() => {
      setReload(habit);
      setShowCreate(false);
      setSubmit(false);
      setCreate(false);
    });
  }
  return (
    <SectionCreate>
      <form onSubmit={Post}>
        <Input
          placeholder="nome do hábito"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          disabled={submit ? true : false}
        ></Input>
        <ButtonsWeek>
          {daysSelectors.map((name, index) => {
            return (
              <Selectors
                id={index}
                name={name}
                key={index}
                submit={submit}
                setDays={setDays}
              />
            );
          })}
        </ButtonsWeek>
        <NavButtons>
          <ButtonQuit
            type="button"
            opacity={submit ? 0.7 : 1}
            onClick={() => setShowCreate(false)}
            disabled={submit ? true : false}
          >
            Cancelar
          </ButtonQuit>
          <ButtonSave
            type="submit"
            opacity={submit ? 0.7 : 1}
            disabled={submit ? true : false}
          >
            {submit ? (
              <ThreeDots color="#FFFFFF" height={30} width={30} />
            ) : (
              "Salvar"
            )}
          </ButtonSave>
        </NavButtons>
      </form>
    </SectionCreate>
  );
}
const SectionCreate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 30px;
  flex-shrink: 0;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  left: 36px;
  top: 165px;
  background-color: ${(props) => props.background};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.color};
  margin-bottom: 8px;
  &:focus {
    color: #666666;
    outline: none;
  }
`;
const ButtonsWeek = styled.div`
  display: flex;
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
  opacity: ${(props) => props.opacity};
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
  opacity: ${(props) => props.opacity};
  color: #52b6ff;
  outline: none;
  border: none;
`;
