import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/custom.css";
import ghs from "../assets/images/ghs.jpg";

const AddPriduct = () => {
    return (
        <>
            <div className="main-container">
                <h4>Add New Product</h4>
                <div className="form">
                    <img id="preview" src={ghs} alt="something" />
                    <label for="file">Select Products Image</label>
                    <input
                        id="file"
                        style={{ display: "none" }}
                        type="file"
                        accept="*"
                        multiple
                    />
                    <input type="text" placeholder="Enter Products Name" />
                    <input type="text" placeholder="Enter Products Price" />
                    <select value="">
                        <option value="Mens Collection">Mens Collection</option>
                        <option value="Mens Collection">Mens Collection</option>
                        <option value="Mens Collection">Mens Collection</option>
                        <option value="Mens Collection">Mens Collection</option>
                    </select>
                    <textarea placeholder="Enter Products Details"></textarea>
                    <button className="add">Add Now</button>
                </div>
            </div>
        </>
    );
};

export default AddPriduct;
