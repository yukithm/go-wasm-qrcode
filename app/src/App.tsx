import React from "react";
import "./App.css";
import QrGenerator from "./components/QrGenerator";

function App() {
    return (
        <div className="App">
            <h1 className="App-title">QR Code Generator</h1>
            <QrGenerator />
        </div>
    );
}

export default App;
