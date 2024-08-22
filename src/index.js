import React from 'react';
import ReactDOM from 'react-dom';
import GroceryPage from './ShoppingCart';
function Grocery()
{
  return(
    <div>
  <GroceryPage/>
  </div>
  )
}
ReactDOM.render(<Grocery/>,document.getElementById("root"));