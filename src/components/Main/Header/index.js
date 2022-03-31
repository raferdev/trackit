import styled from "styled-components";
export default function Header() {
  return (
    <HeaderStyle>
      <H2>TrackIt</H2>
      <User></User>
    </HeaderStyle>
  );
}
const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  width: 100%;
  height: 70px;
  background-color: rgba(18, 107, 165, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const H2 = styled.h2`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
`;
const User = styled.button`
  width: 51px;
  height: 51px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  background-clip: border-box;
  background-image: url(https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000);
`;
