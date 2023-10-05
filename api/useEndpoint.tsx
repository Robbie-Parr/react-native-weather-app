import React,{useEffect,useState,useMemo} from "react"

import { APP_ID } from "../env"
import useCity from "../components/Contexts/useCity"
import useLoc from "../components/Contexts/useLoc"

function useEndpoint<T>(root:string):T|undefined{
    const {city} = useCity()
    const {lat,long} = useLoc()
    const [hydrate,setHydrate] = useState(false)
    
    const [data,setData] = useState<T>()
    const query = useMemo(() => 
        city ? 
            `https://api.openweathermap.org/data/2.5/${root}?q=${city}&units=metric&appid=${APP_ID}`
            : 
            `https://api.openweathermap.org/data/2.5/${root}?lat=${lat}&lon=${long}&units=metric&appid=${APP_ID}`,
        [root,city,lat,long,hydrate])

    useEffect(() => {
        const makeRequest = async () => {
            fetch(query)
            .then(response => response.json())
            .then(response => response.list)
            .then(setData)
            .catch(e => setData(undefined))
        }
        makeRequest()
    },[query])


    useEffect(() => {
        setHydrate(true)
    },[])

    return data
}

export default useEndpoint;