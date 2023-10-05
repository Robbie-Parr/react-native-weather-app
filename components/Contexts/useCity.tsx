import React,{ useState,useContext } from "react";

import Context from "./Context";

const useCity = () => {
    const {city,setCity} =useContext(Context)

    return {city,setCity}
}

export default useCity;