import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const REGISTER_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`
    function submitRegister() {
        const dados = 
            {
                email: "batatinha123@gmail.com",
                name: "Sr.batata",
                image: "https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000",
                password: "senhadobatata"
            }
        
        const promise = axios.post(REGISTER_API,dados);
        promise.then(response => 
            console.log(response.data)
        )
        promise.catch(response =>
            console.log(response))
    }
  return (
    <Main>
      <Img src={logo}></Img>
      <Section>
        <Input placeholder="email"></Input>
        <Input placeholder="senha"></Input>
        <Input placeholder="nome"></Input>
        <Input placeholder="foto"></Input>
        <Button onClick={submitRegister}>Cadastrar</Button>
        <RegisterDiv>
        <Link to="/login">Já tem uma conta? Faça login!</Link>
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
