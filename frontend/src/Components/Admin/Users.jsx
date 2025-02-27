import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`http://localhost:5000/api/v1/delete-user/${id}`);
                alert("user deleted successfully");
                fetchUsers();
            } catch (error) {
                alert("Failed to delete user");
            }
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-8 col-sm-10">
                    <div className="row">
                        {users.map((user) => (
                            <div className="col-lg-4" key={user._id}>
                                <div className="card shadow-lg d-flex justify-content-between align-items-center w-100 px-4">
                                    <p className="text-success w-75">{user._id}<br /> {user.username} <br /> {user.email} <br />{user.phone}</p>
                                    <p className=" d-flex flex-row gap-1">
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)} >
                                            Delete
                                        </button><br />
                                        <button className="btn btn-warning btn-sm" >
                                            block
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Users