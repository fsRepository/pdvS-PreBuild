import React, { useContext, createContext, useState } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
export const contextAuth = createContext({})
export default function Context({ children }) {

    const [selectedProduct, setSelected] = useState('')
    const [checkout, setCheckout] = useState([])
    const [totalValue, setTotalValue] = useState('')
    const [totalItems, setTotalItems] = useState('')
    const [total, setTotal] = useState('')
    const [name, setName] = useState('JoANDERSOFK')
    return (

        <contextAuth.Provider value={{
            selectedProduct,
            setSelected,
            checkout,
            setCheckout,
            totalValue,
            setTotalValue,
            totalItems,
            setTotalItems,
            total,
            setTotal,
            name
        }}>
            {children}
        </contextAuth.Provider>
    )
}