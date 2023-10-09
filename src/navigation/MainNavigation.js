import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation';
import TabNavegation from './TabNavegation';

const MainNavigation = () => {
const user  = ""
  
  return (
    <NavigationContainer>
      {user ? <TabNavegation/> : <AuthNavigation/>}
    </NavigationContainer>

  )
}

export default MainNavigation

const styles = StyleSheet.create({})