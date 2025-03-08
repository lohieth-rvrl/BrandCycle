// ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
console.log("Received ID:", id);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching product details", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`data:image/png;base64,${product.image}`}
                        alt={product.name}
                        className="img-fluid"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p className="text-muted">Category: {product.category}</p>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <button className="btn btn-primary">Add to Cart 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
