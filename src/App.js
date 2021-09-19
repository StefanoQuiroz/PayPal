import React, { useState } from 'react';
import './App.css';
import PayPal from './components/PayPal';

function App() {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="App">
    { checkout ? 
        <PayPal/>
        : 
        <button onClick={() => setCheckout(true)}>Checkout</button>
    }
    </div>
  );
}

export default App;
