import React, {useState } from 'react'

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    //Desestructuramos el state para consumir a la hora de importar
    const { data, isLoading, error} = state


    const fetchData = async (url, method, bodyData = null) => {
        //Si la url existe no haga nada si no ponemos la respuesta
        if (!url) return
        try {
            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)

            }
            const res = await fetch(url, options)
            const data = await res.json()
            console.log(data)
            setState({
                data,
                isLoading: false,
                error: null
            })
        }
        catch (error) {
            setState({
                data: null,
                error: error,
                isLoading: false,
            })
        }
    }
    
    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
