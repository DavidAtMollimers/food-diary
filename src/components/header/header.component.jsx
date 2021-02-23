import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Entry } from '../../assets/pencil.svg';
import { ReactComponent as Diary } from '../../assets/notebook.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { connect } from 'react-redux';
import './header.styles.scss';

const Header = ( { currentUser }) => (
    <div className='header'>
        <div className='options'>
            <Link className='entry-container' to="/entry">
                <Entry className='entry'/>
            </Link>
            <Link className='diary-container' to="/">
                <Diary className='diary'/>
            </Link>
            <Link className='contact-container' to="/contact">
                <Contact className='contact'/>
            </Link>

            {/* Move the sign in/out button to the start screen and user profile */}
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>

    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);