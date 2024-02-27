import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./components/Home";
import AddPriduct from "./pages/AddPriduct";
import Profile from "./pages/Profile";
import Notification from "./components/Notification";
import Login from "./pages/Login";


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
                    exact
                    path="/add-product"
                    element={<Layouts children={<AddPriduct />} />}
                />
                <Route
                    exact
                    path="/profile"
                    element={<Layouts children={<Profile />} />}
                />
                <Route
                    exact
                    path="/notification"
                    element={<Layouts children={<Notification value={true}/>} />}
                />
                <Route
                    exact
                    path="/login"
                    element={<Login/>} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
