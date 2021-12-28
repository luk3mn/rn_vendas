import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native'

export default function Home({ navigation, route }) {
  let name = route.params.name
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Cliente: {name}</Text>
      </View>
      <View style={styles.boxItems}>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('tlous', {name})}>
          <Image style={styles.images} source={require('../../images/the_last_of_us.png')} resizeMode='center' />
          <Text style={styles.productName}>TLOUS</Text>
          <Text style={styles.productName}>R$99,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('gtav', {name})}>
          <Image style={styles.images} source={require('../../images/gta5.png')} resizeMode='center' />
          <Text style={styles.productName}>GTA 5</Text>
          <Text style={styles.productName}>R$ 118,99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('tlous2', {name})}>
          <Image style={styles.images} source={require('../../images/the_last_of_us_2.png')} resizeMode='center' />
          <Text style={styles.productName}>TLOUS 2</Text>
          <Text style={styles.productName}>R$ 129,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('rdr2', {name})}>
          <Image style={styles.images} source={require('../../images/red_dead_2.jpg')} resizeMode='center' />
          <Text style={styles.productName}>RDR 2</Text>
          <Text style={styles.productName}>R$ 129,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('re2', {name})}>
          <Image style={styles.images} source={require('../../images/re2.png')} resizeMode='center' />
          <Text style={styles.productName}>Resident Evil 2</Text>
          <Text style={styles.productName}>R$ 109,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('farcry3', {name})}>
          <Image style={styles.images} source={require('../../images/farcry3.jpg')} resizeMode='center' />
          <Text style={styles.productName}>Farcry 3</Text>
          <Text style={styles.productName}>R$ 76,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('callofduty', {name})}>
          <Image style={styles.images} source={require('../../images/callofduty.jpg')} resizeMode='center' />
          <Text style={styles.productName}>Call of Duty 4</Text>
          <Text style={styles.productName}>R$ 39,00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('wdogs', {name})}>
          <Image style={styles.images} source={require('../../images/wdogs.jpg')} resizeMode='center' />
          <Text style={styles.productName}>Watch Dogs</Text>
          <Text style={styles.productName}>R$ 99,90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('re3', {name})}>
          <Image style={styles.images} source={require('../../images/re3.jpeg')} resizeMode='center' />
          <Text style={styles.productName}>Resident Evil 3</Text>
          <Text style={styles.productName}>R$ 192,98</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000814"
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: "#fff"
  },
  boxItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
  products: {
    alignItems: 'center',
    backgroundColor: '#001d3d',
    paddingVertical: 10,
    marginVertical: 10,
  },
  images: {
    width: 100, 
    height: 100,
    marginHorizontal: 15
  },
  productName: {
    color: "#ffc300",
    fontSize: 17,
    fontWeight: "600",
  }
})