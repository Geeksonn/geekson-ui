import React from 'react';

import './Button.css';

export interface ButtonProps {
    label: string;
    //accent: string;
}

const accents = ['green', 'teal', 'red', 'neutral'];

const Button = (props: ButtonProps) => {
    //const accentClass = accents.includes(props.accent) ? props.accent : 'neutral';

    return <button className={'button '}>{props.label}</button>;
};

export default Button;
