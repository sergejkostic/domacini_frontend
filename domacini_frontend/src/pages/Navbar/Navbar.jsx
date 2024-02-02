import * as React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    
    return (
        <div className="navbar_container">
            <ul>
                <li>
                    <button type="button" class="btn btn-dark">Dark</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;