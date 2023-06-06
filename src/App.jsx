import React from 'react';
import './style.css';
import Button from './button/Button';
import Checkout from './checkout/Checkout';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Checkout />
     
    </div>
  );
}
