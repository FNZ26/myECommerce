import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyShopping = (props) => {
  return (
    <SafeAreaView>
        <Header title="Mis Compras" navigation={props.navigation}/>
      <Text>Shopping Cart</Text>
    </SafeAreaView>
  )
}

export default MyShopping

const styles = StyleSheet.create({})