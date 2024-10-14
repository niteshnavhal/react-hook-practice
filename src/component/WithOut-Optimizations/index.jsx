import React,{useEffect, useState} from 'react'
import useFetch from '../CustomHooks/useFetch'
import {BigList} from './BigList'
const url = 'https://fakestoreapi.com/products';


const Index = () => {
    console.log("0 Loaded Index");
    
    const {data} = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart,setCart] = useState(0);
   const [mostExpensive,setMostExpensive] = useState(0);
    console.log("1 After State set");

    const mostExpensiveTask = (data) => { 
      console.log("4 insede a mostExpensiveTask function...");
      return (
      data.reduce((total, item) => {
        const price = item.price;
        if (price >= total) total = price;
        return total;
      }, 0) / 100
    );};

    
    useEffect(() => {
      if (data) {
        console.log("2 Effect on Index");
        const expensiveItemPrice = mostExpensiveTask(data);
        setMostExpensive(expensiveItemPrice);  // Set the most expensive item price
      }
    }, [data]);  // Run the effect when data changes

    const addtoCart = () => {
      console.log("3 add to cart...");

      setCart((c) => c+1)
    };

  
    console.log("5 Index Renderd");
  return (
    <React.Fragment>
        <h1>Count : {count}</h1>
        <h2>cart: {cart}</h2>
        <h2>mostExpensiveTask : ${mostExpensive}</h2>
        <button onClick={()=> setCount(count + 1)}>Add Count</button>
        <BigList addtoCart={addtoCart} products={data} />
    </React.Fragment>
  )
}

export default Index