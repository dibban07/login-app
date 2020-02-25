import React, { Component, Fragment } from 'react';
import {
    Button,
    Paper,
    TextField,
    withStyles
} from '@material-ui/core';

const styles = () => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#e5e4e2'
    },
    textField: {
        margin: '10px 0 10px 0',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#4CBB17',
        color: 'white', 
        fontWeight: 'bold',
        '&:disabled': {
            color: 'white',
            opacity: 0.5,
            backgroundColor: '#4CBB17',
        },
        '&:hover': {
            backgroundColor: '#4CBB17',
            color: 'white', 
            fontWeight: 'bold',
        }
      }
});

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        buttonText: 'Login'
    }

    handleChange = property => event => {
            this.setState({ [property]: event.target.value });
    };

    isButtonDisabled = () => {
        const { username, password } = this.state;
        if (username === '' || password === '') {
            return true;
        }
        return false;
    };

    render() {
        const { username, password, buttonText, displayText } = this.state;
        const { classes, onHandleSubmit } = this.props;
        return (
            <Fragment>
                <Paper className={classes.root}>
                    <label>{displayText}</label>
                    <TextField
                        className={classes.textField}
                        style={{ flex: 1, width: '50%' }} 
                        type="text"
                        id="username"
                        label="Username"
                        value={username}
                        variant="outlined"
                        onChange={this.handleChange('username')}
                    />
                    <TextField
                        className={classes.textField}
                        style={{ flex: 1, width: '50%' }}
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        variant="outlined"
                        onChange={this.handleChange('password')}
                    />
                    <Button
                        disabled={this.isButtonDisabled()}
                        className={classes.button}
                        onClick={() => onHandleSubmit({ username, password })}
                    >
                        {buttonText}
                    </Button>
                </Paper>
            <div>
                
            </div>
            </Fragment>
        );
    }
}

export default withStyles( styles, { withTheme: true })(LoginPage);