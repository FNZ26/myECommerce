import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../components/Header.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'


const Home = (props) => {

 // const Categories = useSelector(state => state.homeSlice.allCategories);
  const Categories = useSelector 


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