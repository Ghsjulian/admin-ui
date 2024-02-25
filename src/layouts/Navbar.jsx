import React, { useEffect, useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/images/ghs.jpg";

const Navbar = () => {
    const [isNoti,setIsNoti]=useState(false)
    const modeRef = useRef(null);
    const modeSwitch = () => {
        document.documentElement.classList.toggle("dark");
        modeRef.current.classList.toggle("active");
    };
    const noti = () => {
        setIsNoti(true);
    };
    const closeNoti = () => {
        setIsNoti(false);
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
                            width="24"
                            height="24"
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
                    <button onClick={noti} className="notification-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
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
                    </button>
                    <button className="profile-btn">
                        <img src={ghs} />
                        <span>Aybüke C.</span>
                    </button>
                </div>
            </div>

{/* Message Area */}
      <div className={isNoti?"show messages-section":"messages-section"}>
                <button onClick={closeNoti} className="messages-close">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-x-circle"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                </button>
                <div className="projects-section-header">
                    <p>Client Messages</p>
                </div>
                <div className="messages">
                    <div className="message-box">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            alt="profile image"
                        />
                        <div className="message-content">
                            <div className="message-header">
                                <div className="name">Stephanie</div>
                                <div className="star-checkbox">
                                    <input type="checkbox" id="star-1" />
                                    <label html-html-for="star-1">
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
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <p className="message-line">
                                I got your first assignment. It was quite good.
                                🥳 We can continue with the next assignment.
                            </p>
                            <p className="message-line time">Dec, 12</p>
                        </div>
                    </div>
                    <div className="message-box">
                        <img
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                            alt="profile image"
                        />
                        <div className="message-content">
                            <div className="message-header">
                                <div className="name">Mark</div>
                                <div className="star-checkbox">
                                    <input type="checkbox" id="star-2" />
                                    <label html-for="star-2">
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
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <p className="message-line">
                                Hey, can tell me about progress of project? I'm
                                waiting for your response.
                            </p>
                            <p className="message-line time">Dec, 12</p>
                        </div>
                    </div>
                    <div className="message-box">
                        <img
                            src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="profile image"
                        />
                        <div className="message-content">
                            <div className="message-header">
                                <div className="name">David</div>
                                <div className="star-checkbox">
                                    <input type="checkbox" id="star-3" />
                                    <label html-for="star-3">
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
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <p className="message-line">
                                Awesome! 🤩 I like it. We can schedule a meeting
                                for the next one.
                            </p>
                            <p className="message-line time">Dec, 12</p>
                        </div>
                    </div>
                    <div className="message-box">
                        <img
                            src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="profile image"
                        />
                        <div className="message-content">
                            <div className="message-header">
                                <div className="name">Jessica</div>
                                <div className="star-checkbox">
                                    <input type="checkbox" id="star-4" />
                                    <label html-for="star-4">
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
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <p className="message-line">
                                I am really impressed! Can't wait to see the
                                final result.
                            </p>
                            <p className="message-line time">Dec, 11</p>
                        </div>
                    </div>
                </div>
            </div>


{/* Message Area */}



        </>
    );
};

export default Navbar;
