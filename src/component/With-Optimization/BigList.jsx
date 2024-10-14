import React,{useEffect} from 'react'
import SingleProduct from './SingleProduct'

const BigList = React.memo(({addToCart,data}) => {
    console.log("5 Big List inside Component");
    useEffect(() => {
        console.log("6 Big List Called Effect");
      });
      console.log("7 BigList Render");
  return (
    <section className="data">
        {data.map((product) =>(
            <SingleProduct
            key = {product.id}
            {...product}
            addToCart={addToCart}
            />
            
        ))}
    </section>
  )
})

export default BigList