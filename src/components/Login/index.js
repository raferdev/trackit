import logo from "../../assets/img/logo.png";
import styled from "styled-components";
export default function Login() {
  return (
    <Main>
      <Img src={logo}></Img>
      <Section>
        <Input placeholder="email"></Input>
        <Input placeholder="senha"></Input>
        <Button>Entrar</Button>
        <Register>
        </Register>
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
const Register = styled.div`
    height: 65px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
`
