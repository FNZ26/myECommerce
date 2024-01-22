import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import CategoryItem from './CategoryItem.js';

import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/ecApi.js';
import { setCategory } from '../redux/slices/sliceHome.js';
import Loading from './Loading.js';

const Categories = (props) => {
    const dispatch = useDispatch();
    const { data, error, isError, isLoading } = useGetCategoriesQuery();
    const allCategories = useSelector((state) => state.sliceHome.allCategories);

    useEffect(() => {
        if (!isLoading && !isError && data) {
            dispatch(setCategory(data));
        }
    }, [data, isError, isLoading, dispatch]);

    if (isLoading) {
        // Puedes mostrar un indicador de carga aquí
        console.log("esta cargando")
        return (
            <Loading />
        );
    } else {
        console.log("cargo data");
        if (isError) {
            console.error('Error al obtener categorías:', error);
            // Puedes mostrar un mensaje de error aquí
        }


        return (
            <View style={styles.container}>
                <FlatList
                    data={allCategories}
                    keyExtractor={(key) => key}
                    style={styles.card}
                    renderItem={({ item }) => <CategoryItem navigation={props.navigation} item={item} />}
                />
            </View>
        );
    }
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        padding: 5,
    },
    card: {
        width: '90%',
        padding: 5,
    },
});
