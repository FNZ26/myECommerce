import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { Colors } from '../theme/Colors';
import Rating from '../components/Rating';
import { SafeAreaView } from 'react-native-safe-area-context';
import PriceAdjust from '../components/PriceAdjust';


/*
"id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",


*/


const ProductDetail = (props) => {

    const item = props.route.params;
    const initialProd = item;

    return (
        <SafeAreaView>
            <Header title="Detalle" />
            <View style={styles.container}>

                <Text style={styles.title} > {initialProd.title} </Text>

                <Rating rate={initialProd.rating} />

                {/* Componente  para Images que reciba el producto e imprima las imagenes en pantalla (añadir una barra top y bot que contenga el spinner) */}

                <Image
                    style={styles.image}

                    source={{
                        uri: initialProd.images[1]
                    }}
                />


                <PriceAdjust price={initialProd.price} discount={initialProd.discountPercentage} />



                <View>
                    <Text style={styles.font}> Disponibles: <Text>{initialProd.stock}</Text>  </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.shopNowButton}><Text style={styles.shopNowText}>Comprar</Text></Pressable>
                    <Pressable style={styles.addToCartButton} ><Text style={styles.addToCartFont}>Agregar al Carrito</Text></Pressable>
                </View>


                {/* Componente de Informacion del producto con: 
                
                Titulo: Caracteristicas de *nombre* ,
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "brand": "Apple",
                 "category": "smartphones",

                
                
                */}

                <Text style={styles.description}>  {initialProd.description}  </Text>







            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 5,
    },
    container: {
        backgroundColor: Colors.lightBeige,
        alignItems: 'center',
        paddingVertical: 10,
        height: '100%',
    },
    title: {
        fontFamily: 'myFontBold',
        fontSize: 26,
        borderBottomWidth: 2,
        borderColor: Colors.heavyBlue,
        marginVertical: 5,
    },
    description: {
        fontFamily: 'myFont',
        fontSize: 20,
        marginVertical: 5,
        width: '80%',
        borderWidth: 5,
        borderColor: 'red',



    },

    font: {
        fontFamily: 'myFontBold'
    },
    buttonContainer: {

        width: '90%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    addToCartButton: {

        width: '70%',
        height: 40,
        marginVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    addToCartFont: {
        color: '#6499E9',
        fontFamily: 'myFontBold',
        fontSize: 19,
    },
    shopNowButton: {
        width: '70%',
        height: 40,
        backgroundColor: '#6499E9',
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    shopNowText: {
        fontFamily: 'myFontBold',
        color: '#ffff',
        fontSize: 19,
    },

    strikeThroughTextStyle: {
        fontSize: 22,
        textAlign: 'center',
        textDecorationLine: 'line-through',
    },



})