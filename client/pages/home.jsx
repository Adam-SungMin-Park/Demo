import React from 'react';
import { render } from 'react-dom';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = [
      {
        itemId:"",
        name:"",
        image:"",
        price:"",
        qty:""
      },
    ]
  }
  render(){

      return(
        <h1>No Data Entry.</h1>
      )

  }
}
