import React from 'react';

import './GroupButton.css';

export interface GroupButtonProps {
    labels: string[];
    clickHandler: () => {};
}

const Button = (props: GroupButtonProps) => {
    return (
        <div className='buttonWrapper'>
            {props.labels.map((label, index) => {
                const buttonClass = index === 0 ? 'button active' : 'button';
                return (
                    <button className={buttonClass} onClick={props.clickHandler}>
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export default Button;
