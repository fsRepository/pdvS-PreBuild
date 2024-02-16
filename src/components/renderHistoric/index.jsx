import React from 'react';
import { View, Text } from 'react-native';
import * as C from './../../screens/cash/styles'
// import { Container } from './styles';

export default function RenderHistoric({ item }) {
    console.log(item)
    return (
        <C.Content>
            <View>
                <C.Type type={item.tipo} >{item.tipo.toUpperCase()}</C.Type>

                <Text>{item.data}</Text>
                <Text>{item.hora}</Text>


            </View>
            {
                item.tipo === 'entrada' ?
                    <C.NVenda>N de Venda {item.venda}</C.NVenda> : ''
            }
            <Text>{item.entrada}</Text>

        </C.Content>
    )
}