import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import { ScrollView } from 'react-native-web'
import Rating from './Rating'

const ProductsItem = (props) => {

    // 


    return (
        <Pressable onPress={() => props.navigation.navigate("productDetail", props.item)} style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.item.images[0] }} />
            </View>
          
      
            <View style={styles.infoContainer}>
                <Text style={styles.fontStyle}>{props.item.title} </Text>
                <Rating rate={props.item.rating} size={16} />
                <Text style={styles.price}> $ {props.item.price} </Text>
            </View>
        </Pressable>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: Colors.beige,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    fontStyle: {
        fontSize: 16,
    },
    price:{
        fontSize: 22,
    },
    image: {
        flex: 1,
        width: 120,
        height: 120,
    },

    infoContainer: {
        flex: 1,
        padding: 5,
        borderColor: 'green',
        borderWidth: 1,
    }

})