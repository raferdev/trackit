import reactDom from "react-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";
import Login from "./components/Login";
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Habitos from "./components/Main/Habits";
import Hoje from "./components/Main/Today";
import History from "./components/Main/History";
import { useState } from "react";
import { LoginContext } from "./assets/context/LoginContext";
import { PercentageContext } from "./assets/context/PercentageContext";
const root = document.querySelector(".root");
export default function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
  const [percentage, setPercentage] = useState(0);
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("loginDone")));
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <PercentageContext.Provider value={{ percentage, setPercentage }}>
          <LoginContext.Provider value={{ userData, setUserData }}>
            <Header />
            <Footer />
            <Routes>
              <Route path="/" element={login!==null&&login===true
              ? <Navigate to="/habitos"/>
              : <Navigate to="/login" />
            }/>
              <Route path="/login" element={<Login setLogin={setLogin} />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Hoje />} />
              <Route path="/historico" element={<History />} />
            </Routes>
          </LoginContext.Provider>
        </PercentageContext.Provider>
      </BrowserRouter>
    </>
  );
}
reactDom.render(<App />, root);
