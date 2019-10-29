import React from 'react'

function Followers(props) {
        return (
            <div>
                <img src={props.img} alt=""/>
                <h1>{props.name}</h1>
            </div>
        )
}


export default Followers
