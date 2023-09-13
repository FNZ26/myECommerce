import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Header = ({ title = "Home" }) => {

  return (
    <View style={styles.container}>

      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.beige,
    paddingTop: 30


  },
  titleStyle: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: '600',
    color: Colors.heavyBlue

  }

})