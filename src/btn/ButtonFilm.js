import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'




export default () => {
    return (
            <Button
                component={Link}
                to="/films"
                variant="contained"
                color="primary"
                size="large"

            >
                ФИЛЬМЫ
            </Button>
    )
}