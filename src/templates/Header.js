import React, {Component} from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";


// const Header = () => (
//
//     <AppBar position="static">
//         <Toolbar>
//             <Typography variant="headline" color="red">
//                 GOODFILM
//             </Typography>
//         </Toolbar>
//     </AppBar>
//
//
//
// export default Header;


export default () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" >
                        GOODFILM
                </Typography>
            </Toolbar>
        </AppBar>



    )
}

// import {Button, Icon} from 'react-materialize'
//
// export default () => (
//     <Button waves='light'>
//         <Icon>thumb_up</Icon>
//     </Button>
// )