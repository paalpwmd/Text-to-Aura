import React from 'react';

interface ISwatchProps {

    color: string;
}
const Swatch = (props: ISwatchProps) => {

    const styles = {
        swatch: {
            width: "150px",
            height: "150px",
            margin: "20px",
            marginTop: "50px",
            backgroundColor: '#' + props.color,
        },

        colorBlock: {
            width: "100%",
            height: "100%",
            borderRadius: "20px",
        },
        swatchLabel: {
            marginTop: "10px",
            color: "#fff2ff",
            textAlign: 'center' as const,
        }
    }

    return (
        <div style={styles.swatch}>
            < div className='colorBlock' style={styles.colorBlock} ></div >
            <h2 style={styles.swatchLabel}>#{props.color}</h2>
        </div >
    );
};

export default Swatch;
