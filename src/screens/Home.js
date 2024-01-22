import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'
import HeaderSearch from '../components/HeaderSearch'
import { Colors } from '../theme/Colors'

const Home = (props) => {
  //console.log(props)
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSearch navigation={props.navigation} />

      <Card>
        <Text>Algo</Text>
      </Card>
      <Card>
        <Text>Algo</Text>
      </Card>
      <Text>Algo</Text>
      <Text>Algo</Text>
      <Text>Algo</Text>
      <Card>
        <Text>Algo</Text>
      </Card>
      <Card>
        <Text>Algo</Text>
      </Card>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.red
  }
})