import React from 'react'
import './products.css'
import Basket from '../Components/basket/Basket'
export default function Product(props) {
  const {product , onAdd} = props

  return (
    <div>
        
        <img className="small" src={product.image} alt={product.name}/>
        <h2>{product.name}  {product.id} </h2>
        <h3>${product.price}</h3>
        <div>
          <button className="button-cart"onClick={() => onAdd(product)}>add to cart</button>
        </div>
    </div>
  )
}
