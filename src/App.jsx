import React from "react";
import PasswordDisplay from "./components/PasswordDisplay";
import TypeSelector from "./components/TypeSelector";
import RandomOptions from "./components/RandomOptions";
import LengthControl from "./components/LengthControl";
import GenerateButton from "./components/GenerateButton";
import {
    generateRandomPassword,
    generateMemorablePassword,
    generatePINPassword,
} from "./utils/passwordGenerator";

function App() {
    const [type, setType] = React.useState("random");
    const [length, setLength] = React.useState(20);

    const [upper, setUpper] = React.useState(true);
    const [lower, setLower] = React.useState(true);
    const [numbers, setNumbers] = React.useState(true);
    const [symbolMode, setSymbolMode] = React.useState("basic");
    const [customSymbols, setCustomSymbols] = React.useState("");

    const [password, setPassword] = React.useState("");
    const [animating, setAnimating] = React.useState(false);

    React.useEffect(() => {
        generatePassword();
    }, [type, length, upper, lower, numbers, symbolMode, customSymbols]);

    function generatePassword() {
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
    }

    function handleLength(value) {
        if (value < 4) value = 4;
        if (value > 64) value = 64;
        setLength(value);
    }

    return (
        <div className="container">
            <h2>Choose password type</h2>

            <TypeSelector type={type} setType={setType} />

            <PasswordDisplay password={password} animating={animating} />

            {type === "random" && (
                <RandomOptions
                    upper={upper}
                    setUpper={setUpper}
                    lower={lower}
                    setLower={setLower}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    symbolMode={symbolMode}
                    setSymbolMode={setSymbolMode}
                    customSymbols={customSymbols}
                    setCustomSymbols={setCustomSymbols}
                />
            )}

            <LengthControl length={length} handleLength={handleLength} />

            <GenerateButton generatePassword={generatePassword} />
        </div>
    );
}

export default App;
