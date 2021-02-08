import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { auth, signInWithGoogle } from '../../components/firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log("Log-in error: ", error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <TextField
                    className='email'
                    name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    helperText='Email'
                    required
                />
                <TextField
                    className='password'
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    helperText='Password'
                    required
                />
                <Button
                    className='submit-button'
                    type='submit'
                    color='primary'
                    variant='contained'
                >Log in</Button>

            </div>
        )
    }

}

export default SignIn;