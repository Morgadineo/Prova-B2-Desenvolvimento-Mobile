import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { signUp } from '../Supabase/autenticacao';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSignUp = async () => {
  const { data, error } = await signUp(email, senha);

  if (error) {
    alert('Erro: ' + error);
  } else {
    alert("Cadastro realizado com sucesso!");
    navigation.navigate("Login");
  }
};

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Já possui uma conta?</Text>
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
    backgroundColor: '#4CAF50',
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