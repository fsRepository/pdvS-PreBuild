import { Platform } from 'react-native'

import styled from "styled-components/native";
import Colors from './../../../assets/colors.json';

export const ContainerLogin = styled.View`
  background-color: ${Colors.orange};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleLogin = styled.Text`
color:white;
font-weight:bold;
font-size:25px;
margin-bottom:20px;
`;

export const ImageBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  position: absolute;
 

`;

export const ContentLogin = styled.View`

width:80%;
height:50%;
border-radius:10px;
justify-content:center;
align-items:center;

`;

export const Inputs = styled.View`
align-items:center;
justify-content:center;
`

export const contentMenu = styled.TouchableOpacity`
align-items:center;
justify-content:center;
margin-top:10;
width:180;
height:120;
background-color:white;
border-radius:10px;
margin-left:15;
elevation:5;
shadow-color: #000000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
margin-start:10;





`
export const labelMenu = styled.Text`
color:${Colors.grey};
font-size:16;
margin-top:5px;
`
