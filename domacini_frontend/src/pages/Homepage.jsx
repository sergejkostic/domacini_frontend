import * as React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <p>Welcome to Home page!</p>
            <button onClick={() => navigate("/drugipage")}>Go to Drugi page</button>
        </div>
    )
}

export default HomePage;