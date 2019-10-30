import React, { Component } from 'react';
import GitHubCard from './components/GitHubCard';
import Followers from './components/Followers';

import axios from 'axios';

import { Container} from '@material-ui/core';



class App extends Component {
  
  state = {
      user: {},
      friends: []
    }

  componentDidMount() {
    
    axios
      .get('https://api.github.com/users/J2Macwilliams')
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
        axios
        .get('https://api.github.com/users/J2Macwilliams/followers')
        .then(response => {
          console.log(response.data)
          this.setState({
            friends: response.data
          })
          
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  
render(){
  return (
      <div className="App">
        
            <Container >
            <div>
                <GitHubCard
                img={this.state.user.avatar_url}
                name={this.state.user.name}
                location={this.state.user.location}
                bio={this.state.user.bio}
                followers={this.state.user.followers}
                following={this.state.user.following}
                blog={this.state.user.blog}
                github={this.state.user.html_url}
                />
              
                <Followers data={this.state.friends}/>
            </div>
            </Container>
         
      </div>
    );
}

}

export default App;
