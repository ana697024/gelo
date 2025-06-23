import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import DetailsScreen from './screens/Details';
import ProfileScreen from './screens/Profile';
import ScrollScreen from './screens/Scroll';
import FormScreen from './screens/Form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Principal',
            headerStyle: {
              backgroundColor: '#007bff',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: '#dc3545',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Meu Perfil',
            headerStyle: {
              backgroundColor: '#17a2b8',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: 'ScrollView',
            headerStyle: {
              backgroundColor: '#28a745',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
        name='Forme'
        component={FormScreen}
        options={{title:'Formulário', headerStyle: {backgroundColor: '#007bff'}, headerTintColor:' #fff'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
