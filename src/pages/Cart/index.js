// Importação das bibliotecas
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Button } from "react-native"

// Importação dos componentes
import ItemList from "../../components/ItemList";

// IMportação do async storage
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Cart({ route }) {

  const [item, setItem] = useState([]);
  
  let selected = route.params.product;

  // Quando renderizar a quarta tela executa a função
  useEffect(()=>{
    addItem();
  }, []);

  // Buscando todas as tarefas ao iniciar o app
  useEffect(()=>{
    async function loadItem() {
      const itemStorage = await AsyncStorage.getItem('@item')
  
      if (itemStorage) {
        setItem(JSON.parse(itemStorage));
      }
    }
    // loadItem();
  }, []);

  // Salvando caso tenha alguma tarefa alterada
  useEffect(() => {
    async function saveItems() {
      await AsyncStorage.setItem('@item', JSON.stringify(item));
    }

    saveItems();
  }, [item]);

  /* TENTA CORRIGIR ALGUM ERRO NO ASYNC STORAGE */
  
  function addItem() {

    const data = {
      key: selected,
      item: selected
    };
    
    setItem([...item, data]);
  }

  function cleanItems() {
    setItem('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121d31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Produtos selecionados </Text>
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: "#fff"
  },
})