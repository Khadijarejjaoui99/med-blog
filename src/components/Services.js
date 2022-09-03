import React, { useState } from "react";
import styled from "styled-components";
import Shapes from "./Shapes";

function Services() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src="images/img-3.png" />

        <Video
          open={open}
          src="https://www.youtube.com/embed/KJ1Yl0VLqaE?autoplay=1&mute=0"
        ></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            autem, expedita, atque reprehenderit veniam repellendus quo
            voluptatum blanditiis pariatur laborum, modi odit ratione fugiat
            voluptatibus perferendis minima. Tenetur, amet perspiciatis.
          </Desc>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            autem, expedita, atque reprehenderit rspiciatis.
          </Desc>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            autem, expedita, atque reprehenderit rspiciatis.autem, expedita,
            atque reprehenderit rspiciatis.autem, expedita, atque reprehenderit
            rspiciatis.
          </Desc>
          <Button onClick={() => setOpen(true)}>
            <Icon className="fa-solid fa-play"></Icon>How it works
          </Button>
        </Wrapper>
      </Right>
      <Shapes
        fShape="file-video"
        sShape="question"
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
  position: relative;
  width: 50%;
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 100%;
  height: 100%;
  margin-left: 60px;
`;
const Video = styled.iframe`
  width: 95%;
  height: 400px;
  display: ${(props) => !props.open && "none"};
  position: absolute;
  top: 100px;
  bottom: 0;
  right: 0;
  margin: auto;
`;
const Right = styled.div`
  padding-top: 100px;
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 40px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const Button = styled.button`
  width: 180px;
  border: none;
  color: white;
  background-color: darkblue;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background-color: rgb(16, 72, 185);
  }
`;
const Icon = styled.i`
  font-size: 20px;
  color: white;
  margin-right: 10px;
`;
export default Services;
