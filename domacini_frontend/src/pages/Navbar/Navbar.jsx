import * as React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    
    return (
        <div className="navbar_container">
            <button onClick={() => navigate("/celcerpage")}>Take me to celcer page</button>
        </div>
    )
}

export default Navbar;