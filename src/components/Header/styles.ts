import Styled from "styled-components/native";

export const Container = Styled.View`
    flex-direction: column;
    margin-vertical: 16px;
    margin-horizontal: 24px;
`;

export const Title = Styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
    margin-left: 8px;
    color: #3b3b3b;
`;

export const Content = Styled.View`
`;

export const Input = Styled.TextInput`
    height: 46px;
    width: 100%;
    padding-horizontal: 24px;
    border-radius: 32px;
    border-width: 1;
    border-color: #b4d0fc;
    background-color: #f1f7fc;
`;
