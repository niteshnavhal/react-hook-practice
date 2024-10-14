import React from 'react'
import useFetch from '../CustomHooks/useFetch'
import Products from './Products'
const url = 'https://fakestoreapi.com/products'
const Index = () => {
    console.log("0-Start of PropType");
    
    const {data} = useFetch(url)
    console.log("2-Render PropType");
  return (
    <div>
        <h2>products</h2>
        <section className="products">
            {data.map((d)=>{
               return  <Products key={d.id} {...d}/>
            })}
        </section>
    </div>
  )
}

export default Index