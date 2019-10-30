import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500,
      padding: 20,
    },
}));

function GitHubCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            <Card className={classes.card}>
            <img src={props.img} alt=""/>
                <div>
                    <h1>{props.name}</h1>
                    <h3>{props.location}</h3>
                    <h4>{props.bio}</h4>
                    <h4>Followers : {props.followers}</h4>
                    <h4>Following: {props.following}</h4>
                    <a href={props.blog}><button>Portfolio</button></a>
                    <a href="https://github.com/J2Macwilliams/React-Github-User-Card/pull/1"><button>Code</button></a>
                    <a href={props.github}><button>GitHub</button></a>
                </div>
            </Card>
        </div>
    )
}

export default GitHubCard

