import { Button, FormControl, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error){
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormControl className={useStyles.formControl}>

                    <TextField
                        name="displayName"
                        type="text"
                        value={displayName}
                        onChange={this.handleChange}
                        helperText="Display Name"
                        required
                    />
                    <TextField
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        helperText="Email"
                        required
                    />
                    <TextField
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        helperText="Password"
                        required
                    />
                    <TextField
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        helperText="Confirm Password"
                        required
                    />
                    <Button type="submit" color="primary" variant="contained">Save Entry</Button>

                    </FormControl>
                </form>
            </div>
        )
    }
};

export default SignUp;