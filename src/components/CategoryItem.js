import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const CategoryItem = (props) => {
  const item = props.item;

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>props.navigation.navigate("products", {item})} style={styles.boton}>
        <Text style={styles.textSt}>{props.item}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    //borderColor: 'blue',

    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    padding: 5,
    height: 100,
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: Colors.lightBeige,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  boton:{
    width: '100%',
    height:  '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSt:{
    fontSize: 24,
    fontFamily: 'myFont',
    color: Colors.heavyBlue
  }
})