import React from "react";

function RandomOptions({
    upper,
    setUpper,
    lower,
    setLower,
    numbers,
    setNumbers,
    symbolMode,
    setSymbolMode,
    customSymbols,
    setCustomSymbols,
}) {
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={upper}
                    onChange={() => setUpper(!upper)}
                />
                Uppercase
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={lower}
                    onChange={() => setLower(!lower)}
                />
                Lowercase
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                />
                Numbers
            </label>

            <label>
                Symbols
                <select
                    value={symbolMode}
                    onChange={(e) => setSymbolMode(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="basic">Basic</option>
                    <option value="extended">Extended</option>
                    <option value="strict">Strict</option>
                    <option value="custom">Custom</option>
                </select>
            </label>

            {symbolMode === "custom" && (
                <input
                    type="text"
                    placeholder="Allowed symbols"
                    value={customSymbols}
                    onChange={(e) => setCustomSymbols(e.target.value)}
                />
            )}
        </>
    );
}

export default RandomOptions;
