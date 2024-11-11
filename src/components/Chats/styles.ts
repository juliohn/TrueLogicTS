import Styled from "styled-components/native";

export const ContainerEmpty = Styled.View`
    padding-vertical: 16px;
    padding-horizontal: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleEmpty = Styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Container = Styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
