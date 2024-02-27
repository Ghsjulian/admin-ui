import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import { useAuthContext } from "./auth/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <useAuthContext>
            <App />
        </useAuthContext>
    </React.StrictMode>
);
