import React from 'react';

import './Spinner.css';

export interface SpinnerProps {
    color: string;
}

const Spinner = (props: SpinnerProps) => {
    const color = props.color ? props.color : 'neutral';

    return <div className={`spinner ${color}Spinner`}></div>;
};

export default Spinner;
