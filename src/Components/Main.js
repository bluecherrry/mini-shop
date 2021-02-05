import React from 'react'
import Product from '../data.js/Product';
import ProductsList from '../data.js/ProductsList';

function Main(props) {
 
 const {products , onAdd} = props;
  return (
    <div className="block col-2">
    <h2>
      products
    </h2>
    <div className="row">
      {ProductsList.map((product) => (
      <Product key={product.id} product={product} onAdd={onAdd}/>

      
      ))}
    </div>
    </div>
  )
}

export default Main
