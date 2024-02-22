import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/splashScreen/index'
import { NavigationContainer } from '@react-navigation/native'
import StackRoute from './src/routes/stack';
import Context from './src/context';
import { ToastProvider } from 'react-native-toast-notifications';
export default function App() {
  return (

    <NavigationContainer>

      <Context>
        <ToastProvider>
          <StackRoute />
        </ToastProvider>

      </Context>



    </NavigationContainer>


  );
}

