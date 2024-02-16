import { defaultTheme } from '@rneui/base';
import React from 'react';
import { View, Text } from 'react-native';
import * as C from './styles'
// import { Container } from './styles';

export default function Header() {
    return (
        <C.Header>
            <C.Title>Total em Vendas - Hoje </C.Title>
            <C.SomeValue>R$200,00</C.SomeValue>
        </C.Header>
    )
}