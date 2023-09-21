import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const ProductsItem = (props) => {

// 

   
    return (
        <View style={styles.container}>
            <View style={styles.ProductStyle}>
                <Pressable onPress={()=>props.navigation.navigate("productDetail", props.item)} style={styles.boton}>
                    <Image
                        style={styles.image}
                        source={{ uri: props.item.images[0] }}


                    />
                    <Text style={styles.fontStyle}>{props.item.title} </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    container: {

        borderBottomWidth: 2,

        borderColor: Colors.beige,
      
       


    },
    ProductStyle: {
        alignItems: 'center',

    },
    fontStyle: {
        fontSize: 22,
    },
    image: {
        width: 100,
        height: 100,
        

    },  
    boton:{
       borderWidth: 5,
       borderColor: 'red',
       alignItems: 'center',
       justifyContent: 'center',
       marginVertical: 5,
       marginHorizontal: 5,
       paddingVertical: 5,
      },

})