import styled from 'styled-components/native';
import Colors from './../../assets/colors.json';

export const ContainerSplash = styled.View`
  align-items: center;
  gap: 2px;
  background-color: ${Colors.orange};
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TextLogo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;


`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;
