import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import {useState, useEffect,}from 'react'; 
import ItemCard from './ItemCard';
const DATA = [ 
  { id: '1', title: 'Item 1', description: 'Descrição do item 1' },
  { id: '2', title: 'Item 2', description: 'Descrição do item 2' },
  { id: '3', title: 'Item 3', description: 'Descrição do item 3' },
  { id: '4', title: 'Item 4', description: 'Descrição do item 4' },
  { id: '5', title: 'Item 5', description: 'Descrição do item 5' },
];

export default function Home({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count===10) {
      Alert.alert('parabentes!', 'vc atingiu 10 cliques!')
    }
  }, [count]); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de itens</Text>
      <View style={styles.couterConteriner}>
        <Text style={styles.countText}>Contador: {count}</Text>

      <TouchableOpacity
        style={styles.countButton}
        onPress={() => setCount((prev)=> prev + 1 )}
        
      >
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.countButton,{backgroundColor: '#dc3545'}]}
        onPress={() => setCount((0) )}>
     
        <Text style={styles.buttonText}>Resetar</Text>
       </TouchableOpacity>
      <TouchableOpacity
       style={[styles.countButton,{backgroundColor: '#28a745'}]}
        onPress={() =>navigation.navigation('profile' )}>
     
       <Text style={styles.buttonText}>ir para perfil </Text>
       </TouchableOpacity>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  couterConteriner: {
    alignItems:'center',
    marginBottom: 20,
  },
 countText: { 
   fontSize: 18,
  color: '#333',
  marginBottom: 10,
 },
  countButton: {
    backgroundColor: '#007bff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
