import { CheckBox, Input } from '@rneui/themed';
import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import * as C from '../styles'
import DropDownPicker from 'react-native-dropdown-picker';
import { contextAuth } from '../../../context';
// import { Container } from './styles';

export default function WebService() {
    const [openDrop, setOpenDrop] = useState(false)
    const { uf, setUf,
        df,
        setDf,
        http,
        setHttp,
        xml,
        setXml,
        ssLib,
        setSsLib,
        cript,
        setCript,
        sslType,
        setSslType,
        producao,
        setProducao,
        setHomologacao,
        homologacao } = useContext(contextAuth)
    const estadosDoBrasil = [
        { id: 1, estado: "Acre" },
        { id: 2, estado: "Alagoas" },
        { id: 3, estado: "Amapá" },
        { id: 4, estado: "Amazonas" },
        { id: 5, estado: "Bahia" },
        { id: 6, estado: "Ceará" },
        { id: 7, estado: "Distrito Federal" },
        { id: 8, estado: "Espírito Santo" },
        { id: 9, estado: "Goiás" },
        { id: 10, estado: "Maranhão" },
        { id: 11, estado: "Mato Grosso" },
        { id: 12, estado: "Mato Grosso do Sul" },
        { id: 13, estado: "Minas Gerais" },
        { id: 14, estado: "Pará" },
        { id: 15, estado: "Paraíba" },
        { id: 16, estado: "Paraná" },
        { id: 17, estado: "Pernambuco" },
        { id: 18, estado: "Piauí" },
        { id: 19, estado: "Rio de Janeiro" },
        { id: 20, estado: "Rio Grande do Norte" },
        { id: 21, estado: "Rio Grande do Sul" },
        { id: 22, estado: "Rondônia" },
        { id: 23, estado: "Roraima" },
        { id: 24, estado: "Santa Catarina" },
        { id: 25, estado: "São Paulo" },
        { id: 26, estado: "Sergipe" },
        { id: 27, estado: "Tocantins" }
    ];

    const states = estadosDoBrasil.map((item) => ({


        label: item.estado,
        value: item.estado
    }))

    return (
        <C.Container
            showsVerticalScrollIndicator={false}
        >
            <C.Label>UF De Destino</C.Label>
            <DropDownPicker
                open={openDrop}
                setOpen={setOpenDrop}
                items={states}
                value={uf}
                setValue={setUf}
            />
            <C.Label>Ambiente de Destino</C.Label>
            <C.ContainerChekBox>
                <CheckBox
                    title='Produção'
                    checked={producao}
                    onPress={() => {
                        setProducao(true)
                        setHomologacao(false)
                    }}
                />
                <CheckBox
                    title='Homologação'
                    checked={homologacao}
                    onPress={() => {
                        setProducao(false)
                        setHomologacao(true)
                    }}
                />
            </C.ContainerChekBox>

            <Input
                label='Versão DF'
                value={df}
                onChangeText={(text) => setDf(text)}

            />
            <Input
                label='CryptLib'
                value={cript}
                onChangeText={(text) => setCript(text)}

            />
            <Input
                label='HttpLib'
                value={http}
                onChangeText={(text) => setHttp(text)}

            />
            <Input
                label='SSLLib'
                value={ssLib}
                onChangeText={(text) => setSsLib(text)}

            />
            <Input
                label='XMLSignLib'
                value={xml}
                onChangeText={(text) => setXml(text)}

            />
            <Input
                label='SSLType'
                value={sslType}
                onChangeText={(text) => setSslType(text)}

            />
        </C.Container>
    )
}