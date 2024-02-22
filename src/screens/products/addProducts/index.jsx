import { Button, Input, Tab, TabView } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Fontisto'
import * as C from './../styles'
import Colors from '../../../../assets/colors.json'
export default function AddProducts() {
    const [product, setProduct] = useState('')
    const [value, setValue] = useState('')
    const [valueSell, setValueSell] = useState('')
    const [code, setCode] = useState('')
    const [stock, setStock] = useState('')
    const [group, setGroup] = useState('')
    const [index, setIndex] = useState(0)
    const groups = ['Limpeza', 'Doces', 'Fitness', 'Eletrônicos', 'Roupas', 'Acessórios'];
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Tab
                containerStyle={{ backgroundColor: Colors.orange }}
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3
                }}
                variant='primary'
            >
                <Tab.Item

                    title='Novo Produto'
                />
                <Tab.Item
                    title='Tributação'
                />
            </Tab>
            <TabView value={index} onChange={setIndex}
                animationType='spring'
            >
                <TabView.Item style={{ width: '100%' }}>
                    <View>
                        <View style={{ alignItems: "center", marginBottom: 10, marginTop: 10, }}>
                            <Icon name='shopping-store' size={70} color='grey' />
                            <C.Text>Adicionar produto</C.Text>
                        </View>
                        <C.Content>

                            <Input
                                placeholder='Produto'
                                inputStyle={{ borderBottomColor: 'grey', fontSize: 20 }}
                                containerStyle={{ width: 380, }}
                                value={product}
                                onChangeText={(text) => setProduct(text)}
                            />


                            <TextInputMask
                                placeholder='Valor de custo'
                                value={value}
                                onChangeText={(text) => setValue(text)}
                                style={{ width: 360, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: 20, alignItems: 'center' }}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: '',
                                }}

                            />
                            <TextInputMask
                                placeholder='Valor de venda'
                                value={valueSell}
                                onChangeText={(text) => setValueSell(text)}
                                style={{ width: 360, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: 20, alignItems: 'center', marginTop: 20 }}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: '',
                                }}

                            />

                            <Input
                                placeholder='Código de barras'
                                inputStyle={{ borderBottomColor: 'grey', fontSize: 20, marginTop: 10 }}
                                containerStyle={{ width: 380, }}
                                value={code}
                                onChangeText={(text) => setCode(text)}
                            />
                            <Input
                                placeholder='Estoque'
                                inputStyle={{ borderBottomColor: 'grey', fontSize: 20, }}
                                containerStyle={{ width: 380, }}
                                keyboardType='numeric'
                                value={stock}
                                onChangeText={(text) => setStock(text)}
                            />
                            <C.Label>Selecionar grupo</C.Label>
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
                        </C.Content>

                    </View>


                </TabView.Item>
            </TabView>


        </SafeAreaView>
    )
}