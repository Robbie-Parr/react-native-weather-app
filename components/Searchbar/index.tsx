import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useCity from '../Contexts/useCity';

const SearchBar = () => {
    const {city,setCity} = useCity()

    const [tempCity,setTempCity] = useState(city)

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={tempCity}
                onChangeText={text => setTempCity(text)}
                onEndEditing={() => setCity(tempCity)}
                />
            <Button 
                title="Find Weather"
                onPress={() => setCity(tempCity)}
                color="orange"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        flexDirection:"row"
    },
    textInput:{
        flex:1,
        borderWidth:.5,
        padding:1,
        paddingLeft:10,
        borderColor:"black"
    }
    
})