import React, { Component, Fragment } from 'react';
import {
    Card,
    CardContent,
    Typography,
    withStyles
} from '@material-ui/core';

const styles = theme => ({
    details: {
        marginTop: 20,
        padding: 10
    },
    card: {
        backgroundColor: '#e5e4e2'
    }
});

class DetailsPage extends Component {
    render() {
        const { loggedUserDetails, clicked, classes } = this.props;
        return <div className={classes.details}>
            {clicked && loggedUserDetails.length > 0 && (
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        {loggedUserDetails.map(item => (
                            <Fragment key={item.id}>
                                <Typography variant="body2">
                                    Name: {item.name}
                                </Typography>
                                <Typography variant="body2">
                                    Age: {item.age}
                                </Typography>
                                <Typography variant="body2">
                                    Gender: {item.gender}
                                </Typography>
                                <Typography variant="body2">
                                    Email: {item.email}
                                </Typography>
                                <Typography variant="body2">
                                    Contact No: {item.phoneNo}
                                </Typography>
                            </Fragment>
                        ))}
                    </CardContent>
                </Card>
            )}
            {clicked && loggedUserDetails.length === 0 && (
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="caption" style={{ fontSize: '1.6rem' }}>No results found!!</Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    }
}

export default withStyles(styles, { withTheme: true })(DetailsPage);