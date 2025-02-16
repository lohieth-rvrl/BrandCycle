import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageProduct() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });
  const [updateProductId, setUpdateProductId] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("category", product.category);
    formData.append("image", product.image);

    try {
      await axios.post("http://localhost:5000/api/v1/add-product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully");
      setProduct({ name: "", description: "", price: "", stock: "", category: "", image: null });
      fetchProducts();
    } catch (error) {
      alert("Failed to add product");
    }
  };


  const handleProductSelect = (selectedProduct) => {
    setUpdateProductId(selectedProduct._id);
    setProduct({
      name: selectedProduct.name,
      description: selectedProduct.description,
      price: selectedProduct.price,
      stock: selectedProduct.stock,
      category: selectedProduct.category,
      image: null,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!updateProductId) return alert("Select a product to update");

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("category", product.category);
    if (product.image) formData.append("image", product.image);

    try {
      await axios.put(`http://localhost:5000/api/v1/update-product/${updateProductId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product updated successfully");
      setProduct({ name: "", description: "", price: "", stock: "", category: "", image: null });
      setUpdateProductId("");
      fetchProducts();
    } catch (error) {
      alert("Failed to update product");
    }
  };

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setProducts([]); // Clear previous products

    if (selectedCategory) {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/products/${selectedCategory}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/delete-product/${id}`);
        alert("Product deleted successfully");
        fetchProducts();
      } catch (error) {
        alert("Failed to delete product");
      }
    }
  };



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Manage Product</h2>
            <nav>
              <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button">ADD</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button">UPDATE</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button">DELETE</button>
              </div>
            </nav>

            <div className="tab-content mt-3">
              {/* ADD PRODUCT FORM */}
              <div className="tab-pane fade show active" id="nav-home">
                <form onSubmit={handleSubmit} className="p-3">
                  <input type="text" name="name" placeholder="Name" className="form-control mb-3" value={product.name} onChange={handleChange} required />
                  <input type="text" name="description" placeholder="Description" className="form-control mb-3" value={product.description} onChange={handleChange} required />
                  <input type="number" name="price" placeholder="Price" className="form-control mb-3" value={product.price} onChange={handleChange} required />
                  <input type="number" name="stock" placeholder="Stock" className="form-control mb-3" value={product.stock} onChange={handleChange} required />
                  {/* <input type="text" name="category" placeholder="Category" className="form-control mb-3" value={product.category} onChange={handleChange} required /> */}
                  <select className="form-control mb-3" name="category" onChange={handleChange} value={product.category} required>
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                  </select>
                  <input type="file" className="form-control mb-3" onChange={handleImageChange} />
                  <button type="submit" className="btn btn-primary w-100">Add Product</button>
                </form>
              </div>

              {/* UPDATE PRODUCT FORM */}



              <div className="tab-pane fade" id="nav-profile">
                <div className="mb-3">
                  <label>Select Category:</label>
                  <select className="form-control" onChange={handleCategoryChange} value={category}>
                    <option value="">Select</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                  </select>
                </div>

                <div className="mb-3">
                  {category && products.length > 0 && (
                    <ul className="list-group">
                      {products.map((product) => (
                        <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                          {product.name}
                          <button className="btn btn-success btn-sm" onClick={() => handleProductSelect(product)}>
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {category && products.length === 0 && <p className="text-center mt-3">No products found in this category.</p>}
                </div>

                <div className="mb-3">
                  {updateProductId && (
                    <form onSubmit={handleUpdate} className="p-3">
                      <input type="text" name="name" placeholder="Product Name" className="form-control mb-3" value={product.name} onChange={handleChange} />
                      <input type="text" name="description" placeholder="Description" className="form-control mb-3" value={product.description} onChange={handleChange} />
                      <input type="number" name="price" placeholder="Price" className="form-control mb-3" value={product.price} onChange={handleChange} />
                      <input type="number" name="stock" placeholder="Stock" className="form-control mb-3" value={product.stock} onChange={handleChange} />
                      <select name="category" className="form-control mb-3" value={product.category} onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Books">Books</option>
                      </select>
                      <input type="file" className="form-control mb-3" onChange={handleImageChange} />
                      <button type="submit" className="btn btn-warning w-100">Update Product</button>
                    </form>
                  )}
                </div>





                {/* <div className="mb-3">
                  <label>Select Category:</label>
                  <select className="form-control" onChange={handleCategoryChange} value={category}>
                    <option value="">Select</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                  </select>
                </div>
                <div className="mb-3">
                  {category && products.length > 0 && (
                    <ul className="list-group">
                      {products.map((product) => (
                        <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                          {product.name}
                          <button className="btn btn-success btn-sm" onClick={() => setUpdateProductId(product.name)}>
                            Edit
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {category && products.length === 0 && <p className="text-center mt-3">No products found in this category.</p>}
                </div>

                <div className="mb-3">
                  {updateProductId && (
                    <form onSubmit={handleUpdate} className="p-3">
                      <input type="text" name="name" placeholder="{p.name}" className="form-control mb-3" value={product.name} onChange={handleChange} />
                      <input type="text" name="description" placeholder="Description" className="form-control mb-3" value={product.description} onChange={handleChange} />
                      <input type="number" name="price" placeholder="Price" className="form-control mb-3" value={product.price} onChange={handleChange} />
                      <input type="number" name="stock" placeholder="Stock" className="form-control mb-3" value={product.stock} onChange={handleChange} />
                      <input type="text" name="category" placeholder="Category" className="form-control mb-3" value={product.category} onChange={handleChange} />
                      <input type="file" className="form-control mb-3" onChange={handleImageChange} />
                      <button type="submit" className="btn btn-warning w-100">Update Product</button>
                    </form>
                  )}
                </div>

                <form onSubmit={handleUpdate} className="p-3">
                  <input type="text" name="name" placeholder="{p.name}" className="form-control mb-3" value={product.name} onChange={handleChange} />
                  <input type="text" name="description" placeholder="Description" className="form-control mb-3" value={product.description} onChange={handleChange} />
                  <input type="number" name="price" placeholder="Price" className="form-control mb-3" value={product.price} onChange={handleChange} />
                  <input type="number" name="stock" placeholder="Stock" className="form-control mb-3" value={product.stock} onChange={handleChange} />
                  <input type="text" name="category" placeholder="Category" className="form-control mb-3" value={product.category} onChange={handleChange} />
                  <input type="file" className="form-control mb-3" onChange={handleImageChange} />
                  <button type="submit" className="btn btn-warning w-100">Update Product</button>
                </form> */}
              </div>

              {/* DELETE PRODUCT FORM */}
              <div className="tab-pane fade" id="nav-contact">


                <div className="mb-3">
                  <label>Select Category:</label>
                  <select className="form-control" onChange={handleCategoryChange} value={category}>
                    <option value="">Select</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Books">Books</option>
                  </select>
                </div>

                {/* Display Products Only After Category Selection */}
                {category && products.length > 0 && (
                  <ul className="list-group">
                    {products.map((product) => (
                      <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {product.name}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Show message if no products found */}
                {category && products.length === 0 && <p className="text-center mt-3">No products found in this category.</p>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProduct;
