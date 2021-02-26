import React from 'react';
import './visual-diary-entry.styles.scss'
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';

class VisualDiaryEntry extends React.Component {
    constructor(props){
        super(props);
        var date_time = new Date().toISOString().slice(0,16);

        this.state = {
            dish: '',
            weight: 0,
            drink: '',
            volume: 0,
            date_time,
            userId: props.userId
        }
    }

    // take the input and assign the value to the corresponding parameter of the state
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});

        console.log("name: ", name);
        console.log("value: ", value);
        // if date > current time, it will be saved anyway.
        // TBD: make sure that date-time never > current time
        // TBD: don't allow the user to select date-time > current time
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { dish, weight, drink, volume, date_time, userId } = this.state;
        console.log("dish: ", dish)
        console.log("weight: ", weight)
        console.log("drink: ", drink)
        console.log("volume: ", volume)
        console.log("date_time: ", date_time)
        console.log("userId: ", userId)

        // store the data as an entry in the diary table of the database
        // use a try with some kind of firebase.storage call
    };

    render() {
        return(
            <div>
                <form  onSubmit={this.handleSubmit} autoComplete="off">
                <FormControl id="form-control">


                    <TextField
                        name="date_time"
                        helperText="when did you eat?"
                        type="datetime-local"
                        defaultValue={this.state.date_time}
                        className="datetime-local"
                        onChange={this.handleChange}
                        InputLabelProps={{ shrink: true, }}
                    />
                    <TextField
                            id="name"
                            name="dish"
                            type ="text"
                            placeholder="dish"
                            helperText="what did you eat?"
                            onChange={this.handleChange}
                    />
                    <Slider
                        defaultValue={400}
                        step={100}
                        marks
                        min={200}
                        max={600}
                        onChange={this.handleChange}
                    />

                    <div className="container">
                        <TextField
                            id="name"
                            name="drink"
                            type ="text"
                            placeholder="drink"
                            helperText="what did you drink?"
                            onChange={this.handleChange}/>
                        <TextField
                            id="numerical-value"
                            name="volume"
                            type="number"
                            defaultValue="0"
                            placeholder="volume"
                            helperText="volume (dl)"
                            onChange={this.handleChange}/>
                    </div>
                </FormControl>
                </form>
            </div>
        )
    }
};

export default VisualDiaryEntry;