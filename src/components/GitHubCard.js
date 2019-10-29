import React from 'react'

function GitHubCard(props) {
    return (
        <div>
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
        </div>
    )
}

export default GitHubCard

