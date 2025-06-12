import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cart, setCart] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert("Please enter both username and password!");
    }
  };

  const pizzaMenu = [
    {
      id: 1, name: "Margherita", price: 199,
      image: "https://www.dominos.co.in/files/items/Margherit.jpg"
    },
    {
      id: 2, name: "Farmhouse", price: 249,
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg"
    },
    {
      id: 3, name: "Peppy Paneer", price: 269,
      image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
    },
    {
      id: 4, name: "Veggie Paradise", price: 239,
      image: "https://www.dominos.co.in/files/items/Veg_Paradise.jpg"
    },
    {
      id: 5, name: "Mexican Green Wave", price: 259,
      image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
    },
    {
      id: 6, name: "Deluxe Veggie", price: 289,
      image: "https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg"
    },
  ];

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={loggedIn ? "app-container" : "login-background"}>
      {!loggedIn ? (
  <div className="login-background">
    <div className="left-image"></div>
    <div className="right-login">
      <h1 className="site-title">🍕 Pizza Palace</h1>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
) : (
  // rest of your pizza menu UI...

        <>
          <h1 className="site-title">🍕 Pizza Palace</h1>
          <div className="menu-box">
            <h2>Welcome, {username}! Choose Your Pizza 🍽️</h2>
            <div className="pizza-list">
              {pizzaMenu.map((pizza) => (
                <div key={pizza.id} className="pizza-card">
                  <img src={pizza.image} alt={pizza.name} />
                  <h3>{pizza.name}</h3>
                  <p>Price: ₹{pizza.price}</p>
                  <button onClick={() => addToCart(pizza)}>Add to Cart</button>
                </div>
              ))}
            </div>

            <div className="cart-box">
              <h3>🛒 Cart: {cart.length} item(s)</h3>
              {cart.map((item, index) => (
                <div key={index}>{item.name} - ₹{item.price}</div>
              ))}
              <h4>Total: ₹{totalPrice}</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
