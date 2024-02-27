import React, { useRef, useEffect, useState } from "react";
import Notification from "./Notification"
import ghs from "../assets/images/ghs.jpg"

const Home = () => {
    const projectRef = useRef(null);
    //  const notiRef = useRef(null);
    const list = useRef(null);
    const grid = useRef(null);
    const listView = () => {
        grid.current.classList.remove("active");
        list.current.classList.add("active");
        projectRef.current.classList.remove("jsGridView");
        projectRef.current.classList.add("jsListView");
    };
    const gridView = () => {
        list.current.classList.remove("active");
        grid.current.classList.add("active");
        projectRef.current.classList.remove("jsListView");
        projectRef.current.classList.add("jsGridView");
    };

    return (
        <>
            <div className="projects-section">
                <div className="projects-section-header">
                    <p>Projects</p>
                    <p className="time">December, 12</p>
                </div>
                <div className="projects-section-line">
                    <div className="projects-status">
                        <div className="item-status">
                            <span className="status-number">45</span>
                            <span className="status-type">In Progress</span>
                        </div>
                        <div className="item-status">
                            <span className="status-number">24</span>
                            <span className="status-type">Upcoming</span>
                        </div>
                        <div className="item-status">
                            <span className="status-number">62</span>
                            <span className="status-type">Total Projects</span>
                        </div>
                    </div>
                    <div className="view-actions">
                        <button
                            onClick={listView}
                            ref={list}
                            className="view-btn list-view"
                            title="List View"
                        >
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
                                className="feather feather-list"
                            >
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                            </svg>
                        </button>
                        <button
                            onClick={gridView}
                            ref={grid}
                            className="view-btn grid-view active"
                            title="Grid View"
                        >
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
                                className="feather feather-grid"
                            >
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div ref={projectRef} className="project-boxes jsGridView">
                    <div className="project-box-wrapper">
                        <div
                            className="project-box"
                            style={{ backgroundColor: "#fee4cb" }}
                        >
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">
                                    Web Designing
                                </p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "60%",
                                            backgroundColor: "#ff942e"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">60%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#ff942e" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#ff942e" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-wrapper">
                        <div
                            className="project-box"
                            style={{ backgroundColor: "#e9e7fd" }}
                        >
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">Testing</p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "50%",
                                            backgroundColor: "#4f3ff0"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">50%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#4f3ff0" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#4f3ff0" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-wrapper">
                        <div className="project-box">
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">
                                    Svg Animations
                                </p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "80%",
                                            backgroundColor: "#096c86"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">80%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#096c86" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#096c86" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-wrapper">
                        <div
                            className="project-box"
                            style={{ backgroundColor: "#ffd3e2" }}
                        >
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">
                                    UI Development
                                </p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "20%",
                                            backgroundColor: "#df3670"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">20%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#df3670" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#df3670" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-wrapper">
                        <div
                            className="project-box"
                            style={{ backgroundColor: "#c8f7dc" }}
                        >
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">
                                    Data Analysis
                                </p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "60%",
                                            backgroundColor: "#34c471"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">60%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#34c471" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#34c471" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box-wrapper">
                        <div
                            className="project-box"
                            style={{ backgroundColor: "#d5deff" }}
                        >
                            <div className="project-box-header">
                                <span>December 10, 2020</span>
                                <div className="more-wrapper">
                                    <button className="project-btn-more">
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
                                            className="feather feather-more-vertical"
                                        >
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="project-box-content-header">
                                <p className="box-content-header">
                                    Web Designing
                                </p>
                                <p className="box-content-subheader">
                                    Prototyping
                                </p>
                            </div>
                            <div className="box-progress-wrapper">
                                <p className="box-progress-header">Progress</p>
                                <div className="box-progress-bar">
                                    <span
                                        className="box-progress"
                                        style={{
                                            width: "40%",
                                            backgroundColor: "#4067f9"
                                        }}
                                    ></span>
                                </div>
                                <p className="box-progress-percentage">40%</p>
                            </div>
                            <div className="project-box-footer">
                                <div className="participants">
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <img
                                        src={ghs}
                                        alt="participant"
                                    />
                                    <button
                                        className="add-participant"
                                        style={{ color: "#4067f9" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-plus"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="days-left"
                                    style={{ color: "#4067f9" }}
                                >
                                    2 Days Left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      {
          <Notification value={false}/>
      }
        </>
    );
};

export default Home;
