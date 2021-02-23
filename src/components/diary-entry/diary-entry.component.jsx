import React from 'react';
import './diary-entry.styles.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';

class DiaryEntry extends React.Component {
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
                <h1> Diary Entry </h1>
                <br/>
                <form  onSubmit={this.handleSubmit} autoComplete="off">
                <FormControl id="form-control">
                    <TextField
                        id="user-data"
                        name="date_time"
                        helperText="when did you eat?"
                        type="datetime-local"
                        defaultValue={this.state.date_time}
                        className="datetime-local"
                        onChange={this.handleChange}
                        InputLabelProps={{ shrink: true, }}
                    />
                    <div className="container">
                        <TextField
                            id="name"
                            name="dish"
                            type ="text"
                            placeholder="dish"
                            helperText="what did you eat?"
                            onChange={this.handleChange}/>
                        <TextField
                            id="numerical-value"
                            name="weight"
                            type="number"
                            placeholder="weight"
                            helperText="weight of food (g)"
                            onChange={this.handleChange}/>
                    </div>
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
                            placeholder="volume"
                            helperText="volume of drink (dl)"
                            onChange={this.handleChange}/>
                    </div>
                    <Button type='submit' color="primary" variant="contained" id="submit-button">Save Entry</Button>
                </FormControl>
                </form>
            </div>
        )
    }
};

export default DiaryEntry;