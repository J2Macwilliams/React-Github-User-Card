import React from 'react'

import { Paper, makeStyles, Typography, Grid, Card, CardMedia, Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,

    },
    grid: {
        display: 'flex',
    },
    paper: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    card: {
        padding: 10,
        boxShadow: '0 0 5px 1px red',
        margin: 5
    },
    media: {
        height: 0,
        paddingTop: '100%',  //16:9


    },
}));


function GitHubCard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid Container  spacing={2} className={classes.grid}>
                <Paper  className={classes.paper}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={props.data.avatar_url}
                            title={props.data.login}
                            md={6} lg={12}
                        />
                        <Typography variant="h5">
                            {props.data.name}
                        </Typography>
                    </Card>

                    <Typography variant="h6">
                        {props.data.location}<br />
                        {/* {props.data.bio}<br /> */}
                        Followers : {props.data.followers}<br />
                        Following: {props.data.following}
                    </Typography>
                    <ButtonGroup
                        variant="contained"
                        aria-label="full-width contained button group"
                    >
                        <a href={props.data.github} style={{ textDecoration: 'none' }}><Button style={{ backgroundColor: 'navy', color: 'white' }}>GitHub</Button></a>
                    </ButtonGroup>

                </Paper>
            </Grid>
        </div>
    )
}

export default GitHubCard

