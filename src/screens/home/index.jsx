import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/header';
import ListMenu from '../../../assets/menuList.json'
import * as C from './../styles/globalStyles'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/Foundation'
import Colors from '../../../assets/colors.json'
// import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation()
    //função que renderiza o menu
    function RenderMenu({ item }) {

        return (
            <C.contentMenu
                onPress={() => navigation.navigate(item.route)}
            >
                {item.icon === 'shopping-cart' || item.icon === 'settings' || item.icon === 'users' ?
                    <Icon name={item.icon} size={40} color="#4A4F54" /> : item.icon === 'cash-register' ?
                        <Icon2 name={item.icon} size={40} color="#4A4F54" /> : item.icon === 'shop' ?
                            <Icon3 name={item.icon} size={40} color="#4A4F54" /> : item.icon === 'users' ?
                                <Icon4 name={item.icon} size={40} color="#4A4F54" /> : item.icon === 'clipboard-notes' ?
                                    <Icon5 name={item.icon} size={40} color="#4A4F54" /> : ''

                }

                <C.labelMenu>{item.title}</C.labelMenu>
            </C.contentMenu>
        )
    }
    return (


        <View>
            <Header />
            <FlatList

                numColumns={2}
                data={ListMenu}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => <RenderMenu item={item} />}
            />
        </View>

    )
}