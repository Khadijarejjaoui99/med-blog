import React from "react";
import styled from "styled-components";
import Shapes from "./Shapes";
export default function Features() {
  return (
    <Container>
      <Left>
        <Image src="images/img-1.png" alt="image" />
      </Left>
      <Right>
        <Title>
          <b>write</b> a blog
          <br />
          <b>gain</b> a connection
        </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit
          officiis, molestias voluptates debitis beatae? Sed veniam.
        </Desc>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          voluptatem vitae aliquam reiciendis at ipsum, reprehenderit impedit
          libero doloribus consectetur! Doloremque voluptatibus quasi esse sit
          blanditiis nostrum laborum aliquam illo?
        </Desc>
        <Button>Learn More!</Button>
      </Right>
      <Shapes
        fShape="user-group"
        sShape="file-waveform"
        tShape="pen-to-square"
        fsl="100px"
        ssl="900px"
        tsl="300px"
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  max-width: 100%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.span`
  font-size: 70px;
  text-transform: capitalize;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  width: 90%;
  margin-top: 30px;
  color: #777;
  font-size: 20px;
  line-height: 1.5;
`;
const Button = styled.button`
  width: 180px;
  border: none;
  cursor: pointer;
  color: white;
  padding: 15px 20px;
  background-color: darkblue;
  border-radius: 20px;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  :hover {
    background-color: rgb(16, 72, 185);
  }
`;
