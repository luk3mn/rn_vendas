import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Autentication({navigation}) {
  
  const [name, setName] = useState('');
  
  const entrar = function() {
    if (!name) return
    
    navigation.navigate('Home', {name})
    setName(""); // Limpa o campo
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={ (name) => setName(name) }
        placeholder='Nome do cliente'
        placeholderTextColor={'#FFF'}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={entrar}
      >
        <Text style={styles.bntText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#001d3d'
  },
  input: {
    marginVertical: 6,
    padding: 10,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#ffc300',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: "#FFF"
  },
  button: {
    backgroundColor: '#ffc300',
    width: 100,
    padding: 8,
    marginVertical: 15,
    borderRadius: 18,
    alignSelf: 'flex-end'
  },
  bntText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000814'
  }
})