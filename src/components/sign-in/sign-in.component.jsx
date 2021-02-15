import React from 'react';
import { Button, FormControl, makeStyles, TextField, Box } from '@material-ui/core';
import { auth, signInWithGoogle } from '../../components/firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    },
}));

const borderProps = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    padding: '40px',
};

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
                    <Box borderLeft={1} borderTop={1} borderBottom={1} {...borderProps}>
                        <FormControl className={useStyles.root}>
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
                            className='email-login-button'
                            type='submit'
                            color='primary'
                            variant='contained'
                        >Log in</Button>
                        <Button
                            className='google-login-button'
                            onClick={signInWithGoogle}
                            color='secondary'
                            variant='contained'
                        >Log in with Google</Button>
                        </FormControl>
                    </Box>
                </form>
            </div>
        )
    }

}

export default SignIn;