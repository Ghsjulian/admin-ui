import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Notification from "../components/Notification";
import ghs from "../assets/images/ghs.jpg";

const Navbar = () => {
    const [isProfile, setIsProfile] = useState(false);
    const modeRef = useRef(null);
    const profileRef = useRef(null);
    const modeSwitch = () => {
        document.documentElement.classList.toggle("dark");
        modeRef.current.classList.toggle("active");
    };

    const profileMenu = () => {
        const type = profileRef.current.getAttribute("data");
        if (type === "close") {
            setIsProfile(true);
            profileRef.current.setAttribute("data", "opened");
        } else {
            setIsProfile(false);
            profileRef.current.setAttribute("data", "close");
        }
    };

    return (
        <>
            <div className="app-header">
                <div className="app-header-left">
                    <span className="app-icon"></span>
                    <p className="app-name">Dashboard</p>
                    <div className="search-wrapper">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="feather feather-search"
                            viewBox="0 0 24 24"
                        >
                            <defs></defs>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="M21 21l-4.35-4.35"></path>
                        </svg>
                    </div>
                </div>
                <div className="app-header-right">
                    <button
                        ref={modeRef}
                        onClick={modeSwitch}
                        className="mode-switch"
                        title="Switch Theme"
                    >
                        <svg
                            className="moon"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <defs></defs>
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>
                    <NavLink
                        to="/add-product"
                        className="add-btn"
                        title="Add New Product"
                    >
                        <svg
                            className="btn-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-plus"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </NavLink>
                    <NavLink to="/notification" className="notification-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-bell"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </NavLink>
                    <button onClick={profileMenu} className="profile-btn">
                        <img src={ghs} />
                        <span>Ghs Julian</span>
                    </button>
                </div>
            </div>

            <div
                data="close"
                ref={profileRef}
                className={isProfile ? "setting-popup" : "profile-menu"}
            >
                <NavLink onClick={profileMenu} to="/profile">
                    <img src={ghs} alt="Ghs Julian" />
                    <span>Ghs Julian</span>
                </NavLink>
                <NavLink onClick={profileMenu} to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-home"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Home</span>
                </NavLink>
                <NavLink onClick={profileMenu} to="/dashboard">
                    <svg
                        className="link-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="feather feather-pie-chart"
                        viewBox="0 0 24 24"
                    >
                        <defs />
                        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
                    </svg>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink onClick={profileMenu} to="/products">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-calendar"
                    >
                        <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Products</span>
                </NavLink>
                <NavLink onClick={profileMenu} to="/settings">
                    <svg
                        className="link-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="feather feather-settings"
                        viewBox="0 0 24 24"
                    >
                        <defs />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                    <span>Settings</span>
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
