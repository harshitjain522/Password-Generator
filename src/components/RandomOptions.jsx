import "./RandomOptions.css";

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
        <div className="options-group">
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={upper}
                    onChange={() => setUpper(!upper)}
                />
                <span className="checkmark"></span>
                Uppercase (A-Z)
            </label>

            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={lower}
                    onChange={() => setLower(!lower)}
                />
                <span className="checkmark"></span>
                Lowercase (a-z)
            </label>

            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                />
                <span className="checkmark"></span>
                Numbers (0-9)
            </label>

            <label className="select-label">
                Symbols
                <select
                    value={symbolMode}
                    onChange={(e) => setSymbolMode(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="basic">Basic (!@#$%^)</option>
                    <option value="extended">Extended (!@#$%^&amp;*()+_)</option>
                    <option value="strict">Strict (@#$)</option>
                    <option value="custom">Custom</option>
                </select>
            </label>

            {symbolMode === "custom" && (
                <input
                    className="custom-symbols-input"
                    type="text"
                    placeholder="Enter custom symbols…"
                    value={customSymbols}
                    onChange={(e) => setCustomSymbols(e.target.value)}
                />
            )}
        </div>
    );
}

export default RandomOptions;
