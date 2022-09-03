import React from "react";
import styled from "styled-components";

function Shapes({ fShape, sShape, tShape, fsl, ssl, tsl }) {
  return (
    <Container>
      <FirstShape className={`fa-solid fa-${fShape}`} fsl={fsl}></FirstShape>
      <SecondShape className={`fa-solid fa-${sShape}`} ssl={ssl}></SecondShape>
      <ThirdShape className={`fa-solid fa-${tShape}`} tsl={tsl}></ThirdShape>
    </Container>
  );
}
const Container = styled.div``;
const FirstShape = styled.div`
  font-size: 60px;
  color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: ${(props) => (props.fsl ? props.fsl : "-60px")};
  z-index: -1;
  animation: anim1 20s linear alternate infinite;
  @keyframes anim1 {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const SecondShape = styled.div`
  font-size: 60px;
  border-radius: 50%;
  color: #ff97af;
  position: absolute;
  top: 200px;
  left: ${(props) => props.ssl};
  z-index: -1;
  animation: anim2 20s linear alternate infinite;
  @keyframes anim2 {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const ThirdShape = styled.div`
  font-size: 60px;
  color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: ${(props) => props.tsl};
  z-index: -1;
  animation: anim3 20s linear alternate infinite;
  @keyframes anim3 {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

export default Shapes;
