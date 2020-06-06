import React from 'react';
import axios from "axios"

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }

  };

  componentDidMount(){
    console.log("componentdidmount");

    axios
      .get("https://api.github.com/users")
      .then(response => {
        console.log("response.data", response.data);
        this.setState({})
      })
      .catch(error => console.log(error));

  }
  render(){

    return(
      <div>

      </div>
    );
  }

}

export default App;
