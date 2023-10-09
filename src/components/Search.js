import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

import { Colors } from '../theme/Colors';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';




const Search = (props) => {

    const clearText = () => {
        props.setText(null);
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={(value) => props.setText(value)}
                    value={props.text}
                    style={styles.input}
                    placeholder="Busca un producto"

                />

                <Pressable onPress={() => clearText() }>
                    <AntDesign name="close" size={24} color="white" />

                </Pressable>
            </View>
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.heavyBlue,
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '85%',
        borderWidth: 1,
        borderColor: Colors.beige,
        backgroundColor: Colors.lightBeige,

        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: '#fff',
    }

})