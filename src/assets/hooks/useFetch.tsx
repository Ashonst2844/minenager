import { supabase } from "../utils/supabase"
import axios from 'axios';
import React from "react";

export function useFetch<T= unknown>(key: string, mode: "supabase"|"axios") {
    const [data, setData] = React.useState<T | null>(null)
    const [loading, isLoading] = React.useState<boolean>(true)
    const [error, isError] = React.useState<Error>(null)

    //* FETCH MODE : AXIOS
    const apiFetch = React.useCallback( async (isRefetch = false)=>{
        if(isRefetch){
            isLoading(true)
            isError(null)
        }
        try {
            const res = await axios.get(key)
            setData(res.data as T)
        } catch(error) {
            console.error("Error Take Data From AXIOS: ",error)
            isError(error as Error)
        } finally {isLoading(false)}
    },[key])

    //* FETCH MODE : SUPABASE
    const supabaseFetch = React.useCallback(async (isRefetch = false) => {
        if(isRefetch){
            isLoading(true)
            isError(null)
        }
        try {
            const {data:res,error:sbError} = await supabase.from(key).select()
            if(sbError) throw sbError
            setData(res as T)
        } catch(error) {
            console.error("Error Take Data From Supabase: ",error)
            isError(error)
        } finally {isLoading(false)}
    },[key])

    React.useEffect(()=>{
        let ignore = false
        const fetchData = async () => {
            if(!ignore) {
                if(mode=="axios"){await apiFetch()} 
                else{await supabaseFetch()}
            }
        }
        fetchData()
        return () => {ignore=true}
    },[key,mode,apiFetch,supabaseFetch])
    return {data,loading,error,refetch: ()=>(mode=="axios"?apiFetch(true):supabaseFetch(true))}
}