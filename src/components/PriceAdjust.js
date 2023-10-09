import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PriceAdjust = (props) => {
    var discountCheck;
    var newPrice = 999999;

    if (props.discount !== 0) {
        discountCheck = true;
        newPrice = props.price - (props.discount * props.price / 100);
        newPrice = newPrice.toFixed(2);
        newPrice = newPrice.toString().replace(".", ',');

    } else {
        discountCheck = false;
    }


    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <Text style={discountCheck ? styles.strikeThroughText : styles.priceFull}>$ </Text>
                <Text style={discountCheck ? styles.strikeThroughText : styles.priceFull}>{props.price}  </Text>


            </View>
            <View style={discountCheck ? styles.priceDiscountContainer : styles.disable}>
                <Text style={styles.priceFull}>$</Text>
                <Text style={styles.priceFull}>{newPrice}</Text>
                <Text style={styles.discount}>%{props.discount}</Text>
            </View>
        </View>
    )
}

export default PriceAdjust

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
        padding: 5,
        marginVertical: 5,
    },
    FontPrice: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
    },
    strikeThroughText: {
        fontSize: 25,
        textAlign: 'center',
        textDecorationLine: 'line-through',
        color: '#6F6F6F',

    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    priceDiscountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    priceFull: {
        fontSize: 35,
        color: 'black',

    },
    discount: {
        fontSize: 20,
        color: 'green',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    disable: {
        display: 'none',
    }

})