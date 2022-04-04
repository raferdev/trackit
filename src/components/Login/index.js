import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LockLogo } from "./../../assets/img/lock-closed-outline.svg";
import { ReactComponent as MailLogo } from "./../../assets/img/mail-outline.svg";
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
        login: true,
      };
      localStorage.setItem("userData", JSON.stringify(userLogin));
      setUserData(JSON.parse(localStorage.getItem("userData")));
      navigate("/habitos");
    });
    promise.catch((response) => {
      alert("deu ruim tenta dnv");
      setSubmit(false);
      console.log(response);
    });
  }
  return (
    <Main>
      <Logo>
      <H2>TrackIt</H2>
      <H3>The healthiest habit to have</H3>
      </Logo>
      <Section>
        <form onSubmit={submitLogin}>
          <Div><MailLogo/>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          </Div>
          <Div><LockLogo/>
          <Input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          </Div>
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
  background: #ffffff;
  z-index: 1;
`;
const Section = styled.section`
  margin-top: 35px;
  width: 303px;
`;
const Input = styled.input`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  height: 45px;
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
  outline:none;
`;
const Button = styled.button`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  margin-top: 40px;
  background-color: #126ba5;
  opacity: ${(props) => props.opacity};
  border-radius: 4.63636px;
  color: #ffffff;
  border: none;
`;
const RegisterDiv = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
const H2 = styled.h2`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 49px;
  color: #126ba5;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 49px;
  color: #000000;
  margin-top:-10px;
`;
const Div = styled.div`
  position: relative;
  margin-bottom: -10px;
  .ionicon {
    position: relative;
    bottom: -35px;
    left: -25px;
    height: 20px;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  height: 100px;
  width: 100%;
  margin-bottom: -30px;
`;