import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' alt='logo' />
        </header>
    );
}

export default Header;