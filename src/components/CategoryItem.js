import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryItem = ( props ) => {
  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})