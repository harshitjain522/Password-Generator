import React from "react";

function TypeSelector({ type, setType }) {
    return (
        <div className="type-switch">
            <button
                className={type === "random" ? "active" : ""}
                onClick={() => setType("random")}
            >
                Random
            </button>
            <button
                className={type === "memorable" ? "active" : ""}
                onClick={() => setType("memorable")}
            >
                Memorable
            </button>
            <button
                className={type === "pin" ? "active" : ""}
                onClick={() => setType("pin")}
            >
                PIN
            </button>
        </div>
    );
}

export default TypeSelector;
