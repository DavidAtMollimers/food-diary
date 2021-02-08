import React from 'react';
import './sign-in-or-up.styles.scss';

import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInOrUpPage = () => (
    <div className='sign-in-or-up'>
        <h2>I already have an account</h2>
        <SignIn/>
        <br></br>
        <h2>Create an account</h2>
        <SignUp/>
    </div>
);

export default SignInOrUpPage;