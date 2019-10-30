import React from 'react'

import { Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import { flexbox } from '@material-ui/system';

// const useStyles = makeStyles(theme => ({
//     card: {
//       maxWidth: 500,
//     //   padding: 10,
//     //   margin: 10
//     },
   
// }));

const style ={
    mainCard:{ maxWidth: 800, padding: 10, margin: 15, display:'flex'}
}
function GitHubCard(props) {
    // const classes = useStyles();
    

    return (
            <Card style={style.mainCard}>
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
                    <Grid item>
                        <ButtonGroup
                        variant="contained"
                        color="primary"
                    
                        aria-label="full-width contained primary button group"
                        >
                        
                        <a href={props.github}><Button >GitHub</Button></a>
                        </ButtonGroup>
                    </Grid>
                </div>
            </Card>
       
    )
}

export default GitHubCard

