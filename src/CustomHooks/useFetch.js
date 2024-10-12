
import React , {useState , useEffect} from 'react';

const useFetch = (url) => {

const [data , setData] = useState([])
const [isLoading , setIsLoading] = useState(false)
const [isError , setIsError] = useState(false)

useEffect(() => {

    const fetData = async () => {
           setIsLoading(true)
       try {
           const response = await fetch(url);

           if(!response.ok)
            throw Error("The network erro")

           const data = await response.json()
           setData(data)
       }catch (e) {
           setIsError(true)
           console.error(e);
       }finally {
           setIsLoading(false)
       }

    }

    fetData()

} , [url])


    return {data , isLoading , isError}
}


export default useFetch
