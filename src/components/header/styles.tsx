import { styled } from "styled-components/native";
import Colors from '../../../assets/colors.json'

export const Header = styled.View`
background-color:${Colors.orange};
height:90px;
align-items:center;

`
export const Title = styled.Text`

margin-top:15px;
color:white;
font-size:18px
`
export const SomeValue = styled.Text`

color:white;
font-size:25px;
font-weight:bold;
`