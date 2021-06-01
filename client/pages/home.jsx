import React from 'react';
import { render } from 'react-dom';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state =
      {
        itemId:[],
        name:[],
        price:[],
        qty:[]
      }
  }
  componentDidMount(){
    fetch('/api/Demo')
    .then(res => res.json())
    .then(res =>{
      console.log(res)
      let nameArray =[];
      let priceArray =[];
      let qtyArray =[];
      let itemIdArray =[];
      for(var i = 0 ; i < res.length ; i++){
        nameArray.push(res[i].itemName);
        priceArray.push(res[i].itemPrice);
        qtyArray.push(res[i].itemQty);
        itemIdArray.push(res[i].itemId);
      }
      this.setState({
        itemId:itemIdArray,
        name:nameArray,
        price:priceArray,
        qty:qtyArray
      })
    })
  }
  render(){
    console.log(this.state)
    if(this.state.itemId.length !==0){
      return(
        <div className = "container">
          <div className ="rowItemId">
            {this.state.itemId.map((itemId, index)=>{
              return(
                <div key = {itemId} className ="item">
                   {itemId}
                </div>
              )
            })}
          </div>
          <div className ="itemName">
            {this.state.name.map((name, index)=>{
            return(
              <div key = {index} className ="item">
                  {name}
              </div>
            )
            })}
          </div>
          <div className ="itemPrice">
            {this.state.price.map((price, index)=>{
            return(
              <div key = {index} className ="item">
                  $ {price}
              </div>
            )
            })}
          </div>
          <div className ="itemQty">
            {this.state.qty.map((qty, index)=>{
            return(
              <div key = {index} className ="item">
                 in stock {qty}
              </div>
            )
            })}
          </div>
          <div className ="updateRemoveButton">
            {this.state.itemId.map((itemId, index)=>{
            return(
              <div key = {index} className ="updateRemoveButton">
                 <a href="#update"><button>update</button></a>
                 <button>remove</button>
              </div>
            )
            })}
          </div>
        </div>
      )
    }
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
