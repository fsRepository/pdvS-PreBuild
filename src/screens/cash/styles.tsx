import { styled } from "styled-components/native";


export const Container = styled.View`
margin-top:10px;

`

export const Header = styled.View`

flex-direction:row;
justify-content:space-around;
align-items:center;

`
export const Cashier = styled.Text`

font-size:18px;
background-color:#e6e6e6;
padding:6px;

`

export const Content = styled.TouchableOpacity`

margin-start:10px;
margin-end:10px;
margin-top:10px;
flex-direction:row;
background-color:white;
gap:10px;
`
export const Type = styled.Text`
color: ${props => (props.type === 'entrada' ? 'green' : 'red')};
font-size:18px;
font-weight:500;

`
export const NVenda = styled.Text`

font-size:18px;
font-weight:500;
color:grey;

`