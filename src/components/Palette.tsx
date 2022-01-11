import { randomBytes } from "crypto";
import React from 'react'
import Swatch from "./Swatch";

interface IPaletteProps {
    colors: string[]
}
let Palette = (props: IPaletteProps) => {
    const { colors } = props
    return (
        <div id='swatchPalette'>
            {colors.map((color) => {
                return <Swatch color={color} key={color} />;
            })}
        </div>
    )
}

const MemoizedPalette = React.memo(Palette);
export default MemoizedPalette
