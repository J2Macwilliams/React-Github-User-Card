import React from 'react';
import { makeStyles, Paper, Grid, Card, CardMedia } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    card: {
      maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    
      },
}));

function Followers(props) {
    const classes = useStyles();
    console.log(props)
        return (
            <div className={classes.root}>
                {/* <Grid container spacing={3}> */}
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            {props.data.map((peeps, id) => (
                                <Card className={classes.card}>
                                    <CardMedia
                                    className={classes.media}
                                    image={peeps.avatar_url}
                                    title={peeps.login}
                                    />
                                    <h1>{peeps.login}</h1>
                                </Card>
                                ))
                            }
                        </Paper>
                    </Grid>
                {/* </Grid> */}
            </div>
        )
}


export default Followers
