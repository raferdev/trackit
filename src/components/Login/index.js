import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
    const LOGIN_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`
    function submitLogin() {
        const dados = {
            email: "batatinha123@gmail.com",
            password: "senhadobatata"
        }
        const promise = axios.post(LOGIN_API,dados);
        promise.then(response =>
            console.log(response.data));
        promise.catch(response =>
            console.log(response))
    }
  return (
    <Main>
      <Img src={logo}></Img>
      <Section>
        <Input type="text" placeholder="email"></Input>
        <Input type="password" placeholder="senha"></Input>
        <Button onClick={submitLogin}>Entrar</Button>
        <RegisterDiv>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </RegisterDiv>
      </Section>
    </Main>
  );
}
const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

`;
const Button = styled.button`
  height: 45px;
  width: 100%;
  background: #52b6ff;
  border-radius: 4.63636px;
`;
const RegisterDiv = styled.div`
    height: 65px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
`
