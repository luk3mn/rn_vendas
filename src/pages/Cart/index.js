// Importação das bibliotecas
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Button, TouchableOpacityBase, TouchableOpacity } from "react-native"

// Importação dos componentes
import ItemList from "../../components/ItemList";

// IMportação do async storage
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Cart({ navigation, route }) {

  const [item, setItem] = useState([]);
  
  const selected = route.params.product;
  // const id = route.params.id;
  // const selected = 'teste'

  // Armazenamento de dados
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@item', JSON.stringify(value));
    } catch (e) {
      console.log("ERRO NO SALVAMENTO: " + e);
    }
  }

  // Leitura de dados
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@item');
      if (value) {
        setItem(JSON.parse(value));
      }
    } catch (e) {
      console.log("ERRO NA RECUPERAÇÃO: " + e)
    }
  }
  
  // Adiciona os items da compra à lista
  const addItem = function() {
    // if (id == 1) return;

    const data = {
      key: selected,
      item: selected
    };
    
    setItem([...item, data]);
  }

  /* AJUSTES
    - Replicar os ajustes da tela TLOUS para as outras telas de compras
      ou tentar montar um modal e pegar de forma dinamica
    - Corrigir o problema de não limpar a lista quando encerrar a compra  
  */
  const cleanItems = function() {
    setItem('');
    // navigation.navigate('Autentication');
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(item);
  }, [item]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121d31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Produtos selecionados </Text>
        <Text style={styles.item}>Item Escolhido: {selected}</Text>
        <TouchableOpacity
          style={styles.btnItems}
          onPress={addItem}
        >
          <Text style={styles.btnItemsText}>Adicionar Item</Text>
        </TouchableOpacity>
      </View>

      {/* Construção da lista */}
      <FlatList 
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={item}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({ item }) => <ItemList data={item}/> }
      />
      <Button 
        title="Encerrar Compra"
        onPress={cleanItems}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000814"
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: "#fff"
  },
  item: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff"
  },
  btnItems: {
    backgroundColor: "#ffc300",
    width: 150,
    padding: 5,
    marginVertical: 5,
    borderRadius: 7,
  },
  btnItemsText: {
    color: '#000814',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  }
})