import React from 'react';
import { render } from 'react-dom';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state =
      {
        itemId:[],
        name:[],
        image:[],
        price:[],
        qty:[]
      }
  }
  render(){

    if(this.state.length === undefined){
      return(
        <div className = "row">
          <div className = "col-12">
            <h1>No Data Entry.</h1>
          </div>
          <div className = "col">
            <a href="#additem"><button>Add Item</button></a>
          </div>
        </div>
      )
    }
  }
}
