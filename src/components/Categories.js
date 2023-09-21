import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { tabCategories } from '../data/tabCategories';
import CategoryItem from './CategoryItem.js';
import { Colors } from '../theme/Colors';

const Categories = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabCategories}
                keyExtractor={(key) => key}
                style={styles.card}
                renderItem={({ item }) => <CategoryItem navigation={props.navigation} item={item}/> }

            />

        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.heavyBlue,
        alignItems: 'center',
        height:  '100%',
        padding: 5,
    },
    card:{
        width: '90%',
        padding: 5,
    }

})