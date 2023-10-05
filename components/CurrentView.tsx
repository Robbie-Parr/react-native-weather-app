import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useLoc from './Contexts/useLoc';
import useCity from './Contexts/useCity';

const CurrentView = ({context}:any) => {
    const {city} = useCity()
    const {lat,long} = useLoc()

    return(
        <View>
            {city ?  
            <Text>Currently Viewing <Text style={styles.innerText}>{city}</Text></Text> 
            :
            <Text>Your Current Location</Text>}
            
        </View>
    )
}

export default CurrentView;


const styles = StyleSheet.create({
    innerText: {
        color:"blue",
        fontWeight:"bold"
    }
    
  });
  
