import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AdminNav from "./AdminNav";
import ManageProduct from "./ManageProduct";
import Users from "./Users";

function Admindash() {
    return (
        <>
            <AdminNav />
            <Users/>
            <ManageProduct/>
        </>
    );
}

export default Admindash;
