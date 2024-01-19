import * as React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    
    return (
        <div className="navbar_container">
            <ul>
                <li>
                    <button>sedi</button>
                    <button>dole</button>
                    <button>siso</button>
                    <button>nemoj</button>
                    <button>da</button>
                    <button>si</button>
                    <button>vrisno</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;