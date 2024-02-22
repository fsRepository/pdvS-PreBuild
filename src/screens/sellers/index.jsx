import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as C from '../Clients/clients/styles'
import HeaderFilter from '../../components/headerFilter';
import IconFilter from 'react-native-vector-icons/AntDesign'
import { Input, FAB, Overlay } from '@rneui/themed';
import RenderClients from '../../components/listClients';
import Colors from '../../../assets/colors.json'
import Add from 'react-native-vector-icons/Ionicons'
import OverlaySeller from '../../components/overlaySellers';
// import { Container } from './styles';

export default function Sellers() {
    const [visible, setVisible] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('Nome')
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [inativo, setInativo] = useState(false)
    //lista com alguns venbdedores pra teste
    const vendedores = [
        {
            nome: "João Silva",
            codigo: "VEN001",
            status: "ativo"
        },
        {
            nome: "Maria Santos",
            codigo: "VEN002",
            status: "ativo"
        },
        {
            nome: "Pedro Oliveira",
            codigo: "VEN003",
            status: "ativo"
        },
        {
            nome: "Ana Souza",
            codigo: "VEN004",
            status: "ativo"
        },
        {
            nome: "Lucas Costa",
            codigo: "VEN005",
            status: "ativo"
        },
        {
            nome: "Mariana Lima",
            codigo: "VEN006",
            status: "inativo"
        },
        {
            nome: "Fernando Almeida",
            codigo: "VEN007",
            status: "inativo"
        },
        {
            nome: "Carla Rodrigues",
            codigo: "VEN008",
            status: "ativo"
        },
        {
            nome: "Rafaela Oliveira",
            codigo: "VEN009",
            status: "ativo"
        },
        {
            nome: "Gabriel Santos",
            codigo: "VEN010",
            status: "inativo"
        }
    ];



    return (
        <C.Container>

            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Input
                    placeholder='Buscar Vendedores'
                    inputStyle={{ width: 350, backgroundColor: 'white', borderRadius: 10 }}
                    inputContainerStyle={{ width: 350, height: 40, borderBottomWidth: 0 }}
                    rightIcon={
                        <IconFilter
                            onPress={() => setVisible(!visible)}
                            name='filter' size={24} style={{ marginLeft: 10 }} color={Colors.orange} />}

                />



            </View>

            {
                visible ?
                    <HeaderFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> : ''
            }
            <C.TopList>

                <Text style={{ fontSize: 16 }}>Código</Text>
                <Text style={{ fontSize: 16 }}>Nome</Text>
            </C.TopList>
            <FlatList
                data={vendedores}
                keyExtractor={(item, index) => item.codigo.toString()}
                renderItem={({ item }) =>
                    <RenderClients item={item} type='sellers'
                        name={name}
                        setName={setName}
                        password={password}
                        setPassword={setPassword}
                        ativo={ativo}
                        setAtivo={setAtivo}
                        inativo={inativo}
                        setInativo={setInativo}


                    />
                }


            />
            <FAB
                onPress={() => setOpen(true)}
                style={{ bottom: 20 }}
                color={Colors.orange}
                icon={<Add name='add' size={24} color='white' />}
            />

            <Overlay
                isVisible={open}
                onBackdropPress={() => setOpen(!open)}
            >
                <OverlaySeller
                    name={name}
                    setName={setName}
                    password={password}
                    setPassword={setPassword}
                    ativo={ativo}
                    setAtivo={setAtivo}
                    inativo={inativo}
                    setInativo={setInativo}

                />
            </Overlay>
        </C.Container>
    )
}