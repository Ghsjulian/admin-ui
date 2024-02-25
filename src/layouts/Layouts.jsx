import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layouts =  ({children}) => {
    return (
        <>
            <Navbar />
            <div class="app-content">
            <Sidebar />
            {children}
            </div>
        </>
    );
};

export default Layouts;
