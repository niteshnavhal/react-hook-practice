import React,{useState,useMemo} from 'react'
import useFetch from '../CustomHooks/useFetch'
import BigList from './BigList'

const url = 'https://fakestoreapi.com/products';


const Index = () => {
    console.log("0 Loaded Index");
    const [count,setCount] = useState(0);
    const [cart,setCart] = useState(0);
    const {data} = useFetch(url);
    console.log("1 After State");
    
    const mostExpensiveTask = (data) => { 
        console.log("2 insede a mostExpensiveTask function...");
        return (
        data.reduce((total, item) => {
          const price = item.price;
          if (price >= total) total = price;
          return total;
        }, 0) / 100
      );};

      const mostExpensiveMemo = useMemo(() => mostExpensiveTask(data),[data]);

      const addToCart = ()=> {
        console.log("3 in AddToCart");
        setCart((c) => cart + 1)
      }
  console.log("4 Render Index");
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Most Expensive : ${mostExpensiveMemo}</h1>
      <h1>Cart : {cart}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList addToCart={addToCart} data={data} />
    </>
  )
}


export default Index