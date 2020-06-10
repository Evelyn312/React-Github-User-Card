import React from 'react';
import axios from "axios"

import './App.css';
import UsersList from './component/UsersList';
import Followers from './component/Followers';
import "./styles.css"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers:[]
    }

  };

  componentDidMount(){
    console.log("componentdidmount");

    axios
      .get("https://api.github.com/users/evelyn312")
      .then(response => {
        // console.log("response.data", response.data);
        this.setState({ user: response.data})
      })
      .catch(error => console.log(error));

      this.getFollowers();
  }

  // handleChanges = e => {
  //   console.log("change submitted", e.target.name, e.target.value);
  //   this.setState({...this.state, userLogin: e.target.value});
  // }

  getFollowers = e => {
    axios
      .get(`https://api.github.com/users/mojombo/followers`)
      .then(response => {
          console.log('get ', response.data);
          this.setState({...this.state, followers: response.data})
      }
        )
      .catch(error => console.log(error));
  }
  render(){

    return(
      <div className="mainCont">

        <UsersList users={this.state.user}/>
        <Followers followers={this.state.followers} />
      </div>
    );
  }

}

export default App;
