import React,{useEffect} from 'react'

export const SingleProduct = ({addToCart , title, price, image}) => {
    console.log("9 In a SingleProduct Component",title);
    useEffect(() => {
        console.log("10 In a SingleProduct Component Effect");
    });
   // const {title,price,image} = fields ;
    console.log("11 SingleProduct Component Render");
  return (
    <React.Fragment>
        <article className='products'>
            <img src={image} alt={title} style={{ width: '150px', height: '150px' }} />
            <h4>{title}</h4>
            <p>${price}</p>
            <button onClick={addToCart} className='btn'>Add to Card</button>
        </article>
    </React.Fragment>
  )
}