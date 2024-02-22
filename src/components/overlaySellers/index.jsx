import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, CheckBox, Input } from '@rneui/themed';
import Colors from '../../../assets/colors.json'
// import { Container } from './styles';

export default function OverlaySeller({
    name,
    setName,
    password,
    setPassword,
    ativo,
    setAtivo,
    inativo,
    setInativo,
    itemSelected
}) {


    //muda o nome do botao dependendo se tem item ou nao
    const [titlebutton, setTitleButton] = useState('Registrar')
    //se tiver um vendedor selecionado ele abre o overlay com os dados do vendedor
    useEffect(() => {
        console.log(itemSelected)
        if (itemSelected) {
            setName(itemSelected.nome)
            setTitleButton('Editar')
            if (itemSelected.status === 'ativo') {
                setAtivo(true)
                setInativo(false)
            } else {
                setInativo(true)
                setAtivo(false)
            }
        } else {
            setName('')
            setPassword('')
            setAtivo(false)
            setInativo(false)
            setTitleButton('Registrar')
        }

    }, [itemSelected])
    return (
        <View style={{ width: 300, height: 300, alignItems: 'center' }}>
            <View >
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Adicionar vendedor</Text>
            </View>
            <Input
                placeholder='Nome'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Input
                placeholder='Senha'
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    title='Ativo'
                    checked={ativo}
                    onPress={() => {
                        setAtivo(true)
                        setInativo(false)
                    }}
                />
                <CheckBox
                    title='Inativo'
                    checked={inativo}
                    onPress={() => {
                        setAtivo(false)
                        setInativo(true)
                    }}
                />

            </View>
            <Button
                title={titlebutton}
                buttonStyle={{ backgroundColor: Colors.orange, width: 200, borderRadius: 6, marginTop: 10 }}
            />
        </View>
    )
}