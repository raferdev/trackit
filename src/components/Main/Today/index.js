import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import axios from "axios";
import { LoginContext } from "../../../assets/context/LoginContext.js";
import { useEffect, useState, useContext } from "react";
import { ReactComponent as ReactLogo } from "../../../assets/img/checkbox.svg";
export default function Hoje() {
  const { userData } = useContext(LoginContext);
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
  }, []);
  return (
    <>
      <Header />
      <Main>
        {todayHabits.map((habit, index) => {
          const curDays = habit.currentSequence;
          const higDays = habit.highestSequence;
          const seqAtual = curDays > 1 || curDays==0 ? `${curDays} dias` : `${curDays} dia`;
          const record = higDays > 1 || higDays==0 ? `${higDays} dias` : `${higDays} dia`;
          return (
            <HeaderDiv key={index} fill={habit.done ? "#8FC549" : "#EBEBEB"}>
              <TextDiv>
                <H2>{habit.name}</H2>
                <H3>
                  Sequência atual: 
                  <Strong color={habit.done ? "#8FC549" : "#666666;"}>
                    {seqAtual}
                  </Strong>
                </H3>
                <H3>
                  Seu recorde: 
                  <Strong color={curDays >= higDays && curDays!=0 ? "#8FC549" : "#666666;"}>
                    {record}
                  </Strong>
                </H3>
              </TextDiv>
              <ReactLogo />
            </HeaderDiv>
          );
        })}
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
const HeaderDiv = styled.header`
  display: flex;
  padding: 13px 11px 13px 15px;
  width: 100%;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 8px;
  .ionicon {
    width: 69px;
    height: 69px;
    fill: ${(props) => props.fill};
  }
`;
const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;
const TextDiv = styled.div``;
const Strong = styled.div`
    margin-left: 5px;
  color: ${(props) => props.color};
`;
const H3 = styled.h3`
  display: flex;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
`;
