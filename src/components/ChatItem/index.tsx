import React from "react";

import Divider from "../Divider";

import { ChatProps } from "../Chats/types";

import {
  Container,
  ContainerItem,
  ImageContainer,
  Picture,
  ShadowTopLeft,
  ShadowBottomRight,
  Information,
  Name,
  Summary,
  Time,
  ContainerTime,
} from "./styles";

const ChatItem = ({ chat }: { chat: ChatProps }) => {
  return (
    <Container>
      <ContainerItem testID="chat-item">
        <ImageContainer>
          <Picture testID="image" source={{ uri: chat.picture }} />
          <ShadowTopLeft />
          <ShadowBottomRight />
        </ImageContainer>
        <Information>
          <Name testID="name">{chat.name}</Name>
          <Summary testID="summary" numberOfLines={2} ellipsizeMode="tail">
            {chat.summary}
          </Summary>
        </Information>
        <ContainerTime>
          <Time testID="time">{chat.time}</Time>
        </ContainerTime>
      </ContainerItem>
      <Divider />
    </Container>
  );
};

export default ChatItem;
