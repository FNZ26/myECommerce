import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const History = (props) => {
    return (
        <SafeAreaView>
            <Header title="Historial" navigation={props.navigation} />
            <Text>History</Text>
        </SafeAreaView>
    )
}

export default History;

const styles = StyleSheet.create({})