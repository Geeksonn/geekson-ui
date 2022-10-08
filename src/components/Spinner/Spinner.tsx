import React from 'react';

import './Spinner.css';

export interface SpinnerProps {
    color: string;
    className?: string;
}

const Spinner = (props: SpinnerProps) => {
    const color = props.color ? props.color : 'neutral';

    return <div className={`spinner ${color}Spinner ${props.className}`}></div>;
};

export default Spinner;
