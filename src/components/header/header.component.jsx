import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { ReactComponent as Entry } from '../../assets/pencil.svg';
import { ReactComponent as Diary } from '../../assets/notebook.svg';
import { ReactComponent as Metrics } from '../../assets/metrics.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { connect } from 'react-redux';
import './header.styles.scss';

const Header = ( { currentUser }) => (
    <div className='header'>
        <Link className='entry-container' to="/">
            <Entry className='entry'/>
        </Link>
        <div className='options'>
            <Link className='diary-container' to="/">
                <Diary className='diary'/>
            </Link>
            <Link className='metrics-container' to="/">
                <Metrics className='metrics'/>
            </Link>
            <Link className='contact-container' to="/contact">
                <Contact className='contact'/>
            </Link>

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