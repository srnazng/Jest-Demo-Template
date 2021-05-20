import React from 'react';

const Button = ({ label, text, clickFunc }) => {
    return (
        <div>
            <p>{label}</p>
            <button onClick={clickFunc}>{text}</button>
        </div>
    );
}

export default Button;