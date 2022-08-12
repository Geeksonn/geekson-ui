import React from 'react';

import './GroupButton.css';

export interface GroupButtonProps {
    labels: string[];
    clickHandler: (label: string) => any;
    className: string;
}

const GroupButton = (props: GroupButtonProps) => {
    const handleClick = (event: any) => {
        if (!event.target.classList.contains('active')) {
            const buttons = document.getElementById('btnWrapper')?.children;
            if (buttons) {
                let found = false;

                for (var i = 0; i < buttons.length && !found; i++) {
                    const btn = buttons[i];

                    if (btn.classList.contains('active')) {
                        btn.classList.remove('active');
                        found = true;
                    }
                }
            }

            event.target.classList.add('active');

            props.clickHandler(event.target.innerHTML);
        }
    };
    return (
        <div id='btnWrapper' className={'buttonWrapper ' + props.className}>
            {props.labels.map((label, index) => {
                const buttonClass = index === 0 ? 'button active' : 'button';
                return (
                    <button key={'btn#' + index} className={buttonClass} onClick={handleClick}>
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export default GroupButton;
