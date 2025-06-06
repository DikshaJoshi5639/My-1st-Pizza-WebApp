import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");

  function NameHandler(event) {
    setName(event.target.value);
  }

  function AgeHandler(event) {
    setAge(event.target.value);
  }

  function CommentHandler(event) {
    setComment(event.target.value);
  }

  function PaymentHandler(event) {
    setPayment(event.target.value);
  }

  function ShippingHandler(event) {
    setShipping(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();  
    alert("Submitted!");
    setName("Guest");
    setAge(0);
    setComment("");
    setPayment("");
    setShipping("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={NameHandler} placeholder="Enter name" />
        <p>Name: {name}</p>

        <input type="number" value={age} onChange={AgeHandler} placeholder="Enter age" />
        <p>Age: {age}</p>

        <textarea value={comment} placeholder="Enter your comment" onChange={CommentHandler} />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={PaymentHandler}>
          <option value="">--Select Payment--</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="giftcard">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>

        <p>Delivery Mode</p>
        <label>
          <input
            type="radio"
            name="delivery"
            value="pick up"
            checked={shipping === "pick up"}
            onChange={ShippingHandler}
          />
          Pick Up
        </label><br />
        <label>
          <input
            type="radio"
            name="delivery"
            value="delivery"
            checked={shipping === "delivery"}
            onChange={ShippingHandler}
          />
          Delivery
        </label>
        <p>Delivery Mode: {shipping}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
