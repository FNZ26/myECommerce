import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Rating = (props) => {
    
    //const value = Math.ceil(props.rate);
   // const value =  Math.trunc( props.rate ) ;
   const value = Math.round( props.rate );
    const decimal = props.rate - value;
    
   
    const ratingArr = [0, 0, 0, 0, 0];

    const newRatingArr = ratingArr.fill(1, value);

    






    //<FontAwesome5 name="star-half" size={24} color="black" /> 

    return (
        <View  style={styles.containerRate}>
            <View style={styles.rate} >
                {newRatingArr.map( (rating) => (rating ? <FontAwesome name="star-o" size={24} color="black" key={Math.random()}/> : <FontAwesome name="star" size={24} color="black" key={Math.random()}  />)  )}
            </View>
            <Text> ( {props.rate} ) </Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    rate: {
        flexDirection: 'row',
        
    },
    containerRate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 2,
        fontFamily: 'myFont',
        fontSize: 25,


    },

})