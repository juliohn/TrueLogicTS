import Styled from "styled-components/native";

export const Container = Styled.View`
    border-width: 0;
    height: 4px;
    border-radius: 10px;
    width: 75%;
    margin-left: 25%;
`;

export const ShadowTopLeft = Styled.View`
    border-width: 2px;
    border-color: #ffffff;
    shadow-color: #ffffff;
    shadow-offset: -2px -2px;
    shadow-opacity: 1px;
    shadow-radius: 2px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    
`;

export const ShadowBottomRight = Styled.View`
    border-width: 2px;
    border-color: #b4d0fc;
    shadow-color: #b4d0fc;
    shadow-offset: 2px 2px;
    shadow-opacity: 1px;
    shadow-radius: 2px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    
`;
