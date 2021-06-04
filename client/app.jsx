import React from 'react';
import NavBar from './pages/navbar';
import parseRoute from './pages/parseroute';
import AddItem from './pages/additem';
import Update from './pages/update';
import Home from './pages/home';
import Cart from './pages/cart';



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      route:parseRoute(window.location.hash)
    };
    this.renderPage = this.renderPage.bind(this);
    this.updateHash = this.updateHash.bind(this);
  }

  componentDidMount(){
    window.addEventListener('hashchange',(event)=>{
      this.setState({
        route:parseRoute(window.location.hash)
      })
    })
  }

  updateHash(){
    this.setState({
      route:hash
    })
    this.location.reload();
  }

  renderPage(){
    const { route } = this.state;
    if (route.path === "additem") {
      return <AddItem/>
    }
    if(route.path === "home" || route.path ==="") {
      return <Home/>
    }
    if(route.path === "update" ){
      return<Update/>
    }
    if(route.path === "cart"){
      return <Cart/>
    }
  }

  render(){
    return(
      <div className = "container-lg">
        <NavBar/>
        {this.renderPage()}
      </div>
    )
  }
}
