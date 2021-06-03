import React from 'react';
import { render } from 'react-dom';
import Update from './update'
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [{
        itemId:"",
        name:"",
        price:"",
        qty:""
      }]
    }
      this.handleChangeQty = this.handleChangeQty.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
  }

  handleUpdate(){
    fetch('/api/Demo', {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    })
  }
  handleRemove(){
    fetch('/api/Demo')
  }

  handleChangeQty(e,index){
    let currentQty = [...this.state.items]
    let newQty = Number(e.target.value);
    currentQty[index].itemQty = newQty
    this.setState({
      items:currentQty
    })
    console.log(this.state)
  }


  handleChangePrice(e,index){
    let currentPrice = [...this.state.items]
    let newQty = Number(e.target.value);
    currentPrice[index].itemPrice =  newQty;
    this.setState({
      items:currentPrice
    })
    console.log(this.state)
  }

  componentDidMount(){
    fetch('/api/Demo')
    .then(res => res.json())
    .then(res =>{
      console.log(res)
      let itemList = [];
      for(var i = 0 ; i < res.length ; i++){
        itemList.push(res[i]);
      }
      this.setState({
        items: itemList
      })
    })
  }
  render(){
    const {itemId , price, name , qty} = this.state.items
    const {items} = this.state.items

    if(this.state.items.length !==0){
      return(
        <div className = "container">
          <div className = "row">
          {this.state.items.map((items, index )=>{
            return(
              <div className ="itemsRow" key = {items.itemId}>
                {items.itemId}
              <div className = "itemName">
                {items.itemName}
              </div>
               <div className = "itemPrice">
                  $
                 <input onChange = {e=>{this.handleChangePrice(e,index)}}type = "number" defaultValue = {items.itemPrice}/>
              </div>
               <div className = "itemQty">
                In Stock
                <input onChange = {e => {this.handleChangeQty(e,index)}}type = "number" className = "qtyInput" defaultValue = {items.itemQty}/>
              </div>
              <div className ="buttons">
                <button>Update</button>
                <button>Remove</button>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      )
    }
    if(this.state.items.length === undefined){
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
