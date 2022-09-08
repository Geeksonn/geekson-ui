import React from 'react';

import { Button, GroupButton } from './reactComponentLib';

import './App.css';

const App = () => {
    return (
        <div className='contentWrapper'>
            <>
                <GroupButton
                    labels={['Catégories', 'Articles', 'Demandes']}
                    clickHandler={(label: string) => console.log('clicked on: ' + label)}
                />
                <div className='elementWrapper'>
                    <Button label='Default' />
                    {['green', 'teal', 'red', 'blue', 'neutral'].map((accent, index) => {
                        return <Button key={index} label={accent} accent={accent} />;
                    })}
                </div>
                <div className='elementWrapper'>
                    <Button label='My Very Long Button' />
                </div>
            </>
        </div>
    );
};

export default App;
