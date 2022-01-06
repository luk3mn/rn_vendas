// Importação das bibliotecas
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Button } from "react-native"

// Importação dos componentes
import ItemList from "../../components/ItemList";

export default function Cart({ route }) {

  const [item, setItem] = useState([]);
  
  let selected = route.params.product;

  function addItem() {

    const data = {
      key: selected,
      item: selected
    };
    
    setItem([...item, data]);
  }

  // Quando renderizar a quarta tela executa a função
  useEffect(()=>{
    addItem();
  }, []);
  
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