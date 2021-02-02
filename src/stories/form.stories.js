import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

export default {
    title: 'Diary entry mockup'
};

const useStyles  = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

var meal = '';
const HandleChange = (event) => {
    const [meal, setMeal] = useState(0);
  };

export const Default = () => (
    <div>
        <h1> Diary Entry </h1>
        <br/>
        <FormControl classname={useStyles.formControl}>
            <InputLabel id="meal-label">Meal</InputLabel>
            <Select
                labelId="meal-label"
                id="meal-dropdown"
                value={meal}
                /*onChange={HandleChange}*/
            >
                <MenuItem value={'breakfast'}>breakfast</MenuItem>
                <MenuItem value={'snack'}>snack</MenuItem>
                <MenuItem value={'lunch'}>lunch</MenuItem>
                <MenuItem value={'dinner'}>dinner</MenuItem>
            </Select>
            <TextField id="headline" type ="text" placeholder="what did you eat?"/>
            <TextField id="weight" type="number" placeholder="weight (g)"/>
            <TextField id="energy" type="number" placeholder="energy content (kcal)"/>
            <Button color="primary" variant="contained">Save Entry</Button>
        </FormControl>
    </div>
);