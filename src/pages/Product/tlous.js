import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cliente: {route.params.name}</Text>
      </View>
      <View style={styles.products}>
        <Image style={styles.images} source={require('../../images/the_last_of_us.png')} resizeMode='contain' />
        <Text style={styles.productName}>The Last of US</Text>
        <Text style={styles.productName}>R$99,90</Text>
        <Text style={styles.productName}>Pagamento: 5 x R$ 20</Text>
      </View>
      <Button 
        title='Adicionar Item'
        onPress={() => navigation.navigate('Cart', {product: 'The Last of Us'})}
      />
      <Button 
        title='Encerrar compra'
        onPress={() => navigation.navigate('Autentication')}
      />
    </View>
  )
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
  products: {
    alignItems: 'center',
    backgroundColor: '#001d3d',
    paddingVertical: 10
  },
  images: {
    width: 280, 
    height: 350,
    marginHorizontal: 15
  },
  productName: {
    color: "#ffc300",
    fontSize: 17,
    fontWeight: "600",
  }
})