import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Detalies ({ navigation, route }) {
const {mensagem} = route.paramns || {}; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela detalhes</Text>
      <Text style={styles.mensagem}> { mensagem || "nenhuma mensagem"} </Text>
    
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>volta</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mensagem: {
    icontSize: 18,
    color: '#133',
    marginBottom: 20,
  }
});