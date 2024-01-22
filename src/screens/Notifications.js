import {StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/Header'

const Notifications = (props) => {
    return (

<SafeAreaView>
    <Header title="notificaciones" navigation={props.navigation} ></Header>
    <Text>Notificaciones</Text>
</SafeAreaView>

    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black',
    
    
      },
})