import React,{useEffect} from 'react'

const SingleProduct = ({addToCart, title, price, image}) => {
    console.log("8 Started inSide SingleProduct");
    useEffect(() => {
        console.log("9 In a SingleProduct Component Effect");
    });
    console.log("10 render finished SingleProduct Component");
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

export default SingleProduct