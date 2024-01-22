import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {
 // console.log("props: ", props)
  //      <Text style={styles.titleStyle}>{props.title}</Text>
  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.navigation.goBack()} style={styles.icon}>
        <AntDesign name="back" size={22} color="white" />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: Colors.heavyBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 1,

  },
  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  titleContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 3,
  },
  titleText: {
    fontSize: 19,
    color: 'white'
  }
})