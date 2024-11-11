import Styled from "styled-components/native";

export const Container = Styled.View`
    margin:0 10px;
`;

export const ContainerItem = Styled.View`
    padding-vertical: 16px;
    padding-horizontal: 16px;
    flex-direction: row;
    alignItems: center;
`;

export const ImageContainer = Styled.View`
    margin-right: 16px;
`;

export const Picture = Styled.Image`
    width: 68px;
    height: 68px;
    border-radius: 68px;
    border-width: 4px;
    border-color: #dde8fa;
`;

export const ShadowTopLeft = Styled.View`
    border-width: 2px;
    border-color: #ffffff;
    shadow-color: #ffffff;
    shadow-offset: -4px -4px;
    shadow-opacity: 1px;
    shadow-radius: 4px;
    position: absolute;
    left: 0;
    top: 0;
    borderRadius: 64px;
    width: 100%;
    height: 100%;
    
`;

export const ShadowBottomRight = Styled.View`
    border-width: 2px;
    border-color: #b4d0fc;
    shadow-color: #b4d0fc;
    shadow-offset: 4px 4px;
    shadow-opacity: 1px;
    shadow-radius: 6px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 64px;
    width: 100%;
    height: 100%;
    
`;

export const Information = Styled.View`
    flex: 1;
    flex-direction: column;
    margin-right: 20px;
`;

export const Name = Styled.Text`
    font-size   : 16px;
    margin-bottom: 8px;
    font-weight : bold;
`;

export const Summary = Styled.Text`
    font-size: 12px;
`;

export const Time = Styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

export const ContainerTime = Styled.View``;
