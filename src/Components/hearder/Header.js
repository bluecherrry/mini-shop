import React from 'react'
import {   Link} from 'react-router-dom'
import './Header.css'
function Header(props) {
  return (
    <header className="row block center">
      <div >
        <a href="/">
          <h1> Little Shop</h1>
        </a>
      </div>
      <div>
       
<ul>
    <li>
        <a href='/Basket'>
        
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        
        </a>{' '} </li>
           <li>
        <a href='/Basket2'>
          bassket
        </a> 
        </li>

</ul>
      </div>
    </header>

  )
}

export default Header
