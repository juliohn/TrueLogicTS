import React from "react";
import { HeaderProps } from "./types";
import { Container, Title, Content, Input } from "./styles";

export const Header = ({ handleChangeText }: HeaderProps) => {
  return (
    <Container>
      <Title>Chats</Title>
      <Content>
        <Input
          testID="search"
          placeholder="Search"
          onChangeText={handleChangeText}
        />
      </Content>
    </Container>
  );
};

export default Header;
