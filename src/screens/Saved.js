import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const Saved = (props) => {
  return (
    <SafeAreaView>
        <Header title="Guardado" navigation={props.navigation}/>
      <Text>MIS FAVORITOS</Text>
    </SafeAreaView>
  )
}

export default Saved;

const styles = StyleSheet.create({})

