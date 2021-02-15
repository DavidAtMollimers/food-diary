import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormControl, MenuItem } from '@material-ui/core';

const useStyles  = makeStyles((theme) => ({
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },
}));

const mealTypes = [
    {
        id: 1,
        meal: 'breakfast'
    },
    {
        id: 2,
        meal: 'snack'
    },
    {
        id: 3,
        meal: 'lunch'
    },
    {
        id: 4,
        meal: 'dinner'
    },
];

class DiaryEntry extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            meal: 'breakfast',
            dish: '',
            weight: 0,
            kcal: 0,
            date: Date.now(),
            userId: props.userId
        }
    }

    // take the input and assign the value to the corresponding parameter of the state
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { meal, dish, weight, kcal, date, userId } = this.state;
        // store the data as an entry in the diary table of the database
        // use a try with some kind of firebase.storage call
    };

    render() {
        return(
            <div>
                <h1> Diary Entry </h1>
                <br/>
                <form  onSubmit={this.handleSubmit} autoComplete="off">
                <FormControl className={useStyles.formControl}>
                    <TextField
                        id="meal-dropdown"
                        select
                        label="Meal"
                        helperText="Choose a meal"
                        value={this.state.meal}
                        name="meal"
                        onChange={this.handleChange}
                    >
                        {mealTypes.map((mt) => (
                            <MenuItem name={mt.meal} value={mt.meal}>
                                {mt.meal}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="dish"
                        type ="text"
                        placeholder="dish"
                        helperText="what did you eat?"
                        onChange={this.handleChange}/>
                    <TextField
                        name="weight"
                        type="number"
                        placeholder="weight"
                        helperText="weight of food (g)"
                        onChange={this.handleChange}/>
                    <TextField
                    name="energy"
                    type="number"
                    placeholder="energy"
                    helperText="energy content of the food (kcal)"
                    onChange={this.handleChange}/>
                    <Button type='submit' color="primary" variant="contained">Save Entry</Button>
                </FormControl>
                </form>
            </div>
        )
    }
};

export default DiaryEntry;