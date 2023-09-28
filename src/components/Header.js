import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Header = ({ title = "home"}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
   
   
    backgroundColor: Colors.beige,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'


  },
  titleStyle: {
    fontSize: 25,
    
    fontWeight: '600',
    color: Colors.heavyBlue,
    fontFamily: 'myFont'
  },
 

})