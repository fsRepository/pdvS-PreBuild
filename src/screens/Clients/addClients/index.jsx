import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import User from 'react-native-vector-icons/FontAwesome5'
import * as C from './styles'
import Colors from './../../../../assets/colors.json'
// import { Container } from './styles';
import { TextInputMask } from 'react-native-masked-text';
import Toast from 'react-native-toast-message';

export default function AddClient() {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')

    //salva o cliente e envia pro banco de dados
    //quando realizar a função , preciso enviar pro contexto. pra poder recuperar o client na tela de pagamento
    async function RegisterClient() {
        if (name !== '' && email !== '' && cnpj !== '') {
            Toast.show({
                type: 'success',
                text1: 'Cliente Cadastrado'
            })

        } else {
            Toast.show({
                type: 'info',
                text1: 'Preencha os campos vazios'
            })
            console.log('Preencha os campos vazios')
        }
    }

    return (
        <C.Container>
            <View >
                <User name='user-circle' size={100} color='grey' />
            </View>
            <C.Text>Adicionar Cliente</C.Text>
            <Input
                inputStyle={{ width: 350, borderBottomWidth: 1, borderColor: 'grey' }}
                containerStyle={{ width: 350 }}
                placeholder='Nome'
                value={name}
                onChangeText={(text) => setName(text)}
            />


            <TextInputMask
                style={{ width: 330, borderBottomWidth: 1, borderColor: 'black', fontSize: 18, marginBottom: 10 }}
                type={'cnpj'}
                value={cnpj}
                onChangeText={(text) => setCnpj(text)}
                placeholder='CNPJ'


            />
            <Input
                containerStyle={{ width: 350 }}
                inputStyle={{ width: 350, borderBottomWidth: 1, borderColor: 'grey' }}
                placeholder='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Button
                onPress={RegisterClient}
                title='Cadastrar Cliente'
                style={{ width: 200, borderRadius: 6 }}
                color={Colors.orange}
            />
        </C.Container>
    )
}