import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import Title from './components/Title'
import Palette from "./components/Palette";
import MemoizedCodeContainer from "./components/CodeContainer";
import MemoizedColophon from "./components/Colophon";
import MemoizedDirections from "./components/Directions";

function App() {
    const [colors, setColors] = useState<string[]>([]);
    const [hex, setHex] = useState<string[]>([]);
    const [text, setText] = useState<string>("");

    let auraInputRef = useRef<HTMLInputElement>(null);

    const genHex = useCallback(
        (hex: string[]): string[] => {
            if (hex.length === 3) {
                let newColor: string = hex.join('');
                let newColors: string[] = [...colors, newColor];
                setHex([]);
                return newColors
            }
            return colors;
        }, [hex])

    console.log("render")

    useEffect(() => {
        let newColors = genHex(hex);
        setColors(newColors);
        // setHex([]);
    }, [hex]);

    useEffect(() => {
        if (auraInputRef && auraInputRef.current) {
            auraInputRef.current.focus();
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value;
        setText(inputText);
        for (let n = 0, l = inputText.length; n < l; n++) {
            let newHex = Number(inputText.charCodeAt(n)).toString(16);
            let newHexArr = [...hex, newHex];
            setHex(newHexArr);
        }
    };

    return (
        <div className='App'>
            <Title />
            <MemoizedDirections />

            <div className='inputcontainer box'>
                <input
                    type='text'
                    name=''
                    ref={auraInputRef}
                    id='auraInput'
                    onChange={handleChange}
                    value={text}
                    placeholder='Enter Text Here'
                />
            </div>
            <Palette colors={colors} />
            <MemoizedCodeContainer />
            <MemoizedColophon />
        </div>
    );
}

export default App;
