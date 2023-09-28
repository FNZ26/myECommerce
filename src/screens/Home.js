import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header.js'
import { SafeAreaView } from 'react-native-safe-area-context'



const Home = (props) => {

 



  return (
    <SafeAreaView>
      <Header title='Categorias' />
      <Categories navigation={props.navigation} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
  }
})