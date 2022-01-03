// Instalando a animação
// > expo install react-native-animatable

// Importação das bibliotecas
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList } from "react-native"

// Importação dos componentes
import ItemList from "../../components/ItemList";

export default function App() {

  const [item, setItem] = useState([
    { key: 1, item: 'Item 1'},
    { key: 2, item: 'Item 2'},
    { key: 3, item: 'Item 3'},
  ]);
  
  return (
    <SafeAreaView style={styles.container}> {/* SafeAreaView -> Serve para ajustar a visualização no iphone, no android fica normal */}
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
        renderItem={ ({ item }) => <ItemList data={item} /> }
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