import React from 'react';

import { Button, GroupButton, Spinner } from './reactComponentLib';

import './App.css';

const App = () => {
    const clickHandler = () => {
        console.log('Clicked in function');
    };
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
                    <Button label='My Very Long Button' clickHandler={clickHandler} />
                </div>
                <div className='elementWrapper'>
                    <Spinner />
                    <Spinner color='red' />
                    <Spinner color='blue' />
                    <Spinner color='green' />
                    <Spinner color='neutral' />
                </div>
            </>
        </div>
    );
};

export default App;
