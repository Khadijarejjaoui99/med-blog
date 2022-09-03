import React from "react";
import styled from "styled-components";
import Shapes from "./Shapes";
function Intro() {
  return (
    <Container>
      <Left>
        <Title>Share Your Medical Blogs With the Community</Title>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          mollitia unde officiis quos repellendus consequuntur at impedit
          voluptatem nobis odio, eveniet, vel numquam pariatur fugiat aperiam
          asperiores qui distinctio quis?
        </Desc>
        <ButtonContainer>
          <Button>Start Your first blog Now</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <ImageContainer src="images/img-2.png" />
      </Right>
      <Shapes
        fShape="syringe"
        sShape="capsules"
        tShape="stethoscope"
        fsl="-60px"
        ssl="-100px"
        tsl="-50px"
      />
    </Container>
  );
}
const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;
const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
  font-size: 20px;
`;
const ButtonContainer = styled.div`
  width: 60%;
`;
const Button = styled.div`
  display: inline-block;
  padding: 15px 20px;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: darkblue;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  letter-spacing: 1px;
  :hover {
    background-color: rgb(16, 72, 185);
  }
`;
const Right = styled.div`
  width: 40%;
`;
const ImageContainer = styled.img`
  max-width: 100%;
`;
export default Intro;
