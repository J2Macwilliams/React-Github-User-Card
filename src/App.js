import React, { Component } from 'react';
import GitHubCard from './components/GitHubCard';
import Followers from './components/Followers';
import Path from './components/Path';

import axios from 'axios';

import { Grid, Paper, TextField, Button } from '@material-ui/core';


class App extends Component {

  state = {
    user: {},
    name: '',
    friends: []
  }

  componentDidMount() {

    axios
      .get('https://api.github.com/users/J2Macwilliams')
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data,

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

  handleChanges = e => {
    this.setState({
      name: e.target.value
    });

  };

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then(res => {


        this.setState({
          user: res.data
        })
        axios
          .get(`https://api.github.com/users/${this.state.name}/followers`)
          .then(res => {


            this.setState({
              friends: res.data
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));


  };

  render() {
    return (
      <div className="App">
        <Path />
        <Grid container  >
          <Paper style={{ backgroundColor: 'dodgerblue', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, width: '100%' }}>

            <form noValidate autoComplete="off" style={{display: 'flex', flexDirection:'column',marginBottom: 10 }} >

              <TextField
                id="outlined-basic"
                label="username"
                margin="normal"
                variant="outlined"
                value={this.state.name}
                onChange={this.handleChanges}
              />
              <Button onClick={this.getUser} style={{ backgroundColor: '#b93333', color: 'white' }}>submit</Button>

            </form>

            <GitHubCard
              data={this.state.user}
            />

          </Paper>
          <Paper style={{ backgroundColor: '#b93333', margin: 10, padding: 10, width: '100%' }}>
            <Followers data={this.state.friends} />
          </Paper>
        </Grid>

      </div>
    );
  }

}

export default App;
