import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; // Importa o NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação dos components
import Autentication from './src/pages/Autentication';
import Home from './src/pages/Home';

// Importando os produtos
import tlous from './src/pages/Product/tlous';
import gtav from './src/pages/Product/gtav';
import tlous2 from './src/pages/Product/tlous2';
import rdr2 from './src/pages/Product/rdr2';
import farcry3 from './src/pages/Product/farcry3';
import re2 from './src/pages/Product/re2';
import callofduty from './src/pages/Product/callofduty';
import wdogs from './src/pages/Product/wdogs'
import re3 from './src/pages/Product/re3'

// Importando a tela de carrinho de compras
import Cart from './src/pages/Cart'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Autentication'>
        <Stack.Screen 
          name="Autentication" 
          component={Autentication}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />

        <Stack.Screen 
          name="tlous" 
          component={tlous}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="gtav" 
          component={gtav}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="tlous2" 
          component={tlous2}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="farcry3" 
          component={farcry3}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="rdr2" 
          component={rdr2}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="re2" 
          component={re2}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="wdogs" 
          component={wdogs}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="callofduty" 
          component={callofduty}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="re3" 
          component={re3}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={{
            title: 'Loja do Lucas Renan',
            headerStyle: {
              backgroundColor: '#ffc300'
            },
            headerTintColor: '#001d3d'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
