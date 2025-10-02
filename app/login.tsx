// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/profiles');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logonetflix2.png")} style={styles.logo} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Entrar</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Email ou número de telefone"
            placeholderTextColor="#8c8c8c"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#8c8c8c"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.helpContainer}>
            <TouchableOpacity>
              <Text style={styles.helpText}>Precisa de ajuda?</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Novo aqui? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Se inscreva agora.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000'
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  form: {
    width: '100%'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  input: { 
    backgroundColor: '#333', 
    color: '#fff', 
    padding: 16, 
    borderRadius: 4, 
    marginBottom: 16, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  button: { 
    backgroundColor: '#E50914', 
    padding: 16, 
    borderRadius: 4, 
    alignItems: 'center', 
    marginTop: 20
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  helpContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  helpText: {
    color: '#b3b3b3',
    fontSize: 14
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  signupLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});