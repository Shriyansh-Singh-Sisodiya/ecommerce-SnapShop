import React, { useContext } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { CartsContext } from './store/CartsContext';
import axios from 'axios';
function Carts() {
  const { carts, increaseQuantity, decreaseQuantity, getTotalAmount } = useContext(CartsContext);
  const handleCheckout = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: getTotalAmount(),
      });

      const options = {
        key: "rzp_test_1234567890abcdef",
        amount: data.amount,
        currency: "INR",
        name: "Snap-Shop",
        description: "Purchase",
        order_id: data.id,
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Product Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => (
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <button
                  className="btn btn-info mx-2"
                  onClick={() => decreaseQuantity(cart.id)}
                >
                  -
                </button>
                <span>{cart.quantity}</span>
                <button
                  className="btn btn-info mx-2"
                  onClick={() => increaseQuantity(cart.id)}
                >
                  +
                </button>
              </td>
              <td>${cart.price}</td>
              <td>${cart.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="m-5">
        <h3 className="mx-3">Total: ${getTotalAmount().toFixed(2)}</h3>
        <Link onClick={handleCheckout} to="/order-placed" className="btn btn-success px-5 my-5">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Carts;
