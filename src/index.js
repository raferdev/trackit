import reactDom from "react-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";
import Login from "./components/Login";
const root =  document.querySelector(".root")
export default function App() {
    return (
        <>
        <GlobalStyle/>
        <Login/>
        </>
    )
}
reactDom.render(<App/>,root)