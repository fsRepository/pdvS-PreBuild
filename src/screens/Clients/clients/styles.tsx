import { styled } from "styled-components/native";

export const Container = styled.View`
flex:1;
margin-start:10;
margin-end:10;
`

export const List = styled.TouchableOpacity`
flex-direction:row; 
justify-content:space-around;
background-color:white;
padding:6px;
margin-top:10px;
`
export const ListSellers = styled.TouchableOpacity`
flex-direction:row; 
justify-content:space-between;
background-color:white;
padding:6px;
margin-top:10px;
`

export const TopList = styled.View`
flex-direction:row; 
justify-content:space-around;
align-items:center;
`
export const ItemText = styled.Text`

font-size:18px;
font-weight:500;
`