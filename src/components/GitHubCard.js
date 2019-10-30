import React from 'react'

import { Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Card from '@material-ui/core/Card';


const style ={
    mainCard:{ maxWidth: 800, padding: 10, margin: 15, display:'flex'}
}
function GitHubCard(props) {
    
    return (
            <Card style={style.mainCard}>
                <img src={props.img} alt=""/>
                <div>
                    <Typography variant="h3">
                        {props.name}
                        </Typography>    
                        <Typography variant="h5">
                        {props.location}
                    </Typography>
                    <Typography variant="h6">
                        {props.bio}<br/>
                        Followers : {props.followers}<br/>
                        Following: {props.following}
                    </Typography>
                    <Grid item>
                        <ButtonGroup
                        variant="contained"
                        aria-label="full-width contained button group"
                        >
                        
                        <a href={props.github} style={{ textDecoration:'none'}}><Button style={{backgroundColor:'dodgerblue', color:'white'}}>GitHub</Button></a>
                        </ButtonGroup>
                    </Grid>
                </div>
            </Card>
       
    )
}

export default GitHubCard

