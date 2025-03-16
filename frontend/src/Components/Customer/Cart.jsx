import React from "react";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRemoveFormat } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalCost,
  } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="row">
            {cart.map((item) => (
              <div key={item._id} className="col-md-12 mb-4">
                <div className="card">
                  <div className="row g-0">
                    {/* Product Image */}
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">₹{item.price.toFixed(2)}</p>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => decreaseQuantity(item._id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="form-control text-center mx-2"
                            style={{ width: "50px" }}
                          />
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal and Remove Button */}
                    <div className="col-md-2 d-flex align-items-center justify-content-end">
                      <div className="card-body">
                        <p className="card-text">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item._id)}
                        >
                            <FaRemoveFormat /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Code Section */}
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Coupon code"
                className="form-control me-2"
                style={{ width: "200px" }}
              />
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
            <button className="btn btn-secondary" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="card p-4">
            <h3 className="mb-3">Cart Totals</h3>
            <p className="mb-2">Subtotal: ₹{totalCost().toFixed(2)}</p>
            <p className="mb-3">Total: ₹{totalCost().toFixed(2)}</p>
            <button className="btn btn-success w-100">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;