import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cliente: {route.params.name}</Text>
      </View>
      <View style={styles.products}>
        <Image style={styles.images} source={require('../../images/re3.jpeg')} resizeMode='contain' />
        <Text style={styles.productName}>Resident Evil 3</Text>
        <Text style={styles.productName}>R$ 192,98</Text>
        <Text style={styles.productName}>Pagamento: 5 x R$ 38,59</Text>
      </View>
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
    paddingVertical: 10,
    marginVertical: 10,
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