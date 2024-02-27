import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ghs from "../assets/images/ghs.jpg";
import { useAuth } from "../auth/Auth";

const Profile = () => {
    document.title = "Ghs Julian - Admin Profile";
    const  test  = useAuth();

    return (
        <>
            <div className="main-container">
                <img id="admin-profile" src={ghs} alt="Ghs" />
                <h4>Admin : Ghs Julian</h4>
                <div className="profile">
                    <div className="col">
                        Hello, I am the owner of the website. I provide this
                        website and handle the backend server side actions. Your
                        orders , cart , information, products, delivery reports
                        etc.
                    </div>
                    <div className="col">
                        <li>
                            Address : <span>Washington D.C</span>
                        </li>
                        <li>
                            Email : <span>ghsjulian@gmail.com</span>
                        </li>
                        <li>
                            web :{" "}
                            <a
                                target="_blank"
                                href="https://ghsresume.netlify.app"
                            >
                                https://ghsresume.netlify.app
                            </a>
                        </li>
                        <li>
                            Contact : <span>013026****27</span>
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
