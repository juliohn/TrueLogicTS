import React from "react";

import { ListRenderItem } from "react-native";

import ChatItem from "../ChatItem";

import { ChatProps, DataChatProps } from "./types";

import { Container, ContainerEmpty, TitleEmpty } from "./styles";

const Chats = ({ data }: DataChatProps) => {
  const renderItem: ListRenderItem<ChatProps> = ({ item }) => (
    <ChatItem key={item.id.toString()} chat={item} />
  );

  return (
    <Container
      data={data}
      initialNumToRender={100}
      keyExtractor={(item: ChatProps) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={
        <ContainerEmpty>
          <TitleEmpty>No chat found, try another filter</TitleEmpty>
        </ContainerEmpty>
      }
    />
  );
};

export default Chats;
