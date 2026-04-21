import React from "react";

function GenerateButton({ generatePassword }) {
    return (
        <button className="generate" onClick={generatePassword}>
            Refresh password
        </button>
    );
}

export default GenerateButton;
