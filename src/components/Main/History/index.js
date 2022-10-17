import styled from "styled-components";
import Calendar from "react-calendar";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../assets/context/LoginContext";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
export default function History() {
  const { userData } = useContext(LoginContext);
  const [calendarVal, setCalendarVal] = useState(new Date());
  const [ data ,setData] = useState([])
  useEffect(() => {
    const HISTORY_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`;
    const token = userData.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(HISTORY_API, config);
    promise.then((response) => {
      setData(response.data);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Main>
        <div className="Sample__container__content">
          <Calendar
            onChange={setCalendarVal}
            formatDate={calendarVal}
            showWeekNumbers
            value={calendarVal}
          />
        </div>
    </Main>
  );
}
const Main = styled.main`
  padding: 70px 18px 70px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  flex-shrink: 0;
  width:100%;
  min-height: 100%;
`;
const H1 =styled.div`
font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  margin: 30px 0;
`