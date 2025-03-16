import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching product details", error);
                setError("Failed to fetch product details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    if (!product) {
        return <p>No product found.</p>;
    }

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {/* Product Image */}
                    <div className="col-md-6">
                        <img
                            src={`data:image/png;base64,${product.image}`}
                            alt={product.name}
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="col-md-6">
                        <h1 className="fw-bold">{product.name}</h1>
                        <p className="text-muted">Category: {product.category}</p>
                        <h3 className="text-primary">${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-primary">Add to Cart 🛒</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;