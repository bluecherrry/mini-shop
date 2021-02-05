
import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice =  Number( cartItems.reduce((a, b ) => a + b.price * b.qty , 0))
  const shipping = itemPrice > 1000 ? 0 : 20;
  const totalPrice = itemPrice + shipping
  return (
    <div className="block">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className=" col-2">{item.name}{item.id}</div>

              <div className=" block col-2">
              {item.qty} x ${item.price}
              </div>


            <div className=" block col-2 text-right">

              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            
            
            <hr></hr>
           
            
            <div className="row">
              <div className="col-2">
                <strong>shipping Price</strong>
              </div>
              <div className="col-1 text-right">
              <strong> {Number(shipping)} </strong>
              </div>
</div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
              <strong> {Number(totalPrice)} </strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('thanks for shopping')} className="button-cart">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}