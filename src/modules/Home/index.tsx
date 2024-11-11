import React, { useState } from "react";

import Header from "../../components/Header";

import Chats from "../../components/Chats";

import CHATS from "../../../chats.json";

import { Container, Content } from "./styles";

import { ChatProps } from "../../components/Chats/types";

const Home = () => {
  const [currentChat, setCurrentChat] = useState<ChatProps[]>(CHATS);

  function handleFilter(filter: string) {
    if (filter.length === 0) {
      setCurrentChat(CHATS);
    }

    const filteredChat = CHATS.filter(function (item) {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    setCurrentChat(filteredChat);
  }
  return (
    <Container>
      <Header handleChangeText={handleFilter} />
      <Content>
        <Chats data={currentChat} />
      </Content>
    </Container>
  );
};

export default Home;
