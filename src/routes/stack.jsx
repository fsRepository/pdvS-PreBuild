import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from "../splashScreen"
import Login from "../screens/login"
import Home from "../screens/home"
import Colors from '../../assets/colors.json'
import Sell from "../screens/sell"
import Cash from "../screens/cash"
import Checkout from "../screens/checkout"

import CheckoutConfirm from "../screens/checkout confirm"
import AddClient from "../screens/Clients/addClients"

export default function StackRoute() {
    const stack = createNativeStackNavigator()
    return (

        <stack.Navigator >

            <stack.Screen component={SplashScreen} name='splash'
                options={{
                    headerShown: false
                }}
            />
            <stack.Screen component={Login} name='login'
                options={{
                    headerShown: false
                }}
            />
            <stack.Screen component={Home} name='home'
                options={{
                    title: 'ePDV Mobile',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })
                }}
            />
            <stack.Screen component={Cash} name='cash'
                options={{
                    title: 'Caixa',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })
                }}
            />
            <stack.Screen component={Sell} name='sell'
                options={{
                    title: 'Vender',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })

                }}
            />
            <stack.Screen component={Checkout} name='checkout'
                options={{
                    title: 'Venda',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })

                }}
            />
            <stack.Screen component={CheckoutConfirm} name='confirm'
                options={{
                    title: 'Pagamento',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })

                }}
            />
            <stack.Screen component={AddClient} name='addclient'
                options={{
                    title: 'Adicionar Cliente',
                    headerTintColor: 'white',
                    headerStyle: ({ backgroundColor: Colors.orange })

                }}
            />
        </stack.Navigator>
    )
}