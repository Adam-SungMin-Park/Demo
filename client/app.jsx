import React from 'react';
import Home from './pages/home';
import NavBar from './pages/navbar';
import parseRoute from './pages/parseroute';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      route:parseRoute(window.location.hash)
    }
  }
  componentDidMount(){
    window.addEventListener('hashchange',(event)=>{
      this.setState({
        route:parseRoute(window.location.hash)
      })
    })
  }
  renderPage(){

  }






  render() {
    return (
      <>
      <NavBar/>;
      <Home />;
      </>

    )
  }
}
