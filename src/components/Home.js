import NavBar from "./NavBar";
import Intro from "./Intro";
import Features from "./Features";
import styled, { css } from "styled-components";
import Services from "./Services";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Container>
        <NavBar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Features />
        <FeaturesShape />
      </Container>
      <Container>
        <Services />
        <ServiceShape />
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;
const IntroShape = styled.div`
  ${Shape};
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const FeaturesShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

export default Home;
