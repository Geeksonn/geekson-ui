import React from 'react';

import { GroupButton } from './reactComponentLib';

import './App.css';

const App = () => {
    return (
        <div className='contentWrapper'>
            <GroupButton
                className='customClass'
                labels={['Catégories', 'Articles', 'Demandes']}
                clickHandler={(label: string) => console.log('clicked on: ' + label)}
            />
        </div>
    );
};

export default App;
