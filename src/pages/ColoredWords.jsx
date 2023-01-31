import React from 'react'
import { useParams } from 'react-router-dom';

const ColoredWords = () => {
    let { word, txtColor, bgColor } = useParams();
    const divStyle = {
        color: txtColor,
        backgroundColor: bgColor,
    };
    return (
        <div style={divStyle}>The word is: {word}</div>
    )
}

export default ColoredWords;