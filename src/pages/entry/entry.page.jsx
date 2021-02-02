import React from 'react';
import './entry.styles.scss';
import DiaryEntry from '../../components/diary-entry/diary-entry.component';

const Entry = () => (
    <div className='diary-entry'>
        <h1>Enter your food</h1>
        <DiaryEntry/>
    </div>

);

export default Entry;