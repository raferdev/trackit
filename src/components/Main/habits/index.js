import Header from "./Header";
import styled from "styled-components";
export default function Habitos() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <H2>Meus hábitos</H2>
          <Button>
            <p>+</p>
          </Button>
        </Section>
        <Article>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </Article>
      </Main>
    </>
  );
}
const Main = styled.main`
  padding: 70px 18px 0px 18px;
  width: 100%;
  height: 100%;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 155px;
`;
const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;
const Button = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 26.976px;
  line-height: 34px;
  color: #ffffff;
  outline: none;
  border: none;
`;
const Article = styled.article`
  width: 100%;
  height: 100%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
`;
