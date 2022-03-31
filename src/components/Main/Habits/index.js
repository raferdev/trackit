import Header from "../Header";
import styled from "styled-components";
import Create from "./Create";
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
        <SectionCreate>
          <Div>
            <Input placeholder="nome do hábito"></Input>
            <ButtonsWeek>
              <ButtonWeek>D</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
              <ButtonWeek>T</ButtonWeek>
              <ButtonWeek>Q</ButtonWeek>
              <ButtonWeek>Q</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
              <ButtonWeek>S</ButtonWeek>
            </ButtonsWeek>
            <NavButtons>
              <ButtonQuit>Cancelar</ButtonQuit>
              <ButtonSave>Salvar</ButtonSave>
            </NavButtons>
          </Div>
        </SectionCreate>
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
  background: #e5e5e5;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
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
const SectionCreate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  left: 36px;
  top: 165px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
  margin-bottom: 8px;
  &:focus {
    color: #666666;
    outline: none;
  }
`;
const Div = styled.section``;
const ButtonsWeek = styled.div`
  display: flex;
`;
const ButtonWeek = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
`;
const NavButtons = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ButtonSave = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
`;
const ButtonQuit = styled.button`
  font-family: "Lexend Deca";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  border-radius: 5px;
  background-color: #ffffff;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  color: #52b6ff;
  outline: none;
  border: none;
`;
