import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { Container } from './styles';
import { format } from 'date-fns';

export default function Header({
    dateStart,
    dateEnd,
    setDateStart,
    setDateEnd

}) {

    const [open, setOpen] = useState(false);
    const [pickerType, setPickerType] = useState('');
    const showDatePicker = (type) => {
        setOpen(true);
        setPickerType(type);
    };

    const hideDatePicker = () => {
        setOpen(false);
    };

    const handleDateChange = (event, selectedDate) => {
        hideDatePicker();
        if (selectedDate) {
            if (pickerType === 'start') {

                setDateStart(selectedDate)

                console.log("Data de início selecionada:", selectedDate);
            } else if (pickerType === 'end') {
                setDateEnd(selectedDate);

                console.log("Data de fim selecionada:", selectedDate);
            }
        }
    };
    return (
        <View style={{}}>
            <View style={{ marginTop: 5, gap: 5 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#e6e6e6', width: 200, padding: 6 }}
                    onPress={() => showDatePicker('start')}>
                    <Text
                        style={{ fontWeight: '500' }}
                    >Inicio: {format(dateStart, "dd/MM/yyyy")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#e6e6e6', width: 200, padding: 6 }}
                    onPress={() => showDatePicker('end')}>
                    <Text style={{ fontWeight: '500' }}>Fim: {format(dateEnd, "dd/MM/yyyy")}</Text>
                </TouchableOpacity>
            </View>
            {
                open && (
                    <DateTimePicker
                        value={pickerType === 'start' ? dateStart : dateEnd}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                )
            }
        </View >
    )
}