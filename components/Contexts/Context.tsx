import React,{ useState, createContext,useContext } from "react";

const Context = () => {

    /*const [city,setCity] = useState("London")
  const [loc,setLoc] = useState({lat:0,long:0})*/
    

    const context = createContext(undefined)/* {
        city:city,
        setCity: setCity,
        loc:{lat:0,long:0},
        setLoc: setLoc
    } */

    return context
}


export default Context();