import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { Colors } from '../theme/Colors'
import { products } from '../data/tabProductos'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'

const Products = (props) => {

    //console.log(props.category)

    const [categoryProducts, setCategoryProducts] = useState([]);

    const [text, setText] = useState("");
    useEffect(() => {
        const catProductFiltred = products.filter((el) => el.category === props.category);
        setCategoryProducts(catProductFiltred);




        if (text) {

            const titleProduct = products.filter(
                (el) => el.title.toLowerCase() === text
            )
            setCategoryProducts(titleProduct);

        }
    }, [text, props.category])

    return (
        <View>
            <Header tittle="productos" />

            <Search text={text} setText={setText} />
            <View style={styles.container}>
                <FlatList

                    data={categoryProducts}
                    keyExtractor={categoryProducts.id}
                    renderItem={({ item }) => <ProductsItem item={item} />}
                />
            </View>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {

        borderColor: Colors.beige,



        alignItems: 'center',

    }

})