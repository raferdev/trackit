import styled from "styled-components";
export default function Footer() {
  return (
    <FooterStyle>
      <H3>Hábitos</H3>
      <Hoje>
        <p>Hoje</p>
      </Hoje>
      <H3>Histórico</H3>
    </FooterStyle>
  );
}
const FooterStyle = styled.footer`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 36px;
`;
const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
`;
const Hoje = styled.div`
  position: relative;
  top:-50px;
  height: 91px;
  width: 91px;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;
