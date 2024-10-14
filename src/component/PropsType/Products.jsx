import React from 'react'
const defaultImage ='https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
const Products = ({image , title ,price}) => {
 console.log("4-InsideapropTypeproducts ");
  return (
    <div>
        <img src={image || defaultImage} alt={title} />
        <h2>{title}</h2>
        <p>Price: ${price}</p>
      <hr />
    </div>
  )
}

export default Products