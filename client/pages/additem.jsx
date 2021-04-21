import React from 'react';

export default class AddItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemName:"",
      itemImage:"",
      itemPrice:"",
      itemQty:""
    }
  }
  render(){
    return(
      <h1>Add Item Page</h1>
    )
  }
}
