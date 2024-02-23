import React, { useState, useContext, useEffect, } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { contextAuth } from '../../context';
import MoneyIcon from 'react-native-vector-icons/FontAwesome5'
import CardIcon from 'react-native-vector-icons/Entypo'
import RealIcon from 'react-native-vector-icons/FontAwesome6'
import PixIcon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../assets/colors.json'
import { Button, Input, Overlay } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';
import UserIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';
import { useToast } from 'react-native-toast-notifications';
import PdfIcon from 'react-native-vector-icons/AntDesign'
import NoteIcon from 'react-native-vector-icons/FontAwesome'
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import QrCodePix from '../../components/qrCodePix';

//pdffile1
//sticky-note

export default function CheckoutConfirm() {

    const { checkout, totalValue, setCheckout, setTotalItems, setTotalValue, totalItems } = useContext(contextAuth)
    const formasDePagamento = [
        { id: 1, nome: 'Dinheiro' },
        { id: 2, nome: 'C.Débito' },
        { id: 3, nome: 'C.Crédito' },
        { id: 4, nome: 'Crediário' },
        { id: 5, nome: 'Pix' }
    ];


    console.log(desconto)
    //função pra fechar o teclado quando clicar fora


    function CloseTeclado() {
        Keyboard.dismiss();
    }

    //armazena o metodo de pagamento utilizasdo pelo cliente
    const [method, setMethod] = useState('Dinheiro')
    //armazena o tipo de desconto, se e por porcentagem ou real
    const [tipoDesconto, setTipoDesconto] = useState('')
    const [desconto, setDesconto] = useState(0)
    const [recebido, setRecebido] = useState('')
    const [troco, setTroco] = useState('0,00')
    // quando o usuario der um desconto ao fazer uma venda
    //o valor total original sera armazenado nessa state.
    // e o valor total atual sera atualizado para o valor contento o desconto
    const [valuePrevent, setValuePrevent] = useState(totalValue)
    const [ativeErrorMessage, setAtiveErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('O valor recebido ainda não está completo')

    //const para armazenar os valores das parcelas
    const [selectParcel, setSelectParcel] = useState(1)
    const [valueParcel, setValueParcel] = useState('')
    const toast = useToast()
    //opçõesde parcelamento quando a forma de pagamento for cartão de credito
    //navegação
    const navigation = useNavigation()

    //abre e fecha o modal quando finaliza a comora
    const [finallyOpen, setFinallyOpen] = useState(false)

    const [openPix, setOpenPix] = useState(false)

    const parcelamentos = [
        { id: 1, parcelas: 1 },
        { id: 2, parcelas: 2 },
        { id: 3, parcelas: 3 },
        { id: 4, parcelas: 4 },
        { id: 5, parcelas: 5 },
        { id: 6, parcelas: 6 },
        { id: 7, parcelas: 7 },
        { id: 8, parcelas: 8 },
        { id: 9, parcelas: 9 },
        { id: 10, parcelas: 10 },
        { id: 11, parcelas: 11 },
        { id: 12, parcelas: 12 }
    ];


    function handleMethod(item) {
        setMethod(item.nome);
        console.log(method)

    }
    console.log(tipoDesconto)



    useEffect(() => {


    }, [])
    //sempre que o usuario receber um valor em uma venda, será feito o calculo para ver se tera troco e quanto será de troco
    function CalculatorDescont() {
        let totalReceive = valuePrevent;


        if (desconto !== '') {
            // Verifica se o desconto é uma porcentagem (se inclui o símbolo '%')
            if (desconto <= 100) {
                // Calcula o valor do desconto em porcentagem
                totalReceive = totalReceive * (1 - desconto / 100).toFixed(2);
                setTotalValue(totalReceive.toFixed(2))

            } else {
                // Se o desconto não incluir o símbolo de porcentagem, assume-se que é um valor monetário
                // Remove o símbolo de moeda (se houver) e converte o desconto para um número
                const discountValue = parseFloat(desconto.replace('R$', '').replace(',', '.'));
                // Subtrai o valor do desconto do total
                totalReceive -= discountValue;
                setTotalValue(totalReceive.toFixed(2))

            }
        } else {
            setDesconto(0)
        }

    }
    //função para calcular o valor recebido e o troco
    function CalculeRest() {
        let total = 0;
        if (recebido !== '') {
            // Remover o 'R$', substituir a vírgula por ponto e remover o ponto dos milhares
            const receiveformat = parseFloat(recebido.replace('R$', '').replace(/\./g, '').replace(',', '.'));
            const totalformat = totalValue; // Certifique-se de definir totalValue corretamente
            console.log(receiveformat);
            console.log(totalformat);
            total = totalformat - receiveformat;
            console.log('total', total);

            if (total > 0) {
                console.log('O valor recebido ainda não está completo. Falta pagar: ' + total.toFixed(2) + ' pago: ' + receiveformat.toFixed(2));
                setAtiveErrorMessage(true);
                setTroco('0,00');
            } else if (total < 0) {
                setAtiveErrorMessage(false);
                let trocoTotal = Math.abs(total);
                console.log('É preciso passar um troco para o cliente. Troco a ser dado: ', trocoTotal.toFixed(2));
                setTroco(trocoTotal.toFixed(2));
            } else {
                setAtiveErrorMessage(false);
                console.log('O valor recebido está completo.');
                setTroco('0,00');
            }
        }
    }



    useEffect(() => {

        CalculatorDescont()
        CalculeRest()

    }, [recebido, desconto, totalValue])



    //função pra calcular o parcelamento no cartao de credito
    function CalculatorCredit() {
        let total = totalValue;

        if (selectParcel !== 1) {
            const calc = total / selectParcel;
            console.log(selectParcel, 'vezes de', calc.toFixed(2))
            setValueParcel(calc.toFixed(2))
        } else {
            setValueParcel('')
        }
    }

    useEffect(() => {
        CalculatorCredit()

    }, [selectParcel])

    function ConfirmSale() {
        setFinallyOpen(true)


    }

    //função para gerar um pdf com o pagamento
    async function handlePrint() {
        let checkoutItens = '';
        checkout.forEach(item => {
            checkoutItens += `
                <p><strong>Produto:</strong> ${item.nome}</p>
                <p><strong>Quantidade:</strong> ${item.quantidade}</p>
                <p><strong>Valor Unitário:</strong> R$ ${item.valorUnitario}</p>
                <p><strong>Valor Total:</strong> R$ ${item.valor}</p>
                <br />
            `;
        });

        const htmlPedido = `
            <div style="font-family: monospace; font-size: 12px;">
                <h1 style="text-align: center;">Nota Fiscal</h1>
                ${checkoutItens}
                <p><strong>Desconto:</strong> ${desconto}</p>
                <p><strong>Valor Recebido:</strong> ${recebido}</p>
                <p><strong>Troco:</strong> ${troco}</p>
                <p><strong>Forma de Pagamento:</strong> ${method}</p>
                <p><strong>Parcelado:</strong> ${method === 'C.Crédito' ? 'Sim' : 'Não'}</p>
                <br />
                <p style="text-align: center;">Obrigado pela preferência!</p>
            </div>
        `;

        console.log(htmlPedido);

        if (htmlPedido && checkoutItens) {
            const pedidoHtml = htmlPedido;
            const { uri } = await Print.printToFileAsync({ html: pedidoHtml })

            if (uri.startsWith('file://')) {
                //posso compartilhar ou salvar o pdf 
                await Sharing.shareAsync(uri)
                // await Print.printAsync({ uri: uri });

            } else {
                console.log('uri inválido', uri)
            }


        }
    }

    //função para buscar impressoras
    const [printer, setPrinters] = useState([])
    async function HandleNfce() {

    }
    async function searchForPrinters() {

    }

    //mostra as formas de pagamento
    function RenderPayment({ item }) {
        return (
            <View  >
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', marginLeft: 15, borderWidth: 1,
                    borderRadius: 6,
                    borderColor: item.nome === method ? Colors.orange : 'grey', // Verifica se este item está selecionado
                    padding: 6,
                    width: 85

                }}

                    onPress={() => handleMethod(item)}
                >
                    {
                        item.nome === 'Dinheiro' ?
                            <MoneyIcon name='money-bill-wave' size={30} color={item.nome === method ? Colors.orange : 'grey'} /> :
                            item.nome === 'C.Débito' ?
                                <CardIcon name='credit-card' size={30} color={item.nome === method ? Colors.orange : 'grey'} /> :
                                item.nome === 'C.Crédito' ?
                                    <CardIcon name='v-card' size={30} color={item.nome === method ? Colors.orange : 'grey'} /> :
                                    item.nome === 'Crediário' ?
                                        <CardIcon name='credit' size={30} color={item.nome === method ? Colors.orange : 'grey'} /> :
                                        <PixIcon name='pix' size={30} color={item.nome === method ? Colors.orange : 'grey'} /> // Se nenhum dos casos corresponder, renderiza null ou outro componente de fallback
                    }

                    <Text style={{ fontSize: 16 }}>{item.nome}</Text>
                </TouchableOpacity>
            </View >

        )
    }

    return (
        <TouchableWithoutFeedback onPress={CloseTeclado}>
            <View onPress={CloseTeclado} style={{ flex: 1 }}>

                <View style={{ alignItems: 'center' }}>


                    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 10 }}
                        onPress={() => navigation.navigate('addclient')}
                    >
                        <UserIcon name='adduser' size={30} />

                    </TouchableOpacity>

                    {
                        desconto !== 0 || desconto === '' ?
                            <View style={{ alignItems: 'center', marginBottom: -10 }}>
                                <View style={{ backgroundColor: 'grey', width: 100, height: 2, position: 'absolute', top: 22 }}>

                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '700', color: 'grey' }}>R${valuePrevent}</Text>
                                </View>

                            </View>
                            : ''

                    }
                    <Text style={{ fontSize: 40, marginTop: 10, fontWeight: '700' }}>R${totalValue}</Text>


                    <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}> Forma de pagamento</Text>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => item.id.toString()}
                        data={formasDePagamento}
                        renderItem={({ item }) =>

                            <RenderPayment item={item} />
                        }

                    />


                </View>
                <KeyboardAvoidingView
                    behavior='padding'
                    style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }} >



                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Aplicar Desconto</Text>

                    <View style={{ flexDirection: 'row', gap: 30, }}>
                        <TouchableOpacity
                            onPress={() => setTipoDesconto('Porcentagem')}
                        >
                            <MoneyIcon name='percentage' size={30} color={tipoDesconto === 'Porcentagem' ? Colors.orange : 'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setTipoDesconto('Dinheiro')}
                        >
                            <RealIcon name='brazilian-real-sign' size={30} color={tipoDesconto === 'Dinheiro' ? Colors.orange : 'grey'} />
                        </TouchableOpacity>
                    </View>


                    {
                        tipoDesconto === 'Dinheiro' ?
                            <TextInputMask
                                style={{ width: 200, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: 20, textAlign: 'center', marginTop: 15 }}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: '',
                                }}
                                value={desconto}
                                placeholder={desconto.toString()}
                                onChangeText={(value) => setDesconto(value)}

                            /> :

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput

                                    style={{ width: 200, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: 20, textAlign: 'center', marginTop: 15 }}
                                    keyboardType='numeric'
                                    value={desconto}
                                    placeholder={desconto.toString()}
                                    onChangeText={(value) => setDesconto(value)}
                                />
                                <Text style={{ fontSize: 20 }}>%</Text>
                            </View>
                    }

                    {
                        method === 'C.Crédito' ?
                            <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>Parcelamento</Text> : ''
                    }
                    {
                        method === 'C.Crédito' ?

                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={parcelamentos}
                                horizontal
                                keyExtractor={(item, index) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <View style={{ marginStart: 10, marginEnd: 10 }}>

                                        <TouchableOpacity style={{
                                            backgroundColor: selectParcel === item.parcelas ? Colors.orange : 'grey',
                                            marginTop: 20, marginHorizontal: 5,
                                            width: 40, height: 40,
                                            alignItems: 'center', justifyContent: 'center',
                                            borderRadius: 6

                                        }}
                                            onPress={() => {
                                                setSelectParcel(item.parcelas)

                                            }}
                                        >
                                            <Text style={{ fontSize: 18 }}>{item.parcelas}x</Text>
                                        </TouchableOpacity>
                                    </View>

                                }
                            />
                            : ''
                    }
                    {
                        valueParcel !== '' && method === 'C.Crédito' ?
                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}
                            >{selectParcel}x de R${valueParcel} </Text> : ''
                    }

                    {method === 'C.Crédito' || method === 'Pix' ? '' :


                        <View>
                            <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10, textAlign: 'center' }}>Recebido</Text>

                            <TextInputMask

                                style={{ width: 200, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: 20, textAlign: 'center', marginTop: 10 }}
                                type={'money'}
                                value={recebido}
                                onChangeText={(text) => setRecebido(text)}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: '',
                                }}


                            />
                        </View>
                    }


                    {
                        ativeErrorMessage === true ?
                            <Text style={{ color: 'red' }}>{errorMessage}</Text> :
                            ''
                    }

                    {
                        method === 'Dinheiro' ?
                            <View>
                                <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10, textAlign: 'center' }}>Troco</Text>

                                <Text style={{
                                    width: 200, borderBottomColor: 'grey',
                                    borderBottomWidth: 1, fontSize: 20,
                                    textAlign: 'center', marginTop: 10,
                                    color: 'green'
                                }}>R${isNaN(troco) ? '' : troco}</Text>
                            </View>
                            : ''

                    }





                </KeyboardAvoidingView>
                <View style={{ alignItems: 'center' }}>

                    {
                        method === 'Pix' ?
                            <View>

                                <Button
                                    onPress={() => setOpenPix(true)}
                                    title='Gerar QR Code'
                                    buttonStyle={{ marginTop: 20 }}
                                />

                            </View>
                            : ''
                    }
                    <Button
                        onPress={ConfirmSale}
                        title='Finalizar Venda'
                        color={Colors.orange}
                        containerStyle={{ marginTop: 30, width: 200, borderRadius: 6 }}
                    />

                </View>

                {/*abre o qr code pix */}
                <Overlay
                    isVisible={openPix}
                    onBackdropPress={() => setOpenPix(!openPix)}
                >
                    <View style={{ width: 300, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>Pix para pagamento de R${totalValue}</Text>
                        <QrCodePix valor={totalValue} />

                    </View>
                </Overlay>

                {/*MODAL QIE SERA MOSTRADO QUANDO A VENDA FOR FINALIZADA */}
                <Overlay isVisible={finallyOpen} onBackdropPress={() => setFinallyOpen(!finallyOpen)}>
                    <View style={{ width: 300, height: 150, alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Pedido N.526505</Text>
                        <TouchableOpacity
                            onPress={handlePrint}
                            style={{
                                backgroundColor: '#e6e6e6', padding: 6, width: 250, borderRadius: 6,
                                flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Gerar PDF</Text>
                            <PdfIcon name='pdffile1' size={24} color='#b81414' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={HandleNfce}
                            style={{
                                backgroundColor: '#e6e6e6', padding: 6, width: 250, borderRadius: 6,
                                flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Gerar NFCE</Text>
                            <NoteIcon name='sticky-note-o' size={24} color='#d7d350' />
                        </TouchableOpacity>

                    </View>
                </Overlay>
            </View >
        </TouchableWithoutFeedback>

    )
}