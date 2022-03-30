import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({results: null, loading: true, error: null})

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, {signal: abortController.signal})
        .then((response) => response.json())
        .then((results) => setData({results, loading: false, error: null}))
        .catch((error) => {
            abortController.signal.aborted 
            ? console.log('Fetch aborted')
            : setData({results: null, loading: false, error: error.message})
        })
        
        return () => abortController.abort()

        
    },[url])

    return data
}

export default useFetch