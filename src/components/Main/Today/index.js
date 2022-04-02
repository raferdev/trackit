import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { LoginContext } from "../../../assets/context/LoginContext.js";
import { useEffect, useState, useContext } from "react";
import TodayHabits from "./TodayHabits";
export default function Hoje() {
  const { userData } = useContext(LoginContext);
  const [refresh, setRefresh] = useState("");
  const [todayHabits, setTodayHabits] = useState([]);
  useEffect(() => {
    const TODAY_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(TODAY_API, config);
    promise.then((response) => setTodayHabits(response.data));
  }, [refresh]);
  function CheckUncheck(id, done) {
    id = id.toString()
    const CHECK_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const UNCHECK_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const body = {};
    if (done) {
      const promise = axios.post(CHECK_API,body,config);
      promise.then((response) => {
        setRefresh(id);
      });
      promise.catch(response=>alert(response));
    } else {
      const promise = axios.post(UNCHECK_API,body,config);
      promise.then((response) => {
        setRefresh(0);
      });
      promise.catch(response=>alert(response));
    }
  }
  return (
    <>
      <Header />
      <Main>
        <HeaderDiv>
          <DayDiv>{dayjs().locale("pt-br").format("dddd, DD/MM")}</DayDiv>
          <PercentageDiv>Nenhum hábito concluído ainda</PercentageDiv>
        </HeaderDiv>
        {todayHabits.map((habit, index) => (
          <TodayHabits habit={habit} CheckUncheck={CheckUncheck} key={index} />
        ))}
      </Main>
      <Footer />
    </>
  );
}
const Main = styled.main`
  padding: 70px 18px 0px 18px;
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
  color: #126ba5;
`;
const PercentageDiv = styled.h4`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #bababa;
`;
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
