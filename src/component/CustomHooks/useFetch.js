import { useState ,useEffect, useCallback } from 'react'

const useFetch = (url) => {
    console.log("4-c Inside custom Hook");
    const [load,setLoad] = useState(true);
    const [data,setData] = useState([]);
    console.log("5-c After set State");
    
    const getData = useCallback(async () =>{
        console.log("6-c in get data function");
        try {
            const responce = await fetch(url);
            const result = await responce.json();
            setData(result);
            setLoad(false);
        } catch (error) {
            setData([]);
            setLoad(true);
        }
    },[url]);
        
    useEffect(()=> {
        console.log("7-c in a custom hook effect ");
        getData();
    },[getData]);

    console.log("8-c retund Data");
  return {load,data}
}

export default useFetch