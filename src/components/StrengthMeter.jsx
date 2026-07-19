import "./StrengthMeter.css";

function StrengthMeter({ strength }) {
    const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#10b981"];

    return (
        <div className="strength-meter">
            <div className="strength-bar-track">
                <div
                    className="strength-bar-fill"
                    style={{
                        width: `${strength.percent}%`,
                        backgroundColor: colors[strength.score],
                    }}
                />
            </div>
            <span
                className="strength-label"
                style={{ color: colors[strength.score] }}
            >
                {strength.label}
            </span>
        </div>
    );
}

export default StrengthMeter;
