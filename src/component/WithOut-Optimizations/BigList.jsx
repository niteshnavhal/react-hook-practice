import React, {useEffect} from 'react'
import {SingleProduct} from './SingleProduct';

export const BigList = ({ addtoCart,products }) => {
    console.log("6 In a BigList Component");
    useEffect(() => {
        console.log("7 Big List Called Effect");
      });

      console.log("8 BigList Component Renderd");
  return (
        <React.Fragment>
            {products.map((product)=> (
                <SingleProduct
                    key={product.id}
                    {...product}
                    addToCart={addtoCart}
                />
            ))}
        </React.Fragment>

  )
}
