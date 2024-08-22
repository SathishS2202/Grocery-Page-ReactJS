import React, { useState } from 'react';
import appleImage from './assets/appleImage.jpg';
import orangeImage from './assets/orangeImage.jpg';
import bananaImage from './assets/bananaImage.jpg';
import './shoppingCart.css';

function GroceryPage() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='container'>
            <h1>Grocery</h1>
            <div className='item Apple'>
                <img src={appleImage} alt='apple' />
                <h2>Apple</h2>
                <h2>1kg: 180</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <div className='item Orange'>
                <img src={orangeImage} alt='orange' />
                <h2>Orange</h2>
                <h2>1kg: 100</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <div className='item Banana'>
                <img src={bananaImage} alt='banana' />
                <h2>Banana</h2>
                <h2>1kg: 100</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <div className='item BananaDuplicate'>
                <img src={bananaImage} alt='banana' />
                <h2>Banana</h2>
                <h2>1kg: 100</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <div className='Total'>
                <h1>Total Quantities: {count}</h1>
            </div>
        </div>
    );
}

export default GroceryPage;
