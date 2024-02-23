import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// import { Container } from './styles';

export default function QrCodePix({ valor }) {
    const pixPayload = `00020101021226290014BR.GOV.BCB.PIXjoanderson2572@gmail.com520400005303986540${valor.toString().padStart(13, '0')}5802BR5913NOMEDOPAGADOR6008BRASILIA62290527teste`;
    console.log(pixPayload)
    return (
        <View>
            <QRCode
                value={pixPayload}
                size={250}
                color={'black'}
                backgroundColor='white'

            />

        </View>
    )
}