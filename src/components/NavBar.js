import React from "react";
import styled from "styled-components";
function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MedBlog</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Blogs</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Write</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>LogOut</MenuItem>
          </Menu>
        </Left>
        <Right>
          <Button>JOIN TODAY!</Button>
        </Right>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-weight: bold;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const Right = styled.div``;
const Button = styled.div`
  border: 2px solid white;
  font-weight: bold;
  background-color: crimson;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.2 s ease-in-out;
  :hover {
    background-color: white;
    color: crimson;
  }
`;

export default NavBar;
