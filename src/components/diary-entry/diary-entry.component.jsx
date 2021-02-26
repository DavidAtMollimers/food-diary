import React from 'react';
import './diary-entry.styles.scss';
import TextDiaryEntry from './text-diary-entry.component';
import VisualDiaryEntry from './visual-diary-entry.component';
import Button from '@material-ui/core/Button';

class DiaryEntry extends React.Component {
    constructor() {
        super();
        this.state = {
            visual: false
        }
    }

    render() {
        let { visual } = this.state;
        return (
            <div>
                <h1> Diary Entry </h1>
                <div id='text' style={  { display: visual ? 'none' : 'block' } }>
                    <TextDiaryEntry/>
                </div>
                <div id='visual' style={ { display: visual ? 'block' : 'none'} }>
                    <VisualDiaryEntry/>
                </div>
                <div className='buttons'>
                    <Button className='submit-button' type='submit' color="primary" variant="contained">Save Entry</Button>
                    <Button className='toggle-button' color="secondary" variant="contained" onClick={() => {this.setState({visual: !visual})}}>Toggle View</Button>
                </div>
            </div>
        )
    }
};

export default DiaryEntry;