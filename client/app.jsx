import React from 'react';
import Home from './pages/home';
import NavBar from './pages/navbar';
import parseRoute from './pages/parseroute';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }

  }

  render() {
      return
      (
        <>
          <NavBar/>;
        </>
      )
  }
}
