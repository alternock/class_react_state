import {
    useState,
    useEffect
} from 'react'


export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [url])
  
    useEffect(()=>{
        if (error) {
            console.log("error fetch: ",error)
        }
    },[error])

    return {
        data,
        isLoading,
        error
    }
}