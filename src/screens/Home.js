import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from  '../components/Categories.js'
import Header from '../components/Header.js'

const Home = () => {
  return (
    <View>
      <Header/>
   <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})