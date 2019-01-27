import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '480px',
        backgroundColor: theme.palette.background.paper,
        marginLeft: 400,
        borderColor:"text.primary"


    },
});

function ListDividers(props) {
    const { classes } = props;
    return (
        <List component="nav" className={classes.root}>
            <ListItem button>
                <ListItemText primary="Мир Дикого запада" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Доктор Кто" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Звёздные войны: Войны Клонов" />
            </ListItem>

        </List>
    );
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);