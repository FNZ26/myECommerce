import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { products } from '../data/tabProductos'
import Header from '../components/Header'
import { Colors } from '../theme/Colors'
import Rating from '../components/Rating'


const ProductDetail = (props) => {
   
    // Para las estrellas un componente que imprima la cantidad segun corresponda (recibe el  numero)

    const item = props.route.params;

   
    const initialProd = item
    return (
        <View>
            <Header title="Detalle" />
            <View style={styles.container}>

                <Text style={styles.title} > {initialProd.title} </Text>

                <View style={styles.containerRate}>
                    
                    <Rating rate={initialProd.rating} />
                    <Text> ( {initialProd.rating} ) </Text>
                </View>
                <Image
                    style={styles.image}

                    source={{
                        uri: initialProd.images[1]
                    }}
                />


                <Text style={styles.description}>  {initialProd.description}  </Text>

                <Text>Precio: {initialProd.price}  </Text>
                <Text>Descuento: % {initialProd.discountPercentage}  </Text>

                <Button title='Agregar al Carrito'></Button>
                <Button title='Comprar'></Button>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
        //resizeMode: 'cover',
        resizeMode: 'cover'

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



    },
    containerRate:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 2,
        fontFamily: 'myFont',
        fontSize: 25,
       

    }

})