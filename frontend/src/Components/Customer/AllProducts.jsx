import { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/products");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h2 className="my-3 text-center">All Products</h2>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="col-md-4 mb-4">
                            <div className="card">
                            <img src={`data:image/png;base64,${product.image}`} alt={product.name} className="card-img-top" />

                                {/* <img
                                    src={product.image ? product.image : "https://via.placeholder.com/150"}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: "200px", objectFit: "cover" }}
                                /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">
                                        <strong>Price:</strong> ${product.price}
                                    </p>
                                    <p className="card-text">
                                        <strong>Stock:</strong> {product.stock}
                                    </p>
                                    <p className="card-text">
                                        <strong>Category:</strong> {product.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
