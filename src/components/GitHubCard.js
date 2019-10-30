import React from 'react'

import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500,
      padding: 20,
      margin: 10
    },
}));

function GitHubCard(props) {
    const classes = useStyles();
    

    return (
        <div>
            <Card className={classes.card}>
            <img src={props.img} alt=""/>
                <div>
                    <Typography variant="h3">
                        {props.name}
                     </Typography>   
                     <Typography variant="h5">
                        <h3>{props.location}</h3>
                    </Typography>
                    <Typography variant="h6">
                        <h4>{props.bio}</h4>
                        <h4>Followers : {props.followers}</h4>
                        <h4>Following: {props.following}</h4>
                    </Typography>
                    
                    <a href={props.blog}><button>Portfolio</button></a>
                    <a href="https://github.com/J2Macwilliams/React-Github-User-Card/pull/1"><button>Code</button></a>
                    <a href={props.github}><button>GitHub</button></a>
                </div>
            </Card>
        </div>
    )
}

export default GitHubCard

