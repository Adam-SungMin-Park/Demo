import React from 'react';
import Cart from './cart'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [{
        itemId:"",
        itemName:"",
        itemPrice:"",
        itemQty:""
      }],
      cart: [{
        itemId:"",
        itemName:"",
        itemPrice:"",
        itemQty:""
      }]
  }
  this.handleQtyChange = this.handleQtyChange.bind(this);
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

  handleQtyChange(e,index){
    let cartItem = this.state.items[index]
    cartItem.itemQty = e.target.value;
    this.setState({
      cart: cartItem
    })
  }


render(){
  console.log(this.state.items)
  console.log(this.state.cart)

   if(this.state.items.length !==0){
      return(
        <div className = "container-lg">
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
                 {items.itemPrice}
              </div>
               <div className = "itemQty">
                In Stock
                 {items.itemQty}
              </div>
              <div className ="buttons">
                <input type= "number" className = "qtyInput" min ="1" placeholder = "1" onChange = {e => this.handleQtyChange(e,index)} />
                <button onClick = {e=> {this.handleUpdate(e,index)}}>Add to cart</button>

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
