import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState('');
    const glowGreen = (color) => {
        setColor(color);
    }

    return (
        <div className="headybody container">
            <div className="head"></div>
            <div className="body">
                <button className={`lights btn btn-danger mx-5 glow-${color == 'red' ? color : ''}`} onClick={() => setColor('red')}></button>
                <button className={`lights btn btn-warning mx-5 glow-${color == 'yellow' ? color : ''}`} onClick={() => setColor('yellow')}></button>
                <button className={`lights btn btn-success glow-${color == 'green' ? color : ''}`} onClick={() => setColor('green')}></button>
            </div>
        </div>
    );
};
