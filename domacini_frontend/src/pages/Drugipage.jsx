import * as React from "react";
import { useNavigate } from "react-router-dom";

function DrugiPage() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Welcome to Drugi page!</p>
            <button onClick={() => navigate("/")}>Go back to home page</button>
        </div>
    )
}

export default DrugiPage;