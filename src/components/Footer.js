import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <CopyRight>Khadija Rejjaoui &copy;</CopyRight>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
margin-right: 20px;
cursor: pointer;
:hover{
    text-decoration: underline;
}
`;
const CopyRight = styled.span``;
export default Footer;
