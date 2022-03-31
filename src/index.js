import reactDom from "react-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habitos from "./components/Main/Habits";
const root =  document.querySelector(".root")
export default function App() {
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/habitos" element={<Habitos/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
reactDom.render(<App/>,root)