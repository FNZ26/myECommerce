import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="small" color={Colors.heavyBlue} />
    </View>
  )
}



const styles = StyleSheet.create({

    activityContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Loading;