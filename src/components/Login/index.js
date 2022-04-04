import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../assets/context/LoginContext";
export default function Login() {
  const LOGIN_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
  const { setUserData } = useContext(LoginContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  function submitLogin(event) {
    event.preventDefault();
    setSubmit(true);
    const dados = {
      email: email,
      password: password,
    };
    const promise = axios.post(LOGIN_API, dados);
    promise.then((response) => {
      const data = response.data;
      const userLogin = {
        email: data.email,
        id: data.id,
        image: data.image,
        name: data.name,
        token: data.token,
        login: true
      };
      localStorage.setItem("userData", JSON.stringify(userLogin));
      setUserData(JSON.parse(localStorage.getItem("userData")));
      navigate("/habitos");
    });
    promise.catch((response) => {
      alert("deu ruim tenta dnv");
      setSubmit(false);
      console.log(response)});
  }
  return (
    <Main>
      <Img src={logo}></Img>
      <Section>
        <form onSubmit={submitLogin}>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          <Input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          <Button
            type="submit"
            opacity={submit ? 0.7 : 1}
            disabled={submit ? true : false}
          >
            {submit ? (
              <ThreeDots color="#FFFFFF" height={80} width={80} />
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
        <RegisterDiv>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </RegisterDiv>
      </Section>
    </Main>
  );
}
const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e5e5e5;
  z-index:1;
`;
const Img = styled.img`
  width: 180px;
  height: auto;
`;
const Section = styled.section`
  margin-top: 35px;
  width: 303px;
`;
const Input = styled.input`
  height: 45px;
  width: 100%;
  margin-bottom: 6px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  background: #52b6ff;
  opacity: ${(props) => props.opacity};
  border-radius: 4.63636px;
`;
const RegisterDiv = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
