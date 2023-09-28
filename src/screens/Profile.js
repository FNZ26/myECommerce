import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';

const Profile = () => {
    return (
        <SafeAreaView>

            <Header title={'Perfil'} />
         
                <View style={styles.container}>
                    
                   
                    <Pressable><FontAwesome5 name="camera" size={24} color="black" /></Pressable>
                    <Pressable><FontAwesome5 name="camera" size={24} color="black" /></Pressable>
                    <Pressable><FontAwesome5 name="camera" size={24} color="black" /></Pressable>
                </View>


          
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: Colors.lightBeige,
        
        width: '100%',
        height: '100%'
    }

})