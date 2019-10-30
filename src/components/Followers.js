import React from 'react';
// import { makeStyles, Card, CardMedia } from '@material-ui/core';


// const useStyles = makeStyles(theme => ({
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//       },
// }));

function Followers(props) {
    // const classes = useStyles();
    console.log(props)
        return (
            <div>
                {props.data.map((peeps, id) => (
                    <div>
                        <img src={peeps.avatar_url} alt="" />
                        <h1>{peeps.login}</h1>
                    </div>
                ))
            }
            </div>
        )
}


export default Followers
