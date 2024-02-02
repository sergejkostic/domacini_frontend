import * as React from "react";
import './Celcerpage.css';
import Card from "../../Components/Card";

function CelcerPage() {
    
    return (
        <div className="main-container">
            <h1>Welcome to celcer page</h1>
            <Card title="osnove rac "text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Card title="swizz "text="not goated"/>
            <Card title="hoodied "text="shiet"/>
            <Card title="xegi "text="goat"/>
        </div>

    )
}

export default CelcerPage;