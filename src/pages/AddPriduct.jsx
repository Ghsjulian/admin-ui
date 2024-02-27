import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import __api__ from "../assets/js/Requester.js";
import "../assets/css/custom.css";
import ghs from "../assets/images/ghs.jpg";

const AddPriduct = () => {
    const imgRef = useRef(null);
    const [file, setFile] = useState();
    const preview = e => {
        console.log(e);
    };
    return (
        <>
            <div className="main-container">
                <h4>Add New Product</h4>
                <div className="form">
                    <img ref={imgRef} id="preview" src={ghs} alt="something" />
                    <label htmlFor="file">Select Products Image</label>
                    <input
                        onChange={e => {
                            preview(e.target);
                        }}
                        id="file"
                        style={{ display: "none" }}
                        value=""
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
