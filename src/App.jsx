import { useReducer, useCallback, useEffect, useState, useMemo } from "react";
import "./App.css";
import PasswordDisplay from "./components/PasswordDisplay";
import TypeSelector from "./components/TypeSelector";
import RandomOptions from "./components/RandomOptions";
import LengthControl from "./components/LengthControl";
import GenerateButton from "./components/GenerateButton";
import StrengthMeter from "./components/StrengthMeter";
import {
    generateRandomPassword,
    generateMemorablePassword,
    generatePINPassword,
    getPasswordStrength,
} from "./utils/passwordGenerator";

const initialState = {
    type: "random",
    length: 20,
    upper: true,
    lower: true,
    numbers: true,
    symbolMode: "basic",
    customSymbols: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_TYPE":
            return { ...state, type: action.value };
        case "SET_LENGTH": {
            let value = action.value;
            if (value < 4) value = 4;
            if (value > 64) value = 64;
            return { ...state, length: value };
        }
        case "SET_UPPER":
            return { ...state, upper: action.value };
        case "SET_LOWER":
            return { ...state, lower: action.value };
        case "SET_NUMBERS":
            return { ...state, numbers: action.value };
        case "SET_SYMBOL_MODE":
            return { ...state, symbolMode: action.value };
        case "SET_CUSTOM_SYMBOLS":
            return { ...state, customSymbols: action.value };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [password, setPassword] = useState("");
    const [animating, setAnimating] = useState(false);

    const { type, length, upper, lower, numbers, symbolMode, customSymbols } = state;

    const generatePassword = useCallback(() => {
        let result = "";

        if (type === "pin") {
            result = generatePINPassword(length);
        } else if (type === "memorable") {
            result = generateMemorablePassword(length);
        } else if (type === "random") {
            result = generateRandomPassword(
                length,
                upper,
                lower,
                numbers,
                symbolMode,
                customSymbols,
            );
        }

        setPassword(result);
        setAnimating(true);
        setTimeout(() => setAnimating(false), 200);
    }, [type, length, upper, lower, numbers, symbolMode, customSymbols]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const strength = useMemo(() => getPasswordStrength(password), [password]);

    return (
        <div className="container">
            <div className="app-header">
                <svg className="lock-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <h1>Password Generator</h1>
                <p className="subtitle">Generate strong, secure passwords instantly</p>
            </div>

            <TypeSelector
                type={type}
                setType={(v) => dispatch({ type: "SET_TYPE", value: v })}
            />

            <PasswordDisplay password={password} animating={animating} />

            <StrengthMeter strength={strength} />

            {type === "random" && (
                <RandomOptions
                    upper={upper}
                    setUpper={(v) => dispatch({ type: "SET_UPPER", value: v })}
                    lower={lower}
                    setLower={(v) => dispatch({ type: "SET_LOWER", value: v })}
                    numbers={numbers}
                    setNumbers={(v) => dispatch({ type: "SET_NUMBERS", value: v })}
                    symbolMode={symbolMode}
                    setSymbolMode={(v) => dispatch({ type: "SET_SYMBOL_MODE", value: v })}
                    customSymbols={customSymbols}
                    setCustomSymbols={(v) => dispatch({ type: "SET_CUSTOM_SYMBOLS", value: v })}
                />
            )}

            <LengthControl
                length={length}
                handleLength={(v) => dispatch({ type: "SET_LENGTH", value: v })}
            />

            <GenerateButton generatePassword={generatePassword} />
        </div>
    );
}

export default App;
