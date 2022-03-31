import reactDom from "react-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habitos from "./components/Main/Habits";
import { useState } from "react";
import { LoginContext } from "./assets/context/LoginContext";
const root = document.querySelector(".root");
export default function App() {
    const [userData,setUserData] = useState({})
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <LoginContext.Provider value={{ userData, setUserData }}>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habitos />} />
        </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}
reactDom.render(<App />, root);