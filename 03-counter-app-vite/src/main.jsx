import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    //Document. CreateElement 
    return <div>Hello World!!</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        </React.StrictMode>
);