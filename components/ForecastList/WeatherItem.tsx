import React,{useMemo} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

type Props = {
    data:{
        dt_txt:string,
        main: {
            temp:Float,
        },
        weather:{
            icon:string
        }[]
        
        }
    }

const WeatherItem = ({data}:Props) => {

    const splitDate = (date:string) => {
        if(date===undefined){
            return(["Now",""])
        }

        let [newDate,time] = date.split(" ")
        newDate = newDate.split("-").reverse().join("/")
        let timeFragments = time.split(":")
        time = +timeFragments[0]>12 ? 
            ""+(+timeFragments[0]-12)+"pm" :
            ""+(+timeFragments[0])+"am"
        
        return([newDate,time])
    }

    const [newDate,time] = useMemo(() => splitDate(data.dt_txt),[data.dt_txt])
    
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                width={150}
                height={80}
                source={{uri:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}}/>
            
            <View style={styles.details}>
                <View style={styles.temp}>
                    <Text>{Math.round(data.main.temp)}°C</Text>
                </View>

                <View style={styles.timeData}>
                    <Text>{newDate}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
            
        </View>
    )
}

export default WeatherItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:5,
      width:150,
      height:250,
      marginRight:20
    },
    image:{
        flex:.6,
    },
    details:{
        flex:.4,
        flexDirection:"column"
    },
    temp:{
        alignItems:"center",
        padding:5,
        backgroundColor:"whitesmoke",
        borderRadius:5
    },
    timeData:{
        alignItems:"center"
    }
  });
  