import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu from 'react-native-vector-icons/Entypo'
// import { Container } from './styles';

export default function ButtonMenu({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Menu name='menu' color='white' size={27} />
        </TouchableOpacity>
    )
}