import React from 'react';
import './diary-entry.styles.scss';

class DiaryEntry extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            meal: '',
            title: '',
            weight: 0,
            kcal: 0,
            date: Date.now(),
            userId: props.userId
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { meal, title, weight, kcal, date, userId } = this.state;

        // store the data as an entry in the diary table of the database
        // use a try with some kind of firebase.storage call
    };

    // take the input and assign the value to the corresponding parameter of the state
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    };

    render() {
        const { meal, title, weight, kcal, date, userId } = this.state;
        // do cool frontend stuff here
        return(
            <div></div>
        )
    }
}