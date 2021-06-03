import React from 'react';
import { render } from 'react-dom';
export default class NavBar extends React.Component{

  constructor(props){
    super(props)
    this.state= {
    }
    this.handleReload = this.handleReload.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReload(){
    window.location.reload()
  }

  componentDidMount(){
    if(this.state.userId !==null){
      this.setState({
        view:"yes"
      })
    }
  }
  handleClick() {
    document.querySelector('.navbar-collapse').className = 'navbar-collapse collapse'
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Demo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#additem" onClick = {this.handleClick}>Add Item</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#update" onClick={this.handleClick}>Update</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart" onClick={this.handleClick}>Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
