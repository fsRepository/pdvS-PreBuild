import { Overlay } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import OverlaySeller from '../overlaySellers';
import * as C from './../../screens/Clients/clients/styles'

// import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function RenderClients({ item, type, name,
    setName,
    password,
    setPassword,
    ativo,
    setAtivo,
    inativo,
    setInativo,
    itemSelected }) {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState('')
    const navigation = useNavigation()
    return (
        type === 'sellers' ?

            <C.ListSellers
                onPress={
                    () => {
                        setVisible(true)
                        setSelected(item)
                    }
                }
            >
                <C.ItemText>00{item.codigo}</C.ItemText>
                <C.ItemText>{item.nome}</C.ItemText>

                <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                    <OverlaySeller
                        name={name}
                        setName={setName}
                        password={password}
                        setPassword={setPassword}
                        ativo={ativo}
                        setAtivo={setAtivo}
                        inativo={inativo}
                        setInativo={setInativo}

                        itemSelected={selected} />
                </Overlay>
            </C.ListSellers> :
            <C.List
                onPress={() => navigation.navigate('addclient', { item })}
            >
                <C.ItemText>00{item.codigo}</C.ItemText>
                <C.ItemText>{item.nome}</C.ItemText>
                <C.ItemText>{item.cnpj}</C.ItemText>

            </C.List>




    )
}