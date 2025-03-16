import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AllProducts = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

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

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3">
          <div className="card p-3 mb-4 shadow-sm">
            <h5 className="fw-bold mb-3">Filter by Category</h5>
            {["T-Shirts", "Books"].map((category) => (
              <div key={category} className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label className="form-check-label" htmlFor={category}>
                  {category}
                </label>
              </div>
            ))}

            <h5 className="fw-bold mt-4 mb-3">Sort by Price</h5>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <div className="row">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card h-100 shadow-sm">
                    <Link
                      to={`/product/${product._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <img
                        src={`data:image/png;base64,${product.image}`}
                        alt={product.name}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h6 className="card-title fw-bold">{product.name}</h6>
                        <p className="card-text text-muted">{product.category}</p>
                        <div className="rating-stars mb-2">⭐⭐⭐⭐⭐</div>
                        <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-4">No products match the filters.</p>
            )}
          </div>

          {/* Pagination */}
          <ReactPaginate
            previousLabel={"< Previous"}
            nextLabel={"Next >"}
            pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center mt-4"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;