import React from 'react';

import './Button.css';

export interface ButtonProps {
    label: string;
    clickHandler: () => {}
    accent?: string;
    className?: string;
}

const accents = ['green', 'teal', 'red', 'blue', 'neutral'];

const Button = (props: ButtonProps) => {
    const accentClass = props.accent ? (accents.includes(props.accent) ? props.accent : 'neutral') : 'neutral';

    return <button className={`button ${accentClass} ${props.className}`} onClick={props.clickHandler}>{props.label}</button>;
};

export default Button;
