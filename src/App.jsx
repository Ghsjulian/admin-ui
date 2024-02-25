import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./components/Home";
import AddPriduct from "./pages/AddPriduct";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    exact
                    path="/"
                    element={<Layouts children={<Home />} />}
                />
                <Route
                    index
                    exact
                    path="/add-product"
                    element={<Layouts children={<AddPriduct />} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
