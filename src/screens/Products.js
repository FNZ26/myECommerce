import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { Colors } from '../theme/Colors'
import { products } from '../data/tabProductos'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'


const Products = (props) => {

    const productsFilteredByCategory = useSelector(
        (state) => state.sliceHome.productsFilteredByCategory
    );

   

    const [categoryProducts, setCategoryProducts] = useState([]);

    const [text, setText] = useState("");


    // recibe el item  por route
    const { item } = props.route.params;
 

    useEffect(() => {
        const catProductFiltred = products.filter((el) => el.category === item);
        setCategoryProducts(catProductFiltred);

     



        if (text) {

            const titleProduct = products.filter(
                (el) => el.title.toLowerCase() === text
            )
            setCategoryProducts(titleProduct);

        }
    }, [text, item])



    return (

        <SafeAreaView>
            <Header title={item} />
            <Search text={text} setText={setText} />

            <View style={styles.container}>

                <FlatList

                    data={categoryProducts}
                    keyExtractor={categoryProducts.id}
                    renderItem={({ item }) => <ProductsItem item={item} navigation={props.navigation} />}
                />

            </View>

        </SafeAreaView >

    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.beige,
        alignItems: 'center',
    }

})