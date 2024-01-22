import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ShoppingHistory = () => {
    return (
        <SafeAreaView>
    
            <Header title="Guardado" navigation={props.navigation} />
            <Text>MIS FAVORITOS</Text>
        </SafeAreaView>
    )
}

export default ShoppingHistory

const styles = StyleSheet.create({})