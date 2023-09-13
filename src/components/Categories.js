import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { tabCategories } from '../data/tabCategories';
import CategoryItem from './CategoryItem.js';

const Categories = () => {
    return (
        <View>
            <FlatList
                data={tabCategories}
                keyExtractor={(key) => key}
                renderItem={({ item }) => <CategoryItem item={item}/> }

            />

        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})