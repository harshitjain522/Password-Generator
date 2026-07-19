import "./LengthControl.css";

function LengthControl({ length, handleLength }) {
    return (
        <div className="length-control">
            <div className="length-header">
                <span className="length-label">Characters</span>
                <input
                    type="number"
                    min="4"
                    max="64"
                    value={length}
                    onChange={(e) => handleLength(Number(e.target.value))}
                />
            </div>
            <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => handleLength(Number(e.target.value))}
            />
        </div>
    );
}

export default LengthControl;
