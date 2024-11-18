import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: 'https://img.freepik.com/vetores-premium/marca-de-selecao-do-simbolo-de-aprovacao-em-um-circulo-desenhado-a-mao-vector-sinal-verde-ok-aprovacao-ou-lista-de-verificacao-de-desenvolvimento-marca-de-escolha-pessoal_165079-648.jpg' }}
      />
      <Text style={styles.successText}>Cadastro realizado com sucesso!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Assumindo que você tem uma tela de Login
      >
        <Text style={styles.buttonText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#027aad', // Um tom de azul escuro
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15, // Adicionando bordas arredondadas à imagem
  },
  successText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde para o botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});