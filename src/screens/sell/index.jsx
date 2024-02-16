import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import { FAB, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../../assets/colors.json'
import * as C from './styles.tsx'
import Icon2 from 'react-native-vector-icons/AntDesign'
import ProductsList from '../../components/products';
import { useNavigation } from '@react-navigation/native';
import { contextAuth } from '../../context';
// import { Container } from './styles';
export default function Sell() {

    const groups = ['Limpeza', 'Doces', 'Fitness', 'Eletrônicos', 'Roupas', 'Acessórios'];
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
    const [selectedProduct, setSelected] = useState('')

    // controla a altura e laergura da tab view, pra pooder ser feita a animacao
    const [width, setWidth] = useState(new Animated.Value(350));
    const [height, setHeight] = useState(new Animated.Value(45));
    const [ok, setOk] = useState(false)
    //função para animar a view sempre que um produto for adicionado no carrinho

    useEffect(() => {
        const animateIn = Animated.timing(
            width,
            {
                toValue: 380,
                duration: 50,
                delay: 50,
                useNativeDriver: false
            }
        );

        const animateOut = Animated.timing(
            width,
            {
                toValue: 350,
                duration: 50,
                delay: 50,
                useNativeDriver: false
            }
        );

        const animateInHei = Animated.timing(
            height,
            {
                toValue: 50,
                duration: 50,
                delay: 50,
                useNativeDriver: false
            }
        );

        const animateOutHei = Animated.timing(
            height,
            {
                toValue: 45,
                duration: 50,
                delay: 50,
                useNativeDriver: false
            }
        );

        const sequenceWidth = Animated.sequence([animateIn, animateOut]);
        const sequenceHeight = Animated.sequence([animateInHei, animateOutHei]);

        sequenceWidth.start(() => {
            // Após a conclusão da animação de largura, inicie a animação de altura
            sequenceHeight.start(() => {
                // Função de callback chamada após a conclusão da sequência de animação de altura
                console.log('Animação de altura concluída');
            });
        });
    }, [checkout, ok]);



    const navigation = useNavigation()

    //pegamndo const que armazena os valores do chekout do contexto
    //const {checkout,setCheckout,totalValue,setTotalValue,totalItems,setTotalItems,total,setTotal} = useContext(Context)
    const { checkout, total, totalValue, setCheckout, setTotal, setTotalItems, setTotalValue, totalItems } = useContext(contextAuth);
    //função pra adicionar os items no carrinho
    //sempre que clicar em um item e ele for armazenado em selectedProdut, ele  e enviado ora ca
    useEffect(() => {
        function addCheckout() {
            if (selectedProduct !== '') {
                // Verifique se o produto selecionado já está no carrinho
                const existingProductIndex = checkout.findIndex(product => product.nome === selectedProduct.nome);
                if (existingProductIndex !== -1) {
                    // Se o produto já existir, atualize sua quantidade e valor total
                    const updatedCheckout = [...checkout];
                    updatedCheckout[existingProductIndex] = {
                        ...updatedCheckout[existingProductIndex],
                        quantidade: updatedCheckout[existingProductIndex].quantidade + 1,
                        // Atualiza o valor do produto fixado em duas casas decimais
                        valor: parseFloat((updatedCheckout[existingProductIndex].valor + selectedProduct.valor).toFixed(2)),
                        valorUnitario: selectedProduct.valor.toFixed(2)
                    };
                    setOk(!ok)
                    setCheckout(updatedCheckout);
                } else {
                    // Se o produto não existir, adicione-o ao carrinho
                    setCheckout(oldCheckout => ([
                        ...oldCheckout,
                        { ...selectedProduct, quantidade: 1, valor: parseFloat(selectedProduct.valor.toFixed(2)), valorUnitario: selectedProduct.valor.toFixed(2) }
                    ]));
                    setOk(!ok)
                }



            }
        }

        addCheckout();
    }, [selectedProduct,]);


    //função pra somar o valor total da compra
    function Some() {
        let sum = 0; const total = checkout.reduce((acc, currentItem) => {
            return acc + currentItem.valor;
        }, 0)

        setTotalValue(total.toFixed(2))


        const totalItem = checkout.reduce((acc, currentValue) => {
            return acc + currentValue.quantidade;
        }, 0)

        setTotalItems(totalItem)

    }

    useEffect(() => {

        Some()


    }, [checkout])

    //pega a quantidade de items presente no careinho


    return (
        <C.Container>


            <C.HeaderFilter>
                <Input
                    placeholder='Buscar Produtos'
                    inputStyle={{ width: 350, backgroundColor: 'white', borderRadius: 10 }}
                    inputContainerStyle={{ width: 350, height: 40, borderBottomWidth: 0 }}
                    rightIcon={<Icon2 name='search1' size={24} style={{ marginLeft: 10 }} />}

                />

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
                    vertical
                    keyExtractor={(item, index) => item.nome}
                    data={listaDeProdutos}
                    renderItem={({ item }) =>
                        <ProductsList item={item} setSelected={setSelected} />
                    }

                />
            </C.HeaderFilter>





            {
                checkout.length === 0 ?
                    '' :
                    <Animated.View
                        style={{
                            backgroundColor: Colors.orange,
                            position: 'absolute',
                            height: height,
                            width: width,
                            bottom: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 6,

                        }}

                    >

                        <TouchableOpacity

                            onPress={() => navigation.navigate('checkout')}>
                            <C.ChekText>
                                {totalItems} itens = R${totalValue}
                            </C.ChekText>
                        </TouchableOpacity>


                    </Animated.View>

            }



        </C.Container>
    )
}