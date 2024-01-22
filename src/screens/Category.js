import React from 'react'
import Categories from '../components/Categories.js'
import Header from '../components/Header.js'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = (props) => {

  return (
    <SafeAreaView>
      <Header title='Categorias' navigation={props.navigation}/>
      <Categories navigation={props.navigation} />
    </SafeAreaView>
  )
}

export default Home
