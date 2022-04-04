import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { LoginContext } from "../../../assets/context/LoginContext.js";
import { PercentageContext } from "../../../assets/context/PercentageContext.js";
import { useEffect, useState, useContext } from "react";
import TodayHabits from "./TodayHabits";
export default function Hoje() {
  const {setPercentage} = useContext(PercentageContext)
  const { userData } = useContext(LoginContext);
  const [refresh, setRefresh] = useState("");
  const [todayHabits, setTodayHabits] = useState([]);
  const [doneArr, setDoneArr] = useState([]);
  const percentage = (doneArr.length*100)/todayHabits.length
  useEffect(() => {
    const TODAY_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const token = userData.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(TODAY_API, config);
    promise.then((response) => {
      setDoneArr(response.data.filter(habit=>habit.done?true:false))
      setTodayHabits(response.data)
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  useEffect(()=> {
    setPercentage(percentage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[percentage])
  function CheckUncheck(id, done) {
    id = id.toString();
    const CHECK_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const UNCHECK_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const body = {};
    if (done) {
      const promise = axios.post(CHECK_API, body, config);
      promise.then(() => {
        setRefresh(id);
      });
      promise.catch((response) => alert(response));
    } else {
      const promise = axios.post(UNCHECK_API, body, config);
      promise.then(() => {
        setRefresh(id*2);
      });
      promise.catch((response) => alert(response));
    }
  }
  return (
    <>
      <Main>
        <HeaderDiv>
          <DayDiv>
            {dayjs().locale("pt-br").format("dddd, DD/MM")}
          </DayDiv>
          <PercentageDiv color={doneArr.length > 0 ? "#8FC549" : "#bababa"}>{doneArr.length>0?`${parseInt(percentage)}% dos hábitos concluídos`:"Nenhum hábito concluído ainda"}</PercentageDiv>
        </HeaderDiv>
        {todayHabits.map((habit, index) => (
          <TodayHabits
            habit={habit}
            CheckUncheck={CheckUncheck}
            key={index}
          />
        ))}
      </Main>
    </>
  );
}
const Main = styled.main`
  padding: 70px 18px 70px 18px;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
`;
const DayDiv = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126BA5;
`;
const PercentageDiv = styled.h4`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${props=>props.color};
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
