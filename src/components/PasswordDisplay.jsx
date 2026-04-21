import React from "react";

function PasswordDisplay({ password, animating }) {
    return (
        <input
            className={`password ${animating ? "regen" : ""}`}
            type="text"
            value={password}
            readOnly
        />
    );
}

export default PasswordDisplay;
