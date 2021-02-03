import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Header = (props: any) => {
    console.log('props.classes.appBar: ' + props.classes.appBar);
    return (
        <div className="header">
            <AppBar position="fixed" className={props.classes.appBar}>
                <Toolbar>
                <Typography variant="h6" noWrap>
                    Orange Work Schedule
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;