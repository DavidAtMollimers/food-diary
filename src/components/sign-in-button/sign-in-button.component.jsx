import React from 'react';
import './sign-in-button.styles.scss';

const SignInButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}>
        {children}
    </button>
);

export default SignInButton;