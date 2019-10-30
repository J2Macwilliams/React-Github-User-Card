import React from 'react'
import { Button } from '@material-ui/core';


const Path = () => {
    return (
        <div>
            <a href="https://github.com/J2Macwilliams/React-Github-User-Card" style={{ textDecoration:'none'}}>
                <Button style={{border:'solid black', margin: 2}}>Code</Button>
            </a>
            <a href="https://j2macwilliams.github.io/My-Portfolio/" style={{ textDecoration:'none'}}>
                <Button style={{border:'solid black'}}>Portfolio</Button>
            </a>
            
        </div>
    )
}

export default Path
