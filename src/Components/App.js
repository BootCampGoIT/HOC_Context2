import React, { Component } from 'react';
import Cards from './cards/Cards';
// import User from './user/User';
import User from './user/User';


// import { result } from './hock/Hock';

// const userData = result();
// console.log(userData);
// userData.course = "BC29";
// console.log(userData.name)


class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Cards />
        <User  />
      </>
    );
  }
}

export default App;