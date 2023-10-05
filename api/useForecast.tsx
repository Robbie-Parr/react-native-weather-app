import React,{useEffect,useState,useMemo} from "react"

import { APP_ID } from "../env"
import useEndpoint from "./useEndpoint"

import { Float } from "react-native/Libraries/Types/CodegenTypes"

type Result = {
    dt_txt:string,
    main: {
        temp:Float,
    },
    weather:{
        icon:string
    }[]
}[]

const useForecast = () => {
    const data = useEndpoint<Result>("forecast")
    return data
}

export default useForecast;