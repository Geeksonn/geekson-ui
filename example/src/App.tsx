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
                <br />
                <Button label='My Button' />
                <br />
                <Button label='My Very Long Button' />
                {/*['green', 'teal', 'red', 'neutral'].map((accent, index) => {
                    return <Button key={index} label='My Button' accent={accent} />;
                })*/}
            </>
        </div>
    );
};

export default App;
