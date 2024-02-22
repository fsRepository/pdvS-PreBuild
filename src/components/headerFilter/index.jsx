import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// import { Container } from './styles';

export default function HeaderFilter({ selectedFilter, setSelectedFilter }) {
    const filters = [{
        label: 'Nome',
        value: 'Nome'
    },
    {
        label: 'CNPJ',
        value: 'CNPJ'
    },

    ]


    const [open, setOpen] = useState(false)

    return (
        <View style={{ position: 'absolute', top: 60, right: 10 }}>
            <DropDownPicker
                style={{ width: 100 }}
                containerStyle={{ width: 100 }}
                open={open}
                setOpen={setOpen}
                value={selectedFilter}
                setValue={setSelectedFilter}
                items={filters}

            />
        </View>
    )
}

