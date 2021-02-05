import React,{useState} from 'react'
import './App.css';
import Header from './Components/hearder/Header'
import Basket from './Components/basket/Basket'
import Main from './Components/Main';
import Products from './data.js/ProductsList' ;
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Basket2 from './Components/Sign-In/Basket2';
function App() {
const {products} = Products;
const [cartItems,setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find( (x) => x.id === product.id)
  if(exist) {
    setCartItems(
      cartItems.map( (x) => x.id === product.id ? {...exist,qty: exist.qty + 1 } : x
        )
        );
  } else  {
  setCartItems([...cartItems, {...product, qty: 1 }]);
 }
};
const onRemove = (product) => {
  const exist = cartItems.find( (x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter( (x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
  return (
    <div>
      <Router>
           <Header />
      
      <Switch>
        <Route path='/' exact>
          
        </Route>
          <Route   path="/Basket"  >
              <Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
         </Route>
         <Route  path='/Basket2'  component={Basket2}/>
      </Switch>
    </Router>
     <div className="row">
               <Main products={products} onAdd={onAdd}>
                </Main>
 
        </div> 
    </div>
  );
}

export default App;
 