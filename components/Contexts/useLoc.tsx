import React,{ useState,useContext, useEffect } from "react";

import * as Location from 'expo-location';

import Context from "./Context";

const useLoc = () => {
    const {loc,setLoc} = useContext(Context)

    const setLat = (newLat:number) => {
        setLoc({lat:newLat,long:loc.long})
    }

    const setLong = (newLong:number) => {
        setLoc({lat:loc.lat,long:newLong})
    }

    useEffect(() => {
        try{
            Location.requestForegroundPermissionsAsync().then(
                value => value.status!=="granted" ? setLoc({lat:0,long:0}) : 
            Location.getCurrentPositionAsync({})
            .then(result => ({
                lat:result.coords.latitude,
                long:result.coords.longitude
            }))
            .then(setLoc))
        }catch(e){
            setLoc({lat:0,long:0})
        }
      }, []);
    




    return {...loc,setLat,setLong,setLoc}
}

export default useLoc;