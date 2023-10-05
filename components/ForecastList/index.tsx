import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import useForecast from "../../api/useForecast"
import WeatherItem from './WeatherItem';

const ForecastList = () => {
    const data = useForecast()

    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={styles.first}/>
            {data?.map(item => <WeatherItem key={""+item.dt_txt} data={item}/>)}
        </ScrollView>
    )
}

export default ForecastList;

const styles = StyleSheet.create({
    container: {
        height:250,
        padding:10,
        overflowX:"scroll",
        overflowY:"hidden",
        flexDirection:"row"
    },
    first:{
        marginLeft:120
    }
})