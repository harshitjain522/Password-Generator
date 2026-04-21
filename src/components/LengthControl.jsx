import React from "react";

function LengthControl({ length, handleLength }) {
    return (
        <label>
            Characters
            <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => handleLength(Number(e.target.value))}
            />
            <input
                type="number"
                min="4"
                max="64"
                value={length}
                onChange={(e) => handleLength(Number(e.target.value))}
            />
        </label>
    );
}

export default LengthControl;
