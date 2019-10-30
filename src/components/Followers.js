import React from 'react';
import { makeStyles, Typography, Grid, Card, CardMedia } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        
      },
      
    card: {
      maxWidth: 300,
      margin: 7
      
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
                <Grid container spacing={2}>
                    
                            {props.data.map((peeps, id) => (
                                <Grid Item xs={3}>
                                    <Card key={id} className={classes.card}>
                                        <CardMedia
                                        className={classes.media}
                                        image={peeps.avatar_url}
                                        title={peeps.login}
                                        />
                                        <Typography variant="h4" >
                                            {peeps.login}
                                        </Typography>
                                    </Card>
                                </Grid>
                                ))
                            }
                </Grid>
            </div>
        )
}


export default Followers
