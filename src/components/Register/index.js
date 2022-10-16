import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ReactComponent as LockLogo } from "./../../assets/img/lock-closed-outline.svg";
import { ReactComponent as MailLogo } from "./../../assets/img/mail-outline.svg";
import { ReactComponent as UserLogo } from "./../../assets/img/person-add-outline.svg";
import { ReactComponent as ImageLogo } from "./../../assets/img/image-outline.svg";
export default function Register() {
  const REGISTER_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  function submitRegister(event) {
    event.preventDefault();
    setSubmit(true);
    const dados = {
      email: email,
      name: name,
      image: image,
      password: password,
    };

    const promise = axios.post(REGISTER_API, dados);
    promise.then(() => {
      navigate("/login");
    });
    promise.catch((data) => {
     const error = data.response.data
      if(error.message==="Usuário já cadastrado!") {
        console.warn("Duplicate email")
        alert("This email is already being used.")
        setSubmit(false);
        window.location.reload();
        return 
      }
      if(error.details[0]==="\"image\" must be a valid uri") {
        console.warn("Image error")
        alert("Image URL must be valid uri.")
        setSubmit(false);
        window.location.reload();
        return 
      }
        alert(`${error.message}`);
        setSubmit(false);
        window.location.reload();
        return 
    });
  }
  return (
    <Main>
      <Logo>
        <H2>TrackIt</H2>
        <H3>The healthiest habit to have</H3>
      </Logo>
      <Section>
        <form onSubmit={submitRegister}>
          <Div>
            {" "}
            <MailLogo />
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={submit ? true : false}
            ></Input>
          </Div>
          <Div>
            {" "}
            <LockLogo />
            <Input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={submit ? true : false}
            ></Input>
          </Div>
          <Div>
            {" "}
            <UserLogo />
            <Input
              type="text"
              placeholder="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={submit ? true : false}
            ></Input>
          </Div>
          <Div>
            {" "}
            <ImageLogo />
            <Input
              type="text"
              placeholder="foto"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              disabled={submit ? true : false}
            ></Input>
          </Div>
          <Button type="submit" opacity={submit ? 0.7 : 1}>
            {submit ? (
              <ThreeDots color="#FFFFFF" height={80} width={80} />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
        <RegisterDiv>
          <Link to="/login">Já tem uma conta? <Span>Faça login!</Span></Link>
        </RegisterDiv>
      </Section>
    </Main>
  );
}
const Main = styled.main`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  z-index: 2;
`;
const Section = styled.section`
  margin-top: 35px;
  width: 303px;
`;
const Input = styled.input`
  display: flex;
  flex-shrink: 0;
  height: 45px;
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
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
  background-color: #52B6FF;
  opacity: ${(props) => props.opacity};
  border-radius: 4.63636px;
  color: #ffffff;
  border: none;
`;
const RegisterDiv = styled.div`
  height: 65px;
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
    color: #1A1A1A;
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
  color: #1A1A1A;
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
const Span = styled.span`
color: #52b6ff;;
`