import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FAB, Input, Overlay } from '@rneui/themed';
import Icon2 from 'react-native-vector-icons/Ionicons'
import IconFilter from 'react-native-vector-icons/AntDesign'
import Colors from '../../../assets/colors.json'
// import { Container } from './styles';
import HeaderFilter from '../../components/headerFilter';
import * as C from './styles'
import ProductsList from '../../components/products';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
    const [visible, setVisible] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState("Nome")
    const groups = ['Limpeza', 'Doces', 'Fitness', 'Eletrônicos', 'Roupas', 'Acessórios'];
    const [selectedProduct, setSelected] = useState('')
    const [open, setOpen] = useState(false)

    //navegação
    const navigation = useNavigation()
    const listaDeProdutos = [
        {
            nome: 'Sabão em Pó',
            valor: 15.99,
            codigoDeBarras: '7891234567890',
            grupo: 'Limpeza'
        },
        {
            nome: 'Desinfetante',
            valor: 5.49,
            codigoDeBarras: '7892345678901',
            grupo: 'Limpeza'
        },
        {
            nome: 'Chocolate ao Leite',
            valor: 3.99,
            codigoDeBarras: '7893456789012',
            grupo: 'Doces'
        },
        {
            nome: 'Barras de Cereal',
            valor: 4.99,
            codigoDeBarras: '7894567890123',
            grupo: 'Fitness'
        },
        {
            nome: 'Fones de Ouvido',
            valor: 49.99,
            codigoDeBarras: '7895678901234',
            grupo: 'Eletrônicos'
        },
        {
            nome: 'Camiseta',
            valor: 29.99,
            codigoDeBarras: '7896789012345',
            grupo: 'Roupas'
        },
        {
            nome: 'Colar',
            valor: 19.99,
            codigoDeBarras: '7897890123456',
            grupo: 'Acessórios'
        },
        {
            nome: 'Bala de Caramelo',
            valor: 0.99,
            codigoDeBarras: '7898901234567',
            grupo: 'Doces'
        },
        {
            nome: 'Proteína em Pó',
            valor: 19.99,
            codigoDeBarras: '7899012345678',
            grupo: 'Fitness'
        },
        {
            nome: 'Laptop',
            valor: 1499.99,
            codigoDeBarras: '7890123456789',
            grupo: 'Eletrônicos'
        },
        {
            nome: 'Calça Jeans',
            valor: 59.99,
            codigoDeBarras: '8901234567890',
            grupo: 'Roupas'
        },
        {
            nome: 'Brinco',
            valor: 9.99,
            codigoDeBarras: '9012345678901',
            grupo: 'Acessórios'
        },
        {
            nome: 'Água Sanitária',
            valor: 3.49,
            codigoDeBarras: '0123456789012',
            grupo: 'Limpeza'
        },
        {
            nome: 'Barra de Chocolate Amargo',
            valor: 2.49,
            codigoDeBarras: '1234567890123',
            grupo: 'Doces'
        },
        {
            nome: 'Luvas de Academia',
            valor: 14.99,
            codigoDeBarras: '2345678901234',
            grupo: 'Fitness'
        }
    ];

    return (
        <C.Container>
            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                <Input
                    placeholder='Buscar Produtos'
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
                    <HeaderFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> :
                    ''
            }
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item}
                data={groups}
                renderItem={({ item }) =>
                    <C.Groups>
                        <C.GroupText>{item}</C.GroupText>

                    </C.Groups>
                }

            />


            <FlatList
                data={listaDeProdutos}
                keyExtractor={(item, index) => item.nome}
                renderItem={({ item }) =>

                    <ProductsList item={item} setSelected={setSelected} type='products' />}
            />

            <View style={{ position: "absolute", left: 0, right: 0, bottom: 30 }}>
                <FAB
                    onPress={
                        () => navigation.navigate('addProducts')
                    }
                    icon={<Icon2 name='add' color='white' size={24} />}
                    style={{ bottom: 20 }}
                    color={Colors.orange}
                />
            </View>

        </C.Container>
    )
}