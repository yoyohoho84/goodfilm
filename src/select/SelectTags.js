import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 460,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'Мистика',
        label: 'Мистика',
    },
    {
        value: 'Sci-Fi',
        label: 'Sci-Fi',
    },
    {
        value: 'Роботы',
        label: 'Роботы',
    },
    {
        value: 'Преключение',
        label: 'Преключение',
    },
    {
        value: 'Семейный',
        label: 'Семейный',
    },
    {
        value: 'Анимация',
        label: 'Анимация',
    },
    {
        value: 'Экшн',
        label: 'Экшн',
    },
    {
        value: 'Фэнтези',
        label: 'Фэнтези',
    },
    {
        value: 'Комедия',
        label: 'Комедия',
    },
    {
        value: 'Триллер',
        label: 'Триллер',
    },  {
        value: 'Хоррор',
        label: 'Хоррор',
    },  {
        value: 'Магия',
        label: 'Магия',
    },  {
        value: 'Криминал',
        label: 'Криминал',
    },  {
        value: 'Мюзикл',
        label: 'Мюзикл',
    },
    {
        value: 'Музыка',
        label: 'Музыка',
    },
    {
        value: 'Романтика',
        label: 'Романтика',
    },
    {
        value: 'История',
        label: 'История',
    },
    {
        value: 'Гонки',
        label: 'Гонки',
    },
    {
        value: 'Биография',
        label: 'Биография',
    },
    {
        value: 'Спорт',
        label: 'Спорт',
    },   {
        value: 'Война',
        label: 'Война',
    },   {
        value: 'Документальный',
        label: 'Документальный',
    },
    {
        value: 'Динозавры',
        label: 'Динозавры',
    },

];



class TextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (


                <TextField
                    id="standard-select-currency"
                    select
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('currency')}
                    style={{ marginLeft: 470 }}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Тег"
                    margin="normal"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);