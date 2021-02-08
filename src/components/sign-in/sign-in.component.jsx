import React from 'react';
import { Button, FormControl, makeStyles, TextField } from '@material-ui/core';
import { auth, signInWithGoogle } from '../../components/firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

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
                <form className='sign-in-form' noValidate autoComplete="off">
                    <FormControl classname={useStyles.root}>
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
                    </FormControl>
                </form>
            </div>
        )
    }

}

export default SignIn;