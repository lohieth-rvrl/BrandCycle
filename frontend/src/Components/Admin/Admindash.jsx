import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AdminNav from "./AdminNav";
import ManageProduct from "./ManageProduct";

function Admindash() {
    return (
        <>
            <AdminNav />
            <ManageProduct/>
        </>
    );
}

export default Admindash;
