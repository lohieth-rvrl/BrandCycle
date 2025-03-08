import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

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

    useEffect(() => {
        let filtered = products.filter((product) => {
            return (
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category)
            );
        });

        filtered = filtered.sort((a, b) => {
            return sortOrder === "asc"
                ? a.price - b.price
                : b.price - a.price;
        });

        setFilteredProducts(filtered);
    }, [selectedCategories, products, sortOrder]);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedProducts = filteredProducts.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="container py-3">
            <div className="row pt-5 ">
                <div className="col-md-12 d-flex flex-row justify-content-center ">
                    <div className="category">
                        <h6>Categories:</h6>
                        {['Electronics', 'Fashion', 'Books'].map((category) => (
                            <div key={category} className="form-check">
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
                    </div>
                    <div className="filter">

                    </div>


                </div>

                <div className="col-md-12">
                    <div className="container d-flex flex-row align-items-center justify-content-between">
                        <div className="path d-flex flex-row align-items-center">
                            <div className="path">Home</div>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 192 512" class="header-card-nav__arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <div class="path" >Products</div>
                        </div>
                        <div className="order d-flex flex-row align-items-center justify-content-center gap-2">
                            <h6 className="mt-2">Sort:</h6>
                            <select className="form-select py-0 m-0" value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>
                            </select>

                        </div>

                    </div>
                    {/* <div className="container">
                        <span>

                        </span>

                        <p><button className="btn btn-primary">Home</button> > <button className="btn btn-primary">Shop</button></p>
                    </div> */}
                    <div className="row mt-3">
                        {paginatedProducts.map((product) => (
                            <div className="col-md-3 mb-4" key={product.name}>
                                <div className="card h-100 shadow-sm">
                                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                                        <img src={`data:image/png;base64,${product.image}`} alt={product.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                                        <div className="card-body">
                                            <em>{product.category} - {product.name}</em>
                                            <p className="card-text">${product.price}</p>
                                        </div>
                                    </Link>
                                    <div className="p-2 w-50 text-center">
                                        <button className="btn btn-primary w-100">Add to Cart 🛒</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {paginatedProducts.length === 0 && (
                            <p className="text-center">No products match the filters.</p>
                        )}
                    </div>

                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination justify-content-center"}
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
