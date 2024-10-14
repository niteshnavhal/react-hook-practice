import React from 'react'
import useFetch from './useFetch'
const url = 'https://fakestoreapi.com/products'
const Index = () => {
    console.log("0 star of custom hook exampls");
    
    const {load,data} = useFetch(url);
    console.log(data);
    console.log("2 After UseFetc");
    console.log("3 Render");
    
  return (
    <div>{load ? 'loading..' : 'data'}</div>
  )
}

export default Index