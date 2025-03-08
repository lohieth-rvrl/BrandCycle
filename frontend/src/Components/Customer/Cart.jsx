import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleQuantityChange = (id, change) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    return (
        <div className="container py-3">
            <h2 className="mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div className="card mb-3" key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={`data:image/png;base64,${item.image}`}
                                        alt={item.name}
                                        className="img-fluid rounded-start"
                                        style={{ height: "150px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">${item.price}</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-danger mt-2"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between">
                        <Link to="/products" className="btn btn-secondary">
                            Continue Shopping
                        </Link>
                        <button className="btn btn-success">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
