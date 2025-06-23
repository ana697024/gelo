import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

export default function ScrollScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título da Tela */}
      <Text style={styles.title}>Tela com ScrollView</Text>

      {/* Conteúdo Rolável */}
      <ScrollView style={styles.scrollContainer}>
        {/* Gera 20 itens para a lista */}
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Botão de Navegação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Navega para a tela 'Home'
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o contêiner ocupe todo o espaço disponível
    backgroundColor: '#f5f5f5', // Cor de fundo cinza claro
    padding: 20, // Preenchimento interno de 20 unidades
  },
  title: {
    fontSize: 24, // Tamanho da fonte grande
    fontWeight: 'bold', // Negrito
    marginBottom: 20, // Margem inferior
    color: '#333', // Cor do texto cinza escuro
    textAlign: 'center', // Alinhamento central
  },
  scrollContainer: {
    flex: 1, // Faz com que o ScrollView ocupe todo o espaço restante
  },
  item: {
    backgroundColor: '#fff', // Fundo branco para os itens
    padding: 15, // Preenchimento interno
    borderRadius: 10, // Cantos arredondados
    marginBottom: 10, // Margem inferior entre os itens
    borderWidth: 1, // Largura da borda
    borderColor: '#ddd', // Cor da borda cinza claro
  },
  itemText: {
    fontSize: 16, // Tamanho da fonte
    color: '#333', // Cor do texto
  },
  button: {
    backgroundColor: '#007bff', 
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 5, // Cantos arredondados
    alignItems: 'center', // Alinha o conteúdo (texto) ao centro horizontalmente
  },
  buttonText: {
    color: '#fff', // Cor do texto branco
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

// Isso geralmente estaria em um arquivo separado e importado
// export default styles;