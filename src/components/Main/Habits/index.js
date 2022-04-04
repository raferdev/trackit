import styled from "styled-components";
import Create from "./Create";
import { ReactComponent as TrashLogo } from "./../../../assets/img/trash-outline.svg";
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../../assets/context/LoginContext.js";
import { PercentageContext } from "../../../assets/context/PercentageContext.js";
import axios from "axios";
export default function Habitos() {
  const { setPercentage } = useContext(PercentageContext);
  const { userData } = useContext(LoginContext);
  const [reload, setReload] = useState(0);
  const [create, setCreate] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [habits, setHabits] = useState([]);
  const [delPop, setDelPop] = useState(-1)
  useEffect(() => {
    const TODAY_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const token = userData.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(TODAY_API, config);
    promise.then((response) => {
      const done = response.data.filter((habit) => (habit.done ? true : false));
      const all = response.data;
      const percent = (done.length * 100) / all.length;
      setPercentage(percent);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const token = userData.token;
    const RELOAD_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(RELOAD_API, config);
    promise.then((response) => setHabits(response.data));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  function Delete(id) {
    const DELETE_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.delete(DELETE_API, config);
    promise.then(() => setReload(id));
  }
  return (
    <>
      <Main>
        <Section>
          <H2>Meus hábitos</H2>
          <Button
            onClick={() => {
              setCreate(true);
              setShowCreate(true);
            }}
          >
            +
          </Button>
        </Section>
        <TransitionDiv
          opacity={showCreate ? 1 : 0}
          width={showCreate ? "340px" : 0}
          height={showCreate ? "200px" : 0}
        >
          {create ? (
            <Create
              setShowCreate={setShowCreate}
              setCreate={setCreate}
              setReload={setReload}
              create={create}
            />
          ) : (
            <></>
          )}
        </TransitionDiv>
        <Article>
          {habits.length > 0 ? (
            habits.map((habit, index) => (
              <HabitDiv key={index}>
                <DeletePop width={delPop===habit.id ? "200px" : 0}
                      height={delPop===habit.id ? "100px" : 0}
                      display={delPop===habit.id ? "flex" : "none"}>
                  <H4>Deletar o habito?</H4>
                  <DivButtonDell>
                    <ButtonDellYes onClick={()=>Delete(habit.id)}>sim</ButtonDellYes>
                    <ButtonDellNo onClick={()=>setDelPop(-1)}>Não</ButtonDellNo>
                  </DivButtonDell>
                </DeletePop>
                <HabitHead>
                  <H3>{habit.name}</H3>
                  <ButtonTrash onClick={() => {setDelPop(habit.id)}}>
                    <TrashLogo />
                  </ButtonTrash>
                </HabitHead>
                <DivWeek>
                  <Week
                    background={habit.days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(0) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    D
                  </Week>
                  <Week
                    background={habit.days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(1) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                  <Week
                    background={habit.days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(2) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    T
                  </Week>
                  <Week
                    background={habit.days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(3) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    Q
                  </Week>
                  <Week
                    background={habit.days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(4) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    Q
                  </Week>
                  <Week
                    background={habit.days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(5) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                  <Week
                    background={habit.days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
                    color={habit.days.includes(6) ? "#FFFFFF" : "#DBDBDB"}
                  >
                    S
                  </Week>
                </DivWeek>
              </HabitDiv>
            ))
          ) : (
            <Empty>
              <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </p>
            </Empty>
          )}
        </Article>
      </Main>
    </>
  );
}
const Main = styled.main`
  padding: 70px 18px 70px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 100px;
  flex-shrink: 0;
`;
const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;
const Button = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 26.976px;
  line-height: 34px;
  color: #ffffff;
  outline: none;
  border: none;
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 340px;
  min-height: 100%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;
const Empty = styled.div`
  display: flex;
  height: 100px;
`;
const HabitDiv = styled.div`
  position: relative;
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 11px 15px 15px;
  margin-bottom: 10px;
`;
const DivWeek = styled.div`
  display: flex;
  width: 340px;
  flex-shrink: 0;
`;
const Week = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
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
`;
const HabitHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;
const ButtonTrash = styled.button`
  border: none;
  background-color: #ffffff;
  .ionicon {
    height: 20px;
  }
`;
const TransitionDiv = styled.div`
  display: flex;
  flex-shrink: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  opacity: ${(props) => props.opacity};
  transition: all 400ms;
`;
const DeletePop = styled.div`
  position: absolute;
  display: ${props=>props.display};
  flex-direction: column;
  align-items:center;
  border-radius: 5px;
  top: 0;
  right: 0;
  height:${props=>props.height};
  width: ${props=>props.width};
  background-color: #ffff;
  z-index:1;
  opacity: 0.9;
  transition: all 400ms;
`;
const ButtonDellYes = styled.button`
  height: 40px;
  width: 70px;
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8FC549;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #ffffff;
  outline: none;
  border: none;
  margin:5px;
`;
const ButtonDellNo = styled.button`
  height: 40px;
  width: 70px;
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E75766;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #ffffff;
  outline: none;
  border: none;
  margin:5px;
`;
const H4 = styled.h4`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 19px;
  line-height: 34px;
  color: #151515;
`;
const DivButtonDell = styled.div`
display:flex;
`