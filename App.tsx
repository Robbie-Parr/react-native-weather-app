import { StatusBar } from 'expo-status-bar';
import React,{useMemo,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ForecastList from './components/ForecastList';
import SearchBar from './components/Searchbar';

import Context from './components/Contexts/Context';
import CurrentView from './components/CurrentView';

export default function App() {
  const context = Context;

  const [city,setCity] = useState("")
  const [loc,setLoc] = useState({lat:0,long:0})
  const values = useMemo(() => ({city,setCity,loc,setLoc}),[city,loc])

  return (
    <context.Provider value={values}>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome to this Weather App</Text>
        <CurrentView/>
      </View>
      <View style={styles.submitSection}>
        <SearchBar/>
        
      </View>
      <ForecastList/>
    </View>
    </context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:"10%",
    margin:"5%",
    overflow:"hidden"
  },
  titleText:{
    fontSize:24,
    color:"whitesmoke",
  },
  title:{
    backgroundColor:"orange",
    padding:"5%",
    margin:"1%",
    borderRadius:5,
    shadowRadius:1,
    flexDirection:"column",
    justifyContent:"space-between"
  },
  submitSection:{
    marginLeft:"1%",
    marginRight:"1%"
  }
});
