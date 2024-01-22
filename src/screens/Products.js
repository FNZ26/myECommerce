import { FlatList, View } from 'react-native'
import React from 'react'
import HeaderSearch from '../components/HeaderSearch'
import { products } from '../data/tabProductos'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsQuery } from '../services/ecApi'
import { setProducts } from '../redux/slices/sliceHome'

const Products = (props) => {
    const dispatch = useDispatch();

    const { comeFrom } = props.route.params;

    const [filtredByCategory, setFiltredByCategory] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState([]);

    const allProducts = useSelector((state) => state.sliceHome.allProducts);
    const item = useSelector((state) => state.sliceHome.categorySelected);

    const { data, error, isError, isLoading } = useGetProductsQuery();

    useEffect(() => {
        if (!isLoading && !isError && data) {
            dispatch(setProducts(data))
            // console.log(data)
        }
    }, [data, isError, isLoading]);
    if (isLoading) {
        //mostrar un indicador de carga
        console.log("esta cargando")
    } else {
        //console.log("cargo data")
    }
    if (isError) {
        console.error('Error al obtener categorías:', error);
        //mostrar un mensaje de error
    }
    useEffect(() => {
        if (comeFrom === 'category') {
            const catProductFiltred = products.filter((el) => el.category === item);
            setCategoryProducts(catProductFiltred);
            setFiltredByCategory(true);
        } else { 
            
            setFiltredByCategory(false); 
        }

    }, [item, comeFrom])

    //console.log(filtredByCategory)
    return (
        <SafeAreaView>
            <HeaderSearch navigation={props.navigation} />
            <View >
                <FlatList
                    data={filtredByCategory ? categoryProducts : allProducts}
                    keyExtractor={filtredByCategory ? categoryProducts.id : allProducts.id}
                    renderItem={({ item }) => <ProductsItem item={item} navigation={props.navigation} />
                    } />
            </View>
        </SafeAreaView >
    )
}

export default Products