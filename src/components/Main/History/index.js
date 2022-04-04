import styled from "styled-components";
import Calendar from "react-calendar";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../../assets/context/LoginContext";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
export default function History() {
  const { userData } = useContext(LoginContext);
  const [calendarVal, setCalendarVal] = useState(new Date());

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
      console.log(response.data);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Main>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar
            onChange={setCalendarVal}
            showWeekNumbers
            value={calendarVal}
          />
        </main>
      </div>
    </Main>
  );
}
const Main = styled.main`
  margin: 70px 18px 70px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 500px;
  min-height: 100%;
`;
