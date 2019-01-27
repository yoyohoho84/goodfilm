import React, {Component} from 'react';
import Header from "../templates/Header";
import ButtonFilm from "../btn/ButtonFilm";
import ButtonBookmark from "../btn/ButtonBookmark";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import InputSearch from "../input/InputSearch";
import SelectTags from "../select/SelectTags";
import ListItem from "../listitem/ListItem";
// import Paper from '@material-ui/core/Paper';


// export default () => {
//
//     return (
//         <div>
//             <Header/>
//             <div>
//                 <Grid
//                     container
//                     direction="row"
//                     justify="center"
//                     spacing={24}>
//                     <Grid item xs={12} >
//                         <ButtonFilm/>
//                     </Grid>
//                     <Grid item xs={12} >
//                         <ButtonBookmark/>
//                     </Grid>
//                     {/*<Grid item xs={8}>*/}
//                     {/*<ButtonFilm/>*/}
//                     {/*</Grid>*/}
//                     {/*<Grid item xs={8}>*/}
//                     {/*<ButtonBookmark/>*/}
//                     {/*</Grid>*/}
//                 </Grid>
//             </div>
//         </div>
//     );
// }


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 6,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing.unit * 1
    },
});

function FullWidthGrid(props) {
    const {classes} = props;

    return (
        <div>
            <Header/>


            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div className={classes.paper}><ButtonFilm/></div>
                        {/*<ButtonFilm className={classes.paper}/>*/}
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div className={classes.paper}><ButtonBookmark/></div>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <InputSearch/>
                    <SelectTags/>
                </Grid>

                    <div className={classes.paper}><ListItem/></div>


            </div>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);