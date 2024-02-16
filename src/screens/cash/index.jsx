import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/headerDate';
import * as C from './styles'
// import { Container } from './styles';
import RenderHistoric from './../../components/renderHistoric/index';

export default function Cash() {

    const historicoDoCaixa = [
        { data: '2024-02-16', hora: '10:30', tipo: 'entrada', entrada: 1500, venda: 1001 },
        { data: '2024-02-16', hora: '14:15', tipo: 'saida', saida: 200 },
        { data: '2024-02-16', hora: '17:45', tipo: 'entrada', entrada: 800, venda: 1002 },
        { data: '2024-02-17', hora: '09:00', tipo: 'saida', saida: 350 },
        { data: '2024-02-17', hora: '12:20', tipo: 'entrada', entrada: 1200, venda: 1003 },
        { data: '2024-02-17', hora: '15:40', tipo: 'saida', saida: 500 },
        { data: '2024-02-18', hora: '11:10', tipo: 'entrada', entrada: 1800, venda: 1004 },
        { data: '2024-02-18', hora: '14:30', tipo: 'saida', saida: 700 },
        { data: '2024-02-19', hora: '10:00', tipo: 'entrada', entrada: 1000, venda: 1005 },
        { data: '2024-02-19', hora: '16:15', tipo: 'saida', saida: 300 }
    ];


    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date())
    return (
        <C.Container>
            <C.Header>
                <Header dateStart={dateStart}
                    dateEnd={dateEnd}
                    setDateStart={setDateStart}
                    setDateEnd={setDateEnd}
                />

                <C.Cashier>Operador: Joanderson</C.Cashier>
            </C.Header>
            <FlatList
                data={historicoDoCaixa}
                keyExtractor={(item, index) => item}
                renderItem={({ item }) =>
                    <RenderHistoric item={item} />
                }
            />

        </C.Container>
    )
}