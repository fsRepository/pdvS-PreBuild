import React from 'react';
import { View, Text } from 'react-native';
import * as C from './../../screens/cash/styles'

// import { Container } from './styles';

export default function RenderHistoric({ item }) {
    console.log(item)
    return (
        <C.Content>
            <View style={{ alignItems: 'center' }}>
                <C.Type type={item.tipo} >{item.tipo.toUpperCase()}</C.Type>
                <Text> Caixa: 001</Text>

                <Text>{item.data}</Text>
                <Text>{item.hora}</Text>


            </View>
            {
                item.tipo === 'entrada' ?
                    <C.NVenda>N de Venda {item.venda}</C.NVenda> :
                    <C.NVenda>Motivo da retirada </C.NVenda>
            }
            {
                item.entrada ?
                    <C.MoneyText>R${item.entrada}</C.MoneyText> :
                    <C.MoneyText>R${item.saida}</C.MoneyText>

            }


        </C.Content>
    )
}