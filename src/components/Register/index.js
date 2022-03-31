import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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
    promise.then((response) => {
      navigate("/login")
    });
    promise.catch((response) => console.log(response));
  }
  return (
    <Main>
      <Img src={logo}></Img>
      <Section>
        <form onSubmit={submitRegister}>
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
          <Input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          <Input
            type="text"
            placeholder="foto"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            disabled={submit ? true : false}
          ></Input>
          <Button type="submit" opacity={submit ? 0.7 : 1}>
            {submit ? (
              <ThreeDots color="#FFFFFF" height={80} width={80} />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
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
  display:flex;
  justify-content:center;
  align-items:center;
`;
const RegisterDiv = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
