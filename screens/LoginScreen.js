import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { signIn } from '../Supabase/signin';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  console.log("Realizando login", email);

  const { data, error } = await signIn(email, password);
  if (error) {
    console.log("Erro ao fazer login:", error);
    alert('Erro: ' + error);
  } else {
    console.log("Login bem-sucedido!");
    navigation.navigate("Home");
  }
};

  return (
      <View style={styles.container}>

          <TextInput
              style={styles.input}
              placeholder="Email de avaliador"
              onChangeText={setEmail}
          />

          <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.linkText}>Não possuo uma conta!</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#027aad',
  },
  input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginVertical: 8,
      backgroundColor: '#fff',
  },
  
  button: {
      width: '90%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#2196F3',
      marginTop: 10,
  },
  
  buttonText: {
      fontSize: 18,
      color: '#fff',
  },
  
  linkText: {
      fontSize: 16,
      color: 'white',
      marginTop: 10,
  },
});