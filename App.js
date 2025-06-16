
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/home';
import Detalies from './screens/detalies';
import ProfileScreen from './screens/Profile';

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
            headerStyle: { backgroundColor: '#007bff' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Details"
          component={Detalies}
          options={{
            title: 'Detalhes',
            headerStyle: { backgroundColor: '#dc3545' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
